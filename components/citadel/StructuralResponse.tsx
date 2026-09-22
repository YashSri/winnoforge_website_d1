"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, RefreshCw, BarChart3, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StructuralCard {
  number: string;
  title: string;
  body: string;
  tag: string;
  icon: typeof Cpu;
}

const cardsData: StructuralCard[] = [
  {
    number: "01",
    title: "AI-native engineers",
    body: "Built for a world where AI is standard, not supplemental.",
    tag: "PEOPLE",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Continuous innovation",
    body: "Sprint cycles that keep momentum and sharpen execution.",
    tag: "PRACTICE",
    icon: RefreshCw,
  },
  {
    number: "03",
    title: "Measurable execution",
    body: "Progress tracked against real outputs — not effort or attendance.",
    tag: "IMPACT",
    icon: BarChart3,
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A STRUCTURAL RESPONSE — NOT A COSMETIC UPGRADE
 * Scroll-driven pinned card stack modeled on Philosophy.tsx
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function StructuralResponse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsStageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

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
   * Continuous card transform with physical depth & soft shadow
   * Active: distance = 0
   * Next: distance = +1
   * Previous: distance = -1
   */
  const applyCardState = (
    el: HTMLElement,
    distance: number,
    isMobile: boolean
  ) => {
    const yUnit = isMobile ? 30 : 44;
    const rotUnit = isMobile ? 0.4 : 0.8;

    // Vertical offset
    const translateY = Math.max(-88, Math.min(88, distance * yUnit));

    // Smooth physical scale curve
    const absDist = Math.abs(distance);
    const scale = Math.max(0.89, 1 - Math.min(absDist, 1.5) * 0.045);

    // Subtle natural tilt
    const rotation = Math.max(-1.8, Math.min(1.8, distance * rotUnit));

    // Opacity interpolation
    let opacity = 0;
    if (absDist === 0) {
      opacity = 1;
    } else if (distance > 0) {
      if (distance <= 1) {
        opacity = 1 - distance * 0.35; // 1 -> 0.65
      } else if (distance <= 1.5) {
        opacity = 0.65 - ((distance - 1) / 0.5) * 0.35;
      } else {
        opacity = Math.max(0, 0.3 - ((distance - 1.5) / 0.5) * 0.3);
      }
    } else {
      if (absDist <= 1) {
        opacity = 1 - absDist * 0.35; // 1 -> 0.65
      } else if (absDist <= 1.5) {
        opacity = 0.65 - ((absDist - 1) / 0.5) * 0.35;
      } else {
        opacity = Math.max(0, 0.3 - ((absDist - 1.5) / 0.5) * 0.3);
      }
    }

    // Dynamic depth shadow
    const shadowAlpha = Math.max(0.04, 0.12 - absDist * 0.04);
    const shadowOffsetY = Math.max(8, Math.round(26 - absDist * 8));
    const shadowBlur = Math.max(20, Math.round(55 - absDist * 16));

    // Z-Index: Active card has highest layer
    const zIndex = Math.max(1, 100 - Math.round(absDist * 15));

    // Apply continuous GPU-accelerated transform
    el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
    el.style.opacity = Math.max(0, Math.min(1, opacity)).toFixed(3);
    el.style.boxShadow = `0 ${shadowOffsetY}px ${shadowBlur}px rgba(16, 42, 67, ${shadowAlpha.toFixed(3)}), 0 4px 12px rgba(16, 42, 67, 0.03)`;
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
          end: "+=150%", // Fast, responsive scroll distance
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
      id="structural-response"
      aria-label="A Structural Response - Not a Cosmetic Upgrade"
      className="relative w-full bg-[#F7F8FC] text-[#111111] overflow-hidden select-none border-t border-[#D9DEE7]/70"
    >
      <style>{`
        @keyframes borderTravel {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }
      `}</style>

      {/* Reduced motion static layout fallback */}
      {isReducedMotion ? (
        <div className="w-full max-w-[1360px] mx-auto px-6 py-20 flex flex-col gap-12">
          <div className="max-w-xl">
            <span className="font-jakarta text-xs font-bold tracking-[0.22em] text-[#1683E8] uppercase">
              ──── A CLOSER LOOK ────
            </span>
            <h2 className="mt-4 font-clash text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              A Structural Response –{" "}
              <span className="text-[#1683E8]">Not a Cosmetic Upgrade.</span>
            </h2>
            <p className="mt-4 font-jakarta text-base text-[#64748B] leading-relaxed">
              Purpose-built for a world that moves faster. Designed to create real capability, not just better optics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardsData.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.number}
                  className="rounded-[28px] border border-slate-200/90 bg-white p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(16,42,67,0.08)]"
                >
                  <div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200/80">
                      <span className="font-mono text-sm font-bold text-[#111111]">
                        {card.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EDF4FF] text-[#1683E8]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-6 font-jakarta text-2xl font-bold text-[#111111]">
                      {card.title}
                    </h3>
                    <p className="mt-3 font-jakarta text-sm text-[#64748B] leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between mt-8">
                    <span className="font-jakarta text-xs font-bold tracking-wider text-[#1683E8]">
                      — {card.tag}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#1683E8]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Pinned 100vh Viewport Stage (Controlled by GSAP ScrollTrigger.pin) */
        <div className="relative w-full h-screen min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1440px] mx-auto">
          {/* ── Subtle Background Architectural Graphics ── */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
          >
            {/* Subtle sweeping circular arc on left */}
            <svg
              className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[680px] w-[680px] opacity-25"
              viewBox="0 0 700 700"
              fill="none"
            >
              <circle
                cx="350"
                cy="350"
                r="330"
                stroke="#93C5FD"
                strokeWidth="1.2"
                strokeDasharray="4 6"
              />
            </svg>

            {/* Tiny blue dots */}
            <div className="absolute right-[18%] bottom-[22%] h-2 w-2 rounded-full bg-[#1683E8] opacity-30 hidden lg:block" />
            <div className="absolute left-[22%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#1683E8] opacity-25 hidden lg:block" />

            {/* Ambient soft blue blur blobs */}
            <div className="absolute left-[8%] top-1/3 h-72 w-72 rounded-full bg-[#EAF2FF]/60 blur-3xl" />
            <div className="absolute right-[10%] bottom-1/4 h-80 w-80 rounded-full bg-[#EBF4FF]/50 blur-3xl" />
          </div>

          {/* ── Edge Microcopy (Desktop) ── */}
          {/* Top-Left */}
          <div
            className="pointer-events-none absolute left-6 top-6 hidden xl:flex flex-col gap-2 z-10"
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

          {/* Top-Right */}
          <div
            className="pointer-events-none absolute right-8 top-8 hidden xl:block font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed text-right z-10"
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

          {/* Bottom-Left */}
          <div
            className="pointer-events-none absolute left-6 bottom-8 hidden xl:flex flex-col gap-2 z-10"
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

          {/* Bottom-Right */}
          <div
            className="pointer-events-none absolute right-8 bottom-8 hidden xl:flex items-center gap-3 z-10"
            aria-hidden="true"
          >
            <span className="h-[1px] w-9 bg-[#CBD5E1]" />
            <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C9BB4]">
              THE CITADEL
            </span>
          </div>

          {/* ── Left Column: Editorial Heading & Context ── */}
          <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 z-10 flex flex-col justify-center text-left pr-4 lg:pr-8 py-6">
            {/* Eyebrow: ──── A CLOSER LOOK ──── */}
            <div className="flex items-center gap-3.5 mb-5">
              <span className="h-[1px] w-8 sm:w-12 bg-[#1683E8]/40 origin-left" />
              <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
                A Closer Look
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-[#1683E8]/40 origin-right" />
            </div>

            {/* Main Editorial Headline */}
            <h2 className="font-clash text-[38px] sm:text-[48px] md:text-[54px] lg:text-[62px] xl:text-[68px] font-bold tracking-tight leading-[0.98] text-[#111111]">
              A Structural
              <br />
              Response –
              <br />
              <span className="text-[#1683E8]">Not a Cosmetic</span>
              <br />
              <span className="text-[#1683E8]">Upgrade.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="mt-6 font-jakarta text-[15px] sm:text-[17px] text-[#5F6672] max-w-md leading-relaxed border-l-2 border-[#1683E8] pl-5 font-normal">
              Purpose-built for a world that moves faster. Designed to create real capability, not just better optics.
            </p>

            {/* Editorial Layer Indicator */}
            <div className="mt-8 flex items-center gap-3 text-xs font-jakarta text-[#5F6672]">
              <span className="text-[#1683E8] font-bold font-mono">
                0{activeCardIndex + 1} / 03
              </span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#CBD5E1]" />
              <span className="uppercase tracking-wider font-semibold text-[#111111]">
                {cardsData[activeCardIndex].tag}
              </span>
            </div>
          </div>

          {/* ── Right Column: Stacked Card Stage ── */}
          <div className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12 flex items-center justify-center md:justify-end xl:justify-center relative my-auto py-4">
            {/* Visual Stage */}
            <div
              ref={cardsStageRef}
              className="relative w-full max-w-[500px] sm:max-w-[540px] xl:max-w-[580px] h-[340px] sm:h-[370px] mx-auto"
            >
              {cardsData.map((card, idx) => {
                const Icon = card.icon;
                const isCurrentActive = activeCardIndex === idx;

                return (
                  <article
                    key={card.number}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    className={`group/card absolute inset-0 w-full h-full rounded-[26px] sm:rounded-[30px] border border-slate-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between shadow-[0_20px_50px_rgba(16,42,67,0.08)] backdrop-blur-xl will-change-transform select-none overflow-hidden transition-shadow duration-300 ${
                      isCurrentActive ? "hover:shadow-[0_26px_65px_rgba(16,42,67,0.14)]" : ""
                    }`}
                    style={{
                      transformOrigin: "center center",
                    }}
                  >
                    {/* Subtle traveling border */}
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                      aria-hidden="true"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="25"
                        ry="25"
                        fill="none"
                        stroke="#1683E8"
                        strokeWidth="1.5"
                        pathLength="100"
                        strokeDasharray="10 90"
                        strokeDashoffset="0"
                        style={{
                          opacity: isCurrentActive ? 0.75 : 0.2,
                          animation: "borderTravel 18s linear infinite",
                        }}
                      />
                    </svg>

                    {/* Top Row: Icon Container + Number */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-[16px] bg-[#EDF4FF] text-[#1683E8] shadow-[0_4px_12px_rgba(22,131,232,0.12)] transition-transform duration-300 group-hover/card:-translate-y-0.5">
                        <Icon className="h-5 w-5 stroke-[2]" />
                      </div>

                      <span className="font-mono text-sm sm:text-base font-bold text-[#94A3B8]">
                        {card.number}
                      </span>
                    </div>

                    {/* Middle: Title + Body */}
                    <div className="my-auto py-2 sm:py-3 relative z-10">
                      <h3 className="font-jakarta text-[22px] sm:text-[26px] xl:text-[28px] font-bold text-[#111111] tracking-tight leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-3 font-jakarta text-[14px] sm:text-[16px] text-[#5F6672] leading-relaxed max-w-[440px]">
                        {card.body}
                      </p>
                    </div>

                    {/* Bottom Row: Category Tag + Arrow Indicator */}
                    <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2.5">
                        <span className="h-[2px] w-5 rounded-full bg-[#1683E8]" />
                        <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                          {card.tag}
                        </span>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D5DB] text-[#1683E8] bg-white transition-all duration-300 group-hover/card:border-[#1683E8] group-hover/card:bg-[#EDF4FF]">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* ── Minimal Vertical Progress Indicator (Desktop & Tablet) ── */}
          <div
            className="hidden md:flex absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 py-4 px-2.5 rounded-full bg-white/90 border border-slate-200/80 shadow-[0_4px_20px_rgba(16,42,67,0.06)] backdrop-blur-md select-none"
            aria-label="Layer progress indicator"
          >
            {cardsData.map((card, idx) => {
              const isActive = activeCardIndex === idx;

              return (
                <button
                  key={card.number}
                  type="button"
                  onClick={() => handleJumpToCard(idx)}
                  className="group flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none p-1 transition-transform"
                  aria-label={`Jump to card ${card.number}: ${card.title}`}
                >
                  <span
                    className={`font-mono text-xs font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-[#1683E8]"
                        : "text-[#5F6672] group-hover:text-[#111111]"
                    }`}
                  >
                    {card.number}
                  </span>
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2.5 h-2.5 bg-[#1683E8] ring-2 ring-[#1683E8]/30 scale-110 shadow-[0_0_8px_rgba(22,131,232,0.5)]"
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
