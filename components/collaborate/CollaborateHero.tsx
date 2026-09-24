"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function CollaborateHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const centerBottomRef = useRef<HTMLDivElement>(null);
  const leftLabelRef = useRef<HTMLDivElement>(null);
  const rightLabelRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    const formElement = document.getElementById("collaborate-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        // Reduced motion: instant reveal
        gsap.set(
          [
            eyebrowRef.current,
            line1Ref.current,
            line2Ref.current,
            line3Ref.current,
            copyRef.current,
            ctaRef.current,
            centerBottomRef.current,
            leftLabelRef.current,
            rightLabelRef.current,
            leftImgRef.current,
            rightImgRef.current,
            bgRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0 0 0 0)",
          }
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      // Step 1: Eyebrow & top label fades in
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65 }
      )
        // Step 2: Headline reveals upward with line-based reveal
        .fromTo(
          line1Ref.current,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          line2Ref.current,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          line3Ref.current,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        // Step 3: Supporting copy fades upward
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.5"
        )
        // Step 4: CTA buttons appear
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          centerBottomRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        // Step 5: Left editorial image reveals (clip-path inset(0 100% 0 0) -> inset(0 0 0 0)) & scale 1.03 -> 1
        .fromTo(
          leftImgRef.current,
          { clipPath: "inset(0 100% 0 0)", scale: 1.03, opacity: 0.4 },
          { clipPath: "inset(0 0 0 0)", scale: 1.0, opacity: 1, duration: 1.05 },
          "-=0.65"
        )
        .fromTo(
          leftLabelRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.8"
        )
        // Step 6: Right editorial image reveals (clip-path inset(0 0 0 100%) -> inset(0 0 0 0)) & scale 1.03 -> 1
        .fromTo(
          rightImgRef.current,
          { clipPath: "inset(0 0 0 100%)", scale: 1.03, opacity: 0.4 },
          { clipPath: "inset(0 0 0 0)", scale: 1.0, opacity: 1, duration: 1.05 },
          "-=0.95"
        )
        .fromTo(
          rightLabelRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.8"
        )
        // Step 7: Background ambient elements appear subtly
        .fromTo(
          bgRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2 },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-label="Collaborate with FORGE"
      className="relative w-full overflow-hidden bg-[#FBFBFD] pt-6 pb-16 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. SLOWLY MOVING AMBIENT BACKGROUND ELEMENTS
          - Large circular arcs (22s loop)
          - Small blue dot (8.5s loop)
          - Large faint circle (28s loop)
          - Fine Swiss editorial lines & subtle grid
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        {/* Large sweeping circular arc 1 (top-center to left bottom) */}
        <svg
          className="animate-ambient-arc absolute -top-12 left-1/2 h-[750px] w-[1300px] -translate-x-1/2 opacity-60"
          viewBox="0 0 1300 750"
          fill="none"
        >
          <path
            d="M 650 0 C 450 180, 200 120, 100 480 C 40 680, 250 720, 420 740"
            stroke="#0052FF"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="opacity-30"
          />
          <path
            d="M 850 0 C 1050 140, 1200 320, 1280 560"
            stroke="#0052FF"
            strokeWidth="0.75"
            strokeDasharray="5 7"
            className="opacity-25"
          />
          <path
            d="M 220 740 C 450 730, 850 700, 1080 750"
            stroke="#CBD5E1"
            strokeWidth="0.6"
            className="opacity-40"
          />
        </svg>

        {/* Large faint background circle */}
        <div className="animate-ambient-circle absolute -top-20 -right-24 h-[520px] w-[520px] rounded-full border border-[#0052FF]/10 pointer-events-none" />

        {/* Subtle ambient small blue dot */}
        <div className="animate-ambient-dot absolute top-[28%] left-[34%] h-2 w-2 rounded-full bg-[#0052FF]/60 pointer-events-none" />
        <div className="animate-ambient-dot absolute top-[72%] right-[32%] h-1.5 w-1.5 rounded-full bg-[#0052FF]/40 pointer-events-none" />

        {/* Editorial crosshair / fine markings */}
        <div className="absolute top-12 left-[12%] text-[9px] font-mono tracking-widest text-slate-300 opacity-60">
          + 24.8°N / 121.5°E
        </div>
        <div className="absolute bottom-8 right-[14%] text-[9px] font-mono tracking-widest text-slate-300 opacity-60">
          SYS // FORGE.COLLAB
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. THREE-ZONE EDITORIAL HERO COMPOSITION
          Left Photo Composition | Center Messaging | Right Photo Composition
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          
          {/* ──────────────────────────────────────────
              LEFT SIDE: CREATIVE PHOTOGRAPHIC COMPOSITION
              - Editorial vertical label: PEOPLE / IDEAS / PROGRESS / BELONG HERE.
              - Angular framed building photo (public/programs-building.jpg)
              - Solid FORGE blue geometric polygon wedge behind roofline
              - Bottom-right overlapping students photo (public/programs-stairs.jpg)
              ────────────────────────────────────────── */}
          <div className="order-2 lg:order-1 lg:col-span-3 xl:col-span-3">
            {/* Top decorative label */}
            <div
              ref={leftLabelRef}
              className="mb-4 hidden items-start gap-2.5 pl-2 lg:flex"
            >
              <div className="h-10 w-[1px] bg-slate-300" />
              <div className="flex flex-col">
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 leading-[1.6]">
                  <span>PEOPLE</span>
                  <br />
                  <span>IDEAS</span>
                  <br />
                  <span>PROGRESS</span>
                  <br />
                  <span className="font-semibold text-slate-600">BELONG HERE.</span>
                </div>
                <div className="mt-2 h-[1px] w-6 bg-slate-300" />
              </div>
            </div>

            {/* Left Image Group with Hover Interactivity */}
            <div
              ref={leftImgRef}
              className="group relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none"
            >
              {/* Blue Geometric Wedge behind roofline */}
              <div
                aria-hidden="true"
                className="absolute -top-3.5 right-6 sm:right-8 h-28 w-28 sm:h-32 sm:w-32 bg-[#0052FF] transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 z-0"
                style={{
                  clipPath: "polygon(35% 0%, 100% 20%, 65% 100%, 0% 75%)",
                  borderRadius: "6px",
                }}
              />

              {/* Blue Accent Wedge at bottom-left */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2 left-6 h-12 w-28 bg-[#0052FF] transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 z-0"
                style={{
                  clipPath: "polygon(0% 40%, 100% 0%, 75% 100%, 0% 90%)",
                  borderRadius: "4px",
                }}
              />

              {/* Main Building Photo Frame */}
              <div
                className="relative z-10 w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                style={{
                  clipPath: "polygon(0% 36%, 60% 12%, 100% 24%, 100% 88%, 0% 72%)",
                  borderRadius: "16px",
                }}
              >
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full">
                  <Image
                    src="/programs-building.jpg"
                    alt="FORGE Innovation Center Architecture"
                    fill
                    priority
                    sizes="(max-width: 1024px) 380px, (max-width: 1440px) 25vw, 360px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Overlapping Secondary Photo Card: Students Collaborating */}
              <div className="absolute -bottom-6 -right-3 sm:-right-5 z-20 w-44 sm:w-52 md:w-56 overflow-hidden rounded-[18px] border-2 border-white bg-white shadow-[0_18px_38px_rgba(0,0,0,0.14)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/programs-stairs.jpg"
                    alt="Students collaborating on FORGE campus steps"
                    fill
                    sizes="(max-width: 640px) 180px, 230px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Mobile-only label under left image */}
            <div className="mt-8 flex items-start gap-2.5 pl-2 lg:hidden">
              <div className="h-9 w-[1px] bg-slate-300" />
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 leading-[1.6]">
                PEOPLE / IDEAS / PROGRESS / <span className="font-semibold text-slate-600">BELONG HERE.</span>
              </div>
            </div>
          </div>

          {/* ──────────────────────────────────────────
              CENTER: PRIMARY COLLABORATE MESSAGING & CTAS
              - Vertical top accent divider
              - Eyebrow: COLLABORATE
              - Headline: "Build the Future With FORGE" (Line-based reveal)
              - Supporting paragraph
              - 3 CTA Buttons
              - Bottom vertical divider + "SAME PEOPLE. BIGGER POSSIBILITIES."
              ────────────────────────────────────────── */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 text-center z-10 px-2 sm:px-4">
            
            {/* Top editorial vertical line connecting towards navbar */}
            <div className="mx-auto mb-3 h-8 w-[1px] bg-slate-300/80" />

            {/* Eyebrow */}
            <div ref={eyebrowRef} className="inline-block">
              <span className="font-jakarta text-xs sm:text-sm font-bold uppercase tracking-[0.26em] text-[#0052FF]">
                Collaborate
              </span>
            </div>

            {/* Editorial Headline with Precision Line-Based Entrance */}
            <h1 className="mt-4 font-jakarta font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-[66px] leading-[1.06] tracking-tight text-[#0D1117]">
              <span className="block overflow-hidden pb-1">
                <span ref={line1Ref} className="block will-change-transform">
                  Build the
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span ref={line2Ref} className="block will-change-transform">
                  Future With
                </span>
              </span>
              <span className="block overflow-hidden pt-0.5">
                <span
                  ref={line3Ref}
                  className="block text-[#0052FF] will-change-transform"
                >
                  FORGE
                </span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              ref={copyRef}
              className="mx-auto mt-6 max-w-xl font-jakarta text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              FORGE works with institutions, companies, mentors, experts, and strategic partners
              who want to contribute to a stronger culture of learning, innovation, and execution.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {/* Button 1: Start a Conversation (Primary) */}
              <button
                type="button"
                onClick={scrollToForm}
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#0052FF] pl-6 pr-2.5 py-2.5 font-jakarta text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0045D8] hover:shadow-[0_14px_30px_rgba(0,82,255,0.32)] hover:scale-[1.02] cursor-pointer"
              >
                <span>Start a Conversation</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0052FF] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
              </button>

              {/* Button 2: Explore FORGE Programs */}
              <Link
                href="/programs"
                className="group inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 font-jakarta text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-[#0052FF] hover:text-[#0052FF] hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:scale-[1.01]"
              >
                <span>Explore FORGE Programs</span>
              </Link>

              {/* Button 3: View the Ecosystem */}
              <Link
                href="/ecosystem"
                className="group inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 font-jakarta text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-[#0052FF] hover:text-[#0052FF] hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:scale-[1.01]"
              >
                <span>View the Ecosystem</span>
              </Link>
            </div>

            {/* Bottom Editorial Statement & Divider */}
            <div
              ref={centerBottomRef}
              className="mt-10 flex flex-col items-center select-none"
            >
              <div className="h-8 w-[1px] bg-slate-300 mb-3" />
              <span className="text-[10px] sm:text-[11px] font-jakarta font-medium uppercase tracking-[0.25em] text-slate-400">
                SAME PEOPLE. BIGGER POSSIBILITIES.
              </span>
            </div>
          </div>

          {/* ──────────────────────────────────────────
              RIGHT SIDE: SECOND PHOTOGRAPHIC COMPOSITION
              - Editorial vertical label: FROM / COLLABORATION / TO IMPACT.
              - Angular framed facade photo (public/programs-facade.jpg)
              - Solid FORGE blue geometric polygon wedge behind upper-right
              - Solid FORGE blue wedge at bottom
              - Floating Partner/Build/Support/Grow card with overlapping circles
              ────────────────────────────────────────── */}
          <div className="order-3 lg:col-span-3 xl:col-span-3">
            {/* Top decorative label */}
            <div
              ref={rightLabelRef}
              className="mb-4 hidden items-start justify-end gap-2.5 pr-2 lg:flex"
            >
              <div className="flex flex-col text-right">
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 leading-[1.6]">
                  <span>FROM</span>
                  <br />
                  <span>COLLABORATION</span>
                  <br />
                  <span className="font-semibold text-slate-600">TO IMPACT.</span>
                </div>
                <div className="ml-auto mt-2 h-[1px] w-6 bg-slate-300" />
              </div>
              <div className="h-10 w-[1px] bg-slate-300" />
            </div>

            {/* Right Image Group with Hover Interactivity */}
            <div
              ref={rightImgRef}
              className="group relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none"
            >
              {/* Blue Geometric Wedge behind upper-right */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 sm:-right-4 h-28 w-28 sm:h-36 sm:w-36 bg-[#0052FF] transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 z-0"
                style={{
                  clipPath: "polygon(0% 25%, 85% 0%, 100% 65%, 15% 100%)",
                  borderRadius: "8px",
                }}
              />

              {/* Blue Accent Wedge at bottom-center pointing down/left */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 left-10 sm:left-14 h-16 w-32 bg-[#0052FF] transition-transform duration-500 ease-out group-hover:-translate-x-1.5 group-hover:translate-y-1.5 z-0"
                style={{
                  clipPath: "polygon(0% 30%, 100% 0%, 65% 100%, 0% 80%)",
                  borderRadius: "6px",
                }}
              />

              {/* Main Facade Photo Frame */}
              <div
                className="relative z-10 w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                style={{
                  clipPath: "polygon(0% 0%, 100% 32%, 100% 100%, 0% 100%)",
                  borderRadius: "18px 0px 0px 18px",
                }}
              >
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full">
                  <Image
                    src="/programs-facade.jpg"
                    alt="FORGE Modern Architectural Facade and Community"
                    fill
                    priority
                    sizes="(max-width: 1024px) 380px, (max-width: 1440px) 25vw, 360px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Overlapping Floating Feature Card: Partner / Build / Support / Grow */}
              <div className="absolute -bottom-6 -left-3 sm:-left-5 z-20 rounded-[20px] border border-slate-100/90 bg-white/95 p-4 sm:p-5 shadow-[0_18px_38px_rgba(0,0,0,0.12)] backdrop-blur-md transition-transform duration-500 ease-out group-hover:-translate-y-1">
                {/* Overlapping Circular Toggle / Venn Dots */}
                <div className="relative mb-3 flex h-5 w-8 items-center">
                  <div className="absolute left-0 h-4.5 w-4.5 rounded-full bg-[#0052FF]" />
                  <div className="absolute left-3 h-4.5 w-4.5 rounded-full bg-[#93C5FD]/80 backdrop-blur-xs" />
                </div>

                {/* 4 Feature Keywords */}
                <div className="space-y-1 text-[10px] sm:text-[11px] font-jakarta font-semibold uppercase tracking-[0.22em] text-slate-500 leading-tight">
                  <div>PARTNER</div>
                  <div>BUILD</div>
                  <div>SUPPORT</div>
                  <div className="text-slate-700">GROW</div>
                </div>

                {/* Fine bottom accent divider */}
                <div className="mt-3 h-[1px] w-5 bg-slate-200" />
              </div>
            </div>

            {/* Mobile-only label under right image */}
            <div className="mt-8 flex items-start justify-end gap-2.5 pr-2 lg:hidden">
              <div className="text-right text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 leading-[1.6]">
                FROM / COLLABORATION / <span className="font-semibold text-slate-600">TO IMPACT.</span>
              </div>
              <div className="h-9 w-[1px] bg-slate-300" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
