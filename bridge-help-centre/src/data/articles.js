/* ARTICLES & NEWS
   ---------------------------------------------------------------------
   Each article gets its own page at /resources/articles/<slug>/.
   To add a post: copy a block, give it a unique slug (lowercase, hyphens),
   and write the body as a list of paragraphs. Use "## " at the start of a
   paragraph to make it a sub-heading.
   image: 1200 × 800 px ([PLACEHOLDER] while "").
   --------------------------------------------------------------------- */
export const articles = [
  {
    slug: "sample-article-for-parents",
    title: "[Article title — e.g. Five ways to support your child through exam stress]",
    category: "For Parents",
    date: "2026-10-01",
    excerpt: "[Two-line summary of the article that makes a parent want to read on.]",
    image: "",
    body: [
      "[Opening paragraph.]",
      "## [Sub-heading]",
      "[Paragraph.]",
      "[Closing paragraph with a gentle invitation to reach out.]",
    ],
  },
  {
    slug: "sample-article-for-teachers",
    title: "[Article title — e.g. Spotting learning differences in the classroom]",
    category: "For Teachers",
    date: "2026-09-15",
    excerpt: "[Two-line summary of the article for teachers and school leaders.]",
    image: "",
    body: ["[Article text.]"],
  },
  {
    slug: "sample-news-item",
    title: "[News title — e.g. Our latest school outreach in pictures]",
    category: "News",
    date: "2026-09-01",
    excerpt: "[Two-line summary of the news item.]",
    image: "",
    body: ["[Article text.]"],
  },
];
