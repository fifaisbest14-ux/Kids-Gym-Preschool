# Manual QA & Tracking Verification Checklist

Use this checklist to verify end-to-end functionality for **Kids' Gym Preschool & Daycare**.

---

## 1. Form Submission & Lead Lifecycle Verification

1. Open the website on a mobile device or browser at 360px viewport.
2. Scroll to `#lead-form` or click **Book a Free Visit**.
3. Fill out required fields:
   - Parent Name: `Test Parent`
   - WhatsApp Number: `03331234567`
   - Child Age: `2–3`
   - Interested In: `Playgroup`, `Kids Gym`
   - Area: `Model Town`
4. Click **Confirm & Book Free Visit**.

### Expected Results:
- [ ] Immediate redirect to `/thank-you`.
- [ ] **Supabase DB Check:** Open Supabase dashboard -> `leads` table -> Verify new row exists with status `new`, correct area (`Model Town`), programs array, and UTM parameters.
- [ ] **Email Inbox Check:** Check `fifaisbest14@gmail.com` inbox -> Verify HTML email received with subject `New enquiry — Test Parent, Model Town, child 2–3` containing direct `wa.me` reply link.

---

## 2. Tracking Layer Verification (GTM & Meta Pixel)

1. Open GTM Preview Mode (`tagmanager.google.com`).
2. Connect GTM Preview to your local/staging URL.

### DataLayer Event Trigger Checks:
- [ ] **`form_start`:** Fires on first input field focus inside `LeadForm`.
- [ ] **`generate_lead`:** Fires on successful form submit with params `{ program, child_age, area, value: 8000, currency: 'PKR' }`.
- [ ] **`whatsapp_click`:** Click any WhatsApp button -> Verify `whatsapp_click` event fires with `location` param.
- [ ] **`phone_click`:** Click any phone link (`tel:`) -> Verify `phone_click` event fires with `phone_number` param.
- [ ] **`view_program`:** Navigate to `/programs` -> Verify `view_program` event fires.
- [ ] **`gallery_open`:** Navigate to `/gallery` and click any lightbox item -> Verify `gallery_open` event fires.
- [ ] **`map_click`:** Click **Open in Google Maps** -> Verify `map_click` event fires.
- [ ] **`scroll_75`:** Scroll past 75% depth -> Verify `scroll_75` event fires once.

### Meta Pixel & CAPI Checks:
- [ ] Open Meta Pixel Helper Chrome Extension.
- [ ] Verify `Lead` event fires on submission with `value: 8000` and `currency: PKR`.
- [ ] In Meta Events Manager -> Verify server-side CAPI event deduplication matches client event using `event_id`.
