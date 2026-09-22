"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Play,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CapabilityStage {
  num: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  badgeBg: string;
  badgeText: string;
  accentColor: string;
  bgGradient: string;
  tag: string;
  icon: typeof Building2;
  highlights: string[];
}

const CAPABILITY_STAGES: CapabilityStage[] = [
  {
    num: "01",
    eyebrow: "INDUSTRY STANDARDS",
    title: "Industry Alignment",
    subtitle: "Foundation",
    tagline: "Bridging education and real-world needs.",
    description:
      "Learning is directly connected to tools, workflows, problem statements, and operational expectations that exist beyond the classroom.",
    badgeBg: "bg-blue-50/90 border-blue-200/80",
    badgeText: "text-[#1683E8]",
    accentColor: "#1683E8",
    bgGradient: "from-blue-50/90 via-white to-white",
    tag: "FORGE / 01",
    icon: Building2,
    highlights: [
      "Enterprise tools and production workflows",
      "Direct practitioner problem statements",
      "Practitioner-evaluated execution criteria",
    ],
  },
  {
    num: "02",
    eyebrow: "APPLIED EXECUTION",
    title: "Applied Learning",
    subtitle: "Execution",
    tagline: "Execution-led, not lecture-led.",
    description:
      "Students build, document, present, receive rapid mentor feedback, and iterate until prototypes work under real-world conditions.",
    badgeBg: "bg-sky-50/90 border-sky-200/80",
    badgeText: "text-[#0284C7]",
    accentColor: "#0284C7",
    bgGradient: "from-sky-50/80 via-white to-white",
    tag: "FORGE / 02",
    icon: Wrench,
    highlights: [
      "Sprint-driven rapid prototype build cycles",
      "Continuous mentor and peer review feedback",
      "Hands-on documentation and live testing",
    ],
  },
  {
    num: "03",
    eyebrow: "CAPABILITY PROOF",
    title: "Capability Development",
    subtitle: "Outcomes",
    tagline: "Demonstrated ability over credentials.",
    description:
      "The goal is not only course completion. The goal is the development and verifiable proof of demonstrated problem-solving capability.",
    badgeBg: "bg-indigo-50/90 border-indigo-200/80",
    badgeText: "text-[#1D4ED8]",
    accentColor: "#1D4ED8",
    bgGradient: "from-indigo-50/70 via-white to-white",
    tag: "FORGE / 03",
    icon: TrendingUp,
    highlights: [
      "Verifiable proof-of-work project portfolio",
      "Demonstrated problem-solving evidence",
      "Direct pathways to startup launch & hiring",
    ],
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * WHO WE ARE: THE ENGINE BEHIND THE ECOSYSTEM
 * Square layered card stack matching home page Philosophy.tsx
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function WhoWeAreEngineSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsStageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const activeIndexRef = useRef<number>(0);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
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

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

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
   * Ultra-smooth continuous card transform matching Philosophy.tsx
   * Active: distance = 0
   * Next: distance = +1
   * Previous: distance = -1
   */
  const applyCardState = (
    el: HTMLElement,
    distance: number,
    isMobile: boolean
  ) => {
    const yUnit = isMobile ? 28 : 42;
    const rotUnit = isMobile ? 0.3 : 0.8;

    // Vertical offset
    const translateY = Math.max(-84, Math.min(84, distance * yUnit));

    // Smooth physical scale curve
    const absDist = Math.abs(distance);
    const scale = Math.max(0.9, 1 - Math.min(absDist, 1.5) * 0.045);

    // Subtle natural tilt
    const rotation = Math.max(-2.0, Math.min(2.0, distance * -rotUnit));

    // Opacity interpolation
    let opacity = 0;
    if (absDist === 0) {
      opacity = 1;
    } else if (distance > 0) {
      if (distance <= 1) {
        opacity = 1 - distance * 0.15; // 1 -> 0.85
      } else if (distance <= 1.5) {
        opacity = 0.85 - ((distance - 1) / 0.5) * 0.45; // 0.85 -> 0.40
      } else if (distance <= 2.0) {
        opacity = Math.max(0, 0.4 - ((distance - 1.5) / 0.5) * 0.4); // 0.40 -> 0
      } else {
        opacity = 0;
      }
    } else {
      if (absDist <= 1) {
        opacity = 1 - absDist * 0.2; // 1 -> 0.80
      } else if (absDist <= 1.5) {
        opacity = 0.8 - ((absDist - 1) / 0.5) * 0.45; // 0.80 -> 0.35
      } else if (absDist <= 2.0) {
        opacity = Math.max(0, 0.35 - ((absDist - 1.5) / 0.5) * 0.35); // 0.35 -> 0
      } else {
        opacity = 0;
      }
    }

    // Dynamic depth shadow: deeper when active, lighter when layered
    const shadowAlpha = Math.max(0.04, 0.12 - absDist * 0.04);
    const shadowOffsetY = Math.max(8, Math.round(26 - absDist * 8));
    const shadowBlur = Math.max(20, Math.round(60 - absDist * 16));

    // Z-Index: Active card has highest layer
    const zIndex = Math.max(1, 100 - Math.round(absDist * 15));

    // Apply continuous GPU-accelerated transform
    el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
    el.style.opacity = Math.max(0, Math.min(1, opacity)).toFixed(3);
    el.style.boxShadow = `0 ${shadowOffsetY}px ${shadowBlur}px rgba(16, 42, 67, ${shadowAlpha.toFixed(3)}), 0 4px 12px rgba(16, 42, 67, 0.03)`;
    el.style.zIndex = String(zIndex);
    el.style.pointerEvents = absDist < 0.3 ? "auto" : "none";
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
          end: "+=150%", // Fast, responsive scroll distance
          pin: true,
          scrub: 0.35, // Fast, silky-smooth response without lag
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;

            // Direct, continuous 1:1 card progress from 0 to 2 without dead zones
            const cardProgress = Math.max(0, Math.min(2, p * 2));

            // Synchronized active index for counter and vertical indicator
            const nextIdx = cardProgress < 0.5 ? 0 : cardProgress < 1.5 ? 1 : 2;
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
          end: "+=130%",
          pin: true,
          scrub: 0.35,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const cardProgress = Math.max(0, Math.min(2, p * 2));

            const nextIdx = cardProgress < 0.5 ? 0 : cardProgress < 1.5 ? 1 : 2;
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
    const progressMap = [0.02, 0.5, 0.98];
    const targetProgress = progressMap[targetIndex] ?? 0;
    const targetScroll = st.start + (st.end - st.start) * targetProgress;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="who-we-are"
      aria-label="Who We Are: The Engine Behind The Ecosystem"
      className="relative w-full bg-[#F7F8FC] text-[#111111] overflow-hidden select-none border-t border-[#D9DEE7]/70"
    >
      <style>{`
        @keyframes borderTravel {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }
      `}</style>

      {/* Reduced motion static fallback */}
      {isReducedMotion ? (
        <div className="w-full max-w-[1360px] mx-auto px-6 py-20 flex flex-col gap-12">
          <div className="max-w-xl">
            <span className="font-jakarta text-xs font-bold tracking-[0.25em] text-[#1683E8] uppercase">
              — WHO WE ARE —
            </span>
            <h2 className="mt-3 font-clash font-bold text-4xl sm:text-5xl text-[#111111] leading-tight tracking-tight">
              Winnovation FORGE:{" "}
              <span className="text-[#1683E8]">Building What Comes Next.</span>
            </h2>
            <p className="mt-4 font-sans text-base text-[#5F6672] leading-relaxed">
              Winnovation FORGE is built around a simple belief: education
              becomes more valuable when knowledge is applied, tested,
              reviewed, and transformed into something real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAPABILITY_STAGES.map((card) => (
              <article
                key={card.num}
                className="aspect-square rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white/95 backdrop-blur-xl p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(16,42,67,0.08)]"
              >
                <div>
                  <div className="flex justify-between items-start pb-4 border-b border-slate-200/80">
                    <span className="font-poppins text-sm font-bold text-[#111111]">
                      {card.num}
                    </span>
                    <span className="font-poppins text-xs font-bold tracking-[0.2em] text-[#5F6672] uppercase">
                      {card.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-7 font-poppins font-bold text-3xl sm:text-4xl text-[#111111] tracking-tight">
                    {card.title}
                    <span style={{ color: card.accentColor }}>.</span>
                  </h3>
                  <p className="mt-4 font-sans text-sm text-[#5F6672] leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between mt-8">
                  <span className="font-mono text-xs font-bold tracking-wider text-[#111111]">
                    {card.tag}
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#1683E8]">
                    <span>Explore Stage</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        /* Pinned 100vh Viewport Stage matching Philosophy.tsx */
        <div className="relative w-full h-screen min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1440px] mx-auto">
          {/* Mobile Top Header */}
          <div className="md:hidden flex items-center justify-between w-full pt-6 pb-2 z-10">
            <h2 className="font-clash font-bold text-2xl text-[#111111]">
              Who We <span className="text-[#1683E8]">Are.</span>
            </h2>
            <div className="font-mono text-xs font-bold text-[#1683E8]">
              0{activeCardIndex + 1} / 03
            </div>
          </div>

          {/* Desktop Left Column: Narrative & Stats */}
          <div className="hidden md:flex w-full md:w-5/12 lg:w-5/12 xl:w-5/12 z-10 flex-col justify-center text-left pr-6">
            {/* Top Tag */}
            <div className="flex items-center gap-2.5 mb-5">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-[#1683E8] animate-pulse"
              />
              <span className="font-jakarta text-xs font-bold tracking-[0.22em] text-[#1683E8] uppercase">
                THE ENGINE BEHIND THE ECOSYSTEM
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight text-[#111111]">
              Winnovation
              <br />
              FORGE:
              <br />
              <span className="text-[#1683E8]">Building What</span>
              <br />
              <span className="text-[#1683E8]">Comes Next.</span>
            </h2>

            {/* Statement */}
            <p className="mt-6 font-sans text-base sm:text-lg text-[#5F6672] max-w-md leading-relaxed border-l-2 border-[#1683E8] pl-5 font-normal">
              Winnovation FORGE is built around a simple belief: education
              becomes more valuable when knowledge is applied, tested,
              reviewed, and transformed into something real.
            </p>

            {/* Metrics Bar */}
            <div className="mt-6 pt-5 border-t border-[#D9DEE7] flex flex-wrap items-center gap-4 sm:gap-6 select-none">
              <div>
                <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] block leading-none">
                  50+
                </span>
                <span className="font-jakarta text-[10px] font-bold uppercase tracking-wider text-[#667085] mt-1 block">
                  STARTUPS
                </span>
              </div>
              <div className="w-[1px] h-7 bg-[#D9DEE7]" />
              <div>
                <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] block leading-none">
                  1000+
                </span>
                <span className="font-jakarta text-[10px] font-bold uppercase tracking-wider text-[#667085] mt-1 block">
                  STUDENTS
                </span>
              </div>
              <div className="w-[1px] h-7 bg-[#D9DEE7]" />
              <div>
                <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] block leading-none">
                  20+
                </span>
                <span className="font-jakarta text-[10px] font-bold uppercase tracking-wider text-[#667085] mt-1 block">
                  INSTITUTIONS
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-7 flex items-center gap-4">
              <Link
                href="/programs"
                className="group inline-flex h-[46px] items-center gap-2 rounded-full bg-[#1683E8] px-6 font-jakarta text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,131,232,0.25)] transition-all duration-300 hover:bg-[#102A43] hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore Journey</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex h-[46px] items-center gap-2.5 rounded-full border border-[#D9DEE7] bg-white px-5 font-jakarta text-xs sm:text-sm font-semibold text-[#111111] shadow-sm transition-all duration-300 hover:border-[#1683E8] hover:bg-[#F7F8FC] active:scale-95 cursor-pointer"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF3FF] text-[#1683E8]">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                <span>Watch Video</span>
              </button>
            </div>

            {/* Layer Indicator */}
            <div className="mt-8 flex items-center gap-3 text-xs font-jakarta text-[#5F6672]">
              <span className="text-[#1683E8] font-bold font-mono">
                0{activeCardIndex + 1} / 03
              </span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#CBD5E1]" />
              <span className="uppercase tracking-wider font-semibold text-[#111111]">
                {CAPABILITY_STAGES[activeCardIndex].eyebrow}
              </span>
            </div>
          </div>

          {/* Right Column: Square Card Stage matching Philosophy.tsx */}
          <div className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12 flex items-center justify-center md:justify-end xl:justify-center relative my-auto">
            {/* Square Visual Stage */}
            <div
              ref={cardsStageRef}
              className="relative aspect-square w-[88vw] max-w-[420px] sm:max-w-[480px] md:w-[min(560px,46vw)] md:h-[min(560px,46vw)] md:max-w-[560px] md:max-h-[560px] mx-auto"
            >
              {CAPABILITY_STAGES.map((card, idx) => (
                <article
                  key={card.num}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`absolute inset-0 aspect-square w-full h-full rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-gradient-to-br ${card.bgGradient} p-6 sm:p-9 lg:p-10 flex flex-col justify-between backdrop-blur-2xl will-change-transform select-none overflow-hidden`}
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  {/* Subtle Background Accent Aura in Blue Shade */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[60px] opacity-40 pointer-events-none"
                    style={{ backgroundColor: card.accentColor }}
                  />

                  {/* Card Header: 01 and Eyebrow with rounded pill badge */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-center pb-4 sm:pb-5 border-b border-slate-200/80">
                      <div className="flex items-center gap-3">
                        <span className="font-poppins text-sm sm:text-base font-bold text-[#111111]">
                          {card.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="font-poppins text-xs sm:text-[13px] font-semibold tracking-[0.18em] text-[#5F6672] uppercase">
                          {card.eyebrow}
                        </span>
                      </div>

                      {/* Layer Pill Badge */}
                      <span
                        className={`font-poppins text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border ${card.badgeBg} ${card.badgeText} tracking-wide`}
                      >
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Title, Tagline & Description in Lower-Middle */}
                  <div className="my-auto py-2 sm:py-3 relative z-10">
                    <h3 className="font-poppins font-bold text-[clamp(28px,3.4vw,48px)] leading-[0.96] tracking-[-0.04em] text-[#111111]">
                      {card.title}
                      <span style={{ color: card.accentColor }}>.</span>
                    </h3>

                    <p
                      className="mt-2 font-jakarta text-xs sm:text-sm font-semibold"
                      style={{ color: card.accentColor }}
                    >
                      {card.tagline}
                    </p>

                    <p className="mt-3 font-sans text-xs sm:text-sm text-[#5F6672] leading-relaxed max-w-[430px] font-normal">
                      {card.description}
                    </p>

                    {/* Highlights Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {card.highlights.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-slate-200/90 text-[#111111] text-[10px] sm:text-[11px] font-medium px-2.5 py-1 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                        >
                          <CheckCircle2
                            className="h-3 w-3 shrink-0"
                            style={{ color: card.accentColor }}
                          />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: FORGE / 01 ───── Explore Stage → */}
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

                    <div className="group/link inline-flex items-center gap-1.5 font-poppins text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#1683E8] transition-colors cursor-pointer">
                      <span>Explore Stage</span>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1683E8] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Minimal Vertical Progress Indicator matching Philosophy.tsx */}
          <div
            className="hidden md:flex absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 py-4 px-2.5 rounded-full bg-white/90 border border-slate-200/80 shadow-[0_4px_20px_rgba(16,42,67,0.06)] backdrop-blur-md select-none"
            aria-label="Stage progress indicator"
          >
            {CAPABILITY_STAGES.map((card, idx) => {
              const isActive = activeCardIndex === idx;

              return (
                <button
                  key={card.num}
                  type="button"
                  onClick={() => handleJumpToCard(idx)}
                  className="group flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none p-1 transition-transform"
                  aria-label={`Jump to stage ${card.num}: ${card.title}`}
                >
                  <span
                    className={`font-poppins text-xs font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-[#1683E8]"
                        : "text-[#5F6672] group-hover:text-[#111111]"
                    }`}
                  >
                    {card.num}
                  </span>
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2.5 h-2.5 bg-[#1683E8] ring-2 ring-[#1683E8]/30 scale-125"
                        : "w-1.5 h-1.5 bg-slate-300 group-hover:bg-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <span className="font-jakarta text-xs font-bold uppercase tracking-widest text-white/70">
                Winnovation FORGE Overview
              </span>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Close overview video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/forge-hero-logo.mp4"
                controls
                autoPlay
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
