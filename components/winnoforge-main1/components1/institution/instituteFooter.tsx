import type { CSSProperties } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerTextOutlineStyle: CSSProperties = {
  WebkitTextStroke: "1px #000000",
  textShadow: "-1px 0 #000000, 1px 0 #000000, 0 -1px #000000, 0 1px #000000",
};

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-title", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".footer-cta", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "elastic.out(1, 0.5)",
      });

      const generateBlobRadius = () => {
        const isMobile = window.innerWidth < 768;
        const min = isMobile ? 20 : 40;
        const max = isMobile ? 30 : 50;
        const r = () => Math.floor(Math.random() * max + min);
        return `${r()}% ${r()}% 0% 0% / ${r()}% ${r()}% 0% 0%`;
      };

      gsap.set(containerRef.current, { borderRadius: generateBlobRadius() });

      const morphBlob = () => {
        gsap.to(containerRef.current, {
          borderRadius: generateBlobRadius(),
          duration: 3,
          ease: "sine.inOut",
          onComplete: morphBlob,
        });
      };

      morphBlob();
    },
    { scope: containerRef },
  );

  return (
    <footer
      ref={containerRef}
      className="relative z-40 mt-10 flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-24 pb-12"
      style={{
        background:
          "linear-gradient(180deg, #007FFF 50%, #007FFF 50%, #007FFF 50%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-8%] left-[-6%] h-72 w-72 rounded-full bg-[#DDE9FF]/70 blur-3xl" />
        <div className="absolute top-[18%] right-[-8%] h-96 w-96 rounded-full bg-[#8FB6FF]/35 blur-3xl" />
        <div className="absolute bottom-[12%] left-[10%] h-80 w-80 rounded-full bg-[#2F63D9]/22 blur-3xl" />
        <div className="absolute right-[18%] bottom-[-8%] h-72 w-72 rounded-full bg-[#B7CFFF]/38 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center text-center">
        <h2
          className="footer-title mb-10 text-[15vw] leading-[0.85] font-black tracking-tight text-white md:text-[12vw]"
          style={footerTextOutlineStyle}
        >
          READY TO
          <br />
          FORGE?
        </h2>

        <button className="footer-cta group mx-auto flex items-center gap-4 rounded-full bg-[#000000] px-12 py-6 text-2xl font-bold text-white shadow-2xl shadow-[#395886]/20 transition-all hover:scale-105 hover:bg-[#254FB8] active:scale-95 md:text-3xl">
          Join the Revolution
          <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-end justify-between gap-6 border-t border-white/20 pt-8 pb-8 md:flex-row">
        <div className="text-left">
          <h3 className="text-2xl font-bold tracking-tight text-white" style={footerTextOutlineStyle}>FORGE</h3>
        </div>

        <div className="flex gap-6 font-medium text-white">
          <a href="#" className="transition-colors hover:text-white/75 hover:underline">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-white/75 hover:underline">
            Twitter
          </a>
          <a href="#" className="transition-colors hover:text-white/75 hover:underline">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 pt-6 text-center text-sm text-white/80">
        <p>&copy; 2026 FORGE Ecosystem. All rights reserved.</p>
      </div>
    </footer>
  );
}
