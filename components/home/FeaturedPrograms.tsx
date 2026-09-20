"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Bot,
  Clock,
  Code2,
  Database,
  Laptop,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { useModal } from "@/components/modal/ModalContext";
import { programs } from "@/lib/programs-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProgramMetaItem {
  slug: string;
  num: string;
  icon: typeof Database;
}

const PROGRAM_METAS: ProgramMetaItem[] = [
  {
    slug: "data-science",
    num: "01",
    icon: Database,
  },
  {
    slug: "business-analyst",
    num: "02",
    icon: TrendingUp,
  },
  {
    slug: "data-analytics",
    num: "03",
    icon: BarChart2,
  },
  {
    slug: "full-stack",
    num: "04",
    icon: Code2,
  },
  {
    slug: "ai-productivity",
    num: "05",
    icon: Bot,
  },
];

export default function FeaturedPrograms() {
  const { open } = useModal();

  // CRITICAL (Section 10 & 21): No card highlighted by default (activeProgram = null)
  const [activeProgram, setActiveProgram] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Map metadata to actual program definitions
  const programItems = PROGRAM_METAS.map((meta) => {
    const data = programs.find((p) => p.slug === meta.slug) || {
      name: meta.slug,
      domain: "Certification",
      duration: "10 weeks",
      deliveryMode: "Hybrid" as const,
      shortDescription: "",
    };
    return {
      ...data,
      ...meta,
    };
  });

  // Entrance animation via ScrollTrigger
  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".prog-eyebrow",
            ".prog-heading",
            ".prog-desc",
            ".prog-nav",
            ".prog-card-item",
            ".prog-editorial",
            ".prog-footer",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" },
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "restart none none reset",
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          gsap.set([".prog-card-item"], { clearProps: "transform,opacity" });
        },
      });

      tl.from(".prog-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.5,
      })
        .from(
          ".prog-heading",
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
          },
          "-=0.3",
        )
        .from(
          ".prog-desc",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".prog-nav",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".prog-card-item",
          {
            opacity: 0,
            y: 30,
            duration: 0.75,
            stagger: 0.08,
          },
          "-=0.3",
        )
        .from(
          ".prog-editorial",
          {
            opacity: 0,
            x: 20,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".prog-footer",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  // Desktop hover handling with smooth de-bounce to avoid flicker
  const handleCardMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveProgram(index);
    setCurrentIndex(index);
  };

  const handleContainerMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Return all cards to identical collapsed state
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveProgram(null);
    }, 180);
  };

  // Navigate cards via left/right buttons
  const navigate = useCallback(
    (direction: -1 | 1) => {
      setCurrentIndex((prev) => {
        const next =
          (prev + direction + programItems.length) % programItems.length;
        setActiveProgram(next);

        // Scroll to card on touch / mobile carousel
        if (cardRefs.current[next] && cardsContainerRef.current) {
          cardRefs.current[next]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
        return next;
      });
    },
    [programItems.length],
  );

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="relative w-full bg-[#F7F8FC] py-20 md:py-28 lg:py-32 overflow-hidden border-t border-[#D9DEE7]"
    >
      {/* CSS Keyframes for Subtle Floating Solid Geometric Circles */}
      <style jsx>{`
        @keyframes progOrbFloat1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(25px, -30px, 0) scale(1.06);
          }
        }

        @keyframes progOrbFloat2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(0.95);
          }
          50% {
            transform: translate3d(-30px, 20px, 0) scale(1.05);
          }
        }

        .prog-orb-1 {
          animation: progOrbFloat1 12s ease-in-out infinite;
          will-change: transform;
        }

        .prog-orb-2 {
          animation: progOrbFloat2 14s ease-in-out infinite -4s;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .prog-orb-1,
          .prog-orb-2 {
            animation: none !important;
          }
        }
      `}</style>

      {/* Decorative Solid Background Circles (Solid Colors Only, Low Opacity) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="prog-orb-1 absolute -top-10 right-1/4 w-44 h-44 rounded-full bg-[#EAF3FF] opacity-80" />
        <div className="prog-orb-2 absolute top-1/2 -right-16 w-56 h-56 rounded-full bg-[#EAF3FF] opacity-70" />
        <div className="prog-orb-1 absolute -bottom-16 right-1/3 w-36 h-36 rounded-full bg-[#EAF3FF] opacity-80" />
        {/* Tiny accent blue markers */}
        <div className="absolute top-20 right-16 w-3 h-3 rounded-full bg-[#1683E8]/70" />
        <div className="absolute bottom-28 right-10 w-2.5 h-2.5 rounded-full bg-[#1683E8]/50" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-12">
        {/* Core Two-Column Composition: Left Editorial (~32%) vs Right Expanding Cards (~68%) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-16">
          {/* LEFT SIDE: Editorial Content Block */}
          <div className="w-full lg:w-[34%] xl:w-[32%] flex flex-col justify-center shrink-0">
            {/* Eyebrow */}
            <div className="prog-eyebrow flex items-center gap-3">
              <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-[#1683E8]">
                PROGRAMS
              </span>
              <div className="w-12 h-[1.5px] bg-[#D9DEE7]" />
            </div>

            {/* Main Headline (Left Aligned, Editorial & Bold) */}
            <h2 className="prog-heading font-clash text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-[#111111] leading-[0.98] tracking-[-0.04em] mt-6">
              Learn Skills.
              <br />
              Build
              <br />
              <span className="text-[#1683E8]">Capability.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="prog-desc font-jakarta text-base sm:text-lg text-[#5F6672] leading-relaxed mt-6 max-w-[500px]">
              Explore industry-aligned certification programs designed around
              practical learning, modern tools, real projects, and career
              readiness.
            </p>

            {/* Navigation Controls: Circular Buttons + 01 / 05 Counter */}
            <div className="prog-nav mt-10 sm:mt-12 flex items-center gap-5">
              {/* Previous Button (White with border) */}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D9DEE7] bg-white text-[#111111] hover:bg-[#1683E8] hover:border-[#1683E8] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Previous program"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Next Button (Solid FORGE Blue) */}
              <button
                type="button"
                onClick={() => navigate(1)}
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1683E8] text-white hover:scale-105 flex items-center justify-center transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm cursor-pointer"
                aria-label="Next program"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Counter with Active Segment Track Indicator */}
              <div className="flex items-center gap-4 ml-2">
                <div className="font-jakarta text-sm md:text-base font-semibold tracking-wider text-[#5F6672]">
                  <span className="text-[#1683E8] font-bold text-lg md:text-xl">
                    {`0${currentIndex + 1}`}
                  </span>
                  <span className="text-[#5F6672]/60"> / 05</span>
                </div>

                {/* Subtle horizontal track indicator */}
                <div className="hidden sm:flex items-center w-16 h-[2px] bg-[#D9DEE7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1683E8] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: `${((currentIndex + 1) / 5) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Expanding Program Cards System */}
          <div className="w-full lg:w-[66%] xl:w-[68%] flex items-center justify-end relative">
            <div
              ref={cardsContainerRef}
              onMouseLeave={handleContainerMouseLeave}
              role="region"
              aria-label="Programs Carousel"
              className="flex items-stretch gap-2.5 sm:gap-3 lg:gap-3.5 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 pt-4 px-2 w-full max-w-[1000px] h-[460px] sm:h-[480px] lg:h-[500px] scrollbar-none snap-x snap-mandatory"
            >
              {programItems.map((program, idx) => {
                const Icon = program.icon;
                const isExpanded = activeProgram === idx;

                return (
                  <div
                    key={program.slug}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    onMouseEnter={() => handleCardMouseEnter(idx)}
                    onClick={() =>
                      setActiveProgram((prev) => (prev === idx ? null : idx))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveProgram((prev) => (prev === idx ? null : idx));
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isExpanded}
                    aria-label={`Program: ${program.name}`}
                    className={`prog-card-item relative h-full rounded-[24px] sm:rounded-[26px] border p-6 sm:p-7 flex flex-col justify-between select-none cursor-pointer transition-all duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-[#1683E8] focus-visible:outline-offset-2 shrink-0 snap-center ${
                      /* Desktop flex expansion & Blue Active Color */
                      isExpanded
                        ? "bg-[#1683E8] border-[#1474CE] text-white shadow-[0_22px_48px_rgba(22,131,232,0.3)] -translate-y-2 scale-[1.015] z-20 lg:flex-[2.1] lg:min-w-[280px] lg:max-w-[360px] w-[82vw] sm:w-[320px]"
                        : "bg-[#FFFFFF] border-[#D9DEE7] text-[#111111] shadow-[0_12px_30px_rgba(16,42,67,0.05)] hover:-translate-y-2 hover:scale-[1.015] hover:border-[#1683E8] hover:shadow-[0_20px_45px_rgba(22,131,232,0.12)] z-10 lg:flex-1 lg:min-w-[140px] lg:max-w-[210px] w-[80vw] sm:w-[260px] lg:w-auto"
                    }`}
                  >
                    {/* TOP: Icon Container & Index */}
                    <div className="flex items-start justify-between w-full">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isExpanded
                            ? "bg-[#55A8F2] text-white scale-105 -translate-y-0.5 shadow-sm"
                            : "bg-[#EAF3FF] text-[#1683E8]"
                        }`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* When expanded, show index number */}
                      <span
                        className={`font-jakarta text-xs sm:text-sm font-bold transition-colors duration-300 ${
                          isExpanded ? "text-white/90" : "text-[#5F6672]"
                        }`}
                      >
                        {program.num}
                      </span>
                    </div>

                    {/* CENTER: Collapsed (Vertical Title) vs Expanded (Horizontal Title & Content) */}
                    <div className="relative flex-1 my-6 flex flex-col justify-center overflow-hidden">
                      {/* COLLAPSED STATE: Refined Vertical Program Title */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                          isExpanded
                            ? "opacity-0 pointer-events-none"
                            : "opacity-100"
                        }`}
                      >
                        <span
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                          className="font-clash text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#102A43] whitespace-nowrap"
                        >
                          {program.name}
                        </span>
                      </div>

                      {/* EXPANDED STATE: Full Editorial Program Details */}
                      <div
                        className={`flex flex-col justify-center transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isExpanded
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-3 pointer-events-none"
                        }`}
                      >
                        {/* Domain Tag */}
                        <span
                          className={`font-jakarta text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 delay-0 ${
                            isExpanded ? "text-white/85" : "text-[#1683E8]"
                          }`}
                        >
                          {program.domain}
                        </span>

                        {/* Full Headline Title */}
                        <h3 className="font-clash text-xl sm:text-2xl font-bold text-white leading-snug mt-1 transition-all duration-300 delay-[60ms]">
                          {program.name}
                        </h3>

                        {/* Short Description */}
                        <p className="font-jakarta text-xs sm:text-sm text-white/90 leading-relaxed mt-2.5 line-clamp-3 transition-all duration-300 delay-[120ms]">
                          {program.shortDescription}
                        </p>

                        {/* Metadata Pills: Duration & Delivery Mode */}
                        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/20 transition-all duration-300 delay-[180ms]">
                          <div className="flex items-center gap-1.5 font-jakarta text-xs text-white/90">
                            <Clock className="w-3.5 h-3.5 text-white" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 font-jakarta text-xs text-white/90">
                            <Laptop className="w-3.5 h-3.5 text-white" />
                            <span>{program.deliveryMode}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM: Divider & Number (Collapsed) vs Explore CTA (Expanded) */}
                    <div
                      className={`w-full pt-3 border-t transition-colors duration-300 flex items-center justify-between ${
                        isExpanded ? "border-white/20" : "border-[#D9DEE7]"
                      }`}
                    >
                      {isExpanded ? (
                        <Link
                          href={`/programs/${program.slug}`}
                          className="w-full flex items-center justify-between font-jakarta text-xs font-bold tracking-[0.14em] uppercase text-white group/cta transition-all duration-300 delay-[240ms]"
                        >
                          <span>Explore Program</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                        </Link>
                      ) : (
                        <div className="w-full flex items-center justify-between text-[#5F6672]">
                          <span className="w-6 h-[1.5px] bg-[#D9DEE7]" />
                          <span className="font-jakarta text-xs font-bold">
                            {program.num}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAR RIGHT: Vertical Editorial Label (Desktop Only) */}
            <div className="prog-editorial hidden xl:flex items-center gap-4 shrink-0 pl-6 select-none">
              <div className="w-[1px] h-32 bg-[#D9DEE7]" />
              <div className="flex flex-col gap-1.5 font-jakarta text-[11px] font-bold uppercase tracking-[0.18em] text-[#718096]">
                <span>SKILLS</span>
                <span>PEOPLE</span>
                <span>OPPORTUNITIES</span>
                <span>TOMORROW</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM EDITORIAL DETAILS & BORDER LINE */}
        <div className="prog-footer mt-16 sm:mt-24 pt-8 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#718096]">
            05 INDUSTRY-ALIGNED PROGRAMS
          </span>

          <div className="hidden md:flex items-center gap-3 flex-1 max-w-md mx-8">
            <div className="h-[1px] bg-[#D9DEE7] flex-1" />
            <div className="w-2 h-2 rounded-full bg-[#1683E8]" />
            <div className="h-[1px] bg-[#D9DEE7] flex-1" />
          </div>

          <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#718096]">
            SKILLS TODAY. OPPORTUNITIES TOMORROW.
          </span>
        </div>

        {/* Preserved Download Course Catalog Button (Section 29) */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => open("catalogue")}
            className="rounded-full border border-[#D9DEE7] bg-white px-8 py-3.5 font-jakarta text-sm font-semibold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1683E8] hover:border-[#1683E8] hover:text-white hover:shadow-[0_14px_30px_rgba(16,42,67,0.08)] cursor-pointer"
          >
            Download Course Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
