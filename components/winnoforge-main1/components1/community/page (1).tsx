import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Calendar,
  FlaskConical,
  Globe,
  GraduationCap,
  Hammer,
  Layers,
  Lightbulb,
  RefreshCcw,
  UsersRound,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JoinButton from "@/components/modal/JoinButton";
import PartnerButton from "@/components/modal/PartnerButton";

export const metadata: Metadata = {
  title: "FORGE Community",
  description:
    "A network of builders, institutions, and innovators shaping the future together.",
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const benefitSections = [
  {
    id: "learning",
    heading: "Learning & Development",
    subtext: "",
    cards: [
      {
        Icon: Calendar,
        title: "Exclusive Access\nto Events",
        description:
          "Be part of workshops, hackathons, and sessions designed to push ideas into execution.",
      },
      {
        Icon: GraduationCap,
        title: "Continuous Learning Cycles",
        description:
          "Learn, apply, and iterate through structured cycles that ensure consistent growth and real skill development.",
      },
      {
        Icon: Lightbulb,
        title: "Idea to\nExecution",
        description:
          "Transform your ideas into real-world outcomes by building, testing, and refining solutions step by step.",
      },
    ],
  },
  {
    id: "practical",
    heading: "Practical Experience",
    subtext: "",
    cards: [
      {
        Icon: FlaskConical,
        title: "Research & Development",
        description:
          "Work on emerging ideas, explore new technologies, and contribute to real innovation projects.",
      },
      {
        Icon: Globe,
        title: "Real-world Collaboration",
        description:
          "Work alongside peers, mentors, and industry experts to solve real problems and build meaningful solutions together.",
      },
      {
        Icon: Hammer,
        title: "Builder-first Environment",
        description:
          "Focus on creating, experimenting, and shipping ideas quickly in a hands-on, maker-driven ecosystem.",
      },
    ],
  },
  {
    id: "career",
    heading: "Career & Industry",
    subtext: "",
    cards: [
      {
        Icon: Building2,
        title: "Institutional Collaborations",
        description:
          "FORGE partners with leading institutions through MoUs to build structured innovation ecosystems.",
      },
      {
        Icon: Briefcase,
        title: "Industry\nExposure",
        description:
          "Gain insights into real industry practices through interactions, mentorship, and hands-on experiences with professionals.",
      },
      {
        Icon: Layers,
        title: "Career\nPathways",
        description:
          "Explore structured opportunities, guidance, and support to navigate your career and unlock future possibilities.",
      },
    ],
  },
];

const valuePills = [
  { Icon: Hammer, label: "Builder-first Environment" },
  { Icon: RefreshCcw, label: "Continuous Learning Cycles" },
  { Icon: Globe, label: "Real-world Collaboration" },
  { Icon: UsersRound, label: "Access to Mentors & Peers" },
  { Icon: BadgeCheck, label: "Certifications" },
  { Icon: FlaskConical, label: "Research Programs" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CommunityNewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <HeroSection />
        {benefitSections.map((section) => (
          <BenefitSection key={section.id} section={section} />
        ))}
        <ValueStripSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-120 bg-[radial-gradient(circle_at_18%_20%,rgba(77,150,255,0.22),transparent_42%),radial-gradient(circle_at_85%_12%,rgba(77,150,255,0.14),transparent_40%)]" />

      <div className="mx-auto max-w-5xl px-2 text-center">
        <h1 className="mt-6 font-varela text-4xl font-bold leading-tight text-foreground md:text-7xl">
          The FORGE Community
        </h1>

        <p className="mx-auto mt-6 max-w-3xl font-jakarta text-lg leading-relaxed text-foreground/75 md:text-2xl">
          Join a growing ecosystem of builders, institutions, and innovators.
          Here's everything you get as a FORGE Community Partner.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <JoinButton className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_16px_35px_rgba(77,150,255,0.3)]">
            Join the Community
            <ArrowRight className="h-4 w-4" />
          </JoinButton>
        </div>
      </div>
    </section>
  );
}

// ─── 2–5. BENEFIT SECTIONS ────────────────────────────────────────────────────

type BenefitCard = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

type BenefitSectionProps = {
  section: {
    id: string;
    heading: string;
    subtext: string;
    cards: BenefitCard[];
  };
};

function BenefitSection({ section }: BenefitSectionProps) {
  return (
    <section id={section.id} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-varela text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {section.heading}
          </h2>
          {section.subtext && (
            <p className="mx-auto mt-4 max-w-2xl font-jakarta text-lg text-foreground/70">
              {section.subtext}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {section.cards.map((card, i) => {
            const Icon = card.Icon;
            return (
              <article
                key={`${section.id}-card-${i}`}
                className="group rounded-[2rem] border border-black/10 bg-white/88 p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(77,150,255,0.14)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.22)]">
                  <Icon className="h-6 w-6" />
                </div>

                {card.title && (
                  <h3 className="mt-6 whitespace-pre-line font-varela text-3xl font-semibold leading-snug text-foreground md:text-4xl">
                    {card.title}
                  </h3>
                )}

                {card.description && (
                  <p className="mt-4 font-jakarta text-lg leading-relaxed text-foreground/72">
                    {card.description}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 6. VALUE STRIP ───────────────────────────────────────────────────────────

function ValueStripSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-varela text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Inside the FORGE Community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-jakarta text-lg text-foreground/70">
            Built for builders. Backed by institutions. Connected to industry.
          </p>
        </div>

        <div className="rounded-4xl border border-black/10 bg-gradient-to-br from-[#F7FBFF] via-white to-[#EEF5FF] px-6 py-8 shadow-[0_16px_40px_rgba(24,42,72,0.08)] backdrop-blur-sm md:px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {valuePills.map((pill) => {
              const Icon = pill.Icon;
              return (
                <div
                  key={pill.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-black/10 bg-white/88 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(77,150,255,0.12)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.22)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-jakarta text-sm font-semibold leading-snug text-foreground">
                    {pill.label}
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

// ─── 8. FINAL CTA ─────────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section id="community-join" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-primary/12 bg-gradient-to-br from-[#F7FBFF] via-white to-[#EDF5FF] px-6 py-16 text-center text-foreground shadow-[0_30px_80px_rgba(77,150,255,0.12)] md:px-12 md:py-20">
        <h2 className="font-varela text-4xl font-bold leading-tight md:text-7xl">
          Become Part of FORGE
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-jakarta text-lg text-foreground/72 md:text-xl">
          Join a community where ideas turn into execution.
        </p>

        <PartnerButton className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)]">
          Partner With FORGE
          <ArrowRight className="h-4 w-4" />
        </PartnerButton>
      </div>
    </section>
  );
}
