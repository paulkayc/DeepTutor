/* About Us content. Text marked "exact" is the client's own wording. */

export const director = {
  name: "Mrs. Amarachi Ikonne",
  // Portrait, 4:5 (720 × 900 px)
  photo: "/images/director.webp",
  photoAlt: "Portrait of Mrs. Amarachi Ikonne, Director of The Bridge Help Centre, smiling, in a black dress with a white beaded necklace",
  // exact
  // Biography paragraphs (owner's wording).
  bio: [
    "Mrs. Amarachi Ikonne is a trained counselor and dedicated youth advocate with a passion for supporting young people as they navigate the challenges of growing, learning, and discovering their purpose. She has worked with teenagers and young adults for over 16 years.",
    "She is a graduate of Mass Communication and holds a Diploma in Education and Counseling.",
    "Through counselling, psychoeducation, mentorship, and advocacy, she supports children, adolescents, and young people in navigating life challenges, developing healthy coping skills, and reaching their potential. Her work is focused on helping young people grow into confident individuals who can live purposefully and contribute meaningfully to society.",
  ],
};

export const story = {
  image: "/images/about/our-story.webp",
  imageAlt: "A Bridge Help Centre facilitator in a red T-shirt with a full classroom of students in light-blue uniforms during a school outreach",
  // Our Story — written with the owner. Edit freely; one string per paragraph.
  paragraphs: [
    "For more than 16 years, our founder, Mrs. Amarachi Ikonne, has sat with teenagers and young adults in classrooms, counselling rooms and communities in Umuahia. Again and again, she met young people who were bright, curious and full of promise, yet carrying far more than any child should.",
    "Some came from broken homes and had no one to talk to. Some sat in crowded classrooms without the teaching or support they needed to keep up. Others were already being pulled towards drugs, cultism, internet fraud, early pregnancy, or simply giving up on school. It was never a lack of intelligence holding them back. It was a lack of guidance, at the very moment they needed it most.",
    "That burden stayed with her, and it became a vision: to reach young people early, while they are still young, and walk with them until they find their focus and direction in life. The Bridge Help Centre was born from that vision in Umuahia, to be a bridge between where a young person is today and who they can become.",
    "What began in Umuahia has grown beyond it, and we have already reached more than 1,000 young people in schools and communities. We are only getting started. Our hope is to reach many more young people across Nigeria, so that no child with a bright mind is left to find their way alone.",
  ],
};

// Owner's wording
export const vision =
  "To be a leading organization dedicated to meeting the diverse needs of children, adolescents, and young people, helping them grow, thrive, and reach their full potential.";
// Owner's wording
export const mission =
  "To work collaboratively with parents, schools, and government partners to support, empower, and equip children and young people to thrive. We are committed to creating safe, inclusive, and nurturing environments by addressing their emotional, psychological, educational, and social needs with care, compassion, and professionalism, ensuring they are given equal opportunity to reach their full potential.";

/* EDITABLE starting points — rename, rewrite or delete freely. */
export const values = [
  { name: "Compassion", text: "We listen first and treat every young person with warmth and care.", icon: "heart" },
  { name: "Respect", text: "We honour each child's voice, background and pace of growth.", icon: "respect" },
  { name: "Integrity", text: "We are honest, keep our word and protect the trust families give us.", icon: "shield" },
  { name: "Collaboration", text: "We work hand in hand with parents, schools, communities and government.", icon: "handshake" },
  { name: "Empowerment", text: "We help young people find their own strength, voice and direction.", icon: "spark" },
  { name: "Safety", text: "We keep every space we create safe, confidential and child-centred.", icon: "lock" },
];

/* Team cards. Delete an item to remove a card (or set team = [] to hide
   the "Our Team" section). photo: 800 × 800 px. Optional: profession, photoAlt. */
export const team = [
  {
    name: "Mrs. Amarachi Ikonne",
    role: "Founder & Director",
    profession: "Child/Youth Counsellor",
    photo: "/images/team/amarachi-ikonne.webp",
    photoAlt: "Portrait of Mrs. Amarachi Ikonne, Founder and Director of The Bridge Help Centre, smiling in a soft pink dress",
  },
  {
    name: "Dr Kelechi Ikonne",
    role: "Director",
    profession: "Paediatrician",
    photo: "/images/team/kelechi-ikonne.webp",
    photoAlt: "Portrait of Dr Kelechi Ikonne, Director of The Bridge Help Centre, in a blue suit and tie",
  },
  {
    name: "Mr Kenneth Anele",
    role: "Member",
    profession: "Special Needs & Developmental Intervention Specialist",
    photo: "/images/team/kenneth-anele.webp",
    photoAlt: "Portrait of Mr Kenneth Anele, Special Needs and Developmental Intervention Specialist, smiling with arms folded in maroon scrubs",
  },
];
