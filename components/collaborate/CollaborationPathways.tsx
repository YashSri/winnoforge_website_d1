"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import type { StakeholderType } from "@/components/collaborate/CollaborateForm";

export interface PrimaryPathwayItem {
  id: string;
  number: string;
  title: string;
  audience: string;
  description: string;
  cta: string;
  stakeholder: StakeholderType;
  image?: string;
  imageAlt?: string;
}

export interface SecondaryPathwayItem {
  id: string;
  number: string;
  title: string;
  description: string;
  stakeholder: StakeholderType;
}

export const primaryPathways: PrimaryPathwayItem[] = [
  {
    id: "pathway-01",
    number: "01",
    title: "Institutional Collaboration",
    audience: "Schools, Colleges, Universities, and Training Institutions",
    description:
      "Work with FORGE to explore learning and innovation experiences aligned with your institution's learners, faculty, infrastructure, and goals.",
    cta: "Discuss Institutional Collaboration",
    stakeholder: "College / University",
    image: "/collaborate/pathway-institutional.jpg",
    imageAlt: "Indian university students collaborating with laptops on modern campus",
  },
  {
    id: "pathway-02",
    number: "02",
    title: "Industry and Corporate Collaboration",
    audience: "Companies, Startups, and Professional Teams",
    description:
      "Connect industry experience and real-world challenges with learners, institutions, and emerging builders.",
    cta: "Explore Industry Collaboration",
    stakeholder: "Company",
  },
  {
    id: "pathway-03",
    number: "03",
    title: "Mentor and Expert Collaboration",
    audience: "Professionals, Founders, Researchers, and Educators",
    description:
      "Share your experience, challenge assumptions, guide projects, and help participants develop stronger practical understanding.",
    cta: "Become a Mentor or Expert",
    stakeholder: "Mentor / Expert",
    image: "/collaborate/pathway-mentor.jpg",
    imageAlt: "Indian technology mentor guiding students around a workstation in innovation lab",
  },
  {
    id: "pathway-04",
    number: "04",
    title: "Founder and Venture Collaboration",
    audience: "Founders, Aspiring Entrepreneurs, and Early-Stage Teams",
    description:
      "Explore problem discovery, prototyping, validation, and ecosystem connections as you build.",
    cta: "Discuss a Founder Initiative",
    stakeholder: "Founder / Venture",
    image: "/collaborate/pathway-founder.jpg",
    imageAlt: "Young Indian founder presenting product architecture to innovator team",
  },
  {
    id: "pathway-05",
    number: "05",
    title: "Community and Event Collaboration",
    audience: "Communities, Clubs, Student Groups, and Event Organisers",
    description:
      "Create meaningful opportunities for people to learn, connect, collaborate, and share practical work.",
    cta: "Propose a Community Activity",
    stakeholder: "Community / Event",
    image: "/collaborate/pathway-community.jpg",
    imageAlt: "Indian college community tech conference and collaborative discussion",
  },
  {
    id: "pathway-06",
    number: "06",
    title: "Research and Innovation Collaboration",
    audience: "Researchers, Faculty Teams, and Organisations Exploring Applied Problems",
    description:
      "Explore applied research, technical experimentation, and cross-disciplinary collaboration.",
    cta: "Explore Research Collaboration",
    stakeholder: "Researcher",
  },
];

export const secondaryPathways: SecondaryPathwayItem[] = [
  {
    id: "sec-07",
    number: "07",
    title: "Colleges & Universities",
    description: "Build industry-aligned learning and innovation pathways on campus.",
    stakeholder: "College / University",
  },
  {
    id: "sec-08",
    number: "08",
    title: "Industry & Corporate Partners",
    description:
      "Engage with emerging talent, real problem statements, innovation projects, and hiring pathways.",
    stakeholder: "Company",
  },
  {
    id: "sec-09",
    number: "09",
    title: "Mentors & Experts",
    description:
      "Contribute through talks, workshops, reviews, mentorship, and industry insight.",
    stakeholder: "Mentor / Expert",
  },
  {
    id: "sec-10",
    number: "10",
    title: "CSR & Strategic Partners",
    description:
      "Support structured student development, innovation infrastructure, and measurable ecosystem outcomes.",
    stakeholder: "CSR / Strategic Partner",
  },
];

export default function CollaborationPathways({
  onSelect,
}: {
  onSelect: (stakeholder: StakeholderType) => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  const handleClick = (stakeholder: StakeholderType) => {
    onSelect(stakeholder);
  };

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set([headerRef.current, gridRef.current, secondaryRef.current], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      // Entrance animation on mount/scroll
      const tl = gsap.timeline({
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.75 }
      )
        .fromTo(
          ".collab-card-item",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.07 },
          "-=0.45"
        )
        .fromTo(
          ".collab-image-reveal",
          { clipPath: "inset(0 100% 0 0)", scale: 1.03, opacity: 0.4 },
          { clipPath: "inset(0 0 0 0)", scale: 1.0, opacity: 1, duration: 0.95, stagger: 0.1 },
          "-=0.7"
        )
        .fromTo(
          ".collab-sec-item",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.06 },
          "-=0.5"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="collaboration-pathways"
      aria-label="Collaboration Pathways"
      className="relative w-full overflow-hidden bg-[#FBFBFD] py-16 md:py-24 lg:py-28"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. AMBIENT BACKGROUND ELEMENTS
          Subtle vector curves and fine editorial lines
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        <svg
          className="animate-ambient-arc absolute -top-24 left-1/2 h-[800px] w-[1400px] -translate-x-1/2 opacity-40"
          viewBox="0 0 1400 800"
          fill="none"
        >
          <path
            d="M 200 100 C 450 0, 950 150, 1200 450 C 1350 650, 1100 780, 850 780"
            stroke="#0052FF"
            strokeWidth="0.75"
            strokeDasharray="4 6"
            className="opacity-25"
          />
          <path
            d="M 1200 50 C 1000 250, 600 400, 250 650"
            stroke="#CBD5E1"
            strokeWidth="0.6"
            className="opacity-35"
          />
        </svg>

        <div className="animate-ambient-circle absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full border border-[#0052FF]/10 pointer-events-none" />
        <div className="animate-ambient-dot absolute top-[45%] left-[28%] h-2 w-2 rounded-full bg-[#0052FF]/40 pointer-events-none" />
      </div>

      <div className="relative mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            2. SECTION HEADER WITH SWISS LABELS
            - Eyebrow: COLLABORATION PATHWAYS
            - Headline: "How Would You Like to Collaborate?"
            - Supporting text
            - Top-left label: PEOPLE / IDEAS / PROGRESS / BELONG HERE.
            - Top-right label: FROM / COLLABORATION / TO IMPACT. + Asterisk glyph
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div ref={headerRef} className="relative mb-12 md:mb-16">
          {/* Top-left decorative label (desktop) */}
          <div className="absolute left-0 top-0 hidden items-start gap-2.5 lg:flex">
            <div className="h-10 w-[1px] bg-slate-300" />
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

          {/* Top-right decorative label with blue asterisk glyph (desktop) */}
          <div className="absolute right-0 top-0 hidden items-center gap-3 lg:flex">
            {/* Crisp 8-pointed geometric blue asterisk */}
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
            <div className="h-10 w-[1px] bg-slate-300" />
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 leading-[1.6] text-left">
              <span>FROM</span>
              <br />
              <span>COLLABORATION</span>
              <br />
              <span className="font-semibold text-slate-600">TO IMPACT.</span>
            </div>
          </div>

          {/* Centered Headings */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="font-jakarta text-xs sm:text-sm font-bold uppercase tracking-[0.26em] text-[#0052FF]">
              Collaboration Pathways
            </span>

            <h2 className="mt-3.5 font-jakarta font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.1] text-[#0D1117]">
              <span>How Would You Like </span>
              <span className="block sm:inline">to </span>
              <span className="text-[#0052FF]">Collaborate?</span>
            </h2>

            <p className="mt-4 max-w-2xl font-jakarta text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed font-normal">
              Different partners. A shared mission. Explore the ways you can work with FORGE to
              create real opportunities, real solutions, and real impact.
            </p>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            3. ASYMMETRIC EDITORIAL GRID (PATHWAYS 01 TO 06)
            Row 1: [01 + IMAGE] [02] [03 + IMAGE]
            Row 2: [IMAGE] [04] [05] [IMAGE + 06]
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div ref={gridRef} className="space-y-5 sm:space-y-6">
          
          {/* ════════════════════════════════════════════
              ROW 1:
              - Unit 01 (Collab 01 + Image 01): ~42%
              - Card 02 (Industry): ~24%
              - Unit 03 (Mentor 03 + Image 02): ~34%
              ════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[4.15fr_2.35fr_3.5fr]">
            
            {/* UNIT 01: Institutional Collaboration + Image 01 */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick(primaryPathways[0].stakeholder)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(primaryPathways[0].stakeholder)}
              className="collab-card-item group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#0052FF]/40 hover:shadow-[0_16px_36px_rgba(0,82,255,0.08)] cursor-pointer md:flex-row"
            >
              {/* Card 01 Content */}
              <div className="flex flex-col justify-between p-6 sm:p-7 md:w-[48%]">
                <div>
                  {/* Number & Horizontal Line */}
                  <div className="flex items-center gap-2.5">
                    <span className="font-jakarta text-xs sm:text-sm font-bold tracking-widest text-[#0052FF]">
                      01
                    </span>
                    <div className="h-[1px] w-7 bg-slate-300 transition-colors group-hover:bg-[#0052FF]" />
                  </div>

                  <h3 className="mt-3.5 font-jakarta text-lg sm:text-xl font-bold tracking-tight text-[#0D1117] leading-snug">
                    Institutional Collaboration
                  </h3>

                  <div className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 leading-relaxed">
                    Schools, Colleges, Universities, and Training Institutions
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Work with FORGE to explore learning and innovation experiences aligned with your
                    institution&apos;s learners, faculty, infrastructure, and goals.
                  </p>
                </div>

                {/* Circular Arrow Button */}
                <div className="mt-6 flex items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF]">
                    <ArrowRight className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Image 01 Panel */}
              <div className="collab-image-reveal relative aspect-[16/10] md:aspect-auto md:w-[52%] overflow-hidden bg-slate-100">
                <Image
                  src="/collaborate/pathway-institutional.jpg"
                  alt={primaryPathways[0].imageAlt || "Institutional Collaboration"}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </div>

            {/* CARD 02: Industry and Corporate Collaboration */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick(primaryPathways[1].stakeholder)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(primaryPathways[1].stakeholder)}
              className="collab-card-item group relative flex flex-col justify-between rounded-[24px] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#0052FF]/40 hover:shadow-[0_16px_36px_rgba(0,82,255,0.08)] cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-jakarta text-xs sm:text-sm font-bold tracking-widest text-[#0052FF]">
                    02
                  </span>
                  <div className="h-[1px] w-7 bg-slate-300 transition-colors group-hover:bg-[#0052FF]" />
                </div>

                <h3 className="mt-3.5 font-jakarta text-lg sm:text-xl font-bold tracking-tight text-[#0D1117] leading-snug">
                  Industry and Corporate Collaboration
                </h3>

                <div className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 leading-relaxed">
                  Companies, Startups, and Professional Teams
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Connect industry experience and real-world challenges with learners, institutions,
                  and emerging builders.
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF]">
                  <ArrowRight className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* UNIT 03: Mentor and Expert Collaboration + Image 02 */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick(primaryPathways[2].stakeholder)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(primaryPathways[2].stakeholder)}
              className="collab-card-item group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#0052FF]/40 hover:shadow-[0_16px_36px_rgba(0,82,255,0.08)] cursor-pointer md:flex-row"
            >
              {/* Card 03 Content */}
              <div className="flex flex-col justify-between p-6 sm:p-7 md:w-[52%]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-jakarta text-xs sm:text-sm font-bold tracking-widest text-[#0052FF]">
                      03
                    </span>
                    <div className="h-[1px] w-7 bg-slate-300 transition-colors group-hover:bg-[#0052FF]" />
                  </div>

                  <h3 className="mt-3.5 font-jakarta text-lg sm:text-xl font-bold tracking-tight text-[#0D1117] leading-snug">
                    Mentor and Expert Collaboration
                  </h3>

                  <div className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 leading-relaxed">
                    Professionals, Founders, Researchers, and Educators
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Share your experience, challenge assumptions, guide projects, and help participants
                    develop stronger practical understanding.
                  </p>
                </div>

                <div className="mt-6 flex items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF]">
                    <ArrowRight className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Image 02 Panel */}
              <div className="collab-image-reveal relative aspect-[16/10] md:aspect-auto md:w-[48%] overflow-hidden bg-slate-100">
                <Image
                  src="/collaborate/pathway-mentor.jpg"
                  alt={primaryPathways[2].imageAlt || "Mentor and Expert Collaboration"}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </div>

          </div>

          {/* ════════════════════════════════════════════
              ROW 2:
              - Standalone Image 03 (Founder presentation + Blue wedge): ~21%
              - Card 04 (Founder and Venture): ~21%
              - Card 05 (Community and Event): ~21%
              - Unit 06 (Image 04 + Card 06 Research): ~37%
              ════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[2.1fr_2.15fr_2.15fr_3.6fr]">
            
            {/* STANDALONE IMAGE 03 PANEL with blue accent wedge */}
            <div className="collab-card-item group relative hidden overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] lg:block">
              {/* Flat Cobalt Blue Polygon Accent peeking from left */}
              <div
                aria-hidden="true"
                className="absolute -left-3 top-1/3 z-10 h-16 w-8 bg-[#0052FF] rounded-r-md transition-transform duration-500 group-hover:translate-x-1"
              />

              <div className="collab-image-reveal relative h-full w-full min-h-[300px] overflow-hidden">
                <Image
                  src="/collaborate/pathway-founder.jpg"
                  alt="Young Indian startup founder presenting idea"
                  fill
                  sizes="25vw"
                  className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </div>

            {/* CARD 04: Founder and Venture Collaboration */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick(primaryPathways[3].stakeholder)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(primaryPathways[3].stakeholder)}
              className="collab-card-item group relative flex flex-col justify-between rounded-[24px] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#0052FF]/40 hover:shadow-[0_16px_36px_rgba(0,82,255,0.08)] cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-jakarta text-xs sm:text-sm font-bold tracking-widest text-[#0052FF]">
                    04
                  </span>
                  <div className="h-[1px] w-7 bg-slate-300 transition-colors group-hover:bg-[#0052FF]" />
                </div>

                <h3 className="mt-3.5 font-jakarta text-lg sm:text-xl font-bold tracking-tight text-[#0D1117] leading-snug">
                  Founder and Venture Collaboration
                </h3>

                <div className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 leading-relaxed">
                  Founders, Aspiring Entrepreneurs, and Early-Stage Teams
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Explore problem discovery, prototyping, validation, and ecosystem connections as
                  you build.
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF]">
                  <ArrowRight className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* CARD 05: Community and Event Collaboration */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick(primaryPathways[4].stakeholder)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(primaryPathways[4].stakeholder)}
              className="collab-card-item group relative flex flex-col justify-between rounded-[24px] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#0052FF]/40 hover:shadow-[0_16px_36px_rgba(0,82,255,0.08)] cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-jakarta text-xs sm:text-sm font-bold tracking-widest text-[#0052FF]">
                    05
                  </span>
                  <div className="h-[1px] w-7 bg-slate-300 transition-colors group-hover:bg-[#0052FF]" />
                </div>

                <h3 className="mt-3.5 font-jakarta text-lg sm:text-xl font-bold tracking-tight text-[#0D1117] leading-snug">
                  Community and Event Collaboration
                </h3>

                <div className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 leading-relaxed">
                  Communities, Clubs, Student Groups, and Event Organisers
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Create meaningful opportunities for people to learn, connect, collaborate, and share
                  practical work.
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF]">
                  <ArrowRight className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* UNIT 06: Image 04 + Card 06 Research and Innovation */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick(primaryPathways[5].stakeholder)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(primaryPathways[5].stakeholder)}
              className="collab-card-item group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#0052FF]/40 hover:shadow-[0_16px_36px_rgba(0,82,255,0.08)] cursor-pointer md:flex-row"
            >
              {/* Image 04 Panel with bottom-left blue wedge */}
              <div className="collab-image-reveal relative aspect-[16/10] md:aspect-auto md:w-[46%] overflow-hidden bg-slate-100">
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 z-10 h-7 w-14 bg-[#0052FF] transition-transform duration-500 group-hover:translate-y-[-2px]"
                  style={{
                    clipPath: "polygon(0 30%, 100% 100%, 0% 100%)",
                  }}
                />
                <Image
                  src="/collaborate/pathway-community.jpg"
                  alt="Community innovation space conference and tech collaboration"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-[1.025]"
                />
              </div>

              {/* Card 06 Content */}
              <div className="flex flex-col justify-between p-6 sm:p-7 md:w-[54%]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-jakarta text-xs sm:text-sm font-bold tracking-widest text-[#0052FF]">
                      06
                    </span>
                    <div className="h-[1px] w-7 bg-slate-300 transition-colors group-hover:bg-[#0052FF]" />
                  </div>

                  <h3 className="mt-3.5 font-jakarta text-lg sm:text-xl font-bold tracking-tight text-[#0D1117] leading-snug">
                    Research and Innovation Collaboration
                  </h3>

                  <div className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 leading-relaxed">
                    Researchers, Faculty Teams, and Organisations Exploring Applied Problems
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Explore applied research, technical experimentation, and cross-disciplinary
                    collaboration.
                  </p>
                </div>

                <div className="mt-6 flex items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF]">
                    <ArrowRight className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            4. SECONDARY PATHWAY ROW (PATHWAYS 07 TO 10)
            Four compact horizontal editorial tiles:
            07 — Colleges & Universities
            08 — Industry & Corporate Partners
            09 — Mentors & Experts
            10 — CSR & Strategic Partners
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div
          ref={secondaryRef}
          className="mt-6 md:mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {secondaryPathways.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => handleClick(item.stakeholder)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(item.stakeholder)}
              className="collab-sec-item group relative flex items-center justify-between gap-4 rounded-[20px] border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0052FF]/40 hover:shadow-[0_12px_28px_rgba(0,82,255,0.06)] cursor-pointer"
            >
              <div className="flex flex-col pr-2">
                <div className="flex items-center gap-2">
                  <span className="font-jakarta text-xs font-bold tracking-widest text-[#0052FF]">
                    {item.number}
                  </span>
                  <span className="text-[10px] text-[#0052FF]/50">•</span>
                  <div className="h-[1px] w-6 bg-slate-300 transition-colors group-hover:bg-[#0052FF]" />
                </div>

                <h4 className="mt-2 font-jakarta text-sm sm:text-base font-bold text-[#0D1117] leading-snug">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action arrow button */}
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0052FF]/20 text-[#0052FF] transition-all duration-300 group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF]">
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
