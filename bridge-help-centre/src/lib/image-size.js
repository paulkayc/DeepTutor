/* Reads a WebP file's pixel width (no extra packages needed). */
import fs from "node:fs";

export const Image = {
  widthOf(file) {
    try {
      const b = fs.readFileSync(file);
      const chunk = b.toString("ascii", 12, 16);
      if (chunk === "VP8X") return 1 + b.readUIntLE(24, 3);
      if (chunk === "VP8 ") return b.readUInt16LE(26) & 0x3fff;
      if (chunk === "VP8L") return 1 + (((b[22] & 0x3f) << 8) | b[21]);
    } catch {}
    return undefined;
  },
};
