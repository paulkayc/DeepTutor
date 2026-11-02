/* Responsive images: if a lighter "-640" copy of an image exists in
   public/images (made automatically at build by tools/optimise-images.mjs),
   return a srcset so phones and small boxes download the smaller file. */
import fs from "node:fs";
import path from "node:path";
import { Image } from "./image-size.js";

const publicDir = path.resolve("public");

export function srcsetFor(src, width) {
  if (!src || !/\.(webp|jpe?g|png)$/i.test(src)) return undefined;
  const small = src.replace(/\.(webp|jpe?g|png)$/i, "-640.webp");
  if (!fs.existsSync(path.join(publicDir, decodeURI(small)))) return undefined;
  const full = width || Image.widthOf(path.join(publicDir, decodeURI(src)));
  // encodeURI keeps file names with spaces from breaking the srcset list.
  return full ? `${encodeURI(small)} 640w, ${encodeURI(src)} ${full}w` : undefined;
}

/* Pixel size of an image in /public (e.g. "/images/gallery/x.webp"). */
export function sizeOf(src) {
  if (!src) return undefined;
  return Image.sizeOf(path.join(publicDir, decodeURI(src)));
}
