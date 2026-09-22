"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  GraduationCap,
  Hammer,
  Layers,
  Lightbulb,
  Network,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * DATA — Eight Community Stakeholders
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface CommunityCategory {
  num: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  href: string;
}

const COMMUNITY_CATEGORIES: CommunityCategory[] = [
  {
    num: "01",
    eyebrow: "LEARNERS",
    title: "Learners",
    subtitle: "Core Participants",
    description:
      "Students and participants exploring skills, projects, technology, innovation, and new opportunities through hands-on learning.",
    tag: "FORGE / 01",
    icon: GraduationCap,
    href: "/programs",
  },
  {
    num: "02",
    eyebrow: "BUILDERS",
    title: "Builders",
    subtitle: "Active Creators",
    description:
      "People developing applications, prototypes, experiments, research projects, creative work, or early-stage ventures.",
    tag: "FORGE / 02",
    icon: Hammer,
    href: "/programs",
  },
  {
    num: "03",
    eyebrow: "MENTORS & EXPERTS",
    title: "Mentors and Experts",
    subtitle: "Guidance & Review",
    description:
      "Professionals, educators, founders, researchers, and practitioners sharing real-world knowledge, industry feedback, and perspective.",
    tag: "FORGE / 03",
    icon: Lightbulb,
    href: "/mentors",
  },
  {
    num: "04",
    eyebrow: "FACULTY & EDUCATORS",
    title: "Faculty and Educators",
    subtitle: "Academic Leadership",
    description:
      "People supporting practical learning, institutional development, student engagement, and innovation-led education on campus.",
    tag: "FORGE / 04",
    icon: Building2,
    href: "/collaborate",
  },
  {
    num: "05",
    eyebrow: "INSTITUTIONS",
    title: "Institutions",
    subtitle: "Campus Partners",
    description:
      "Schools, colleges, and partner organisations participating in structured ecosystem activities, chapters, and innovation labs.",
    tag: "FORGE / 05",
    icon: Layers,
    href: "/collaborate",
  },
  {
    num: "06",
    eyebrow: "FOUNDERS",
    title: "Founders",
    subtitle: "Venture Builders",
    description:
      "Individuals exploring problems, developing products, validating ideas, or building ventures with dedicated mentor backing.",
    tag: "FORGE / 06",
    icon: Rocket,
    href: "/programs",
  },
  {
    num: "07",
    eyebrow: "INDUSTRY CONTRIBUTORS",
    title: "Industry Contributors",
    subtitle: "Ecosystem Partners",
    description:
      "Professionals and organisations contributing live challenges, workshops, practical feedback, exposure, and collaboration.",
    tag: "FORGE / 07",
    icon: Briefcase,
    href: "/collaborate",
  },
  {
    num: "08",
    eyebrow: "COMMUNITY & FORGE TEAMS",
    title: "Community and FORGE Teams",
    subtitle: "Orchestration & Support",
    description:
      "People coordinating activities, supporting participants, facilitating collaboration, and continuously improving the ecosystem experience.",
    tag: "FORGE / 08",
    icon: Network,
    href: "/collaborate",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * WHO MAKES UP THE COMMUNITY
 * Continuous scroll-driven stacked card system matching Philosophy.tsx
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function WhoMakesUpCommunity() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsStageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const activeIndexRef = useRef<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Ensure ScrollTrigger accurately calculates layout once window and assets load
  useEffect(() => {
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener("load", handleRefresh);
      return () => window.removeEventListener("load", handleRefresh);
    }
  }, []);

  /**
   * Ultra-smooth continuous card transform formula from approved specification:
   * Active: distance = 0
   * Next: distance = +1 -> translateY(44px), scale(0.955), rotate(+1deg), opacity(0.82)
   * Previous: distance = -1 -> translateY(-44px), scale(0.955), rotate(-1deg), opacity(0.75)
   * Far cards: abs(distance) >= 1.5 -> opacity drops toward 0; abs >= 1.8 -> 0
   */
  const applyCardState = (
    el: HTMLElement,
    distance: number,
    isMobile: boolean
  ) => {
    const yUnit = isMobile ? 28 : 44;
    const rotUnit = isMobile ? 0.4 : 1.0;
    const absDist = Math.abs(distance);

    // Continuous vertical offset
    const translateY = Math.max(-92, Math.min(92, distance * yUnit));

    // Smooth physical scale curve
    const scale = Math.max(0.88, 1 - Math.min(absDist, 1.6) * 0.045);

    // Subtle natural tilt
    const rotation = Math.max(-2.0, Math.min(2.0, distance * -rotUnit));

    // Continuous opacity interpolation
    let opacity = 0;
    if (absDist === 0) {
      opacity = 1;
    } else if (distance > 0) {
      if (distance <= 1) {
        opacity = 1 - distance * 0.18; // 1 -> 0.82
      } else if (distance <= 1.5) {
        opacity = 0.82 - ((distance - 1) / 0.5) * 0.45; // 0.82 -> 0.37
      } else if (distance <= 1.8) {
        opacity = Math.max(0, 0.37 - ((distance - 1.5) / 0.3) * 0.37); // 0.37 -> 0
      } else {
        opacity = 0;
      }
    } else {
      if (absDist <= 1) {
        opacity = 1 - absDist * 0.25; // 1 -> 0.75
      } else if (absDist <= 1.5) {
        opacity = 0.75 - ((absDist - 1) / 0.5) * 0.45; // 0.75 -> 0.30
      } else if (absDist <= 1.8) {
        opacity = Math.max(0, 0.30 - ((absDist - 1.5) / 0.3) * 0.30); // 0.30 -> 0
      } else {
        opacity = 0;
      }
    }

    // Dynamic depth shadow: deeper when active, softer when layered
    const shadowAlpha = Math.max(0.03, 0.08 - absDist * 0.03);
    const shadowOffsetY = Math.max(8, Math.round(25 - absDist * 8));
    const shadowBlur = Math.max(20, Math.round(70 - absDist * 20));

    // Z-Index: Active card has highest layer
    const zIndex = Math.max(1, 100 - Math.round(absDist * 10));

    // Apply continuous GPU-accelerated transform
    el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
    el.style.opacity = Math.max(0, Math.min(1, opacity)).toFixed(3);
    el.style.boxShadow = `0 ${shadowOffsetY}px ${shadowBlur}px rgba(16, 42, 67, ${shadowAlpha.toFixed(3)}), 0 4px 14px rgba(16, 42, 67, 0.03)`;
    el.style.zIndex = String(zIndex);
    el.style.pointerEvents = absDist < 0.35 ? "auto" : "none";
  };

  useGSAP(
    () => {
      if (isReducedMotion) return;

      const mm = gsap.matchMedia();

      // Desktop & Tablet (>= 768px)
      mm.add("(min-width: 768px)", () => {
        cardRefs.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          applyCardState(cardEl, idx, false);
        });

        const st = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=320%", // Generous scroll timeline for 8 cards
          pin: true,
          scrub: 0.35, // Silky smooth response without lag
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;

            // Direct continuous progress across 8 cards from 0 to 7
            const cardProgress = Math.max(0, Math.min(7, p * 7));

            // Synchronized active index for counter and vertical indicator
            const nextIdx = Math.max(0, Math.min(7, Math.round(cardProgress)));
            if (nextIdx !== activeIndexRef.current) {
              activeIndexRef.current = nextIdx;
              setActiveCardIndex(nextIdx);
            }

            cardRefs.current.forEach((cardEl, idx) => {
              if (!cardEl) return;
              const distance = idx - cardProgress;
              applyCardState(cardEl, distance, false);
            });
          },
        });

        scrollTriggerRef.current = st;
      });

      // Mobile (< 768px)
      mm.add("(max-width: 767px)", () => {
        cardRefs.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          applyCardState(cardEl, idx, true);
        });

        const st = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: 0.35,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const cardProgress = Math.max(0, Math.min(7, p * 7));

            const nextIdx = Math.max(0, Math.min(7, Math.round(cardProgress)));
            if (nextIdx !== activeIndexRef.current) {
              activeIndexRef.current = nextIdx;
              setActiveCardIndex(nextIdx);
            }

            cardRefs.current.forEach((cardEl, idx) => {
              if (!cardEl) return;
              const distance = idx - cardProgress;
              applyCardState(cardEl, distance, true);
            });
          },
        });

        scrollTriggerRef.current = st;
      });
    },
    { scope: containerRef, dependencies: [isReducedMotion] }
  );

  // Smooth scroll to card when clicking progress indicator
  const handleJumpToCard = (targetIndex: number) => {
    if (!scrollTriggerRef.current) return;
    const st = scrollTriggerRef.current;
    // Map 8 cards across 0..1 progress timeline
    const progressMap = [0.02, 0.16, 0.30, 0.44, 0.58, 0.72, 0.86, 0.98];
    const targetProgress = progressMap[targetIndex] ?? 0;
    const targetScroll = st.start + (st.end - st.start) * targetProgress;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="who-makes-up-community"
      aria-label="Who Makes Up the Community"
      className="relative w-full bg-[#FAFCFF] text-[#111111] overflow-hidden select-none border-t border-[#D9DEE7]/70"
    >
      {/* Reduced motion static fallback */}
      {isReducedMotion ? (
        <div className="w-full max-w-[1360px] mx-auto px-6 py-20 flex flex-col gap-12">
          <div className="max-w-xl">
            <span className="font-jakarta text-xs font-bold tracking-[0.24em] text-[#1683EA] uppercase">
              WHO MAKES UP THE COMMUNITY
            </span>
            <h2 className="mt-3 font-clash font-bold text-4xl sm:text-5xl text-[#111111] leading-tight tracking-tight">
              Different Paths.{" "}
              <span className="text-[#1683EA]">Shared Possibility.</span>
            </h2>
            <p className="mt-4 font-jakarta text-base text-[#5F6672] leading-relaxed">
              A Community Built For What&apos;s Next. From students taking their
              first steps to seasoned mentors, educators, and enterprise
              partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMUNITY_CATEGORIES.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.num}
                  className="rounded-[24px] border border-slate-200/90 bg-white p-7 flex flex-col justify-between shadow-[0_12px_36px_rgba(16,42,67,0.06)]"
                >
                  <div>
                    <div className="flex justify-between items-start pb-4 border-b border-slate-200/80">
                      <span className="font-mono text-sm font-bold text-[#111111]">
                        {card.num}
                      </span>
                      <span className="font-jakarta text-xs font-bold tracking-[0.2em] text-[#64748B] uppercase">
                        {card.eyebrow}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF3FF] flex items-center justify-center text-[#1683EA]">
                        <Icon className="h-5 w-5 stroke-[1.8]" />
                      </div>
                      <h3 className="font-clash font-bold text-xl text-[#111111]">
                        {card.title}.
                      </h3>
                    </div>
                    <p className="mt-3 font-jakarta text-sm text-[#5F6672] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between mt-6">
                    <span className="font-mono text-xs font-bold text-[#111111]">
                      {card.tag}
                    </span>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#1683EA]">
                      <span>EXPLORE →</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        /* Pinned 100vh Viewport Stage matching Philosophy.tsx */
        <div className="relative w-full h-screen min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1500px] mx-auto">
          {/* Mobile Top Header */}
          <div className="md:hidden flex items-center justify-between w-full pt-6 pb-2 z-10">
            <h2 className="font-clash font-bold text-2xl text-[#111111]">
              Who Makes Up <span className="text-[#1683EA]">the Community.</span>
            </h2>
            <div className="font-mono text-xs font-bold text-[#1683EA]">
              0{activeCardIndex + 1} / 08
            </div>
          </div>

          {/* Desktop Left Column: Editorial Statement (Stationary) */}
          <div className="hidden md:flex w-full md:w-5/12 lg:w-5/12 xl:w-5/12 z-10 flex-col justify-center text-left pr-6 lg:pr-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-[#1683EA] animate-pulse"
              />
              <span className="font-jakarta text-xs font-bold tracking-[0.24em] text-[#1683EA] uppercase">
                WHO MAKES UP THE COMMUNITY
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight text-[#111111]">
              Different Paths.
              <br />
              <span className="text-[#1683EA]">Shared Possibility.</span>
            </h2>

            {/* Editorial Lead In */}
            <p className="mt-4 font-clash text-lg sm:text-xl font-semibold text-[#1E293B] tracking-tight">
              A Community Built For What&apos;s Next.
            </p>

            {/* Supporting Statement */}
            <p className="mt-4 font-jakarta text-base sm:text-lg text-[#5F6672] max-w-md leading-relaxed border-l-2 border-[#1683EA] pl-5 font-normal">
              Whether you are taking your first technical steps, building an
              applied project, mentoring emerging talent, or partnering as an
              institution — there is a place for your energy here.
            </p>

            {/* Action Link */}
            <div className="mt-7 flex items-center gap-4">
              <Link
                href="/collaborate"
                className="group inline-flex h-[46px] items-center gap-2 rounded-full bg-[#1683EA] px-6 font-jakarta text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,131,234,0.25)] transition-all duration-300 hover:bg-[#102A43] hover:-translate-y-0.5 active:scale-95"
              >
                <span>Join the Community</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Layer Indicator */}
            <div className="mt-8 flex items-center gap-3 text-xs font-jakarta text-[#5F6672]">
              <span className="text-[#1683EA] font-bold font-mono">
                0{activeCardIndex + 1} / 08
              </span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#CBD5E1]" />
              <span className="uppercase tracking-wider font-semibold text-[#111111]">
                {COMMUNITY_CATEGORIES[activeCardIndex].eyebrow}
              </span>
            </div>
          </div>

          {/* Right Column: Fixed Card Stage with Moving Physical Cards */}
          <div className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12 flex items-center justify-center md:justify-end xl:justify-center relative my-auto">
            {/* Fixed Visual Stage */}
            <div
              ref={cardsStageRef}
              className="relative w-[88vw] h-[58vh] max-h-[520px] md:w-[min(620px,48vw)] md:h-[min(620px,68vh)] md:max-w-[620px] md:max-h-[620px] mx-auto"
            >
              {COMMUNITY_CATEGORIES.map((card, idx) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.num}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    className="absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-7 sm:p-10 lg:p-11 flex flex-col justify-between backdrop-blur-2xl will-change-transform select-none overflow-hidden"
                    style={{
                      transformOrigin: "center center",
                    }}
                  >
                    {/* Subtle Background Accent Aura in FORGE Blue */}
                    <div
                      aria-hidden="true"
                      className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#1683EA]/10 blur-[60px] pointer-events-none"
                    />

                    {/* Card Header: 01 and Eyebrow with pill badge */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-center pb-4 sm:pb-5 border-b border-slate-200/80">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm sm:text-base font-bold text-[#111111]">
                            {card.num}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <span className="font-jakarta text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#64748B] uppercase">
                            {card.eyebrow}
                          </span>
                        </div>

                        {/* Layer Pill Badge */}
                        <span className="font-jakarta text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border bg-blue-50/90 border-blue-200/80 text-[#1683EA] tracking-wide">
                          {card.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Card Title, Icon, & Description in Lower-Middle */}
                    <div className="my-auto py-2 sm:py-4 relative z-10">
                      {/* 2D Outline Icon in Pale Blue Container */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#EAF3FF] border border-[#D9E2EE]/60 text-[#1683EA] mb-4">
                        <Icon className="h-6 w-6 stroke-[1.8]" />
                      </div>

                      {/* Editorial Title */}
                      <h3 className="font-clash font-bold text-[clamp(32px,3.8vw,56px)] leading-[0.96] tracking-[-0.03em] text-[#111111]">
                        {card.title}
                        <span className="text-[#1683EA]">.</span>
                      </h3>

                      {/* Description */}
                      <p className="mt-4 font-jakarta text-sm sm:text-base text-[#64748B] leading-relaxed max-w-[430px] font-normal">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Footer: FORGE / 01 ───── EXPLORE → */}
                    <div className="pt-4 sm:pt-5 border-t border-slate-200/80 flex items-center justify-between gap-4 relative z-10">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs sm:text-[13px] font-bold tracking-wider text-[#111111]">
                          {card.tag}
                        </span>
                        <span
                          aria-hidden="true"
                          className="hidden sm:inline-block w-8 h-[1px] bg-slate-300"
                        />
                      </div>

                      <Link
                        href={card.href}
                        className="group/link inline-flex items-center gap-2 font-jakarta text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#1683EA] hover:text-[#0052D4] transition-colors"
                      >
                        <span>EXPLORE</span>
                        <ArrowUpRight
                          className="w-4 h-4 text-[#1683EA] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Minimal 01–08 Vertical Progress Indicator (Desktop & Tablet) */}
          <div
            className="hidden md:flex absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3.5 py-4 px-2.5 rounded-full bg-white/90 border border-slate-200/80 shadow-[0_4px_20px_rgba(16,42,67,0.06)] backdrop-blur-md select-none"
            aria-label="Community stakeholder progress indicator"
          >
            {COMMUNITY_CATEGORIES.map((card, idx) => {
              const isActive = activeCardIndex === idx;

              return (
                <button
                  key={card.num}
                  type="button"
                  onClick={() => handleJumpToCard(idx)}
                  className="group flex flex-col items-center gap-1 cursor-pointer focus:outline-none p-1 transition-transform"
                  aria-label={`Jump to category ${card.num}: ${card.title}`}
                >
                  <span
                    className={`font-jakarta text-[11px] font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-[#1683EA]"
                        : "text-[#64748B] group-hover:text-[#111111]"
                    }`}
                  >
                    {card.num}
                  </span>
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2.5 h-2.5 bg-[#1683EA] ring-2 ring-[#1683EA]/30 scale-125"
                        : "w-1.5 h-1.5 bg-slate-300 group-hover:bg-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
