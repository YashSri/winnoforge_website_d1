import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  Cpu,
  Flag,
  FlaskConical,
  GraduationCap,
  Hammer,
  Handshake,
  Landmark,
  Layers,
  Lightbulb,
  MessageSquare,
  Monitor,
  Network,
  Presentation,
  RefreshCw,
  Rocket,
  Scale,
  Shield,
  TrendingDown,
  TrendingUp,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/winnoforge-main1/components1/citadel/ScrollReveal";
import PartnerButton from "@/components/modal/PartnerButton";
import ZoneCard, { type Zone } from "@/components/citadel/ZoneCard";
import Lightbox from "@/components/shared/Lightbox";
import VoicesCarousel from "@/components/shared/VoicesCarousel";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CardGrid from "@/components/shared/CardGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import WhatIsCitadel from "@/components/citadel/WhatIsCitadel";
import MentorshipInside from "@/components/citadel/MentorshipInside";
import ProjectInnovationCulture from "@/components/citadel/ProjectInnovationCulture";
import IntegrityAuthenticWork from "@/components/citadel/IntegrityAuthenticWork";
import CommunityAndCulture from "@/components/citadel/CommunityAndCulture";
import ProgressRecognition from "@/components/citadel/ProgressRecognition";
import InstitutionalIndustryConnections from "@/components/citadel/InstitutionalIndustryConnections";
import CodeOfConduct from "@/components/citadel/CodeOfConduct";
import CitadelFinalCta from "@/components/citadel/CitadelFinalCta";
import AnnualSummit from "@/components1/ecosystem/AnnualSummit";
import FutureVision from "@/components1/ecosystem/FutureVision";

export const metadata = pageMetadata({
  title: "FORGE Innovation Citadel",
  description:
    "An execution environment that converts students into builders - continuously.",
  path: "/citadel1",
});

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

const zones: Zone[] = [
  {
    name: "Build Floor",
    description: "The main open-plan execution space where sprint teams build and iterate.",
    dimensions: "120 sqm",
  },
  {
    name: "Flex Room 1",
    description: "A reconfigurable space for workshops, reviews, and team breakouts.",
    dimensions: "40 sqm",
  },
  {
    name: "Flex Room 2",
    description: "A second flex space for parallel sessions and smaller sprint pods.",
    dimensions: "35 sqm",
  },
  {
    name: "Cabin 1",
    description: "A private cabin for focused work and founder/mentor 1:1s.",
    dimensions: "12 sqm",
  },
  {
    name: "Cabin 2",
    description: "A private cabin for focused work and founder/mentor 1:1s.",
    dimensions: "12 sqm",
  },
  {
    name: "Cabin 3",
    description: "A private cabin for focused work and founder/mentor 1:1s.",
    dimensions: "12 sqm",
  },
  {
    name: "Cabin 4",
    description: "A private cabin for focused work and founder/mentor 1:1s.",
    dimensions: "12 sqm",
  },
  {
    name: "Community Space",
    description: "An open lounge for cross-team collaboration, demos, and downtime.",
    dimensions: "60 sqm",
  },
  {
    name: "Lab-in-a-Box",
    description: "A modular hardware/prototyping bench for physical builds.",
    dimensions: "25 sqm",
  },
];

const founderVoice = [
  {
    quote: "The Citadel isn't a room you book — it's a system you live inside while you build.",
    name: "Founding Team",
    designation: "Founder",
    org: "FORGE",
  },
];

const galleryImages = [
  { src: "/citadel1.png", alt: "Citadel exterior" },
  { src: "/citadel_fort_20260422.png", alt: "Citadel build space" },
  { src: "/ecosystem-builders-20260222.jpg", alt: "Builders working in the Citadel" },
  { src: "/webp/5.webp", alt: "Citadel sprint session" },
  { src: "/webp/6.webp", alt: "Citadel review session" },
  { src: "/webp/activation-builders.webp", alt: "Builders at the Citadel" },
];

const citadelExperienceCards = [
  { icon: BookOpen, title: "Structured Learning", description: "Participants engage with planned learning experiences that provide direction, context, and foundational understanding." },
  { icon: Hammer, title: "Practical Execution", description: "Learning is connected to assignments, projects, experiments, prototypes, and real tasks wherever applicable." },
  { icon: UsersRound, title: "Peer Collaboration", description: "Participants learn through discussion, teamwork, review, and shared problem-solving." },
  { icon: Users, title: "Mentorship", description: "Mentors, trainers, and experts may provide guidance, feedback, context, and perspective." },
  { icon: RefreshCw, title: "Reflection and Iteration", description: "Participants are encouraged to review their work, understand gaps, improve outcomes, and learn from mistakes." },
  { icon: Presentation, title: "Demonstration", description: "Work can be presented through reviews, showcases, project demonstrations, or other approved formats." },
  { icon: TrendingUp, title: "Progression", description: "Participants can explore further learning, advanced projects, leadership responsibilities, entrepreneurship, or professional pathways." },
];

const citadelPrincipleCards = [
  { icon: Flag, title: "Ownership", description: "Participants are encouraged to take responsibility for their learning, commitments, and work." },
  { icon: Scale, title: "Discipline", description: "Progress depends on consistency, preparation, effort, and respect for shared environments." },
  { icon: Lightbulb, title: "Curiosity", description: "Questions, exploration, experimentation, and a willingness to learn are central to the experience." },
  { icon: Handshake, title: "Collaboration", description: "Meaningful progress is strengthened by peer learning, teamwork, and knowledge-sharing." },
  { icon: CheckCircle2, title: "Accountability", description: "Participants should communicate clearly, honour agreed responsibilities, and respond constructively to feedback." },
  { icon: Users, title: "Respect", description: "The environment should support dignity, inclusion, professional conduct, and respect for different perspectives." },
  { icon: RefreshCw, title: "Iteration", description: "Strong work is developed through testing, review, learning, and improvement." },
  { icon: Compass, title: "Integrity", description: "Participants should represent their work honestly and avoid misrepresenting progress, results, or contributions." },
];

const citadelJourneySteps = [
  { title: "Orientation", description: "Understand the environment, expectations, available pathways, and support systems." },
  { title: "Explore", description: "Identify interests, problems, subjects, or areas of capability development." },
  { title: "Learn", description: "Engage with structured content, workshops, activities, and guidance." },
  { title: "Practise", description: "Apply knowledge through exercises, tasks, and collaborative activities." },
  { title: "Build", description: "Develop a project, prototype, experiment, presentation, or other practical output." },
  { title: "Review", description: "Receive feedback from peers, mentors, trainers, or reviewers." },
  { title: "Improve", description: "Refine the work, address gaps, and document learning." },
  { title: "Demonstrate", description: "Present the process, output, decisions, and learnings." },
  { title: "Progress", description: "Move toward the next relevant pathway or opportunity." },
];

const citadelAudienceCards = [
  { icon: GraduationCap, title: "Learners", description: "People seeking practical learning, stronger skills, project experience, and direction." },
  { icon: Hammer, title: "Student Builders", description: "Participants working on technical, creative, research, or innovation-oriented projects." },
  { icon: Lightbulb, title: "Mentors and Experts", description: "Practitioners who contribute guidance, experience, reviews, and perspective." },
  { icon: BookOpen, title: "Faculty and Educators", description: "Academic contributors supporting learning, coordination, and institutional development." },
  { icon: Landmark, title: "Institutions", description: "Partner schools, colleges, and organisations participating in structured ecosystem activities." },
  { icon: Briefcase, title: "Industry Contributors", description: "Professionals and organisations supporting applied challenges, workshops, mentorship, and collaboration." },
  { icon: Rocket, title: "Founders", description: "Individuals exploring ideas, developing solutions, and building early-stage ventures or initiatives." },
  { icon: Network, title: "FORGE Teams", description: "People responsible for coordinating, facilitating, supporting, and improving the ecosystem experience." },
];

const citadelSpaceCards = [
  { icon: BookOpen, title: "Learning Spaces", description: "For workshops, instruction, discussions, and structured learning." },
  { icon: FlaskConical, title: "Innovation Spaces", description: "For experimentation, prototyping, testing, and project development." },
  { icon: UsersRound, title: "Collaboration Spaces", description: "For team meetings, peer learning, reviews, and shared work." },
  { icon: MessageSquare, title: "Mentorship Spaces", description: "For expert interactions, guidance, feedback, and career or project conversations." },
  { icon: Presentation, title: "Showcase Spaces", description: "For demonstrations, presentations, exhibitions, and community learning." },
  { icon: Monitor, title: "Digital Spaces", description: "For resources, communication, submissions, scheduling, and approved ecosystem activities." },
];

const citadelFaqs = [
  {
    question: "What is the FORGE Citadel?",
    answer: "The Citadel is a structured environment within the FORGE ecosystem where learning, discipline, mentorship, collaboration, project execution, and innovation come together.",
  },
  {
    question: "Who can use the Citadel?",
    answer: "Builders enrolled in an active FORGE program or partner-institution cohort get access to the Citadel during their sprint cycles.",
  },
  {
    question: "Is the Citadel a physical location or a digital environment?",
    answer: "The Citadel is primarily a physical execution environment (see the zones above), supported by digital spaces for resources, scheduling, and communication.",
  },
  {
    question: "Is the Citadel available outside program hours?",
    answer: "Zones like the Build Floor and Community Space have extended access hours; private cabins are bookable per sprint schedule.",
  },
  {
    question: "Are mentors available to all participants?",
    answer: "Mentor participation follows confirmed arrangements per program — not every participant receives unlimited one-to-one access to a specific mentor.",
  },
  {
    question: "Are there rules for participation?",
    answer: "Yes — participants are expected to follow the Code of Conduct above, along with applicable integrity, safety, and institutional requirements.",
  },
  {
    question: "Does participation guarantee a job or investment?",
    answer: "No. The Citadel focuses on capability-building, exposure, project work, and progression — not guaranteed employment, funding, or investment.",
  },
  {
    question: "Can institutions bring their own equipment into Lab-in-a-Box?",
    answer: "Yes — Lab-in-a-Box is a modular bench designed to accommodate partner-institution hardware alongside FORGE's own tooling.",
  },
  {
    question: "How does my institution bring the Citadel to campus?",
    answer: "Reach out through the Collaborate page — the Citadel deploys in a single partnership cycle once a site is confirmed.",
  },
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
                {/* Temporarily hidden section navigation — uncomment when sections are restored
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
                */}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WhatIsCitadel />

        {/* =====================================================
            TEMPORARILY HIDDEN — CONTEXT
            To restore this section, uncomment the blocks below.
        ===================================================== */}
        {/*
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
        */}

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

        <CardGrid
          eyebrow="The Citadel Experience"
          heading="A Different Way to Learn and Build"
          cards={citadelExperienceCards}
          columns={4}
        />

        <CardGrid
          eyebrow="The Principles"
          heading="The Principles Behind the Citadel"
          cards={citadelPrincipleCards}
          columns={4}
        />

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

        {/* =====================================================
            TEMPORARILY HIDDEN — PHYSICAL DESIGN
            To restore this section, uncomment the block below.
        ===================================================== */}
        {/*
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
        */}

        <section className="px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,#0E2E48_0%,#1E4D72_45%,#628ECB_100%)] px-6 py-14 shadow-[0_20px_70px_rgba(2,8,20,0.4)] md:px-10 md:py-16">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#78D8C6]">
                Inside the Citadel
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-white md:text-5xl">
                Nine Zones, One System
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {zones.map((zone) => (
                <ZoneCard key={zone.name} zone={zone} />
              ))}
            </div>
          </div>
        </section>

        <CardGrid
          eyebrow="Spaces and Modes of Engagement"
          heading="Designed for Learning, Collaboration, and Creation"
          cards={citadelSpaceCards}
          columns={3}
        />

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                How the Citadel Works
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                From Participation to Demonstrated Capability
              </h2>
            </ScrollReveal>
            <div className="mt-14">
              <ProcessTimeline steps={citadelJourneySteps} />
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center font-jakarta text-base italic text-primary/65">
              The Citadel is not defined by a single event. It is defined by the habits built
              through repeated practice.
            </p>
          </div>
        </section>

        {/* =====================================================
            TEMPORARILY HIDDEN — HOW IT RUNS
            To restore this section, uncomment the block below.
        ===================================================== */}
        {/*
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
        */}

        {/* =====================================================
            TEMPORARILY HIDDEN — TRADITIONAL LAB VS CITADEL
            To restore this section, uncomment the block below.
        ===================================================== */}
        {/*
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
        */}

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

        <CardGrid
          eyebrow="Who Is the Citadel For?"
          heading="A Shared Environment for Different Contributors"
          cards={citadelAudienceCards}
          columns={4}
        />

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal className="mb-10 text-center">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Inside the Space
              </span>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Photo Gallery
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <Lightbox images={galleryImages} />
            </ScrollReveal>
          </div>
        </section>

        <VoicesCarousel title="From Our Founder" voices={founderVoice} />

        <MentorshipInside />

        {/* =====================================================
            TEMPORARILY HIDDEN — PROJECT AND INNOVATION CULTURE
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <ProjectInnovationCulture /> */}

        {/* =====================================================
            TEMPORARILY HIDDEN — INTEGRITY AND AUTHENTIC WORK
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <IntegrityAuthenticWork /> */}

        {/* =====================================================
            TEMPORARILY HIDDEN — COMMUNITY AND CULTURE
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <CommunityAndCulture /> */}

        {/* =====================================================
            TEMPORARILY HIDDEN — PROGRESS AND RECOGNITION
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <ProgressRecognition /> */}

        {/* =====================================================
            TEMPORARILY HIDDEN — INSTITUTIONAL AND INDUSTRY CONNECTIONS
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <InstitutionalIndustryConnections /> */}

        <AnnualSummit />
        <FutureVision />

        {/* =====================================================
            TEMPORARILY HIDDEN — CODE OF CONDUCT
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <CodeOfConduct /> */}

        {/* =====================================================
            TEMPORARILY HIDDEN — STEP INTO AN ENVIRONMENT (CITADEL FINAL CTA)
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <CitadelFinalCta /> */}

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal className="mb-10 text-center">
              <h2 className="font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Citadel FAQs
              </h2>
            </ScrollReveal>
            <FaqAccordion items={citadelFaqs} />
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
