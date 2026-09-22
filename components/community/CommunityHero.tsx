"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import JoinButton from "@/components/modal/JoinButton";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * FORGE COMMUNITY HERO SECTION
 * Premium 2D Editorial & Photographic Composition
 * Features central display typography, real student photos
 * in full natural color, architectural background rectangles,
 * and Uiverse corner-expansion hover animations.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function CommunityHero() {
  const containerRef = useRef<HTMLElement>(null);
  const leftGroupRef = useRef<HTMLDivElement>(null);
  const rightGroupRef = useRef<HTMLDivElement>(null);
  const centerGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const isReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (isReduced) {
        gsap.set(
          [
            ".fch-marker",
            ".fch-heading-line",
            ".fch-desc",
            ".fch-cta",
            ".community-image-card",
            ".image-rectangle",
            ".fch-graphic",
            ".fch-center-guide",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" }
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      // 1. Editorial Markers (0ms)
      tl.fromTo(
        ".fch-marker",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, stagger: 0.05 },
        0
      );

      // 2. Main Heading Masked Line Reveals (80ms & 180ms)
      tl.fromTo(
        ".fch-heading-line-1",
        { y: "115%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.9, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
        0.08
      );
      tl.fromTo(
        ".fch-heading-line-2",
        { y: "115%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.9, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
        0.18
      );

      // 3. Supporting Description (280ms)
      tl.fromTo(
        ".fch-desc",
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.28
      );

      // 4. CTA Button (360ms)
      tl.fromTo(
        ".fch-cta",
        { opacity: 0, y: 18, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65 },
        0.36
      );

      // 5. Center Guide Line & Blue Dot (420ms)
      tl.fromTo(
        ".fch-center-guide",
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 0.6, transformOrigin: "top center" },
        0.42
      );

      // 6. Background Architectural Rectangles Reveal (100ms -> 340ms)
      tl.fromTo(
        ".image-rectangle",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.07,
          onComplete: () => {
            gsap.set(".image-rectangle", { clearProps: "transform" });
          },
        },
        0.1
      );

      // 7. Image Cards Staggered Scroll Entrance (140ms -> 420ms, stagger ~90ms)
      tl.fromTo(
        ".community-image-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.09,
          onComplete: () => {
            gsap.set(".community-image-card", { clearProps: "transform" });
          },
        },
        0.14
      );

      // 8. Graphic Accents (Blue solid blocks, circular arcs)
      tl.fromTo(
        ".fch-graphic",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.7, stagger: 0.06 },
        0.32
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="community-hero"
      aria-label="The FORGE Community Hero"
      className="relative w-full overflow-hidden bg-[#FFFFFF] text-[#111111] pt-6 pb-20 sm:pb-24 lg:pb-32 select-none"
    >
      {/* ── Scoped CSS for Corner Expansion & Hover Hierarchy ── */}
      <style>{`
        /* Decorative corner panels (Initial: 20% width/height) */
        .corner {
          position: absolute;
          width: 20%;
          height: 20%;
          background: rgba(0, 102, 255, 0.08);
          pointer-events: none;
          z-index: 5;
          transition:
            width 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            height 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            border-radius 0.5s ease;
        }

        /* Top Right Corner */
        .corner-top-right {
          top: 0;
          right: 0;
          border-radius: 0 16px 0 100%;
        }

        /* Bottom Left Corner */
        .corner-bottom-left {
          bottom: 0;
          left: 0;
          border-radius: 0 100% 0 16px;
        }

        /* Hover: Expand both corners to 100% with translucent FORGE blue */
        .community-image-frame:hover .corner-top-right,
        .community-image-frame:hover .corner-bottom-left,
        .community-image-card:hover .corner-top-right,
        .community-image-card:hover .corner-bottom-left {
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }

        /* Subtle Photo Hover Scale: scale(1.035) */
        .community-photo-img {
          transform: scale(1);
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .community-image-frame:hover .community-photo-img,
        .community-image-card:hover .community-photo-img {
          transform: scale(1.035);
        }

        /* Background Rectangles Hover Shifts */
        .rectangle-one {
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .rectangle-two {
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .rectangle-three {
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .community-image-frame:hover .rectangle-one {
          transform: translate(-6px, -6px);
        }

        .community-image-frame:hover .rectangle-two {
          transform: translate(6px, 6px);
        }

        .community-image-frame:hover .rectangle-three {
          transform: translate(8px, -4px);
        }

        /* Subtle Horizontal Light Sweep on Hover */
        .image-shine {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 25%,
            rgba(255, 255, 255, 0.22) 50%,
            transparent 75%
          );
          transform: translateX(-140%);
          transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .community-image-frame:hover .image-shine,
        .community-image-card:hover .image-shine {
          transform: translateX(140%);
        }

        /* Accessibility: Prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .corner,
          .community-photo-img,
          .rectangle-one,
          .rectangle-two,
          .rectangle-three,
          .image-shine {
            transition: none !important;
            transform: none !important;
          }
          .corner {
            width: 20% !important;
            height: 20% !important;
          }
        }
      `}</style>

      {/* ── Outer Editorial Edge Microcopy Frame ── */}
      <div className="mx-auto w-full max-w-[1540px] px-6 sm:px-10 lg:px-14">
        {/* Top Header Markers */}
        <div className="flex items-center justify-between pt-2 pb-6 text-[#111111]">
          {/* Top Left: FORGE */}
          <div className="fch-marker opacity-0 font-clash text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-[#111111]">
            FORGE
          </div>

          {/* Top Right: — COMMUNITY */}
          <div className="fch-marker opacity-0 flex items-center gap-2.5 font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8896A6]">
            <span className="h-[1px] w-6 bg-[#8896A6]" />
            <span>COMMUNITY</span>
          </div>
        </div>

        {/* ── Central Main Composition Grid ── */}
        <div className="relative mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">
          {/* ═════════════════════════════════════════════
              LEFT COLUMN: PHOTO COLLAGE A (Images 1 & 2)
             ═════════════════════════════════════════════ */}
          <div
            ref={leftGroupRef}
            className="lg:col-span-3 xl:col-span-3 order-2 lg:order-1 relative flex items-center justify-center lg:justify-start"
          >
            {/* Outer Left Editorial Microcopy */}
            <div className="fch-marker opacity-0 hidden 2xl:flex absolute -left-12 top-1/2 -translate-y-1/2 flex-col items-start gap-3">
              <span className="h-[1px] w-6 bg-[#8896A6]" />
              <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8896A6] leading-relaxed">
                <span>PEOPLE</span>
                <br />
                <span>IDEAS</span>
                <br />
                <span>SPACES</span>
                <br />
                <span>IMPACT</span>
              </div>
            </div>

            {/* Collage Canvas */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[340px] xl:max-w-[380px] h-[360px] sm:h-[420px] lg:h-[460px] flex items-center justify-center">
              {/* Background Circular Arc Outline */}
              <div
                aria-hidden="true"
                className="fch-graphic opacity-0 pointer-events-none absolute -top-8 -right-6 w-56 sm:w-64 h-56 sm:h-64 rounded-full border border-blue-200/60 -z-20"
              />

              {/* Solid Blue Quarter-Circle Arc Accent */}
              <div
                aria-hidden="true"
                className="fch-graphic opacity-0 pointer-events-none absolute -top-6 left-12 w-14 h-14 rounded-tl-full bg-[#0066FF] -z-10"
              />

              {/* Solid FORGE Blue Rectangle Block (Behind Top Image) */}
              <div
                aria-hidden="true"
                className="fch-graphic opacity-0 pointer-events-none absolute left-0 sm:left-2 top-8 sm:top-10 w-14 sm:w-16 h-36 sm:h-44 bg-[#0066FF] rounded-lg -z-10 shadow-sm"
              />

              {/* ── IMAGE 01: Main Portrait Top (activation-builders.webp) ── */}
              <div className="community-image-frame group/frame absolute left-6 sm:left-8 top-0 w-[190px] sm:w-[220px] lg:w-[210px] xl:w-[235px] aspect-[3.8/4.8]">
                {/* Thin Background Rectangle 1: Top-Left offset */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-one pointer-events-none absolute -top-[14px] sm:-top-[18px] -left-[14px] sm:-left-[18px] w-full h-full rounded-[16px] border border-[#0066FF]/20 z-0"
                />

                {/* Thin Background Rectangle 2: Bottom-Right offset */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-two pointer-events-none absolute -bottom-[16px] sm:-bottom-[20px] -right-[14px] sm:-right-[18px] w-full h-full rounded-[16px] border border-[#0066FF]/14 z-0"
                />

                {/* Main Card with Image + Corner Panels */}
                <div className="community-image-card relative z-[2] w-full h-full rounded-[16px] overflow-hidden shadow-[0_16px_40px_rgba(20,40,80,0.12)] border border-white/80 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_22px_50px_rgba(20,40,80,0.18)] cursor-pointer">
                  <Image
                    src="/webp/activation-builders.webp"
                    alt="FORGE student builders collaborating"
                    fill
                    sizes="(max-width: 768px) 200px, 240px"
                    className="community-photo-img object-cover"
                    priority
                  />

                  {/* Corner Animations */}
                  <div aria-hidden="true" className="corner corner-top-right" />
                  <div aria-hidden="true" className="corner corner-bottom-left" />

                  {/* Subtle Light Sweep */}
                  <div aria-hidden="true" className="image-shine" />
                </div>
              </div>

              {/* ── IMAGE 02: Secondary Bottom-Right (2.webp) ── */}
              <div className="community-image-frame group/frame absolute right-2 sm:right-4 bottom-2 sm:bottom-4 w-[170px] sm:w-[200px] lg:w-[190px] xl:w-[215px] aspect-[4/3] z-10">
                {/* Thin Background Rectangle 1: Top-Left offset */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-one pointer-events-none absolute -top-[12px] sm:-top-[16px] -left-[12px] sm:-left-[16px] w-full h-full rounded-[16px] border border-[#0066FF]/18 z-0"
                />

                {/* Thin Background Rectangle 2: Bottom-Right offset */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-two pointer-events-none absolute -bottom-[16px] sm:-bottom-[22px] -right-[16px] sm:-right-[22px] w-full h-full rounded-[16px] border border-[#0066FF]/16 z-0"
                />

                {/* Main Card with Image + Corner Panels */}
                <div className="community-image-card relative z-[2] w-full h-full rounded-[16px] overflow-hidden shadow-[0_18px_45px_rgba(20,40,80,0.14)] border-2 border-white bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_24px_55px_rgba(20,40,80,0.20)] cursor-pointer">
                  <Image
                    src="/webp/2.webp"
                    alt="FORGE builders discussion"
                    fill
                    sizes="(max-width: 768px) 180px, 220px"
                    className="community-photo-img object-cover"
                  />

                  {/* Corner Animations */}
                  <div aria-hidden="true" className="corner corner-top-right" />
                  <div aria-hidden="true" className="corner corner-bottom-left" />

                  {/* Subtle Light Sweep */}
                  <div aria-hidden="true" className="image-shine" />
                </div>
              </div>

              {/* Extended Hairline Alignment Guide */}
              <div
                aria-hidden="true"
                className="fch-graphic opacity-0 pointer-events-none absolute -bottom-6 -left-12 hidden xl:flex items-center gap-2 -z-10"
              >
                <span className="w-16 h-[1px] bg-[#D9DEE7]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════
              CENTER COLUMN: EDITORIAL TYPOGRAPHY & CTA
             ═════════════════════════════════════════════ */}
          <div
            ref={centerGroupRef}
            className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center text-center px-2 sm:px-6 relative z-20"
          >
            {/* Main Heading with Masked Line Reveal */}
            <h1 className="font-clash font-bold tracking-tight text-[clamp(48px,6.8vw,96px)] leading-[0.92] select-none text-center">
              <span className="block overflow-hidden pb-1">
                <span className="fch-heading-line fch-heading-line-1 inline-block text-[#111111]">
                  The FORGE
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="fch-heading-line fch-heading-line-2 inline-block text-[#0066FF]">
                  Community
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="fch-desc opacity-0 mt-6 sm:mt-8 font-jakarta text-base sm:text-lg md:text-[19px] leading-[1.6] text-[#5F6672] max-w-xl mx-auto">
              Join a growing ecosystem of builders, institutions, and innovators.
              <br className="hidden sm:inline" /> Here&apos;s everything you get as a FORGE Community Partner.
            </p>

            {/* CTA Button */}
            <div className="fch-cta opacity-0 mt-8 sm:mt-10">
              <JoinButton className="group/btn inline-flex items-center gap-3 rounded-full bg-[#0066FF] hover:bg-[#0052D4] text-white px-8 sm:px-9 py-4 font-jakarta text-sm sm:text-base font-semibold tracking-wide shadow-[0_8px_25px_rgba(0,102,255,0.30)] hover:shadow-[0_12px_32px_rgba(0,102,255,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                <span>Join the Community</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </JoinButton>
            </div>

            {/* Center Vertical Guide Line & Solid Blue Dot at Bottom */}
            <div
              aria-hidden="true"
              className="fch-center-guide opacity-0 flex flex-col items-center mt-12 sm:mt-14"
            >
              <span className="h-10 sm:h-12 w-[1px] bg-[#D9DEE7]" />
              <span className="w-2 h-2 bg-[#0066FF] mt-1" />
            </div>
          </div>

          {/* ═════════════════════════════════════════════
              RIGHT COLUMN: PHOTO COLLAGE B (Images 3 & 4)
             ═════════════════════════════════════════════ */}
          <div
            ref={rightGroupRef}
            className="lg:col-span-3 xl:col-span-3 order-3 relative flex items-center justify-center lg:justify-end"
          >
            {/* Outer Right Editorial Microcopy */}
            <div className="fch-marker opacity-0 hidden 2xl:flex absolute -right-12 top-1/2 -translate-y-1/2 flex-col items-start gap-3">
              <span className="h-[1px] w-6 bg-[#8896A6]" />
              <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8896A6] leading-relaxed text-left">
                <span>A BRIGHTER</span>
                <br />
                <span>TOMORROW,</span>
                <br />
                <span>TOGETHER.</span>
              </div>
            </div>

            {/* Collage Canvas */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[340px] xl:max-w-[380px] h-[360px] sm:h-[420px] lg:h-[460px] flex items-center justify-center">
              {/* Solid FORGE Blue Rectangle Block (Behind Top Image) */}
              <div
                aria-hidden="true"
                className="fch-graphic opacity-0 pointer-events-none absolute left-0 sm:left-2 top-8 sm:top-10 w-14 sm:w-16 h-32 sm:h-40 bg-[#0066FF] rounded-lg -z-10 shadow-sm"
              />

              {/* ── IMAGE 03: Top-Portrait (4.webp - "IDEAS PEOPLE IMPACT" hoodie) ── */}
              <div className="community-image-frame group/frame absolute left-6 sm:left-8 top-0 w-[180px] sm:w-[210px] lg:w-[200px] xl:w-[225px] aspect-[3.8/4.8]">
                {/* Thin Background Rectangle 1: Top-Right offset */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-one pointer-events-none absolute -top-[16px] sm:-top-[20px] -right-[14px] sm:-right-[18px] w-full h-full rounded-[16px] border border-[#0066FF]/20 z-0"
                />

                {/* Thin Background Rectangle 2: Bottom-Left offset */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-two pointer-events-none absolute -bottom-[14px] sm:-bottom-[18px] -left-[12px] sm:-left-[16px] w-full h-full rounded-[16px] border border-[#0066FF]/14 z-0"
                />

                {/* Optional Subtle Offset Rectangle 3 */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-three pointer-events-none absolute top-[14%] -right-[22px] sm:-right-[28px] w-[75%] h-[75%] rounded-[16px] border border-[#0066FF]/10 z-0 hidden sm:block"
                />

                {/* Main Card with Image + Corner Panels */}
                <div className="community-image-card relative z-[2] w-full h-full rounded-[16px] overflow-hidden shadow-[0_16px_40px_rgba(20,40,80,0.12)] border border-white/80 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_22px_50px_rgba(20,40,80,0.18)] cursor-pointer">
                  <Image
                    src="/webp/4.webp"
                    alt="FORGE Ideas People Impact event"
                    fill
                    sizes="(max-width: 768px) 200px, 230px"
                    className="community-photo-img object-cover"
                    priority
                  />

                  {/* Corner Animations */}
                  <div aria-hidden="true" className="corner corner-top-right" />
                  <div aria-hidden="true" className="corner corner-bottom-left" />

                  {/* Subtle Light Sweep */}
                  <div aria-hidden="true" className="image-shine" />
                </div>
              </div>

              {/* Solid Blue Accent Block beside Photo 4 */}
              <div
                aria-hidden="true"
                className="fch-graphic opacity-0 pointer-events-none absolute right-0 sm:right-2 top-32 sm:top-36 w-12 sm:w-14 h-20 sm:h-24 bg-[#0066FF] rounded-lg -z-10 shadow-sm"
              />

              {/* ── IMAGE 04: Bottom-Right Overlap (8.webp - laptop collaboration) ── */}
              <div className="community-image-frame group/frame absolute right-4 sm:right-6 bottom-2 sm:bottom-4 w-[190px] sm:w-[225px] lg:w-[215px] xl:w-[240px] aspect-[4/3] z-10">
                {/* Thin Background Rectangle 1: Top-Right offset */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-one pointer-events-none absolute -top-[12px] sm:-top-[16px] -right-[12px] sm:-right-[16px] w-full h-full rounded-[16px] border border-[#0066FF]/18 z-0"
                />

                {/* Thin Background Rectangle 2: Bottom-Left offset */}
                <div
                  aria-hidden="true"
                  className="image-rectangle rectangle-two pointer-events-none absolute -bottom-[16px] sm:-bottom-[22px] -left-[14px] sm:-left-[20px] w-full h-full rounded-[16px] border border-[#0066FF]/16 z-0"
                />

                {/* Main Card with Image + Corner Panels */}
                <div className="community-image-card relative z-[2] w-full h-full rounded-[16px] overflow-hidden shadow-[0_18px_45px_rgba(20,40,80,0.14)] border-2 border-white bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_24px_55px_rgba(20,40,80,0.20)] cursor-pointer">
                  <Image
                    src="/webp/8.webp"
                    alt="FORGE student builder coding"
                    fill
                    sizes="(max-width: 768px) 200px, 240px"
                    className="community-photo-img object-cover"
                  />

                  {/* Corner Animations */}
                  <div aria-hidden="true" className="corner corner-top-right" />
                  <div aria-hidden="true" className="corner corner-bottom-left" />

                  {/* Subtle Light Sweep */}
                  <div aria-hidden="true" className="image-shine" />
                </div>
              </div>

              {/* Subtle Right Thin Circular Arc */}
              <div
                aria-hidden="true"
                className="fch-graphic opacity-0 pointer-events-none absolute -bottom-6 -right-6 w-56 sm:w-64 h-56 sm:h-64 rounded-full border border-blue-200/50 -z-20"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom Editorial Microcopy Rules ── */}
        <div className="mt-14 sm:mt-18 pt-6 border-t border-[#D9DEE7]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Bottom Left: — FROM CAMPUS, TO IMPACT. */}
          <div className="fch-marker opacity-0 flex items-center gap-2.5 font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8896A6]">
            <span className="h-[1px] w-6 bg-[#8896A6]" />
            <span>FROM CAMPUS, TO IMPACT.</span>
          </div>

          {/* Bottom Right: — A COMMUNITY FOR WHAT'S NEXT. */}
          <div className="fch-marker opacity-0 flex items-center gap-2.5 font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8896A6]">
            <span className="h-[1px] w-6 bg-[#8896A6]" />
            <span>A COMMUNITY FOR WHAT&apos;S NEXT.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
