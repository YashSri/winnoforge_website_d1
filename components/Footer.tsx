"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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
    }, { scope: containerRef });

    return (
        <footer
            ref={containerRef}
            className="font-varela relative z-40 mt-10 flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-24 pb-12"
            style={{
                background: "linear-gradient(180deg, #007FFF 50%, #007FFF 50%, #007FFF 50%)",
            }}
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-[-10%] left-[-8%] h-80 w-80 rounded-full bg-[#DDE9FF]/70 blur-3xl" />
                <div className="absolute top-[10%] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-[#8FB6FF]/35 blur-3xl" />
                <div className="absolute bottom-[8%] left-[8%] h-96 w-96 rounded-full bg-[#2F63D9]/20 blur-3xl" />
                <div className="absolute right-[16%] bottom-[-10%] h-80 w-80 rounded-full bg-[#B7CFFF]/35 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center text-center">
                <h2
                    className="footer-title mb-10 text-[15vw] leading-[0.85] font-black tracking-tight text-black md:text-[12vw]"
                >
                    READY TO
                    <br />
                    FORGE?
                </h2>

                <button className="footer-cta group mx-auto flex items-center gap-4 rounded-full bg-black px-12 py-6 text-2xl font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-[#395886] active:scale-95 md:text-3xl">
                    Join the Revolution
                    <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-end justify-between gap-6 border-t border-white/20 pt-8 pb-8 md:flex-row">
                <div className="text-left">
                    <h3 className="mb-2 text-2xl font-bold text-black">FORGE</h3>
                </div>

                <div className="flex gap-6 font-medium text-black">
                    <a href="#" className="transition-colors hover:text-black/70 hover:underline">Instagram</a>
                    <a href="#" className="transition-colors hover:text-black/70 hover:underline">Twitter</a>
                    <a href="#" className="transition-colors hover:text-black/70 hover:underline">LinkedIn</a>
                </div>
            </div>

            <div className="relative z-10 border-t border-white/20 pt-6 text-center text-sm text-black">
                <p>&copy; 2026 FORGE Ecosystem. All rights reserved.</p>
            </div>
        </footer>
    );
}
