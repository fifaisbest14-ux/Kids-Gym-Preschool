import crypto from "crypto";

export async function sendMetaCAPILead(payload: {
  event_id: string;
  whatsapp: string;
  email?: string | null;
  client_ip?: string;
  user_agent?: string;
}): Promise<boolean> {
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const apiToken = process.env.FB_CAPI_TOKEN;

  if (!pixelId || !apiToken) {
    // Graceful skip if Meta credentials are not configured yet
    return false;
  }

  try {
    const cleanPhone = payload.whatsapp.replace(/\D/g, "");
    const formattedPhone = cleanPhone.startsWith("92")
      ? cleanPhone
      : cleanPhone.startsWith("0")
      ? `92${cleanPhone.substring(1)}`
      : `92${cleanPhone}`;

    const hashedPhone = crypto.createHash("sha256").update(formattedPhone).digest("hex");
    const hashedEmail = payload.email
      ? crypto.createHash("sha256").update(payload.email.toLowerCase().trim()).digest("hex")
      : undefined;

    const eventData = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          event_id: payload.event_id,
          action_source: "website",
          user_data: {
            ph: [hashedPhone],
            em: hashedEmail ? [hashedEmail] : undefined,
            client_ip_address: payload.client_ip,
            client_user_agent: payload.user_agent,
          },
          custom_data: {
            value: 8000,
            currency: "PKR",
          },
        },
      ],
    };

    const res = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${apiToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    return res.ok;
  } catch (error) {
    console.error("[Meta CAPI Error]", error);
    return false;
  }
}
