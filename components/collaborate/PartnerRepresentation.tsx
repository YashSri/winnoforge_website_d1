"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Partner {
  name: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  customClass?: string;
}

const partners: Partner[] = [
  {
    name: "Airtel",
    alt: "Bharti Airtel logo",
    src: "/logos/airtel-transparent.png",
    width: 518,
    height: 170,
    customClass: "max-h-[52px] sm:max-h-[58px] md:max-h-[62px] lg:max-h-[66px]",
  },
  {
    name: "Perfetti van Melle",
    alt: "Perfetti Van Melle logo",
    src: "/logos/perfetti-transparent.png",
    width: 670,
    height: 294,
    customClass: "max-h-[54px] sm:max-h-[60px] md:max-h-[64px] lg:max-h-[70px]",
  },
  {
    name: "Dabur",
    alt: "Dabur Group logo",
    src: "/logos/dabur-transparent.png",
    width: 420,
    height: 180,
    customClass: "max-h-[56px] sm:max-h-[62px] md:max-h-[66px] lg:max-h-[72px]",
  },
  {
    name: "Lightstorm",
    alt: "Lightstorm logo",
    src: "/logos/lightstorm-transparent.png",
    width: 928,
    height: 218,
    customClass: "max-h-[46px] sm:max-h-[52px] md:max-h-[56px] lg:max-h-[60px]",
  },
  {
    name: "Infynix",
    alt: "Infynix Communications Ltd. logo",
    src: "/logos/infynix-transparent.png",
    width: 1000,
    height: 335,
    customClass: "max-h-[52px] sm:max-h-[58px] md:max-h-[62px] lg:max-h-[66px]",
  },
  {
    name: "Marico",
    alt: "Marico logo",
    src: "/logos/marico-transparent.png",
    width: 270,
    height: 201,
    customClass: "max-h-[60px] sm:max-h-[66px] md:max-h-[72px] lg:max-h-[76px]",
  },
];

export default function PartnerRepresentation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Entrance style helper with responsive easing
  const entranceStyle = (delayMs: number, translateY = 18) => {
    if (prefersReducedMotion) {
      return {
        opacity: isVisible ? 1 : 0,
        transition: "opacity 400ms ease",
      };
    }
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${translateY}px, 0)`,
      transition:
        "opacity 750ms cubic-bezier(0.22, 1, 0.36, 1), transform 750ms cubic-bezier(0.22, 1, 0.36, 1)",
      transitionDelay: `${delayMs}ms`,
    };
  };

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative w-full overflow-hidden bg-white py-24 sm:py-28 md:py-32 lg:py-36"
      aria-label="Partner and Contributor Representation"
    >
      {/* Decorative Editorial Background System: Subtle blue arcs & precise dots */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 640"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="editorialArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1683E8" stopOpacity="0.14" />
            <stop offset="60%" stopColor="#1683E8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1683E8" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Left Editorial Arcs */}
        <g className="partner-drift-left">
          <circle
            cx="140"
            cy="10"
            r="340"
            fill="none"
            stroke="url(#editorialArcGrad)"
            strokeWidth="1"
          />
          <circle
            cx="140"
            cy="10"
            r="200"
            fill="none"
            stroke="#1683E8"
            strokeWidth="1"
            strokeOpacity="0.09"
          />
          {/* Subtle constellation dots */}
          <circle cx="150" cy="74" r="3.5" fill="#1683E8" fillOpacity="0.85" />
          <circle cx="310" cy="180" r="2.5" fill="#1683E8" fillOpacity="0.55" />
          <circle cx="35" cy="270" r="2.5" fill="#1683E8" fillOpacity="0.45" />
        </g>

        {/* Right Editorial Arcs */}
        <g className="partner-drift-right">
          <circle
            cx="1300"
            cy="20"
            r="380"
            fill="none"
            stroke="url(#editorialArcGrad)"
            strokeWidth="1"
          />
          <circle
            cx="1300"
            cy="20"
            r="220"
            fill="none"
            stroke="#1683E8"
            strokeWidth="1"
            strokeOpacity="0.08"
          />
          {/* Subtle constellation dots */}
          <circle cx="1290" cy="115" r="4" fill="#1683E8" fillOpacity="0.85" />
          <circle cx="1120" cy="220" r="2.5" fill="#1683E8" fillOpacity="0.55" />
          <circle cx="1325" cy="360" r="3" fill="#1683E8" fillOpacity="0.65" />
        </g>

        {/* Gentle connecting curve through bottom section */}
        <path
          d="M-40,460 Q720,560 1480,440"
          fill="none"
          stroke="#1683E8"
          strokeWidth="1"
          strokeOpacity="0.07"
        />
      </svg>

      <style>{`
        @keyframes partnerDriftLeft {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(14px, -18px, 0);
          }
        }
        @keyframes partnerDriftRight {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-16px, 14px, 0);
          }
        }
        .partner-drift-left {
          animation: partnerDriftLeft 24s ease-in-out infinite;
        }
        .partner-drift-right {
          animation: partnerDriftRight 26s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .partner-drift-left,
          .partner-drift-right {
            animation: none !important;
          }
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-8 md:px-12">
        {/* Editorial Micro-Copy on Outer Margins (Desktop XL+) */}
        <div
          style={entranceStyle(150, 10)}
          className="pointer-events-none absolute left-6 md:left-12 top-2 hidden xl:flex flex-col gap-1 border-l border-[rgba(20,40,70,0.15)] pl-4 font-jakarta text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(20,40,70,0.45)] select-none"
        >
          <span>Ideas</span>
          <span>People</span>
          <span>Opportunities</span>
          <span className="text-[#1683E8]/85 font-bold">Real Impact.</span>
        </div>

        <div
          style={entranceStyle(150, 10)}
          className="pointer-events-none absolute right-6 md:right-12 top-2 hidden xl:flex flex-col gap-1 border-r border-[rgba(20,40,70,0.15)] pr-4 text-right font-jakarta text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(20,40,70,0.45)] select-none"
        >
          <span>Collaboration</span>
          <span>Turns Ideas</span>
          <span className="text-[#1683E8]/85 font-bold">Into Impact.</span>
        </div>

        {/* Section Header */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Small Eyebrow with Subtle Flanking Lines */}
          <div
            style={entranceStyle(0, 12)}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-9"
          >
            <span className="h-[1px] w-8 sm:w-14 bg-[#1683E8]/35" aria-hidden="true" />
            <span className="font-jakarta text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#1683E8]">
              Partner &amp; Contributor Representation
            </span>
            <span className="h-[1px] w-8 sm:w-14 bg-[#1683E8]/35" aria-hidden="true" />
          </div>

          {/* Main Heading: Apple-inspired editorial hierarchy */}
          <h2
            style={entranceStyle(120, 20)}
            className="font-clash text-center font-bold tracking-[-0.045em] text-[#0D1117] leading-[0.98] text-[40px] sm:text-[52px] md:text-[62px] lg:text-[76px]"
          >
            Built With People
            <br />
            and <span className="text-[#1683E8]">Organisations.</span>
          </h2>

          {/* Supporting Statement */}
          <p
            style={entranceStyle(240, 15)}
            className="mt-6 mx-auto max-w-[680px] text-center font-jakarta text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed text-[#14233C]/65"
          >
            Learning becomes more powerful when people, institutions, and
            industry build it together.
          </p>
        </div>

        {/* Partner Logos: ONE SINGLE HORIZONTAL ROW on Desktop/Tablet */}
        <div
          style={entranceStyle(360, 20)}
          className="mt-14 sm:mt-16 md:mt-[70px] w-full"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center w-full">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                style={entranceStyle(420 + index * 60, 10)}
                className="group relative flex flex-col items-center justify-center py-6 px-3 sm:px-5 md:px-4 lg:px-6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                {/* Logo Artwork with Subtle Hover Float */}
                <div className="relative flex items-center justify-center w-full h-[72px] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className={`w-auto h-auto object-contain transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-85 saturate-[0.88] group-hover:opacity-100 group-hover:saturate-100 ${partner.customClass}`}
                    priority={index < 3}
                  />
                </div>

                {/* Subtle FORGE blue underline indicator (0 → 28px) */}
                <span
                  aria-hidden="true"
                  className="mt-3 h-[2px] w-0 rounded-full bg-[#1683E8] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-7"
                />

                {/* Thin Vertical Separator (Desktop/Tablet: 1px x 75px, hidden after 6th) */}
                {index < partners.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[75px] w-[1px] bg-[rgba(20,40,70,0.10)] hidden md:block"
                  />
                )}

                {/* Mobile vertical divider for odd items (col 1 -> col 2) */}
                {index % 2 === 0 && index < partners.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[55px] w-[1px] bg-[rgba(20,40,70,0.10)] sm:hidden"
                  />
                )}

                {/* Mobile horizontal divider between rows */}
                {index < partners.length - 2 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-[1px] bg-[rgba(20,40,70,0.06)] sm:hidden"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
