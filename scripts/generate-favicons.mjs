/**
 * Generates favicon and app icons from public/logo.svg (brand mark).
 * Run: node scripts/generate-favicons.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "public", "logo.svg");
const outDir = path.join(rootDir, "public");

// flatten: iOS ignores alpha in apple-touch icons (renders black) and rounds
// corners, so those get an explicit brand background plus padding.
const BRAND_BG = "#0a0a0b";
const SIZES = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180, flatten: true },
  { name: "android-chrome-192x192.png", size: 192, flatten: true },
  { name: "android-chrome-512x512.png", size: 512, flatten: true },
];

async function main() {
  if (!fs.existsSync(sourcePath)) {
    console.error("Source image not found:", sourcePath);
    process.exit(1);
  }

  const image = sharp(sourcePath, { density: 300 });

  for (const { name, size, flatten } of SIZES) {
    const outPath = path.join(outDir, name);
    if (flatten) {
      // ~83% content on a solid brand background so rounded corners don't clip.
      const inner = Math.round(size * 0.83);
      const mark = await image.clone().resize(inner, inner).png().toBuffer();
      await sharp({
        create: { width: size, height: size, channels: 4, background: BRAND_BG },
      })
        .composite([{ input: mark, gravity: "center" }])
        .png()
        .toFile(outPath);
    } else {
      await image.clone().resize(size, size).png().toFile(outPath);
    }
    console.log("Written:", name);
  }

  const png16 = await sharp(sourcePath, { density: 300 }).resize(16, 16).png().toBuffer();
  const png32 = await sharp(sourcePath, { density: 300 }).resize(32, 32).png().toBuffer();
  const icoBuffer = await toIco([png16, png32]);
  fs.writeFileSync(path.join(outDir, "favicon.ico"), icoBuffer);
  console.log("Written: favicon.ico");

  console.log("Done. Favicons generated from logo.svg.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
