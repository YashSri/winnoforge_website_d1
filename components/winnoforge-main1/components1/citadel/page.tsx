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
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/winnoforge-main1/components1/citadel/ScrollReveal";

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
  { value: "<10 min", label: "Mode switch time" },
];

const zones = [
  {
    icon: Hammer,
    name: "Build Floor",
    desc: "Sprint execution & prototyping",
  },
  {
    icon: Layers,
    name: "Flex Rooms",
    desc: "Thinking & collaboration",
  },
  {
    icon: Brain,
    name: "Cabins",
    desc: "Focused work & incubation",
  },
  {
    icon: Users,
    name: "Community Space",
    desc: "Demo day & events",
  },
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

const principles = [
  {
    num: "01",
    title: "Access is earned",
    body: "Entry requires demonstrated commitment, not enrollment.",
    bg: "bg-[#0E2E48]",
    numColor: "text-white/20",
    titleColor: "text-white",
    bodyColor: "text-[#a8c4db]",
    border: "border-[#1a3d5c]",
  },
  {
    num: "02",
    title: "Sprint cycles define rhythm",
    body: "Work is structured in time-boxed execution cycles.",
    bg: "bg-[#F0F3FA]",
    numColor: "text-[#395886]/25",
    titleColor: "text-[#0E2E48]",
    bodyColor: "text-[#31506a]",
    border: "border-[#cdd9e6]",
  },
  {
    num: "03",
    title: "Progress is visible",
    body: "Every team's output is tracked and publicly accountable.",
    bg: "bg-[#EDF5FC]",
    numColor: "text-[#395886]/25",
    titleColor: "text-[#0E2E48]",
    bodyColor: "text-[#31506a]",
    border: "border-[#c4d8eb]",
  },
  {
    num: "04",
    title: "Demos are mandatory",
    body: "No build is complete without a live demonstration.",
    bg: "bg-[#395886]",
    numColor: "text-white/20",
    titleColor: "text-white",
    bodyColor: "text-[#c8d9ee]",
    border: "border-[#4a6899]",
  },
  {
    num: "05",
    title: "AI is standard",
    body: "AI tools are embedded into every workflow and sprint.",
    bg: "bg-[#EDF5FC]",
    numColor: "text-[#395886]/25",
    titleColor: "text-[#0E2E48]",
    bodyColor: "text-[#31506a]",
    border: "border-[#c4d8eb]",
  },
  {
    num: "06",
    title: "Mentors are collaborators",
    body: "Mentors work alongside teams - not above them.",
    bg: "bg-[#F0F3FA]",
    numColor: "text-[#395886]/25",
    titleColor: "text-[#0E2E48]",
    bodyColor: "text-[#31506a]",
    border: "border-[#cdd9e6]",
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
        <section className="px-4 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                FORGE Winnovation Citadel
              </span>

              <h1 className="mx-auto mt-5 max-w-5xl font-varela text-center text-5xl font-semibold leading-[1.1] text-[#0E2E48] md:text-6xl lg:text-[4.25rem]">
                <span className="block">Not a Lab.</span>
                <span className="mt-2 block">Not a Co-Working Space.</span>
                <span className="mt-4 block text-[#395886]">
                  An Execution Environment.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl font-jakarta text-lg leading-relaxed text-[#31506a] md:text-xl">
                A system that converts students into builders - continuously.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="#system"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#395886] px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#48689a] sm:w-auto"
                >
                  Explore the System
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#layout"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#395886] px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-[#395886] transition hover:-translate-y-0.5 hover:bg-[#395886]/5 sm:w-auto"
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
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                Context
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                The Shift Has Already Begun
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {problemCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <ScrollReveal key={card.title} delay={index * 100}>
                    <article className="group rounded-3xl border border-[#cdd9e6] bg-white/75 p-7 transition hover:-translate-y-1 hover:border-[#395886]/40 hover:shadow-[0_16px_40px_rgba(13,45,72,0.12)]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2E48] text-[#C4F14E]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-jakarta text-lg font-semibold text-[#0E2E48]">
                        {card.title}
                      </h3>
                      <p className="mt-2 font-jakarta text-sm leading-relaxed text-[#31506a]">
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
              <h2 className="font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                The Future Engineer Is a Builder
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="overflow-hidden rounded-[30px] border border-[#c4d8eb] bg-gradient-to-r from-[#cde0f4] via-[#edf5fc] to-[#e5f0fd] shadow-[0_22px_72px_rgba(11,38,60,0.15)]">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.24em] text-[#6b8fac]">
                      Old Engineer
                    </p>
                    <ul className="mt-6 space-y-4">
                      {oldEngineer.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 font-jakarta text-base text-[#6b8fac] line-through decoration-[#6b8fac]/50"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6b8fac]/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden w-px bg-[#b3c9de]/60 md:block" />

                  <div className="border-t border-[#b3c9de]/60 bg-white/40 p-8 md:border-l md:border-t-0 md:p-10">
                    <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.24em] text-[#395886]">
                      Builder Engineer
                    </p>
                    <ul className="mt-6 space-y-4">
                      {newEngineer.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 font-jakarta text-base font-medium text-[#0E2E48]"
                        >
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 text-[#395886]"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <h2 className="font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                A Structural Response - <br className="hidden md:block" />
                Not a Cosmetic Upgrade
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={pillar.title} delay={index * 100}>
                    <div className="rounded-3xl border border-[#d0d9e7] bg-[#F0F3FA] p-7 shadow-[0_8px_28px_rgba(13,45,72,0.08)]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#395886] text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-jakarta text-lg font-semibold text-[#0E2E48]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 font-jakarta text-sm leading-relaxed text-[#31506a]">
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
              <div className="relative overflow-hidden rounded-[30px] border border-[#d3ddea] bg-[#F0F3FA] px-7 py-12 shadow-[0_28px_80px_rgba(13,45,72,0.14)] md:px-10 md:py-14">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-12 h-px w-full bg-gradient-to-r from-transparent via-[#395886]/15 to-transparent" />
                  <div className="absolute bottom-12 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#395886]/15 to-transparent" />
                  <div className="absolute left-[25%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#395886]/10 to-transparent" />
                  <div className="absolute right-[25%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#395886]/10 to-transparent" />
                </div>

                <div className="relative">
                  <div className="mx-auto max-w-3xl text-center">
                    <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                      What It Is
                    </span>
                    <h2 className="mt-4 font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                      The Citadel
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-[#31506a] md:text-lg">
                      A modular, execution-driven innovation environment
                      embedded inside a campus. Not a lab. A system.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-[#cdd9e6] bg-white/70 p-5 text-center"
                      >
                        <p className="font-varela text-3xl font-semibold text-[#395886] md:text-4xl">
                          {stat.value}
                        </p>
                        <p className="mt-2 font-jakarta text-xs font-medium uppercase tracking-[0.18em] text-[#31506a]">
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
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                Physical Design
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                Built to Operate, Not Just Occupy
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-[#cdd9e6] bg-gradient-to-br from-[#dce9f6] to-[#e5f0fd] md:min-h-96">
                <div className="text-center">
                  <Layers className="mx-auto h-10 w-10 text-[#395886]/40" />
                  <p className="mt-3 font-jakarta text-sm font-medium text-[#395886]/50">
                    Floor Plan - Coming Soon
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {zones.map((zone, index) => {
                const Icon = zone.icon;
                return (
                  <ScrollReveal key={zone.name} delay={index * 80}>
                    <div className="group rounded-2xl border border-[#cdd9e6] bg-white/75 p-5 transition hover:-translate-y-1 hover:border-[#395886]/40 hover:shadow-[0_12px_32px_rgba(13,45,72,0.1)]">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E2E48] text-[#C4F14E]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 font-jakarta text-sm font-semibold text-[#0E2E48]">
                        {zone.name}
                      </h3>
                      <p className="mt-1 font-jakarta text-xs leading-relaxed text-[#31506a]">
                        {zone.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={120}>
              <p className="mt-5 text-center font-jakarta text-xs font-medium text-[#395886]">
                Every space adapts in under 10 minutes.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section id="system" className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                How It Runs
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                Five Operating Modes
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {modes.map((mode, index) => {
                const Icon = mode.icon;
                return (
                  <ScrollReveal key={mode.title} delay={index * 80}>
                    <article className="group rounded-3xl border border-[#cdd9e6] bg-white/75 p-6 transition hover:-translate-y-1 hover:border-[#395886]/40 hover:shadow-[0_16px_40px_rgba(13,45,72,0.12)]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E2E48] text-[#C4F14E]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-jakarta text-base font-semibold text-[#0E2E48]">
                        {mode.title}
                      </h3>
                      <p className="mt-1.5 font-jakarta text-xs leading-relaxed text-[#31506a]">
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
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                How It Operates
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                Non-Negotiable Operating Principles
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <ScrollReveal key={principle.num} delay={index * 70}>
                  <article
                    className={`group rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(13,45,72,0.14)] ${principle.bg} ${principle.border}`}
                  >
                    <span
                      className={`font-varela text-4xl font-semibold ${principle.numColor}`}
                    >
                      {principle.num}
                    </span>
                    <h3
                      className={`mt-3 font-jakarta text-base font-semibold ${principle.titleColor}`}
                    >
                      {principle.title}
                    </h3>
                    <p
                      className={`mt-2 font-jakarta text-sm leading-relaxed ${principle.bodyColor}`}
                    >
                      {principle.body}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                Why It's Different
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                Traditional Lab vs Citadel
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="overflow-hidden rounded-3xl border border-[#cdd9e6]">
                <div className="grid grid-cols-2 border-b border-[#cdd9e6] bg-[#F0F3FA]">
                  <div className="px-6 py-4">
                    <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-[#6b8fac]">
                      Traditional Lab
                    </p>
                  </div>
                  <div className="border-l border-[#cdd9e6] bg-[#0E2E48] px-6 py-4">
                    <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-[#C4F14E]">
                      Citadel
                    </p>
                  </div>
                </div>

                {tableRows.map((row, index) => (
                  <div
                    key={row.traditional}
                    className={`grid grid-cols-2 border-b border-[#cdd9e6] last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-[#F0F3FA]/50"}`}
                  >
                    <div className="flex items-center gap-3 px-6 py-4">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6b8fac]/40" />
                      <p className="font-jakarta text-sm text-[#6b8fac]">
                        {row.traditional}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 border-l border-[#cdd9e6] px-6 py-4">
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 text-[#395886]"
                        aria-hidden="true"
                      />
                      <p className="font-jakarta text-sm font-medium text-[#0E2E48]">
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
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                Results
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
                Built For Real Outcomes
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2">
              <ScrollReveal delay={0}>
                <article className="rounded-[2rem] border border-[#d0d9e7] bg-[#F0F3FA] p-8 shadow-[0_18px_55px_rgba(13,45,72,0.12)] md:p-10">
                  <h3 className="font-varela text-3xl font-semibold text-[#395886] md:text-4xl">
                    For Institutions
                  </h3>
                  <ul className="mt-7 space-y-4">
                    {institutionOutcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-jakarta text-base text-[#31506a]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 shrink-0 rounded-full bg-[#395886]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <article className="rounded-[2rem] border border-[#d0d9e7] bg-[#0E2E48] p-8 shadow-[0_18px_55px_rgba(13,45,72,0.2)] md:p-10">
                  <h3 className="font-varela text-3xl font-semibold text-[#C4F14E] md:text-4xl">
                    For Students
                  </h3>
                  <ul className="mt-7 space-y-4">
                    {studentOutcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-jakarta text-base text-[#a8c4db]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 shrink-0 rounded-full bg-[#C4F14E]"
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
              <div className="overflow-hidden rounded-[2rem] border border-[#d0d9e7] bg-[#F0F3FA] shadow-[0_26px_80px_rgba(13,45,72,0.18)]">
                <div className="relative px-7 py-16 text-center md:px-10 md:py-20">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-0 top-16 h-px w-full bg-gradient-to-r from-transparent via-[#395886]/12 to-transparent" />
                    <div className="absolute bottom-16 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#395886]/12 to-transparent" />
                  </div>

                  <div className="relative">
                    <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#395886]">
                      Deploy It
                    </span>

                    <h2 className="mx-auto mt-5 max-w-3xl font-varela text-5xl font-semibold leading-tight text-[#0E2E48] md:text-6xl">
                      This Is Not a Concept.{" "}
                      <span className="text-[#395886]">It Is Deployable.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl font-jakarta text-base leading-relaxed text-[#31506a] md:text-lg">
                      The Citadel is a fully spec&apos;d, deployment-ready
                      environment. Bring it to your campus in one partnership
                      cycle.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <Link
                        href="/corporate#partnership"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#395886] px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#48689a] sm:w-auto"
                      >
                        Bring Citadel to Campus
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <Link
                        href="/corporate#partnership"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#395886] px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-[#395886] transition hover:-translate-y-0.5 hover:bg-[#395886]/5 sm:w-auto"
                      >
                        Request Proposal
                      </Link>
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
