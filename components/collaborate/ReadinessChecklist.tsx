"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  FileText,
  Layers,
  Lightbulb,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export interface ChecklistItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  revealDirection: "right" | "left";
}

export const checklistItems: ChecklistItem[] = [
  {
    id: "checklist-01",
    number: "01",
    title: "Define the Objective",
    description: "What do you want to achieve through the collaboration?",
    image: "/checklist/checklist-01.jpg",
    alt: "Modern architecture representing strategic focus and precision",
    icon: Target,
    revealDirection: "right",
  },
  {
    id: "checklist-02",
    number: "02",
    title: "Identify the Audience",
    description: "Who will participate or benefit?",
    image: "/checklist/checklist-02.jpg",
    alt: "Diverse Indian students and builders collaborating in modern learning environment",
    icon: Users,
    revealDirection: "left",
  },
  {
    id: "checklist-03",
    number: "03",
    title: "Clarify the Format",
    description: "Are you considering a workshop, program, challenge, project, event, or ongoing engagement?",
    image: "/checklist/checklist-03.jpg",
    alt: "Collaborative workshop planning and structured learning session",
    icon: Layers,
    revealDirection: "right",
  },
  {
    id: "checklist-04",
    number: "04",
    title: "Share the Context",
    description: "What problem, opportunity, or requirement should the FORGE team understand?",
    image: "/checklist/checklist-04.jpg",
    alt: "Engineers and founders discussing problem statements and context",
    icon: Lightbulb,
    revealDirection: "left",
  },
  {
    id: "checklist-05",
    number: "05",
    title: "Identify the Timeline",
    description: "When would you like the collaboration to begin?",
    image: "/checklist/checklist-05.jpg",
    alt: "Project timeline, planning, scheduling and milestones",
    icon: Calendar,
    revealDirection: "right",
  },
  {
    id: "checklist-06",
    number: "06",
    title: "Clarify Responsibilities",
    description: "What support, resources, people, or infrastructure may be involved?",
    image: "/checklist/checklist-06.jpg",
    alt: "Team coordination, roles and shared execution on prototype",
    icon: CheckCircle2,
    revealDirection: "left",
  },
  {
    id: "checklist-07",
    number: "07",
    title: "Define the Expected Output",
    description: "What would a useful result look like?",
    image: "/checklist/checklist-07.jpg",
    alt: "Data visualization, dashboards, analytics and measurable outputs",
    icon: BarChart3,
    revealDirection: "right",
  },
  {
    id: "checklist-08",
    number: "08",
    title: "Share Relevant Materials",
    description: "Provide only documents or links necessary for the initial discussion.",
    image: "/checklist/checklist-08.jpg",
    alt: "Organized project dossiers, documents and research files on workspace",
    icon: FileText,
    revealDirection: "left",
  },
];

export default function ReadinessChecklist() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardToggle = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  const handleScrollToForm = () => {
    const el = document.getElementById("collaborate-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="readiness-checklist"
      className="relative w-full overflow-hidden bg-[#F7F8FC] py-20 md:py-28 lg:py-32 select-none"
      aria-label="Collaboration Readiness Checklist"
    >
      {/* ========================================================
          BACKGROUND: SUBTLE FORGE AMBIENT ELEMENTS
      ======================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Large thin circular arc — Top Right */}
        <div
          className="absolute -top-36 -right-28 h-[520px] w-[520px] rounded-full border border-[#0052FF]/[0.07] animate-ambient-circle"
          style={{ willChange: "transform" }}
        />

        {/* Large thin circular arc — Bottom Left */}
        <div
          className="absolute -bottom-40 -left-32 h-[560px] w-[560px] rounded-full border border-[#0052FF]/[0.06] animate-ambient-arc"
          style={{ willChange: "transform" }}
        />

        {/* Small royal blue dots */}
        <div
          className="absolute top-16 left-[16%] h-2.5 w-2.5 rounded-full bg-[#0052FF] animate-ambient-dot"
          style={{ animationDuration: "14s" }}
        />
        <div
          className="absolute top-[38%] right-10 h-2 w-2 rounded-full bg-[#0052FF] animate-ambient-dot"
          style={{ animationDuration: "18s", animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-20 left-8 h-2 w-2 rounded-full bg-[#0052FF] animate-ambient-dot"
          style={{ animationDuration: "16s", animationDelay: "1s" }}
        />

        {/* Subtle geometric hairline SVG */}
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -50 200 C 400 120, 900 260, 1600 140"
            fill="none"
            stroke="#0052FF"
            strokeWidth="0.75"
            strokeDasharray="4 8"
            strokeOpacity="0.12"
          />
          <path
            d="M 50 640 C 550 560, 1050 680, 1550 600"
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
            SECTION HEADER (APPLE × FORGE SWISS EDITORIAL)
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
              FROM
              <br />
              CONVERSATION
              <br />
              TO COLLABORATION
              <br />
              TO IMPACT.
            </div>
          </div>

          {/* Center Heading Block */}
          <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-3.5 text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-[1px] w-6 sm:w-10 bg-[#0052FF]/30" />
              <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#0052FF]">
                Collaboration Readiness Checklist
              </span>
              <span className="h-[1px] w-6 sm:w-10 bg-[#0052FF]/30" />
            </div>

            {/* Main Title: Before We [Begin in Royal Blue] */}
            <h2 className="font-clash text-3xl font-bold tracking-tight text-[#0D1117] sm:text-4xl md:text-[42px] lg:text-[46px] leading-[1.08]">
              Before We <span className="text-[#0052FF]">Begin</span>
            </h2>

            {/* Subtitle */}
            <p className="font-jakarta text-sm sm:text-base leading-relaxed text-[#5F6672] max-w-2xl mx-auto mt-0.5">
              A quick checklist to help you shape a clear, focused, and impactful collaboration with
              FORGE.
            </p>
          </ScrollReveal>
        </div>

        {/* ========================================================
            EDITORIAL GRID: 4 COLUMNS × 2 ROWS (DESKTOP)
            ALTERNATING REVEALS: RIGHT ↔ LEFT
        ======================================================== */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {checklistItems.map((item, idx) => {
            const isActive = activeCardId === item.id;
            const isRevealFromRight = item.revealDirection === "right";
            const IconComponent = item.icon;

            return (
              <ScrollReveal
                key={item.id}
                delay={idx * 80}
                className="h-full"
              >
                <div
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  aria-label={`${item.number} ${item.title} - ${item.description}`}
                  onClick={() => handleCardToggle(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCardToggle(item.id);
                    }
                  }}
                  className={`group relative h-[250px] sm:h-[265px] md:h-[275px] w-full rounded-[20px] sm:rounded-[22px] overflow-hidden bg-slate-900 shadow-[0_15px_45px_rgba(20,40,80,0.06)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF] focus-visible:ring-offset-2 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,82,255,0.12)] motion-reduce:transition-none`}
                >
                  {/* ========================================================
                      1. COLORFUL EDITORIAL PHOTOGRAPH (STATIONARY)
                  ======================================================== */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={idx < 4}
                      className="object-cover object-center transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-reduce:transform-none"
                    />
                    {/* Readability Scrim Overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 transition-opacity duration-500 group-hover:from-black/90 pointer-events-none"
                    />
                  </div>

                  {/* ========================================================
                      2. CARD DEFAULT FRONT STATE (IMAGE OVERLAY)
                  ======================================================== */}
                  <div
                    className={`absolute inset-0 p-5 sm:p-5 flex flex-col justify-between pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isRevealFromRight
                        ? "items-start text-left"
                        : "items-start text-left"
                    }`}
                  >
                    {/* Top: Number + Rule */}
                    <div className="flex items-center gap-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                      <span className="font-jakarta text-xs sm:text-[13px] font-bold tracking-wider text-white">
                        {item.number}
                      </span>
                      <span className="h-[1.5px] w-6 sm:w-8 bg-white/70 rounded-full" />
                    </div>

                    {/* Middle: Title */}
                    <div className="my-auto max-w-[85%] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                      <h3 className="font-clash text-lg sm:text-[20px] font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>

                    {/* Bottom: Circular Arrow Button */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/60 bg-black/25 backdrop-blur-[2px] text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#0052FF]">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>

                      {/* Micro category marker */}
                      <span className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                        FORGE
                      </span>
                    </div>
                  </div>

                  {/* ========================================================
                      3. INFORMATION PANEL REVEAL (ALTERNATING SLIDE-IN)
                         Width: ~52-54% of card, 600-700ms cubic-bezier
                  ======================================================== */}
                  <div
                    className={`absolute inset-y-0 z-20 w-[54%] sm:w-[52%] bg-white p-4 sm:p-5 flex flex-col justify-between shadow-[0_0_35px_rgba(0,0,0,0.14)] transition-transform duration-650 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
                      isRevealFromRight
                        ? `right-0 rounded-l-[18px] sm:rounded-l-[20px] ${
                            isActive
                              ? "translate-x-0"
                              : "translate-x-full group-hover:translate-x-0 group-focus-visible:translate-x-0"
                          }`
                        : `left-0 rounded-r-[18px] sm:rounded-r-[20px] ${
                            isActive
                              ? "translate-x-0"
                              : "-translate-x-full group-hover:translate-x-0 group-focus-visible:translate-x-0"
                          }`
                    }`}
                  >
                    <div>
                      {/* Top Row: Category Icon + Micro-Label */}
                      <div
                        className={`flex items-center gap-2 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-100"
                            : "opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-100 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:delay-100"
                        }`}
                      >
                        <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#EBF3FF] text-[#0052FF] shrink-0">
                          <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </div>
                        <span className="font-jakarta text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#0052FF] truncate">
                          {item.number} / READINESS
                        </span>
                      </div>

                      {/* Staggered Title: 140ms delay */}
                      <h4
                        className={`font-clash text-xs sm:text-[14px] font-bold text-[#0D1117] leading-tight mt-2.5 line-clamp-2 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[140ms]"
                            : "opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-[140ms] group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:delay-[140ms]"
                        }`}
                      >
                        {item.title}
                      </h4>

                      {/* Staggered Description: 190ms delay */}
                      <p
                        className={`font-jakarta text-[11px] sm:text-[12px] leading-[1.4] text-[#5F6672] mt-1.5 line-clamp-3 sm:line-clamp-4 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                          isActive
                            ? "opacity-100 translate-y-0 delay-[190ms]"
                            : "opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-[190ms] group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:delay-[190ms]"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Staggered Bottom CTA Arrow: 240ms delay */}
                    <div
                      className={`pt-2 border-t border-slate-100 flex items-center justify-between transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                        isActive
                          ? "opacity-100 translate-y-0 delay-[240ms]"
                          : "opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-[240ms] group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:delay-[240ms]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleScrollToForm();
                        }}
                        className="inline-flex items-center gap-1 font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0052FF] hover:text-[#003ECB] transition-colors group/cta cursor-pointer select-none"
                      >
                        <span>START</span>
                        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/cta:translate-x-1" />
                      </button>

                      <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#0052FF]/30 text-[#0052FF] transition-all group-hover:bg-[#0052FF] group-hover:text-white">
                        <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ========================================================
            BOTTOM EDITORIAL FOOTER LOCKUP (MATCHES REFERENCE VISUAL)
        ======================================================== */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#D9DEE7]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-slate-500">
          {/* Left: Pillar labels with blue indicator */}
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0052FF]" />
            <div className="font-jakarta text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#5F6672]">
              CLARITY &nbsp;/&nbsp; ALIGNMENT &nbsp;/&nbsp; EXECUTION &nbsp;/&nbsp; IMPACT
            </div>
          </div>

          {/* Right: Editorial quote with subtle arrow */}
          <div className="flex items-center gap-2.5">
            <span className="h-[1px] w-6 bg-[#D9DEE7]" />
            <span className="font-jakarta text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7A8492]">
              A STRONGER COLLABORATION STARTS WITH BETTER QUESTIONS.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
