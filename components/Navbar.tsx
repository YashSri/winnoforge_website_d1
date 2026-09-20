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
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollPosition > 20);
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
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 ease-out ${
          scrolled ? "pt-3 md:pt-4" : "pt-6 md:pt-8"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div
            ref={barRef}
            className={`pointer-events-auto relative w-full rounded-full flex items-center justify-between transition-all duration-300 bg-white border border-slate-200/90 backdrop-blur-2xl ${
              scrolled
                ? "py-3.5 md:py-4 px-6 md:px-10 shadow-[0_16px_50px_rgba(0,0,0,0.12)] border-slate-300/90"
                : "py-4 md:py-5 px-8 md:px-12 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
            }`}
            style={{ backgroundColor: "#ffffff", opacity: 1 }}
          >
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

            {/* Center: Desktop Navigation Links (Clean color-only active state, no shift, no pointer) */}
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
                    className={`px-4 py-2 text-sm xl:text-base font-semibold tracking-tight whitespace-nowrap transition-colors duration-200 ${
                      active
                        ? "text-[#1683E8]"
                        : "text-[#0E2E48] hover:text-[#1683E8]"
                    }`}
                  >
                    {item.label}
                  </Link>
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
            className={`absolute ${scrolled ? "top-20 sm:top-22" : "top-28"} left-4 right-4 bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300`}
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
                        ? "text-[#1683E8] bg-blue-50/60"
                        : "text-[#0E2E48] hover:bg-slate-50 hover:text-[#1683E8]"
                    }`}
                  >
                    <span>{item.label}</span>
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
