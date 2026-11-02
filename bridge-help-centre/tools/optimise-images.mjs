/* Runs automatically before every build (npm "prebuild").
   Photos uploaded through the online editor can be very large phone photos.
   This keeps the website fast:
     1. Photos wider or taller than 1600 px (or over 600 KB, or stored
        sideways by a phone camera) are turned the right way up and
        resized to fit within 1600 px, in their original format.
     2. A lighter 640 px copy (name-640.webp) is made for phones; the pages
        pick it up automatically (src/lib/images.js).
   Logos and existing "-640" copies are left alone. */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images");
const MAX = 1600;
const SMALL = 640;
const exts = /\.(jpe?g|png|webp)$/i;

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
  d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]);

let changed = 0;
for (const file of walk(ROOT)) {
  const name = path.basename(file);
  if (!exts.test(name) || name.startsWith("logo") || /-640\.webp$/i.test(name)) continue;
  try {
    const meta = await sharp(file).metadata();
    const big = meta.width > MAX || meta.height > MAX || fs.statSync(file).size > 600 * 1024;
    const sideways = (meta.orientation || 1) > 1;
    if (big || sideways) {
      let img = sharp(file).rotate().resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true });
      const ext = path.extname(name).toLowerCase();
      img = ext === ".png" ? img.png({ compressionLevel: 9, palette: true, quality: 85 })
        : ext === ".webp" ? img.webp({ quality: 80 })
        : img.jpeg({ quality: 80, mozjpeg: true });
      const buf = await img.toBuffer();
      fs.writeFileSync(file, buf);
      changed++;
      console.log(`optimised ${path.relative(ROOT, file)} → ${Math.round(buf.length / 1024)} KB`);
    }
    const width = (await sharp(file).metadata()).width;
    const small = file.replace(exts, `-${SMALL}.webp`);
    if (width > SMALL + 80 && (!fs.existsSync(small) || fs.statSync(small).mtimeMs < fs.statSync(file).mtimeMs)) {
      await sharp(file).resize({ width: SMALL }).webp({ quality: 78 }).toFile(small);
      changed++;
      console.log(`made ${path.relative(ROOT, small)}`);
    }
  } catch (err) {
    console.warn(`skipped ${path.relative(ROOT, file)}: ${err.message}`);
  }
}
console.log(`Images checked${changed ? `, ${changed} file(s) written` : ", nothing to do"}.`);
