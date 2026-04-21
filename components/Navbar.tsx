"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TextLink {
  label: string;
  href: string;
}

interface DropdownImageCard {
  src: string;
  label: string;
  href: string;
}

interface DropdownDataA {
  type: "featured";
  image: string;
  imageLabel: string;
  links: TextLink[];
}

interface DropdownDataB {
  type: "cards";
  cards: DropdownImageCard[];
}

type DropdownData = DropdownDataA | DropdownDataB;

const dropdowns: Record<string, DropdownData> = {
  // vision: {
  //   type: "featured",
  //   image: "/webp/1.webp",
  //   imageLabel: "Our Philosophy",
  //   links: [
  //     { label: "Execution First", href: "/#vision" },
  //     { label: "Active Creators", href: "/#vision" },
  //     { label: "Unified Ecosystem", href: "/#vision" },
  //     { label: "Our Story", href: "/#vision" },
  //     { label: "The FORGE Way", href: "/#vision" },
  //   ],
  // },
  // programs: {
  //   type: "cards",
  //   cards: [
  //     { src: "/webp/2.webp", label: "Skill Up", href: "/programs" },
  //     { src: "/webp/3.webp", label: "Innovate & Build", href: "/programs" },
  //     { src: "/webp/4.webp", label: "Launch", href: "/programs" },
  //   ],
  // },
  // impact: {
  //   type: "featured",
  //   image: "/webp/1.webp",
  //   imageLabel: "Real Impact",
  //   links: [
  //     { label: "Student Led", href: "/impact" },
  //     { label: "Industry Backed", href: "/impact" },
  //     { label: "100+ Startups Launched", href: "/impact" },
  //     { label: "Campus Wide", href: "/impact" },
  //   ],
  // },
};

const navItems = [
  { key: "vision", label: "Ecosystem", href: "/ecosystem" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "citadel", label: "Citadel", href: "/citadel1" },
  { key: "community", label: "Community", href: "/community" },
];

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinkRefs = useRef<HTMLElement[]>([]);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  useGSAP(() => {
    // Intro animation
    gsap.from(containerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    });
  }, { scope: containerRef });

  const handleButtonMouseEnter = () => {
    gsap.to(buttonRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  };

  const handleButtonMouseLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  // Dropdown hover logic

  const openDropdown = useCallback((key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  // Animate dropdown on activeDropdown change
  useGSAP(() => {
    if (!dropdownRef.current) return;
    if (activeDropdown) {
      gsap.killTweensOf(dropdownRef.current);
      gsap.set(dropdownRef.current, { display: "block", opacity: 0, y: -12 });
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power3.out",
      });
    } else {
      gsap.killTweensOf(dropdownRef.current);
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(dropdownRef.current, { display: "none" });
        },
      });
    }
  }, { dependencies: [activeDropdown] });

  // Mobile Menu Animation
  useGSAP(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power3.out",
        display: "flex"
      });

      const validRefs = mobileLinkRefs.current.filter(Boolean);
      if (validRefs.length > 0) {
        gsap.fromTo(validRefs,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power3.out" }
        );
      }
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          if (mobileMenuRef.current) mobileMenuRef.current.style.display = "none";
        }
      });
    }
  }, { dependencies: [mobileMenuOpen] });

  const data = activeDropdown ? dropdowns[activeDropdown] : null;

  return (
    <>
      <div ref={containerRef} className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 md:px-8 pointer-events-none">

        {/* Main Header Container */}
        <div className="w-full max-w-[1400px] flex items-start justify-between pointer-events-auto relative">

          {/* Logo - Left */}
          <Link href="/" className="hidden md:flex items-center gap-2 group mt-2 shrink-0">
            <div className="relative w-32 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image src="/forge-logo.svg" alt="FORGE" fill className="object-contain object-left" />
            </div>
          </Link>

          {/* Center Area (Nav Pill & Dropdown) */}
          <div className="flex-1 flex flex-col items-center mx-auto w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">

            <nav className="flex items-center justify-between md:justify-center px-6 md:px-8 py-3 w-full md:w-auto bg-white/60 backdrop-blur-md border border-white/20 rounded-full shadow-lg">

              {/* Mobile Logo */}
              <Link href="/" className="flex md:hidden items-center gap-2 group">
                <div className="relative w-28 h-8 transition-transform duration-300 group-hover:scale-105">
                  <Image src="/forge-logo.svg" alt="FORGE" fill className="object-contain object-left" />
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-8 font-jakarta font-medium text-sm text-foreground/80">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="whitespace-nowrap hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-foreground z-50 relative ml-4"
                onClick={toggleMobileMenu}
              >
                <div className="w-6 flex flex-col gap-1.5 items-end">
                  <span className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                  <span className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4"}`} />
                  <span className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
                </div>
              </button>
            </nav>

            {/* Dropdown Manager */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] max-w-[90vw] pointer-events-none z-40">
              <div
                ref={dropdownRef}
                className="hidden pointer-events-auto w-full"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 overflow-hidden">
                  {data?.type === "featured" && (
                    <FeaturedDropdown data={data} />
                  )}
                  {data?.type === "cards" && (
                    <CardsDropdown data={data} />
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* CTA - Right */}
          <div className="hidden md:flex items-center mt-1 shrink-0">
            <button
              ref={buttonRef}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-shadow"
            >
              Partner With Forge
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 flex-col items-center justify-start overflow-y-auto px-6 py-24 pb-32"
        style={{ transform: "translateX(100%)" }}
      >
        <nav className="flex flex-col items-start w-full max-w-md gap-6 mx-auto">
          {navItems.map((item, idx) => {
            const hasDropdown = dropdowns[item.key] !== undefined;
            const dropdownData = dropdowns[item.key];
            const isOpen = openMobileAccordion === item.key;

            return (
              <div
                key={item.key}
                className="w-full flex flex-col border-b border-black/10 pb-4"
                ref={(el) => {
                  if (el) mobileLinkRefs.current[idx] = el;
                }}
              >
                {hasDropdown ? (
                  <button
                    className="w-full flex items-center justify-between font-clash font-bold text-3xl text-left text-black hover:text-primary transition-colors focus:outline-none"
                    onClick={() => setOpenMobileAccordion(isOpen ? null : item.key)}
                  >
                    {item.label}
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-black/50"
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="w-full flex items-center justify-between font-clash font-bold text-3xl text-left text-black hover:text-primary transition-colors focus:outline-none"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}

                {hasDropdown && (
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-4 pl-4 border-l-2 border-primary/40">
                        {dropdownData?.type === "featured" &&
                          dropdownData.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="text-xl font-jakarta font-medium text-black/70 hover:text-primary transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        {dropdownData?.type === "cards" &&
                          dropdownData.cards.map((card) => (
                            <Link
                              key={card.label}
                              href={card.href}
                              className="flex items-center gap-3 text-xl font-jakarta font-medium text-black/70 hover:text-primary transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {/* Option to add an image card thumbnail here, but text-only is cleaner for mobile */}
                              {card.label}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div
            className="w-full pt-4 flex flex-col gap-4"
            ref={(el) => {
              if (el) mobileLinkRefs.current[navItems.length] = el;
            }}
          >
            <Link
              href="/login"
              className="w-full text-center border-2 border-black/10 hover:border-black text-black px-8 py-4 rounded-full font-bold text-xl tracking-wide transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="#start"
              className="w-full text-center bg-primary text-white px-8 py-4 rounded-full font-bold text-xl tracking-wide shadow-xl"
              onClick={() => setMobileMenuOpen(false)}
              ref={(el) => {
                if (el) mobileLinkRefs.current[navItems.length + 1] = el;
              }}
            >
              Start a Chapter
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

// --- Featured layout: image on left + links on right ---
function FeaturedDropdown({ data }: { data: DropdownDataA }) {
  return (
    <div className="flex gap-6">
      {/* Image */}
      <Link
        href={data.links[0]?.href || "#"}
        className="relative w-64 h-72 flex-shrink-0 rounded-2xl overflow-hidden group"
      >
        <Image
          src={data.image}
          alt={data.imageLabel}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Label + Arrow */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <span className="font-varela font-semibold text-white text-lg">
            {data.imageLabel}
          </span>
          <span className="bg-white/90 rounded-full p-2 shadow-md group-hover:scale-110 transition-transform">
            <ArrowRight size={16} className="text-foreground" />
          </span>
        </div>
      </Link>

      {/* Links grid */}
      <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-1 content-center">
        {data.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-jakarta text-[15px] text-foreground/80 hover:text-primary transition-colors py-2.5 border-b border-gray-100 last:border-0 flex items-center gap-2 group"
          >
            <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
              <ArrowRight size={14} className="text-primary" />
            </span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- Cards layout: 3 image cards side-by-side ---
function CardsDropdown({ data }: { data: DropdownDataB }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.cards.map((card) => (
        <Link
          key={card.label}
          href={card.href}
          className="relative h-64 rounded-2xl overflow-hidden group"
        >
          <Image
            src={card.src}
            alt={card.label}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {/* Label + Arrow */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="font-varela font-semibold text-white text-lg">
              {card.label}
            </span>
            <span className="bg-white/90 rounded-full p-2 shadow-md group-hover:scale-110 transition-transform">
              <ArrowRight size={16} className="text-foreground" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
