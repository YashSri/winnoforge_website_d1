"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";
import FAQCard, { DEFAULT_FAQ_ICONS } from "./FAQCard";

export { default as FAQCard } from "./FAQCard";
export { default as FAQSection } from "./FAQSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FaqItem {
  question: string;
  answer: string;
  number?: string;
  icon?: LucideIcon;
  category?: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  columns?: number;
  layout?: "row" | "grid" | "auto";
  verticalQuestion?: boolean;
  className?: string;
}

export default function FaqAccordion({
  items,
  columns,
  layout = "auto",
  verticalQuestion,
  className = "",
}: FaqAccordionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-detect layout: up to 7 items can form a row
  const isRowLayout = layout === "row" || (layout === "auto" && items.length <= 6);
  const effectiveCols = columns || (items.length <= 4 ? items.length : items.length === 5 ? 5 : items.length <= 7 ? items.length : 6);
  const useVertical = verticalQuestion !== undefined ? verticalQuestion : isRowLayout;

  useGSAP(
    () => {
      if (typeof window === "undefined" || !containerRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".faq-card-item", { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.from(".faq-card-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 0.55,
        stagger: 0.06,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        clearProps: "opacity",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      {/* 3D Flip Styles */}
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

      <div
        className={`w-full ${
          isRowLayout
            ? "flex overflow-x-auto lg:grid gap-3 sm:gap-4 pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none no-scrollbar items-stretch"
            : effectiveCols === 4
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        }`}
        style={{
          ...(isRowLayout
            ? { gridTemplateColumns: `repeat(${effectiveCols}, minmax(0, 1fr))` }
            : {}),
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, idx) => {
          const numStr = item.number || String(idx + 1).padStart(2, "0");
          const icon =
            item.icon || DEFAULT_FAQ_ICONS[idx % DEFAULT_FAQ_ICONS.length];

          return (
            <div
              key={item.question}
              className={`faq-card-item ${
                isRowLayout
                  ? "shrink-0 w-[260px] sm:w-[280px] lg:w-auto lg:shrink snap-center"
                  : "w-full"
              }`}
            >
              <FAQCard
                number={numStr}
                question={item.question}
                answer={item.answer}
                icon={icon}
                category={item.category}
                verticalQuestion={useVertical}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
