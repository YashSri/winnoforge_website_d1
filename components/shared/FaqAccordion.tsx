"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FORGE_CANONICAL_FAQS, type FaqItem } from "@/lib/faq-data";

export { type FaqItem } from "@/lib/faq-data";
export { default as FAQCard } from "./FAQCard";
export { default as FAQSection } from "./FAQSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FaqAccordionProps {
  items?: FaqItem[];
  id?: string;
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  description?: string;
  className?: string;
  showContactCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  // Compatibility props
  columns?: number;
  layout?: "row" | "grid" | "auto";
  verticalQuestion?: boolean;
}

export default function FaqAccordion({
  items,
  id = "faq",
  eyebrow = "FAQ",
  heading = "Questions.",
  headingAccent = "Answered.",
  description = "Everything you need to know about joining, learning, collaborating, and building with FORGE.",
  className = "",
  showContactCta = true,
  ctaText = "Still have a question?",
  ctaLink = "/collaborate",
}: FaqAccordionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // STRICT REQUIREMENT: Canonical 5-question limit across the entire site
  const resolvedItems = (items && items.length > 0 ? items : FORGE_CANONICAL_FAQS).slice(0, 5);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  useGSAP(
    () => {
      if (typeof window === "undefined" || !containerRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".faq-entrance-eyebrow",
            ".faq-entrance-heading",
            ".faq-entrance-desc",
            ".faq-entrance-badge",
            ".faq-entrance-image",
            ".faq-entrance-caption",
            ".faq-entrance-tagline",
            ".faq-entrance-row",
            ".faq-entrance-footer",
          ],
          { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)", clearProps: "all" },
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      // 1. Eyebrow
      tl.from(
        ".faq-entrance-eyebrow",
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
        },
        0,
      );

      // 2. Main Heading
      tl.from(
        ".faq-entrance-heading",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        0.08,
      );

      // 3. Supporting Text
      tl.from(
        ".faq-entrance-desc",
        {
          opacity: 0,
          y: 18,
          duration: 0.55,
        },
        0.16,
      );

      // 4. Badge & Image entrance with clip-path reveal
      tl.from(
        ".faq-entrance-badge",
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
        },
        0.24,
      );

      tl.from(
        ".faq-entrance-image",
        {
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          duration: 0.8,
        },
        0.28,
      );

      tl.from(
        ".faq-entrance-caption",
        {
          opacity: 0,
          y: 14,
          duration: 0.5,
        },
        0.36,
      );

      // Tagline on top-right
      tl.from(
        ".faq-entrance-tagline",
        {
          opacity: 0,
          y: 14,
          duration: 0.5,
        },
        0.2,
      );

      // 5. Accordion Rows 01-05 staggered (60–90ms)
      tl.from(
        ".faq-entrance-row",
        {
          opacity: 0,
          y: 20,
          duration: 0.55,
          stagger: 0.08,
        },
        0.32,
      );

      // 6. Bottom Footer
      tl.from(
        ".faq-entrance-footer",
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
        },
        0.65,
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id={id}
      className={`relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 select-none overflow-hidden ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* ━━━━━━━━ LEFT COLUMN (~38–40%) ━━━━━━━━ */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="faq-entrance-eyebrow flex items-center gap-3 mb-4 sm:mb-6">
                <span className="h-[2px] w-8 sm:w-10 bg-[#004DE6]" />
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#5F6672]">
                  {eyebrow}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="faq-entrance-heading font-clash text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#111111] leading-[1.05]">
                {heading}
                <br />
                <span className="text-[#004DE6]">{headingAccent}</span>
              </h2>

              {/* Supporting Text */}
              <p className="faq-entrance-desc mt-4 sm:mt-5 font-jakarta text-sm sm:text-base text-[#5F6672] leading-relaxed max-w-sm">
                {description}
              </p>

              {/* Micro badge: SAME PEOPLE. BIGGER POSSIBILITIES. */}
              <div className="faq-entrance-badge flex items-center gap-3.5 mt-7 sm:mt-8 mb-6">
                <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#111111] shrink-0 hover:border-[#004DE6] transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#111111]" />
                </div>
                <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.16em] text-[#5F6672] leading-tight">
                  SAME
                  <br />
                  PEOPLE.
                  <br />
                  BIGGER
                  <br />
                  POSSIBILITIES.
                </div>
              </div>

              {/* Natural Color FORGE Visual */}
              <div className="faq-entrance-image relative mt-4 max-w-[340px] sm:max-w-[360px] rounded-[20px] overflow-hidden border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-slate-100 group">
                <Image
                  src="/faq/faq_campus_stairs.jpg"
                  alt="FORGE Campus Innovation Center Staircase"
                  width={720}
                  height={538}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>

              {/* Footnote Caption */}
              <div className="faq-entrance-caption mt-8 flex items-center gap-4 max-w-[320px] sm:max-w-[350px]">
                <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A8492] leading-tight shrink-0">
                  FROM
                  <br />
                  CAMPUS
                  <br />
                  TO IMPACT.
                </div>
                <div className="h-[1px] flex-1 bg-[#D9DEE7]" />
              </div>
            </div>
          </div>

          {/* ━━━━━━━━ RIGHT COLUMN (~60–62%) ━━━━━━━━ */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-2">
            <div>
              {/* Top-Right Tagline (Hidden on mobile, matches reference visual) */}
              <div className="faq-entrance-tagline hidden lg:flex flex-col items-end mb-8">
                <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A8492] leading-tight text-right">
                  PEOPLE
                  <br />
                  IDEAS
                  <br />
                  PROGRESS
                  <br />
                  BELONG HERE.
                </div>
                <div className="w-8 h-[1px] bg-[#D9DEE7] mt-2" />
              </div>

              {/* 5 Vertical Accordion Rows */}
              <div className="w-full border-b border-[#E2E8F0]">
                {resolvedItems.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  const numStr = item.number || String(idx + 1).padStart(2, "0");

                  return (
                    <div
                      key={item.question}
                      className="faq-entrance-row border-t border-[#E2E8F0] transition-colors duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${idx}`}
                        id={`faq-btn-${idx}`}
                        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004DE6] rounded-lg transition-all duration-300"
                      >
                        <div className="flex items-start sm:items-center gap-3 sm:gap-5 pr-4">
                          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#004DE6] shrink-0 pt-0.5 sm:pt-0">
                            [ {numStr} ]
                          </span>
                          <span className="font-clash text-base sm:text-lg lg:text-[1.18rem] font-bold text-[#111111] group-hover:text-[#004DE6] group-hover:translate-x-1 transition-all duration-300 leading-snug">
                            {item.question}
                          </span>
                        </div>

                        {/* Minimal circular plus / minus toggle */}
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D9DEE7] flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen
                              ? "border-[#004DE6] text-[#004DE6] bg-[#004DE6]/5"
                              : "text-[#111111] group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4 transition-transform duration-300" />
                          ) : (
                            <Plus className="w-4 h-4 transition-transform duration-300" />
                          )}
                        </div>
                      </button>

                      {/* Expandable Answer Panel */}
                      <div
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-labelledby={`faq-btn-${idx}`}
                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen ? "max-h-[600px] opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"
                        }`}
                      >
                        <div className="bg-[#F0F5FD] rounded-2xl p-5 sm:p-7 border border-[#E2EAF8]">
                          <p className="font-jakarta text-sm sm:text-base text-[#475467] leading-relaxed">
                            {item.answer}
                          </p>

                          {/* 3-Step Breakdown if present */}
                          {item.steps && item.steps.length > 0 && (
                            <div className="mt-6 pt-5 border-t border-[#D9E5F7] grid grid-cols-1 sm:grid-cols-3 gap-4">
                              {item.steps.map((st) => (
                                <div key={st.step} className="flex flex-col">
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <span className="font-mono text-xs font-bold text-[#004DE6]">
                                      {st.step}
                                    </span>
                                    <span className="w-6 h-[1.5px] bg-[#004DE6]/40" />
                                  </div>
                                  <span className="font-jakarta text-xs sm:text-sm font-semibold text-[#111111]">
                                    {st.title}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Footer Bar */}
              <div className="faq-entrance-footer pt-8 sm:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#004DE6] text-2xl font-bold leading-none select-none">
                    ✱
                  </span>
                  <div className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#7A8492] leading-tight">
                    GOOD QUESTIONS
                    <br />
                    BUILD GREAT THINGS.
                  </div>
                </div>

                {showContactCta && (
                  <Link
                    href={ctaLink}
                    className="inline-flex items-center gap-3 rounded-full border border-[#D9DEE7] bg-white px-5 py-2.5 font-jakarta text-xs sm:text-sm font-semibold text-[#111111] hover:border-[#004DE6] hover:text-[#004DE6] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] group"
                  >
                    <span>{ctaText}</span>
                    <span className="w-6 h-6 rounded-full bg-[#004DE6] text-white flex items-center justify-center text-xs group-hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
