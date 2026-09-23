"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import ScrollReveal from "@/components/winnoforge-main1/components1/citadel/ScrollReveal";

export interface GalleryItem {
  id: string;
  num: string;
  title: string;
  eyebrow?: string;
  src: string;
  alt: string;
  description: string;
}

export const defaultGalleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    num: "01",
    title: "Knowledge in Action.",
    src: "/webp/2.webp",
    alt: "FORGE community event - Knowledge in Action",
    description: "Hands-on execution sprint with engineering teams tackling real-world problems.",
  },
  {
    id: "gallery-2",
    num: "02",
    title: "Plan & Architecture.",
    src: "/webp/3.webp",
    alt: "FORGE community workshop - Plan & Architecture",
    description: "Architectural blueprint planning and product breakdown sessions.",
  },
  {
    id: "gallery-3",
    num: "03",
    title: "Real Conversations.",
    src: "/webp/4.webp",
    alt: "FORGE community demo day - Real Conversations",
    description: "Founders, mentors, and student builders in live peer review sessions.",
  },
  {
    id: "gallery-4",
    num: "04",
    title: "Ideas Take Shape.",
    src: "/webp/8.webp",
    alt: "FORGE community builders - Ideas Take Shape",
    description: "Translating abstract technical domains into working deployable prototypes.",
  },
  {
    id: "gallery-5",
    num: "05",
    title: "A Stronger Together.",
    src: "/impact-campus-wide.jpg",
    alt: "FORGE community on campus - A Stronger Together",
    description: "Cross-disciplinary cohort sessions building lasting peer networks.",
  },
  {
    id: "gallery-6",
    num: "06",
    title: "Builders Everywhere.",
    eyebrow: "WinnoFusion",
    src: "/launch-step-4.jpg",
    alt: "FORGE community launch - Builders Everywhere",
    description: "Empowering the next generation of engineers to ship software that matters.",
  },
];

export default function CommunityEditorialGallery({
  items = defaultGalleryItems,
}: {
  items?: GalleryItem[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % items.length));
  }, [activeIndex, items.length]);

  const prevImage = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + items.length) % items.length
    );
  }, [activeIndex, items.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, nextImage, prevImage]);

  return (
    <section className="relative w-full overflow-hidden bg-[#fafcff] py-16 md:py-24 border-t border-b border-black/[0.06]">
      {/* Editorial Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle oversized circular glow / shape */}
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -right-32 top-10 h-[400px] w-[400px] rounded-full bg-primary/[0.025] blur-2xl" />

        {/* Subtle top right background block */}
        <div className="absolute right-0 top-0 h-44 w-72 bg-primary/[0.03] rounded-bl-[40px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          {/* Eyebrow and Heading */}
          <div>
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.28em] text-foreground/75">
                  COMMUNITY GALLERY
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-3 font-clash text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.08]">
                Moments
                <br />
                <span className="text-primary">That Build Tomorrow.</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Description & Top-Right Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
            {/* Description with Vertical Divider */}
            <ScrollReveal delay={200} className="flex items-center gap-4">
              <div className="hidden sm:block h-14 w-[2px] bg-primary/40 shrink-0" />
              <p className="max-w-xs font-jakarta text-sm leading-relaxed text-foreground/70">
                Snapshots from events, workshops, projects, and conversations
                that bring the FORGE community to life.
              </p>
            </ScrollReveal>

            {/* Actions: View All & Carousel Controls */}
            <ScrollReveal delay={260} className="flex items-center gap-4 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-5 py-2.5 font-jakarta text-xs font-semibold tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_4px_16px_rgba(0,82,255,0.25)]"
              >
                <span>View all photos</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              {/* Prev / Next Carousel Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openLightbox(0)}
                  aria-label="Previous photo"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-foreground/70 shadow-sm transition-all duration-300 hover:border-black/25 hover:text-foreground hover:shadow"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openLightbox(1)}
                  aria-label="Next photo"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-[0_4px_14px_rgba(0,82,255,0.28)] transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Main Editorial Gallery Grid (Asymmetric 3-Column Layout) */}
        <div className="relative">
          {/* Far-Left Vertical Editorial Labels (Hidden on small screens) */}
          <div className="pointer-events-none absolute -left-10 top-16 hidden 2xl:flex flex-col items-center gap-3">
            <div className="h-12 w-px bg-primary/40" />
            <div className="flex flex-col gap-2 text-[9px] font-jakarta font-semibold tracking-[0.24em] text-foreground/45 uppercase text-center">
              <span>PEOPLE</span>
              <span>IDEAS</span>
              <span>SPACES</span>
              <span>IMPACT</span>
            </div>
            <div className="h-6 w-px bg-foreground/20" />
          </div>

          {/* Far-Right Vertical Pagination Indicators (Hidden on small screens) */}
          <div className="pointer-events-none absolute -right-9 top-10 hidden 2xl:flex flex-col items-center gap-3 text-[11px] font-jakarta font-medium text-foreground/40">
            <span className="font-bold text-primary">01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
          </div>

          {/* Asymmetric Responsive Grid Container */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 items-start">
            {/* ──────────────────────────────────────────────────────────
                COLUMN 1: LEFT FEATURED HERO CARD (Image 01) + QUOTE BOX
            ────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              {/* Image 01 Hero Card */}
              <ScrollReveal delay={300}>
                <div className="relative">
                  {/* Decorative Thin Outlined Rectangle Behind Image 01 */}
                  <div className="pointer-events-none absolute -left-3 -top-3 h-full w-full rounded-[26px] border border-primary/25" />
                  <div className="pointer-events-none absolute -left-5 top-1/2 h-2.5 w-2.5 rounded-sm bg-primary" />

                  <div
                    onClick={() => openLightbox(0)}
                    className="group relative aspect-[4/4.4] w-full overflow-hidden rounded-[22px] border border-black/10 bg-[#0f172a] shadow-[0_12px_36px_rgba(0,0,0,0.08)] cursor-pointer"
                  >
                    <Image
                      src={items[0].src}
                      alt={items[0].alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                    />

                    {/* Subtle Overlay Gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 transition-opacity duration-500 group-hover:from-black/90" />

                    {/* Card Shine Highlight (Subtle) */}
                    <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:animate-shine" />

                    {/* Top Number */}
                    <div className="relative z-10 p-6 flex items-center gap-3">
                      <span className="font-varela text-sm font-bold tracking-widest text-white/90">
                        {items[0].num}
                      </span>
                      <div className="h-px w-10 bg-white/40" />
                    </div>

                    {/* Bottom Metadata & Arrow Action */}
                    <div className="relative z-10 mt-auto p-6 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-varela text-xl md:text-2xl font-bold tracking-tight text-white leading-snug transition-transform duration-300 group-hover:-translate-y-0.5">
                          {items[0].title}
                        </h3>
                        <p className="mt-1 font-jakarta text-xs text-white/70 line-clamp-2">
                          {items[0].description}
                        </p>
                      </div>

                      {/* Action Circle */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Quote / Editorial Box */}
              <ScrollReveal delay={380}>
                <div className="rounded-2xl border border-black/5 bg-[#F0F5FA]/90 p-5 md:p-6 shadow-[0_4px_16px_rgba(0,82,255,0.02)]">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-serif text-primary leading-none">
                      &ldquo;&ldquo;
                    </span>
                  </div>
                  <p className="mt-2 font-jakarta text-sm md:text-base font-medium text-foreground/80 leading-relaxed">
                    More than events.
                    <br />
                    A growing movement.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* ──────────────────────────────────────────────────────────
                COLUMN 2: CENTER 2x2 GRID (Images 02, 03, 04, 05)
            ────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Image 02 (Top-Left) */}
              <ScrollReveal delay={400}>
                <div
                  onClick={() => openLightbox(1)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-black/10 bg-[#0f172a] shadow-sm cursor-pointer"
                >
                  <Image
                    src={items[1].src}
                    alt={items[1].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />

                  {/* Top-left number */}
                  <div className="relative z-10 p-4">
                    <span className="font-varela text-xs font-bold tracking-wider text-white/80">
                      {items[1].num}
                    </span>
                  </div>

                  {/* Bottom info */}
                  <div className="relative z-10 mt-auto p-4 flex items-end justify-between">
                    <div>
                      <h4 className="font-varela text-sm font-bold text-white tracking-tight leading-snug">
                        {items[1].title}
                      </h4>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Image 03 (Top-Right) */}
              <ScrollReveal delay={480}>
                <div
                  onClick={() => openLightbox(2)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-black/10 bg-[#0f172a] shadow-sm cursor-pointer"
                >
                  <Image
                    src={items[2].src}
                    alt={items[2].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />

                  {/* Top-left number */}
                  <div className="relative z-10 p-4">
                    <span className="font-varela text-xs font-bold tracking-wider text-white/80">
                      {items[2].num}
                    </span>
                  </div>

                  {/* Bottom caption & Arrow */}
                  <div className="relative z-10 mt-auto p-4 flex items-end justify-between">
                    <div>
                      <h4 className="font-varela text-sm font-bold text-white tracking-tight leading-snug">
                        {items[2].title}
                      </h4>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Image 04 (Bottom-Left) */}
              <ScrollReveal delay={560}>
                <div
                  onClick={() => openLightbox(3)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-black/10 bg-[#0f172a] shadow-sm cursor-pointer"
                >
                  <Image
                    src={items[3].src}
                    alt={items[3].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />

                  {/* Top-left number */}
                  <div className="relative z-10 p-4">
                    <span className="font-varela text-xs font-bold tracking-wider text-white/80">
                      {items[3].num}
                    </span>
                  </div>

                  {/* Bottom caption & Arrow */}
                  <div className="relative z-10 mt-auto p-4 flex items-end justify-between">
                    <div>
                      <h4 className="font-varela text-sm font-bold text-white tracking-tight leading-snug">
                        {items[3].title}
                      </h4>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Image 05 (Bottom-Right) */}
              <ScrollReveal delay={640}>
                <div
                  onClick={() => openLightbox(4)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-black/10 bg-[#0f172a] shadow-sm cursor-pointer"
                >
                  <Image
                    src={items[4].src}
                    alt={items[4].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />

                  {/* Top-left number */}
                  <div className="relative z-10 p-4">
                    <span className="font-varela text-xs font-bold tracking-wider text-white/80">
                      {items[4].num}
                    </span>
                  </div>

                  {/* Bottom caption & Arrow */}
                  <div className="relative z-10 mt-auto p-4 flex items-end justify-between">
                    <div>
                      <h4 className="font-varela text-sm font-bold text-white tracking-tight leading-snug">
                        {items[4].title}
                      </h4>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ──────────────────────────────────────────────────────────
                COLUMN 3: RIGHT TALL VERTICAL IMAGE (Image 06) + PANEL
            ────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {/* Top Editorial Sub-Panel */}
              <ScrollReveal delay={680}>
                <div className="rounded-xl border border-black/5 bg-[#F4F8FD]/80 px-4 py-3 flex items-center justify-between">
                  <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/60">
                    ── A COMMUNITY FOR WHAT&apos;S NEXT.
                  </span>
                  <span className="h-2 w-2 rounded-sm bg-primary" />
                </div>
              </ScrollReveal>

              {/* Image 06 Tall Card */}
              <ScrollReveal delay={720}>
                <div className="relative">
                  {/* Decorative Frame Behind Image 06 */}
                  <div className="pointer-events-none absolute -right-3 -bottom-3 h-full w-full rounded-[26px] border border-primary/25" />
                  <div className="pointer-events-none absolute -right-5 top-1/2 h-2.5 w-2.5 rounded-sm bg-primary" />

                  <div
                    onClick={() => openLightbox(5)}
                    className="group relative aspect-[3/4.6] w-full overflow-hidden rounded-[22px] border border-black/10 bg-[#0f172a] shadow-[0_12px_36px_rgba(0,0,0,0.08)] cursor-pointer"
                  >
                    <Image
                      src={items[5].src}
                      alt={items[5].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35" />

                    {/* Top number */}
                    <div className="relative z-10 p-5 flex items-center gap-3">
                      <span className="font-varela text-xs font-bold tracking-widest text-white/90">
                        {items[5].num}
                      </span>
                      <div className="h-px w-8 bg-white/40" />
                    </div>

                    {/* Bottom Metadata */}
                    <div className="relative z-10 mt-auto p-5 flex items-end justify-between gap-3">
                      <div>
                        {items[5].eyebrow && (
                          <span className="block font-jakarta text-[10px] font-bold uppercase tracking-wider text-primary">
                            {items[5].eyebrow}
                          </span>
                        )}
                        <h3 className="font-varela text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                          {items[5].title}
                        </h3>
                      </div>

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Bottom Micro-Label */}
        <div className="mt-8 flex justify-end">
          <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.24em] text-foreground/45">
            ── FROM CAMPUS. TO IMPACT.
          </span>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          EXPANDED LIGHTBOX MODAL WITH SMOOTH MOTION
      ────────────────────────────────────────────────────────── */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md px-4 py-8 transition-opacity duration-300 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-white hover:text-black"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-white hover:text-black"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-4xl w-full max-h-[90vh] transition-transform duration-500 scale-100"
          >
            {/* Image Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[75vh] overflow-hidden rounded-2xl bg-black/40 border border-white/10 shadow-2xl">
              <Image
                src={items[activeIndex].src}
                alt={items[activeIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Bottom Caption and Counter */}
            <div className="mt-4 flex w-full items-center justify-between px-2 text-white">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-varela text-xs font-bold tracking-widest text-primary">
                    {items[activeIndex].num}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <h4 className="font-varela text-base font-bold text-white">
                    {items[activeIndex].title}
                  </h4>
                </div>
                <p className="mt-0.5 font-jakarta text-xs text-white/70 max-w-lg">
                  {items[activeIndex].description}
                </p>
              </div>

              <div className="font-jakarta text-xs font-semibold tracking-widest text-white/50 uppercase">
                {activeIndex + 1} / {items.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
