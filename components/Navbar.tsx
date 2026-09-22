"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { key: "ecosystem", label: "Ecosystem", href: "/ecosystem" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "citadel", label: "Citadel", href: "/citadel1" },
  { key: "community", label: "Community", href: "/community" },
  { key: "collaborate", label: "Collaborate", href: "/collaborate" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * GLOBAL NAVBAR — FLOATING GLASS EFFECT
 * Applied globally across all pages with translucent
 * glassmorphism, slow highlight animation, and ambient FORGE blue
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Navbar() {
  const pathname = usePathname();
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active item check: only active when user is on the specific route
  const isItemActive = (href: string) => {
    return (
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(scrollPosition > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth entrance animation for Navbar on initial page load
  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      gsap.fromTo(
        barRef.current,
        { opacity: 0, y: -15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          delay: 0.05,
        }
      );
    },
    { scope: navWrapperRef }
  );

  return (
    <>
      <style>{`
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
      `}</style>

      <header
        ref={navWrapperRef}
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "pt-3 md:pt-4" : "pt-5 md:pt-7"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative">
          {/* Subtle Ambient FORGE Blue Glow behind the navbar */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -top-6 -translate-x-1/2 w-3/4 max-w-[800px] h-20 rounded-full bg-[#1683EA]/[0.08] blur-[25px] -z-10"
            style={{
              animation: "ambientDrift 22s ease-in-out infinite",
            }}
          />

          {/* Floating Glass Navigation Surface */}
          <div
            ref={barRef}
            className={`pointer-events-auto relative w-full rounded-[20px] sm:rounded-[22px] flex items-center justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled
                ? "py-3 md:py-3.5 px-6 md:px-9 bg-white/86 backdrop-blur-[20px] border border-white/80 shadow-[0_10px_35px_rgba(20,40,80,0.08)]"
                : "py-3.5 md:py-4 px-7 md:px-11 bg-white/72 backdrop-blur-[16px] border border-white/65 shadow-[0_8px_30px_rgba(30,60,100,0.06)]"
            }`}
            style={{
              WebkitBackdropFilter: scrolled
                ? "blur(20px) saturate(150%)"
                : "blur(16px) saturate(140%)",
            }}
          >
            {/* Very Subtle Moving Glass Highlight Shimmer (.navbar::after) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-px h-[2px] w-[50%] bg-gradient-to-r from-transparent via-white/85 to-transparent blur-[6px] -z-0"
              style={{
                animation: "navbarGlassShine 12s ease-in-out infinite",
              }}
            />

            {/* Left: FORGE Logo */}
            <Link
              href="/"
              aria-label="FORGE home"
              className="flex items-center gap-2 group shrink-0 relative z-10"
            >
              <div className="relative w-32 sm:w-40 md:w-48 h-8 sm:h-10 md:h-11 transition-transform duration-250 group-hover:scale-[1.03]">
                <Image
                  src="/forge-logo.svg"
                  alt="FORGE"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Center: Desktop Navigation Links with animated underline */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2 relative z-10"
            >
              {navItems.map((item) => {
                const active = isItemActive(item.href);

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group/nav relative px-3.5 xl:px-4 py-2 text-sm xl:text-[15px] font-semibold tracking-tight whitespace-nowrap transition-colors duration-250 ${
                      active
                        ? "text-[#1683EA]"
                        : "text-[#1E293B] hover:text-[#1683EA]"
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Minimal animated underline */}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#1683EA] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover/nav:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Desktop CTA Button with Divider */}
            <div className="hidden lg:flex items-center gap-5 shrink-0 relative z-10">
              <span
                aria-hidden="true"
                className="h-6 w-[1.5px] bg-[#D9DEE7]/70"
              />

              <Link
                href="/collaborate"
                className="group/cta inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0066FF] to-[#0052D4] hover:from-[#0052D4] hover:to-[#003da8] text-white px-7 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_6px_22px_rgba(0,102,255,0.35)] hover:shadow-[0_8px_28px_rgba(0,102,255,0.5)] hover:-translate-y-0.5 active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
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
                className="p-2 text-[#111111] hover:text-[#1683EA] focus:outline-none focus:ring-2 focus:ring-[#1683EA] rounded-xl transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7" aria-hidden="true" />
                ) : (
                  <Menu className="w-7 h-7" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Matching Glass Effect */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-[#0F172A]/40 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`absolute ${
              scrolled ? "top-20 sm:top-22" : "top-24 sm:top-26"
            } left-4 right-4 bg-white/92 backdrop-blur-[20px] border border-white/70 rounded-3xl p-6 shadow-[0_20px_50px_rgba(20,40,80,0.14)] animate-in slide-in-from-top-4 duration-300`}
            style={{
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between px-5 py-3 rounded-2xl text-base font-bold transition-all ${
                      active
                        ? "text-[#1683EA] bg-blue-50/70"
                        : "text-[#1E293B] hover:bg-slate-50 hover:text-[#1683EA]"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200/80">
                <Link
                  href="/collaborate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-[#0066FF] to-[#0052D4] text-white py-3.5 rounded-full text-base font-bold shadow-[0_6px_22px_rgba(0,102,255,0.35)] transition-all"
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
