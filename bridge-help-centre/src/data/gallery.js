/* GALLERY ("Moments from Our Work" on the Home page)
   ---------------------------------------------------------------------
   The photos are stored in src/content/gallery.json, which the online editor
   (Pages CMS → "Gallery") changes: upload a photo, describe it (alt text),
   add an optional caption and pick a category. Photo sizes are measured
   automatically. The Home page shows the first 8 (with fewer than 8 photos
   it shows five: one large, four small).
   --------------------------------------------------------------------- */
import data from "../content/gallery.json" with { type: "json" };
import { sizeOf } from "../lib/images.js";

export const galleryCategories = ["School Outreach", "Counselling", "Mentorship", "Community"];

const clean = (v) => (typeof v === "string" ? v.trim() : "");

const photos = (data.photos || [])
  .filter((g) => clean(g.src))
  .map((g) => {
    const size = sizeOf(clean(g.src));
    return {
      src: clean(g.src),
      width: size?.width,
      height: size?.height,
      alt: clean(g.alt),
      caption: clean(g.caption),
      category: clean(g.category) || "Community",
    };
  });

// Placeholder boxes appear only while the gallery is completely empty.
/** @type {{ src: string, width?: number, height?: number, alt: string, caption: string, category: string }[]} */
export const gallery = photos.length ? photos : [
  { src: "", alt: "A mentor and teenagers setting goals together", caption: "Mentoring circle", category: "Mentorship" },
  { src: "", alt: "A warm, quiet room prepared for counselling", caption: "Our counselling space", category: "Counselling" },
];
