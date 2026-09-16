import Link from "next/link";
import { Award, Building2, Lightbulb, Network, Users, Wrench } from "lucide-react";

const pillars = [
  {
    key: "certification",
    icon: Award,
    title: "Certification & Skill Development",
    description: "Structured courses in emerging technologies, analytics, development, business, and automation.",
    href: "/programs",
  },
  {
    key: "execution",
    icon: Wrench,
    title: "Practical Execution",
    description: "Assignments, projects, workshops, challenges, and demonstrations that turn concepts into visible work.",
    href: "/programs",
  },
  {
    key: "mentorship",
    icon: Users,
    title: "Mentorship & Industry Exposure",
    description: "Interactions with practitioners, founders, technical experts, corporate leaders, and domain mentors.",
    href: "/community",
  },
  {
    key: "innovation",
    icon: Lightbulb,
    title: "Innovation & Entrepreneurship",
    description: "Problem discovery, ideation, validation, prototyping, venture development, and showcase opportunities.",
    href: "/citadel1",
  },
  {
    key: "campus",
    icon: Network,
    title: "Campus & Community",
    description: "A connected environment where students, faculty, mentors, institutions, and industry partners collaborate.",
    href: "/ecosystem",
  },
  {
    key: "citadel",
    icon: Building2,
    title: "FORGE Citadel",
    description: "A separate execution environment for structured activation, focused sprints, incubation, and venture development — not a certification track.",
    href: "/citadel1",
  },
];

export default function OfferingsGrid() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
        One Ecosystem. Multiple Pathways.
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isCitadel = pillar.key === "citadel";
          return (
            <Link
              key={pillar.key}
              href={pillar.href}
              className={`group flex flex-col gap-4 rounded-[2rem] p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)] ${
                isCitadel
                  ? "border border-white/10 bg-[linear-gradient(135deg,#0E2E48_0%,var(--color-primary)_100%)] text-white"
                  : "border border-black/5 bg-white"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                  isCitadel
                    ? "bg-white/15 text-white"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className={`font-clash text-xl font-semibold ${isCitadel ? "text-white" : "text-foreground"}`}>
                {pillar.title}
              </h3>
              <p className={`font-jakarta text-sm leading-relaxed ${isCitadel ? "text-white/80" : "text-foreground/70"}`}>
                {pillar.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
