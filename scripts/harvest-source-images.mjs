import fs from "fs";
import path from "path";
import crypto from "crypto";

const PAGES = [
  { url: "https://sites.google.com/view/kids-gym-preschool-daycare/home", name: "home" },
  { url: "https://sites.google.com/view/kids-gym-preschool-daycare/about-us", name: "about-us" },
  { url: "https://sites.google.com/view/kids-gym-preschool-daycare/about-us/special-services", name: "special-services" },
  { url: "https://sites.google.com/view/kids-gym-preschool-daycare/about-us/daycare-program", name: "daycare-program" },
  { url: "https://sites.google.com/view/kids-gym-preschool-daycare/schedule", name: "schedule" },
];

const SOURCE_DIR = path.join(process.cwd(), "public", "images", "source");

async function harvest() {
  if (!fs.existsSync(SOURCE_DIR)) {
    fs.mkdirSync(SOURCE_DIR, { recursive: true });
  }

  const manifest = [];
  const seenTokens = new Set();
  let count = 0;

  for (const pageObj of PAGES) {
    console.log(`Fetching ${pageObj.url}...`);
    try {
      const res = await fetch(pageObj.url);
      if (!res.ok) {
        console.error(`Failed to fetch ${pageObj.url}: HTTP ${res.status}`);
        continue;
      }
      const html = await res.text();

      // Extract surrounding heading / context snippets
      const regex = /https:\/\/lh3\.googleusercontent\.com\/sitesv\/[^"'\s)]+/g;
      let match;
      let orderOnPage = 0;

      while ((match = regex.exec(html)) !== null) {
        const fullUrl = match[0];
        // Dedupe token before =w
        const tokenMatch = fullUrl.match(/lh3\.googleusercontent\.com\/sitesv\/([^=]+)/);
        if (!tokenMatch) continue;
        const token = tokenMatch[1];

        if (seenTokens.has(token)) continue;
        seenTokens.add(token);
        orderOnPage++;

        // Context snippet surrounding match in HTML
        const start = Math.max(0, match.index - 200);
        const end = Math.min(html.length, match.index + 200);
        const snippet = html.substring(start, end).replace(/\s+/g, " ");

        // Try downloading =w2000 first, fallback to original =w1280 or matched URL
        const baseParamUrl = fullUrl.replace(/=w\d+/, "");
        const highResUrl = `${baseParamUrl}=w2000`;
        const defaultResUrl = fullUrl;

        let imageBuffer;
        let downloadedUrl = highResUrl;

        try {
          const imgRes = await fetch(highResUrl);
          if (imgRes.ok) {
            imageBuffer = Buffer.from(await imgRes.arrayBuffer());
          } else {
            throw new Error(`HTTP ${imgRes.status}`);
          }
        } catch {
          downloadedUrl = defaultResUrl;
          const fallbackRes = await fetch(defaultResUrl);
          imageBuffer = Buffer.from(await fallbackRes.arrayBuffer());
        }

        const sha256 = crypto.createHash("sha256").update(imageBuffer).digest("hex");
        count++;
        const filename = `source-${String(count).padStart(2, "0")}.jpg`;
        const filepath = path.join(SOURCE_DIR, filename);

        fs.writeFileSync(filepath, imageBuffer);

        manifest.push({
          filename,
          page: pageObj.name,
          orderOnPage,
          sourceUrl: downloadedUrl,
          sha256,
          snippet: snippet.substring(0, 150),
          sizeBytes: imageBuffer.length,
        });

        console.log(`Saved ${filename} (${imageBuffer.length} bytes) from ${pageObj.name}`);
      }
    } catch (err) {
      console.error(`Error processing ${pageObj.url}:`, err);
    }
  }

  const manifestPath = path.join(SOURCE_DIR, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`\nHarvest complete! Total unique images downloaded: ${manifest.length}`);
}

harvest().catch((err) => {
  console.error("Harvest script error:", err);
  process.exit(1);
});
