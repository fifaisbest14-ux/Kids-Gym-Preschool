import fs from "fs";
import path from "path";
import sharp from "sharp";

const SOURCE_DIR = path.join(process.cwd(), "public", "images", "source");
const MANIFEST_PATH = path.join(SOURCE_DIR, "manifest.json");

async function analyze() {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  const report = [];

  for (const item of manifest) {
    const filePath = path.join(SOURCE_DIR, item.filename);
    if (!fs.existsSync(filePath)) continue;

    const metadata = await sharp(filePath).metadata();
    const width = metadata.width || 0;
    const height = metadata.height || 0;
    const orientation = width > height ? "Landscape" : width < height ? "Portrait" : "Square";

    report.push({
      file: item.filename,
      page: item.page,
      width,
      height,
      orientation,
      sizeKb: Math.round(item.sizeBytes / 1024),
      snippet: item.snippet,
    });
  }

  console.log(JSON.stringify(report, null, 2));
}

analyze().catch(console.error);
