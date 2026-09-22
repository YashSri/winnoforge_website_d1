"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  BookOpen,
  Hammer,
  Users,
  UserCheck,
  RefreshCw,
  Monitor,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * CITADEL CARDS DATA — 7 Categories
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface CitadelCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  ctaText: string;
  icon: LucideIcon;
  href: string;
}

const CITADEL_CARDS: CitadelCardItem[] = [
  {
    id: "structured-learning",
    number: "01",
    title: "Structured Learning",
    description:
      "Participants engage with planned learning experiences that provide direction, context, and foundational understanding.",
    tag: "FORGE / 01",
    ctaText: "EXPLORE →",
    icon: BookOpen,
    href: "/citadel1#structured-learning",
  },
  {
    id: "practical-execution",
    number: "02",
    title: "Practical Execution",
    description:
      "Learning is connected to assignments, projects, experiments, prototypes, and real tasks wherever applicable.",
    tag: "FORGE / 02",
    ctaText: "EXPLORE →",
    icon: Hammer,
    href: "/citadel1#practical-execution",
  },
  {
    id: "peer-collaboration",
    number: "03",
    title: "Peer Collaboration",
    description:
      "Participants learn through discussion, teamwork, review, and shared problem-solving.",
    tag: "FORGE / 03",
    ctaText: "EXPLORE →",
    icon: Users,
    href: "/citadel1#peer-collaboration",
  },
  {
    id: "mentorship",
    number: "04",
    title: "Mentorship",
    description:
      "Mentors, trainers, and experts may provide guidance, feedback, context, and perspective.",
    tag: "FORGE / 04",
    ctaText: "EXPLORE →",
    icon: UserCheck,
    href: "/citadel1#mentorship",
  },
  {
    id: "reflection-iteration",
    number: "05",
    title: "Reflection and Iteration",
    description:
      "Participants are encouraged to review their work, understand gaps, improve outcomes, and learn from mistakes.",
    tag: "FORGE / 05",
    ctaText: "EXPLORE →",
    icon: RefreshCw,
    href: "/citadel1#reflection-iteration",
  },
  {
    id: "demonstration",
    number: "06",
    title: "Demonstration",
    description:
      "Work can be presented through reviews, showcases, project demonstrations, or other approved formats.",
    tag: "FORGE / 06",
    ctaText: "EXPLORE →",
    icon: Monitor,
    href: "/citadel1#demonstration",
  },
  {
    id: "progression",
    number: "07",
    title: "Progression",
    description:
      "Participants can explore further learning, advanced projects, leadership responsibilities, entrepreneurship, or professional pathways.",
    tag: "FORGE / 07",
    ctaText: "EXPLORE →",
    icon: TrendingUp,
    href: "/citadel1#progression",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * THE CITADEL EXPERIENCE — UIVERSE HOVER INTERACTION
 * Editorial FORGE card architecture:
 * - Idle: Clean minimal identical white cards
 * - Hover: Main content slides upward (-46px) revealing divider & CTA underneath
 * - Static 1px subtle border, no animated/glowing borders
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function CitadelExperienceBento() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const isReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (isReduced) {
        gsap.set(
          [
            ".ceb-eyebrow",
            ".ceb-eyebrow-line",
            ".ceb-heading-line",
            ".ceb-desc",
            ".ceb-card",
            ".ceb-corner",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1, clearProps: "all" }
        );
        return;
      }

      // ── Entrance Reveal Timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      // 1. Section eyebrow reveals upward
      tl.fromTo(
        ".ceb-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        0
      );
      tl.fromTo(
        ".ceb-eyebrow-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        0
      );

      // 2. Main heading reveals upward
      tl.fromTo(
        ".ceb-heading-line-1",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.65, ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        0.08
      );
      tl.fromTo(
        ".ceb-heading-line-2",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.65, ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        0.16
      );

      // 3. Supporting text fades upward
      tl.fromTo(
        ".ceb-desc",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        0.22
      );

      // 4. Cards appear sequentially: opacity 0 -> 1, translateY(30px) -> 0, duration 650ms, stagger 70ms
      tl.fromTo(
        ".ceb-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          stagger: 0.07,
          onComplete: () => {
            // Clear inline transforms so CSS hover translateY works cleanly
            gsap.set(".ceb-card", { clearProps: "transform" });
          },
        },
        0.18
      );

      // Corner microcopy
      tl.fromTo(
        ".ceb-corner",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.06 },
        0.4
      );

      // Subtle Background Parallax
      gsap.to(".ceb-deco-circle-left", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -25,
        ease: "none",
      });

      gsap.to(".ceb-deco-circle-right", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 20,
        ease: "none",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="citadel-experience"
      className="relative w-full overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-12 lg:py-28"
    >
      {/* ── Scoped CSS for Uiverse Hover Interaction ── */}
      <style>{`
        /* Static Subtle Card Shell */
        .forge-citadel-card {
          position: relative;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(20, 50, 90, 0.04);
          transition: box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1);
          height: 340px;
        }

        .forge-citadel-card:hover,
        .forge-citadel-card:focus-within,
        .forge-citadel-card.is-active {
          box-shadow: 0 18px 40px rgba(20, 50, 90, 0.08);
        }

        /* 1. Main visual/content moves upward on hover */
        .forge-card-content {
          transform: translateY(0);
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .forge-citadel-card:hover .forge-card-content,
        .forge-citadel-card:focus-within .forge-card-content,
        .forge-citadel-card.is-active .forge-card-content {
          transform: translateY(-46px);
        }

        /* 2. 2D Icon micro-animation: translateY(-2px) scale(1.04) */
        .forge-card-icon {
          transform: translateY(0) scale(1);
          transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .forge-citadel-card:hover .forge-card-icon,
        .forge-citadel-card:focus-within .forge-card-icon,
        .forge-citadel-card.is-active .forge-card-icon {
          transform: translateY(-2px) scale(1.04);
        }

        /* 3. Divider appears: opacity 0 -> 1 */
        .forge-card-divider {
          opacity: 0;
          transform: scaleX(0.96);
          transform-origin: left;
          transition: opacity 300ms ease 80ms, transform 350ms cubic-bezier(0.22, 1, 0.36, 1) 80ms;
        }

        .forge-citadel-card:hover .forge-card-divider,
        .forge-citadel-card:focus-within .forge-card-divider,
        .forge-citadel-card.is-active .forge-card-divider {
          opacity: 1;
          transform: scaleX(1);
        }

        /* 4. CTA / metadata reveals upward: opacity 0 -> 1, translateY(12px) -> 0 */
        .forge-card-reveal {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 350ms ease 120ms, transform 450ms cubic-bezier(0.22, 1, 0.36, 1) 120ms;
          pointer-events: none;
        }

        .forge-citadel-card:hover .forge-card-reveal,
        .forge-citadel-card:focus-within .forge-card-reveal,
        .forge-citadel-card.is-active .forge-card-reveal {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* 5. Arrow moves slightly to the right: translateX(4px) */
        .forge-card-arrow {
          transform: translateX(0);
          transition: transform 300ms ease 180ms;
        }

        .forge-citadel-card:hover .forge-card-arrow,
        .forge-citadel-card:focus-within .forge-card-arrow,
        .forge-citadel-card.is-active .forge-card-arrow {
          transform: translateX(4px);
        }

        /* Accessibility: Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .forge-card-content,
          .forge-card-icon,
          .forge-card-divider,
          .forge-card-reveal,
          .forge-card-arrow {
            transition: none !important;
            transform: none !important;
          }
          .forge-card-reveal,
          .forge-card-divider {
            opacity: 1 !important;
            pointer-events: auto !important;
          }
        }
      `}</style>

      {/* ── Background Architectural Graphics ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Large sweeping circular arc on left */}
        <svg
          className="ceb-deco-circle-left absolute -left-28 top-1/3 -translate-y-1/2 h-[680px] w-[680px] opacity-25"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle
            cx="350"
            cy="350"
            r="330"
            stroke="#93C5FD"
            strokeWidth="1.2"
          />
        </svg>

        {/* Small blue dot marker on left arc */}
        <div className="absolute left-[8%] top-[38%] h-2.5 w-2.5 rounded-full bg-[#1683E8] opacity-60 hidden lg:block" />

        {/* Large sweeping circular arc on right */}
        <svg
          className="ceb-deco-circle-right absolute -right-24 top-2/3 -translate-y-1/2 h-[580px] w-[580px] opacity-20"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="300"
            cy="300"
            r="280"
            stroke="#93C5FD"
            strokeWidth="1.2"
          />
        </svg>

        {/* Small blue dot on right */}
        <div className="absolute right-[6%] top-[65%] h-2.5 w-2.5 rounded-full bg-[#1683E8] opacity-60 hidden lg:block" />

        {/* Soft background ambient blurs */}
        <div className="absolute left-[15%] top-1/4 h-80 w-80 rounded-full bg-[#EAF2FF]/50 blur-3xl" />
        <div className="absolute right-[12%] bottom-1/4 h-80 w-80 rounded-full bg-[#EBF4FF]/50 blur-3xl" />
      </div>

      {/* ── Outer Editorial Edge Microcopy ── */}
      {/* Top Left */}
      <div
        className="ceb-corner pointer-events-none absolute left-6 top-8 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-5 w-[1.5px] bg-[#94A3B8]/60" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed">
          LEARN.
          <br />
          BUILD.
          <br />
          EXECUTE.
          <br />
          GROW.
        </span>
      </div>

      {/* Top Right */}
      <div
        className="ceb-corner pointer-events-none absolute right-8 top-8 hidden xl:block font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed text-right opacity-0 z-10"
        aria-hidden="true"
      >
        PEOPLE.
        <br />
        PARTNERSHIPS.
        <br />
        A BRIGHTER
        <br />
        TOMORROW.
      </div>

      {/* Bottom Left */}
      <div
        className="ceb-corner pointer-events-none absolute left-6 bottom-10 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-5 w-[1.5px] bg-[#94A3B8]/60" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed">
          STUDENTS.
          <br />
          IDEAS.
          <br />
          REAL IMPACT.
        </span>
      </div>

      {/* Bottom Right */}
      <div
        className="ceb-corner pointer-events-none absolute right-8 bottom-10 hidden xl:flex items-center gap-3 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-[1px] w-9 bg-[#CBD5E1]" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C9BB4]">
          THE CITADEL
        </span>
      </div>

      {/* ━━━━━ MAIN CONTAINER ━━━━━ */}
      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* ── Section Header ── */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Eyebrow: ───── THE CITADEL EXPERIENCE ───── */}
          <div className="ceb-eyebrow flex items-center gap-3.5 opacity-0">
            <span className="ceb-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#1683E8]/50 origin-left" />
            <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
              The Citadel Experience
            </span>
            <span className="ceb-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#1683E8]/50 origin-right" />
          </div>

          {/* Main Heading — Masked reveal */}
          <h2 className="mt-4 font-clash text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-bold tracking-tight leading-[1.02]">
            <span className="block overflow-hidden">
              <span className="ceb-heading-line ceb-heading-line-1 inline-block text-[#111111] opacity-0">
                A Different Way to
              </span>
            </span>
            <span className="block overflow-hidden mt-1">
              <span className="ceb-heading-line ceb-heading-line-2 inline-block text-[#1683E8] opacity-0">
                Learn and Build
              </span>
            </span>
          </h2>

          {/* Supporting Subtitle */}
          <p className="ceb-desc mt-5 font-jakarta text-[15px] sm:text-[17px] leading-[1.65] text-[#64748B] opacity-0 max-w-xl">
            Structured learning. Real execution. Meaningful collaboration.
            <br className="hidden sm:inline" /> A complete experience designed for what&apos;s next.
          </p>
        </div>

        {/* ── Citadel Cards Grid (Identical Minimal Editorial Cards) ── */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CITADEL_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isLastCard = idx === CITADEL_CARDS.length - 1;
            const isActive = activeCardId === card.id;

            return (
              <div
                key={card.id}
                tabIndex={0}
                role="article"
                aria-label={`${card.number} — ${card.title}`}
                onClick={() => setActiveCardId(isActive ? null : card.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className={`ceb-card forge-citadel-card opacity-0 group/citadel-card cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] ${
                  isActive ? "is-active" : ""
                } ${
                  isLastCard
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }`}
              >
                {/* ── 1. Upper Visual / Content Layer ── */}
                <div className="forge-card-content p-7 sm:p-8 pt-8 sm:pt-9 flex flex-col justify-start">
                  {/* Top Row: Number + 2D Icon */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-sm font-bold text-[#111111] tracking-wider">
                        {card.number}
                      </span>
                      <div className="h-[2px] w-4 bg-[#1683E8] mt-0.5 rounded-full" />
                    </div>

                    <div className="forge-card-icon flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EDF4FF] text-[#1683E8] shrink-0">
                      <Icon className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-jakarta text-[21px] sm:text-[22px] font-bold text-[#111111] tracking-tight leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 font-jakarta text-[14px] leading-[1.65] text-[#64748B]">
                    {card.description}
                  </p>
                </div>

                {/* ── 2. Bottom Reveal Layer (Divider + CTA / Metadata) ── */}
                <div className="absolute bottom-0 inset-x-0 px-7 pb-7 pt-2 sm:px-8 sm:pb-8 bg-white/95 backdrop-blur-[2px]">
                  {/* Subtle 1px Divider */}
                  <div className="forge-card-divider h-px w-full bg-[#E2E8F0]" />

                  {/* CTA & Metadata row */}
                  <div className="forge-card-reveal mt-4 flex items-center justify-between">
                    <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
                      {card.tag}
                    </span>

                    <div className="flex items-center gap-1.5 font-jakarta text-[12px] font-semibold text-[#111111]">
                      <span>EXPLORE</span>
                      <ArrowRight className="forge-card-arrow h-3.5 w-3.5 text-[#1683E8]" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
