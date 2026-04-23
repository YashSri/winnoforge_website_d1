"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const founderLogos = [
  { src: "/supporters/founder-remote.png", alt: "Founder company mark" },
  { src: "/supporters/xonier.png", alt: "Xonier Technologies" },
  { src: "/supporters/founder-cube.png", alt: "Founder technology mark" },
  { src: "/supporters/we360ai.png", alt: "we360.ai" },
  { src: "/supporters/hrjee.png", alt: "HRJee" },
  { src: "/supporters/faceoff.png", alt: "Faceoff" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const animTargets = [
        ".hero-heading",
        ".hero-keywords",
        ".hero-tags",
        ".hero-cta",
        ".hero-separator",
        ".hero-supporters",
      ];
      gsap.set(animTargets, { y: 30, opacity: 0 });
      gsap.set(".hero-video", { scale: 0.95, opacity: 0 });

      tl.delay(0.2)
        .to(animTargets, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        })
        .to(
          ".hero-video",
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-start pt-32 md:pt-36 pb-20 overflow-x-hidden bg-[#F0F3FA]"
    >
      {/* Main Content */}
      <div
        ref={textRef}
        className="relative z-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-12 pointer-events-none"
      >
        {/* Left Content (Text & Details) */}
        <div className="flex-1 flex flex-col items-start text-left w-full pointer-events-auto max-w-lg">
          {/* Main Heading */}
          <h1 className="hero-heading font-varela font-bold text-5xl md:text-6xl leading-[1.05] text-foreground mix-blend-color-burn">
            The Innovation Ecosystem, Where Builders Are Forged
          </h1>

          {/* Tags */}
          <div className="hero-tags flex flex-wrap items-center gap-3 mt-6">
            <span className="px-4 py-1.5 rounded-full border border-foreground/20 font-varela font-medium text-[13px] text-foreground/70 tracking-wide bg-white/40 shadow-sm backdrop-blur-md">
              Execution Pipeline
            </span>
            <span className="px-4 py-1.5 rounded-full border border-foreground/20 font-varela font-medium text-[13px] text-foreground/70 tracking-wide bg-white/40 shadow-sm backdrop-blur-md">
              Build Real MVPs
            </span>
            <span className="px-4 py-1.5 rounded-full border border-foreground/20 font-varela font-medium text-[13px] text-foreground/70 tracking-wide bg-white/40 shadow-sm backdrop-blur-md">
              Mentor Sprint Reviews
            </span>
          </div>

          <a
            href="/programs"
            className="hero-cta mt-8 inline-flex items-center gap-2 rounded-full bg-[#0E2E48] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:bg-[#143f62]"
          >
            Join The Program
            <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <div className="hero-supporters mt-8 w-full max-w-[42rem] rounded-[30px] bg-[#F0F3FA] px-4 py-4 shadow-[0_18px_40px_rgba(14,46,72,0.16)] md:px-5 md:py-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex-1">
                <span className="mb-3 block font-jakarta text-[11px] font-medium tracking-[0.02em] text-[#737373]">
                  Supported by Founders from:
                </span>

                <div className="flex min-h-[72px] flex-wrap items-center gap-x-4 gap-y-3 rounded-[18px] bg-[#F0F3FA] px-4 py-4 md:flex-nowrap md:justify-between md:px-5">
                  {founderLogos.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex shrink-0 items-center justify-center"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={100}
                        height={40}
                        className="h-7 w-auto object-contain md:h-6"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:max-w-[132px]">
                <span className="mb-3 block font-jakarta text-[11px] font-medium tracking-[0.02em] text-[#737373]">
                  Backed by:
                </span>

                <div className="flex h-[72px] items-center justify-center rounded-[18px] bg-[#F0F3FA] px-4">
                  <Image
                    src="/supporters/winnovation.png"
                    alt="WinNovation"
                    width={220}
                    height={72}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content (Video) */}
        <div className="hero-video flex-1 w-full max-w-sm md:max-w-2xl relative pointer-events-auto lg:mr-8 xl:mr-16">
          <div className="relative w-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm border border-white/40">
            <video
              suppressHydrationWarning
              src="/Logo_Animation_Gear_to_FORGE.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain rounded-3xl"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
