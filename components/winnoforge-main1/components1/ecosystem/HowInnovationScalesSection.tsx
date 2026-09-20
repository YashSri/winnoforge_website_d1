"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Network,
  Play,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScaleCardItem {
  num: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  tags: [string, string, string];
}

const SCALE_CARDS: ScaleCardItem[] = [
  {
    num: "01",
    title: "Shared Knowledge",
    description: "Practices, learnings, and insights move across campuses.",
    icon: BookOpen,
    tags: ["KNOWLEDGE", "FRAMEWORKS", "INSIGHTS"],
  },
  {
    num: "02",
    title: "Cross-Campus Collaboration",
    description:
      "Teams from different institutions can work on shared problems.",
    icon: Network,
    tags: ["PEOPLE", "IDEAS", "IMPACT"],
  },
  {
    num: "03",
    title: "Distributed Experimentation",
    description: "Multiple teams can explore different pathways to a problem.",
    icon: FlaskConical,
    tags: ["EXPERIMENT", "VALIDATE", "ITERATE"],
  },
  {
    num: "04",
    title: "Common Standards",
    description: "A shared framework helps preserve quality and consistency.",
    icon: Shield,
    tags: ["STANDARDS", "RIGOR", "QUALITY"],
  },
  {
    num: "05",
    title: "Convergence",
    description:
      "Summits, demo days, and showcases bring the network together.",
    icon: Sparkles,
    tags: ["SUMMITS", "SHOWCASES", "NETWORK"],
  },
];

const STATS_DATA = [
  { value: "50+", label: "STARTUPS" },
  { value: "1000+", label: "STUDENTS" },
  { value: "20+", label: "INSTITUTIONS" },
  { value: "∞", label: "OPPORTUNITIES" },
];

export default function HowInnovationScalesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggerInstance = useRef<ScrollTrigger | null>(null);

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  // Close modal on escape
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

  // Update card styles directly on the DOM refs for 60fps continuous scroll without re-rendering
  const updateCardTransforms = useCallback((progress: number) => {
    const numCards = SCALE_CARDS.length;
    const currentIdx = progress * (numCards - 1);
    const isMobile = window.innerWidth < 768;

    const stepY = isMobile ? 28 : 44;
    const rotFactor = isMobile ? 0.6 : 1.0;
    const scaleFactor = isMobile ? 0.038 : 0.045;

    // Track which card is closest to center for progress indicator
    const closestIdx = Math.max(
      0,
      Math.min(numCards - 1, Math.round(currentIdx)),
    );
    setActiveCardIndex(closestIdx);

    cardRefs.current.forEach((cardEl, i) => {
      if (!cardEl) return;

      const distance = i - currentIdx; // signed distance from active position
      const absDist = Math.abs(distance);

      // Continuous transformation mathematics from approved specification
      const translateY = distance * stepY;
      const scale = Math.max(0.75, 1 - Math.min(absDist, 2.5) * scaleFactor);
      const rawRot = distance * rotFactor;
      const rotation = Math.max(-2, Math.min(2, rawRot));

      // Continuous opacity fade for cards further away
      let opacity = 1;
      if (distance < 0) {
        // Previous cards (moving up and backward)
        opacity = Math.max(0, 1 - absDist * 0.28);
      } else {
        // Next cards (waiting below)
        opacity = Math.max(0, 1 - absDist * 0.22);
      }

      // Stacking order: active center card is highest (zIndex 30)
      const zIndex = Math.max(1, Math.round(30 - absDist * 5));

      // GPU accelerated transformation
      cardEl.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
      cardEl.style.opacity = opacity.toFixed(3);
      cardEl.style.zIndex = String(zIndex);

      // Cross-fade the active blue theme overlay smoothly
      // activeProgress goes from 0 (inactive white card) to 1 (active FORGE blue card)
      const activeProgress = Math.max(0, Math.min(1, 1 - absDist * 1.5));
      const blueOverlay =
        cardEl.querySelector<HTMLElement>(".his-blue-overlay");
      const whiteOverlay =
        cardEl.querySelector<HTMLElement>(".his-white-overlay");

      if (blueOverlay) {
        blueOverlay.style.opacity = activeProgress.toFixed(3);
      }
      if (whiteOverlay) {
        whiteOverlay.style.opacity = (1 - activeProgress).toFixed(3);
      }
    });
  }, []);

  // Jump to specific card step on indicator click
  const goToCard = (targetIdx: number) => {
    if (!sectionRef.current) return;
    const st = scrollTriggerInstance.current;
    if (st) {
      const scrollRange = st.end - st.start;
      const targetY =
        st.start + (targetIdx / (SCALE_CARDS.length - 1)) * scrollRange;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    } else {
      const rect = sectionRef.current.getBoundingClientRect();
      const currentScroll = window.scrollY || window.pageYOffset;
      const totalScroll = sectionRef.current.offsetHeight - window.innerHeight;
      const targetY =
        currentScroll +
        rect.top +
        (targetIdx / (SCALE_CARDS.length - 1)) * totalScroll;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".his-reveal", { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      // Initial fast text reveal sequence when section enters viewport
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      // 1. Eyebrow (0ms)
      entranceTl.from(".his-eyebrow", { opacity: 0, y: 16, duration: 0.5 }, 0);

      // 2. Main heading line-by-line clipped reveal
      entranceTl.from(
        ".his-heading-1",
        { opacity: 0, yPercent: 100, duration: 0.65 },
        0.06,
      );
      entranceTl.from(
        ".his-heading-2",
        { opacity: 0, yPercent: 100, duration: 0.65 },
        0.12,
      );
      // 3. Blue accent text reveals slightly after
      entranceTl.from(
        ".his-heading-3",
        { opacity: 0, yPercent: 100, duration: 0.65 },
        0.18,
      );

      // 4. Description fades/slides upward
      entranceTl.from(".his-desc", { opacity: 0, y: 18, duration: 0.55 }, 0.22);

      // 5. Stats reveal sequentially
      entranceTl.from(
        ".his-stat-item",
        { opacity: 0, y: 16, duration: 0.5, stagger: 0.06 },
        0.28,
      );

      // 6. CTA buttons reveal
      entranceTl.from(".his-cta", { opacity: 0, y: 16, duration: 0.5 }, 0.42);

      // 7. Card stack and stage become visible
      entranceTl.from(
        ".his-stage",
        { opacity: 0, scale: 0.96, duration: 0.6 },
        0.46,
      );

      // Continuous Scroll-Driven Sticky Timeline
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          updateCardTransforms(self.progress);
        },
      });

      scrollTriggerInstance.current = scrollTrigger;

      // Initial layout calculation
      updateCardTransforms(0);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="how-innovation-scales"
      className="relative w-full bg-[#F7F9FC]"
      style={{ height: "450vh" }}
    >
      {/* Sticky Fullscreen Container */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden select-none"
      >
        {/* Subtle Architectural Concentric Circles (Top-Right & Bottom-Left) */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] opacity-60 z-0">
          <svg
            viewBox="0 0 520 520"
            fill="none"
            className="w-full h-full text-[#1683EA]/10"
          >
            <circle
              cx="400"
              cy="120"
              r="160"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="400"
              cy="120"
              r="280"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <circle
              cx="400"
              cy="120"
              r="380"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[520px] h-[520px] opacity-40 z-0">
          <svg
            viewBox="0 0 520 520"
            fill="none"
            className="w-full h-full text-[#1683EA]/10"
          >
            <circle
              cx="120"
              cy="400"
              r="220"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="120"
              cy="400"
              r="340"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        {/* ━━━━━━━━ MAIN TWO-COLUMN CONTENT CONTAINER ━━━━━━━━ */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 my-auto pt-6 pb-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* ───── LEFT COLUMN: Editorial Content ───── */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
              {/* Eyebrow with leading rule */}
              <div className="his-eyebrow flex items-center gap-3 select-none">
                <span className="h-[1px] w-8 sm:w-10 bg-[#1683EA]" />
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683EA]">
                  HOW INNOVATION SCALES
                </span>
              </div>

              {/* Large Heading with Line-by-Line Reveal */}
              <h2 className="mt-4 sm:mt-5 font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-bold tracking-tight text-[#111111] leading-[1.08] select-none">
                <span className="block overflow-hidden pb-1">
                  <span className="his-heading-1 block">Build Locally.</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="his-heading-2 block">
                    Learn Collectively.
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="his-heading-3 block text-[#1683EA]">
                    Scale Responsibly.
                  </span>
                </span>
              </h2>

              {/* Supporting Paragraph */}
              <p className="his-desc mt-4 sm:mt-5 font-jakarta text-base sm:text-lg leading-relaxed text-[#667085] max-w-lg">
                The FORGE ecosystem is designed to support local execution while
                enabling shared learning across institutions.
              </p>

              {/* Stats Row with Vertical Dividers */}
              <div className="his-stats mt-6 sm:mt-8 pt-6 border-t border-[#D9DEE7] grid grid-cols-4 gap-2 sm:gap-4">
                {STATS_DATA.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`his-stat-item flex flex-col ${
                      idx !== 0 ? "border-l border-[#D9DEE7] pl-3 sm:pl-4" : ""
                    }`}
                  >
                    <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                      {stat.value}
                    </span>
                    <span className="mt-1 font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#667085]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs Row */}
              <div className="his-cta mt-7 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/collaborate"
                  className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3.5 bg-[#1683EA] text-white font-jakarta text-sm font-semibold hover:bg-[#1272ce] transition-colors shadow-[0_8px_20px_rgba(22,131,234,0.22)] group"
                >
                  <span>Explore the Ecosystem</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center gap-3 cursor-pointer group select-none text-left"
                  aria-label="Watch overview video"
                >
                  <div className="w-11 h-11 rounded-full border border-[#D9DEE7] bg-white flex items-center justify-center text-[#111111] shadow-sm group-hover:border-[#1683EA] group-hover:text-[#1683EA] transition-colors">
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-jakarta text-sm font-bold text-[#111111] group-hover:text-[#1683EA] transition-colors">
                      Watch Video
                    </span>
                    <span className="font-jakarta text-xs text-[#667085]">
                      1 min overview
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* ───── RIGHT COLUMN: Stationary Card Stage + Vertical Progress ───── */}
            <div className="his-stage lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end gap-5 sm:gap-8 w-full">
              {/* Card Stage Frame */}
              <div
                className="relative w-full max-w-[540px] xl:max-w-[620px] h-[460px] sm:h-[500px] xl:h-[540px] flex items-center justify-center"
                style={{ perspective: "1200px" }}
              >
                {SCALE_CARDS.map((card, idx) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.num}
                      ref={(el) => {
                        cardRefs.current[idx] = el;
                      }}
                      className="absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden will-change-transform shadow-[0_25px_70px_rgba(0,0,0,0.08)] cursor-pointer"
                      onClick={() => goToCard(idx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${card.num} ${card.title}: ${card.description}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          goToCard(idx);
                        }
                      }}
                    >
                      {/* ───── LAYER A: White Inactive Card Face ───── */}
                      <div className="his-white-overlay absolute inset-0 w-full h-full bg-[#FFFFFF] border border-[#D9E2EE] rounded-[inherit] p-6 sm:p-8 xl:p-10 flex flex-col justify-between select-none">
                        {/* Top: Index + Icon Container */}
                        <div className="flex items-center justify-between w-full">
                          <span className="font-jakarta text-sm sm:text-base font-semibold text-[#667085]">
                            {card.num}
                          </span>
                          <div className="w-12 h-12 rounded-[14px] bg-[#EAF3FF] border border-[#D9E2EE]/60 flex items-center justify-center text-[#1683EA]">
                            <Icon className="h-6 w-6 stroke-[1.8]" />
                          </div>
                        </div>

                        {/* Middle: Title & Description */}
                        <div className="my-auto py-2">
                          <h3 className="font-clash text-2xl sm:text-3xl xl:text-[34px] font-bold tracking-tight text-[#111111] leading-[1.18]">
                            {card.title}
                          </h3>
                          <p className="mt-3 sm:mt-4 font-jakarta text-sm sm:text-base leading-relaxed text-[#667085] max-w-md">
                            {card.description}
                          </p>
                        </div>

                        {/* Bottom: Divider & Category Tags */}
                        <div className="pt-2">
                          <div className="w-12 h-[1.5px] bg-[#D9DEE7] mb-3 rounded-full" />
                          <div className="flex items-center gap-2 font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#8896A6]">
                            <span>{card.tags[0]}</span>
                            <span>•</span>
                            <span>{card.tags[1]}</span>
                            <span>•</span>
                            <span>{card.tags[2]}</span>
                          </div>
                        </div>
                      </div>

                      {/* ───── LAYER B: FORGE Blue Active Hero Card Face ───── */}
                      <div className="his-blue-overlay absolute inset-0 w-full h-full bg-[#1683EA] border border-[#1683EA] rounded-[inherit] p-6 sm:p-8 xl:p-10 flex flex-col justify-between select-none opacity-0">
                        {/* Subtle tone-on-tone architectural geometry background */}
                        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                          <svg
                            viewBox="0 0 400 400"
                            fill="none"
                            className="absolute -right-20 -bottom-20 w-[360px] h-[360px] text-white/[0.08]"
                          >
                            <circle
                              cx="200"
                              cy="200"
                              r="120"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <circle
                              cx="200"
                              cy="200"
                              r="180"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>

                        {/* Top: Index + Icon Container */}
                        <div className="relative z-10 flex items-center justify-between w-full">
                          <span className="font-jakarta text-sm sm:text-base font-semibold text-white/80">
                            {card.num}
                          </span>
                          <div className="w-12 h-12 rounded-[14px] bg-white/15 border border-white/20 flex items-center justify-center text-white">
                            <Icon className="h-6 w-6 stroke-[1.8]" />
                          </div>
                        </div>

                        {/* Middle: Title & Description */}
                        <div className="relative z-10 my-auto py-2">
                          <h3 className="font-clash text-2xl sm:text-3xl xl:text-[34px] font-bold tracking-tight text-white leading-[1.18]">
                            {card.title}
                          </h3>
                          <p className="mt-3 sm:mt-4 font-jakarta text-sm sm:text-base leading-relaxed text-white/90 max-w-md">
                            {card.description}
                          </p>
                        </div>

                        {/* Bottom: Divider & Category Tags */}
                        <div className="relative z-10 pt-2">
                          <div className="w-12 h-[1.5px] bg-white/40 mb-3 rounded-full" />
                          <div className="flex items-center gap-2 font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                            <span>{card.tags[0]}</span>
                            <span>•</span>
                            <span>{card.tags[1]}</span>
                            <span>•</span>
                            <span>{card.tags[2]}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ───── FAR RIGHT: Minimal 01–05 Vertical Progress Indicator ───── */}
              <div className="hidden sm:flex flex-col items-center select-none py-2 shrink-0">
                {SCALE_CARDS.map((item, idx) => {
                  const isActive = activeCardIndex === idx;

                  return (
                    <div key={item.num} className="flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => goToCard(idx)}
                        className="group flex flex-col items-center p-1 cursor-pointer focus:outline-none"
                        aria-label={`Jump to card ${item.num}`}
                      >
                        <span
                          className={`font-jakarta text-xs transition-colors duration-250 ${
                            isActive
                              ? "font-bold text-[#1683EA]"
                              : "font-medium text-[#8896A6] group-hover:text-[#111111]"
                          }`}
                        >
                          {item.num}
                        </span>

                        <div className="mt-1.5 flex items-center justify-center">
                          <div
                            className={`rounded-full transition-all duration-300 ${
                              isActive
                                ? "w-2.5 h-2.5 bg-[#1683EA] ring-4 ring-[#EAF3FF]"
                                : "w-2 h-2 rounded-full border border-[#D9DEE7] bg-white group-hover:border-[#1683EA]"
                            }`}
                          />
                        </div>
                      </button>

                      {idx < SCALE_CARDS.length - 1 && (
                        <div className="w-[1px] h-6 sm:h-7 bg-[#D9DEE7] my-0.5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━ BOTTOM EDITORIAL BAR ━━━━━━━━ */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 py-4 sm:py-6 border-t border-[#D9DEE7]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[#7A8492]">
            <div className="flex items-center gap-3">
              <span className="hidden sm:block h-[1px] w-6 bg-[#D9DEE7]" />
              <div className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#7A8492] flex flex-wrap gap-2">
                <span>REAL COLLABORATION.</span>
                <span>REAL OUTCOMES.</span>
                <span className="text-[#1683EA]">A BRIGHTER TOMORROW.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:block h-[1px] w-6 bg-[#D9DEE7]" />
              <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#7A8492]">
                BUILT BY PEOPLE. FOR WHAT&apos;S NEXT.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━ VIDEO MODAL ━━━━━━━━ */}
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
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-[#1683EA]">
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
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="FORGE Overview"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
