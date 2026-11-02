/* Home page images.
   heroImage: the wide photo across the very top of the home page (a landscape
   photo, ideally 1920 px wide or more; the top and bottom are trimmed to fit).
   It is stored in src/content/home.json (online editor → "Home page photo").
   introImage: photo from the former "Who We Are" section. That section was removed
   at the owner's request, so this photo is not shown anywhere at the moment. */
import data from "../content/home.json" with { type: "json" };
import { sizeOf } from "../lib/images.js";

const heroSize = sizeOf(data.heroImage);

export const home = {
  heroImage: data.heroImage,
  heroImageWidth: heroSize?.width,
  heroImageHeight: heroSize?.height,
  heroImageAlt: data.heroImageAlt,
  introImage: "/images/home/who-we-are.webp",
  introImageAlt: "A Bridge Help Centre counsellor in a blue polo shirt talking with a group of young people seated in a circle in a bright, welcoming room",
};
