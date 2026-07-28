import fs from "fs";
import path from "path";
import sharp from "sharp";

const SOURCE_DIR = path.join(process.cwd(), "public", "images", "source");

async function detailedInspect() {
  const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith(".jpg")).sort();

  for (const file of files) {
    const filePath = path.join(SOURCE_DIR, file);
    const meta = await sharp(filePath).metadata();
    const stats = await sharp(filePath).stats();
    
    // Dominant channels
    const rAvg = Math.round(stats.channels[0].mean);
    const gAvg = Math.round(stats.channels[1].mean);
    const bAvg = Math.round(stats.channels[2].mean);

    console.log(`${file}: ${meta.width}x${meta.height} | RGB(${rAvg},${gAvg},${bAvg}) | size: ${Math.round(fs.statSync(filePath).size / 1024)}KB`);
  }
}

detailedInspect();
