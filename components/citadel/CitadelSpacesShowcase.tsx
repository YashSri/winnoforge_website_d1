"use client";

import Image from "next/image";
import { ArrowRight, Box, Layers, Users } from "lucide-react";
import ScrollReveal from "@/components/winnoforge-main1/components1/citadel/ScrollReveal";
import PartnerButton from "@/components/modal/PartnerButton";

interface SpaceZone {
  id: string;
  number: string;
  name: string;
  sqm: string;
  wallQuote?: string;
  description: string;
  extendedDetails: string;
  bgImage: string;
}

const zones: SpaceZone[] = [
  {
    id: "flex-room-1",
    number: "02",
    name: "Flex Room 1",
    sqm: "40 SQM",
    wallQuote: "DISCUSS DESIGN BUILD",
    description: "A reconfigurable space for workshops, reviews, and team breakouts.",
    extendedDetails: "Acoustic glass, mobile dry-erase boards, and hybrid conferencing.",
    bgImage: "/citadel/zones/clean_02_flex_room_1.jpg",
  },
  {
    id: "flex-room-2",
    number: "03",
    name: "Flex Room 2",
    sqm: "35 SQM",
    wallQuote: "SMALL TEAMS BIG PROGRESS",
    description: "A second flex space for parallel sessions and smaller sprint pods.",
    extendedDetails: "Dedicated sprint pod tables and high-density brainstorm boards.",
    bgImage: "/citadel/zones/clean_03_flex_room_2.jpg",
  },
  {
    id: "cabin-1",
    number: "04",
    name: "Cabin 1",
    sqm: "12 SQM",
    wallQuote: "FOCUS CREATES CLARITY",
    description: "A private cabin for focused work and founder/mentor 1:1s.",
    extendedDetails: "Deep-work sound isolation and mentor consultation setup.",
    bgImage: "/citadel/zones/clean_04_cabin_1.jpg",
  },
  {
    id: "cabin-2",
    number: "05",
    name: "Cabin 2",
    sqm: "12 SQM",
    wallQuote: "IDEAS MEET EXECUTION",
    description: "A private cabin for focused work and founder/mentor 1:1s.",
    extendedDetails: "Sound-damped 1:1 advisory and sprint-lead check-in space.",
    bgImage: "/citadel/zones/clean_05_cabin_2.jpg",
  },
  {
    id: "cabin-3",
    number: "06",
    name: "Cabin 3",
    sqm: "12 SQM",
    wallQuote: "BUILD TALK GROW",
    description: "A private cabin for focused work and founder/mentor 1:1s.",
    extendedDetails: "Fast-cadence feedback booth and founder sprint reviews.",
    bgImage: "/citadel/zones/clean_06_cabin_3.jpg",
  },
  {
    id: "cabin-4",
    number: "07",
    name: "Cabin 4",
    sqm: "12 SQM",
    wallQuote: "PEOPLE IDEAS IMPACT",
    description: "A private cabin for focused work and founder/mentor 1:1s.",
    extendedDetails: "Private focus booth for code shipping and partner calls.",
    bgImage: "/citadel/zones/clean_07_cabin_4.jpg",
  },
  {
    id: "community-space",
    number: "08",
    name: "Community Space",
    sqm: "60 SQM",
    wallQuote: "A STRONGER TOMORROW TOGETHER",
    description: "An open lounge for cross-team collaboration, demos, and downtime.",
    extendedDetails: "Modular lounge seating, community showcase, and town hall setup.",
    bgImage: "/citadel/zones/clean_08_community_space.jpg",
  },
  {
    id: "lab-in-a-box",
    number: "09",
    name: "Lab-in-a-Box",
    sqm: "25 SQM",
    wallQuote: "PROTOTYPE TEST LEARN",
    description: "A modular hardware/prototyping bench for physical builds.",
    extendedDetails: "Soldering stations, micro-controllers, testing rigs, and rapid tools.",
    bgImage: "/citadel/zones/clean_09_lab_in_a_box.jpg",
  },
];

export default function CitadelSpacesShowcase() {
  return (
    <section className="relative px-4 py-12 md:px-8 md:py-20 bg-[#fafcff]/60 border-t border-b border-black/[0.06]">
      <div className="mx-auto max-w-7xl">
        {/* Editorial Sub-Nav Header */}
        <ScrollReveal>
          <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-4 text-xs tracking-wider">
            <span className="font-varela font-bold uppercase tracking-[0.2em] text-foreground">
              FORGE
            </span>
            <div className="hidden sm:flex items-center gap-3 md:gap-5 text-[11px] font-jakarta font-semibold tracking-[0.25em] text-foreground/50 uppercase">
              <span className="text-foreground">SPACES</span>
              <span className="text-foreground/30">•</span>
              <span>PEOPLE</span>
              <span className="text-foreground/30">•</span>
              <span>IDEAS</span>
              <span className="text-foreground/30">•</span>
              <span>IMPACT</span>
            </div>
            <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              THE CITADEL
            </span>
          </div>
        </ScrollReveal>

        {/* Section Header with Stats and Quote */}
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Eyebrow and Main Title */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.28em] text-primary">
                WHAT IT IS
              </span>
              <h2 className="mt-3 font-varela text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                The <span className="text-primary">Citadel.</span>
              </h2>
              <p className="mt-4 font-jakarta text-sm md:text-base leading-relaxed text-foreground/75 max-w-sm">
                A modular, execution-driven innovation environment embedded
                inside a campus. Not a lab. A system.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats Badges */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            <ScrollReveal delay={50}>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/90 p-4 text-center shadow-[0_4px_16px_rgba(20,50,90,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(20,50,90,0.06)]">
                <p className="font-varela text-2xl sm:text-3xl font-bold text-foreground">
                  375 sqm
                </p>
                <div className="mt-2 flex items-center justify-center gap-1.5 font-jakarta text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/60">
                  <Box className="h-3 w-3 shrink-0 text-primary" />
                  <span>Physical Footprint</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/90 p-4 text-center shadow-[0_4px_16px_rgba(20,50,90,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(20,50,90,0.06)]">
                <p className="font-varela text-2xl sm:text-3xl font-bold text-foreground">
                  8+
                </p>
                <div className="mt-2 flex items-center justify-center gap-1.5 font-jakarta text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/60">
                  <Layers className="h-3 w-3 shrink-0 text-primary" />
                  <span>Functional Zones</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/90 p-4 text-center shadow-[0_4px_16px_rgba(20,50,90,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(20,50,90,0.06)]">
                <p className="font-varela text-2xl sm:text-3xl font-bold text-foreground">
                  80-120
                </p>
                <div className="mt-2 flex items-center justify-center gap-1.5 font-jakarta text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/60">
                  <Users className="h-3 w-3 shrink-0 text-primary" />
                  <span>Capacity</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Editorial Callout */}
          <div className="lg:col-span-3 border-l border-black/15 pl-6 hidden lg:flex flex-col justify-center">
            <ScrollReveal delay={200}>
              <p className="font-varela text-sm font-bold tracking-wider text-foreground/90 leading-snug uppercase">
                IDEAS
                <br />
                NEED PLACES
                <br />
                TO BREATHE.
              </p>
              <span className="mt-3 block font-jakarta text-[10px] uppercase tracking-[0.24em] text-foreground/45">
                — THE CITADEL
              </span>
            </ScrollReveal>
          </div>
        </div>

        {/* Spaces Grid: Hero on Left + 3x3 on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Card 01: Build Floor (Featured Space spanning full 3-row height) */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal className="h-full">
              <div
                className="group relative flex h-full min-h-[500px] lg:min-h-[620px] flex-col justify-between overflow-hidden rounded-[26px] border border-black/10 bg-[#0a121b] p-7 md:p-9 shadow-[0_6px_24px_rgba(20,50,90,0.04)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(20,50,90,0.12)] cursor-pointer"
                style={{
                  // Static border guarantee
                  borderColor: "rgba(0,0,0,0.12)",
                }}
              >
                {/* Background Image with Crisp Rendering */}
                <Image
                  src="/citadel/zones/clean_01_build_floor.jpg"
                  alt="Build Floor execution space"
                  fill
                  className="object-cover object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                />

                {/* Dark Gradient Overlay for Maximum Readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60" />

                {/* Top Sliding Layer (Hover Interaction: moves upward smoothly) */}
                <div className="relative z-10 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-11">
                  {/* Card Number and Horizontal Rule */}
                  <div className="flex items-center gap-3">
                    <span className="font-varela text-sm font-bold tracking-widest text-white/80">
                      01
                    </span>
                    <div className="h-px w-12 bg-white/30" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-varela text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    Build
                    <br />
                    Floor
                  </h3>

                  {/* Description */}
                  <p className="mt-4 font-jakarta text-sm leading-relaxed text-white/80 max-w-xs">
                    The main open-plan execution space where sprint teams build
                    and iterate.
                  </p>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <PartnerButton className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-5 py-2.5 font-jakarta text-xs font-semibold tracking-wider uppercase text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40">
                        <ArrowRight className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-[1.04]" />
                      </div>
                      <span>EXPLORE SPACE</span>
                    </PartnerButton>
                  </div>
                </div>

                {/* Bottom Reveal Layer */}
                <div className="relative z-10 mt-auto">
                  {/* Divider Line (Appears on Hover) */}
                  <div className="h-px w-full bg-white/20 opacity-0 transition-opacity duration-350 delay-75 group-hover:opacity-100 mb-3" />

                  {/* Revealed Content */}
                  <div className="opacity-0 translate-y-3 transition-all duration-450 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="flex items-center justify-between text-xs font-jakarta text-white/85">
                      <span>Full open-plan • 40 builders • Live sprint pods</span>
                      <span className="font-bold text-[#78D8C6] ml-2 shrink-0">
                        ACTIVE SPRINT POD
                      </span>
                    </div>
                  </div>

                  {/* Bottom Footprint Badge */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
                    <span className="font-jakarta text-xs font-bold tracking-[0.2em] text-[#78D8C6] uppercase">
                      120 SQM
                    </span>
                    <span className="font-jakarta text-[11px] text-white/60 uppercase tracking-wider">
                      PRIMARY LAB
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3x3 Card Grid (Cards 02–10) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {zones.map((zone, index) => (
              <ScrollReveal key={zone.id} delay={70 * (index + 1)}>
                <PartnerButton className="w-full text-left">
                  <article
                    className="group relative flex h-[195px] flex-col justify-between overflow-hidden rounded-[20px] border border-black/10 bg-[#0e131a] p-4 shadow-[0_4px_18px_rgba(20,50,90,0.03)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(20,50,90,0.08)] cursor-pointer"
                    style={{
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Background Image */}
                    <Image
                      src={zone.bgImage}
                      alt={zone.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

                    {/* Top Sliding Layer (Translates upward smoothly on hover) */}
                    <div className="relative z-10 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-9 sm:group-hover:-translate-y-10">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="font-varela text-xs font-bold tracking-wider text-white/60">
                            {zone.number}
                          </span>
                          <h3 className="font-varela text-base font-bold text-white tracking-tight mt-0.5 leading-snug">
                            {zone.name}
                          </h3>
                          <span className="mt-0.5 block font-jakarta text-[11px] font-semibold uppercase tracking-wider text-[#78D8C6]">
                            {zone.sqm}
                          </span>
                        </div>

                        {/* 2D Arrow Icon Badge with Micro-Motion */}
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors duration-300 group-hover:border-white group-hover:text-white shrink-0">
                          <ArrowRight className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-[1.04]" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Reveal Layer (Fades & translates up after top movement) */}
                    <div className="relative z-10 mt-auto">
                      {/* Divider */}
                      <div className="h-px w-full bg-white/20 opacity-0 transition-opacity duration-350 delay-75 group-hover:opacity-100 mb-1.5" />

                      {/* Revealed Description & CTA */}
                      <div className="opacity-0 translate-y-3 transition-all duration-450 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                        <p className="font-jakarta text-[11px] leading-tight text-white/85 line-clamp-2">
                          {zone.description}
                        </p>
                        <div className="mt-1 flex items-center gap-1 font-jakarta text-[10px] font-bold uppercase tracking-wider text-[#78D8C6]">
                          <span>EXPLORE</span>
                          <ArrowRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </article>
                </PartnerButton>
              </ScrollReveal>
            ))}

            {/* Card 10: ALL SPACES | Explore the Citadel (CTA Card) */}
            <ScrollReveal delay={630}>
              <PartnerButton className="w-full text-left">
                <article
                  className="group relative flex h-[195px] flex-col justify-between overflow-hidden rounded-[20px] border border-primary/30 bg-gradient-to-br from-[#0052FF] via-[#0047DB] to-[#002f9c] p-4 shadow-[0_6px_22px_rgba(0,82,255,0.18)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(0,82,255,0.32)] cursor-pointer text-white"
                  style={{
                    borderColor: "rgba(0, 82, 255, 0.4)",
                  }}
                >
                  {/* Subtle Geometric Architectural Blueprint Grid */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(#ffffff 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                    }}
                  />
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full border border-white/20" />
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 rounded-full border border-white/10" />

                  {/* Top Sliding Layer */}
                  <div className="relative z-10 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-8">
                    <div className="flex items-center gap-2">
                      <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">
                        ALL SPACES
                      </span>
                      <div className="h-px w-8 bg-white/40" />
                    </div>

                    <h3 className="mt-2.5 font-varela text-xl font-bold tracking-tight text-white leading-snug">
                      Explore
                      <br />
                      the Citadel
                    </h3>
                  </div>

                  {/* Bottom Reveal Layer */}
                  <div className="relative z-10 mt-auto flex items-end justify-between">
                    <div className="opacity-0 translate-y-3 transition-all duration-450 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="font-jakarta text-[11px] font-medium text-white/90">
                        Campus blueprints &amp; specs
                      </span>
                    </div>

                    <div className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white transition-all duration-300 group-hover:bg-white group-hover:text-primary shrink-0">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </PartnerButton>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Editorial Footer Bar */}
        <ScrollReveal delay={700}>
          <div className="mt-10 border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <span className="font-jakarta text-xs font-semibold tracking-[0.22em] text-foreground/50 uppercase">
              STUDENTS. IDEAS. REAL IMPACT.
            </span>
            <span className="font-jakarta text-xs font-bold tracking-[0.2em] text-foreground/70 uppercase">
              CAMPUS &rarr; IDEAS &rarr; EXECUTION &rarr; IMPACT
            </span>
            <span className="font-jakarta text-xs font-semibold tracking-[0.22em] text-foreground/50 uppercase">
              BUILT FOR WHAT&apos;S NEXT.
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
