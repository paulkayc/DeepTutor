/* GALLERY — one line per photo.
   ---------------------------------------------------------------------
   1. Put the photo (about 1200 px on the long side, .webp or .jpg) in
      /public/images/gallery/
   2. Fill in src, alt (describe the photo for screen readers), an optional
      caption and a category. Categories are used by the filter chips:
      "School Outreach", "Counselling", "Mentorship", "Community".
   The Home page shows the first 8 (with fewer than 8 photos it shows five:
   one large, four small); Our Impact shows all.
   Lines with src: "" are skipped once any real photo is listed (placeholders
   only appear when the gallery is completely empty).
   --------------------------------------------------------------------- */
export const galleryCategories = ["School Outreach", "Counselling", "Mentorship", "Community"];

export const gallery = [
  { src: "/images/gallery/school-outreach-talk.webp", width: 528, height: 528, alt: "A Bridge Help Centre facilitator in a red T-shirt speaking to a packed classroom of students in light-blue uniforms", caption: "School outreach in action", category: "School Outreach" },
  { src: "/images/gallery/school-assembly.webp", width: 1080, height: 810, alt: "Hundreds of pupils in white and blue school uniforms seated outdoors for a Bridge Help Centre outreach", caption: "School assembly outreach", category: "School Outreach" },
  { src: "/images/gallery/outreach-team.webp", width: 1080, height: 1080, alt: "Two photos of The Bridge Help Centre team in pink and white branded T-shirts standing together outside a school during an outreach", caption: "Our team at a school outreach", category: "School Outreach" },
  { src: "/images/gallery/speaking-with-students.webp", width: 810, height: 1080, alt: "A Bridge Help Centre speaker holding a microphone talks with smiling pupils in white uniforms at an outdoor school outreach", caption: "Speaking with students", category: "School Outreach" },
  { src: "/images/gallery/students-session.webp", width: 588, height: 588, alt: "Secondary school students smiling and taking notes at their desks during a Bridge Help Centre session", caption: "Students during a session", category: "School Outreach" },
  { src: "/images/gallery/team-planning.webp", width: 810, height: 1080, alt: "Two Bridge Help Centre team members in red branded T-shirts looking at a phone together during an outreach", caption: "Team members on outreach day", category: "Community" },
  { src: "/images/gallery/team-at-school.webp", width: 1080, height: 1079, alt: "Two photos of Bridge Help Centre team members and a partner smiling outside a school building", caption: "The Bridge Help Centre team", category: "Community" },
  { src: "/images/gallery/my-why-my-focus-flyer.webp", width: 1080, height: 1080, alt: "Flyer for 'My Why, My Focus, My Future', a student development programme for ages 10 to 18 with facilitator Amara Ikonne, 1st October 2026, 11 AM on Google Meet", caption: "My Why, My Focus, My Future (1 Oct 2026)", category: "Mentorship" },
  // Add more photos below (copy a line above and change it). Empty lines like
  // these are ignored once at least one real photo is listed.
  { src: "", alt: "A mentor and teenagers setting goals together", caption: "Mentoring circle", category: "Mentorship" },
  { src: "", alt: "A warm, quiet room prepared for counselling", caption: "Our counselling space", category: "Counselling" },
];
