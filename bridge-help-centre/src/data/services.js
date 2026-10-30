/* The five service areas. Used on Home (cards), Our Programmes (full
   sections), the footer and the Contact form dropdown.
   Text marked "exact" is the client's own wording — do not edit.
   [PLACEHOLDER] image: put a 1200 × 900 px photo in /public/images/programmes/
   and set e.g. image: "/images/programmes/school-development.jpg" */
export const services = [
  {
    id: "school-development",
    number: "01",
    name: "School & Student Development Services", // exact
    summary: "Outreaches, training and career guidance for schools and students.", // exact
    icon: "school",
    image: "",
    imageAlt: "Students taking part in a school outreach session run by The Bridge Help Centre",
    imageHint: "A facilitator leading an interactive session with a class of secondary school students.",
    bullets: [ // exact
      "School outreaches",
      "Student development programs",
      "Training programs",
      "Educational talks",
      "Career guidance",
      "Awareness and sensitisation programs",
      "Teachers training program",
    ],
  },
  {
    id: "counselling",
    number: "02",
    name: "Individual and School Counseling services", // exact
    summary: "A safe place to talk, be heard, and receive guidance.", // exact
    icon: "counselling",
    image: "",
    imageAlt: "A counsellor listening to a young person in a calm, warm room",
    imageHint: "A one-to-one counselling conversation in a warm, private setting (faces may be turned away).",
    bullets: [ // exact
      "Support young people dealing with difficult emotions, experiences, and life changes.",
      "A safe place to talk, be heard, and receive guidance",
    ],
  },
  {
    id: "learning-support",
    number: "03",
    name: "Special Education and Learning Support", // exact
    summary: "Consultation, assessments and training for parents and teachers.", // exact
    icon: "learning",
    image: "",
    imageAlt: "A child working through a learning activity with a supportive teacher",
    imageHint: "A teacher or specialist supporting a child with a hands-on learning activity.",
    bullets: [ // exact
      "Consultation",
      "Assessments",
      "Training for parents and teachers",
    ],
  },
  {
    id: "mentorship",
    number: "04",
    name: "Mentorship & Life Skills", // exact
    summary: "Confidence, goal setting, communication and responsibility.", // exact
    icon: "mentorship",
    image: "",
    imageAlt: "Young people in a mentoring circle sharing ideas with a mentor",
    imageHint: "A small mentoring circle of teenagers talking with an adult mentor.",
    bullets: [ // exact
      "Build confidence.",
      "Goal setting and planning for the future.",
      "Communicate better and develop problem-solving skills",
      "Take responsibility & use technology responsibly",
    ],
  },
  {
    id: "community",
    number: "05",
    name: "Youth And Community empowerment", // exact
    summary: "Leadership, outreach and programs for girls and underserved young people.", // exact
    icon: "community",
    image: "",
    imageAlt: "Young people and community members gathered at an outreach event",
    imageHint: "A community outreach event with young people, parents and local leaders.",
    bullets: [ // exact
      "Leadership training.",
      "Community outreach.",
      "Programs for girls and underserved young people.",
      "Education and safety awareness campaigns.",
      "Partnerships with Individuals, communities & government agencies.",
    ],
  },
];

// exact — client wording
export const servicesIntro =
  "Our services include school and student development programs, Individual and group counselling, Mentorship and life skills development, Special education and Learning support and community youth empowerment.";
