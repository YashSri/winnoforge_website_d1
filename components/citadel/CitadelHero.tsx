"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * CITADEL HERO SECTION
 * Premium editorial two-column hero
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function CitadelHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };
    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoOpen]);

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set(
          [
            ".ch-eyebrow",
            ".ch-eyebrow-line",
            ".ch-heading-line",
            ".ch-desc",
            ".ch-cta",
            ".ch-image-wrap",
            ".ch-backdrop-block",
            ".ch-label-primary",
            ".ch-corner",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1, clearProps: "all" }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // 0ms — Eyebrow
      tl.fromTo(
        ".ch-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0
      );
      tl.fromTo(
        ".ch-eyebrow-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power3.out" },
        0
      );

      // 100ms — Heading line 1: Not a Lab.
      tl.fromTo(
        ".ch-heading-line-1",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.1
      );

      // 180ms — Heading line 2: Not a Co-Working
      tl.fromTo(
        ".ch-heading-line-2",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.18
      );

      // 220ms — Heading line 3: Space.
      tl.fromTo(
        ".ch-heading-line-3",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.22
      );

      // 260ms — Heading line 4: An Execution
      tl.fromTo(
        ".ch-heading-line-4",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.26
      );

      // 300ms — Heading line 5: Environment.
      tl.fromTo(
        ".ch-heading-line-5",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.3
      );

      // 380ms — Description
      tl.fromTo(
        ".ch-desc",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
        0.38
      );

      // 480ms — CTA buttons
      tl.fromTo(
        ".ch-cta",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.48
      );

      // 550ms — Image & backdrop blocks
      tl.fromTo(
        ".ch-image-wrap",
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        0.55
      );
      tl.fromTo(
        ".ch-backdrop-block",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.08 },
        0.52
      );

      // 650ms — Floating image label
      tl.fromTo(
        ".ch-label-primary",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.65
      );

      // 700ms — Corner microcopy & decorative elements
      tl.fromTo(
        ".ch-corner",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.08 },
        0.7
      );

      // ── Ambient background decorative motion (8-12 seconds, 5-8px maximum) ──
      gsap.to(".ch-deco-circle", {
        y: -6,
        x: 3,
        duration: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".ch-deco-dot", {
        y: -5,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 py-12 md:px-12 md:py-20 lg:py-24"
    >
      {/* ── Background Graphics ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Soft ambient gradient tint */}
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#EBF3FF]/60 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#EAF2FF]/50 blur-3xl" />
      </div>

      {/* ── Corner & Edge Microcopy ── */}
      {/* Top Left */}
      <div
        className="ch-corner pointer-events-none absolute left-6 top-6 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-6 w-[1.5px] bg-[#94A3B8]/60" />
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
        className="ch-corner pointer-events-none absolute right-8 top-8 hidden xl:block font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed text-right opacity-0 z-10"
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
        className="ch-corner pointer-events-none absolute left-6 bottom-8 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-6 w-[1.5px] bg-[#94A3B8]/60" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed">
          STUDENTS
          <br />
          IDEAS
          <br />
          REAL IMPACT.
        </span>
      </div>

      {/* Bottom Right */}
      <div
        className="ch-corner pointer-events-none absolute right-8 bottom-8 hidden xl:flex items-center gap-3 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-[1px] w-9 bg-[#CBD5E1]" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C9BB4]">
          THE CITADEL
        </span>
      </div>

      {/* ━━━━━ MAIN TWO-COLUMN CONTENT ━━━━━ */}
      <div className="relative z-10 mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
          {/* ── LEFT COLUMN: Editorial Typography ── */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow: ──── FORGE WINNOVATION CITADEL ──── */}
            <div className="ch-eyebrow flex items-center gap-3.5 opacity-0">
              <span className="ch-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#CBD5E1] origin-left" />
              <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
                Forge Winnovation Citadel
              </span>
              <span className="ch-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#CBD5E1] origin-right" />
            </div>

            {/* Main Headline — Masked reveal line by line */}
            <h1 className="mt-5 font-clash text-[42px] font-bold tracking-tight text-[#111111] leading-[0.98] sm:text-[54px] md:text-[64px] lg:text-[70px] xl:text-[76px]">
              <span className="block overflow-hidden">
                <span className="ch-heading-line ch-heading-line-1 inline-block opacity-0">
                  Not a Lab.
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-1.5">
                <span className="ch-heading-line ch-heading-line-2 inline-block opacity-0">
                  Not a Co-Working
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-1.5">
                <span className="ch-heading-line ch-heading-line-3 inline-block opacity-0">
                  Space.
                </span>
              </span>
              <span className="block overflow-hidden mt-1.5 sm:mt-2">
                <span className="ch-heading-line ch-heading-line-4 inline-block text-[#1683E8] opacity-0">
                  An Execution
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-1.5">
                <span className="ch-heading-line ch-heading-line-5 inline-block text-[#1683E8] opacity-0">
                  Environment.
                </span>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="ch-desc mt-6 max-w-[560px] font-jakarta text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#64748B] opacity-0">
              A system that converts students into builders — continuously.
            </p>

            {/* CTA Buttons: Primary + Watch Overview */}
            <div className="ch-cta mt-8 flex flex-wrap items-center gap-5 sm:gap-7 opacity-0">
              <Link
                href="#system"
                className="group/cta inline-flex items-center gap-3 rounded-full bg-[#1683E8] px-7 py-3.5 font-jakarta text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(22,131,232,0.28)]"
              >
                Explore Citadel
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-[4px]"
                  strokeWidth={2.5}
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="group/watch inline-flex items-center gap-3.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] focus:outline-none cursor-pointer"
                aria-label="Watch Overview Video"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#64748B] shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-colors duration-300 group-hover/watch:border-[#1683E8] group-hover/watch:text-[#1683E8]">
                  <Play className="h-3.5 w-3.5 ml-0.5 fill-current" />
                </span>
                <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.16em] text-[#64748B] transition-colors duration-300 group-hover/watch:text-[#111111]">
                  Watch Overview
                </span>
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Editorial Composition & Portrait ── */}
          <div className="relative flex items-center justify-center lg:justify-end w-full">
            {/* Composition container */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px]">
              {/* ── Geometric Background Elements (2D Architectural) ── */}
              {/* Vertical soft light blue block extending above and below */}
              <div
                className="ch-backdrop-block pointer-events-none absolute -top-8 -bottom-8 left-8 right-8 rounded-[28px] bg-[#CFE4FF]/70 -z-10"
                aria-hidden="true"
              />

              {/* Solid FORGE blue block sticking out on the middle-right */}
              <div
                className="ch-backdrop-block pointer-events-none absolute -right-5 top-[30%] h-36 w-24 rounded-[18px] bg-[#1683E8] -z-10"
                aria-hidden="true"
              />

              {/* Translucent light-blue block behind lower right label */}
              <div
                className="ch-backdrop-block pointer-events-none absolute -right-4 bottom-[-16px] h-32 w-52 rounded-[22px] bg-[#EAF2FF]/85 -z-10 border border-[#D0E0FC]/60"
                aria-hidden="true"
              />

              {/* Large thin circular arc outline sweeping on the left */}
              <svg
                className="ch-deco-circle pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-[480px] w-[480px] sm:h-[540px] sm:w-[540px] -z-10"
                viewBox="0 0 540 540"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="270"
                  cy="270"
                  r="240"
                  stroke="#93C5FD"
                  strokeWidth="1.2"
                  opacity="0.45"
                />
              </svg>

              {/* Small FORGE blue dot marker on the circular line at 9 o'clock */}
              <div
                className="ch-deco-dot pointer-events-none absolute -left-4 sm:-left-5 top-[49%] h-3 w-3 -translate-y-1/2 rounded-full bg-[#1683E8] shadow-[0_0_10px_rgba(22,131,232,0.4)] z-0"
                aria-hidden="true"
              />

              {/* ── The Portrait Image ── */}
              <div
                className="ch-image-wrap group/img relative w-full overflow-hidden rounded-[26px] sm:rounded-[30px] border border-[#D8E1EE]/70 bg-white shadow-[0_20px_50px_rgba(20,40,80,0.08)] opacity-0"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/citadel1.png"
                    alt="Yash Sri — FORGE Winnovation Citadel"
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-[1.025]"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />

                  {/* Top-Left Inside Image: Architectural Wayfinding Typography */}
                  <div className="pointer-events-none absolute left-5 top-5 z-10 flex items-start gap-2.5 select-none">
                    <div className="h-16 w-[1.5px] bg-white/75" />
                    <div className="font-jakarta text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 leading-tight">
                      <div>IDEAS</div>
                      <div className="mt-1">PEOPLE</div>
                      <div className="mt-1">PRACTICE</div>
                      <div className="mt-1">IMPACT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating Editorial Label (Lower-Right) ── */}
              <div
                className="ch-label-primary group/label absolute -bottom-3 right-0 sm:right-2 z-20 rounded-[18px] bg-white px-5 py-4 border border-[#D8E1EE]/90 shadow-[0_12px_32px_rgba(20,40,80,0.08)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px]"
              >
                <p className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#1E293B] leading-snug">
                  BUILDING PEOPLE
                  <br />
                  WHO BUILD TOMORROW.
                </p>
                <div className="mt-2.5 flex items-center gap-1.5">
                  <span className="h-[2px] w-6 rounded-full bg-[#1683E8]" />
                  <span className="h-[1px] w-12 bg-[#E2E8F0]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Video Modal Dialog ── */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header / Close */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <span className="font-jakarta text-xs font-bold uppercase tracking-widest text-white/70">
                Citadel Overview
              </span>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close overview video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/forge-hero-logo.mp4"
                controls
                autoPlay
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
