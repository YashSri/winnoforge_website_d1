import { Building2, FlaskConical, Lightbulb, Rocket, UsersRound, Users } from "lucide-react";
import type { StakeholderType } from "@/components/collaborate/CollaborateForm";

export interface Pathway {
  icon: typeof Building2;
  title: string;
  forWhom: string;
  description: string;
  cta: string;
  stakeholder: StakeholderType;
}

export const pathways: Pathway[] = [
  {
    icon: Building2,
    title: "Institutional Collaboration",
    forWhom: "Schools, colleges, universities, and training institutions",
    description: "Work with FORGE to explore learning and innovation experiences aligned with your institution's learners, faculty, infrastructure, and goals.",
    cta: "Discuss Institutional Collaboration",
    stakeholder: "College / University",
  },
  {
    icon: Building2,
    title: "Industry and Corporate Collaboration",
    forWhom: "Companies, startups, and professional teams",
    description: "Connect industry experience and real-world challenges with learners, institutions, and emerging builders.",
    cta: "Explore Industry Collaboration",
    stakeholder: "Company",
  },
  {
    icon: Lightbulb,
    title: "Mentor and Expert Collaboration",
    forWhom: "Professionals, founders, researchers, and educators",
    description: "Share your experience, challenge assumptions, guide projects, and help participants develop stronger practical understanding.",
    cta: "Become a Mentor or Expert",
    stakeholder: "Mentor / Expert",
  },
  {
    icon: Rocket,
    title: "Founder and Venture Collaboration",
    forWhom: "Founders, aspiring entrepreneurs, and early-stage teams",
    description: "Explore problem discovery, prototyping, validation, and ecosystem connections as you build.",
    cta: "Discuss a Founder Initiative",
    stakeholder: "Founder / Venture",
  },
  {
    icon: UsersRound,
    title: "Community and Event Collaboration",
    forWhom: "Communities, clubs, student groups, and event organisers",
    description: "Create meaningful opportunities for people to learn, connect, collaborate, and share practical work.",
    cta: "Propose a Community Activity",
    stakeholder: "Community / Event",
  },
  {
    icon: FlaskConical,
    title: "Research and Innovation Collaboration",
    forWhom: "Researchers, faculty teams, and organisations exploring applied problems",
    description: "Explore applied research, technical experimentation, and cross-disciplinary collaboration.",
    cta: "Explore Research Collaboration",
    stakeholder: "Researcher",
  },
];

export default function CollaborationPathways({
  onSelect,
}: {
  onSelect: (stakeholder: StakeholderType) => void;
}) {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Collaboration Pathways
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          How Would You Like to Collaborate?
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pathways.map((pathway) => {
          const Icon = pathway.icon;
          return (
            <div
              key={pathway.title}
              className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-clash text-lg font-semibold text-foreground">{pathway.title}</h3>
              <p className="font-jakarta text-xs font-medium uppercase tracking-wide text-foreground/40">
                {pathway.forWhom}
              </p>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {pathway.description}
              </p>
              <button
                type="button"
                onClick={() => onSelect(pathway.stakeholder)}
                className="mt-auto w-fit font-jakarta text-sm font-semibold text-primary transition-colors hover:text-primary/70"
              >
                {pathway.cta} &rarr;
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
