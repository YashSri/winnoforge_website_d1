"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Cpu, RefreshCw, BarChart3, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cardsData = [
  {
    id: "01",
    number: "01",
    title: "AI-native engineers",
    body: "Built for a world where AI is standard, not supplemental.",
    tag: "PEOPLE",
    icon: Cpu,
  },
  {
    id: "02",
    number: "02",
    title: "Continuous innovation",
    body: "Sprint cycles that keep momentum and sharpen execution.",
    tag: "PRACTICE",
    icon: RefreshCw,
  },
  {
    id: "03",
    number: "03",
    title: "Measurable execution",
    body: "Progress tracked against real outputs — not effort or attendance.",
    tag: "IMPACT",
    icon: BarChart3,
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A STRUCTURAL RESPONSE — NOT A COSMETIC UPGRADE
 * Scroll-driven layered card stack with sticky stage
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function StructuralResponse() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Smooth scroll to a specific card on indicator click
  const handleIndicatorClick = (idx: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionTop = scrollTop + rect.top;
    const scrollDistance = rect.height - window.innerHeight;
    const targetY = sectionTop + (idx / 2) * scrollDistance;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  useGSAP(
    () => {
      if (!sectionRef.current || !stageRef.current) return;

      const isReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (isReduced) {
        gsap.set(
          [
            ".sr-eyebrow",
            ".sr-eyebrow-line",
            ".sr-heading-line",
            ".sr-desc",
            ".sr-corner",
            ".sr-indicator",
            ".sr-deco-circle",
            ".sr-deco-dot",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1, clearProps: "all" }
        );
        cardRefs.current.forEach((card, i) => {
          if (card) {
            gsap.set(card, {
              y: i === 0 ? 0 : i * 20,
              scale: 1,
              opacity: i === 0 ? 1 : 0.6,
              rotate: 0,
              filter: "none",
            });
          }
        });
        return;
      }

      // ── STEP 1: Entrance Reveal Timeline ──
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Eyebrow
      entranceTl.fromTo(
        ".sr-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0
      );
      entranceTl.fromTo(
        ".sr-eyebrow-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power3.out" },
        0
      );

      // Heading lines masked reveal
      entranceTl.fromTo(
        ".sr-heading-line-1",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.08
      );
      entranceTl.fromTo(
        ".sr-heading-line-2",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.16
      );
      entranceTl.fromTo(
        ".sr-heading-line-3",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.24
      );
      entranceTl.fromTo(
        ".sr-heading-line-4",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.32
      );

      // Description
      entranceTl.fromTo(
        ".sr-desc",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
        0.38
      );

      // Initial active card entrance
      entranceTl.fromTo(
        cardRefs.current[0],
        { opacity: 0, y: 30, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: "power3.out" },
        0.45
      );

      // Inactive background cards settle in
      entranceTl.fromTo(
        [cardRefs.current[1], cardRefs.current[2]],
        { opacity: 0, scale: 0.92 },
        { opacity: 0.6, scale: 0.955, duration: 0.7, ease: "power3.out", stagger: 0.08 },
        0.55
      );

      // Progress indicator & corner labels
      entranceTl.fromTo(
        [".sr-indicator", ".sr-corner"],
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.05 },
        0.6
      );

      // ── STEP 2: Scroll-Driven Stack Interaction ──
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1
          const p = progress * 2; // 0 to 2 for 3 cards

          // Update active card index for indicator
          const currentIdx = Math.min(2, Math.max(0, Math.round(p)));
          setActiveCardIndex(currentIdx);

          // Interpolate each card
          cardRefs.current.forEach((card, i) => {
            if (!card) return;
            const diff = i - p;

            // Target calculations matching prompt specifications:
            // Active (diff=0): translateY 0, scale 1, opacity 1, rotate 0deg, blur 0
            // Next (diff=1): translateY +44px, scale 0.955, opacity 0.6, rotate +1deg
            // Prev (diff=-1): translateY -44px, scale 0.955, opacity 0.6, rotate -1deg
            const y = diff * 44;
            const absDiff = Math.abs(diff);
            const scale = Math.max(0.88, 1 - Math.min(absDiff, 1.8) * 0.045);
            const opacity = Math.max(0.18, 1 - Math.min(absDiff, 1.8) * 0.4);
            const rot = Math.max(-1.5, Math.min(1.5, diff * 1));
            const blur = Math.min(absDiff * 1.5, 2);
            const zIndex = Math.round(30 - absDiff * 10);
            const pointerEvents = absDiff < 0.4 ? "auto" : "none";

            card.style.transform = `translate3d(0, ${y}px, 0) scale(${scale}) rotate(${rot}deg)`;
            card.style.opacity = `${opacity}`;
            card.style.zIndex = `${zIndex}`;
            card.style.filter = `blur(${blur}px)`;
            card.style.pointerEvents = pointerEvents;
          });
        },
      });

      // ── Ambient background decorative motion (subtle, 12-16s) ──
      gsap.to(".sr-deco-circle", {
        y: -6,
        x: 4,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".sr-deco-dot", {
        y: -5,
        duration: 9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      return () => {
        scrollTrigger.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="structural-response"
      className="relative w-full h-[270vh] sm:h-[280vh]"
    >
      <style>{`
        @keyframes borderTravel {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }
      `}</style>

      {/* ── STICKY VIEWPORT STAGE ── */}
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-12"
      >
        {/* ── Background Architectural Graphics ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        >
          {/* Subtle sweeping circular arc */}
          <svg
            className="sr-deco-circle absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[680px] w-[680px] opacity-25"
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

          {/* Tiny blue floating dots */}
          <div
            className="sr-deco-dot absolute right-[18%] bottom-[22%] h-2 w-2 rounded-full bg-[#1683E8] opacity-30 hidden lg:block"
          />
          <div
            className="sr-deco-dot absolute left-[22%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#1683E8] opacity-25 hidden lg:block"
          />

          {/* Soft background ambient blurs */}
          <div className="absolute left-[8%] top-1/3 h-72 w-72 rounded-full bg-[#EAF2FF]/60 blur-3xl" />
          <div className="absolute right-[10%] bottom-1/4 h-80 w-80 rounded-full bg-[#EBF4FF]/50 blur-3xl" />
        </div>

        {/* ── Edge Microcopy (Desktop) ── */}
        {/* Top-Left */}
        <div
          className="sr-corner pointer-events-none absolute left-6 top-6 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
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
          className="sr-corner pointer-events-none absolute right-8 top-8 hidden xl:block font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed text-right opacity-0 z-10"
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
          className="sr-corner pointer-events-none absolute left-6 bottom-8 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
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
          className="sr-corner pointer-events-none absolute right-8 bottom-8 hidden xl:flex items-center gap-3 opacity-0 z-10"
          aria-hidden="true"
        >
          <span className="h-[1px] w-9 bg-[#CBD5E1]" />
          <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C9BB4]">
            THE CITADEL
          </span>
        </div>

        {/* ━━━━━ MAIN TWO-PART COMPOSITION ━━━━━ */}
        <div className="relative z-10 mx-auto max-w-[1380px] w-full grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* ═════════════════════════════════════════════
              LEFT SIDE: EDITORIAL HEADING + SUPPORTING TEXT
             ═════════════════════════════════════════════ */}
          <div className="flex flex-col items-start text-left max-w-[560px]">
            {/* Eyebrow: ──── A CLOSER LOOK ──── */}
            <div className="sr-eyebrow flex items-center gap-3.5 opacity-0">
              <span className="sr-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#1683E8]/40 origin-left" />
              <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
                A Closer Look
              </span>
              <span className="sr-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#1683E8]/40 origin-right" />
            </div>

            {/* Main Heading — Masked vertical reveal */}
            <h2 className="mt-5 font-clash text-[40px] sm:text-[50px] md:text-[58px] lg:text-[62px] xl:text-[70px] font-bold tracking-tight leading-[0.98]">
              <span className="block overflow-hidden">
                <span className="sr-heading-line sr-heading-line-1 inline-block text-[#111111] opacity-0">
                  A Structural
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-1.5">
                <span className="sr-heading-line sr-heading-line-2 inline-block text-[#111111] opacity-0">
                  Response –
                </span>
              </span>
              <span className="block overflow-hidden mt-1.5 sm:mt-2">
                <span className="sr-heading-line sr-heading-line-3 inline-block text-[#1683E8] opacity-0">
                  Not a Cosmetic
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-1.5">
                <span className="sr-heading-line sr-heading-line-4 inline-block text-[#1683E8] opacity-0">
                  Upgrade.
                </span>
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="sr-desc mt-6 max-w-[520px] font-jakarta text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.65] text-[#64748B] opacity-0">
              Purpose-built for a world that moves faster. Designed to create real capability,
              not just better optics.
            </p>
          </div>

          {/* ═════════════════════════════════════════════
              RIGHT SIDE: LAYERED EDITORIAL CARD STACK
             ═════════════════════════════════════════════ */}
          <div className="relative flex items-center justify-center w-full min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]">
            {/* The Stack Arena */}
            <div className="relative w-full max-w-[480px] sm:max-w-[530px] xl:max-w-[560px] h-[340px] sm:h-[370px] flex items-center justify-center">
              {cardsData.map((card, idx) => {
                const Icon = card.icon;
                const isCurrentActive = activeCardIndex === idx;

                return (
                  <div
                    key={card.id}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    className={`group/card absolute inset-0 w-full h-full rounded-[24px] bg-white border border-[#E2E8F0]/90 shadow-[0_20px_50px_rgba(20,40,80,0.08)] p-7 sm:p-9 flex flex-col justify-between transition-shadow duration-300 ease-out will-change-transform select-none ${
                      isCurrentActive ? "hover:shadow-[0_26px_65px_rgba(20,40,80,0.12)] cursor-default" : ""
                    }`}
                    style={{
                      // Initial default positioning before scroll triggers
                      transform:
                        idx === 0
                          ? "translate3d(0, 0px, 0) scale(1) rotate(0deg)"
                          : idx === 1
                          ? "translate3d(0, 44px, 0) scale(0.955) rotate(1deg)"
                          : "translate3d(0, 88px, 0) scale(0.91) rotate(1.5deg)",
                      opacity: idx === 0 ? 1 : 0.6,
                      zIndex: 30 - idx * 10,
                      filter: idx === 0 ? "blur(0px)" : "blur(1.5px)",
                    }}
                  >
                    {/* Subtle Traveling Border Animation on Card */}
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
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
                        style={{
                          opacity: isCurrentActive ? 0.75 : 0.2,
                          animation: "borderTravel 18s linear infinite",
                        }}
                      />
                    </svg>

                    {/* Top Row: Icon Container + Number */}
                    <div className="flex items-center justify-between">
                      {/* Squircle Icon Container */}
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-[16px] bg-[#EDF4FF] text-[#1683E8] shadow-[0_4px_12px_rgba(22,131,232,0.12)] transition-transform duration-300 group-hover/card:-translate-y-0.5">
                        <Icon className="h-5 w-5 stroke-[2]" />
                      </div>

                      {/* Card Number */}
                      <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#94A3B8]">
                        {card.number}
                      </span>
                    </div>

                    {/* Middle: Title + Body Description */}
                    <div className="my-auto py-2">
                      <h3 className="font-jakarta text-[22px] sm:text-[26px] xl:text-[28px] font-bold text-[#111111] tracking-tight leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-3 font-jakarta text-[14px] sm:text-[16px] text-[#64748B] leading-relaxed max-w-[460px]">
                        {card.body}
                      </p>
                    </div>

                    {/* Bottom Row: Category Tag with Accent Line + Arrow Button */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
                      {/* Tag with Accent Line */}
                      <div className="flex items-center gap-2.5">
                        <span className="h-[2px] w-5 rounded-full bg-[#1683E8]" />
                        <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                          {card.tag}
                        </span>
                      </div>

                      {/* Small Circular Arrow Indicator */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D5DB] text-[#1683E8] transition-all duration-300 group-hover/card:border-[#1683E8] group-hover/card:bg-[#EDF4FF]">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Right-Side Vertical Progress Indicator ── */}
            <div
              className="sr-indicator hidden md:flex flex-col items-center gap-3 absolute -right-6 lg:-right-8 xl:-right-12 top-1/2 -translate-y-1/2 select-none opacity-0"
              aria-label="Scroll progress indicator"
            >
              <span className="h-5 w-[1px] bg-[#CBD5E1]" />

              {/* Step 01 */}
              <button
                type="button"
                onClick={() => handleIndicatorClick(0)}
                className={`font-mono text-xs font-bold transition-colors cursor-pointer ${
                  activeCardIndex === 0 ? "text-[#1683E8]" : "text-[#94A3B8] hover:text-[#64748B]"
                }`}
              >
                01
              </button>
              <span
                className={`transition-all duration-300 ${
                  activeCardIndex === 0
                    ? "h-2.5 w-2.5 rounded-full bg-[#1683E8] shadow-[0_0_8px_rgba(22,131,232,0.5)] scale-110"
                    : "h-2 w-2 rounded-full border border-[#CBD5E1] bg-white"
                }`}
              />

              <span className="h-5 w-[1px] bg-[#CBD5E1]" />

              {/* Step 02 */}
              <button
                type="button"
                onClick={() => handleIndicatorClick(1)}
                className={`font-mono text-xs font-bold transition-colors cursor-pointer ${
                  activeCardIndex === 1 ? "text-[#1683E8]" : "text-[#94A3B8] hover:text-[#64748B]"
                }`}
              >
                02
              </button>
              <span
                className={`transition-all duration-300 ${
                  activeCardIndex === 1
                    ? "h-2.5 w-2.5 rounded-full bg-[#1683E8] shadow-[0_0_8px_rgba(22,131,232,0.5)] scale-110"
                    : "h-2 w-2 rounded-full border border-[#CBD5E1] bg-white"
                }`}
              />

              <span className="h-5 w-[1px] bg-[#CBD5E1]" />

              {/* Step 03 */}
              <button
                type="button"
                onClick={() => handleIndicatorClick(2)}
                className={`font-mono text-xs font-bold transition-colors cursor-pointer ${
                  activeCardIndex === 2 ? "text-[#1683E8]" : "text-[#94A3B8] hover:text-[#64748B]"
                }`}
              >
                03
              </button>
              <span
                className={`transition-all duration-300 ${
                  activeCardIndex === 2
                    ? "h-2.5 w-2.5 rounded-full bg-[#1683E8] shadow-[0_0_8px_rgba(22,131,232,0.5)] scale-110"
                    : "h-2 w-2 rounded-full border border-[#CBD5E1] bg-white"
                }`}
              />

              <span className="h-5 w-[1px] bg-[#CBD5E1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
