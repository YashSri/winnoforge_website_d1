"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Partner {
  name: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  category: string;
  customClass?: string;
}

const partners: Partner[] = [
  {
    name: "SOTI",
    alt: "SOTI logo",
    src: "/logos/partners/soti.png",
    width: 424,
    height: 98,
    category: "Enterprise Mobility",
    customClass: "max-h-[26px] sm:max-h-[30px] max-w-[125px]",
  },
  {
    name: "we360.ai",
    alt: "we360.ai logo",
    src: "/logos/partners/we360-ai.png",
    width: 720,
    height: 378,
    category: "Workforce Analytics",
    customClass: "max-h-[32px] sm:max-h-[36px] max-w-[130px]",
  },
  {
    name: "Rediff",
    alt: "Rediff logo",
    src: "/logos/partners/rediff.png",
    width: 298,
    height: 84,
    category: "Enterprise Media",
    customClass: "max-h-[26px] sm:max-h-[30px] max-w-[115px]",
  },
  {
    name: "Aarcon",
    alt: "Aarcon logo",
    src: "/logos/partners/aarcon.png",
    width: 287,
    height: 68,
    category: "Enterprise Tech",
    customClass: "max-h-[26px] sm:max-h-[30px] max-w-[120px]",
  },
  {
    name: "Netwrix",
    alt: "Netwrix logo",
    src: "/logos/partners/netwrix.png",
    width: 374,
    height: 82,
    category: "Data Security",
    customClass: "max-h-[26px] sm:max-h-[30px] max-w-[125px]",
  },
  {
    name: "Cybercube",
    alt: "Cybercube logo",
    src: "/logos/partners/cybercube.png",
    width: 518,
    height: 154,
    category: "Cyber Risk Analytics",
    customClass: "max-h-[28px] sm:max-h-[32px] max-w-[130px]",
  },
  {
    name: "Heizen",
    alt: "Heizen logo",
    src: "/logos/partners/heizen.png",
    width: 300,
    height: 82,
    category: "Systems Automation",
    customClass: "max-h-[26px] sm:max-h-[30px] max-w-[115px]",
  },
  {
    name: "Data Resolve",
    alt: "Data Resolve logo",
    src: "/logos/partners/data-resolve.png",
    width: 876,
    height: 178,
    category: "Data Security",
    customClass: "max-h-[28px] sm:max-h-[32px] max-w-[135px]",
  },
  {
    name: "Utkarsh Bank",
    alt: "Utkarsh Small Finance Bank logo",
    src: "/logos/partners/utkarsh.png",
    width: 220,
    height: 144,
    category: "Banking & Finance",
    customClass: "max-h-[38px] sm:max-h-[44px] max-w-[105px]",
  },
  {
    name: "Fortinet",
    alt: "Fortinet logo",
    src: "/logos/partners/fortinet.png",
    width: 351,
    height: 41,
    category: "Network Security",
    customClass: "max-h-[22px] sm:max-h-[26px] max-w-[135px]",
  },
  {
    name: "Lenovo",
    alt: "Lenovo logo",
    src: "/logos/partners/lenovo.png",
    width: 1334,
    height: 445,
    category: "Global Computing",
    customClass: "max-h-[30px] sm:max-h-[34px] max-w-[125px]",
  },
  {
    name: "Acer",
    alt: "Acer logo",
    src: "/logos/partners/acer.png",
    width: 330,
    height: 84,
    category: "Hardware & Tech",
    customClass: "max-h-[26px] sm:max-h-[30px] max-w-[115px]",
  },
  {
    name: "InstaSafe",
    alt: "InstaSafe logo",
    src: "/logos/partners/instasafe.png",
    width: 509,
    height: 154,
    category: "Zero Trust Security",
    customClass: "max-h-[30px] sm:max-h-[34px] max-w-[130px]",
  },
  {
    name: "Zebra",
    alt: "Zebra Technologies logo",
    src: "/logos/partners/zebra.png",
    width: 459,
    height: 151,
    category: "Edge Solutions",
    customClass: "max-h-[30px] sm:max-h-[34px] max-w-[130px]",
  },
  {
    name: "Motadata",
    alt: "Motadata logo",
    src: "/logos/partners/motadata.png",
    width: 1312,
    height: 381,
    category: "AI IT Operations",
    customClass: "max-h-[30px] sm:max-h-[34px] max-w-[135px]",
  },
  {
    name: "Quantum Networks",
    alt: "Quantum Networks logo",
    src: "/logos/partners/quantum-networks.png",
    width: 421,
    height: 120,
    category: "Enterprise Wi-Fi",
    customClass: "max-h-[28px] sm:max-h-[32px] max-w-[135px]",
  },
  {
    name: "Userful",
    alt: "Userful logo",
    src: "/logos/partners/userful.png",
    width: 288,
    height: 158,
    category: "Visual Networking",
    customClass: "max-h-[32px] sm:max-h-[38px] max-w-[120px]",
  },
  {
    name: "Sophos",
    alt: "Sophos logo",
    src: "/logos/partners/sophos.png",
    width: 274,
    height: 191,
    category: "Next-Gen Cyber",
    customClass: "max-h-[38px] sm:max-h-[44px] max-w-[100px]",
  },
  {
    name: "Claude",
    alt: "Claude Anthropic logo",
    src: "/logos/partners/claude.png",
    width: 496,
    height: 108,
    category: "Frontier AI",
    customClass: "max-h-[28px] sm:max-h-[32px] max-w-[135px]",
  },
  {
    name: "Tata AIG",
    alt: "Tata AIG Insurance logo",
    src: "/logos/partners/tata-aig.png",
    width: 461,
    height: 461,
    category: "Insurance & Risk",
    customClass: "max-h-[42px] sm:max-h-[48px] max-w-[65px]",
  },
  {
    name: "Hexnode",
    alt: "Hexnode logo",
    src: "/logos/partners/hexnode.png",
    width: 786,
    height: 195,
    category: "Endpoint Security",
    customClass: "max-h-[28px] sm:max-h-[32px] max-w-[135px]",
  },
  {
    name: "Honda",
    alt: "Honda logo",
    src: "/logos/partners/honda.png",
    width: 215,
    height: 140,
    category: "Mobility & Eng.",
    customClass: "max-h-[38px] sm:max-h-[44px] max-w-[95px]",
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
      { threshold: 0.1 }
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
        "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
      transitionDelay: `${delayMs}ms`,
    };
  };

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FBFDFF] via-white to-[#F8FAFC] py-20 sm:py-24 md:py-28 lg:py-32"
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

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12">
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
          {/* Eyebrow with subtle flanking lines */}
          <div
            style={entranceStyle(0, 12)}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <span className="h-[1px] w-8 sm:w-14 bg-[#1683E8]/35" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1683E8]">
              <Sparkles className="h-3.5 w-3.5 text-[#1683E8]" />
              PARTNER &amp; CONTRIBUTOR REPRESENTATION
            </span>
            <span className="h-[1px] w-8 sm:w-14 bg-[#1683E8]/35" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h2
            style={entranceStyle(100, 18)}
            className="font-clash text-center font-bold tracking-[-0.04em] text-[#0D1117] leading-[1.02] text-[36px] sm:text-[48px] md:text-[58px] lg:text-[70px]"
          >
            Built With People
            <br />
            and <span className="text-[#1683E8]">Organisations.</span>
          </h2>

          {/* Supporting Statement */}
          <p
            style={entranceStyle(200, 14)}
            className="mt-5 mx-auto max-w-[680px] text-center font-jakarta text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed text-[#14233C]/70"
          >
            Learning becomes transformative when institutions, industry leaders, and builders create together.
            Here is a partial list of our partner companies collaborating across FORGE programs.
          </p>

          {/* Counter pill */}
          <div
            style={entranceStyle(280, 10)}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D9E2EE] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(16,42,67,0.04)]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-jakarta text-xs font-semibold text-[#14233C]/80">
              22 Industry &amp; Technology Partners Represented
            </span>
          </div>
        </div>

        {/* 22 Partner Logos Grid: Clean Responsive Editorial Mosaic */}
        <div
          style={entranceStyle(340, 20)}
          className="mt-12 sm:mt-16 w-full"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-4.5">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                style={entranceStyle(380 + Math.min(index * 30, 400), 12)}
                className="group relative flex flex-col items-center justify-between rounded-[20px] border border-[#E2E8F0] bg-white/95 p-4 sm:p-5 shadow-[0_4px_14px_rgba(16,42,67,0.03)] backdrop-blur-sm transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#BFD8F5] hover:bg-white hover:shadow-[0_16px_32px_rgba(22,131,232,0.11)]"
              >
                {/* Logo Artwork with Subtle Hover Float */}
                <div className="relative flex items-center justify-center w-full h-[62px] sm:h-[68px] transition-transform duration-350 ease-out group-hover:scale-[1.04]">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className={`w-auto h-auto object-contain transition-all duration-350 ease-out opacity-90 saturate-[0.92] group-hover:opacity-100 group-hover:saturate-100 ${partner.customClass}`}
                    priority={index < 6}
                  />
                </div>

                {/* Company Name & Category Pill */}
                <div className="mt-2 flex flex-col items-center text-center w-full">
                  <span className="font-jakarta text-[11px] sm:text-xs font-bold text-[#111827] group-hover:text-[#1683E8] transition-colors truncate max-w-full">
                    {partner.name}
                  </span>
                  <span className="mt-0.5 font-jakarta text-[10px] font-medium text-[#64748B] tracking-tight truncate max-w-full">
                    {partner.category}
                  </span>
                </div>

                {/* Subtle FORGE blue underline indicator (0 → 28px) */}
                <span
                  aria-hidden="true"
                  className="mt-2 h-[2px] w-0 rounded-full bg-[#1683E8] opacity-0 transition-all duration-300 ease-out group-hover:w-7 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Collaboration Callout Box */}
        <div
          style={entranceStyle(500, 16)}
          className="mt-12 sm:mt-16 mx-auto max-w-3xl rounded-[24px] border border-[#D9E2EE] bg-white p-6 sm:p-8 text-center shadow-[0_12px_36px_rgba(16,42,67,0.05)]"
        >
          <h3 className="font-clash text-xl sm:text-2xl font-bold text-[#0D1117]">
            Build the Next Generation of Builders With Us
          </h3>
          <p className="mt-2.5 font-jakarta text-sm sm:text-base leading-relaxed text-[#14233C]/70">
            From co-creating industry-backed problem statements to mentorship, capstones, and hiring pipelines, discover how your organisation can partner with FORGE.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#collaborate-form"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1683E8] px-6 font-jakarta text-sm font-bold text-white shadow-[0_8px_20px_rgba(22,131,232,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102A43]"
            >
              <span>Explore Partnership</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
