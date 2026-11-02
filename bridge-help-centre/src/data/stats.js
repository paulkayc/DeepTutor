/* Impact numbers on the Home page — stored in src/content/stats.json and
   changed with the online editor (Pages CMS → "Impact numbers").
   Numbers count up from zero when scrolled into view; suffix is e.g. "+". */
import data from "../content/stats.json" with { type: "json" };

export const stats = (data.stats || [])
  .filter((s) => s && String(s.label || "").trim() && Number.isFinite(Number(s.value)))
  .map((s) => ({ value: Number(s.value), suffix: String(s.suffix || "").trim(), label: String(s.label).trim() }));
