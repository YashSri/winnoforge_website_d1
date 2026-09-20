"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  RefreshCw,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PhilosophyItem {
  num: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
}

const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    num: "01",
    title: "Knowledge",
    description: "Understand concepts, systems, tools, and principles.",
    icon: BookOpen,
  },
  {
    num: "02",
    title: "Ownership",
    description: "Take responsibility for a problem, task, project, or outcome.",
    icon: Target,
  },
  {
    num: "03",
    title: "Iteration",
    description: "Use feedback and evidence to improve the work.",
    icon: RefreshCw,
  },
  {
    num: "04",
    title: "Collaboration",
    description: "Build with peers, mentors, institutions, and industry.",
    icon: Users,
  },
  {
    num: "05",
    title: "Demonstration",
    description:
      "Show what has been built through documented and reviewable outputs.",
    icon: BarChart3,
  },
  {
    num: "06",
    title: "Progression",
    description:
      "Move from one level of capability to the next through evidence and experience.",
    icon: TrendingUp,
  },
];

export default function PhilosophyRailSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // CRITICAL IDLE STATE RULE: activeCard = null initially.
  // When no card is hovered, ALL 6 cards must look 100% identical.
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Keyboard and touch handlers
  const handleCardTap = (idx: number) => {
    setActiveCard((prev) => (prev === idx ? null : idx));
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardTap(idx);
    }
  };

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".phil-eyebrow",
            ".phil-heading-line-1",
            ".phil-heading-line-2",
            ".phil-desc",
            ".phil-card",
          ],
          { opacity: 1, y: 0, yPercent: 0, clearProps: "all" },
        );
        return;
      }

      // Synchronized section entrance sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          gsap.set(
            [
              ".phil-eyebrow",
              ".phil-desc",
              ".phil-card",
            ],
            { clearProps: "opacity,transform" },
          );
        },
      });

      // 0ms: Eyebrow
      tl.from(
        ".phil-eyebrow",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
        },
        0,
      );

      // 70ms: Heading Line 1 (Clipped upward reveal)
      tl.from(
        ".phil-heading-line-1",
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.65,
        },
        0.07,
      );

      // 140ms: Heading Line 2 (Clipped upward reveal with FORGE blue)
      tl.from(
        ".phil-heading-line-2",
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.65,
        },
        0.14,
      );

      // 140ms: Supporting description
      tl.from(
        ".phil-desc",
        {
          opacity: 0,
          y: 18,
          duration: 0.55,
        },
        0.14,
      );

      // 220ms: 6 Cards Entrance with subtle 50ms stagger (0ms, 50ms, 100ms, 150ms, 200ms, 250ms)
      tl.from(
        ".phil-card",
        {
          opacity: 0,
          y: 15,
          duration: 0.5,
          stagger: 0.05,
        },
        0.22,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="our-philosophy"
      onClick={() => setActiveCard(null)}
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 select-none overflow-hidden"
    >
      {/* Moving perimeter line on EACH INDIVIDUAL CARD: 10s linear continuous, no glow, no blur */}
      <style>{`
        .phil-card-border-segment {
          stroke-dasharray: 80 1000;
          animation: philCardBorderTravel 10s linear infinite;
        }
        @keyframes philCardBorderTravel {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -1080;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .phil-card-border-segment {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1360px]">
        {/* ━━━━━━━━ SECTION HEADER (Centered & Clean) ━━━━━━━━ */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="phil-eyebrow flex items-center justify-center gap-3 select-none">
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
            <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683E8]">
              OUR PHILOSOPHY
            </span>
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
          </div>

          {/* Line-by-Line Clipped Heading */}
          <h2 className="mt-4 sm:mt-5 font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#111111] leading-[1.08] select-none text-center">
            <span className="block overflow-hidden pb-1">
              <span className="phil-heading-line-1 block">
                Capability Is Built,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="phil-heading-line-2 block text-[#1683E8]">
                Not Declared
              </span>
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="phil-desc mt-4 sm:mt-5 font-jakarta text-base sm:text-lg leading-relaxed text-[#667085]">
            We believe education should produce more than knowledge — it should
            develop the ability to act on knowledge.
          </p>
        </div>

        {/* ━━━━━━━━ SIX CARDS IN ONE SINGLE HORIZONTAL ROW ━━━━━━━━ */}
        {/* Desktop: flex with flex-1 default, flex-3 on hover. Mobile: horizontal scroll rail. */}
        {/* NO section-level border. Each card has its own independent animated border! */}
        <div
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={() => setActiveCard(null)}
          className="mt-12 sm:mt-14 w-full flex overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 px-1 lg:px-0 gap-2.5 sm:gap-3 snap-x snap-mandatory lg:snap-none no-scrollbar items-stretch"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PHILOSOPHY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeCard === idx;

            return (
              <div
                key={item.num}
                tabIndex={0}
                role="button"
                aria-expanded={isHovered}
                aria-label={`${item.num} ${item.title}: ${item.description}`}
                onMouseEnter={() => setActiveCard(idx)}
                onFocus={() => setActiveCard(idx)}
                onBlur={() => setActiveCard(null)}
                onClick={() => handleCardTap(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`phil-card group relative rounded-[20px] sm:rounded-[22px] overflow-hidden cursor-pointer select-none border transition-all will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] focus-visible:ring-offset-2 shrink-0 lg:shrink ${
                  isHovered
                    ? "bg-[#1683E8] text-white border-[#1683E8] shadow-[0_16px_36px_rgba(22,131,232,0.22)]"
                    : "bg-[#FFFFFF] text-[#111111] border-[#D9E2EE] shadow-[0_4px_16px_rgba(16,42,67,0.03)] hover:border-[#1683E8]"
                }`}
                style={{
                  // Desktop: flex expansion (idle: flex-1, hover: flex-3)
                  // Mobile: fixed 280px width with snap
                  flex: isHovered ? "3 1 0%" : "1 1 0%",
                  minWidth: isHovered ? "280px" : "110px",
                  height: "440px",
                  transition:
                    "flex 550ms cubic-bezier(0.22, 1, 0.36, 1), background-color 450ms ease, border-color 450ms ease, box-shadow 450ms ease, min-width 550ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* ━━━━━━━━ SUBTLE ANIMATED BORDER PERIMETER SEGMENT ON THIS INDIVIDUAL CARD ━━━━━━━━ */}
                {/* Independent moving blue segment (0s, -1s, -2s, -3s, -4s, -5s offsets) */}
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[0.5px] w-[calc(100%-1px)] h-[calc(100%-1px)] rounded-[20px] sm:rounded-[22px] overflow-visible"
                  style={{ zIndex: 15 }}
                >
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="21"
                    ry="21"
                    pathLength="100"
                    fill="none"
                    stroke={isHovered ? "rgba(255, 255, 255, 0.85)" : "#1683E8"}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    className="phil-card-border-segment"
                    style={{
                      animationDelay: `${idx * -1}s`,
                    }}
                  />
                </svg>

                {/* Inner Card Container */}
                <div className="relative z-10 h-full w-full p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
                  {/* ───── TOP BAR: Number Index ───── */}
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-jakarta text-xs sm:text-sm font-semibold transition-colors duration-400 ${
                        isHovered ? "text-white/80" : "text-[#667085]"
                      }`}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* ───── MIDDLE: Line Icon + Title (rotates -90deg -> 0deg) + Hover Content ───── */}
                  <div className="relative my-auto flex flex-col justify-center w-full min-h-[240px]">
                    {/* Minimal Blue Line Icon */}
                    <div
                      className={`transition-all duration-400 ease-out ${
                        isHovered ? "self-start mb-3" : "mx-auto mb-2"
                      }`}
                    >
                      <Icon
                        className={`h-7 w-7 transition-colors duration-400 stroke-[1.8] ${
                          isHovered ? "text-white" : "text-[#1683E8]"
                        }`}
                      />
                    </div>

                    {/* Subtle Vertical Dash (Idle Only) */}
                    <div
                      className={`mx-auto w-[1px] transition-all duration-300 ${
                        isHovered ? "h-0 opacity-0 my-0" : "h-4 bg-[#D9E2EE] opacity-100 my-2"
                      }`}
                    />

                    {/* Title: Rotates smoothly from rotate(-90deg) to rotate(0deg) */}
                    <div
                      className={`transition-all duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered
                          ? "w-full text-left"
                          : "h-[150px] flex items-center justify-center"
                      }`}
                    >
                      <h3
                        className={`font-clash font-bold uppercase block whitespace-nowrap transition-all duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isHovered
                            ? "text-xl sm:text-2xl text-white tracking-normal origin-left"
                            : "text-xs sm:text-[13px] text-[#111111] tracking-[0.24em] origin-center"
                        }`}
                        style={{
                          transform: isHovered ? "rotate(0deg)" : "rotate(-90deg)",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Description & CTA: Revealed on hover with stagger */}
                    <div
                      className={`w-full text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered
                          ? "opacity-100 pointer-events-auto translate-y-0 mt-3 max-h-[220px]"
                          : "opacity-0 pointer-events-none translate-y-4 max-h-0 overflow-hidden mt-0"
                      }`}
                    >
                      <p
                        className="font-jakarta text-xs sm:text-sm font-normal text-white/90 leading-relaxed max-w-[280px]"
                        style={{
                          transition:
                            "opacity 400ms ease 100ms, transform 400ms ease 100ms",
                        }}
                      >
                        {item.description}
                      </p>

                      <div className="mt-3.5 h-[1.5px] w-8 bg-white/40 rounded-full" />

                      <div
                        className="mt-4"
                        style={{
                          transition:
                            "opacity 400ms ease 150ms, transform 400ms ease 150ms",
                        }}
                      >
                        <Link
                          href="/programs"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 font-jakarta text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors"
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ───── BOTTOM BAR: Spacer for Clean Balance ───── */}
                  <div className="w-full h-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
