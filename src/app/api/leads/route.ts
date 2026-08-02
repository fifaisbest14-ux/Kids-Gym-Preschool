import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase";
import { sendLeadEmail } from "@/lib/mailer";
import { sendMetaCAPILead } from "@/lib/capi";
import { validateWhatsAppNumber } from "@/lib/utils";

const leadSchema = z.object({
  parent_name: z.string().min(2, "Parent name is required"),
  whatsapp: z.string().refine(validateWhatsAppNumber, "Invalid Pakistani WhatsApp number"),
  email: z.string().email().nullable().optional(),
  child_age: z.string().min(1, "Child age is required"),
  programs: z.array(z.string()).min(1, "Select at least one program"),
  area: z.string().min(1, "Area is required"),
  preferred_time: z.string().nullable().optional(),
  message: z.string().nullable().optional(),
  consent: z.boolean().refine((val) => val === true, "Consent required"),
  honeypot: z.string().optional(),
  rendered_at: z.number().optional(),
  // Attribution
  utm_source: z.string().nullable().optional(),
  utm_medium: z.string().nullable().optional(),
  utm_campaign: z.string().nullable().optional(),
  utm_term: z.string().nullable().optional(),
  utm_content: z.string().nullable().optional(),
  gclid: z.string().nullable().optional(),
  fbclid: z.string().nullable().optional(),
  landing_page: z.string().nullable().optional(),
  referrer: z.string().nullable().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot check for bots
    if (body.honeypot && body.honeypot.trim() !== "") {
      console.warn("[Spam Blocked] Honeypot field was filled.");
      return NextResponse.json({ success: true, message: "Lead received" });
    }

    // 2. Sub-1.5s timestamp check for automated scripts
    if (body.rendered_at && Date.now() - body.rendered_at < 1500) {
      console.warn("[Spam Blocked] Submission too fast (< 1.5s).");
      return NextResponse.json({ success: true, message: "Lead received" });
    }

    // 3. Schema validation
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const leadData = parsed.data;
    const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // Client IP & User Agent
    const clientIp = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const ipHash = crypto.createHash("sha256").update(clientIp).digest("hex");

    // 4. Insert into Supabase `leads` table
    let dbSuccess = false;
    try {
      const { error: dbError } = await supabaseAdmin.from("leads").insert({
        parent_name: leadData.parent_name,
        whatsapp: leadData.whatsapp,
        email: leadData.email || null,
        child_age: leadData.child_age,
        programs: leadData.programs,
        area: leadData.area,
        preferred_time: leadData.preferred_time || null,
        message: leadData.message || null,
        consent: leadData.consent,
        utm_source: leadData.utm_source || null,
        utm_medium: leadData.utm_medium || null,
        utm_campaign: leadData.utm_campaign || null,
        utm_term: leadData.utm_term || null,
        utm_content: leadData.utm_content || null,
        gclid: leadData.gclid || null,
        fbclid: leadData.fbclid || null,
        landing_page: leadData.landing_page || null,
        referrer: leadData.referrer || null,
        user_agent: userAgent,
        ip_hash: ipHash,
        status: "new",
      });

      if (dbError) {
        console.error("[Supabase Insert Error]", dbError.message);
      } else {
        dbSuccess = true;
      }
    } catch (dbEx) {
      console.error("[Supabase Exception]", dbEx);
    }

    // 5. Build task promises for Email, Google Sheets Webhook, and Meta CAPI
    const tasks: Promise<any>[] = [];

    // Email Task (Gmail SMTP)
    tasks.push(
      sendLeadEmail({
        parent_name: leadData.parent_name,
        whatsapp: leadData.whatsapp,
        email: leadData.email,
        child_age: leadData.child_age,
        programs: leadData.programs,
        area: leadData.area,
        preferred_time: leadData.preferred_time,
        message: leadData.message,
        utm_source: leadData.utm_source,
        utm_campaign: leadData.utm_campaign,
        gclid: leadData.gclid,
      })
    );

    // Google Sheets Webhook Task (if configured in env)
    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetsWebhookUrl) {
      tasks.push(
        fetch(googleSheetsWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            parent_name: leadData.parent_name,
            whatsapp: leadData.whatsapp,
            email: leadData.email || "",
            child_age: leadData.child_age,
            programs: leadData.programs.join(", "),
            area: leadData.area,
            preferred_time: leadData.preferred_time || "",
            message: leadData.message || "",
            gclid: leadData.gclid || "",
            utm_source: leadData.utm_source || "",
            utm_campaign: leadData.utm_campaign || "",
          }),
        }).catch((err) => console.error("[Google Sheets Webhook Error]", err))
      );
    }

    // Meta CAPI Task
    tasks.push(
      sendMetaCAPILead({
        event_id: eventId,
        whatsapp: leadData.whatsapp,
        email: leadData.email,
        client_ip: clientIp,
        user_agent: userAgent,
      })
    );

    // 6. Await all async tasks to prevent Vercel serverless freeze
    await Promise.allSettled(tasks);

    return NextResponse.json({
      success: true,
      event_id: eventId,
      db_status: dbSuccess ? "saved" : "error_logged",
      message: "Lead submitted successfully",
    });
  } catch (error: any) {
    console.error("[API Lead Handler Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
