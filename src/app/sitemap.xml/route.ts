import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://kidsgym.pk";

  const routes = [
    "",
    "/programs",
    "/daycare",
    "/kids-gym",
    "/about",
    "/safety",
    "/gallery",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${route === "" ? "daily" : "weekly"}</changefreq>
      <priority>${route === "" ? "1.0" : route === "/daycare" || route === "/programs" ? "0.9" : "0.8"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
