import {
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  Cpu,
  FlaskConical,
  Hammer,
  Layers,
  RefreshCw,
  Shield,
  TrendingDown,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/winnoforge-main1/components1/citadel/ScrollReveal";
import PartnerButton from "@/components/modal/PartnerButton";

export const metadata: Metadata = {
  title: "FORGE Innovation Citadel",
  description:
    "An execution environment that converts students into builders - continuously.",
};

const problemCards = [
  {
    icon: TrendingDown,
    title: "Entry-Level Collapse",
    body: "Fewer starting opportunities for engineers.",
  },
  {
    icon: Cpu,
    title: "AI Replacing Execution",
    body: "Routine coding tasks are automated.",
  },
  {
    icon: Building2,
    title: "Institutional Risk",
    body: "Placement-driven models are weakening.",
  },
];

const oldEngineer = [
  "Writes code",
  "Solves DSA",
  "Completes syllabus",
  "Waits for instructions",
];

const newEngineer = [
  "Designs systems",
  "Solves real-world problems",
  "Ships working products",
  "Acts independently",
];

const pillars = [
  {
    icon: Cpu,
    title: "AI-native engineers",
    body: "Built for a world where AI is standard, not supplemental.",
  },
  {
    icon: RefreshCw,
    title: "Continuous innovation",
    body: "Sprint cycles that keep momentum and sharpen execution.",
  },
  {
    icon: BarChart3,
    title: "Measurable execution",
    body: "Progress tracked against real outputs - not effort or attendance.",
  },
];

const stats = [
  { value: "375 sqm", label: "Physical footprint" },
  { value: "8+", label: "Functional zones" },
  { value: "80-120", label: "Capacity" },
];

const modes = [
  {
    icon: Brain,
    title: "Think Mode",
    tag: "Define problems first",
  },
  {
    icon: Hammer,
    title: "Build Mode",
    tag: "Sprint. Ship. Repeat.",
  },
  {
    icon: Shield,
    title: "War Mode",
    tag: "Real constraints, full pressure",
  },
  {
    icon: Zap,
    title: "Demo Mode",
    tag: "Live builds, no slides",
  },
  {
    icon: FlaskConical,
    title: "Lab Mode",
    tag: "Structured experimentation",
  },
];

const tableRows = [
  { traditional: "Events", citadel: "Continuous execution" },
  { traditional: "Certificates", citadel: "Prototypes" },
  { traditional: "Passive learning", citadel: "Active building" },
  { traditional: "Infrastructure", citadel: "System" },
];

const institutionOutcomes = [
  "Stronger admissions positioning",
  "Better industry relevance",
  "AI-ready campus culture",
];

const studentOutcomes = [
  "Real execution experience",
  "AI-native capability",
  "Portfolio of shipped work",
];

export default function CitadelPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <section className="relative px-4 py-12 md:px-8 md:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-8rem] top-10 h-48 w-48 rounded-full bg-primary/16 blur-3xl" />
            <div className="absolute right-[-6rem] top-12 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                FORGE Winnovation Citadel
              </span>

              <h1 className="mx-auto mt-5 max-w-5xl font-varela text-center text-5xl font-semibold leading-[1.1] text-foreground md:text-6xl lg:text-[4.25rem]">
                <span className="block">Not a Lab.</span>
                <span className="mt-2 block">Not a Co-Working Space.</span>
                <span className="mt-4 block text-primary">
                  An Execution Environment.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl font-jakarta text-lg leading-relaxed text-foreground/70 md:text-xl">
                A system that converts students into builders - continuously.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="#system"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  Explore the System
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#layout"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-foreground transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  View Layout
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Context
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                The Shift Has Already Begun
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {problemCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <ScrollReveal key={card.title} delay={index * 100}>
                    <article className="group rounded-3xl border border-black/10 bg-white/85 p-7 shadow-[0_18px_50px_rgba(23,23,23,0.06)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(77,150,255,0.16)]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.28)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-jakarta text-lg font-semibold text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-2 font-jakarta text-sm leading-relaxed text-foreground/70">
                        {card.body}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <h2 className="font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                The Future Engineer Is a Builder
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="overflow-hidden rounded-[30px] border border-black/10 bg-gradient-to-r from-[#f6faff] via-white to-[#eef6ff] shadow-[0_22px_72px_rgba(23,23,23,0.08)]">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
                  <div>
                    <div className="p-8 md:p-10">
                      <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.24em] text-foreground/45">
                        Old Engineer
                      </p>
                      <ul className="mt-6 space-y-4">
                        {oldEngineer.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 font-jakarta text-base text-foreground/45 line-through decoration-foreground/30"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/25" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-black/8 bg-white/60 p-8 md:p-10">
                      <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        Builder Engineer
                      </p>
                      <ul className="mt-6 space-y-4">
                        {newEngineer.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 font-jakarta text-base font-medium text-foreground"
                          >
                            <CheckCircle2
                              className="h-4 w-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-black/8 lg:border-l lg:border-t-0">
                    <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#f6fbff] via-white to-[#edf5ff] p-8 md:p-10">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(77,150,255,0.16),transparent_48%)]" />
                      <Image
                        src="/citadel_fort_20260422.png"
                        alt="Citadel fort visual"
                        width={720}
                        height={720}
                        className="relative h-auto max-h-[520px] w-full object-contain"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <h2 className="font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                A Structural Response - <br className="hidden md:block" />
                Not a Cosmetic Upgrade
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={pillar.title} delay={index * 100}>
                    <div className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-[0_12px_34px_rgba(23,23,23,0.06)]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-jakarta text-lg font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 font-jakarta text-sm leading-relaxed text-foreground/70">
                        {pillar.body}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-gradient-to-br from-[#f7fbff] via-white to-[#eef5ff] px-7 py-12 shadow-[0_28px_80px_rgba(23,23,23,0.08)] md:px-10 md:py-14">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-12 h-px w-full bg-gradient-to-r from-transparent via-primary/12 to-transparent" />
                  <div className="absolute bottom-12 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/12 to-transparent" />
                  <div className="absolute left-[33.333%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/8 to-transparent" />
                  <div className="absolute right-[33.333%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/8 to-transparent" />
                </div>

                <div className="relative">
                  <div className="mx-auto max-w-3xl text-center">
                    <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                      What It Is
                    </span>
                    <h2 className="mt-4 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                      The Citadel
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
                      A modular, execution-driven innovation environment
                      embedded inside a campus. Not a lab. A system.
                    </p>
                  </div>

                  <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-black/10 bg-white/80 p-5 text-center shadow-[0_10px_30px_rgba(23,23,23,0.05)]"
                      >
                        <p className="font-varela text-3xl font-semibold text-primary md:text-4xl">
                          {stat.value}
                        </p>
                        <p className="mt-2 font-jakarta text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="layout" className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Physical Design
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Built to Operate, Not Just Occupy
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-[#f7fbff] via-white to-[#eef6ff] shadow-[0_18px_50px_rgba(23,23,23,0.06)] md:min-h-96">
                <div className="text-center">
                  <Layers className="mx-auto h-10 w-10 text-primary/35" />
                  <p className="mt-3 font-jakarta text-sm font-medium text-foreground/50">
                    Floor Plan - Coming Soon
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="system" className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                How It Runs
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Five Operating Modes
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {modes.map((mode, index) => {
                const Icon = mode.icon;
                return (
                  <ScrollReveal key={mode.title} delay={index * 80}>
                    <article className="group rounded-3xl border border-black/10 bg-white/85 p-6 shadow-[0_14px_36px_rgba(23,23,23,0.05)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_rgba(77,150,255,0.15)]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.24)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-jakarta text-base font-semibold text-foreground">
                        {mode.title}
                      </h3>
                      <p className="mt-1.5 font-jakarta text-xs leading-relaxed text-foreground/70">
                        {mode.tag}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Why It's Different
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Traditional Lab vs Citadel
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-[0_16px_44px_rgba(23,23,23,0.06)]">
                <div className="grid grid-cols-2 border-b border-black/10 bg-gradient-to-r from-[#f5faff] to-[#edf5ff]">
                  <div className="px-6 py-4">
                    <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                      Traditional Lab
                    </p>
                  </div>
                  <div className="border-l border-black/10 bg-gradient-to-r from-primary to-[#78B2FF] px-6 py-4">
                    <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      Citadel
                    </p>
                  </div>
                </div>

                {tableRows.map((row, index) => (
                  <div
                    key={row.traditional}
                    className={`grid grid-cols-2 border-b border-black/10 last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#f7fbff]"}`}
                  >
                    <div className="flex items-center gap-3 px-6 py-4">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/25" />
                      <p className="font-jakarta text-sm text-foreground/55">
                        {row.traditional}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 border-l border-black/10 px-6 py-4">
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <p className="font-jakarta text-sm font-medium text-foreground">
                        {row.citadel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Results
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Built For Real Outcomes
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2">
              <ScrollReveal delay={0}>
                <article className="rounded-[2rem] border border-black/10 bg-white/85 p-8 shadow-[0_18px_55px_rgba(23,23,23,0.06)] md:p-10">
                  <h3 className="font-varela text-3xl font-semibold text-primary md:text-4xl">
                    For Institutions
                  </h3>
                  <ul className="mt-7 space-y-4">
                    {institutionOutcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-jakarta text-base text-foreground/72"
                      >
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 shrink-0 rounded-full bg-primary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <article className="rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary to-[#78B2FF] p-8 shadow-[0_18px_55px_rgba(77,150,255,0.24)] md:p-10">
                  <h3 className="font-varela text-3xl font-semibold text-white md:text-4xl">
                    For Students
                  </h3>
                  <ul className="mt-7 space-y-4">
                    {studentOutcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-jakarta text-base text-white/90"
                      >
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 shrink-0 rounded-full bg-white/90"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="px-4 pb-6 pt-10 md:px-8 md:pt-14">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br from-[#f7fbff] via-white to-[#edf5ff] shadow-[0_26px_80px_rgba(23,23,23,0.08)]">
                <div className="relative px-7 py-16 text-center md:px-10 md:py-20">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-0 top-16 h-px w-full bg-gradient-to-r from-transparent via-primary/12 to-transparent" />
                    <div className="absolute bottom-16 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/12 to-transparent" />
                  </div>

                  <div className="relative">
                    <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                      Deploy It
                    </span>

                    <h2 className="mx-auto mt-5 max-w-3xl font-varela text-5xl font-semibold leading-tight text-foreground md:text-6xl">
                      This Is Not a Concept.{" "}
                      <span className="text-primary">It Is Deployable.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
                      The Citadel is a fully spec&apos;d, deployment-ready
                      environment. Bring it to your campus in one partnership
                      cycle.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <PartnerButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto">
                        Bring Citadel to Campus
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </PartnerButton>
                      <PartnerButton className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-foreground transition hover:-translate-y-0.5 hover:bg-white sm:w-auto">
                        Request Proposal
                      </PartnerButton>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
