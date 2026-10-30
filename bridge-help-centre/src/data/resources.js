/* Downloadable documents.
   To publish a document: put the PDF in /public/documents/ and set
   file: "/documents/your-file.pdf". While file is "" the card shows "Coming soon".
   cover: optional cover image ([PLACEHOLDER] while ""). */

export const reports = [
  { title: "[Annual Report title]", year: "[Year]", cover: "", file: "" },
  { title: "[Impact Report title]", year: "[Year]", cover: "", file: "" },
  { title: "[Programme Evaluation title]", year: "[Year]", cover: "", file: "" },
];

export const publications = [
  { title: "[Publication title]", year: "[Year]", cover: "", file: "" },
  { title: "[Publication title]", year: "[Year]", cover: "", file: "" },
  { title: "[Publication title]", year: "[Year]", cover: "", file: "" },
];

export const materials = {
  "For Parents": [
    { title: "[Material title]", description: "[One-line description of how it helps parents.]", file: "" },
    { title: "[Material title]", description: "[One-line description of how it helps parents.]", file: "" },
    { title: "[Material title]", description: "[One-line description of how it helps parents.]", file: "" },
  ],
  "For Teachers": [
    { title: "[Material title]", description: "[One-line description of how it helps teachers.]", file: "" },
    { title: "[Material title]", description: "[One-line description of how it helps teachers.]", file: "" },
    { title: "[Material title]", description: "[One-line description of how it helps teachers.]", file: "" },
  ],
  "For Young People": [
    { title: "[Material title]", description: "[One-line description of how it helps young people.]", file: "" },
    { title: "[Material title]", description: "[One-line description of how it helps young people.]", file: "" },
    { title: "[Material title]", description: "[One-line description of how it helps young people.]", file: "" },
  ],
};
