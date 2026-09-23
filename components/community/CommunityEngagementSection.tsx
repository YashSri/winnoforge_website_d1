"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Handshake, Laptop, MapPin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CommunityEngagementSection() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const circleBgRef = useRef<HTMLDivElement>(null);
  const arcBgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Check for prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrowRef.current,
            ".heading-line",
            ".subheading-fade",
            card1Ref.current,
            card2Ref.current,
            card3Ref.current,
          ],
          { opacity: 1, y: 0, transform: "none" }
        );
        return;
      }

      // Main entrance timeline triggered on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // Step 1: Eyebrow reveals upward
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      // Step 2: Heading reveals line-by-line (0ms, 80ms, 160ms stagger)
      tl.fromTo(
        ".heading-line",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Subtitle & editorial marker fade
      tl.fromTo(
        ".subheading-fade",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // Step 3: Cards reveal sequentially with smooth editorial easing
      // In-Person: 200ms after trigger, Online: 320ms, Hybrid: 440ms
      tl.fromTo(
        card1Ref.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
        0.2
      );

      tl.fromTo(
        card2Ref.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
        0.32
      );

      tl.fromTo(
        card3Ref.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
        0.44
      );

      // Micro parallax for decorative background arcs
      if (circleBgRef.current) {
        gsap.to(circleBgRef.current, {
          y: -20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (arcBgRef.current) {
        gsap.to(arcBgRef.current, {
          y: 15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-label="Online & Offline Engagement"
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BACKGROUND DECORATIVE ELEMENTS (Subtle FORGE Details)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* Accent Blue Dot (Top-Left) */}
      <div
        className="pointer-events-none absolute top-12 left-6 sm:left-12 lg:left-16 w-3 h-3 rounded-full bg-[#004DE6] opacity-90 shadow-[0_0_12px_rgba(0,77,230,0.3)] -z-10"
        aria-hidden="true"
      />

      {/* Large Partial Circle Arc (Right) */}
      <div
        ref={circleBgRef}
        className="pointer-events-none absolute -right-28 sm:-right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#004DE6]/[0.08] -z-10"
        aria-hidden="true"
      />

      {/* Thin Curved Arc (Bottom-Left) */}
      <div
        ref={arcBgRef}
        className="pointer-events-none absolute -left-36 -bottom-20 w-[460px] h-[460px] rounded-full border border-[#004DE6]/[0.06] -z-10"
        aria-hidden="true"
      />

      {/* Subtle Top-Right Editorial Marker */}
      <div
        className="hidden xl:block pointer-events-none absolute top-8 right-12 text-right -z-10 select-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.24em] text-slate-400 font-medium uppercase block leading-tight">
          A STRONGER
          <br />
          ECOSYSTEM
          <br />
          TOGETHER.
        </span>
        <div className="w-6 h-[1.5px] bg-slate-300 ml-auto mt-2" />
      </div>

      {/* Subtle Bottom-Right Editorial Marker */}
      <div
        className="hidden xl:flex pointer-events-none items-center gap-2 absolute bottom-8 right-12 -z-10 select-none"
        aria-hidden="true"
      >
        <div className="w-6 h-[1.5px] bg-slate-300" />
        <span className="font-mono text-[10px] tracking-[0.24em] text-slate-400 font-medium uppercase">
          FROM CAMPUS TO IMPACT.
        </span>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN CONTENT CONTAINER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-stretch">
          
          {/* ──────────────────────────────────────────
              LEFT COLUMN: Editorial Typography & Heading
              ────────────────────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between self-stretch py-1">
            <div>
              {/* Eyebrow with horizontal line */}
              <div
                ref={eyebrowRef}
                className="flex items-center gap-3 mb-6"
                style={{ opacity: 0 }}
              >
                <span className="font-jakarta text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004DE6]">
                  ONLINE & OFFLINE ENGAGEMENT
                </span>
                <span className="w-12 h-[1px] bg-slate-300 block" aria-hidden="true" />
              </div>

              {/* Dominant Heading with 3 overflow-masked lines */}
              <h2 className="font-clash text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-bold tracking-tight text-[#0A0D14] leading-[1.06] mb-8">
                <span className="block overflow-hidden pb-1">
                  <span className="heading-line block" style={{ opacity: 0 }}>
                    Different
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="heading-line block" style={{ opacity: 0 }}>
                    Ways to Stay
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="heading-line block text-[#004DE6]" style={{ opacity: 0 }}>
                    Connected.
                  </span>
                </span>
              </h2>

              {/* Subtitle */}
              <p
                className="subheading-fade font-jakarta text-base sm:text-lg text-slate-500 leading-relaxed max-w-md"
                style={{ opacity: 0 }}
              >
                Same community.
                <br />
                More possibilities.
              </p>
            </div>

            {/* Bottom Swiss Editorial Stamp */}
            <div
              className="subheading-fade hidden lg:flex items-start gap-3 mt-12 pt-6"
              style={{ opacity: 0 }}
            >
              <div className="w-3.5 h-[2px] bg-[#004DE6] mt-2 rounded-full" aria-hidden="true" />
              <div className="font-mono text-[10px] tracking-[0.24em] text-slate-400 font-medium leading-[1.7] uppercase">
                PEOPLE
                <br />
                IDEAS
                <br />
                PROGRESS
                <br />
                BELONG HERE.
              </div>
            </div>
          </div>

          {/* ──────────────────────────────────────────
              RIGHT COLUMN: Asymmetric Editorial Cards Grid
              ────────────────────────────────────────── */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            
            {/* SUB-COLUMN 1: In-Person (Top) + Online (Bottom Feature Anchor) */}
            <div className="md:col-span-7 flex flex-col gap-5 justify-between">
              
              {/* ── CARD 01: In-Person ── */}
              <div
                ref={card1Ref}
                style={{ opacity: 0 }}
                className="group relative flex flex-col sm:flex-row bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_42px_rgba(15,23,42,0.08)] hover:border-slate-300 flex-1 min-h-[225px]"
              >
                {/* Left Text Block */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Number + Icon Badge */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-xs font-bold tracking-wider text-slate-700">
                          01
                        </span>
                        <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Heading + Description */}
                    <h3 className="font-clash text-xl font-bold text-[#0A0D14] tracking-tight mt-4 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                      In-Person
                    </h3>
                    <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                      Campus activities, workshops, meetups, project sessions, and showcases.
                    </p>
                  </div>

                  {/* Bottom: FORGE Label, Divider, Arrow Button */}
                  <div className="pt-6 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] tracking-[0.2em] font-semibold text-slate-400 uppercase">
                      FORGE
                    </span>
                    <div className="flex-1 max-w-[80px]">
                      <div className="h-[1px] bg-slate-200 w-[35%] group-hover:w-[65%] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </div>
                    <button
                      type="button"
                      aria-label="Learn more about In-Person engagement"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Image Block (~38-40% width) */}
                <div className="relative w-full sm:w-[40%] min-h-[160px] sm:min-h-full overflow-hidden bg-slate-100">
                  <Image
                    src="/community/engagement/in_person_auditorium.png"
                    alt="In-person auditorium community session at FORGE"
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />
                </div>
              </div>

              {/* ── CARD 02: Online (Feature Anchor) ── */}
              <div
                ref={card2Ref}
                style={{ opacity: 0 }}
                className="group relative flex flex-col sm:flex-row bg-[#0B1528] rounded-[22px] border border-white/10 shadow-[0_12px_36px_rgba(11,21,40,0.25)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,77,230,0.18)] hover:border-blue-400/30 flex-1 min-h-[225px]"
              >
                {/* Left Text Block */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Number + Icon Badge */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-xs font-bold tracking-wider text-white/90">
                          02
                        </span>
                        <div className="w-4 h-[2px] bg-[#60A5FA] mt-1" aria-hidden="true" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#162744] text-[#60A5FA] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                        <Laptop className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Heading + Description */}
                    <h3 className="font-clash text-xl font-bold text-white tracking-tight mt-4 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                      Online
                    </h3>
                    <p className="font-jakarta text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                      Digital sessions, discussions, resource sharing, project coordination, and approved community activities.
                    </p>
                  </div>

                  {/* Bottom: FORGE Label, Divider, Arrow Button */}
                  <div className="pt-6 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] tracking-[0.2em] font-semibold text-white/40 uppercase">
                      FORGE
                    </span>
                    <div className="flex-1 max-w-[80px]">
                      <div className="h-[1px] bg-white/20 w-[35%] group-hover:w-[65%] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </div>
                    <button
                      type="button"
                      aria-label="Learn more about Online engagement"
                      className="w-8 h-8 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/10"
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Image Block (~38-40% width) */}
                <div className="relative w-full sm:w-[40%] min-h-[160px] sm:min-h-full overflow-hidden bg-slate-900">
                  <Image
                    src="/community/engagement/online_laptop.png"
                    alt="Online digital learning laptop display at FORGE"
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />
                </div>
              </div>
            </div>

            {/* SUB-COLUMN 2: Hybrid (Spanning Vertically) */}
            <div className="md:col-span-5 flex flex-col">
              {/* ── CARD 03: Hybrid ── */}
              <div
                ref={card3Ref}
                style={{ opacity: 0 }}
                className="group relative flex flex-col justify-between bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_42px_rgba(15,23,42,0.08)] hover:border-slate-300 h-full"
              >
                {/* Top Section: Number + Icon Badge + Heading + Description */}
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-slate-700">
                        03
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                      <Handshake className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-2xl font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                    Hybrid
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    Experiences combining online preparation with in-person learning, interaction, or demonstration.
                  </p>
                </div>

                {/* Middle Image Block: Compact Split Diagonal Visual */}
                <div className="relative w-full h-[175px] sm:h-[190px] rounded-2xl overflow-hidden my-5 bg-slate-100">
                  <Image
                    src="/community/engagement/hybrid_split.png"
                    alt="Hybrid community engagement: online collaboration with in-person demonstration"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />
                </div>

                {/* Bottom: FORGE Label, Divider, Arrow Button */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] font-semibold text-slate-400 uppercase">
                    FORGE
                  </span>
                  <div className="flex-1 max-w-[80px]">
                    <div className="h-[1px] bg-slate-200 w-[35%] group-hover:w-[65%] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </div>
                  <button
                    type="button"
                    aria-label="Learn more about Hybrid engagement"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
