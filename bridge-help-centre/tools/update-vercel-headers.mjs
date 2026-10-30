/* Regenerates vercel.json from the headers the last build produced
   (only needed if the site is hosted on Vercel). Run after `npm run build`. */
import fs from "node:fs";
const lines = fs.readFileSync("dist/_headers", "utf8").split("\n");
const groups = []; let cur;
for (const l of lines) {
  if (!l.trim()) continue;
  if (!l.startsWith(" ")) groups.push(cur = { source: l.trim().replace(/\*$/, "(.*)"), headers: [] });
  else { const [k, ...v] = l.trim().split(": "); cur.headers.push({ key: k, value: v.join(": ") }); }
}
fs.writeFileSync("vercel.json", JSON.stringify({ trailingSlash: true, headers: groups }, null, 2) + "\n");
console.log("vercel.json updated");
