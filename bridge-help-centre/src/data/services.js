/* The five service areas. Used on Home (cards), Our Programmes (full
   sections), the footer and the Contact form dropdown.
   Text marked "exact" is the client's own wording — do not edit.
   image: a 4:3 photo (about 1200 × 900 px) in /public/images/programmes/
   and set e.g. image: "/images/programmes/school-development.jpg" */
export const services = [
  {
    id: "school-development",
    number: "01",
    name: "School & Student Development Services", // exact
    summary: "Outreaches, training and career guidance for schools and students.", // exact
    icon: "school",
    image: "/images/programmes/school-development.webp",
    imageAlt: "A Bridge Help Centre facilitator in a red T-shirt leading a school outreach talk with a packed classroom of students",
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
    name: "Individual and School Counselling services", // exact
    summary: "A safe place to talk, be heard, and receive guidance.", // exact
    icon: "counselling",
    image: "/images/programmes/counselling.webp",
    imageAlt: "A Bridge Help Centre speaker with a microphone talking warmly with pupils at an outdoor school session",
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
    image: "/images/programmes/learning-support.webp",
    imageAlt: "Secondary school students smiling and writing notes at their desks during a learning session",
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
    image: "/images/programmes/mentorship.webp",
    imageAlt: "Students in light-blue uniforms listening closely during a Bridge Help Centre mentoring session",
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
    image: "/images/programmes/community.webp",
    imageAlt: "Hundreds of pupils seated outdoors for a Bridge Help Centre community outreach",
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
