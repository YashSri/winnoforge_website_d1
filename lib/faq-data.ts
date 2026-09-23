export interface FaqStep {
  step: string;
  title: string;
}

export interface FaqItem {
  id?: string;
  number?: string;
  question: string;
  answer: string;
  steps?: FaqStep[];
}

export const FORGE_CANONICAL_FAQS: FaqItem[] = [
  {
    id: "forge-what-is",
    number: "01",
    question: "What is FORGE?",
    answer:
      "FORGE is the execution system that turns campus talent into builders — moving students from ideas to shipped prototypes through structured sprints, mentorship, and ecosystem collaboration.",
    steps: [
      { step: "01", title: "Sprints & Projects" },
      { step: "02", title: "Dedicated Mentorship" },
      { step: "03", title: "Shipped Prototypes" },
    ],
  },
  {
    id: "forge-who-participates",
    number: "02",
    question: "Who can participate in the FORGE ecosystem?",
    answer:
      "Learners, builders, mentors, faculty, institutions, founders, and industry contributors — subject to specific program and activity pathways across our campus network.",
    steps: [
      { step: "01", title: "Campus Learners" },
      { step: "02", title: "Active Builders" },
      { step: "03", title: "Institutional Partners" },
    ],
  },
  {
    id: "forge-experience-needed",
    number: "03",
    question: "Do I need prior experience to get involved?",
    answer:
      "No. FORGE is built to take builders from wherever they are starting — the structured sprints, hands-on workshops, and peer mentorship close the experience gap.",
    steps: [
      { step: "01", title: "Open Entry" },
      { step: "02", title: "Structured Guidance" },
      { step: "03", title: "Demonstrated Ability" },
    ],
  },
  {
    id: "forge-delivery-format",
    number: "04",
    question: "Are community and learning activities online, in-person, or hybrid?",
    answer:
      "Both — activities range from digital sessions and remote project coordination to in-person campus workshops, bootcamps, and Citadel studio sessions.",
    steps: [
      { step: "01", title: "Digital Sessions" },
      { step: "02", title: "Campus Chapters" },
      { step: "03", title: "In-Person Citadel" },
    ],
  },
  {
    id: "forge-collaborate-partners",
    number: "05",
    question: "How do institutions, mentors, and industry partners collaborate?",
    answer:
      "Partners bring real-world challenges, mentor builders, support campus chapters, and evaluate shipped prototypes through structured MoUs and collaboration pathways.",
    steps: [
      { step: "01", title: "Institutional MoUs" },
      { step: "02", title: "Industry Problems" },
      { step: "03", title: "Talent & Vetting" },
    ],
  },
];
