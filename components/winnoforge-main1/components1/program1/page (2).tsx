import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calendar,
  Flame,
  Globe,
  Layers,
  Network,
  Rocket,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PartnerButton from "@/components/modal/PartnerButton";

export const metadata: Metadata = {
  title: "FORGE Programs",
  description:
    "Not a course platform. A structured execution ecosystem that turns students into builders and founders.",
};

const journeyStages = [
  {
    number: "01",
    Icon: Calendar,
    title: "Activation Program",
    duration: "6 Months",
    tagline: "Building the rhythm that builds the culture.",
    points: [
      "Monthly industry seminar followed by a hands-on workshop",
      "Hackathon every two months as a real pressure test, not a competition",
      "Contribution quality tracked across the full six months",
      "Top performers selected into the Bootcamp based on execution data",
    ],
    outcome:
      "You develop the builder's rhythm. The ecosystem finds its top 10%.",
  },
  {
    number: "02",
    Icon: Trophy,
    title: "One-Week Bootcamp",
    duration: "Merit-Selected",
    tagline: "From potential to preparedness in seven days.",
    points: [
      "Entry is earned, not enrolled, based on Activation performance",
      "Refine real problem statements with structured validation frameworks",
      "Design MVP architecture for a specific user with a specific problem",
      "Articulate a viable business model and defend it under mentor scrutiny",
    ],
    outcome:
      "You leave with a defined direction, a build-ready roadmap, and team alignment.",
  },
  {
    number: "03",
    Icon: Flame,
    title: "Innovation Citadel",
    duration: "Execution Environment",
    tagline: "Not a lab. Not a classroom. An execution environment.",
    points: [
      "Sprint cycles with defined work periods and structured review checkpoints",
      "Real prototypes, not wireframes. Real users, not assumptions",
      "Merit-based access so the Citadel stays aspirational",
      "AI tools integrated as leverage, not shortcuts",
    ],
    outcome: "You build something real. Every week, something moves forward.",
  },
  {
    number: "04",
    Icon: Rocket,
    title: "Venture Refinement Phase",
    duration: "6 Months",
    tagline: "Six months from validated idea to investor-ready venture.",
    points: [
      "Domain-specific mentors engaged through sprint reviews, not advisory calls",
      "Stable MVPs that real users can interact with",
      "User validation conducted with structure: outreach, evidence, iteration",
      "Business models tested against real willingness to pay",
    ],
    outcome:
      "MVP maturity: functional product, documented validation, clear business model.",
  },
  {
    number: "05",
    Icon: Zap,
    title: "Annual Innovation Summit",
    duration: "National Event",
    tagline: "Where the year's work meets informed scrutiny.",
    points: [
      "Demo days with validated prototypes presented to investors and industry executives",
      "Curated investor meets with structured matchmaking",
      "Real evaluation panels, real questions, real feedback",
      "The annual proof that what FORGE builds is not performative",
    ],
    outcome:
      "Visibility, funding potential, and strategic relationships, all earned.",
  },
];

const ecosystemCards = [
  {
    Icon: Flame,
    title: "Innovation Citadel",
    description: "The physical and cultural anchor of every FORGE campus.",
    points: [
      "Sprint-based execution",
      "Visible accountability",
      "Merit-based access",
    ],
  },
  {
    Icon: Network,
    title: "National Problem Statement Network",
    description:
      "Real challenges from government, defence, and industry distributed to campus teams.",
    points: [
      "Structured problem intake",
      "Multi-campus parallel exploration",
      "Strategic relevance",
    ],
  },
  {
    Icon: Globe,
    title: "Cross-College Network",
    description: "Talent collaboration without institutional walls.",
    points: [
      "Cross-campus team formation",
      "Shared digital infrastructure",
      "Domain task forces",
    ],
  },
  {
    Icon: Users,
    title: "Student Execution Engine",
    description:
      "The operational layer that makes students operators, not recipients.",
    points: [
      "Sprint-cycle leadership",
      "Output-based recognition",
      "FORGE Fellowship pipeline",
    ],
  },
  {
    Icon: Building2,
    title: "Industry Integration",
    description: "Continuous industry presence, not occasional guest talks.",
    points: [
      "Problem statement collaborations",
      "Mentor-matched sprint reviews",
      "Pre-filtered talent pipeline",
    ],
  },
  {
    Icon: BadgeCheck,
    title: "Institutional MoU Network",
    description:
      "Formal campus partnerships that give FORGE structured access and national scale.",
    points: [
      "MoU-backed campus deployment",
      "Standardised Citadel setup",
      "National expansion infrastructure",
    ],
  },
];

const outcomes = [
  {
    Icon: Target,
    title: "Real Products Built",
    description:
      "Not wireframes. Not slide decks. Working software that real users interact with and validate.",
  },
  {
    Icon: Layers,
    title: "Startup Creation",
    description:
      "From problem discovery to MVP to investor-ready narrative across a structured execution arc.",
  },
  {
    Icon: Globe,
    title: "Industry Exposure",
    description:
      "Work alongside professionals, not just hear from them. Real mentors, real problem statements, real stakes.",
  },
  {
    Icon: Rocket,
    title: "Execution Experience",
    description:
      "Sprint cycles, user validation, and feedback iteration before you graduate.",
  },
  {
    Icon: BadgeCheck,
    title: "FORGE Certification",
    description:
      "Tied to verified output, not attendance. A credential that communicates what you actually built.",
  },
];

const audienceTypes = [
  {
    label: "The Builder",
    description:
      "You want to ship things. Not attend more lectures. FORGE gives you the structure, the problems, and the accountability to actually build.",
  },
  {
    label: "The Aspiring Founder",
    description:
      "You have the ambition but not the framework. FORGE replaces vague intention with a structured path from idea to investor-ready venture.",
  },
  {
    label: "The AI-Era Engineer",
    description:
      "You understand that the bar has shifted. FORGE prepares you for the skills that remain valuable: systems thinking, ownership, and building under constraint.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <HeroSection />
        <ExecutionJourneySection />
        <CitadelHighlightSection />
        <EcosystemSection />
        <OutcomesSection />
        <AudienceSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-120 bg-[radial-gradient(circle_at_18%_20%,rgba(77,150,255,0.22),transparent_42%),radial-gradient(circle_at_85%_12%,rgba(77,150,255,0.14),transparent_40%)]" />

      <div className="mx-auto max-w-5xl px-2 text-center">
        <p className="mb-4 font-jakarta text-sm font-semibold uppercase tracking-widest text-primary/60">
          The FORGE Execution System
        </p>

        <h1 className="mt-2 font-varela text-4xl font-bold leading-tight text-foreground md:text-7xl">
          Not a Program.
          <br />A System.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl font-jakarta text-lg leading-relaxed text-foreground/75 md:text-xl">
          FORGE is not a collection of courses. It is a structured execution
          pipeline that moves students from skill foundation to validated
          building to real startups through a system designed to produce
          builders, not attendees.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#execution-journey"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_16px_35px_rgba(77,150,255,0.3)]"
          >
            See the Pipeline
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ExecutionJourneySection() {
  return (
    <section
      id="execution-journey"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, #FDFBF7 0%, #F7FBFF 48%, #EEF4FF 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <h2 className="mt-2 font-varela text-4xl font-bold leading-tight text-foreground md:text-5xl">
            The Execution Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-jakarta text-lg text-foreground/70">
            Five sequential stages. Each one earns entry to the next. This is
            not a menu of options. It is a pipeline designed to produce
            builders.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {journeyStages.map((stage) => {
            const Icon = stage.Icon;
            return (
              <article
                key={stage.number}
                className="group grid grid-cols-1 gap-6 rounded-[2rem] border border-black/10 bg-white/88 p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(77,150,255,0.14)] md:grid-cols-[auto_1fr_auto]"
              >
                <div className="flex items-start gap-4 md:flex-col md:items-center md:gap-3">
                  <span className="font-varela text-5xl font-bold leading-none text-primary/15 md:text-6xl">
                    {stage.number}
                  </span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.24)]">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-varela text-2xl font-semibold text-foreground md:text-3xl">
                      {stage.title}
                    </h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-jakarta text-xs font-semibold text-primary/75">
                      {stage.duration}
                    </span>
                  </div>
                  <p className="mt-1 font-jakarta text-sm font-medium text-primary/65">
                    {stage.tagline}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {stage.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 font-jakarta text-sm text-foreground/72"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex min-w-[200px] flex-col justify-center rounded-2xl border border-primary/10 bg-gradient-to-br from-[#F7FBFF] to-[#EEF5FF] px-5 py-4">
                  <p className="font-jakarta text-xs font-semibold uppercase tracking-wider text-primary/55">
                    Outcome
                  </p>
                  <p className="mt-2 font-jakarta text-sm leading-relaxed text-foreground/78">
                    {stage.outcome}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CitadelHighlightSection() {
  const pillars = [
    {
      label: "Sprint Cycles",
      sub: "Defined work periods with structured review",
    },
    {
      label: "Merit Access",
      sub: "Earned entry creates aspiration and culture",
    },
    {
      label: "Real Prototypes",
      sub: "Working software, not wireframes or decks",
    },
    {
      label: "AI as Leverage",
      sub: "Tools integrated into every execution cycle",
    },
    {
      label: "Weekly Reviews",
      sub: "Every week, something tangible moves forward",
    },
    {
      label: "Milestone Accountability",
      sub: "No undefined periods, always a checkpoint",
    },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-primary/12 bg-gradient-to-br from-[#F7FBFF] via-white to-[#EDF5FF] px-6 py-16 text-foreground shadow-[0_30px_80px_rgba(77,150,255,0.12)] md:px-12 md:py-20">
        <p className="font-jakarta text-sm font-semibold uppercase tracking-widest text-primary/60">
          The Execution Core
        </p>
        <h2 className="mt-3 font-varela text-4xl font-bold leading-tight md:text-6xl">
          The Innovation
          <br />
          <span className="text-primary">Citadel</span>
        </h2>
        <p className="mt-5 max-w-2xl font-jakarta text-lg text-foreground/72">
          Not a lab. Not a coworking space. Not a rebranded computer room. The
          Citadel is an execution environment and the difference is everything.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-2xl border border-primary/10 bg-white/85 px-5 py-4 shadow-[0_12px_30px_rgba(77,150,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(77,150,255,0.12)]"
            >
              <p className="font-varela text-lg font-semibold text-foreground">
                {pillar.label}
              </p>
              <p className="mt-1 font-jakarta text-sm text-foreground/65">
                {pillar.sub}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 font-jakarta text-base italic text-primary/65">
          "The Citadel is designed to make innovation visible. When building is
          visible, it becomes normalised. When normalised, it becomes expected."
        </p>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <p className="font-jakarta text-sm font-semibold uppercase tracking-widest text-primary/60">
            The Infrastructure
          </p>
          <h2 className="mt-2 font-varela text-4xl font-bold leading-tight text-foreground md:text-5xl">
            The FORGE Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-jakarta text-lg text-foreground/70">
            Six interconnected systems that make the execution pipeline work at
            scale.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ecosystemCards.map((card) => {
            const Icon = card.Icon;
            return (
              <article
                key={card.title}
                className="group rounded-[2rem] border border-black/10 bg-white/88 p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(77,150,255,0.14)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.22)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-varela text-xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 font-jakarta text-sm text-foreground/65">
                  {card.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {card.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 font-jakarta text-xs text-foreground/60"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <p className="font-jakarta text-sm font-semibold uppercase tracking-widest text-primary/60">
            What You Leave With
          </p>
          <h2 className="mt-2 font-varela text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Outcomes, Not Just Learning
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-jakarta text-lg text-foreground/70">
            In a world saturated with certificates, credibility is built on what
            you shipped, not what you attended.
          </p>
        </div>

        <div className="mt-12 rounded-4xl border border-black/10 bg-gradient-to-br from-[#F7FBFF] via-white to-[#EEF5FF] px-6 py-10 shadow-[0_16px_40px_rgba(24,42,72,0.08)] backdrop-blur-sm md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/88 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(77,150,255,0.12)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.22)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-varela text-base font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="font-jakarta text-sm leading-relaxed text-foreground/65">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="font-jakarta text-sm font-semibold uppercase tracking-widest text-primary/60">
            Is This For You?
          </p>
          <h2 className="mt-2 font-varela text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Who FORGE Is Built For
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {audienceTypes.map((type) => (
            <article
              key={type.label}
              className="rounded-[2rem] border border-black/10 bg-white/88 p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(77,150,255,0.14)]"
            >
              <h3 className="font-varela text-2xl font-semibold text-foreground">
                {type.label}
              </h3>
              <p className="mt-4 font-jakarta text-base leading-relaxed text-foreground/70">
                {type.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-primary/12 bg-gradient-to-br from-[#F7FBFF] via-white to-[#EDF5FF] px-6 py-16 text-center text-foreground shadow-[0_30px_80px_rgba(77,150,255,0.12)] md:px-12 md:py-20">
        <p className="font-jakarta text-sm font-semibold uppercase tracking-widest text-primary/60">
          The FORGE Philosophy
        </p>
        <h2 className="mt-4 font-varela text-4xl font-bold leading-tight md:text-7xl">
          Programs end.
          <br />
          <span className="text-primary">Systems evolve.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-jakarta text-lg text-foreground/72">
          The difference between a campus that hosts innovation and a campus
          that embodies it is entirely a question of which one it chose to
          build. FORGE is the system. You are the builder.
        </p>
        <PartnerButton className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)]">
          Enter the Ecosystem
          <ArrowRight className="h-4 w-4" />
        </PartnerButton>
      </div>
    </section>
  );
}
