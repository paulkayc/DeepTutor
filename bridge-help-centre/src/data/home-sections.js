/* Extra sections on the Home page (below "Moments from Our Work"), made by
   staff in the online editor (Pages CMS → "Home page extra sections"). */
import data from "../content/home-sections.json" with { type: "json" };

/** @type {any[]} */
export const homeSections = Array.isArray(data.sections) ? data.sections : [];
