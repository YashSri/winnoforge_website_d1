"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Flag,
  Handshake,
  Lightbulb,
  RefreshCw,
  Scale,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * DATA — Eight Citadel Principles (Strictly Preserved)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface PrincipleItem {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: "01",
    num: "01",
    title: "Ownership",
    description:
      "Participants are encouraged to take responsibility for their learning, commitments, and work.",
    icon: Flag,
  },
  {
    id: "02",
    num: "02",
    title: "Discipline",
    description:
      "Progress depends on consistency, preparation, effort, and respect for shared environments.",
    icon: Scale,
  },
  {
    id: "03",
    num: "03",
    title: "Curiosity",
    description:
      "Questions, exploration, experimentation, and a willingness to learn are central to the experience.",
    icon: Lightbulb,
  },
  {
    id: "04",
    num: "04",
    title: "Collaboration",
    description:
      "Meaningful progress is strengthened by peer learning, teamwork, and knowledge-sharing.",
    icon: Handshake,
  },
  {
    id: "05",
    num: "05",
    title: "Accountability",
    description:
      "Participants should communicate clearly, honour agreed responsibilities, and respond constructively to feedback.",
    icon: CheckCircle2,
  },
  {
    id: "06",
    num: "06",
    title: "Respect",
    description:
      "The environment should support dignity, inclusion, professional conduct, and respect for different perspectives.",
    icon: Users,
  },
  {
    id: "07",
    num: "07",
    title: "Iteration",
    description:
      "Strong work is developed through testing, review, learning, and improvement.",
    icon: RefreshCw,
  },
  {
    id: "08",
    num: "08",
    title: "Integrity",
    description:
      "Participants should represent their work honestly and avoid misrepresenting progress, results, or contributions.",
    icon: Compass,
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * PRINCIPLE CARD COMPONENT
 * Two states: Idle (narrow, vertical title) & Expanded (wide, full horizontal content)
 * NO animated border. Static 1px subtle border.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function PrincipleCard({
  item,
  isExpanded,
  onHover,
  onLeave,
  onClick,
  reducedMotion,
  cardIndex,
  isVisible,
}: {
  item: PrincipleItem;
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  reducedMotion: boolean;
  cardIndex: number;
  isVisible: boolean;
}) {
  const Icon = item.icon;

  // Stagger delays for entrance animation: 70ms step per card
  const staggerDelay = `${cardIndex * 70}ms`;
  const expandEase = "cubic-bezier(0.22, 1, 0.36, 1)";
  const expandDur = reducedMotion ? "0ms" : "550ms";

  return (
    <div
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${item.num} ${item.title}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group/card relative flex flex-col overflow-hidden rounded-[24px] sm:rounded-[26px] border border-[#D8E1EE] bg-white select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683EA] focus-visible:ring-offset-2 transition-all"
      style={{
        // Horizontal expansion in row
        flex: isExpanded ? "2.35 1 0%" : "1 1 0%",
        height: "380px",
        minWidth: isExpanded ? "340px" : "0px",
        transform: isVisible
          ? isExpanded
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(28px) scale(0.98)",
        opacity: isVisible ? 1 : 0,
        boxShadow: isExpanded
          ? "0 20px 48px rgba(22, 131, 234, 0.12), 0 4px 12px rgba(16, 42, 67, 0.04)"
          : "0 4px 16px rgba(16, 42, 67, 0.03)",
        borderColor: isExpanded ? "rgba(22, 131, 234, 0.35)" : "#D8E1EE",
        transition: reducedMotion
          ? "border-color 200ms ease, box-shadow 200ms ease"
          : `flex ${expandDur} ${expandEase}, min-width ${expandDur} ${expandEase}, transform ${expandDur} ${expandEase}, box-shadow 400ms ease, border-color 400ms ease, opacity 650ms ${expandEase} ${staggerDelay}`,
      }}
    >
      {/* ── COLLAPSED IDLE VIEW ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-between p-6 sm:p-7 transition-opacity"
        style={{
          opacity: isExpanded ? 0 : 1,
          pointerEvents: isExpanded ? "none" : "auto",
          transitionDuration: isExpanded ? "180ms" : "380ms",
          transitionDelay: isExpanded ? "0ms" : "220ms",
          transitionTimingFunction: expandEase,
        }}
      >
        {/* Top: number (left) & small blue icon (right) */}
        <div className="flex w-full items-start justify-between">
          <span className="font-jakarta text-[13px] font-bold tracking-wider text-[#A0AABB]">
            {item.num}
          </span>
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[14px] bg-[#EAF3FF] border border-[#D9E2EE]/60 text-[#1683EA] transition-transform duration-300 group-hover/card:scale-105">
            <Icon className="h-[18px] w-[18px] stroke-[1.8]" />
          </div>
        </div>

        {/* Center: VERTICAL TITLE */}
        <div
          className="flex flex-1 items-center justify-center my-auto"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="font-clash text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.24em] text-[#111111]">
            {item.title}
          </span>
        </div>

        {/* Bottom: divider + FORGE + number */}
        <div className="flex w-full items-center justify-between pt-1">
          <span className="h-[1px] w-6 sm:w-7 bg-[#D8E1EE]" />
          <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.16em] text-[#A0AABB]">
            FORGE
          </span>
          <span className="font-jakarta text-[11px] font-bold tracking-wider text-[#A0AABB]">
            {item.num}
          </span>
        </div>
      </div>

      {/* ── EXPANDED HOVER VIEW ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col justify-between p-7 sm:p-8"
        style={{
          opacity: isExpanded ? 1 : 0,
          pointerEvents: isExpanded ? "auto" : "none",
          transitionDuration: isExpanded ? "450ms" : "150ms",
          transitionDelay: isExpanded ? "180ms" : "0ms",
          transitionTimingFunction: expandEase,
        }}
      >
        {/* Top row: Number + Icon container (left) & Action Button (right) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="font-jakarta text-sm font-bold tracking-wider text-[#1683EA]"
              style={{
                transform: isExpanded ? "translateY(0)" : "translateY(6px)",
                opacity: isExpanded ? 1 : 0,
                transition: `transform 400ms ${expandEase} 240ms, opacity 400ms ${expandEase} 240ms`,
              }}
            >
              {item.num}
            </span>
            <div
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[14px] bg-[#EAF3FF] border border-[#D9E2EE]/60 text-[#1683EA]"
              style={{
                transform: isExpanded ? "scale(1)" : "scale(0.92)",
                opacity: isExpanded ? 1 : 0,
                transition: `transform 420ms ${expandEase} 260ms, opacity 400ms ${expandEase} 260ms`,
              }}
            >
              <Icon className="h-5 w-5 stroke-[1.8]" />
            </div>
          </div>

          {/* Blue Arrow Button */}
          <div
            className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#1683EA] text-white shadow-[0_6px_18px_rgba(22,131,234,0.30)] transition-transform duration-300 group-hover/card:scale-105"
            style={{
              transform: isExpanded ? "scale(1) rotate(0deg)" : "scale(0.85) rotate(-15deg)",
              opacity: isExpanded ? 1 : 0,
              transition: `transform 420ms ${expandEase} 280ms, opacity 380ms ${expandEase} 280ms`,
            }}
          >
            <ArrowRight className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover/card:translate-x-0.5" />
          </div>
        </div>

        {/* Center: Eyebrow + Large Title + Description */}
        <div className="my-auto py-2">
          {/* Eyebrow */}
          <span
            className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#A0AABB] block"
            style={{
              transform: isExpanded ? "translateY(0)" : "translateY(10px)",
              opacity: isExpanded ? 1 : 0,
              transition: `transform 440ms ${expandEase} 280ms, opacity 400ms ${expandEase} 280ms`,
            }}
          >
            PRINCIPLE
          </span>

          {/* Large Title */}
          <h3
            className="mt-2 font-clash text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] leading-tight"
            style={{
              transform: isExpanded ? "translateY(0)" : "translateY(12px)",
              opacity: isExpanded ? 1 : 0,
              transition: `transform 460ms ${expandEase} 300ms, opacity 420ms ${expandEase} 300ms`,
            }}
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            className="mt-3 font-jakarta text-[13px] sm:text-[14px] leading-relaxed text-[#667085] max-w-[310px]"
            style={{
              transform: isExpanded ? "translateY(0)" : "translateY(14px)",
              opacity: isExpanded ? 1 : 0,
              transition: `transform 480ms ${expandEase} 330ms, opacity 430ms ${expandEase} 330ms`,
            }}
          >
            {item.description}
          </p>
        </div>

        {/* Bottom: Thin divider + LEARN MORE → */}
        <div className="pt-2">
          <div
            className="mb-3.5 h-[1px] w-full bg-[#D8E1EE]"
            style={{
              transform: isExpanded ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left center",
              opacity: isExpanded ? 1 : 0,
              transition: `transform 500ms ${expandEase} 350ms, opacity 350ms ${expandEase} 350ms`,
            }}
          />
          <div
            className="flex items-center gap-1.5"
            style={{
              transform: isExpanded ? "translateY(0)" : "translateY(8px)",
              opacity: isExpanded ? 1 : 0,
              transition: `transform 460ms ${expandEase} 380ms, opacity 400ms ${expandEase} 380ms`,
            }}
          >
            <span className="font-jakarta text-[12px] font-bold uppercase tracking-[0.18em] text-[#1683EA]">
              LEARN MORE
            </span>
            <ArrowRight
              className="h-3.5 w-3.5 text-[#1683EA] transition-transform duration-300 group-hover/card:translate-x-1"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * MOBILE ACCORDION CARD COMPONENT
 * On mobile (< 768px), cards are cleanly stacked with horizontal titles
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function MobilePrincipleCard({
  item,
  isExpanded,
  onToggle,
}: {
  item: PrincipleItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;

  return (
    <div
      onClick={onToggle}
      className={`rounded-2xl border bg-white p-5 transition-all duration-300 cursor-pointer ${
        isExpanded
          ? "border-[#1683EA]/40 shadow-[0_12px_32px_rgba(22,131,234,0.10)]"
          : "border-[#D8E1EE] shadow-sm hover:border-[#1683EA]/30"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-jakarta text-xs font-bold tracking-wider text-[#1683EA]">
            {item.num}
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#1683EA]">
            <Icon className="h-4 w-4 stroke-[1.8]" />
          </div>
          <h3 className="font-clash text-lg font-bold text-[#111111]">
            {item.title}
          </h3>
        </div>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 ${
            isExpanded
              ? "bg-[#1683EA] text-white rotate-90"
              : "bg-slate-100 text-[#667085]"
          }`}
        >
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-[#D8E1EE] animate-in fade-in duration-300">
          <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#A0AABB] block mb-1">
            PRINCIPLE
          </span>
          <p className="font-jakarta text-sm leading-relaxed text-[#667085]">
            {item.description}
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 font-jakarta text-xs font-bold uppercase tracking-[0.16em] text-[#1683EA]">
            <span>LEARN MORE</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * MAIN THE PRINCIPLES BEHIND THE CITADEL SECTION
 * Two-Row Interactive Expanding Card System matching visual reference
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function CitadelPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState<boolean>(false);
  const [cardsVisible, setCardsVisible] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Active cards for each row. null = all cards idle and identical
  const [activeRow1, setActiveRow1] = useState<number | null>(null);
  const [activeRow2, setActiveRow2] = useState<number | null>(null);

  // Mobile active index (0 to 7)
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  // Scroll entrance reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (reducedMotion) {
      setHeaderVisible(true);
      setCardsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          // Slight delay for cards stagger
          setTimeout(() => setCardsVisible(true), 150);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const row1 = PRINCIPLES.slice(0, 4); // 01, 02, 03, 04
  const row2 = PRINCIPLES.slice(4, 8); // 05, 06, 07, 08

  return (
    <section
      ref={sectionRef}
      id="citadel-principles"
      aria-label="The Principles Behind the Citadel"
      className="relative w-full overflow-hidden bg-[#FAFCFF] px-6 py-20 md:px-12 md:py-28 select-none"
    >
      {/* ── Architectural Decorative Elements matching reference ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Left Side Architectural Circular Arc & Dot */}
        <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#1683EA]/15 opacity-60" />
        <div className="absolute left-[88px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#1683EA]" />

        {/* Right Side Architectural Circular Arc & Dot */}
        <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#1683EA]/15 opacity-60" />
        <div className="absolute right-[88px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#1683EA]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1520px]">
        {/* ━━━━━ TOP EDITORIAL MARKERS + CENTER HEADER ━━━━━ */}
        <div className="relative mb-14 sm:mb-16">
          {/* Top Left Marker */}
          <div className="hidden xl:flex absolute left-0 top-0 flex-col text-left">
            <span className="h-4 w-[1.5px] bg-[#1683EA] mb-2" />
            <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8896A6] leading-relaxed">
              <span>LEARN.</span>
              <br />
              <span>BUILD.</span>
              <br />
              <span>EXECUTE.</span>
              <br />
              <span>GROW.</span>
            </div>
          </div>

          {/* Top Right Marker */}
          <div className="hidden xl:flex absolute right-0 top-0 flex-col text-right">
            <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8896A6] leading-relaxed">
              <span>PEOPLE.</span>
              <br />
              <span>PARTNERSHIPS.</span>
              <br />
              <span>A BRIGHTER</span>
              <br />
              <span>TOMORROW.</span>
            </div>
          </div>

          {/* Center Header */}
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3.5 text-center">
            {/* Eyebrow: — THE PRINCIPLES — */}
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
              <span className="font-jakarta text-xs sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#1683EA]">
                THE PRINCIPLES
              </span>
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            </div>

            {/* Main Heading with Masked Reveal */}
            <div className="overflow-hidden">
              <h2
                className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#111111] leading-[1.08]"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible ? "translateY(0)" : "translateY(100%)",
                  transition: reducedMotion
                    ? "none"
                    : "opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.08s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.08s",
                }}
              >
                The Principles Behind{" "}
                <span className="text-[#1683EA]">the Citadel.</span>
              </h2>
            </div>

            {/* Supporting Text */}
            <p
              className="font-jakarta text-sm sm:text-base text-[#667085] max-w-xl leading-relaxed"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(12px)",
                transition: reducedMotion
                  ? "none"
                  : "opacity 0.55s cubic-bezier(0.22,1,0.36,1) 0.16s, transform 0.55s cubic-bezier(0.22,1,0.36,1) 0.16s",
              }}
            >
              A shared foundation for how we learn, build, and create real impact — together.
            </p>
          </div>
        </div>

        {/* ━━━━━ DESKTOP & TABLET TWO-ROW INTERACTIVE EXPANDING RAILS (>= 768px) ━━━━━ */}
        <div className="hidden md:flex flex-col gap-6 w-full">
          {/* ROW 1: 01 | 02 | 03 | 04 */}
          <div
            className="flex items-center gap-5 sm:gap-6 w-full"
            onMouseLeave={() => setActiveRow1(null)}
          >
            {row1.map((item, idx) => (
              <PrincipleCard
                key={item.id}
                item={item}
                cardIndex={idx}
                isVisible={cardsVisible}
                isExpanded={activeRow1 === idx}
                onHover={() => setActiveRow1(idx)}
                onLeave={() => setActiveRow1(null)}
                onClick={() =>
                  setActiveRow1(activeRow1 === idx ? null : idx)
                }
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          {/* ROW 2: 05 | 06 | 07 | 08 */}
          <div
            className="flex items-center gap-5 sm:gap-6 w-full"
            onMouseLeave={() => setActiveRow2(null)}
          >
            {row2.map((item, idx) => (
              <PrincipleCard
                key={item.id}
                item={item}
                cardIndex={idx + 4}
                isVisible={cardsVisible}
                isExpanded={activeRow2 === idx}
                onHover={() => setActiveRow2(idx)}
                onLeave={() => setActiveRow2(null)}
                onClick={() =>
                  setActiveRow2(activeRow2 === idx ? null : idx)
                }
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>

        {/* ━━━━━ MOBILE STACKED ACCORDION VIEW (< 768px) ━━━━━ */}
        <div className="flex md:hidden flex-col gap-3.5 w-full">
          {PRINCIPLES.map((item, idx) => (
            <MobilePrincipleCard
              key={item.id}
              item={item}
              isExpanded={mobileActive === idx}
              onToggle={() =>
                setMobileActive(mobileActive === idx ? null : idx)
              }
            />
          ))}
        </div>

        {/* ━━━━━ BOTTOM EDITORIAL MARKERS + HELPER ━━━━━ */}
        <div className="mt-12 sm:mt-14 relative flex items-center justify-between pt-4">
          {/* Bottom Left Marker */}
          <div className="hidden xl:flex flex-col text-left">
            <span className="h-4 w-[1.5px] bg-[#D9DEE7] mb-1.5" />
            <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8896A6] leading-relaxed">
              <span>STUDENTS.</span>
              <br />
              <span>IDEAS.</span>
              <br />
              <span>REAL IMPACT.</span>
            </div>
          </div>

          {/* Center Helper: Mouse Icon + Hover over a card to explore */}
          <div className="mx-auto flex items-center gap-2.5 text-[#8896A6] select-none">
            {/* Minimal SVG Mouse Icon */}
            <svg
              className="w-4 h-5 stroke-current"
              viewBox="0 0 16 22"
              fill="none"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="14" height="20" rx="7" />
              <line x1="8" y1="4.5" x2="8" y2="8.5" />
            </svg>
            <span className="font-jakarta text-xs font-medium tracking-wide">
              Hover over a card to explore
            </span>
          </div>

          {/* Bottom Right Marker: — THE CITADEL */}
          <div className="hidden xl:flex items-center gap-3 text-right">
            <span className="h-[1px] w-6 bg-[#8896A6]" />
            <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-[#8896A6]">
              THE CITADEL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
