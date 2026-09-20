"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import FAQCard, { DEFAULT_FAQ_ICONS } from "./FAQCard";
import type { FaqItem } from "./FaqAccordion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FAQSectionProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  description?: string;
  items: FaqItem[];
  columns?: number;
  layout?: "row" | "grid" | "auto";
  showContactCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export default function FAQSection({
  id = "faq-section",
  eyebrow = "COMMON QUESTIONS",
  heading = "Frequently Asked",
  headingAccent = "Questions",
  description = "Everything you need to know about the FORGE ecosystem and how to participate.",
  items,
  columns,
  layout = "auto",
  showContactCta = true,
  ctaText = "Contact Us",
  ctaLink = "/collaborate",
  className = "",
}: FAQSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-detect columns and layout
  const isRowLayout = layout === "row" || (layout === "auto" && items.length <= 6);
  const effectiveColumns = columns || (items.length <= 4 ? items.length : items.length === 5 ? 5 : 6);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".faq-sec-eyebrow",
            ".faq-sec-heading",
            ".faq-sec-desc",
            ".faq-card-wrap",
            ".faq-sec-cta",
          ],
          { opacity: 1, y: 0, clearProps: "all" },
        );
        return;
      }

      // Unified fast entrance sequence (500–650ms duration, 50–70ms stagger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      // 1. Eyebrow (0ms)
      tl.from(
        ".faq-sec-eyebrow",
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
        },
        0,
      );

      // 2. Heading (70ms)
      tl.from(
        ".faq-sec-heading",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        0.07,
      );

      // 3. Subtitle / Description (140ms)
      tl.from(
        ".faq-sec-desc",
        {
          opacity: 0,
          y: 18,
          duration: 0.55,
        },
        0.14,
      );

      // 4. FAQ cards reveal sequentially with 60ms stagger
      tl.from(
        ".faq-card-wrap",
        {
          opacity: 0,
          y: 24,
          duration: 0.55,
          stagger: 0.06,
        },
        0.22,
      );

      // 5. CTA reveals last
      if (showContactCta) {
        tl.from(
          ".faq-sec-cta",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          0.45,
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 select-none overflow-hidden ${className}`}
    >
      {/* 3D Flip Styles & Responsive Behavior */}
      <style>{`
        .faq-card-container:hover .faq-card-inner,
        .faq-card-container:focus-within .faq-card-inner,
        .faq-card-inner.is-flipped {
          transform: rotateY(180deg) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-card-inner {
            transition: none !important;
            transform: none !important;
          }
          .faq-card-container:hover .faq-card-inner,
          .faq-card-container:focus-within .faq-card-inner,
          .faq-card-inner.is-flipped {
            transform: none !important;
          }
          .faq-card-back {
            opacity: 0 !important;
            transition: opacity 250ms ease !important;
            transform: none !important;
            pointer-events: none !important;
          }
          .faq-card-container:hover .faq-card-back,
          .faq-card-container:focus-within .faq-card-back,
          .faq-card-inner.is-flipped .faq-card-back {
            opacity: 1 !important;
            pointer-events: auto !important;
          }
        }
      `}</style>

      {/* Background Decorative Circles */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 opacity-40 z-0">
        <svg
          viewBox="0 0 380 380"
          fill="none"
          aria-hidden="true"
          className="w-full h-full text-[#1683EA]/10"
        >
          <circle
            cx="240"
            cy="140"
            r="120"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle
            cx="240"
            cy="140"
            r="200"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* ━━━━━━━━ SECTION HEADER ━━━━━━━━ */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          {eyebrow && (
            <div className="faq-sec-eyebrow flex items-center justify-center gap-3 select-none mb-3 sm:mb-4">
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683EA]">
                {eyebrow}
              </span>
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            </div>
          )}

          {/* Heading */}
          <h2 className="faq-sec-heading font-clash text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight select-none">
            {heading}{" "}
            {headingAccent && (
              <span className="text-[#1683EA]">{headingAccent}</span>
            )}
          </h2>

          {/* Description */}
          {description && (
            <p className="faq-sec-desc mt-3 sm:mt-4 font-jakarta text-base sm:text-lg text-[#5F6672] leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* ━━━━━━━━ CARDS ROW / GRID ━━━━━━━━ */}
        <div
          className={`mt-12 sm:mt-14 w-full ${
            isRowLayout
              ? "flex overflow-x-auto lg:grid lg:grid-cols-6 gap-3 sm:gap-4 pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none no-scrollbar items-stretch"
              : effectiveColumns === 4
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, idx) => {
            const numStr = String(idx + 1).padStart(2, "0");
            const icon =
              item.icon || DEFAULT_FAQ_ICONS[idx % DEFAULT_FAQ_ICONS.length];

            return (
              <div
                key={item.question}
                className={`faq-card-wrap ${
                  isRowLayout
                    ? "shrink-0 w-[260px] sm:w-[280px] lg:w-auto lg:shrink snap-center"
                    : "w-full"
                }`}
              >
                <FAQCard
                  number={item.number || numStr}
                  question={item.question}
                  answer={item.answer}
                  icon={icon}
                  category={item.category}
                  verticalQuestion={isRowLayout}
                />
              </div>
            );
          })}
        </div>

        {/* ━━━━━━━━ STILL HAVE A QUESTION? CTA ━━━━━━━━ */}
        {showContactCta && (
          <div className="faq-sec-cta mt-14 sm:mt-16 text-center">
            <div className="flex items-center justify-center gap-3 select-none mb-2">
              <span className="h-[1px] w-6 sm:w-8 bg-[#D9DEE7]" />
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-[#8896A6]">
                STILL HAVE A QUESTION?
              </span>
              <span className="h-[1px] w-6 sm:w-8 bg-[#D9DEE7]" />
            </div>

            <p className="font-jakarta text-sm text-[#5F6672] mb-5">
              Reach out to our team and we&apos;ll get back to you.
            </p>

            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 bg-[#1683EA] text-white font-jakarta text-sm font-semibold hover:bg-[#1272ce] transition-all duration-200 shadow-[0_6px_20px_rgba(22,131,234,0.22)] hover:shadow-[0_8px_25px_rgba(22,131,234,0.3)] hover:-translate-y-0.5 group"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
