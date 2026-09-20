"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Building2,
  CheckCircle2,
  MousePointer,
  Play,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CapabilityStage {
  num: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  icon: typeof Building2;
  highlights: string[];
}

const CAPABILITY_STAGES: CapabilityStage[] = [
  {
    num: "01",
    title: "Industry Alignment",
    tagline: "Bridging education and real-world needs.",
    description:
      "Learning is directly connected to tools, workflows, problem statements, and operational expectations that exist beyond the classroom.",
    badge: "INDUSTRY STANDARDS",
    icon: Building2,
    highlights: [
      "Enterprise tools and production workflows",
      "Direct practitioner problem statements",
      "Practitioner-evaluated execution criteria",
    ],
  },
  {
    num: "02",
    title: "Applied Learning",
    tagline: "Execution-led, not lecture-led.",
    description:
      "Students build, document, present, receive rapid mentor feedback, and iterate until prototypes work under real-world conditions.",
    badge: "FROM KNOWLEDGE TO IMPACT",
    icon: Wrench,
    highlights: [
      "Sprint-driven rapid prototype build cycles",
      "Continuous mentor and peer review feedback",
      "Hands-on documentation and live testing",
    ],
  },
  {
    num: "03",
    title: "Capability Development",
    tagline: "Demonstrated ability over credentials.",
    description:
      "The goal is not only course completion. The goal is the development and verifiable proof of demonstrated problem-solving capability.",
    badge: "DEMONSTRATED OUTCOMES",
    icon: TrendingUp,
    highlights: [
      "Verifiable proof-of-work project portfolio",
      "Demonstrated problem-solving evidence",
      "Direct pathways to startup launch & hiring",
    ],
  },
];

export default function WhoWeAreEngineSection() {
  const containerRef = useRef<HTMLElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const scrollTriggerInstance = useRef<ScrollTrigger | null>(null);

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

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

  // Smooth scroll to card step within pinned section
  const goToStep = useCallback((targetIdx: number) => {
    setActiveStep(targetIdx);

    const st = scrollTriggerInstance.current;
    if (st) {
      const scrollRange = st.end - st.start;
      const targetY =
        targetIdx === 0
          ? st.start + 20
          : targetIdx === 1
          ? st.start + scrollRange * 0.5
          : st.end - 40;

      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  }, []);

  const handleNext = () => {
    const nextIdx = Math.min(2, activeStep + 1);
    goToStep(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = Math.max(0, activeStep - 1);
    goToStep(prevIdx);
  };

  useGSAP(
    () => {
      if (
        typeof window === "undefined" ||
        !containerRef.current ||
        !card0Ref.current ||
        !card1Ref.current ||
        !card2Ref.current
      )
        return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([card0Ref.current, card1Ref.current, card2Ref.current], {
          clearProps: "all",
        });
        return;
      }

      // Initial entrance reveal for left column narrative
      gsap.from(".wwa-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
      });

      // Set initial card states
      // Card 0: in front, active, dominant
      gsap.set(card0Ref.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
      });

      // Card 1: directly behind card 0
      gsap.set(card1Ref.current, {
        y: 32,
        scale: 0.95,
        opacity: 0.88,
        zIndex: 20,
      });

      // Card 2: behind card 1
      gsap.set(card2Ref.current, {
        y: 64,
        scale: 0.90,
        opacity: 0.70,
        zIndex: 10,
      });

      // Master scrubbed timeline with ScrollTrigger pinning
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1700",
          pin: true,
          anticipatePin: 1,
          scrub: 0.6,
          onUpdate: (self) => {
            const p = self.progress;
            setScrollProgress(p);
            if (p < 0.40) {
              setActiveStep(0);
            } else if (p < 0.78) {
              setActiveStep(1);
            } else {
              setActiveStep(2);
            }
          },
        },
      });

      scrollTriggerInstance.current = cardTl.scrollTrigger || null;

      // ──────────────── PHASE 1: CARD 0 (01 Industry Alignment) ACTIVE ────────────────
      // Hold card 0 active through initial scroll (from t=0.0 to 0.40)
      cardTl.to({}, { duration: 0.4 });

      // ──────────────── PHASE 2: TRANSITION TO CARD 1 (02 Applied Learning) ────────────
      // Smoothly transition card 0 away and bring card 1 to dominant front (from t=0.4 to 1.0)
      cardTl.to(
        card0Ref.current,
        {
          y: -90,
          opacity: 0,
          scale: 0.95,
          zIndex: 10,
          duration: 0.6,
          ease: "power1.inOut",
        },
        0.4,
      );

      cardTl.to(
        card1Ref.current,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
          duration: 0.6,
          ease: "power1.inOut",
        },
        0.4,
      );

      cardTl.to(
        card2Ref.current,
        {
          y: 32,
          scale: 0.95,
          opacity: 0.88,
          zIndex: 20,
          duration: 0.6,
          ease: "power1.inOut",
        },
        0.4,
      );

      // Hold card 1 active through middle scroll (from t=1.0 to 1.4)
      cardTl.to({}, { duration: 0.4 });

      // ──────────────── PHASE 3: TRANSITION TO CARD 2 (03 Capability Development) ─────────
      // Smoothly transition card 1 away and bring card 2 to dominant front (from t=1.4 to 2.0)
      cardTl.to(
        card1Ref.current,
        {
          y: -90,
          opacity: 0,
          scale: 0.95,
          zIndex: 10,
          duration: 0.6,
          ease: "power1.inOut",
        },
        1.4,
      );

      cardTl.to(
        card2Ref.current,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
          duration: 0.6,
          ease: "power1.inOut",
        },
        1.4,
      );

      // Hold card 2 active through final scroll so it is 100% visible and enjoyed (from t=2.0 to 2.5)
      cardTl.to({}, { duration: 0.5 });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="who-we-are"
      className="relative w-full bg-[#F7F8FC] select-none"
    >
      {/* Pinned Viewport Container (Centered & Proportionate) */}
      <div className="w-full min-h-screen flex flex-col justify-center py-10 sm:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 select-none relative">
        {/* Subtle Solid Editorial Background Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        >
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="wwa-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="#D9DEE7"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wwa-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1360px]">
          {/* ━━━━━━━━ TOP BAR: BRAND MARK & EDITORIAL TAGS ━━━━━━━━ */}
          <div className="mb-6 sm:mb-8 flex items-center justify-between text-xs select-none">
            <span className="font-clash text-sm sm:text-base font-bold tracking-wider text-[#111111]">
              FORGE
            </span>
            <div className="flex items-center gap-2 font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#667085]">
              <span>PEOPLE</span>
              <span>&times;</span>
              <span>IDEAS</span>
              <span>&times;</span>
              <span>IMPACT</span>
            </div>
          </div>

          {/* ━━━━━━━━ MAIN COMPOSITION: LEFT NARRATIVE + RIGHT CARD STACK ━━━━━━━━ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* ──────── LEFT COLUMN: EDITORIAL NARRATIVE (~48%) ──────── */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left">
              {/* Eyebrow */}
              <div className="wwa-reveal flex items-center gap-3 select-none">
                <span className="h-[1.5px] w-8 sm:w-10 bg-[#1683E8]" />
                <span className="font-jakarta text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
                  WHO WE ARE
                </span>
              </div>

              {/* Headline */}
              <h2 className="wwa-reveal mt-4 sm:mt-5 font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#111111] leading-[0.96] tracking-[-0.03em] select-none">
                <span className="block">Winnovation</span>
                <span className="block">FORGE:</span>
                <span className="block">Building What</span>
                <span className="block text-[#1683E8]">Comes Next</span>
              </h2>

              {/* Supporting Paragraph */}
              <p className="wwa-reveal mt-4 sm:mt-5 font-jakarta text-sm sm:text-base leading-relaxed text-[#667085] max-w-[500px]">
                Winnovation FORGE is built around a simple belief: education
                becomes more valuable when knowledge is applied, tested,
                reviewed, and transformed into something real.
              </p>

              {/* Metrics Bar */}
              <div className="wwa-reveal mt-6 pt-5 border-t border-[#D9DEE7] flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-7 select-none">
                <div>
                  <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] block leading-none">
                    50+
                  </span>
                  <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#667085] mt-1 block">
                    STARTUPS
                  </span>
                </div>
                <div className="hidden sm:block w-[1px] h-7 bg-[#D9DEE7]" />
                <div>
                  <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] block leading-none">
                    1000+
                  </span>
                  <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#667085] mt-1 block">
                    STUDENTS
                  </span>
                </div>
                <div className="hidden sm:block w-[1px] h-7 bg-[#D9DEE7]" />
                <div>
                  <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] block leading-none">
                    20+
                  </span>
                  <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#667085] mt-1 block">
                    INSTITUTIONS
                  </span>
                </div>
                <div className="hidden sm:block w-[1px] h-7 bg-[#D9DEE7]" />
                <div>
                  <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] block leading-none">
                    &infin;
                  </span>
                  <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#667085] mt-1 block">
                    OPPORTUNITIES
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="wwa-reveal mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/programs"
                  className="group inline-flex h-[50px] items-center gap-2 rounded-full bg-[#1683E8] px-6 sm:px-7 font-jakarta text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,131,232,0.25)] transition-all duration-300 hover:bg-[#102A43] hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex h-[50px] items-center gap-3 rounded-full border border-[#D9DEE7] bg-white px-5 font-jakarta text-xs sm:text-sm font-semibold text-[#111111] shadow-sm transition-all duration-300 hover:border-[#1683E8] hover:bg-[#F7F8FC] active:scale-95"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF3FF] text-[#1683E8]">
                    <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                  </span>
                  <div className="text-left leading-tight">
                    <span className="block font-bold text-[#111111]">
                      Watch Video
                    </span>
                    <span className="block text-[10px] text-[#667085]">
                      1 min overview
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* ──────── RIGHT COLUMN: TEXT-ONLY CAPABILITY CARD STACK (~52%) ──────── */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 relative">
              {/* Card Stack Stage */}
              <div className="relative w-full sm:w-[440px] md:w-[480px] lg:w-[450px] xl:w-[490px] h-[440px] sm:h-[460px] flex items-center justify-center select-none">
                {CAPABILITY_STAGES.map((stage, idx) => {
                  const Icon = stage.icon;
                  const cardRef =
                    idx === 0 ? card0Ref : idx === 1 ? card1Ref : card2Ref;
                  const isActive = activeStep === idx;

                  return (
                    <div
                      key={stage.num}
                      ref={cardRef}
                      onClick={() => goToStep(idx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View stage ${stage.num}: ${stage.title}`}
                      className={`absolute inset-0 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer will-change-transform border transition-colors duration-400 select-none ${
                        isActive
                          ? "bg-[#1683E8] text-white border-[#1474CE] shadow-[0_22px_50px_rgba(22,131,232,0.30)]"
                          : "bg-white text-[#111111] border-[#D9DEE7] shadow-[0_12px_30px_rgba(16,42,67,0.06)] hover:border-[#1683E8]"
                      }`}
                    >
                      {/* Top Row: Index + Icon Badge */}
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col">
                          <span
                            className={`font-clash text-2xl sm:text-3xl font-bold leading-none ${
                              isActive ? "text-white" : "text-[#1683E8]"
                            }`}
                          >
                            {stage.num}
                          </span>
                          <span
                            className={`font-jakarta text-[10px] font-bold uppercase tracking-[0.16em] mt-1 ${
                              isActive ? "text-white/80" : "text-[#667085]"
                            }`}
                          >
                            CAPABILITY STAGE
                          </span>
                        </div>

                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-[#EAF3FF] text-[#1683E8]"
                          }`}
                        >
                          <Icon className="h-5 w-5 stroke-[1.8]" />
                        </div>
                      </div>

                      {/* Middle Block: Title, Tagline, Description, and Highlights (100% Text-Only) */}
                      <div className="my-auto py-2">
                        <h3
                          className={`font-clash text-2xl sm:text-[26px] font-bold leading-tight ${
                            isActive ? "text-white" : "text-[#111111]"
                          }`}
                        >
                          {stage.title}
                        </h3>

                        <p
                          className={`mt-1 font-jakarta text-xs sm:text-[13px] font-semibold ${
                            isActive ? "text-white/90" : "text-[#1683E8]"
                          }`}
                        >
                          {stage.tagline}
                        </p>

                        <p
                          className={`mt-2.5 font-jakarta text-xs sm:text-[13px] leading-relaxed ${
                            isActive ? "text-white/85" : "text-[#667085]"
                          }`}
                        >
                          {stage.description}
                        </p>

                        {/* Text Highlights (Replacing Images) */}
                        <div className="mt-3.5 space-y-1.5 pt-3 border-t border-current/15">
                          {stage.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle2
                                className={`h-3.5 w-3.5 shrink-0 ${
                                  isActive ? "text-white" : "text-[#1683E8]"
                                }`}
                              />
                              <span
                                className={`font-jakarta text-[11px] sm:text-xs font-medium leading-tight ${
                                  isActive ? "text-white/90" : "text-[#4A5568]"
                                }`}
                              >
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Metadata */}
                      <div className="flex items-center justify-between pt-3 border-t border-current/15">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] ${
                            isActive
                              ? "bg-white/15 text-white"
                              : "bg-[#EAF3FF] text-[#1683E8]"
                          }`}
                        >
                          {stage.badge}
                        </span>
                        <span
                          className={`font-jakarta text-[10px] font-bold uppercase tracking-wider ${
                            isActive ? "text-white/70" : "text-[#667085]"
                          }`}
                        >
                          WINNOVATION FORGE
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ━━━━━━━━ VERTICAL STEP SELECTOR & NAVIGATION (01 / 02 / 03) ━━━━━━━━ */}
              <div className="flex sm:flex-col items-center justify-center gap-2.5 sm:gap-3 select-none">
                {/* Prev Arrow */}
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  aria-label="Previous capability stage"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#D9DEE7] bg-white shadow-sm transition-all active:scale-95 ${
                    activeStep === 0
                      ? "opacity-40 cursor-not-allowed text-[#CBD5E1]"
                      : "text-[#111111] hover:bg-[#1683E8] hover:text-white hover:border-[#1683E8]"
                  }`}
                >
                  <ArrowUp className="h-4 w-4" />
                </button>

                {/* Step Indicator with Progress Bar */}
                <div className="flex sm:flex-col items-center gap-1.5">
                  {/* Step 01 */}
                  <button
                    type="button"
                    onClick={() => goToStep(0)}
                    aria-label="Jump to stage 01"
                    className={`h-9 w-9 rounded-full font-clash text-xs font-bold transition-all duration-300 flex items-center justify-center ${
                      activeStep === 0
                        ? "bg-[#1683E8] text-white scale-110 shadow-md"
                        : "bg-white border border-[#D9DEE7] text-[#667085] hover:border-[#1683E8] hover:text-[#1683E8]"
                    }`}
                  >
                    01
                  </button>

                  {/* Connecting Line 1 */}
                  <div className="hidden sm:block w-[2px] h-6 bg-[#D9DEE7] relative overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 w-full bg-[#1683E8] transition-all duration-150"
                      style={{
                        height: `${Math.min(
                          100,
                          Math.max(0, (scrollProgress / 0.5) * 100),
                        )}%`,
                      }}
                    />
                  </div>

                  {/* Step 02 */}
                  <button
                    type="button"
                    onClick={() => goToStep(1)}
                    aria-label="Jump to stage 02"
                    className={`h-9 w-9 rounded-full font-clash text-xs font-bold transition-all duration-300 flex items-center justify-center ${
                      activeStep === 1
                        ? "bg-[#1683E8] text-white scale-110 shadow-md"
                        : "bg-white border border-[#D9DEE7] text-[#667085] hover:border-[#1683E8] hover:text-[#1683E8]"
                    }`}
                  >
                    02
                  </button>

                  {/* Connecting Line 2 */}
                  <div className="hidden sm:block w-[2px] h-6 bg-[#D9DEE7] relative overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 w-full bg-[#1683E8] transition-all duration-150"
                      style={{
                        height: `${Math.min(
                          100,
                          Math.max(0, ((scrollProgress - 0.5) / 0.5) * 100),
                        )}%`,
                      }}
                    />
                  </div>

                  {/* Step 03 */}
                  <button
                    type="button"
                    onClick={() => goToStep(2)}
                    aria-label="Jump to stage 03"
                    className={`h-9 w-9 rounded-full font-clash text-xs font-bold transition-all duration-300 flex items-center justify-center ${
                      activeStep === 2
                        ? "bg-[#1683E8] text-white scale-110 shadow-md"
                        : "bg-white border border-[#D9DEE7] text-[#667085] hover:border-[#1683E8] hover:text-[#1683E8]"
                    }`}
                  >
                    03
                  </button>
                </div>

                {/* Next Arrow */}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeStep === 2}
                  aria-label="Next capability stage"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#D9DEE7] bg-white shadow-sm transition-all active:scale-95 ${
                    activeStep === 2
                      ? "opacity-40 cursor-not-allowed text-[#CBD5E1]"
                      : "text-[#111111] hover:bg-[#1683E8] hover:text-white hover:border-[#1683E8]"
                  }`}
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ━━━━━━━━ COMPACT EDITORIAL FOOTNOTE BAR ━━━━━━━━ */}
          <div className="mt-8 sm:mt-10 pt-5 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs select-none">
            {/* Bottom Left Footnote */}
            <div className="hidden md:flex flex-col gap-0.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#667085]">
              <span>REAL LEARNING.</span>
              <span>REAL OPPORTUNITIES.</span>
              <span>A BRIGHTER TOMORROW.</span>
            </div>

            {/* Center Interactive Indicator */}
            <div className="flex items-center gap-2 font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
              <MousePointer className="h-3.5 w-3.5 animate-bounce" />
              <span>SCROLL OR CLICK 01 &bull; 02 &bull; 03 TO CYCLE STAGES</span>
            </div>

            {/* Bottom Right Footnote */}
            <div className="hidden md:flex flex-col items-end gap-0.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#667085]">
              <span>BUILT BY PEOPLE.</span>
              <span>FOR WHAT&apos;S NEXT.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━ VIDEO MODAL ━━━━━━━━ */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#D9DEE7] bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              src="/forge-hero-logo.mp4"
              controls
              autoPlay
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
