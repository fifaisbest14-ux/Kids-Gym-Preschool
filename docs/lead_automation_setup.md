# Lead Automation, Storage & Google Ads Setup Guide — Kids' Gym Preschool

This guide walks you step-by-step through setting up:
1. **Supabase Database Storage** (All leads automatically saved to PostgreSQL)
2. **Instant Email Notifications** (Delivered straight to your Gmail/inbox)
3. **Google Sheets Sync** (Auto-appends every new lead to a Google Sheet)
4. **Google Ads Conversion & GCLID Tracking** (Captures ad clicks & track conversions)

---

## 1. Supabase Setup (Database Lead Storage)

### Step 1: Create a Supabase Table
1. Open your [Supabase Dashboard](https://supabase.com/dashboard).
2. Go to **SQL Editor** -> **New Query**.
3. Paste the contents of `docs/supabase_schema.sql` (or the SQL block below) and click **Run**:

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  parent_name text not null,
  whatsapp text not null,
  email text,
  child_age text not null,
  programs text[] not null,
  area text not null,
  preferred_time text,
  message text,
  consent boolean not null default false,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  gclid text,
  fbclid text,
  landing_page text,
  referrer text,
  user_agent text,
  ip_hash text,
  status text default 'new'
);

alter table public.leads enable row level security;

create policy "Allow anon insert only" on public.leads
  for insert with check (true);

create policy "Allow service role full access" on public.leads
  for all using (true);
```

### Step 2: Add Supabase Keys to Vercel Environment Variables
In your Vercel project settings (or `.env.local`):
```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

---

## 2. Instant Email Notifications Setup (Gmail SMTP)

To receive an immediate email every time a parent submits an enquiry:

1. Log into your Gmail account (`fifaisbest14@gmail.com` or `kidsgympk@gmail.com`).
2. Go to [Google Account Security](https://myaccount.google.com/security).
3. Enable **2-Step Verification** (if not already enabled).
4. Search for **App Passwords** in the search bar.
5. Create a new App Password (name it "Kids Gym Website") and copy the 16-character generated code (e.g. `abcd efgh ijkl mnop`).
6. Add the following environment variables to Vercel (or `.env.local`):

```env
GMAIL_SMTP_USER=fifaisbest14@gmail.com
GMAIL_SMTP_APP_PASSWORD=abcdefghijklmnop
LEAD_DELIVERY_INBOX=fifaisbest14@gmail.com, kidsgympk@gmail.com
```

*Every email sent will include a 1-click **"💬 Reply to [Parent Name] on WhatsApp"** button!*

---

## 3. Google Sheets Webhook Setup (Auto-Save to Sheets)

If you want form submissions automatically appended as a new row in a Google Sheet:

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) and name it **Kids Gym Lead Log 2026**.
2. Add these exact column headers in Row 1:
   `Timestamp` | `Parent Name` | `WhatsApp` | `Email` | `Child Age` | `Programs` | `Area` | `Preferred Visit` | `Message` | `GCLID (Google Ads)` | `UTM Source` | `UTM Campaign`

### Step 2: Add Apps Script
1. Click **Extensions** -> **Apps Script** in Google Sheets menu.
2. Replace all existing code with the following snippet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.parent_name || '',
      data.whatsapp || '',
      data.email || '',
      data.child_age || '',
      data.programs || '',
      data.area || '',
      data.preferred_time || '',
      data.message || '',
      data.gclid || '',
      data.utm_source || '',
      data.utm_campaign || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Deploy** -> **New deployment**.
4. Select type: **Web app**.
5. Execute as: **Me**.
6. Who has access: **Anyone** *(Required so website API can send leads)*.
7. Click **Deploy**, authorize permissions, and copy the **Web App URL** (starts with `https://script.google.com/macros/s/...`).

### Step 3: Add Webhook URL to Vercel Environment Variables
```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/<YOUR_SCRIPT_ID>/exec
```

---

## 4. Google Ads Conversion & GCLID Tracking

The website is **pre-built for Google Ads**:
- When a parent clicks your Google Ad, Google appends `?gclid=...` to your website URL.
- `LeadForm.tsx` automatically detects `gclid` and stores it in browser session storage.
- When the parent submits the enquiry form:
  1. `gclid` is saved to Supabase & Google Sheets for ad attribution tracking.
  2. The Google Tag Manager / GA4 event `generate_lead` is pushed to `dataLayer` with `value: 8000`, `currency: 'PKR'`.
  3. The parent is redirected to `/thank-you` destination.

---

## Complete Vercel Environment Variables Checklist

Add these variables in **Vercel Project Settings** -> **Environment Variables**:

| Variable Name | Example Value | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xyz.supabase.co` | Supabase Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbG...` | Supabase Anon Public Key |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbG...` | Supabase Secret Service Role Key |
| `GMAIL_SMTP_USER` | `fifaisbest14@gmail.com` | Sending Gmail account |
| `GMAIL_SMTP_APP_PASSWORD` | `16-digit-app-pass` | Gmail App Password |
| `LEAD_DELIVERY_INBOX` | `fifaisbest14@gmail.com, kidsgympk@gmail.com` | Destination email inbox(es) |
| `GOOGLE_SHEETS_WEBHOOK_URL` | `https://script.google.com/.../exec` | Optional Google Sheets Webhook URL |
| `NEXT_PUBLIC_ADS_ID` | `AW-123456789` | Optional Google Ads Tag ID |
