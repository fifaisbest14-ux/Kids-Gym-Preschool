import nodemailer from "nodemailer";
import { BUSINESS } from "@/lib/constants";

export interface LeadEmailPayload {
  parent_name: string;
  whatsapp: string;
  email?: string | null;
  child_age: string;
  programs: string[];
  area: string;
  preferred_time?: string | null;
  message?: string | null;
}

export async function sendLeadEmail(lead: LeadEmailPayload): Promise<boolean> {
  const smtpUser = process.env.GMAIL_SMTP_USER || "fifaisbest14@gmail.com";
  const smtpPass = process.env.GMAIL_SMTP_APP_PASSWORD;
  const toInbox = process.env.LEAD_DELIVERY_INBOX || "fifaisbest14@gmail.com";

  if (!smtpPass) {
    console.warn("[Mailer Warning] GMAIL_SMTP_APP_PASSWORD is not set. Skipping real SMTP email sending.");
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const cleanWhatsapp = lead.whatsapp.replace(/\D/g, "");
    const formattedWhatsapp = cleanWhatsapp.startsWith("92")
      ? cleanWhatsapp
      : cleanWhatsapp.startsWith("0")
      ? `92${cleanWhatsapp.substring(1)}`
      : `92${cleanWhatsapp}`;

    const waReplyUrl = `https://wa.me/${formattedWhatsapp}?text=${encodeURIComponent(
      `Assalam-o-Alaikum ${lead.parent_name}, thank you for contacting ${BUSINESS.name}! Here is the fee details for your ${lead.child_age} year old...`
    )}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #FFF4E6; padding: 24px; border-radius: 12px; background-color: #FFFCF7;">
        <h2 style="color: #E8622C; margin-top: 0;">🎉 New Website Enquiry!</h2>
        <p style="font-size: 14px; color: #2C2418;">You have received a new parent lead from <strong>${BUSINESS.name}</strong> website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; font-weight: bold; color: #2C2418; width: 35%;">Parent Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; color: #2C2418;">${lead.parent_name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; font-weight: bold; color: #2C2418;">WhatsApp Number:</td>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; color: #E8622C; font-weight: bold;">
              <a href="${waReplyUrl}" style="color: #E8622C; text-decoration: none;">${lead.whatsapp} (Click to Chat)</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; font-weight: bold; color: #2C2418;">Child Age:</td>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; color: #2C2418;">${lead.child_age} years</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; font-weight: bold; color: #2C2418;">Programs Interested:</td>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; color: #2E9B8F; font-weight: bold;">${lead.programs.join(", ")}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; font-weight: bold; color: #2C2418;">Area in Lahore:</td>
            <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; color: #2C2418;">📍 ${lead.area}</td>
          </tr>
          ${
            lead.preferred_time
              ? `<tr>
                  <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; font-weight: bold; color: #2C2418;">Preferred Visit:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; color: #2C2418;">${lead.preferred_time}</td>
                </tr>`
              : ""
          }
          ${
            lead.message
              ? `<tr>
                  <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; font-weight: bold; color: #2C2418;">Message:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; color: #2C2418;">${lead.message}</td>
                </tr>`
              : ""
          }
          ${
            lead.email
              ? `<tr>
                  <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; font-weight: bold; color: #2C2418;">Email:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #FFF4E6; color: #2C2418;">${lead.email}</td>
                </tr>`
              : ""
          }
        </table>

        <div style="text-align: center; margin-top: 24px;">
          <a href="${waReplyUrl}" style="background-color: #25D366; color: white; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block;">
            💬 Reply to ${lead.parent_name} on WhatsApp
          </a>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Kids' Gym Website" <${smtpUser}>`,
      to: toInbox,
      subject: `New enquiry — ${lead.parent_name}, ${lead.area}, child ${lead.child_age}`,
      html: htmlContent,
    });

    return true;
  } catch (error) {
    console.error("[Mailer Error]", error);
    return false;
  }
}
