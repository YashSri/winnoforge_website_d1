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
  { key: "citadel", label: "FORGE Citadel", href: "/citadel1" },
  { key: "community", label: "Community", href: "/community" },
  { key: "collaborate", label: "Collaborate", href: "/collaborate" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active item check: only active when user is on the specific route, never on home page
  const isItemActive = (href: string) => {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entrance animation for Navbar
  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      gsap.from(barRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.1,
      });
    },
    { scope: navWrapperRef },
  );

  return (
    <>
      <header
        ref={navWrapperRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled ? "pt-3 md:pt-4" : "pt-6 md:pt-8"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div
            ref={barRef}
            className={`relative w-full rounded-full flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "py-4 md:py-4.5 px-6 md:px-10 bg-white border-2 border-slate-200/90 shadow-[0_14px_45px_rgba(0,0,0,0.12)]"
                : "py-5 md:py-6 px-8 md:px-12 bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
            }`}
          >
            {/* Ambient subtle glow accent behind right CTA */}
            <div
              aria-hidden="true"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-56 h-24 bg-blue-500/15 blur-2xl rounded-full pointer-events-none"
            />

            {/* Left: FORGE Logo (Significantly enlarged for high visibility from afar) */}
            <Link
              href="/"
              aria-label="FORGE home"
              className="flex items-center gap-2 group shrink-0 relative z-10"
            >
              <div className="relative w-36 sm:w-44 md:w-52 h-9 sm:h-11 md:h-12 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/forge-logo.svg"
                  alt="FORGE"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Center: Desktop Navigation Links (Bold, high-contrast, perfectly visible) */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-2 xl:gap-4 relative z-10"
            >
              {navItems.map((item) => {
                const active = isItemActive(item.href);

                return (
                  <div
                    key={item.key}
                    className="relative flex flex-col items-center"
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative transition-all duration-200 text-sm xl:text-base whitespace-nowrap ${
                        active
                          ? "px-6 py-2.5 rounded-full bg-white border border-blue-100/80 shadow-[0_4px_16px_rgba(22,131,232,0.18)] text-[#1683E8] font-extrabold tracking-tight"
                          : "px-4 py-2 text-[#000000] hover:text-[#1683E8] font-bold tracking-tight"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-2 w-2 h-2 rounded-full bg-[#1683E8] shadow-[0_0_8px_#1683E8]"
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right: Desktop CTA Area with Divider & Large High-Visibility Button */}
            <div className="hidden lg:flex items-center gap-5 shrink-0 relative z-10">
              {/* Vertical separator before CTA */}
              <span
                aria-hidden="true"
                className="h-8 w-[1.5px] bg-slate-300/80"
              />

              <Link
                href="/collaborate"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0066FF] to-[#0052D4] hover:from-[#0052D4] hover:to-[#003da8] text-white px-8 py-3.5 rounded-full text-sm xl:text-base font-bold tracking-wide transition-all duration-200 shadow-[0_6px_24px_rgba(0,102,255,0.4)] hover:shadow-[0_8px_30px_rgba(0,102,255,0.55)] hover:scale-105"
              >
                <span>Get in Touch</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5"
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
                className="p-2 text-[#000000] hover:text-[#1683E8] focus:outline-none focus:ring-2 focus:ring-[#1683E8] rounded-xl transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-8 h-8" aria-hidden="true" />
                ) : (
                  <Menu className="w-8 h-8" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-[#0F172A]/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-28 left-4 right-4 bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-lg font-bold transition-colors ${
                      active
                        ? "bg-white shadow-[0_4px_16px_rgba(22,131,232,0.18)] text-[#1683E8] border border-blue-100"
                        : "text-[#000000] hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1683E8] shadow-[0_0_8px_#1683E8]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-5 mt-3 border-t-2 border-slate-100">
                <Link
                  href="/collaborate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-[#0066FF] to-[#0052D4] text-white py-4 rounded-full text-lg font-bold shadow-[0_6px_24px_rgba(0,102,255,0.4)] transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
