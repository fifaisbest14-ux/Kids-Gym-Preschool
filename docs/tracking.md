# DataLayer Events Documentation — Kids' Gym Preschool

All custom analytics events fired via `pushToDataLayer` in `src/lib/tracking.ts`:

| Event Name | Trigger / Context | Key Parameters |
|---|---|---|
| `whatsapp_click` | Parent clicks any WhatsApp CTA button | `location` (e.g., "hero", "header_nav", "daycare") |
| `phone_click` | Parent clicks phone call link | `phone_number` |
| `map_click` | Parent clicks Google Maps directions link | `destination` |
| `view_program` | Parent views specific program details | `program_name` |
| `gallery_open` | Parent opens full-screen image in lightbox | `image_id` |
| `video_play` | Parent clicks to play campus video | `video_title` |
| `form_submit` | Parent submits tour/admission lead form | `program`, `area` |
