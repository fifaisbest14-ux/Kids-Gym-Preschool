# Kids' Gym Preschool & Daycare — Lahore Website

Production-ready, high-converting Next.js website for **Kids' Gym Preschool & Daycare** in Model Town, Lahore, Pakistan.

Built with **Next.js App Router**, **TypeScript Strict Mode**, **Tailwind CSS**, **Supabase Postgres**, **Nodemailer / Gmail SMTP**, and **Google Tag Manager**.

---

## Key Features

- **Conversion Architecture:** Dual CTA hierarchy (`Book a Free Visit` primary, `Trial Class — Rs 1,500` secondary, `Get 2026 fees on WhatsApp` lead magnet).
- **Sticky Mobile Action Bar:** Fixed bottom bar for instant `Call`, `WhatsApp`, and `Book a Visit` actions on mobile devices (< 768px).
- **Lahore Area-Tuned Lead Form:** Single-screen 8-field form with Pakistani WhatsApp validation (`^(\+92|0)?3\d{9}$`) and Model Town proximity area ordering.
- **Bot Protection & Security:** Honeypot field check + sub-1.5s submission speed check. Zero CAPTCHA friction.
- **Backend Infrastructure:** Supabase `leads` table with RLS, Nodemailer lead notifications over Gmail SMTP (`fifaisbest14@gmail.com`), and server-side Meta Conversions API (CAPI) deduplication.
- **Analytics & Consent:** Google Consent Mode v2 default initialization, 8 documented dataLayer events, GTM container integration.
- **Local SEO & Schema:** Character-for-character NAP matching, embedded Google Maps, ChildCare LocalBusiness JSON-LD schema, dynamic XML sitemap, and robots.txt.

---

## Local Development Setup

1. **Clone repository & install dependencies:**
   ```bash
   git clone <repo-url>
   cd "Kids' Gym Preschool"
   npm install
   ```

2. **Configure Environment Variables:**
   Copy `.env.example` to `.env.local` and add your keys:
   ```bash
   cp .env.example .env.local
   ```

   ```env
   # Tracking IDs
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_FB_PIXEL_ID=
   FB_CAPI_TOKEN=
   NEXT_PUBLIC_ADS_ID=AW-XXXXXXXXX
   NEXT_PUBLIC_ADS_LABEL=

   # Supabase Credentials
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-key

   # Lead Email Delivery (Gmail SMTP)
   GMAIL_SMTP_USER=fifaisbest14@gmail.com
   GMAIL_SMTP_APP_PASSWORD=your-google-app-password
   LEAD_DELIVERY_INBOX=fifaisbest14@gmail.com
   ```

3. **Database Migration:**
   Open the Supabase SQL Editor and run the script in `docs/supabase_schema.sql`.

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## Vercel & Supabase Deployment Runbook

1. **GitHub Setup:**
   Push code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production website build"
   git remote add origin git@github.com:username/kids-gym-preschool.git
   git push -u origin main
   ```

2. **Vercel Deployment:**
   - Go to [vercel.com/new](https://vercel.com/new) and import `kids-gym-preschool`.
   - Under **Environment Variables**, paste all keys from `.env.local`.
   - Click **Deploy**.

3. **Custom Domain Setup:**
   - Once deployed, add your custom domain (e.g. `kidsgym.pk`) under Vercel Project Settings -> Domains.
   - Update DNS A and CNAME records as instructed by Vercel.

---

## Verification & Build Commands

```bash
# Run ESLint
npm run lint

# Run Production Build
npm run build
```
