"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Lightbulb,
  Network,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OfferingsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLAnchorElement>(null);
  const card2Ref = useRef<HTMLAnchorElement>(null);
  const card3Ref = useRef<HTMLAnchorElement>(null);
  const card4Ref = useRef<HTMLAnchorElement>(null);
  const card5Ref = useRef<HTMLAnchorElement>(null);
  const card6Ref = useRef<HTMLAnchorElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        // Immediate clean state for accessibility
        gsap.set(
          [
            ".eco-eyebrow",
            ".eco-heading",
            ".eco-desc",
            ".eco-card",
            ".eco-card-num",
            ".eco-card-icon",
            ".eco-card-title",
            ".eco-card-desc",
            ".eco-divider",
            ".eco-footer-text",
            ".eco-footer-line",
          ],
          { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "all" }
        );
        return;
      }

      const isMobile = window.innerWidth < 768;

      // Master section cascade reveal timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // 1. Header cascade
      masterTl
        .from(".eco-eyebrow", {
          opacity: 0,
          y: 12,
          duration: 0.5,
        })
        .from(
          ".eco-heading",
          {
            opacity: 0,
            y: 24,
            duration: 0.65,
          },
          "-=0.35"
        )
        .from(
          ".eco-desc",
          {
            opacity: 0,
            y: 16,
            duration: 0.55,
          },
          "-=0.4"
        );

      // 2. Coordinated Card Entrances with differentiated motion patterns
      // Card 01: fade + slight upward reveal
      masterTl.from(
        card1Ref.current,
        {
          opacity: 0,
          y: isMobile ? 16 : 26,
          duration: 0.65,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.2"
      );

      // Card 02: fade + slight horizontal reveal from right (vertical on mobile)
      masterTl.from(
        card2Ref.current,
        {
          opacity: 0,
          x: isMobile ? 0 : 26,
          y: isMobile ? 16 : 0,
          duration: 0.65,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.5"
      );

      // Card 03: fade + slight upward reveal + scale 0.97 -> 1
      masterTl.from(
        card3Ref.current,
        {
          opacity: 0,
          y: isMobile ? 16 : 22,
          scale: 0.97,
          duration: 0.65,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.5"
      );

      // Card 04: fade + slight upward reveal
      masterTl.from(
        card4Ref.current,
        {
          opacity: 0,
          y: isMobile ? 16 : 26,
          duration: 0.65,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.45"
      );

      // Card 05: fade + slight horizontal reveal from left (vertical on mobile)
      masterTl.from(
        card5Ref.current,
        {
          opacity: 0,
          x: isMobile ? 0 : -26,
          y: isMobile ? 16 : 0,
          duration: 0.65,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.5"
      );

      // Card 06: fade + slight scale reveal 0.96 -> 1
      masterTl.from(
        card6Ref.current,
        {
          opacity: 0,
          y: isMobile ? 16 : 18,
          scale: 0.96,
          duration: 0.65,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "-=0.5"
      );

      // 3. Card Internal Micro-Animations (staggered subtly)
      masterTl
        .from(
          ".eco-card-num",
          {
            opacity: 0,
            y: 8,
            duration: 0.35,
            stagger: 0.05,
          },
          "-=0.6"
        )
        .from(
          ".eco-card-icon",
          {
            scale: 0.85,
            opacity: 0.5,
            duration: 0.45,
            stagger: 0.05,
          },
          "-=0.55"
        )
        .from(
          ".eco-card-title",
          {
            y: 10,
            opacity: 0,
            duration: 0.45,
            stagger: 0.05,
          },
          "-=0.5"
        )
        .from(
          ".eco-card-desc",
          {
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
          },
          "-=0.45"
        )
        .from(
          ".eco-divider",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.55,
            stagger: 0.06,
          },
          "-=0.4"
        );

      // 4. Section ending reveal
      masterTl
        .from(
          ".eco-footer-line",
          {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          ".eco-footer-text",
          {
            opacity: 0,
            y: 6,
            duration: 0.5,
          },
          "-=0.35"
        );

      // 5. Card Parallax / Depth Effect (Desktop only)
      if (!isMobile) {
        gsap.to(card1Ref.current, {
          y: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(card2Ref.current, {
          y: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(card3Ref.current, {
          y: -5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(card4Ref.current, {
          y: 7,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(card5Ref.current, {
          y: -6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(card6Ref.current, {
          y: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative w-full bg-[#F7F8FC] px-4 py-20 sm:px-6 md:px-10 md:py-28 lg:px-12 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1360px]">
        {/* ━━━━━━━━ SECTION HEADER ━━━━━━━━ */}
        <div ref={headerRef} className="text-center">
          {/* Eyebrow */}
          <div className="eco-eyebrow flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1683E8]">
              THE ECOSYSTEM
            </span>
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
          </div>

          {/* Main Headline */}
          <h2 className="eco-heading font-clash mt-5 text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold tracking-tight text-[#111111] leading-[0.98]">
            One Ecosystem.
            <br />
            <span className="text-[#1683E8]">Multiple Pathways.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="eco-desc font-jakarta mx-auto mt-6 max-w-[720px] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-[#5F6672]">
            FORGE brings together learning, building, mentorship, and real-world
            exposure — so students can move from ideas to impact, all in one
            place.
          </p>
        </div>

        {/* ━━━━━━━━ ASYMMETRIC EDITORIAL GRID ━━━━━━━━ */}
        <div className="mt-14 sm:mt-16 md:mt-20 flex flex-col gap-6">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1.65fr_1.15fr] gap-6 items-stretch">
            {/* ──────── CARD 01: Certification & Skill Development ──────── */}
            <Link
              ref={card1Ref}
              href="/programs"
              className="eco-card group relative flex flex-col justify-between rounded-[24px] border border-[#D9DEE7] bg-white p-7 sm:p-8 lg:p-9 text-[#111111] transition-[transform,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#1683E8] hover:shadow-[0_16px_36px_rgba(16,42,67,0.06)]"
            >
              <div>
                {/* Number */}
                <div className="eco-card-num flex items-center justify-between">
                  <span className="font-clash text-2xl font-bold tracking-tight text-[#111111]">
                    01
                  </span>
                </div>
                {/* Short Accent Divider */}
                <div className="eco-divider mt-2.5 h-[1.5px] w-8 bg-[#111111]" />

                {/* Title */}
                <h3 className="eco-card-title font-clash mt-6 text-[21px] sm:text-[23px] lg:text-[24px] font-bold leading-snug text-[#111111]">
                  Certification &amp; Skill Development
                </h3>

                {/* Description */}
                <p className="eco-card-desc font-jakarta mt-3 text-[14px] sm:text-[15px] leading-relaxed text-[#5F6672]">
                  Structured courses in emerging technologies, analytics,
                  development, business, and automation.
                </p>
              </div>

              <div className="mt-8 pt-4">
                {/* Book Icon */}
                <div className="eco-card-icon mb-6">
                  <BookOpen className="h-8 w-8 text-[#111111] stroke-[1.5] transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>

                {/* Thin Divider */}
                <div className="eco-divider h-[1px] w-full bg-[#D9DEE7]" />

                {/* Bottom Statement */}
                <div className="mt-3.5 flex items-center justify-between">
                  <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.18em] text-[#5F6672] transition-colors duration-300 group-hover:text-[#1683E8]">
                    LEARN. GROW. GET CERTIFIED.
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#5F6672] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1683E8]" />
                </div>
              </div>
            </Link>

            {/* ──────── CARD 02: Practical Execution (Deep Navy Featured) ──────── */}
            <Link
              ref={card2Ref}
              href="/programs"
              className="eco-card group relative flex flex-col justify-between rounded-[24px] border border-[#183A5A] bg-[#102A43] p-7 sm:p-8 lg:p-9 text-white transition-[transform,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#1683E8] hover:shadow-[0_20px_40px_rgba(16,42,67,0.28)]"
            >
              <div>
                {/* Top Row: Eyebrow Tag + Number */}
                <div className="eco-card-num flex items-start justify-between">
                  <div>
                    <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#8BB8E8]">
                      IDEAS INTO IMPACT
                    </span>
                    <div className="eco-divider mt-2 h-[1.5px] w-10 bg-[#8BB8E8]/40" />
                  </div>
                  <span className="font-clash text-2xl font-bold tracking-tight text-white/90">
                    02
                  </span>
                </div>

                {/* Title */}
                <h3 className="eco-card-title font-clash mt-7 text-[23px] sm:text-[26px] lg:text-[28px] font-bold leading-snug text-white">
                  Practical Execution
                </h3>

                {/* Description */}
                <p className="eco-card-desc font-jakarta mt-3.5 max-w-[440px] text-[14px] sm:text-[15px] leading-relaxed text-[#B2C7DF]">
                  Assignments, projects, workshops, challenges, and
                  demonstrations that turn concepts into visible work.
                </p>
              </div>

              {/* Bottom Row: Minimal Action Indicator */}
              <div className="mt-8 flex items-center justify-between pt-4">
                <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.18em] text-[#8BB8E8] transition-colors duration-300 group-hover:text-white">
                  BUILD &amp; DEMONSTRATE
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#1683E8] group-hover:bg-[#1683E8]">
                  <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* ──────── CARD 03: Mentorship & Industry Exposure ──────── */}
            <Link
              ref={card3Ref}
              href="/community"
              className="eco-card group relative flex flex-col justify-between rounded-[24px] border border-[#D9DEE7] bg-white p-7 sm:p-8 lg:p-9 text-[#111111] md:col-span-2 lg:col-span-1 transition-[transform,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#1683E8] hover:shadow-[0_16px_36px_rgba(16,42,67,0.06)]"
            >
              <div>
                {/* Top Row: User Badge + Number */}
                <div className="eco-card-num flex items-start justify-between">
                  <div className="eco-card-icon flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EBF3FC] text-[#1683E8] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Users className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <span className="font-clash text-2xl font-bold tracking-tight text-[#111111]">
                    03
                  </span>
                </div>

                {/* Title */}
                <h3 className="eco-card-title font-clash mt-6 text-[21px] sm:text-[23px] lg:text-[24px] font-bold leading-snug text-[#111111]">
                  Mentorship &amp; Industry Exposure
                </h3>

                {/* Description */}
                <p className="eco-card-desc font-jakarta mt-3 text-[14px] sm:text-[15px] leading-relaxed text-[#5F6672]">
                  Interactions with practitioners, founders, technical experts,
                  corporate leaders, and domain mentors.
                </p>
              </div>

              {/* Bottom Row */}
              <div className="mt-8 pt-4">
                <div className="flex items-center gap-3">
                  <span className="eco-divider h-[1.5px] w-8 bg-[#D9DEE7] group-hover:bg-[#1683E8] transition-colors duration-300" />
                  <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.18em] text-[#5F6672] transition-colors duration-300 group-hover:text-[#1683E8]">
                    GUIDANCE AT EVERY STEP.
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.55fr_1.1fr_1.25fr] gap-6 items-stretch">
            {/* ──────── CARD 04: Innovation & Entrepreneurship (With Inner Panel) ──────── */}
            <Link
              ref={card4Ref}
              href="/citadel1"
              className="eco-card group relative flex flex-col justify-between rounded-[24px] border border-[#D9DEE7] bg-white p-7 sm:p-8 lg:p-9 text-[#111111] transition-[transform,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#1683E8] hover:shadow-[0_16px_36px_rgba(16,42,67,0.06)]"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  {/* Number */}
                  <div className="eco-card-num">
                    <span className="font-clash text-2xl font-bold tracking-tight text-[#111111]">
                      04
                    </span>
                  </div>
                  <div className="eco-divider mt-2.5 h-[1.5px] w-8 bg-[#111111]" />

                  {/* Title */}
                  <h3 className="eco-card-title font-clash mt-6 text-[21px] sm:text-[24px] lg:text-[25px] font-bold leading-snug text-[#111111]">
                    Innovation &amp; Entrepreneurship
                  </h3>

                  {/* Description */}
                  <p className="eco-card-desc font-jakarta mt-3 text-[14px] sm:text-[15px] leading-relaxed text-[#5F6672]">
                    Problem discovery, ideation, validation, prototyping,
                    venture development, and showcase opportunities.
                  </p>
                </div>

                {/* Inner Editorial Pill / Column (Solid Light Blue) */}
                <div className="hidden sm:flex flex-col justify-between items-center w-[95px] lg:w-[105px] shrink-0 rounded-[20px] bg-[#EBF3FC] border border-[#D5E5F7] p-4 text-center">
                  <div className="eco-card-icon">
                    <Lightbulb className="h-5 w-5 text-[#111111] stroke-[1.8] transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="my-4 flex flex-col gap-1 text-[9.5px] font-bold tracking-[0.2em] text-[#1683E8] leading-[1.5]">
                    <span>IDEAS</span>
                    <span>BUILD</span>
                    <span>SOLVE</span>
                    <span>SCALE</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#111111] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Statement */}
              <div className="mt-8 pt-4 flex items-center justify-between border-t border-[#D9DEE7]/70">
                <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.18em] text-[#5F6672] transition-colors duration-300 group-hover:text-[#1683E8]">
                  TURN IDEAS INTO IMPACT.
                </span>
                <ArrowRight className="h-4 w-4 text-[#5F6672] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1683E8]" />
              </div>
            </Link>

            {/* ──────── CARD 05: Campus & Community (Solid Forge Blue) ──────── */}
            <Link
              ref={card5Ref}
              href="/ecosystem"
              className="eco-card group relative flex flex-col justify-between rounded-[24px] border border-[#1474CE] bg-[#1683E8] p-7 sm:p-8 lg:p-9 text-white transition-[transform,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-white/60 hover:shadow-[0_20px_40px_rgba(22,131,232,0.32)]"
            >
              <div>
                {/* Top Row: Number + Network Icon */}
                <div className="eco-card-num flex items-start justify-between">
                  <span className="font-clash text-2xl font-bold tracking-tight text-white">
                    05
                  </span>
                  <div className="eco-card-icon">
                    <Network className="h-7 w-7 text-white stroke-[1.8] transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="eco-card-title font-clash mt-6 text-[21px] sm:text-[24px] lg:text-[25px] font-bold leading-snug text-white">
                  Campus &amp; Community
                </h3>

                {/* Description */}
                <p className="eco-card-desc font-jakarta mt-3 text-[14px] sm:text-[15px] leading-relaxed text-white/90">
                  A connected environment where students, faculty, mentors,
                  institutions, and industry partners collaborate.
                </p>
              </div>

              {/* Bottom Row */}
              <div className="mt-8 flex items-end justify-between pt-4 border-t border-white/20">
                <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  BUILD TOGETHER.
                </span>

                <div className="border-l border-white/30 pl-3 flex flex-col text-[8.5px] font-bold uppercase tracking-[0.18em] text-white/80 leading-[1.6]">
                  <span>PEOPLE</span>
                  <span>IDEAS</span>
                  <span>OPPORTUNITIES</span>
                  <span>IMPACT</span>
                </div>
              </div>
            </Link>

            {/* ──────── CARD 06: FORGE Citadel (Deep Navy Featured Destination) ──────── */}
            <Link
              ref={card6Ref}
              href="/citadel1"
              className="eco-card group relative flex flex-col justify-between rounded-[24px] border border-[#183A5A] bg-[#102A43] p-7 sm:p-8 lg:p-9 text-white md:col-span-2 lg:col-span-1 transition-[transform,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#1683E8] hover:shadow-[0_20px_40px_rgba(16,42,67,0.3)]"
            >
              <div>
                {/* Top Row: Status Badge + Number */}
                <div className="eco-card-num flex items-center justify-between">
                  <span className="font-jakarta rounded-full border border-[#1683E8]/40 bg-[#1683E8]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
                    THE NEXT LEVEL
                  </span>
                  <span className="font-mono text-[13px] font-medium text-white/60">
                    06 / 06
                  </span>
                </div>

                {/* Destination Icon */}
                <div className="eco-card-icon mt-5 mb-2">
                  <Building2 className="h-6 w-6 text-[#1683E8] stroke-[1.8] transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>

                {/* Title */}
                <h3 className="eco-card-title font-clash text-[21px] sm:text-[24px] lg:text-[25px] font-bold leading-snug text-white">
                  FORGE Citadel
                </h3>

                {/* Description */}
                <p className="eco-card-desc font-jakarta mt-3 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#B2C7DF]">
                  A separate execution environment for structured activation,
                  focused sprints, incubation, and venture development — not a
                  certification track.
                </p>
              </div>

              {/* Bottom Row */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#1683E8] transition-colors duration-300 group-hover:text-white">
                  ENTER CITADEL
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1683E8] transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ━━━━━━━━ SECTION ENDING ━━━━━━━━ */}
        <div
          ref={footerRef}
          className="mt-16 sm:mt-20 flex items-center justify-center gap-3 sm:gap-5"
        >
          <span className="eco-footer-line h-[1px] w-12 sm:w-16 md:w-20 bg-[#D9DEE7]" />
          <span className="eco-footer-text font-jakarta text-center text-[10.5px] sm:text-[11.5px] md:text-[12px] font-bold uppercase tracking-[0.22em] text-[#5F6672]">
            STUDENTS TODAY. A BRIGHTER TOMORROW.
          </span>
          <span className="eco-footer-line h-[1px] w-12 sm:w-16 md:w-20 bg-[#D9DEE7]" />
        </div>
      </div>
    </section>
  );
}

