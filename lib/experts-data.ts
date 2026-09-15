export interface Expert {
  id: string;
  name: string;
  designation: string;
  organisation: string;
  domain: string[];
  photo?: string;
  bio?: string;
  contribution?: string;
  quote?: string;
  profileSlug?: string;
  consentStatus: "pending" | "approved";
}

// Placeholder roster — none of these are verified/approved for publication yet.
// Replace with real, consented expert profiles before launch (see home.md §10 content rules).
export const experts: Expert[] = [
  {
    id: "expert-1",
    name: "Priya Suresh",
    designation: "Senior Product Manager",
    organisation: "Mentor Network",
    domain: ["Product", "Strategy"],
    contribution: "Sprint reviews and product-thinking workshops",
    consentStatus: "pending",
  },
  {
    id: "expert-2",
    name: "Karthik Iyer",
    designation: "Engineering Lead",
    organisation: "Mentor Network",
    domain: ["Engineering", "Systems Design"],
    contribution: "Technical mentorship and code review",
    consentStatus: "pending",
  },
  {
    id: "expert-3",
    name: "Ananya Bose",
    designation: "Founder",
    organisation: "Mentor Network",
    domain: ["Startups", "Fundraising"],
    contribution: "Demo Day evaluation and venture mentorship",
    consentStatus: "pending",
  },
  {
    id: "expert-4",
    name: "Rohan Kapoor",
    designation: "Engineering Manager",
    organisation: "Industry Partner",
    domain: ["Hiring", "Engineering"],
    contribution: "Industry problem statements and hiring pathway",
    consentStatus: "pending",
  },
];
