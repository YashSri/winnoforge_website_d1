import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Rocket,
  Target,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface ProgramItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const founderChallenges: ProgramItem[] = [
  {
    title: "Lack of Clarity",
    description:
      "Most ideas never get scoped into a problem statement that can be tested quickly.",
    icon: Target,
  },
  {
    title: "No Validation System",
    description:
      "Founders build features without proof of demand, and momentum dies before launch.",
    icon: BookOpen,
  },
  {
    title: "No Execution Structure",
    description:
      "Without weekly checkpoints, mentorship, and accountability, progress stays inconsistent.",
    icon: Rocket,
  },
];

const programModel: ProgramItem[] = [
  {
    title: "3-Month Journey",
    description:
      "A focused runway that turns scattered effort into measurable startup progress.",
    icon: BookOpen,
  },
  {
    title: "Milestones",
    description:
      "Weekly deliverables keep each founder aligned to outcomes, not just activity.",
    icon: Target,
  },
  {
    title: "Mentorship",
    description:
      "Get direct feedback from operators, builders, and domain experts.",
    icon: Lightbulb,
  },
  {
    title: "Execution",
    description:
      "Ship in fast cycles with a practical build-measure-learn workflow.",
    icon: Wrench,
  },
];

const discoveryTracks = ["AI industries", "SaaS", "Fintech", "Automation"];

const aiBuildPillars: ProgramItem[] = [
  {
    title: "Rapid Prototyping",
    description:
      "Convert ideas into clickable flows, wireframes, and product drafts in days.",
    icon: Wrench,
  },
  {
    title: "AI Research",
    description:
      "Use AI workflows to speed up customer research, competitor mapping, and synthesis.",
    icon: Lightbulb,
  },
  {
    title: "MVP Building",
    description:
      "Build and iterate production-ready MVPs with guided technical execution.",
    icon: Rocket,
  },
];

const forgePipeline: ProgramItem[] = [
  {
    title: "Discover",
    description: "Identify a meaningful customer problem worth solving.",
    icon: Target,
  },
  {
    title: "Validate",
    description: "Test assumptions with real users and market evidence.",
    icon: BookOpen,
  },
  {
    title: "Build",
    description: "Develop a functional MVP with speed and focus.",
    icon: Wrench,
  },
  {
    title: "Launch",
    description: "Go to market and acquire early users with confidence.",
    icon: Rocket,
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <section className="px-4 py-8 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1.02fr_0.98fr] md:gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Build, Validate, and Launch Your Startup
              </h1>

              <p className="mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
                A structured execution-first journey that transforms ideas into
                real ventures using AI and validation systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E2E48] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:bg-[#184b73]"
                >
                  Start Your Founder Journey
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>

                <a
                  href="#forge-pipeline"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c0d5ea] bg-white px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-[#1f4d72] transition hover:border-[#7aa8cf] hover:bg-[#f6fbff]"
                >
                  View Program Structure
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-[28px] border border-[#d6e3ef] bg-[#dce9f6] shadow-[0_20px_40px_rgba(11,38,60,0.2)] md:min-h-115">
              <Image
                src="/webp/1.webp"
                alt="Startup founders collaborating in a working session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#08263e]/60 via-[#08263e]/10 to-transparent" />
            </div>
          </div>
        </section>

        <section className="px-4 py-6 md:px-8 md:py-10">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-[#d7e2ee] bg-[#f8fbff] p-6 shadow-[0_20px_60px_rgba(16,48,82,0.08)] md:p-10 lg:p-12">
            <h2 className="text-center font-varela text-4xl font-semibold text-foreground md:text-5xl">
              Why Most Founders Never Start
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-center font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
              The traditional startup approach relies on motivation and
              inspiration. FORGE replaces it with structured execution.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
              {founderChallenges.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-[#d0deed] bg-white p-6 shadow-[0_10px_30px_rgba(20,52,88,0.08)]"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f3ff] text-[#2a5f92]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-varela text-2xl font-semibold text-[#143552]">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-jakarta text-sm leading-relaxed text-[#33556f] md:text-base">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-6 md:px-8 md:py-10">
          <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[30px] border border-[#d7e2ee] bg-white p-6 shadow-[0_18px_45px_rgba(20,52,88,0.08)] md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div>
              <h2 className="font-varela text-4xl font-semibold text-foreground md:text-5xl">
                A System, Not a Course
              </h2>

              <p className="mt-4 max-w-xl font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
                We do not just teach startup theory. We build with you through a
                practical system designed for momentum.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {programModel.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-[#d8e4f0] bg-[#f7fbff] p-5"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2e6090] shadow-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <h3 className="mt-4 font-varela text-2xl font-semibold text-[#123554]">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-jakarta text-sm leading-relaxed text-[#31556f]">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-[28px] border border-[#d6e3ef] bg-[#0f2440] shadow-[0_20px_40px_rgba(11,38,60,0.22)] md:min-h-110">
              <Image
                src="/webp/8.webp"
                alt="Founder in a professional startup portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#071a30]/65 via-[#071a30]/15 to-transparent" />
            </div>
          </div>
        </section>

        <section className="px-4 py-6 md:px-8 md:py-10">
          <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[30px] border border-[#d7e2ee] bg-[#f3f7fc] p-6 shadow-[0_16px_40px_rgba(17,52,82,0.08)] md:grid-cols-[1fr_1fr] md:p-10 lg:p-12">
            <div className="relative min-h-80 overflow-hidden rounded-[26px] border border-[#cadced] bg-[#dce9f6] md:min-h-110">
              <Image
                src="/webp/3.webp"
                alt="Founder researching startup opportunities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#07203a]/60 via-[#07203a]/12 to-transparent" />
            </div>

            <div className="flex flex-col justify-center">
              <span className="w-fit rounded-full bg-[#d8eaff] px-3 py-1 font-jakarta text-xs font-semibold uppercase tracking-[0.12em] text-[#355a81]">
                Phase 01
              </span>

              <h2 className="mt-4 font-varela text-4xl font-semibold text-foreground md:text-5xl">
                Start With the Right Problem
              </h2>

              <p className="mt-4 font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
                Great startups start with the right problem. We help founders
                identify urgent opportunities and validate demand before
                building.
              </p>

              <ul className="mt-6 space-y-3 font-jakarta text-sm text-[#2f516d] md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4d96ff]" />
                  Deep market research and user interviews.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4d96ff]" />
                  Problem framing around pain, urgency, and market demand.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4d96ff]" />
                  Evidence-led direction before writing product code.
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {discoveryTracks.map((track) => (
                  <span
                    key={track}
                    className="rounded-full border border-[#bfd4ea] bg-white px-4 py-2 font-jakarta text-xs font-semibold uppercase tracking-widest text-[#2e587f]"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-6 md:px-8 md:py-10">
          <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[30px] border border-[#496d9c] bg-linear-to-r from-[#31598f] via-[#3a66a5] to-[#264a79] p-6 text-white shadow-[0_24px_65px_rgba(16,40,76,0.35)] md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div>
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 font-jakarta text-xs font-semibold uppercase tracking-[0.12em] text-white/90">
                Phase 02
              </span>

              <h2 className="mt-4 font-varela text-4xl font-semibold text-white md:text-5xl">
                Build Faster With AI
              </h2>

              <p className="mt-4 max-w-xl font-jakarta text-base leading-relaxed text-white/80 md:text-lg">
                Use modern AI workflows to reduce build time, sharpen product
                decisions, and move from concept to launch-ready MVP quickly.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {aiBuildPillars.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-white/20 bg-white/8 p-5 backdrop-blur-sm"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/14 text-white">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <h3 className="mt-4 font-varela text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-jakarta text-sm leading-relaxed text-white/78">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-[28px] border border-white/20 bg-[#17355a] shadow-[0_24px_50px_rgba(8,22,45,0.35)] md:min-h-105">
              <Image
                src="/webp/4.webp"
                alt="Laptop screen showing product code during MVP build"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#06162a]/72 via-[#06162a]/18 to-transparent" />
            </div>
          </div>
        </section>

        <section id="forge-pipeline" className="px-4 py-8 md:px-8 md:py-14">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-[#d7e2ee] bg-[#f6f9fe] p-6 shadow-[0_22px_58px_rgba(17,48,81,0.08)] md:p-10 lg:p-12">
            <h2 className="text-center font-varela text-4xl font-semibold text-foreground md:text-5xl">
              FORGE Steps
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
              Discover, validate, build, and launch through a connected
              execution pipeline.
            </p>

            <div className="relative mt-12">
              <div className="absolute left-[14%] right-[14%] top-20 hidden h-1 rounded-full bg-linear-to-r from-[#9fc6ff]/25 via-[#77b9ff] to-[#9fc6ff]/25 shadow-[0_0_22px_rgba(119,185,255,0.8)] md:block" />

              <div className="grid gap-4 md:grid-cols-4 md:gap-5">
                {forgePipeline.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <article
                      key={step.title}
                      className="relative rounded-[28px] border border-[#d3e1ef] bg-white p-6 text-center shadow-[0_14px_34px_rgba(16,45,75,0.09)]"
                    >
                      <p className="text-left font-varela text-4xl font-semibold text-[#2f67a3]">
                        0{index + 1}
                      </p>

                      <span className="mx-auto mt-4 inline-flex h-20 w-20 items-center justify-center rounded-full border border-[#d4e4f4] bg-[#eef5ff] text-[#2f67a3] shadow-[0_12px_24px_rgba(77,150,255,0.24)]">
                        <Icon className="h-9 w-9" aria-hidden />
                      </span>

                      <h3 className="mt-5 font-varela text-4xl font-semibold text-[#123654]">
                        {step.title}
                      </h3>
                      <p className="mt-3 font-jakarta text-base leading-relaxed text-[#345770]">
                        {step.description}
                      </p>

                      {index < forgePipeline.length - 1 && (
                        <span className="absolute -right-4 top-20 hidden h-1 w-8 rounded-full bg-linear-to-r from-[#78bbff] to-[#95d3ff] shadow-[0_0_18px_rgba(120,187,255,0.95)] md:block" />
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:pb-8 md:pt-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[36px] border border-[#305586]/45 bg-linear-to-r from-[#365f99] via-[#33598e] to-[#1f3f6b] px-6 py-10 text-white shadow-[0_24px_72px_rgba(13,33,62,0.35)] md:px-12 md:py-14">
              <Image
                src="/webp/7.webp"
                alt="Founder journey call to action background"
                fill
                className="object-cover opacity-20"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#1c3c68]/92 via-[#2f568d]/85 to-[#1b355d]/92" />

              <div className="relative max-w-2xl">
                <h2 className="font-varela text-4xl font-semibold leading-tight text-white md:text-6xl">
                  Become a Founder
                </h2>
                <p className="mt-4 font-jakarta text-base leading-relaxed text-white/86 md:text-3xl">
                  Stop waiting for the perfect moment. Join the next cohort and
                  turn your idea into a real venture.
                </p>

                <Link
                  href="/login"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-[#1c3d67] transition hover:bg-[#e9f1fb]"
                >
                  Join the FORGE Founder Program
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
