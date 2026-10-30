/* Responsive images: if a lighter "-640" copy of an image exists in
   public/images (made by tools/make-image-sizes.py), return a srcset so phones
   and small boxes download the smaller file. */
import fs from "node:fs";
import path from "node:path";
import { Image } from "./image-size.js";

const publicDir = path.resolve("public");

export function srcsetFor(src, width) {
  if (!src || !src.endsWith(".webp")) return undefined;
  const small = src.replace(/\.webp$/, "-640.webp");
  if (!fs.existsSync(path.join(publicDir, small))) return undefined;
  const full = width || Image.widthOf(path.join(publicDir, src));
  return full ? `${small} 640w, ${src} ${full}w` : undefined;
}
