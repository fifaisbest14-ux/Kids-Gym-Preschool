import fs from "fs";
import path from "path";
import sharp from "sharp";

const ARTIFACT_DIR = "/Users/sultan/.gemini/antigravity-ide/brain/ae96f684-d99c-459d-b5de-f9135ffb814f";
const TEXTURE_DIR = path.join(process.cwd(), "public", "images", "textures");

const mappings = [
  { match: "nature_texture_leaves", name: "leaves.jpg" },
  { match: "nature_texture_sand", name: "sand.jpg" },
  { match: "nature_texture_water", name: "water.jpg" },
];

async function copyAndOptimize() {
  if (!fs.existsSync(TEXTURE_DIR)) {
    fs.mkdirSync(TEXTURE_DIR, { recursive: true });
  }

  const files = fs.readdirSync(ARTIFACT_DIR);

  for (const map of mappings) {
    const foundFile = files.find((f) => f.startsWith(map.match) && f.endsWith(".png"));
    if (!foundFile) {
      console.warn(`File matching ${map.match} not found in artifact dir.`);
      continue;
    }

    const srcPath = path.join(ARTIFACT_DIR, foundFile);
    const destPath = path.join(TEXTURE_DIR, map.name);

    await sharp(srcPath)
      .resize(1200)
      .jpeg({ quality: 80 })
      .toFile(destPath);

    console.log(`Saved optimized texture: ${destPath}`);
  }
}

copyAndOptimize().catch(console.error);
