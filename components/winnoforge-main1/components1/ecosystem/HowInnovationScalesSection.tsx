"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Network,
  Play,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScaleCardItem {
  num: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof BookOpen;
  tags: [string, string, string];
  tag: string;
  accentColor: string;
  bgGradient: string;
  badgeBg: string;
  badgeText: string;
  href: string;
}

// 5 cards using BLUE SHADES ONLY (no orange, red, green, or other non-blue hues)
const SCALE_CARDS: ScaleCardItem[] = [
  {
    num: "01",
    eyebrow: "KNOWLEDGE LAYER",
    title: "Shared Knowledge",
    subtitle: "Insight Flow",
    description:
      "Practices, learnings, and insights move across campuses, creating a compound learning advantage for every student and institution.",
    icon: BookOpen,
    tags: ["KNOWLEDGE", "FRAMEWORKS", "INSIGHTS"],
    tag: "SCALE / 01",
    accentColor: "#1683E8",
    bgGradient: "from-blue-50/90 via-white to-white",
    badgeBg: "bg-blue-50/90 border-blue-200/80",
    badgeText: "text-[#1683E8]",
    href: "/collaborate",
  },
  {
    num: "02",
    eyebrow: "NETWORK LAYER",
    title: "Cross-Campus Collaboration",
    subtitle: "Unified Teams",
    description:
      "Teams from different institutions work on shared problems, breaking campus silos and multiplying perspective and execution speed.",
    icon: Network,
    tags: ["PEOPLE", "IDEAS", "IMPACT"],
    tag: "SCALE / 02",
    accentColor: "#0284C7",
    bgGradient: "from-sky-50/80 via-white to-white",
    badgeBg: "bg-sky-50/90 border-sky-200/80",
    badgeText: "text-[#0284C7]",
    href: "/collaborate",
  },
  {
    num: "03",
    eyebrow: "EXPERIMENTATION LAYER",
    title: "Distributed Experimentation",
    subtitle: "Rapid Iteration",
    description:
      "Multiple teams explore different pathways to a problem simultaneously, accelerating the validation of real-world solutions.",
    icon: FlaskConical,
    tags: ["EXPERIMENT", "VALIDATE", "ITERATE"],
    tag: "SCALE / 03",
    accentColor: "#0066FF",
    bgGradient: "from-blue-50/80 via-white to-white",
    badgeBg: "bg-blue-50/90 border-blue-200/80",
    badgeText: "text-[#0066FF]",
    href: "/collaborate",
  },
  {
    num: "04",
    eyebrow: "STANDARDS LAYER",
    title: "Common Standards",
    subtitle: "Quality Rigor",
    description:
      "A shared framework preserves quality, benchmark rigor, and operational excellence across every active chapter and laboratory.",
    icon: Shield,
    tags: ["STANDARDS", "RIGOR", "QUALITY"],
    tag: "SCALE / 04",
    accentColor: "#2563EB",
    bgGradient: "from-sky-50/90 via-white to-white",
    badgeBg: "bg-sky-50/90 border-sky-200/80",
    badgeText: "text-[#2563EB]",
    href: "/collaborate",
  },
  {
    num: "05",
    eyebrow: "CONVERGENCE LAYER",
    title: "Convergence",
    subtitle: "Ecosystem Synthesis",
    description:
      "Summits, demo days, and showcases bring the network together, connecting verified builder talent directly with capital and industry.",
    icon: Sparkles,
    tags: ["SUMMITS", "SHOWCASES", "NETWORK"],
    tag: "SCALE / 05",
    accentColor: "#1D4ED8",
    bgGradient: "from-indigo-50/70 via-white to-white",
    badgeBg: "bg-indigo-50/90 border-indigo-200/80",
    badgeText: "text-[#1D4ED8]",
    href: "/collaborate",
  },
];

const STATS_DATA = [
  { value: "50+", label: "STARTUPS" },
  { value: "1000+", label: "STUDENTS" },
  { value: "20+", label: "INSTITUTIONS" },
  { value: "∞", label: "OPPORTUNITIES" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * HOW INNOVATION SCALES ACROSS CAMPUSES
 * Pinned square card stack matching home page Philosophy.tsx
 * Blue shades only (#1683E8, #0284C7, #0066FF, #2563EB, #1D4ED8)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function HowInnovationScalesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsStageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const activeIndexRef = useRef<number>(0);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Check user prefers-reduced-motion preference
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

    // Vertical offset: clamped cleanly
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
          end: "+=200%", // Responsive scroll distance for 5 cards
          pin: true,
          scrub: 0.35, // Fast, silky-smooth response without lag
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;

            // Direct, continuous card progress from 0 to 4 across 5 cards
            const cardProgress = Math.max(0, Math.min(4, p * 4));

            // Synchronized active index for counter and vertical indicator
            const nextIdx = Math.max(0, Math.min(4, Math.round(cardProgress)));
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
          end: "+=170%",
          pin: true,
          scrub: 0.35,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const cardProgress = Math.max(0, Math.min(4, p * 4));

            const nextIdx = Math.max(0, Math.min(4, Math.round(cardProgress)));
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
    const progressMap = [0.02, 0.25, 0.5, 0.75, 0.98];
    const targetProgress = progressMap[targetIndex] ?? 0;
    const targetScroll = st.start + (st.end - st.start) * targetProgress;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="how-innovation-scales"
      aria-label="How Innovation Scales Across Campuses"
      className="relative w-full bg-[#F7F8FC] text-[#111111] overflow-hidden select-none border-t border-[#D9DEE7]/70"
    >
      {/* Reduced motion static fallback */}
      {isReducedMotion ? (
        <div className="w-full max-w-[1360px] mx-auto px-6 py-20 flex flex-col gap-12">
          <div className="max-w-xl">
            <span className="font-jakarta text-xs font-bold tracking-[0.25em] text-[#1683E8] uppercase">
              — HOW INNOVATION SCALES —
            </span>
            <h2 className="mt-3 font-clash font-bold text-4xl sm:text-5xl text-[#111111] leading-tight tracking-tight">
              Build Locally.{" "}
              <span className="text-[#1683E8]">Learn Collectively.</span>{" "}
              Scale Responsibly.
            </h2>
            <p className="mt-4 font-sans text-base text-[#5F6672] leading-relaxed">
              The FORGE ecosystem is designed to support local execution while
              enabling shared learning across institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCALE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
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
                    <div className="mt-6 flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border"
                        style={{
                          backgroundColor: `${card.accentColor}12`,
                          borderColor: `${card.accentColor}30`,
                          color: card.accentColor,
                        }}
                      >
                        <Icon className="h-5 w-5 stroke-[1.8]" />
                      </div>
                      <h3 className="font-poppins font-bold text-2xl text-[#111111] tracking-tight">
                        {card.title}
                        <span style={{ color: card.accentColor }}>.</span>
                      </h3>
                    </div>
                    <p className="mt-3 font-sans text-sm text-[#5F6672] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between mt-6">
                    <span className="font-mono text-xs font-bold tracking-wider text-[#111111]">
                      {card.tag}
                    </span>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#1683E8]">
                      <span>Explore Layer</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        /* Pinned 100vh Viewport Stage matching Philosophy.tsx */
        <div className="relative w-full h-screen min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1440px] mx-auto">
          {/* Mobile Top Header */}
          <div className="md:hidden flex items-center justify-between w-full pt-6 pb-2 z-10">
            <h2 className="font-clash font-bold text-2xl text-[#111111]">
              How Innovation <span className="text-[#1683E8]">Scales.</span>
            </h2>
            <div className="font-mono text-xs font-bold text-[#1683E8]">
              0{activeCardIndex + 1} / 05
            </div>
          </div>

          {/* Desktop Left Column: Narrative, Stats & CTAs */}
          <div className="hidden md:flex w-full md:w-5/12 lg:w-5/12 xl:w-5/12 z-10 flex-col justify-center text-left pr-6">
            {/* Top Tag */}
            <div className="flex items-center gap-2.5 mb-5">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-[#1683E8] animate-pulse"
              />
              <span className="font-jakarta text-xs font-bold tracking-[0.22em] text-[#1683E8] uppercase">
                HOW INNOVATION SCALES
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight text-[#111111]">
              Build Locally.
              <br />
              <span className="text-[#1683E8]">Learn Collectively.</span>
              <br />
              Scale Responsibly.
            </h2>

            {/* Statement */}
            <p className="mt-5 font-sans text-base sm:text-lg text-[#5F6672] max-w-md leading-relaxed border-l-2 border-[#1683E8] pl-5 font-normal">
              The FORGE ecosystem is designed to support local execution while
              enabling shared learning across institutions.
            </p>

            {/* Stats Row with Vertical Dividers */}
            <div className="mt-5 pt-4 border-t border-[#D9DEE7] grid grid-cols-4 gap-2 sm:gap-3 select-none">
              {STATS_DATA.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col ${
                    idx !== 0 ? "border-l border-[#D9DEE7] pl-3 sm:pl-3.5" : ""
                  }`}
                >
                  <span className="font-clash text-lg sm:text-xl xl:text-2xl font-bold text-[#111111] tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="mt-1 font-jakarta text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-[#667085]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/collaborate"
                className="group inline-flex h-[46px] items-center gap-2 rounded-full bg-[#1683E8] px-6 font-jakarta text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,131,232,0.25)] transition-all duration-300 hover:bg-[#102A43] hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore the Ecosystem</span>
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
            <div className="mt-7 flex items-center gap-3 text-xs font-jakarta text-[#5F6672]">
              <span className="text-[#1683E8] font-bold font-mono">
                0{activeCardIndex + 1} / 05
              </span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#CBD5E1]" />
              <span className="uppercase tracking-wider font-semibold text-[#111111]">
                {SCALE_CARDS[activeCardIndex].eyebrow}
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
              {SCALE_CARDS.map((card, idx) => {
                const Icon = card.icon;

                return (
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

                    {/* Card Title, Icon, & Description in Lower-Middle */}
                    <div className="my-auto py-2 sm:py-3 relative z-10">
                      <div className="flex items-center gap-3 mb-2 sm:mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                          style={{
                            backgroundColor: `${card.accentColor}12`,
                            borderColor: `${card.accentColor}30`,
                            color: card.accentColor,
                          }}
                        >
                          <Icon className="h-5 w-5 stroke-[1.8]" />
                        </div>
                        <h3 className="font-poppins font-bold text-[clamp(24px,2.8vw,42px)] leading-[1.05] tracking-[-0.03em] text-[#111111]">
                          {card.title}
                          <span style={{ color: card.accentColor }}>.</span>
                        </h3>
                      </div>

                      <p className="mt-3 font-sans text-xs sm:text-sm md:text-base text-[#5F6672] leading-relaxed max-w-[430px] font-normal">
                        {card.description}
                      </p>

                      {/* Tags Pills */}
                      <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-white/90 border border-slate-200/90 text-[#111111] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mr-1.5 shrink-0"
                              style={{ backgroundColor: card.accentColor }}
                            />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: SCALE / 01 ───── Explore Layer → */}
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
                        className="group/link inline-flex items-center gap-1.5 font-poppins text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#1683E8] transition-colors"
                      >
                        <span>Explore Layer</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1683E8] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Minimal Vertical Progress Indicator matching Philosophy.tsx */}
          <div
            className="hidden md:flex absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 py-4 px-2.5 rounded-full bg-white/90 border border-slate-200/80 shadow-[0_4px_20px_rgba(16,42,67,0.06)] backdrop-blur-md select-none"
            aria-label="Scale progress indicator"
          >
            {SCALE_CARDS.map((card, idx) => {
              const isActive = activeCardIndex === idx;

              return (
                <button
                  key={card.num}
                  type="button"
                  onClick={() => handleJumpToCard(idx)}
                  className="group flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none p-1 transition-transform"
                  aria-label={`Jump to scale layer ${card.num}: ${card.title}`}
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

          {/* Bottom Editorial Bar */}
          <div className="absolute bottom-3 sm:bottom-4 left-6 sm:left-10 lg:left-20 right-6 sm:right-10 lg:right-20 hidden lg:flex items-center justify-between pt-3 border-t border-[#D9DEE7]/70 text-[#7A8492] text-[11px] font-jakarta font-bold uppercase tracking-[0.2em] pointer-events-none">
            <div className="flex items-center gap-2">
              <span>REAL COLLABORATION.</span>
              <span>REAL OUTCOMES.</span>
              <span className="text-[#1683E8]">A BRIGHTER TOMORROW.</span>
            </div>
            <div>BUILT BY PEOPLE. FOR WHAT&apos;S NEXT.</div>
          </div>
        </div>
      )}

      {/* Overview Video Modal */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Overview Video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          {/* Backdrop button */}
          <button
            type="button"
            className="fixed inset-0 w-full h-full cursor-default bg-transparent border-none p-0 focus:outline-none"
            onClick={() => setIsVideoOpen(false)}
            aria-label="Close modal backdrop"
          />

          <div className="relative z-10 w-full max-w-4xl rounded-2xl bg-[#111111] overflow-hidden border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-[#1683E8]">
                  FORGE OVERVIEW
                </span>
                <span className="text-white/40">•</span>
                <span className="font-jakarta text-sm text-white/80">
                  How Innovation Scales (1 min overview)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
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
