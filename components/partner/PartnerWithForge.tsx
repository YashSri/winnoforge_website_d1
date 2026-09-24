"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Briefcase,
  GraduationCap,
  Handshake,
  Lightbulb,
  Trophy,
  UserSearch,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useModal } from "@/components/modal/ModalContext";

export type PartnerTab = "institutions" | "industry";

export interface PartnerOfferingItem {
  number: string;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  image: string;
  alt: string;
}

export const partnerInstitutionItems: PartnerOfferingItem[] = [
  {
    number: "01",
    title: "On-Campus Training",
    description: "Structured, execution-led training delivered directly on your campus.",
    icon: GraduationCap,
    image: "/partner/inst-card-01.jpg",
    alt: "Indian technology educator conducting execution-focused workshop with students",
  },
  {
    number: "02",
    title: "Certifications & Credentialing",
    description: "Industry-backed certification tracks your students can enroll in.",
    icon: BadgeCheck,
    image: "/partner/inst-card-02.jpg",
    alt: "University students collaborating with laptops during technology certification session",
  },
  {
    number: "03",
    title: "Workshops & Bootcamps",
    description: "Short, high-intensity sessions that introduce students to real building.",
    icon: Users,
    image: "/partner/inst-card-03.jpg",
    alt: "Students and mentor collaborating around prototypes and laptops in innovation hub",
  },
  {
    number: "04",
    title: "Faculty Development Programs",
    description: "Upskilling tracks for faculty to bring execution-led teaching into the classroom.",
    icon: Building2,
    image: "/partner/inst-card-04.jpg",
    alt: "Educators and faculty members collaborating during technology development session",
  },
  {
    number: "05",
    title: "Hackathons & Innovation Challenges",
    description: "Campus-wide events that surface builders and feed the FORGE pipeline.",
    icon: Trophy,
    image: "/partner/inst-card-05.jpg",
    alt: "University students building and collaborating during technology hackathon",
  },
];

export const partnerIndustryItems: PartnerOfferingItem[] = [
  {
    number: "01",
    title: "Problem Statement Sourcing",
    description: "Bring real business problems to FORGE builders instead of hypothetical case studies.",
    icon: Lightbulb,
    image: "/partner/ind-card-01.jpg",
    alt: "Technology professionals and young builders discussing real business problem",
  },
  {
    number: "02",
    title: "Talent Pipeline Access",
    description: "Direct visibility into builders who have already shipped real products.",
    icon: UserSearch,
    image: "/partner/ind-card-02.jpg",
    alt: "Young software builders presenting working digital product to industry leaders",
  },
  {
    number: "03",
    title: "Mentor Network Participation",
    description: "Your team mentors builders directly, staying close to emerging talent.",
    icon: Handshake,
    image: "/partner/ind-card-03.jpg",
    alt: "Experienced technology professional mentoring small team around laptops",
  },
  {
    number: "04",
    title: "Co-Branded Programs",
    description: "Joint certification or training tracks branded with your organization.",
    icon: Briefcase,
    image: "/partner/ind-card-04.jpg",
    alt: "Technology leader presenting structured corporate innovation program",
  },
  {
    number: "05",
    title: "Corporate Hackathons",
    description: "FORGE runs hackathons around your problem statements and brand.",
    icon: Trophy,
    image: "/partner/ind-card-05.jpg",
    alt: "Diverse technology team participating in corporate hackathon",
  },
];

export default function PartnerWithForge() {
  const [activeTab, setActiveTab] = useState<PartnerTab>("institutions");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { open } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  const isInstitutions = activeTab === "institutions";
  const currentOfferings = isInstitutions ? partnerInstitutionItems : partnerIndustryItems;

  const handleActionClick = () => {
    const formElement = document.getElementById("collaborate-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      open("partner");
    }
  };

  const handleTabSwitch = (newTab: PartnerTab) => {
    if (newTab === activeTab || isTransitioning) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setActiveTab(newTab);
      return;
    }

    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveTab(newTab);
        setIsTransitioning(false);
      },
    });

    // Step 1: Current cards fade & translate upward 12px
    tl.to(".partner-feature-card", {
      opacity: 0,
      y: -12,
      scale: 0.98,
      duration: 0.24,
      stagger: 0.03,
      ease: "power2.in",
    }).to(
      heroImageRef.current,
      {
        opacity: 0.6,
        scale: 0.98,
        duration: 0.22,
        ease: "power2.in",
      },
      "-=0.2"
    );
  };

  // Animate in new cards when tab changes
  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set([".partner-feature-card", heroImageRef.current], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      gsap.fromTo(
        ".partner-feature-card",
        { opacity: 0, y: 14, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        }
      );

      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0.6, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        }
      );
    },
    { dependencies: [activeTab], scope: sectionRef }
  );

  // Initial Entrance Animation on Viewport Load
  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set(
          [
            ".partner-reveal-eyebrow",
            ".partner-reveal-heading",
            ".partner-reveal-copy",
            ".partner-reveal-cta",
            heroImageRef.current,
            ".partner-feature-card",
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          }
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      tl.fromTo(
        ".partner-reveal-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".partner-reveal-heading",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.4"
        )
        .fromTo(
          ".partner-reveal-copy",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".partner-reveal-cta",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          heroImageRef.current,
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          ".partner-feature-card",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
          "-=0.7"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="partner-with-forge"
      aria-label="Partner With FORGE"
      className="relative w-full overflow-hidden bg-[#FBFBFD] py-16 md:py-24 lg:py-28"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. AMBIENT BACKGROUND ELEMENTS
          Delicate, slow moving editorial arcs & dots (20-40s loop)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        <svg
          className="animate-ambient-arc absolute -top-16 left-1/2 h-[750px] w-[1300px] -translate-x-1/2 opacity-35"
          viewBox="0 0 1300 750"
          fill="none"
        >
          <path
            d="M 150 50 C 400 20, 800 220, 1150 480 C 1250 600, 1100 720, 900 730"
            stroke="#0052FF"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            className="opacity-25"
          />
          <path
            d="M 1150 40 C 950 200, 500 350, 180 600"
            stroke="#CBD5E1"
            strokeWidth="0.6"
            className="opacity-30"
          />
        </svg>

        <div className="animate-ambient-circle absolute top-1/4 -right-28 h-[480px] w-[480px] rounded-full border border-[#0052FF]/10 pointer-events-none" />
        <div className="animate-ambient-dot absolute top-[36%] left-[30%] h-2 w-2 rounded-full bg-[#0052FF]/40 pointer-events-none" />
      </div>

      <div className="relative mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            2. TOP HEADER ROW (TOGGLE PILL + DECORATIVE GLYPH)
            - Segmented Toggle: [ For Institutions ] [ For Industry ]
            - Top-Right: Asterisk glyph + PEOPLE / IDEAS / PROGRESS / BELONG HERE.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row lg:mb-12">
          {/* Segmented Toggle Pill */}
          <div className="mx-auto inline-flex items-center rounded-full border border-slate-200/90 bg-white p-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] lg:ml-auto lg:mr-0">
            <button
              type="button"
              onClick={() => handleTabSwitch("institutions")}
              className={`rounded-full px-5 py-2 font-jakarta text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isInstitutions
                  ? "bg-[#0052FF] text-white shadow-[0_4px_16px_rgba(0,82,255,0.28)]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              For Institutions
            </button>
            <button
              type="button"
              onClick={() => handleTabSwitch("industry")}
              className={`rounded-full px-5 py-2 font-jakarta text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                !isInstitutions
                  ? "bg-[#0052FF] text-white shadow-[0_4px_16px_rgba(0,82,255,0.28)]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              For Industry
            </button>
          </div>

          {/* Top-Right Decorative Editorial Mark & Label (desktop) */}
          <div className="hidden items-center gap-3 lg:flex">
            <svg
              className="h-6 w-6 text-[#0052FF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
            </svg>
            <div className="h-9 w-[1px] bg-slate-300" />
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 leading-[1.6]">
              <span>PEOPLE</span>
              <br />
              <span>IDEAS</span>
              <br />
              <span>PROGRESS</span>
              <br />
              <span className="font-semibold text-slate-600">BELONG HERE.</span>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            3. MAIN TWO-COLUMN SPLIT LAYOUT
            Left Column: Editorial Intro & Large Photographic Composition
            Right Column: Asymmetric Feature Card Grid (2 on top, 3 on bottom)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* ──────────────────────────────────────────
              LEFT SIDE: EDITORIAL INTRO & MAIN PHOTO COMPOSITION
              ────────────────────────────────────────── */}
          <div ref={leftColRef} className="lg:col-span-4 xl:col-span-3.5 flex flex-col justify-between">
            <div>
              {/* Eyebrow with horizontal line */}
              <div className="partner-reveal-eyebrow flex items-center gap-2.5">
                <div className="h-[1.5px] w-6 bg-[#0052FF]" />
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                  {isInstitutions ? "PARTNER" : "INDUSTRY"}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="partner-reveal-heading mt-4 font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.05] text-[#0D1117]">
                <span>Partner</span>
                <br />
                <span>With </span>
                <span className="text-[#0052FF]">FORGE.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="partner-reveal-copy mt-5 font-jakarta text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {isInstitutions
                  ? "Collaborate with FORGE to build stronger learning ecosystems through execution-led education, innovation, and industry-connected opportunities."
                  : "Collaborate with FORGE to access emerging talent, solve real business challenges, and create measurable impact through innovation and execution."}
              </p>

              {/* Minimal Circular Arrow CTA & Editorial Statement */}
              <div className="partner-reveal-cta mt-8 flex items-center gap-4 sm:gap-5">
                <button
                  type="button"
                  onClick={handleActionClick}
                  aria-label="Partner with FORGE Action"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-xs transition-all duration-300 hover:scale-105 hover:border-[#0052FF] hover:bg-[#0052FF] hover:text-white cursor-pointer"
                >
                  <ArrowRight className="h-5 w-5 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>

                {/* 4-Line Small Tracked-Out Editorial Statement */}
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 leading-[1.6]">
                  {isInstitutions ? (
                    <>
                      <div>IDEAS</div>
                      <div>TALENT</div>
                      <div>OPPORTUNITIES</div>
                      <div className="text-slate-600">REAL IMPACT.</div>
                    </>
                  ) : (
                    <>
                      <div>INNOVATION</div>
                      <div>TALENT</div>
                      <div>SOLUTIONS</div>
                      <div className="text-slate-600">REAL IMPACT.</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Main Editorial Photographic Composition */}
            <div className="mt-10 lg:mt-12">
              <div
                ref={heroImageRef}
                className="group relative mx-auto w-full max-w-[380px] lg:max-w-none"
              >
                {/* Cobalt Blue Geometric Polygon Wedge Layer Behind */}
                <div
                  aria-hidden="true"
                  className={`absolute z-0 bg-[#0052FF] transition-transform duration-500 ease-out group-hover:scale-105 ${
                    isInstitutions
                      ? "-top-3 -right-3 h-28 w-28 sm:h-32 sm:w-32 rounded-tr-xl"
                      : "-bottom-3 -left-3 h-28 w-28 sm:h-32 sm:w-32 rounded-bl-xl"
                  }`}
                  style={{
                    clipPath: isInstitutions
                      ? "polygon(30% 0%, 100% 15%, 70% 100%, 0% 85%)"
                      : "polygon(0% 25%, 100% 0%, 80% 100%, 0% 75%)",
                  }}
                />

                {/* Main Image Masked Frame */}
                <div
                  className="relative z-10 w-full overflow-hidden rounded-[20px] shadow-[0_16px_36px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  style={{
                    clipPath: isInstitutions
                      ? "polygon(0% 25%, 85% 0%, 100% 75%, 15% 100%)"
                      : "polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%)",
                  }}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={
                        isInstitutions
                          ? "/partner/inst-main-hero.jpg"
                          : "/partner/ind-main-hero.jpg"
                      }
                      alt={
                        isInstitutions
                          ? "Campus Innovation & Learning with FORGE"
                          : "Industry Professionals Collaborating on Real Problems"
                      }
                      fill
                      sizes="(max-width: 1024px) 380px, 28vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* Bottom Editorial Label */}
                <div className="mt-4 flex items-start gap-2.5 pl-1">
                  <div className="h-8 w-[1px] bg-slate-300" />
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 leading-[1.6]">
                    <span>FROM</span>
                    <br />
                    <span>
                      {isInstitutions ? "COLLABORATION" : "INDUSTRY NEEDS"}
                    </span>
                    <br />
                    <span className="font-semibold text-slate-600">
                      {isInstitutions ? "TO OPPORTUNITY." : "TO GLOBAL IMPACT."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ──────────────────────────────────────────
              RIGHT SIDE: ASYMMETRIC FEATURE CARD GRID
              Top Row: Card 01 + Card 02 (2 large cards)
              Bottom Row: Card 03 + Card 04 + Card 05 (3 narrower cards)
              ────────────────────────────────────────── */}
          <div ref={cardsContainerRef} className="lg:col-span-8 xl:col-span-8.5 space-y-5 sm:space-y-6">
            
            {/* TOP ROW: 2 Larger Cards (50% each on desktop) */}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {currentOfferings.slice(0, 2).map((offering) => {
                const Icon = offering.icon;
                return (
                  <div
                    key={offering.number + offering.title}
                    role="button"
                    tabIndex={0}
                    onClick={handleActionClick}
                    onKeyDown={(e) => e.key === "Enter" && handleActionClick()}
                    className="partner-feature-card group relative flex flex-row items-stretch justify-between overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-[#0052FF]/40 hover:shadow-[0_16px_36px_rgba(0,82,255,0.08)] cursor-pointer min-h-[220px] sm:min-h-[230px]"
                  >
                    {/* Left Text Content */}
                    <div className="flex flex-col justify-between p-5 sm:p-6 w-[52%] sm:w-[54%]">
                      <div>
                        {/* Number, Line & Icon Badge */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-jakarta text-xs sm:text-sm font-bold tracking-widest text-[#0052FF]">
                              {offering.number}
                            </span>
                            <div className="h-[1px] w-6 bg-slate-300 transition-all duration-300 group-hover:w-10 group-hover:bg-[#0052FF]" />
                          </div>

                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0052FF]/10 text-[#0052FF] transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-4 w-4 stroke-[2.2]" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="mt-3.5 font-jakarta text-base sm:text-lg font-bold text-[#0D1117] leading-snug transition-transform duration-300 group-hover:translate-x-1">
                          {offering.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                          {offering.description}
                        </p>
                      </div>

                      {/* Action Circular Button */}
                      <div className="mt-5 flex items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF] group-hover:rotate-45">
                          <ArrowRight className="h-3.5 w-3.5 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Right Image with Swiss Editorial Cut */}
                    <div
                      className="relative w-[48%] sm:w-[46%] overflow-hidden bg-slate-100"
                      style={{
                        clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      }}
                    >
                      <Image
                        src={offering.image}
                        alt={offering.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BOTTOM ROW: 3 Slightly Narrower Cards (33.3% each on desktop) */}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentOfferings.slice(2, 5).map((offering) => {
                const Icon = offering.icon;
                return (
                  <div
                    key={offering.number + offering.title}
                    role="button"
                    tabIndex={0}
                    onClick={handleActionClick}
                    onKeyDown={(e) => e.key === "Enter" && handleActionClick()}
                    className="partner-feature-card group relative flex flex-row items-stretch justify-between overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-[#0052FF]/40 hover:shadow-[0_16px_36px_rgba(0,82,255,0.08)] cursor-pointer min-h-[220px] sm:min-h-[230px]"
                  >
                    {/* Left Text Content */}
                    <div className="flex flex-col justify-between p-5 sm:p-5.5 w-[54%]">
                      <div>
                        {/* Number, Line & Icon Badge */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-jakarta text-xs sm:text-sm font-bold tracking-widest text-[#0052FF]">
                              {offering.number}
                            </span>
                            <div className="h-[1px] w-5 bg-slate-300 transition-all duration-300 group-hover:w-8 group-hover:bg-[#0052FF]" />
                          </div>

                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0052FF]/10 text-[#0052FF] transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-3.5 w-3.5 stroke-[2.2]" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="mt-3 font-jakarta text-sm sm:text-base font-bold text-[#0D1117] leading-snug transition-transform duration-300 group-hover:translate-x-1">
                          {offering.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-1.5 font-jakarta text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                          {offering.description}
                        </p>
                      </div>

                      {/* Action Circular Button */}
                      <div className="mt-4 flex items-center">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF] group-hover:rotate-45">
                          <ArrowRight className="h-3 w-3 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Right Image with Swiss Editorial Cut */}
                    <div
                      className="relative w-[46%] overflow-hidden bg-slate-100"
                      style={{
                        clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      }}
                    >
                      <Image
                        src={offering.image}
                        alt={offering.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
