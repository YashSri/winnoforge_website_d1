export type ContributionType =
  | "Mentor"
  | "Trainer"
  | "Speaker"
  | "Industry Expert"
  | "Founder"
  | "Research Contributor"
  | "Faculty Contributor"
  | "Reviewer"
  | "Ecosystem Advisor";

export interface MentorProfile {
  id: string;
  name: string;
  designation: string;
  organisation: string;
  expertiseCategory: string;
  expertiseTags: string[];
  bio: string;
  contributionType: ContributionType;
  linkedinUrl?: string;
  confirmed: boolean;
}

// Placeholder roster — none of these are verified, approved, consented profiles yet.
// Replace with real, consented mentor/expert data before launch (see Mentors_and_Experts.md §15/§22).
export const expertiseCategories = [
  "Technology and Engineering",
  "Innovation and Research",
  "Entrepreneurship and Venture Building",
  "Industry and Professional Practice",
  "Education and Institutional Development",
  "Creative and Communication Practice",
] as const;

export const mentors: MentorProfile[] = [
  {
    id: "priya-suresh",
    name: "Priya Suresh",
    designation: "Senior Product Manager",
    organisation: "Mentor Network",
    expertiseCategory: "Innovation and Research",
    expertiseTags: ["Product", "Strategy", "Design Thinking"],
    bio: "Works with builders on problem discovery, prototyping, and product strategy across sprint reviews.",
    contributionType: "Mentor",
    confirmed: false,
  },
  {
    id: "karthik-iyer",
    name: "Karthik Iyer",
    designation: "Engineering Lead",
    organisation: "Mentor Network",
    expertiseCategory: "Technology and Engineering",
    expertiseTags: ["Software Development", "Systems Design"],
    bio: "Provides technical guidance and code review for builders working on full-stack projects.",
    contributionType: "Trainer",
    confirmed: false,
  },
  {
    id: "ananya-bose",
    name: "Ananya Bose",
    designation: "Founder",
    organisation: "Mentor Network",
    expertiseCategory: "Entrepreneurship and Venture Building",
    expertiseTags: ["Founder Journeys", "Fundraising", "Venture Operations"],
    bio: "Supports aspiring founders from problem discovery through pitch development and Demo Day evaluation.",
    contributionType: "Founder",
    confirmed: false,
  },
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    designation: "Engineering Manager",
    organisation: "Industry Partner",
    expertiseCategory: "Industry and Professional Practice",
    expertiseTags: ["Hiring", "Career Readiness", "Team Collaboration"],
    bio: "Brings industry problem statements and hiring-pathway perspective to builder cohorts.",
    contributionType: "Industry Expert",
    confirmed: false,
  },
  {
    id: "devansh-rao",
    name: "Devansh Rao",
    designation: "Senior Business Analyst",
    organisation: "Mentor Network",
    expertiseCategory: "Industry and Professional Practice",
    expertiseTags: ["Requirements", "Process Analysis", "Data-Informed Decisions"],
    bio: "Reviews business-analysis artefacts and mentors builders through structured stakeholder work.",
    contributionType: "Reviewer",
    confirmed: false,
  },
  {
    id: "meera-nair",
    name: "Meera Nair",
    designation: "Analytics Lead",
    organisation: "Mentor Network",
    expertiseCategory: "Technology and Engineering",
    expertiseTags: ["Data Analytics", "Dashboarding", "SQL"],
    bio: "Leads live dashboard walkthroughs and analytics reviews for the Data Analytics track.",
    contributionType: "Trainer",
    confirmed: false,
  },
];
