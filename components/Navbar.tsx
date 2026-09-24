"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const navItems = [
  { key: "ecosystem", label: "Ecosystem", href: "/ecosystem" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "citadel", label: "Citadel", href: "/citadel1" },
  { key: "community", label: "Community", href: "/community" },
  { key: "collaborate", label: "Collaborate", href: "/collaborate" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * GLOBAL NAVBAR — LIQUID GLASS FLOATING CAPSULE (iOS 26 INSPIRED)
 * Recreated as a floating liquid glass capsule:
 * - Shrinks to a compact pill on scroll down (reclaiming screen space)
 * - Springs back to full width with labels on scroll up, idle (600ms), or hover/focus
 * - Refined backdrop-filter blur(24px) saturate(180%)
 * - Liquid inner highlights and smooth sliding active pill
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Navbar() {
  const pathname = usePathname();
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [pillStyle, setPillStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Active item check: only active when user is on the specific route
  const isItemActive = (href: string) => {
    return (
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
    );
  };

  // Measure and position the active pill smoothly
  const updateActivePill = useCallback(() => {
    const activeItem = navItems.find((item) => isItemActive(item.href));
    if (
      activeItem &&
      itemRefs.current[activeItem.key] &&
      navContainerRef.current
    ) {
      const el = itemRefs.current[activeItem.key];
      if (el && navContainerRef.current) {
        const navRect = navContainerRef.current.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        setPillStyle({
          left: elRect.left - navRect.left,
          width: elRect.width,
          opacity: 1,
        });
      }
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [pathname]);

  // Recalculate on route, compactness change, and resize
  useEffect(() => {
    const timer = setTimeout(updateActivePill, 40);
    window.addEventListener("resize", updateActivePill);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateActivePill);
    };
  }, [updateActivePill, isCompact]);

  // Liquid Glass scroll physics: collapse on scroll down, spring-back on scroll up or 600ms idle
  useEffect(() => {
    const THRESHOLD = 10;
    let lastScrollY = 0;
    let idleTimer: NodeJS.Timeout;

    const handleScroll = () => {
      const y =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setScrolled(y > 35);

      // Collapse to compact pill when scrolling down; expand on scroll up
      if (y > lastScrollY + THRESHOLD && y > 50) {
        setIsCompact(true);
      } else if (y < lastScrollY - THRESHOLD) {
        setIsCompact(false);
      }
      lastScrollY = y;

      // 600ms idle timer: springs back to full width automatically
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setIsCompact(false);
      }, 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimer);
    };
  }, []);

  // Expand when pointer enters or any element receives focus
  const expandBar = () => {
    setIsCompact(false);
  };

  // Coordinated entrance animation on page load
  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      // 1. Glass navbar container enters
      tl.fromTo(
        barRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.05 }
      );

      // 2. Logo enters
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.5 },
          "-=0.55"
        );
      }

      // 3. Navigation links stagger
      if (navContainerRef.current) {
        const links = navContainerRef.current.querySelectorAll("a");
        tl.fromTo(
          links,
          { opacity: 0, y: -6 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.45 },
          "-=0.4"
        );
      }

      // 4. Get in Touch CTA enters last
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, x: 10 },
          { opacity: 1, x: 0, duration: 0.45 },
          "-=0.25"
        );
      }
    },
    { scope: navWrapperRef }
  );

  return (
    <>
      <style>{`
        /* Liquid Glass Inner Highlights */
        .liquid-glass-navbar::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 2px 2px 6px -3px rgba(255, 255, 255, 0.85),
            inset -2px -2px 6px -3px rgba(255, 255, 255, 0.65),
            inset 0 -1px 0 rgba(255, 255, 255, 0.4);
          pointer-events: none;
        }

        @keyframes navbarGlassShine {
          0% {
            left: -40%;
          }
          50% {
            left: 95%;
          }
          100% {
            left: -40%;
          }
        }

        @keyframes ambientDrift {
          0% {
            transform: translate(-10%, -20%) scale(1);
          }
          50% {
            transform: translate(15%, 10%) scale(1.15);
          }
          100% {
            transform: translate(-10%, -20%) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .liquid-glass-navbar::after,
          .animate-ambient-drift {
            animation: none !important;
          }
        }
      `}</style>

      <header
        ref={navWrapperRef}
        onPointerEnter={expandBar}
        onFocusCapture={expandBar}
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-450 ease-[cubic-bezier(0.34,1.4,0.5,1)] ${
          scrolled ? "pt-2.5 md:pt-3.5" : "pt-5 md:pt-6"
        }`}
      >
        <div
          className={`mx-auto px-4 sm:px-6 md:px-8 relative transition-all duration-450 ease-[cubic-bezier(0.34,1.4,0.5,1)] ${
            isCompact
              ? "max-w-[1080px] sm:max-w-[1140px]"
              : "w-full max-w-[1440px]"
          }`}
        >
          {/* Subtle Ambient FORGE Blue Glow behind the capsule */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -top-6 -translate-x-1/2 w-3/4 max-w-[700px] h-20 rounded-full bg-[#1683EA]/[0.08] blur-[28px] -z-10"
            style={{
              animation: "ambientDrift 24s ease-in-out infinite",
            }}
          />

          {/* Liquid Glass Capsule Bar */}
          <div
            ref={barRef}
            className={`liquid-glass-navbar pointer-events-auto relative w-full rounded-[999px] flex items-center justify-between overflow-hidden transition-all duration-450 ease-[cubic-bezier(0.34,1.4,0.5,1)] ${
              scrolled
                ? isCompact
                  ? "py-2 px-5 md:px-7 bg-white/[0.84] backdrop-blur-[24px] border border-white/85 shadow-[0_16px_40px_-15px_rgba(30,70,130,0.14)]"
                  : "py-2.5 md:py-3 px-6 md:px-8 bg-white/[0.80] backdrop-blur-[24px] border border-white/80 shadow-[0_14px_44px_rgba(30,70,130,0.10)]"
                : "py-3 md:py-3.5 px-6 md:px-9 bg-white/[0.70] backdrop-blur-[20px] border border-white/75 shadow-[0_12px_40px_rgba(30,70,130,0.08)]"
            }`}
            style={{
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            {/* Very Subtle Moving Liquid Glass Shimmer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-px h-[2px] w-[50%] bg-gradient-to-r from-transparent via-white/95 to-transparent blur-[6px] -z-0"
              style={{
                animation: "navbarGlassShine 14s ease-in-out infinite",
              }}
            />

            {/* Left: FORGE Logo (smoothly condenses on scroll) */}
            <Link
              ref={logoRef}
              href="/"
              aria-label="FORGE home"
              className="flex items-center gap-2 group shrink-0 relative z-10 outline-none focus-visible:outline-2 focus-visible:outline-[#1683E8] focus-visible:outline-offset-4 rounded-xl"
            >
              <div
                className={`relative transition-all duration-350 ease-[cubic-bezier(0.34,1.4,0.5,1)] group-hover:scale-[1.02] ${
                  isCompact
                    ? "w-28 sm:w-32 md:w-36 h-7 sm:h-8"
                    : "w-32 sm:w-38 md:w-44 h-8 sm:h-9 md:h-10"
                }`}
              >
                <Image
                  src="/forge-logo.svg"
                  alt="FORGE"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Center: Desktop Navigation with Apple-Style Sliding Active Pill */}
            <nav
              ref={navContainerRef}
              aria-label="Main Navigation"
              className={`hidden lg:flex items-center relative z-10 p-1 transition-all duration-450 ease-[cubic-bezier(0.34,1.4,0.5,1)] ${
                isCompact ? "gap-0.5 xl:gap-1" : "gap-1 xl:gap-1.5"
              }`}
            >
              {/* Sliding Active Liquid Pill Element */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1 bottom-1 rounded-full bg-[#E6F0FF]/90 border border-[#1683E8]/18 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_-4px_rgba(22,131,232,0.22)] transition-all duration-400 ease-[cubic-bezier(0.34,1.4,0.5,1)] motion-reduce:transition-none"
                style={{
                  transform: `translateX(${pillStyle.left}px)`,
                  width: `${pillStyle.width}px`,
                  opacity: pillStyle.opacity,
                }}
              >
                {/* Active micro accent underline */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#1683E8] rounded-full" />
              </div>

              {navItems.map((item) => {
                const active = isItemActive(item.href);

                return (
                  <Link
                    key={item.key}
                    ref={(el) => {
                      itemRefs.current[item.key] = el;
                    }}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group/nav relative z-10 rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.5,1)] outline-none focus-visible:outline-2 focus-visible:outline-[#1683E8] focus-visible:outline-offset-2 select-none ${
                      isCompact
                        ? "px-3 xl:px-3.5 py-1.5 text-xs xl:text-[13px]"
                        : "px-4 py-2 text-sm xl:text-[15px]"
                    } font-semibold tracking-tight whitespace-nowrap ${
                      active
                        ? "text-[#1683E8]"
                        : "text-[#151515] hover:text-[#1683E8] hover:bg-white/60 hover:-translate-y-px hover:shadow-[inset_1px_1px_4px_rgba(255,255,255,0.7)]"
                    }`}
                  >
                    <span className="inline-block transition-transform duration-200 group-hover/nav:-translate-y-px">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right: Desktop "Get in Touch" Button */}
            <div
              ref={ctaRef}
              className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0 relative z-10"
            >
              <span
                aria-hidden="true"
                className="h-5 w-[1.5px] bg-[#D9DEE7]/70"
              />

              <Link
                href="/collaborate#collaborate-form"
                className={`group/cta inline-flex items-center gap-2 bg-[#1683E8] hover:bg-[#1272cb] text-white rounded-full font-bold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.5,1)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_24px_rgba(22,131,232,0.22)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_30px_rgba(22,131,232,0.30)] hover:-translate-y-0.5 active:scale-[0.98] select-none outline-none focus-visible:outline-2 focus-visible:outline-[#1683E8] focus-visible:outline-offset-3 ${
                  isCompact
                    ? "px-5 py-2 text-xs"
                    : "px-6 xl:px-7 py-2.5 text-sm"
                }`}
              >
                <span>Get in Touch</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-250 group-hover/cta:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Mobile Hamburger Liquid Glass Button */}
            <div className="flex lg:hidden items-center relative z-10">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                className="relative flex items-center justify-center h-10 w-10 rounded-2xl border border-white/70 bg-white/60 backdrop-blur-md text-[#111111] transition-all duration-200 hover:bg-[#E6F0FF]/80 hover:text-[#1683E8] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] cursor-pointer shadow-xs"
              >
                <div className="relative h-5 w-5 flex items-center justify-center">
                  <Menu
                    className={`absolute h-5 w-5 transition-all duration-300 ${
                      mobileMenuOpen
                        ? "opacity-0 rotate-90 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                    aria-hidden="true"
                  />
                  <X
                    className={`absolute h-5 w-5 transition-all duration-300 ${
                      mobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Matching Liquid Glass Effect */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-[#0F172A]/30 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`absolute ${
              scrolled ? "top-20 sm:top-22" : "top-24 sm:top-26"
            } left-4 right-4 bg-white/92 backdrop-blur-[24px] border border-white/85 rounded-3xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_50px_rgba(30,70,130,0.14)] transition-all duration-300 animate-in fade-in slide-in-from-top-4`}
            style={{
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item, idx) => {
                const active = isItemActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    style={{
                      animationDelay: `${idx * 40}ms`,
                    }}
                    className={`flex items-center justify-between px-5 py-3 rounded-2xl text-base font-bold transition-all duration-200 ${
                      active
                        ? "text-[#1683E8] bg-[#E6F0FF]/90 border border-[#1683E8]/18 shadow-xs"
                        : "text-[#1E293B] hover:bg-slate-50/80 hover:text-[#1683E8]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-[#1683E8]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200/80">
                <Link
                  href="/collaborate#collaborate-form"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full bg-[#1683E8] hover:bg-[#1272cb] text-white py-3.5 rounded-full text-base font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_24px_rgba(22,131,232,0.25)] transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
