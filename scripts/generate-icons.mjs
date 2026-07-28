import fs from "fs";
import path from "path";
import sharp from "sharp";

const LOGO_SOURCE = path.join(process.cwd(), "public", "images", "source", "source-01.jpg");
const PUBLIC_DIR = path.join(process.cwd(), "public");

async function generateIcons() {
  if (!fs.existsSync(LOGO_SOURCE)) {
    console.warn("Logo source not found, skipping icon generation.");
    return;
  }

  // Favicon PNG (32x32)
  await sharp(LOGO_SOURCE)
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon.ico"));

  // Icon PNG (512x512)
  await sharp(LOGO_SOURCE)
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, "icon.png"));

  // Apple Icon (180x180)
  await sharp(LOGO_SOURCE)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, "apple-icon.png"));

  console.log("Icons generated successfully in public/!");
}

generateIcons().catch(console.error);
