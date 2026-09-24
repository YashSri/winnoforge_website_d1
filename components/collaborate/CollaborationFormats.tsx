"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export interface CollaborationFormatItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const collaborationFormats: CollaborationFormatItem[] = [
  {
    id: "format-01",
    number: "01",
    tag: "01 / CAMPUS PROGRAM",
    title: "Campus Program",
    description: "A structured learning or innovation experience delivered with an institution.",
    image: "/formats/format-01.jpg",
    alt: "Diverse Indian university students collaborating on innovation project on campus",
  },
  {
    id: "format-02",
    number: "02",
    tag: "02 / WORKSHOP OR MASTERCLASS",
    title: "Workshop or Masterclass",
    description: "A focused session led by an approved mentor, expert, trainer, or practitioner.",
    image: "/formats/format-02.jpg",
    alt: "Expert leading engaging technology workshop for Indian university students",
  },
  {
    id: "format-03",
    number: "03",
    tag: "03 / INDUSTRY CHALLENGE",
    title: "Industry Challenge",
    description: "A practical problem or challenge presented to participants for exploration and solution development.",
    image: "/formats/format-03.jpg",
    alt: "Team of young Indian builders working with industry professional on challenge",
  },
  {
    id: "format-04",
    number: "04",
    tag: "04 / INNOVATION SHOWCASE",
    title: "Innovation Showcase",
    description: "A platform for presenting approved projects, prototypes, research, or ideas.",
    image: "/formats/format-04.jpg",
    alt: "Indian student innovators presenting technology prototypes to mentors",
  },
  {
    id: "format-05",
    number: "05",
    tag: "05 / MENTORSHIP SERIES",
    title: "Mentorship Series",
    description: "A structured sequence of guidance, feedback, and learning interactions.",
    image: "/formats/format-05.jpg",
    alt: "Experienced technology mentor having focused discussion with young builder",
  },
  {
    id: "format-06",
    number: "06",
    tag: "06 / FACULTY DEVELOPMENT SESSION",
    title: "Faculty Development Session",
    description: "An experience designed to support educators and institutional teams.",
    image: "/formats/format-06.jpg",
    alt: "Indian educators participating in modern professional development session",
  },
  {
    id: "format-07",
    number: "07",
    tag: "07 / COMMUNITY EVENT",
    title: "Community Event",
    description: "A workshop, discussion, panel, meetup, or collaborative activity.",
    image: "/formats/format-07.jpg",
    alt: "Diverse Indian technology community gathered for collaborative event",
  },
  {
    id: "format-08",
    number: "08",
    tag: "08 / APPLIED PROJECT",
    title: "Applied Project",
    description: "A practical project developed around a confirmed problem, objective, or learning goal.",
    image: "/formats/format-08.jpg",
    alt: "Student project team building and testing real-world technology prototype",
  },
  {
    id: "format-09",
    number: "09",
    tag: "09 / RESEARCH OR EXPERIMENTATION INITIATIVE",
    title: "Research or Experimentation Initiative",
    description: "A collaboration focused on exploring a defined question, problem, or technical possibility.",
    image: "/formats/format-09.jpg",
    alt: "Young researchers and builders experimenting in modern innovation laboratory",
  },
];

interface CollaborationFormatsProps {
  onSelectFormat?: (formatTitle: string) => void;
}

export default function CollaborationFormats({ onSelectFormat }: CollaborationFormatsProps) {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  const handleExplore = (title: string) => {
    if (onSelectFormat) {
      onSelectFormat(title);
    }
    const formEl = document.getElementById("collaborate-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="collaboration-formats"
      className="relative w-full overflow-hidden bg-[#F7F8FC] py-20 md:py-28 lg:py-32 select-none"
      aria-label="Possible Collaboration Formats"
    >
      {/* ========================================================
          BACKGROUND: AMBIENT FORGE GEOMETRICS (2D RESTILLED)
      ======================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Large thin circular outline — Top Left */}
        <div
          className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full border border-[#0052FF]/[0.08] animate-ambient-circle"
          style={{ willChange: "transform" }}
        />

        {/* Large thin circular outline — Top Right */}
        <div
          className="absolute -top-40 -right-24 h-[560px] w-[560px] rounded-full border border-[#0052FF]/[0.07] animate-ambient-arc"
          style={{ willChange: "transform" }}
        />

        {/* Subtle circular outline — Bottom Right */}
        <div
          className="absolute -bottom-36 right-10 h-[440px] w-[440px] rounded-full border border-[#0052FF]/[0.06] animate-ambient-circle"
          style={{ willChange: "transform" }}
        />

        {/* Royal Blue Accent Dots */}
        <div
          className="absolute top-16 right-[14%] h-2.5 w-2.5 rounded-full bg-[#0052FF] animate-ambient-dot"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute top-[48%] left-8 h-2.5 w-2.5 rounded-full bg-[#0052FF] animate-ambient-dot"
          style={{ animationDuration: "16s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[22%] right-6 h-2 w-2 rounded-full bg-[#0052FF] animate-ambient-dot"
          style={{ animationDuration: "14s", animationDelay: "4s" }}
        />

        {/* Subtle Light-Blue Geometric SVG Lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -100 240 C 300 180, 700 320, 1500 200"
            fill="none"
            stroke="#0052FF"
            strokeWidth="0.75"
            strokeDasharray="4 8"
            strokeOpacity="0.12"
          />
          <path
            d="M 100 800 C 600 700, 1100 840, 1600 740"
            fill="none"
            stroke="#0052FF"
            strokeWidth="0.75"
            strokeDasharray="6 10"
            strokeOpacity="0.1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 md:px-10 lg:px-12">
        {/* ========================================================
            SECTION HEADER LOCKUP (APPLE × SWISS EDITORIAL)
        ======================================================== */}
        <div className="relative">
          {/* Editorial Left Side Note (Desktop only) */}
          <div className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 items-start gap-3 text-left">
            <span className="h-14 w-[1.5px] bg-[#D9DEE7]" />
            <div className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5F6672] leading-[1.45]">
              IDEAS
              <br />
              PEOPLE
              <br />
              OPPORTUNITIES
              <br />
              REAL IMPACT.
            </div>
          </div>

          {/* Editorial Right Side Note (Desktop only) */}
          <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 items-start gap-3 text-left">
            <span className="h-14 w-[1.5px] bg-[#D9DEE7]" />
            <div className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5F6672] leading-[1.45]">
              COLLABORATION
              <br />
              TURNS IDEAS
              <br />
              INTO IMPACT.
            </div>
          </div>

          {/* Center Heading Block */}
          <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-3.5 text-center">
            {/* Subtle Eyebrow */}
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-[1px] w-6 sm:w-10 bg-[#0052FF]/30" />
              <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#0052FF]">
                What Can We Build Together
              </span>
              <span className="h-[1px] w-6 sm:w-10 bg-[#0052FF]/30" />
            </div>

            {/* Main Title: Possible [Collaboration in Royal Blue] Formats */}
            <h2 className="font-clash text-3xl font-bold tracking-tight text-[#0D1117] sm:text-4xl md:text-[42px] lg:text-[46px] leading-[1.08]">
              Possible <span className="text-[#0052FF]">Collaboration</span> Formats
            </h2>

            {/* Subtitle */}
            <p className="font-jakarta text-sm sm:text-base leading-relaxed text-[#5F6672] max-w-2xl mx-auto mt-0.5">
              Different formats. A shared purpose. Explore the ways we can collaborate to create
              learning, innovation, and real-world impact.
            </p>
          </ScrollReveal>
        </div>

        {/* ========================================================
            3 × 3 CARD GRID (UNIFORM DIMENSIONS, SMOOTH SLIDE-UP)
        ======================================================== */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {collaborationFormats.map((card, idx) => {
            const isActive = activeCardId === card.id;

            return (
              <ScrollReveal
                key={card.id}
                delay={idx * 75}
                className="h-full"
              >
                <div
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  aria-label={`${card.number} ${card.title} - ${card.description}`}
                  onClick={() => handleCardClick(card.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCardClick(card.id);
                    }
                  }}
                  className={`group relative h-[340px] sm:h-[355px] md:h-[365px] w-full rounded-[22px] sm:rounded-[24px] overflow-hidden bg-slate-900 shadow-[0_8px_30px_rgba(16,42,67,0.06)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF] focus-visible:ring-offset-2 transition-shadow duration-500 hover:shadow-[0_16px_40px_rgba(0,82,255,0.12)] motion-reduce:transition-none`}
                >
                  {/* ========================================================
                      1. COLORFUL EDITORIAL PHOTOGRAPH (STATIONARY)
                  ======================================================== */}
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                    className="object-cover object-center transition-[filter] duration-600 ease-out group-hover:brightness-95 group-focus-visible:brightness-95 motion-reduce:transition-none"
                  />

                  {/* ========================================================
                      2. TRANSLUCENT READABILITY SCRIM (NON-OBTRUSIVE)
                  ======================================================== */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none"
                  />

                  {/* ========================================================
                      3. CARD DEFAULT FRONT STATE (OVERLAID METRICS)
                  ======================================================== */}
                  {/* Top-Left: Number + Dash + Title */}
                  <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10 max-w-[85%] pr-2 pointer-events-none">
                    <div className="flex items-center gap-2.5">
                      <span className="font-jakarta text-xs sm:text-[13px] font-semibold tracking-wider text-white">
                        {card.number}
                      </span>
                      <span className="h-[1.5px] w-7 sm:w-9 bg-white/70 rounded-full" />
                    </div>

                    <h3 className="font-clash text-lg sm:text-[21px] font-bold text-white tracking-tight leading-snug mt-2.5 drop-shadow-sm">
                      {card.title}
                    </h3>
                  </div>

                  {/* Top-Right: Subtle expand indicator on hover/focus */}
                  <div
                    aria-hidden="true"
                    className={`absolute top-5 right-5 sm:top-6 sm:right-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-sm transition-all duration-300 pointer-events-none ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100"
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4 text-[#0D1117]" />
                  </div>

                  {/* Bottom-Left: Subtle circular arrow button */}
                  <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 pointer-events-none">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/60 bg-black/20 backdrop-blur-[2px] text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#0052FF] group-hover:scale-105">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* ========================================================
                      4. REVEAL PANEL: UIVERSE / JAVIERROCADEV SLIDE-UP
                         occupies ~48-52% of card height on hover/active
                  ======================================================== */}
                  <div
                    className={`absolute inset-x-0 bottom-0 z-20 rounded-t-[20px] sm:rounded-t-[22px] bg-white px-5 py-5 sm:px-6 sm:py-5 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] border-t border-slate-100/90 flex flex-col justify-between transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none ${
                      isActive
                        ? "translate-y-0"
                        : "translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0"
                    }`}
                    style={{ minHeight: "48%" }}
                  >
                    <div>
                      {/* Staggered Element 1: Micro-Label (0ms -> 100ms delay) */}
                      <div
                        className={`transition-all duration-400 ease-out motion-reduce:transition-none ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-100"
                            : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-100 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:delay-100"
                        }`}
                      >
                        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#0052FF]">
                          {card.tag}
                        </span>
                      </div>

                      {/* Staggered Element 2: Heading (0ms -> 150ms delay) */}
                      <h4
                        className={`font-clash text-base sm:text-[18px] font-bold text-[#0D1117] leading-snug mt-1 transition-all duration-400 ease-out motion-reduce:transition-none ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-150"
                            : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-150 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:delay-150"
                        }`}
                      >
                        {card.title}
                      </h4>

                      {/* Staggered Element 3: Description (0ms -> 200ms delay) */}
                      <p
                        className={`font-jakarta text-xs sm:text-[13px] leading-relaxed text-[#5F6672] mt-1.5 line-clamp-2 sm:line-clamp-3 transition-all duration-400 ease-out motion-reduce:transition-none ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-200"
                            : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:delay-200"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>

                    {/* Staggered Element 4: CTA Action Link (0ms -> 250ms delay) */}
                    <div
                      className={`mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between transition-all duration-400 ease-out motion-reduce:transition-none ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-250"
                          : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-250 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:delay-250"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleExplore(card.title);
                        }}
                        className="inline-flex items-center gap-1.5 font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0052FF] hover:text-[#003ECB] transition-colors group/cta cursor-pointer select-none"
                      >
                        <span>EXPLORE FORMAT</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-1" />
                      </button>

                      <span className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        FORGE
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
