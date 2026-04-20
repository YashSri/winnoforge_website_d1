import {
  ArrowRight,
  Building2,
  CheckCircle2,
  type LucideIcon,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FORGE Citadel",
  description:
    "Build your first startup with FORGE Citadel through structured execution, validation, and AI-powered building.",
};

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const featureCards: FeatureCard[] = [
  {
    title: "AI-augmented engineering labs",
    description: "Cutting-edge environments for AI-first development.",
    icon: Rocket,
  },
  {
    title: "Continuous product-building sprints",
    description: "Rapid execution cycles to move from idea to reality.",
    icon: Target,
  },
  {
    title: "Startup validation pipelines",
    description: "Rigorous testing for market viability and scalability.",
    icon: CheckCircle2,
  },
  {
    title: "Mentor-driven execution",
    description: "Direct guidance from industry-leading builders.",
    icon: Users,
  },
  {
    title: "Demo reviews & tracking",
    description: "Data-driven progress monitoring and feedback.",
    icon: Building2,
  },
];

const studentOutcomes = [
  "Build real products",
  "Work with AI tools",
  "Develop system thinking",
  "Gain startup mindset",
];

const institutionOutcomes = [
  "Stronger innovation output",
  "AI-ready campuses",
  "Better admissions appeal",
  "Industry collaboration",
];

const animationDelayClasses = [
  styles.citadelDelay1,
  styles.citadelDelay2,
  styles.citadelDelay3,
];

export default function CitadelPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
              <div
                className={`${styles.citadelReveal} ${styles.citadelDelay1}`}
              >
                {/* <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#1f5279]">
                  FORGE Citadel
                </p> */}

                <h1 className="mt-4 max-w-xl font-varela text-4xl font-semibold leading-tight text-[#0e2e48] md:text-5xl lg:text-6xl">
                  Build Your First Startup With FORGE
                </h1>

                <p className="mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-[#31506a] md:text-lg">
                  A structured founder journey that takes you from idea to real
                  venture - with execution, validation, and AI-powered building.
                </p>

                <Link
                  href="/corporate#partnership"
                  className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#395886] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#48689a]"
                >
                  Start Your Founder Journey
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div
                className={`${styles.citadelReveal} ${styles.citadelDelay2}`}
              >
                <div
                  className={`${styles.citadelSoftFloat} relative min-h-80 overflow-hidden rounded-3xl border border-[#d4e3f1] bg-[#dce9f6] shadow-[0_22px_60px_rgba(13,45,72,0.22)] md:min-h-115`}
                >
                  <Image
                    src="/webp/8.webp"
                    alt="FORGE students presenting startup ideas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#08263e]/55 via-[#08263e]/12 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div
            className={`${styles.citadelReveal} ${styles.citadelDelay1} mx-auto max-w-5xl px-2 py-6 text-center md:px-4`}
          >
            <h2 className="font-varela text-4xl font-semibold leading-tight text-[#0e2e48] md:text-5xl">
              Ambition Without Direction
            </h2>

            <p className="mx-auto mt-6 max-w-4xl font-jakarta text-lg leading-relaxed text-[#355873] md:text-xl">
              Many students want to build startups - but do not know where to
              start.
            </p>
            <p className="mx-auto mt-2 max-w-4xl font-jakarta text-lg leading-relaxed text-[#355873] md:text-xl">
              Ideas feel unclear. Execution feels overwhelming.
            </p>

            <p className="mx-auto mt-10 max-w-4xl font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
              Aspiration is common. Structured building is rare.
            </p>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div
            className={`${styles.citadelReveal} mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-[#c4d8eb] bg-linear-to-r from-[#cde0f4] via-[#edf5fc] to-[#e5f0fd] shadow-[0_22px_72px_rgba(11,38,60,0.2)]`}
          >
            <div className="grid gap-6 p-6 md:grid-cols-[1fr_0.92fr] md:items-center md:p-8 lg:p-10">
              <div>
                <h2 className="font-varela text-4xl font-semibold leading-tight text-[#103453] md:text-5xl">
                  Why Traditional Models Are Breaking
                </h2>

                <p className="mt-5 max-w-xl font-jakarta text-base leading-relaxed text-[#365774] md:text-lg">
                  Many institutions rely on infrastructure and events, but lack
                  structured execution systems.
                </p>

                <p className="mt-7 max-w-xl font-varela text-4xl font-semibold leading-tight text-[#23557e] md:text-4xl">
                  Without execution, infrastructure has no impact.
                </p>
              </div>

              <div className="relative min-h-72 rounded-3xl border border-[#b3c9de] bg-white/45 p-5 md:min-h-80 md:p-6">
                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7d9fbe]" />
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#96b3cc]/70" />

                <div className="relative z-10 flex h-full items-center justify-center rounded-3xl border border-[#a8c2d8] bg-linear-to-b from-white/70 to-[#dce9f7]/70">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0E2E48] text-[#C4F14E] shadow-[0_0_30px_rgba(14,46,72,0.3)]">
                      <Building2 className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="max-w-xs font-jakarta text-sm font-semibold uppercase tracking-[0.12em] text-[#2f5674]">
                      Infrastructure alone cannot replace an execution engine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div
            className={`${styles.citadelReveal} ${styles.citadelDelay2} mx-auto max-w-5xl px-2 py-6 text-center md:px-4`}
          >
            <h2 className="font-varela text-4xl font-semibold leading-tight text-[#0e2e48] md:text-5xl">
              Builder, Not Just Coder
            </h2>

            <p className="mx-auto mt-6 max-w-4xl font-jakarta text-lg leading-relaxed text-[#355873] md:text-xl">
              The future engineer is a system thinker, product builder, and
              AI-augmented problem solver.
            </p>

            <p className="mx-auto mt-10 max-w-4xl font-varela text-4xl font-semibold leading-tight text-[#0E2E48] md:text-5xl">
              The future belongs to builders.
            </p>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div
            className={`${styles.citadelReveal} relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[#d3ddea] bg-[#F0F3FA] px-7 py-12 text-[#0E2E48] shadow-[0_28px_80px_rgba(13,45,72,0.14)] md:px-10 md:py-14`}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-10 h-px w-full bg-linear-to-r from-transparent via-[#395886]/20 to-transparent" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-linear-to-r from-transparent via-[#395886]/15 to-transparent" />
              <div className="absolute left-0 bottom-10 h-px w-full bg-linear-to-r from-transparent via-[#395886]/20 to-transparent" />
              <div className="absolute left-[20%] top-0 h-full w-px bg-linear-to-b from-transparent via-[#395886]/15 to-transparent" />
              <div className="absolute right-[20%] top-0 h-full w-px bg-linear-to-b from-transparent via-[#395886]/15 to-transparent" />
            </div>

            <div className="relative">
              <h2 className="text-center font-varela text-4xl font-semibold leading-tight md:text-5xl">
                The Forge Innovation Citadel
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-center font-jakarta text-base leading-relaxed text-[#31506a] md:text-lg">
                A structured execution environment where students build real
                systems, not just learn concepts.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featureCards.map((card, index) => {
                  const Icon = card.icon;
                  const cardSpanClass =
                    index === featureCards.length - 1
                      ? "md:col-span-2 xl:col-span-1"
                      : "";

                  return (
                    <article
                      key={card.title}
                      className={`${styles.citadelReveal} ${animationDelayClasses[index % animationDelayClasses.length]} group rounded-3xl border border-[#cdd9e6] bg-white/75 p-6 transition hover:-translate-y-1 hover:border-[#395886]/40 hover:bg-white ${cardSpanClass}`}
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#395886] text-white">
                        <Icon className="h-5 w-5" aria-hidden={true} />
                      </div>

                      <h3 className="mt-5 font-jakarta text-xl font-semibold leading-snug text-[#0E2E48]">
                        {card.title}
                      </h3>

                      <p className="mt-3 font-jakarta text-sm leading-relaxed text-[#31506a]">
                        {card.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-7xl">
            <div
              className={`${styles.citadelReveal} mb-8 text-center md:mb-10`}
            >
              <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#1f5279]">
                Impact Section
              </p>
              <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-[#0e2e48] md:text-5xl">
                Built For Real Outcomes
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article
                className={`${styles.citadelReveal} ${styles.citadelDelay1} rounded-4xl border border-[#d0d9e7] bg-[#F0F3FA] p-8 text-[#0E2E48] shadow-[0_18px_55px_rgba(13,45,72,0.14)] md:p-10`}
              >
                <h3 className="font-varela text-3xl font-semibold text-[#395886] md:text-4xl">
                  For Students
                </h3>

                <ul className="mt-6 space-y-4">
                  {studentOutcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-jakarta text-lg text-[#31506a]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#395886]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article
                className={`${styles.citadelReveal} ${styles.citadelDelay2} rounded-4xl border border-[#d0d9e7] bg-[#F0F3FA] p-8 text-[#0E2E48] shadow-[0_18px_55px_rgba(13,45,72,0.14)] md:p-10`}
              >
                <h3 className="font-varela text-3xl font-semibold text-[#395886] md:text-4xl">
                  For Institutions
                </h3>

                <ul className="mt-6 space-y-4">
                  {institutionOutcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-jakarta text-lg text-[#31506a]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#395886]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="px-4 pb-6 pt-10 md:px-8 md:pt-14">
          <div
            className={`${styles.citadelReveal} mx-auto max-w-7xl overflow-hidden rounded-4xl border border-[#d0d9e7] bg-[#F0F3FA] text-[#0E2E48] shadow-[0_26px_80px_rgba(13,45,72,0.18)]`}
          >
            <div className="grid md:grid-cols-[1fr_0.95fr]">
              <div className="p-7 md:p-10 lg:p-12">
                <h2 className="font-varela text-5xl font-semibold leading-tight md:text-6xl">
                  Adapt or Fall Behind
                </h2>

                <p className="mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-[#31506a] md:text-lg">
                  The AI era is not waiting. Institutions must move from
                  teaching to building.
                </p>

                <Link
                  href="/corporate#partnership"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#395886] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:bg-[#48689a]"
                >
                  Bring the Citadel to Your Campus
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="relative min-h-72 md:min-h-full">
                <Image
                  src="/webp/5.webp"
                  alt="Institution and industry collaboration discussion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0E2E48]/40 via-[#0E2E48]/10 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
