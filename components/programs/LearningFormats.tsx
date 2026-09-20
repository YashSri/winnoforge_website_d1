"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Users,
  Presentation,
  FolderKanban,
  Swords,
  HeartHandshake,
  Layers,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * DATA — seven learning formats (preserved)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface LearningFormat {
  icon: LucideIcon;
  title: string;
  description: string;
}

const formats: LearningFormat[] = [
  {
    icon: Building2,
    title: "Campus-Based",
    description:
      "Programs delivered through partner institutions, campus chapters, labs, workshops, or scheduled sessions.",
  },
  {
    icon: Users,
    title: "Cohort-Based",
    description:
      "Structured groups progressing through a common learning and project journey.",
  },
  {
    icon: Presentation,
    title: "Workshop-Based",
    description:
      "Focused, short-format learning experiences around a specific skill or topic.",
  },
  {
    icon: FolderKanban,
    title: "Project-Based",
    description:
      "Learning organised around building, testing, and presenting a practical output.",
  },
  {
    icon: Swords,
    title: "Challenge-Based",
    description:
      "Participants work on defined problems, prompts, or innovation challenges.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship-Led",
    description:
      "Participants receive guidance, review, and feedback from mentors or subject experts.",
  },
  {
    icon: Layers,
    title: "Hybrid",
    description:
      "A combination of digital learning, in-person interaction, practical work, and reviews.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * SVG ANIMATED BORDER (per card)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function CardBorder({ active }: { active: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="23"
        ry="23"
        fill="none"
        stroke="#1683E8"
        strokeWidth="1.5"
        pathLength="100"
        strokeDasharray="10 90"
        strokeDashoffset="0"
        className="transition-opacity duration-500"
        style={{
          opacity: active ? 0.7 : 0.15,
          animation:
            "lf-border-travel 10s linear infinite",
        }}
      />
    </svg>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * SINGLE CARD
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function FormatCard({
  format,
  index,
  isActive,
  onEnter,
  onLeave,
  reducedMotion,
}: {
  format: LearningFormat;
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  reducedMotion: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");
  const Icon = format.icon;
  const expanded = isActive;

  /* ── Transition helpers ── */
  const expandEase = "cubic-bezier(0.23, 1, 0.32, 1)";
  const expandDur = reducedMotion ? "0ms" : "680ms";

  return (
    <div
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (expanded) onLeave();
          else onEnter();
        }
      }}
      className="group/card relative flex flex-col overflow-hidden rounded-[24px] border border-[#D8E1EE] bg-white select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] focus-visible:ring-offset-2"
      style={{
        flex: expanded ? "2.3 1 0%" : "1 1 0%",
        height: "470px",
        minWidth: expanded ? "360px" : "0px",
        transition: `flex ${expandDur} ${expandEase}, min-width ${expandDur} ${expandEase}, box-shadow 400ms ease`,
        boxShadow: expanded
          ? "0 20px 48px rgba(22,131,232,0.10), 0 4px 12px rgba(0,0,0,0.03)"
          : "0 4px 16px rgba(16,42,67,0.04)",
      }}
    >
      {/* Animated border */}
      {!reducedMotion && <CardBorder active={expanded} />}

      {/* ── COLLAPSED VIEW ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-between p-6 transition-opacity"
        style={{
          opacity: expanded ? 0 : 1,
          pointerEvents: expanded ? "none" : "auto",
          transitionDuration: expanded ? "200ms" : "400ms",
          transitionDelay: expanded ? "0ms" : "300ms",
          transitionTimingFunction: expandEase,
        }}
      >
        {/* Top: number */}
        <span className="self-start font-jakarta text-[13px] font-bold tracking-wider text-[#A0AABB]">
          {num}
        </span>

        {/* Center: icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#1683E8]">
          <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
        </div>

        {/* Center: vertical title */}
        <div
          className="flex flex-1 items-center justify-center"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="font-clash text-[14px] font-bold uppercase tracking-[0.18em] text-[#111111]">
            {format.title}
          </span>
        </div>

        {/* Bottom: divider + FORGE + number */}
        <div className="flex w-full items-center justify-between">
          <span className="h-[1px] w-8 bg-[#D8E1EE]" />
          <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.16em] text-[#A0AABB]">
            FORGE
          </span>
          <span className="font-jakarta text-[12px] font-bold tracking-wider text-[#A0AABB]">
            {num}
          </span>
        </div>
      </div>

      {/* ── EXPANDED VIEW ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col justify-between p-7"
        style={{
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? "auto" : "none",
          transitionDuration: expanded ? "500ms" : "180ms",
          transitionDelay: expanded ? "200ms" : "0ms",
          transitionTimingFunction: expandEase,
          transitionProperty: "opacity",
        }}
      >
        {/* Top row: number + icon */}
        <div className="flex items-start justify-between">
          <span
            className="font-jakarta text-[13px] font-bold tracking-wider text-[#1683E8]"
            style={{
              transform: expanded ? "translateY(0)" : "translateY(6px)",
              opacity: expanded ? 1 : 0,
              transition: `transform 400ms ${expandEase} 280ms, opacity 400ms ${expandEase} 280ms`,
            }}
          >
            {num}
          </span>
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1683E8] text-white"
            style={{
              transform: expanded
                ? "scale(1) translateY(0)"
                : "scale(0.9) translateY(4px)",
              opacity: expanded ? 1 : 0,
              transition: `transform 420ms ${expandEase} 300ms, opacity 380ms ${expandEase} 300ms`,
              boxShadow: "0 6px 18px rgba(22,131,232,0.22)",
            }}
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col justify-center">
          {/* Eyebrow */}
          <span
            className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#A0AABB]"
            style={{
              transform: expanded ? "translateY(0)" : "translateY(10px)",
              opacity: expanded ? 1 : 0,
              transition: `transform 450ms ${expandEase} 320ms, opacity 400ms ${expandEase} 320ms`,
            }}
          >
            Learning Format
          </span>

          {/* Title — rotates from vertical to horizontal */}
          <h3
            className="mt-2 font-clash text-xl font-bold leading-snug text-[#111111] md:text-2xl"
            style={{
              transform: expanded
                ? "rotate(0deg) translateY(0)"
                : "rotate(0deg) translateY(12px)",
              opacity: expanded ? 1 : 0,
              transformOrigin: "left center",
              transition: `transform 500ms ${expandEase} 340ms, opacity 450ms ${expandEase} 340ms`,
            }}
          >
            {format.title}
          </h3>

          {/* Description */}
          <p
            className="mt-3 font-jakarta text-[13px] leading-relaxed text-[#667085] max-w-[280px]"
            style={{
              transform: expanded ? "translateY(0)" : "translateY(14px)",
              opacity: expanded ? 1 : 0,
              transition: `transform 480ms ${expandEase} 380ms, opacity 430ms ${expandEase} 380ms`,
            }}
          >
            {format.description}
          </p>
        </div>

        {/* Bottom: divider + CTA */}
        <div>
          <div
            className="mb-4 h-[1px] w-full bg-[#D8E1EE]"
            style={{
              transform: expanded ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left center",
              opacity: expanded ? 1 : 0,
              transition: `transform 500ms ${expandEase} 400ms, opacity 350ms ${expandEase} 400ms`,
            }}
          />
          <div
            className="flex items-center gap-1.5"
            style={{
              transform: expanded ? "translateY(0)" : "translateY(8px)",
              opacity: expanded ? 1 : 0,
              transition: `transform 460ms ${expandEase} 440ms, opacity 400ms ${expandEase} 440ms`,
            }}
          >
            <span className="font-jakarta text-[12px] font-bold uppercase tracking-[0.18em] text-[#1683E8]">
              Explore Programs
            </span>
            <ArrowRight
              className="h-3.5 w-3.5 text-[#1683E8] transition-transform duration-300"
              strokeWidth={2.5}
              style={{
                transform: expanded ? "translateX(0)" : "translateX(-4px)",
                transition: `transform 300ms ${expandEase}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * MAIN SECTION
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function LearningFormats() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [railVisible, setRailVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  /* ── Detect prefers-reduced-motion ── */
  useEffect(() => {
    if (typeof window !== "undefined") {
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  /* ── Section header scroll reveal ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (reducedMotion) {
      setHeaderVisible(true);
      setRailVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  /* ── Card rail scroll reveal ── */
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    if (reducedMotion) {
      setRailVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRailVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 py-16 md:px-12 md:py-24"
    >
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes lf-border-travel {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }
      `}</style>

      {/* ── Subtle background decorations ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Faint circle outlines */}
        <div
          className="absolute -left-24 top-1/4 h-80 w-80 rounded-full border border-[#E2EAF4]"
          style={{ opacity: 0.5 }}
        />
        <div
          className="absolute -right-16 bottom-1/3 h-60 w-60 rounded-full border border-[#E2EAF4]"
          style={{ opacity: 0.4 }}
        />
        {/* Tiny blue dots */}
        <div className="absolute left-12 top-1/3 h-2.5 w-2.5 rounded-full bg-[#1683E8] opacity-40" />
        <div className="absolute right-16 top-1/4 h-2 w-2 rounded-full bg-[#1683E8] opacity-30" />
        <div className="absolute left-1/3 bottom-16 h-2 w-2 rounded-full bg-[#1683E8] opacity-25" />
        {/* Soft EAF3FF blobs */}
        <div className="absolute -left-20 top-1/2 h-64 w-64 rounded-full bg-[#EAF3FF] animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute -right-16 top-1/3 h-48 w-48 rounded-full bg-[#EAF3FF] animate-[pulse_11s_ease-in-out_infinite_3s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* ━━━━━ HEADER ━━━━━ */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {/* Eyebrow */}
          <div
            className="flex items-center justify-center gap-3 select-none"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(14px)",
              transition: reducedMotion
                ? "none"
                : "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            <span className="font-jakarta text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
              Learning Formats
            </span>
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
          </div>

          {/* Heading with overflow-hidden reveal */}
          <div className="overflow-hidden">
            <h2
              className="font-clash text-3xl font-bold tracking-tight text-[#111111] md:text-4xl lg:text-[42px] leading-[1.08]"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible
                  ? "translateY(0)"
                  : "translateY(100%)",
                transition: reducedMotion
                  ? "none"
                  : "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s",
              }}
            >
              Designed for Different{" "}
              <span className="font-boska italic text-[#1683E8]">
                Learning Environments
              </span>
            </h2>
          </div>

          {/* Supporting text */}
          <p
            className="font-jakarta text-base sm:text-lg leading-relaxed text-[#5F6672] max-w-2xl"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(16px)",
              transition: reducedMotion
                ? "none"
                : "opacity 0.5s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.5s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          >
            Every program is delivered through a format suited to its goals —
            from intensive campus sessions to flexible hybrid journeys.
          </p>
        </div>

        {/* ━━━━━ CARD RAIL ━━━━━ */}
        <div
          ref={railRef}
          className="mt-14 flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory lg:overflow-visible lg:pb-0"
          onMouseLeave={() => setActiveCard(null)}
          style={{
            opacity: railVisible ? 1 : 0,
            transform: railVisible ? "translateY(0)" : "translateY(28px)",
            transition: reducedMotion
              ? "none"
              : "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.35s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.35s",
          }}
        >
          {formats.map((format, idx) => (
            <FormatCard
              key={format.title}
              format={format}
              index={idx}
              isActive={activeCard === idx}
              onEnter={() => setActiveCard(idx)}
              onLeave={() => {}}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
