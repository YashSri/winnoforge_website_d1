"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Boxes,
  MessageSquare,
  Presentation,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StepItem {
  num: string;
  title: string;
  description: string;
  icon: typeof Search;
}

const JOURNEY_STEPS: StepItem[] = [
  {
    num: "01",
    title: "Discover",
    description: "Understand a domain or problem worth solving.",
    icon: Search,
  },
  {
    num: "02",
    title: "Learn",
    description: "Build foundational knowledge through structured content.",
    icon: BookOpen,
  },
  {
    num: "03",
    title: "Practise",
    description: "Work through tools, exercises, and guided tasks.",
    icon: Settings,
  },
  {
    num: "04",
    title: "Build",
    description: "Create projects and prototypes from what you've learned.",
    icon: Boxes,
  },
  {
    num: "05",
    title: "Review",
    description: "Receive feedback from mentors and peers.",
    icon: MessageSquare,
  },
  {
    num: "06",
    title: "Showcase",
    description: "Present outcomes and demonstrate capability.",
    icon: Presentation,
  },
  {
    num: "07",
    title: "Progress",
    description: "Move toward advanced learning, careers, or innovation opportunities.",
    icon: TrendingUp,
  },
];

export default function CuriosityToCapability() {
  // Idle state: null (no card popped out when not hovering)
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const hoverResetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".c2c-eyebrow",
            ".c2c-heading",
            ".c2c-desc",
            ".c2c-connector",
            ".c2c-card",
            ".c2c-footer",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" }
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
          gsap.set(".c2c-card", { clearProps: "transform" });
        },
      });

      tl.from(".c2c-eyebrow", {
        opacity: 0,
        y: 12,
        duration: 0.5,
      })
        .from(
          ".c2c-heading",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.3"
        )
        .from(
          ".c2c-desc",
          {
            opacity: 0,
            y: 16,
            duration: 0.55,
          },
          "-=0.4"
        )
        .from(
          ".c2c-connector",
          {
            scaleX: 0,
            transformOrigin: "center center",
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".c2c-card",
          {
            opacity: 0,
            y: 24,
            duration: 0.6,
            stagger: 0.05,
            clearProps: "all",
          },
          "-=0.4"
        )
        .from(
          ".c2c-footer",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
          },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  // Desktop hover handling
  const handleMouseEnter = (idx: number) => {
    if (hoverResetTimeoutRef.current) {
      clearTimeout(hoverResetTimeoutRef.current);
      hoverResetTimeoutRef.current = null;
    }
    setActiveStep(idx);
  };

  const handleContainerMouseLeave = () => {
    if (hoverResetTimeoutRef.current) {
      clearTimeout(hoverResetTimeoutRef.current);
    }
    // Idle state: reset to null so NO card remains popped out when not hovering
    hoverResetTimeoutRef.current = setTimeout(() => {
      setActiveStep(null);
    }, 180);
  };

  const mobileActiveIndex = activeStep !== null ? activeStep : 2;

  const handlePrev = () => {
    setActiveStep((prev) => {
      const current = prev !== null ? prev : 2;
      return current === 0 ? JOURNEY_STEPS.length - 1 : current - 1;
    });
  };

  const handleNext = () => {
    setActiveStep((prev) => {
      const current = prev !== null ? prev : 2;
      return current === JOURNEY_STEPS.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="relative w-full bg-[#F7F8FC] px-4 py-20 sm:px-6 md:px-10 md:py-28 lg:px-12 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1550px]">
        {/* ━━━━━━━━ SECTION HEADER ━━━━━━━━ */}
        <div ref={headerRef} className="text-center">
          {/* Eyebrow */}
          <div className="c2c-eyebrow flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
              OUR APPROACH
            </span>
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
          </div>

          {/* Main Headline */}
          <h2 className="c2c-heading font-clash mt-5 text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-[#111111] leading-[1.02]">
            From Curiosity to <span className="text-[#1683E8]">Capability.</span>
          </h2>

          {/* Supporting Text */}
          <p className="c2c-desc font-jakarta mx-auto mt-5 max-w-[640px] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-[#5F6672]">
            A structured learning journey that transforms interest into real-world impact.
          </p>
        </div>

        {/* ━━━━━━━━ DESKTOP CONNECTED SEVEN-CARD SYSTEM (>= 1024px) ━━━━━━━━ */}
        <div
          ref={trackRef}
          onMouseLeave={handleContainerMouseLeave}
          className="relative mt-16 sm:mt-20 md:mt-24 hidden lg:flex items-center justify-center min-h-[360px] xl:min-h-[400px]"
        >
          {/* Subtle Horizontal Connector Line Behind Cards */}
          <div className="c2c-connector absolute top-1/2 left-2 right-2 h-[2px] bg-[#1683E8] -translate-y-1/2 z-0 pointer-events-none" />

          {/* 7 Square Cards Row */}
          <div className="relative z-10 flex items-center justify-center gap-2.5 xl:gap-3.5 2xl:gap-4 w-full">
            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onClick={() => setActiveStep(idx)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  aria-label={`Step ${step.num}: ${step.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveStep(idx);
                    }
                  }}
                  className={`c2c-card group relative select-none transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "z-20 w-[215px] xl:w-[250px] 2xl:w-[275px] h-[230px] xl:h-[265px] 2xl:h-[290px] -translate-y-4 xl:-translate-y-5 rounded-[26px] bg-[#1683E8] border border-[#1474CE] shadow-[0_24px_50px_rgba(22,131,232,0.38)] cursor-default"
                      : "z-10 w-[160px] xl:w-[185px] 2xl:w-[200px] h-[160px] xl:h-[185px] 2xl:h-[200px] translate-y-0 rounded-[24px] bg-white border border-[#D9DEE7] hover:border-[#1683E8] shadow-[0_4px_18px_rgba(16,42,67,0.05)] hover:shadow-[0_14px_30px_rgba(16,42,67,0.1)] cursor-pointer"
                  }`}
                >
                  {/* ─── COLLAPSED CARD VIEW ─── */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-between p-4 xl:p-5 transition-opacity duration-300 ${
                      isActive ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
                    }`}
                  >
                    {/* Top-Left Sequence Number */}
                    <div className="w-full flex items-start justify-start">
                      <span className="font-clash text-xs xl:text-sm font-bold text-[#5F6672] transition-colors duration-300 group-hover:text-[#1683E8]">
                        {step.num}
                      </span>
                    </div>

                    {/* Center Circular Icon Badge */}
                    <div className="flex h-12 w-12 xl:h-14 xl:w-14 items-center justify-center rounded-full bg-[#EBF3FC] text-[#1683E8] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6 xl:h-7 xl:w-7 stroke-[1.8]" />
                    </div>

                    {/* Bottom Title */}
                    <div className="w-full text-center">
                      <h3 className="font-clash text-sm xl:text-base font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#1683E8]">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* ─── ACTIVE EXPANDED CARD VIEW ─── */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-between p-4 xl:p-5 text-white transition-all duration-400 ${
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto delay-75"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {/* Top-Left Active Number */}
                    <div className="w-full flex items-start justify-start">
                      <span className="font-clash text-xs xl:text-sm font-bold text-white">
                        {step.num}
                      </span>
                    </div>

                    {/* Center White Icon Badge */}
                    <div className="flex h-13 w-13 xl:h-15 xl:w-15 items-center justify-center rounded-full bg-white text-[#1683E8] shadow-sm">
                      <Icon className="h-6 w-6 xl:h-7 xl:w-7 stroke-[2]" />
                    </div>

                    {/* Active Title & Revealed Description */}
                    <div className="w-full text-center px-1">
                      <h3 className="font-clash text-base xl:text-lg font-bold text-white leading-tight">
                        {step.title}
                      </h3>
                      <p className="font-jakarta mt-1.5 text-[11.5px] xl:text-[12.5px] leading-snug text-white/95 line-clamp-3">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ━━━━━━━━ MOBILE & TABLET RESPONSIVE VIEW (< 1024px) ━━━━━━━━ */}
        <div className="mt-14 sm:mt-16 w-full flex flex-col lg:hidden">
          {/* Active Card Hero Banner */}
          <div className="w-full max-w-[440px] mx-auto rounded-[24px] bg-[#1683E8] border border-[#1474CE] p-7 text-white shadow-[0_20px_40px_rgba(22,131,232,0.3)] min-h-[220px] flex flex-col justify-between select-none">
            <div className="flex items-center justify-between">
              <span className="font-clash text-sm font-bold text-white/90">
                {JOURNEY_STEPS[mobileActiveIndex].num} / 07
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1683E8] shadow-sm">
                {(() => {
                  const ActiveIcon = JOURNEY_STEPS[mobileActiveIndex].icon;
                  return <ActiveIcon className="h-6 w-6 stroke-[2]" />;
                })()}
              </div>
            </div>

            <div className="my-2">
              <h3 className="font-clash text-2xl font-bold text-white">
                {JOURNEY_STEPS[mobileActiveIndex].title}
              </h3>
              <p className="font-jakarta mt-2 text-[14px] leading-relaxed text-white/95">
                {JOURNEY_STEPS[mobileActiveIndex].description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs font-bold uppercase tracking-wider text-white/80 font-jakarta">
              <span>STEP {JOURNEY_STEPS[mobileActiveIndex].num}</span>
              <span>LEARN &bull; BUILD &bull; PROGRESS</span>
            </div>
          </div>

          {/* Horizontal Step Selector Pill Row */}
          <div className="mt-6 flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto py-2 px-2 no-scrollbar">
            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = (activeStep !== null ? activeStep : mobileActiveIndex) === idx;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-[#1683E8] border-[#1683E8] text-white shadow-md scale-105"
                      : "bg-white border-[#D9DEE7] text-[#111111] hover:border-[#1683E8]"
                  }`}
                >
                  <span className="font-clash text-[10px] font-bold opacity-75">
                    {step.num}
                  </span>
                  <span className="font-jakarta text-[11px] font-bold whitespace-nowrap">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Controls (Prev / Next Buttons) */}
          <div className="mt-6 flex items-center justify-between max-w-[440px] mx-auto w-full px-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous step"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9DEE7] bg-white text-[#102A43] shadow-sm active:scale-95 hover:border-[#1683E8]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {JOURNEY_STEPS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    (activeStep !== null ? activeStep : mobileActiveIndex) === i
                      ? "w-6 bg-[#1683E8]"
                      : "w-2 bg-[#D9DEE7]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next step"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9DEE7] bg-white text-[#102A43] shadow-sm active:scale-95 hover:border-[#1683E8]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ━━━━━━━━ SECTION FOOTER LINE ━━━━━━━━ */}
        <div className="c2c-footer mt-16 sm:mt-20 pt-8 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-[#5F6672]">
            LEARN &nbsp;&bull;&nbsp; BUILD &nbsp;&bull;&nbsp; GROW
          </span>
          <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-[#5F6672]">
            IDEAS TODAY. IMPACT TOMORROW.
          </span>
        </div>
      </div>
    </section>
  );
}
