"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useModal } from "@/components/modal/ModalContext";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { key: "vision", label: "Ecosystem", href: "/ecosystem" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "citadel", label: "Citadel", href: "/citadel1" },
  { key: "community", label: "Community", href: "/community" },
];

export default function Navbar() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinkRefs = useRef<HTMLElement[]>([]);

  const { open } = useModal();
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const isActivePath = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      });
    },
    { scope: containerRef },
  );

  const handleButtonMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonMouseLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  useGSAP(
    () => {
      if (!mobileMenuRef.current) return;

      if (mobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          x: "0%",
          duration: 0.5,
          ease: "power3.out",
          display: "flex",
        });

        const validRefs = mobileLinkRefs.current.filter(Boolean);
        if (validRefs.length > 0) {
          gsap.fromTo(
            validRefs,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.1,
              delay: 0.2,
              ease: "power3.out",
            },
          );
        }
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            if (mobileMenuRef.current)
              mobileMenuRef.current.style.display = "none";
          },
        });
      }
    },
    { dependencies: [mobileMenuOpen] },
  );

  return (
    <>
      <div
        ref={containerRef}
        className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 md:px-8 pointer-events-none"
      >
        <div className="w-full max-w-[1400px] flex items-start justify-between pointer-events-auto relative">
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 group mt-2 shrink-0"
          >
            <div className="relative w-32 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/forge-logo.svg"
                alt="FORGE"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          <div className="flex-1 flex flex-col items-center mx-auto w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
            <nav className="flex items-center justify-between md:justify-center px-6 md:px-8 py-3 w-full md:w-auto bg-white/60 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
              <Link
                href="/"
                className="flex md:hidden items-center gap-2 group"
              >
                <div className="relative w-28 h-8 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/forge-logo.svg"
                    alt="FORGE"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-8 font-jakarta font-medium text-sm text-foreground/80">
                {navItems.map((item) => {
                  const isActive = isActivePath(item.href);

                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`whitespace-nowrap rounded-full px-3 py-1.5 transition-colors duration-300 ${
                        isActive
                          ? "bg-primary text-white shadow-[0_8px_18px_rgba(77,150,255,0.28)]"
                          : "hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden p-2 text-foreground z-50 relative ml-4"
                onClick={toggleMobileMenu}
              >
                <div className="w-6 flex flex-col gap-1.5 items-end">
                  <span
                    className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
                  />
                  <span
                    className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4"}`}
                  />
                  <span
                    className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}
                  />
                </div>
              </button>
            </nav>
          </div>

          <div className="hidden md:flex items-center mt-1 shrink-0">
            <button
              type="button"
              ref={buttonRef}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              onClick={() => open("partner")}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-shadow"
            >
              Partner With Forge
            </button>
          </div>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 flex-col items-center justify-start overflow-y-auto px-6 py-24 pb-32"
        style={{ transform: "translateX(100%)" }}
      >
        <nav className="flex flex-col items-start w-full max-w-md gap-6 mx-auto">
          {navItems.map((item, idx) => {
            const isActive = isActivePath(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`w-full flex items-center justify-between rounded-2xl px-3 py-2 font-clash font-bold text-3xl text-left transition-colors focus:outline-none border-b border-black/10 pb-4 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-black hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                ref={(el) => {
                  if (el) mobileLinkRefs.current[idx] = el;
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className="w-full pt-4 flex flex-col gap-4"
            ref={(el) => {
              if (el) mobileLinkRefs.current[navItems.length] = el;
            }}
          >
            <Link
              href="#start"
              className="w-full text-center bg-primary text-white px-8 py-4 rounded-full font-bold text-xl tracking-wide shadow-xl"
              onClick={() => setMobileMenuOpen(false)}
              ref={(el) => {
                if (el) mobileLinkRefs.current[navItems.length] = el;
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
