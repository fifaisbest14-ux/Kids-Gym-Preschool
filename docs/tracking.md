# Analytics & Conversion Tracking Documentation

This document outlines the tracking layer implementation for **Kids' Gym Preschool & Daycare**, including Google Tag Manager (GTM), Google Consent Mode v2, Meta Pixel, Meta Conversions API (CAPI), and Google Ads conversion tracking.

---

## Environment Variables Required

Add these keys to `.env.local` and your Vercel Project Settings:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX      # Tag Manager container ID
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX     # Google Analytics 4 Stream ID
NEXT_PUBLIC_FB_PIXEL_ID=            # Meta Pixel ID
FB_CAPI_TOKEN=                      # Meta Conversions API Access Token
NEXT_PUBLIC_ADS_ID=AW-XXXXXXXXX     # Google Ads ID
NEXT_PUBLIC_ADS_LABEL=              # Google Ads Lead Conversion Label
```

---

## Google Consent Mode v2

Google Consent Mode v2 is initialized in `src/app/layout.tsx` before GTM loads:

```javascript
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});
```

When a user clicks "Accept" in `src/components/layout/ConsentBanner.tsx`, consent is updated to `granted`.

---

## Documented dataLayer Events

| Event Name | Trigger Location | Parameters Pushed | Purpose / Destination |
|---|---|---|---|
| `generate_lead` | `LeadForm.tsx` (on HTTP 200 response) | `program`, `child_age`, `area`, `value: 8000`, `currency: 'PKR'` | Primary conversion event for GA4, Meta Pixel (`Lead`), & Google Ads |
| `whatsapp_click` | `TrackingProvider.tsx` (any `wa.me` link click) | `location`, `href` | Tracks WhatsApp enquiries across header, footer, & mobile bar |
| `phone_click` | `TrackingProvider.tsx` (any `tel:` link click) | `phone_number` | Tracks direct phone calls |
| `form_start` | `LeadForm.tsx` (on first field interaction) | None | Measures form start conversion funnel rate |
| `view_program` | `/programs` page & program cards | `program_name` | Tracks program interest depth |
| `gallery_open` | `/gallery` page Lightbox modal | `image_id` | Tracks gallery engagement |
| `map_click` | `TrackingProvider.tsx` (Google Maps link clicks) | `href` | Tracks directions intent |
| `scroll_75` | `TrackingProvider.tsx` (75% page scroll depth) | None | Measures page engagement |

---

## Meta Conversions API (CAPI)

In addition to client-side dataLayer tracking, lead form submissions execute a server-side dispatch to Meta Conversions API via `src/lib/capi.ts`:

- **Event Name:** `Lead`
- **Value:** `8000 PKR`
- **User Data:** SHA-256 Hashed WhatsApp Number (`ph`), SHA-256 Hashed Email (`em`), Client IP, User Agent.
- **Deduplication:** A shared `event_id` (e.g. `lead_17000000_abc12`) is attached to both client-side and CAPI events.

---

## Recommended GTM Triggers & Tags Setup

1. **GA4 Event Tag — `generate_lead`:**
   - Event Name: `generate_lead`
   - Trigger: Custom Event -> `generate_lead`
   - Parameters: `program`, `child_age`, `area`, `value`, `currency`

2. **Google Ads Lead Conversion Tag:**
   - Conversion ID: `NEXT_PUBLIC_ADS_ID`
   - Conversion Label: `NEXT_PUBLIC_ADS_LABEL`
   - Value: `8000` / Currency: `PKR`
   - Trigger: Custom Event -> `generate_lead`

3. **Meta Pixel Lead Tag:**
   - Standard Event: `Lead`
   - Event ID: `{{event_id}}`
   - Trigger: Custom Event -> `generate_lead`
