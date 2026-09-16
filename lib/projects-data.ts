export interface Project {
  id: string;
  title: string;
  summary: string;
  image?: string;
  team?: string;
  institution?: string;
  domain: string[];
  stage: "idea" | "research" | "prototype" | "mvp" | "venture";
  technologies?: string[];
  verified: boolean;
  slug: string;
}

// Placeholder showcase — none of these are verified deployments, funded, or commercially
// adopted. Replace with real, approved project data before launch (see home.md §11 content rules).
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Campus Waste Sorting Bot",
    summary: "A student team's Citadel-built prototype now piloting on campus.",
    image: "/webp/5.webp",
    team: "Builder Team",
    domain: ["IoT", "Sustainability"],
    stage: "prototype",
    technologies: ["Computer Vision", "Raspberry Pi"],
    verified: false,
    slug: "campus-waste-sorting-bot",
  },
  {
    id: "project-2",
    title: "Peer Mentorship Matching Tool",
    summary: "A builder team's in-progress internal tool for the mentor network.",
    image: "/webp/6.webp",
    team: "Builder Team",
    domain: ["Web Development", "AI"],
    stage: "mvp",
    technologies: ["Next.js", "AI Matching"],
    verified: false,
    slug: "peer-mentorship-matching-tool",
  },
  {
    id: "project-3",
    title: "Local Crop Health Tracker",
    summary: "An AgriTech prototype for early detection of crop stress using low-cost sensors.",
    image: "/ecosystem-builders-20260222.jpg",
    team: "Builder Team",
    domain: ["AgriTech", "IoT"],
    stage: "research",
    technologies: ["Sensors", "Data Analysis"],
    verified: false,
    slug: "local-crop-health-tracker",
  },
  {
    id: "project-4",
    title: "Community Health Access Map",
    summary: "A HealthTech idea mapping access gaps to primary care in underserved areas.",
    image: "/webp/activation-builders.webp",
    team: "Builder Team",
    domain: ["HealthTech", "Data"],
    stage: "idea",
    technologies: ["Mapping", "Public Data"],
    verified: false,
    slug: "community-health-access-map",
  },
];

export const projectDomains = [
  "AI",
  "Data",
  "HealthTech",
  "AgriTech",
  "IoT",
  "Web Development",
  "Sustainability",
] as const;
