"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MemoryItem {
  image: string;
  badge: string;
  tag: string;
  title: string;
  body: string;
  footer: string;
  expandedStory?: string;
}

// Verified FORGE photo moments
const FORGE_MEMORIES: MemoryItem[] = [
  {
    image: "/webp/5.webp",
    badge: "CONVERSATIONS THAT CLARIFY",
    tag: "MENTORSHIP",
    title: "Real Conversations",
    body: "One-on-one mentorship sessions helping students turn curiosity into capability and strategic direction.",
    footer: "LISTEN · DISCUSS · CLARIFY",
    expandedStory:
      "Every builder at FORGE is paired with experienced industry practitioners who offer weekly office hours, architecture reviews, and personalized career guidance.",
  },
  {
    image: "/webp/6.webp",
    badge: "IDEAS IN PROGRESS",
    tag: "IDEATION",
    title: "From Thought To Action",
    body: "Sticky notes, whiteboard sessions, and early prototypes taking structured shape into actionable roadmaps.",
    footer: "EXPLORE · ITERATE · REFINE",
    expandedStory:
      "Ideation at FORGE is anchored in rapid validation. Cohorts map user flows, test hypotheses, and build proof-of-concept builds before committing to full architecture.",
  },
  {
    image: "/ecosystem-builders-20260222.jpg",
    badge: "PEOPLE WHO BUILD",
    tag: "COMMUNITY",
    title: "The Builder Cohort",
    body: "A diverse ecosystem of curious engineers, designers, and problem solvers working together side by side.",
    footer: "COLLABORATE · BUILD · LEAD",
    expandedStory:
      "A collective of multidisciplinary students and creators sharing tools, peer reviews, and late-night hacking sessions to ship meaningful technological solutions.",
  },
  {
    image: "/webp/3.webp",
    badge: "QUESTIONS INTO DIRECTION",
    tag: "DIALOGUE",
    title: "Clarity Through Discourse",
    body: "Turning ambiguous technical hurdles into concrete roadmaps through constructive peer and mentor feedback.",
    footer: "REFLECT · ALIGN · DELIVER",
    expandedStory:
      "Structured critique and candid technical retrospectives help teams bypass common pitfalls and build production-grade engineering intuition.",
  },
  {
    image: "/webp/4.webp",
    badge: "LEARNING IN ACTION",
    tag: "COLLABORATION",
    title: "Hands-on Mastery",
    body: "Deep focus, active problem-solving, and practical technical execution in real-time cohort sessions.",
    footer: "CODE · SOLVE · MASTER",
    expandedStory:
      "From distributed systems to full-stack pipelines, learning is focused on active problem solving rather than passive lectures.",
  },
  {
    image: "/webp/8.webp",
    badge: "IDEAS THAT TAKE SHAPE",
    tag: "SHOWCASE",
    title: "Demo Days & Feedback",
    body: "Presenting working builds directly to industry experts and ecosystem leaders for candid critique.",
    footer: "PITCH · DEMO · REFINE",
    expandedStory:
      "Sprint demo days give teams a stage to articulate technical decisions, demonstrate live software, and receive direct evaluation from industry leaders.",
  },
  {
    image: "/webp/2.webp",
    badge: "FROM LEARNING TO BUILDING",
    tag: "EXECUTION",
    title: "Shipping Real Systems",
    body: "Moving beyond tutorials into building functional, production-ready software and deployable systems.",
    footer: "ARCHITECT · SHIP · SCALE",
    expandedStory:
      "Bridging the gap between classroom theory and industry engineering standards, students ship robust applications designed for real-world environments.",
  },
  {
    image: "/webp/activation-builders.webp",
    badge: "COMMUNITY IN MOTION",
    tag: "ACTIVATION",
    title: "Ecosystem Momentum",
    body: "Connecting cross-functional builders across campus cohorts to turn ideas into shared execution.",
    footer: "ENGAGE · MOBILIZE · EMPOWER",
    expandedStory:
      "Campus activations and builder meetups mobilize students across diverse faculties to form startup teams and solve cross-domain challenges.",
  },
  {
    image: "/impact-campus-wide.jpg",
    badge: "SPACES FOR CREATION",
    tag: "ECOSYSTEM",
    title: "Campus-Wide Innovation",
    body: "Building physical and cultural spaces where ambitious builders find peers, mentors, and tools.",
    footer: "CONNECT · CATALYZE · ELEVATE",
    expandedStory:
      "Dedicated creative hubs provide cohorts with uninterrupted access to high-performance workstations, testing devices, and collaborative spaces.",
  },
  {
    image: "/launch-step-4.jpg",
    badge: "LAUNCHING WHAT’S NEXT",
    tag: "DEPLOYMENT",
    title: "From Prototype to Pilot",
    body: "Deploying working systems in real campus and partner environments for measurable impact.",
    footer: "TEST · VALIDATE · DEPLOY",
    expandedStory:
      "Supporting student-led innovations through campus trials, partner deployments, and direct connections to industry pilot initiatives.",
  },
];

// Fallback image paths to cycle from if any image is ever missing
const FALLBACK_IMAGE_PATHS: string[] = [
  "/webp/5.webp",
  "/webp/6.webp",
  "/ecosystem-builders-20260222.jpg",
  "/webp/3.webp",
  "/webp/4.webp",
  "/webp/8.webp",
  "/webp/2.webp",
  "/webp/activation-builders.webp",
  "/impact-campus-wide.jpg",
  "/launch-step-4.jpg",
];

/**
 * Ensures sufficient memory items by automatically repeating images cyclically
 * whenever the count of source images is less than the required slots (min 7).
 */
function getSufficientMemories(
  items: MemoryItem[],
  minCount: number = 7
): MemoryItem[] {
  if (!items || items.length === 0) {
    return Array.from({ length: minCount }).map((_, i) => ({
      image: FALLBACK_IMAGE_PATHS[i % FALLBACK_IMAGE_PATHS.length],
      badge: "MOMENTS AT FORGE",
      tag: "COMMUNITY",
      title: "Building What’s Next",
      body: "Learners, mentors, and builders collaborating to ship impactful real-world systems.",
      footer: "LEARN · BUILD · SCALE",
    }));
  }

  if (items.length >= minCount) {
    return items.map((item, idx) => ({
      ...item,
      image: item.image || FALLBACK_IMAGE_PATHS[idx % FALLBACK_IMAGE_PATHS.length],
    }));
  }

  const result: MemoryItem[] = [];
  for (let i = 0; i < minCount; i++) {
    const source = items[i % items.length];
    result.push({
      ...source,
      image:
        source.image ||
        FALLBACK_IMAGE_PATHS[i % FALLBACK_IMAGE_PATHS.length],
    });
  }
  return result;
}

// Slot classes for the 7 asymmetric desktop grid slots
const DESKTOP_SLOT_CLASSES = [
  "col-start-2 col-end-3 row-start-1 row-end-2", // Slot 0: Top-Left landscape
  "col-start-3 col-end-4 row-start-1 row-end-2", // Slot 1: Top-Right landscape
  "col-start-1 col-end-2 row-start-2 row-end-4", // Slot 2: Middle-Left tall portrait (spans 2 rows)
  "col-start-2 col-end-3 row-start-2 row-end-3", // Slot 3: Middle-Center landscape
  "col-start-3 col-end-4 row-start-2 row-end-3", // Slot 4: Middle-Right landscape
  "col-start-2 col-end-3 row-start-3 row-end-4", // Slot 5: Bottom-Center landscape
  "col-start-3 col-end-4 row-start-3 row-end-4", // Slot 6: Bottom-Right landscape
];

export default function BuiltThroughForge() {
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number | null>(null);
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Guarantee sufficient memory items with automatic image repetition
  const memoryPool = useMemo(() => {
    return getSufficientMemories(FORGE_MEMORIES, 7);
  }, []);

  // Entrance animation via ScrollTrigger
  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".mem-eyebrow",
            ".mem-heading",
            ".mem-copy",
            ".mem-card-wrapper",
            ".mem-footer",
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
          gsap.set([".mem-card-wrapper", ".mem-card-inner"], {
            clearProps: "opacity,transform",
          });
        },
      });

      tl.from(".mem-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.5,
      })
        .from(
          ".mem-heading",
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".mem-copy",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".mem-card-wrapper",
          {
            opacity: 0,
            scale: 0.94,
            y: (index) => (index % 2 === 0 ? 25 : -20),
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.3"
        )
        .from(
          ".mem-footer",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
          },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  // Smooth orbital reshuffle animation
  const reshuffle = useCallback(
    (direction: 1 | -1 = 1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveSlotIndex(null);

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        setViewIndex((prev) => (prev + direction + 4) % 4);
        setIsAnimating(false);
        return;
      }

      // Step 1: Smooth orbital drift & scale down
      gsap.to(".mem-card-inner", {
        scale: 0.95,
        opacity: 0.35,
        y: (i) => (i % 2 === 0 ? -14 : 14),
        x: (i) => (i % 3 === 0 ? 12 : -12),
        duration: 0.28,
        ease: "power2.in",
        onComplete: () => {
          setViewIndex((prev) => (prev + direction + 4) % 4);

          gsap.fromTo(
            ".mem-card-inner",
            {
              scale: 0.95,
              opacity: 0.35,
              y: (i) => (i % 2 === 0 ? 14 : -14),
              x: (i) => (i % 3 === 0 ? -12 : 12),
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              x: 0,
              duration: 0.65,
              stagger: 0.03,
              ease: "cubic-bezier(0.22, 1, 0.36, 1)",
              clearProps: "transform,opacity",
              onComplete: () => {
                setIsAnimating(false);
              },
            }
          );
        },
      });
    },
    [isAnimating]
  );

  // Automatically reshuffle images every 20 seconds (pausing while user hovers or modal is open)
  useEffect(() => {
    if (activeSlotIndex !== null || isHovered || selectedMemory !== null) return;

    const timer = setInterval(() => {
      reshuffle(1);
    }, 20000);

    return () => clearInterval(timer);
  }, [activeSlotIndex, isHovered, selectedMemory, reshuffle]);

  // Modal Open Handler
  const openModal = useCallback((card: MemoryItem) => {
    setSelectedMemory(card);
  }, []);

  // Modal Close Handler with Smooth Pop-Out Exit
  const closeModal = useCallback(() => {
    if (modalRef.current && backdropRef.current) {
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.22 });
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.92,
        y: 15,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          setSelectedMemory(null);
        },
      });
    } else {
      setSelectedMemory(null);
    }
  }, []);

  // Pop-up animation when selectedMemory opens
  useEffect(() => {
    if (selectedMemory && modalRef.current && backdropRef.current) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.88, y: 24 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        }
      );
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMemory, closeModal]);

  return (
    <section
      ref={sectionRef}
      id="memories"
      className="relative w-full bg-[#F7F8FC] py-20 md:py-28 overflow-hidden border-t border-[#D9DEE7]"
    >
      {/* Subtle Orbital Background Line Art & Marker Dots (Solid Colors Only) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[1000px] h-[750px] opacity-70"
          viewBox="0 0 1000 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Orbit Arc */}
          <path
            d="M 280 40 A 550 550 0 0 1 950 680"
            stroke="#D9E8FA"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          {/* Inner Orbit Arc */}
          <path
            d="M 120 180 A 620 620 0 0 0 880 730"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          {/* Orbit Accent Dots */}
          <circle cx="280" cy="40" r="4.5" fill="#1683E8" />
          <circle cx="780" cy="220" r="5" fill="#1683E8" />
          <circle cx="580" cy="725" r="7" fill="#1683E8" opacity="0.3" />
          <circle cx="580" cy="725" r="4" fill="#1683E8" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Desktop Top Level: Left Content (~30-32%) vs Right Collage (~68-70%) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 xl:gap-14">
          {/* LEFT PANEL */}
          <div className="w-full lg:w-[32%] xl:w-[30%] flex flex-col justify-between shrink-0">
            <div>
              {/* Eyebrow */}
              <div className="mem-eyebrow flex items-center gap-3">
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.22em] text-[#5F6672]">
                  OUR MEMORIES
                </span>
                <div className="w-10 h-[1.5px] bg-[#D9DEE7]" />
              </div>

              {/* Main Headline */}
              <h2 className="mem-heading font-clash text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111111] leading-[1.08] tracking-tight mt-6">
                Moments
                <br />
                That Build
                <br />
                <span className="text-[#1683E8]">What’s Next.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="mem-copy font-jakarta text-sm sm:text-base text-[#5F6672] leading-relaxed mt-6 max-w-md">
                A glimpse into the ideas, conversations, projects, and people that
                make FORGE a space for learning, building, and real impact.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: ASYMMETRIC COLLAGE */}
          <div
            className="w-full lg:w-[68%] xl:w-[70%] flex flex-col relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* DESKTOP ASYMMETRIC COLLAGE (All 7 Slots Guaranteed Visible) */}
            <div className="hidden lg:grid grid-cols-[minmax(200px,240px)_minmax(260px,310px)_minmax(260px,310px)] grid-rows-[200px_200px_190px] gap-4 xl:gap-5 justify-end relative w-full">
              {/* Decorative Empty Slot Area top-left (Row 1, Col 1) */}
              <div className="col-start-1 col-end-2 row-start-1 row-end-2 relative pointer-events-none flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#1683E8]/80 shadow-sm" />
              </div>

              {/* All 7 Interactive Memory Slots */}
              {[0, 1, 2, 3, 4, 5, 6].map((slotIndex) => {
                const itemIndex =
                  (slotIndex + viewIndex * 2) % memoryPool.length;
                const card = memoryPool[itemIndex];
                const slotClass = DESKTOP_SLOT_CLASSES[slotIndex];
                const isHoveredOrActive = activeSlotIndex === slotIndex;

                return (
                  <div
                    key={`slot-${slotIndex}`}
                    className={`mem-card-wrapper ${slotClass} w-full h-full`}
                  >
                    <div
                      className="mem-card-inner relative w-full h-full overflow-hidden rounded-[26px] bg-[#102A43] border border-[#D9DEE7] shadow-[0_12px_32px_rgba(16,42,67,0.06)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_22px_45px_rgba(16,42,67,0.12)] cursor-pointer select-none group"
                      onClick={() => openModal(card)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openModal(card);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Open memory details: ${card.title}`}
                    >
                      {/* Underlying Photograph with Slow Cinematic Zoom */}
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 1280px) 300px, 400px"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        priority={slotIndex < 3}
                      />

                      {/* Dark gradient base scrim for title readability in resting state */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-transparent to-[#102A43]/50 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

                      {/* RESTING STATE: Minimal Top-Left Editorial Label */}
                      <div className="absolute top-4 left-5 right-5 flex items-start justify-between pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                        <div>
                          <span className="font-jakarta text-[11px] font-bold tracking-[0.14em] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                            {card.badge}
                          </span>
                          <div className="w-5 h-[1.5px] bg-white/80 mt-1" />
                        </div>
                      </div>

                      {/* RESTING STATE: Circular Arrow Button in Bottom-Right */}
                      <div className="absolute bottom-4 right-4 transition-transform duration-300 group-hover:scale-110">
                        <div className="w-8 h-8 rounded-full border border-white/50 bg-black/20 group-hover:bg-[#1683E8] group-hover:border-[#1683E8] flex items-center justify-center text-white backdrop-blur-[2px] shadow-sm transition-colors duration-300">
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      {/* HOVER / TAP STATE: Rich Slide-Up Reveal Overlay */}
                      <div
                        className={`absolute inset-0 bg-[#102A43]/92 flex flex-col justify-end p-5 xl:p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isHoveredOrActive
                            ? "translate-y-0"
                            : "translate-y-full group-hover:translate-y-0"
                        }`}
                      >
                        {/* Eyebrow Tag */}
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1683E8]">
                          {card.tag}
                        </span>

                        {/* Large Headline */}
                        <h4 className="font-clash text-lg xl:text-xl font-bold text-white mt-1 leading-snug">
                          {card.title}
                        </h4>

                        {/* Micro-copy Body */}
                        <p className="font-jakarta text-xs text-white/80 mt-1.5 leading-relaxed line-clamp-3">
                          {card.body}
                        </p>

                        {/* Bottom Micro-Tags and Solid Blue Arrow */}
                        <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-white/10">
                          <span className="text-[9px] font-semibold tracking-[0.18em] text-white/60 uppercase">
                            {card.footer}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-[#1683E8] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* TABLET & MOBILE RESPONSIVE EDITORIAL LAYOUT (Hidden on lg+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden mt-2">
              {[0, 1, 2, 3, 4, 5, 6].map((slotIndex) => {
                const itemIndex =
                  (slotIndex + viewIndex * 2) % memoryPool.length;
                const card = memoryPool[itemIndex];
                const isFeatured = slotIndex === 0 || slotIndex === 3;
                const isHoveredOrActive = activeSlotIndex === slotIndex;

                return (
                  <div
                    key={`mobile-slot-${slotIndex}`}
                    className={`mem-card-wrapper relative overflow-hidden rounded-[24px] bg-[#102A43] border border-[#D9DEE7] shadow-[0_10px_25px_rgba(16,42,67,0.05)] cursor-pointer select-none group transition-all duration-300 ${
                      isFeatured ? "sm:col-span-2 h-[260px] sm:h-[300px]" : "h-[220px]"
                    }`}
                    onClick={() => openModal(card)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openModal(card);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open memory details: ${card.title}`}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      priority={slotIndex < 2}
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-transparent to-[#102A43]/40 pointer-events-none" />

                    {/* Minimal Top-Left Label */}
                    <div className="absolute top-4 left-5 right-5 flex items-start justify-between pointer-events-none">
                      <div>
                        <span className="font-jakarta text-[11px] font-bold tracking-[0.14em] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                          {card.badge}
                        </span>
                        <div className="w-5 h-[1.5px] bg-white/80 mt-1" />
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/50 bg-black/20 flex items-center justify-center text-white">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Slide-Up Overlay on Tap */}
                    <div
                      className={`absolute inset-0 bg-[#102A43]/92 flex flex-col justify-end p-5 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHoveredOrActive
                          ? "translate-y-0"
                          : "translate-y-full group-hover:translate-y-0"
                      }`}
                    >
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1683E8]">
                        {card.tag}
                      </span>
                      <h4 className="font-clash text-lg font-bold text-white mt-1">
                        {card.title}
                      </h4>
                      <p className="font-jakarta text-xs text-white/80 mt-1 line-clamp-2">
                        {card.body}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
                        <span className="text-[9px] font-semibold tracking-[0.16em] text-white/60 uppercase">
                          {card.footer}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#1683E8] flex items-center justify-center text-white">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM EDITORIAL FOOTER MICRO-TEXT */}
        <div className="mem-footer mt-16 sm:mt-24 pt-8 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-[#5F6672]">
            PEOPLE · IDEAS · COMMUNITY · IMPACT
          </span>

          <div className="hidden md:flex items-center gap-3 flex-1 max-w-sm mx-8">
            <div className="h-[1px] bg-[#D9DEE7] flex-1" />
            <div className="w-2 h-2 rounded-full bg-[#1683E8]" />
            <div className="h-[1px] bg-[#D9DEE7] flex-1" />
          </div>

          <div className="flex items-center gap-3">
            <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-[#5F6672]">
              BUILT FOR WHAT’S NEXT.
            </span>
            <div className="w-8 h-[1.5px] bg-[#D9DEE7]" />
          </div>
        </div>
      </div>

      {/* INTERACTIVE POP-UP MODAL LIGHTBOX */}
      {selectedMemory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Dark Backdrop */}
          <div
            ref={backdropRef}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Pop-Up Modal Card */}
          <div
            ref={modalRef}
            className="relative w-full max-w-4xl bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)] border border-[#D9DEE7] flex flex-col md:flex-row z-10 select-text"
            role="dialog"
            aria-modal="true"
            aria-label={selectedMemory.title}
          >
            {/* High-Resolution Photograph Side */}
            <div className="relative w-full md:w-[54%] h-[260px] sm:h-[340px] md:h-[460px] bg-[#102A43] shrink-0">
              <Image
                src={selectedMemory.image}
                alt={selectedMemory.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
                priority
              />
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* Badge overlay on image */}
              <div className="absolute bottom-4 left-5 pointer-events-none">
                <span className="font-jakarta text-[11px] font-bold tracking-[0.16em] uppercase text-white drop-shadow-md">
                  {selectedMemory.badge}
                </span>
              </div>
            </div>

            {/* Editorial Content Side */}
            <div className="w-full md:w-[46%] p-6 sm:p-8 md:p-9 flex flex-col justify-between bg-white">
              <div>
                {/* Top Row: Tag & Close Button */}
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-[#1683E8]/10 text-[#1683E8] font-jakarta text-[11px] font-bold uppercase tracking-wider">
                    {selectedMemory.tag}
                  </span>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-9 h-9 rounded-full bg-[#F7F8FC] hover:bg-[#102A43] text-[#5F6672] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Subtitle / Badge */}
                <span className="block font-jakarta text-[11px] font-bold tracking-[0.2em] uppercase text-[#5F6672] mt-6">
                  {selectedMemory.badge}
                </span>

                {/* Main Title */}
                <h3 className="font-clash text-2xl sm:text-3xl font-bold text-[#111111] mt-1.5 leading-snug">
                  {selectedMemory.title}
                </h3>

                {/* Body Copy */}
                <p className="font-jakarta text-sm text-[#5F6672] leading-relaxed mt-4">
                  {selectedMemory.body}
                </p>

                {/* Expanded Context Story */}
                {selectedMemory.expandedStory && (
                  <p className="font-jakarta text-xs text-[#5F6672]/80 leading-relaxed mt-3 pt-3 border-t border-[#D9DEE7]/60">
                    {selectedMemory.expandedStory}
                  </p>
                )}
              </div>

              {/* Bottom Footer Details */}
              <div className="pt-4 border-t border-[#D9DEE7] mt-6 flex items-center justify-between">
                <span className="font-jakarta text-[10px] font-bold tracking-[0.18em] text-[#5F6672] uppercase">
                  {selectedMemory.footer}
                </span>
                <span className="font-jakarta text-[11px] font-semibold text-[#1683E8] tracking-wider uppercase">
                  FORGE MOMENT
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
