/* UPCOMING PROGRAMMES — one object per event.
   ---------------------------------------------------------------------
   To ADD an event: copy one { … } block, paste it into the list and change
   the details. To REMOVE an event: delete its block.
   date must be written as "YYYY-MM-DD". The next upcoming event that has
   slides is featured on the Home page; past events are hidden there.
   image: 1200 × 800 px, e.g. "/images/events/holiday-camp.jpg" ([PLACEHOLDER] while "").
   Optional: imageRatio (e.g. "4 / 5" for a flyer), time, price, speaker, subtitle,
   speakerBio (paragraphs) and slides (images for the Home page slideshow).
   --------------------------------------------------------------------- */
export const events = [
  {
    title: "My Child Is Struggling to Learn: What Am I Missing?",
    subtitle: "A Child Development & Learning Programme for Parents, Teachers and Educators",
    date: "2026-11-14",
    time: "6:00 PM",
    location: "Online (Google Meet)",
    price: "Free",
    speaker: "Kenneth Anele",
    description: "A child development & learning programme for parents, teachers and educators, with Special Needs & Developmental Intervention Specialist Kenneth Anele.",
    image: "/images/events/struggling-to-learn-flyer.webp",
    imageRatio: "4 / 5",
    // Slideshow images on the Home page (same 4:5 shape, about 864 × 1080 px).
    slides: [
      {
        src: "/images/events/struggling-to-learn-flyer.webp",
        alt: "Flyer: The Bridge Help Centre presents 'My Child Is Struggling to Learn: What Am I Missing?', a child development and learning programme for parents, teachers and educators, with speaker Kenneth Anele. 14th November 2026, 6:00 PM on Google Meet. Registration is free.",
      },
      {
        src: "/images/events/struggling-to-learn-speaker.webp",
        alt: "Meet our speaker: profile of Anele Nnamdi Kenneth, Special Needs and Developmental Intervention Specialist (full text below the slideshow).",
      },
    ],
    speakerBio: [
      "Anele Nnamdi Kenneth is a Special Needs & Developmental Intervention Specialist whose work focuses on autism and developmental intervention, speech and communication, behavioural intervention, and learning disabilities.",
      "He believes that every child can learn when given the right opportunities, understanding, and evidence-informed intervention.",
      "He holds a Bachelor’s degree in Education from Abia State University and a Speech and Language Diploma from the University of Stellenbosch, South Africa. He has completed specialized training in autism and behavioral intervention through the Autism Partnership Foundation and advanced training in learning disabilities intervention from the National Center for Learning Disabilities.",
      "His additional professional development includes training in dyslexia awareness, the science of reading, and occupational therapy-related practice. He is currently pursuing the Qualified Autism Services Practitioner–Supervisor (QASP-S) credential.",
      "Beyond direct intervention, Kenneth engages in parent education, community sensitisation, and disability advocacy. His vision is a society that recognises children with disabilities for their abilities and gives them opportunities to live with dignity, independence, and purpose.",
    ],
  },
  {
    title: "[Programme name — e.g. Parents' Learning Support Workshop]",
    date: "2026-12-05",
    location: "[Venue, City]",
    description: "[One-line description of who it is for and what they will gain.]",
    image: "",
  },
  {
    title: "[Programme name — e.g. Christmas Holiday Mentoring Camp]",
    date: "2026-12-14",
    location: "[Venue, City]",
    description: "[One-line description of who it is for and what they will gain.]",
    image: "",
  },
  {
    title: "[Programme name — e.g. Teachers' Training Day]",
    date: "2027-01-23",
    location: "[Venue, City]",
    description: "[One-line description of who it is for and what they will gain.]",
    image: "",
  },
  {
    title: "[Programme name — e.g. Girls' Leadership Circle]",
    date: "2027-02-13",
    location: "[Venue, City]",
    description: "[One-line description of who it is for and what they will gain.]",
    image: "",
  },
  {
    title: "[Programme name — e.g. Community Safety Awareness Walk]",
    date: "2027-03-06",
    location: "[Venue, City]",
    description: "[One-line description of who it is for and what they will gain.]",
    image: "",
  },
];
