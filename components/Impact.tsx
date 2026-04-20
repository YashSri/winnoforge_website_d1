"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, Building2, Rocket, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Generate a long wave path
    const wavePath = "M0 10 " + Array(20).fill(0).map((_, i) => {
        const xOffset = i * 100;
        return `Q ${xOffset + 25} 25 ${xOffset + 50} 10 T ${xOffset + 100} 10`;
    }).join(" ");

    useGSAP(() => {
    gsap.from(".bento-item", {
        immediateRender: false,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100",
            onEnter: () => ScrollTrigger.refresh(), // Add this
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
    });

    gsap.to(".wave-path", {
        x: -100,
        duration: 2,
        repeat: -1,
        ease: "none",
    });

    // Refresh ScrollTrigger after fonts/images load
    window.addEventListener("load", () => ScrollTrigger.refresh());
    return () => window.removeEventListener("load", () => ScrollTrigger.refresh());

}, { scope: containerRef });

    return (
        <section ref={containerRef} id="impact" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
            <h2 className="font-varela font-bold text-5xl md:text-7xl mb-8 text-center">
                REAL{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 text-primary">IMPACT</span>
                    {/* <svg
                        className="absolute -bottom-5 left-0 w-full h-7.5 overflow-hidden"
                        viewBox="0 0 300 30"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ff6b6b" />
                                <stop offset="100%" stopColor="#ff6b6b" />
                            </linearGradient>
                            <mask id="waveMask">
                                <path
                                    className="wave-path"
                                    d={wavePath}
                                    stroke="white"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="300" height="30" fill="url(#waveGradient)" mask="url(#waveMask)" />
                    </svg> */}
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[250px_250px] gap-6 md:h-131 items-start">
                {/* Student Led - Tall Left */}
                <div className="bento-item md:col-span-1 md:row-span-2 md:h-full rounded-3xl p-8 flex flex-col justify-between group transition-transform cursor-pointer relative overflow-hidden min-h-125 md:min-h-0">
                    <Image src="/webp/1.webp" alt="Student Led" fill className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10">
                        <Users size={48} className="mb-4 text-white" />
                        <h3 className="font-varela font-bold text-4xl mb-2 text-white">Student<br />Led.</h3>
                    </div>
                    <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-xl p-4 mt-4">
                        <p className="font-jakarta font-medium text-white">By students, for students. No faculty interference, just pure execution.</p>
                    </div>
                </div>

                {/* Industry Backed - Top Center */}
                <div className="bento-item md:col-span-1 md:h-full rounded-3xl p-8 flex flex-col justify-center transition-transform cursor-pointer text-white relative overflow-hidden group min-h-62.5">
                    <Image src="/webp/2.webp" alt="Industry Backed" fill className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10">
                        <Building2 size={40} className="mb-4" />
                        <h3 className="font-varela font-bold text-3xl">Industry Backed.</h3>
                        <p className="font-jakarta mt-2 opacity-90">Partnered with top tech firms.</p>
                    </div>
                </div>

                {/* Execution Focused - Top Right */}
                <div className="bento-item md:col-span-1 md:h-full rounded-3xl p-8 flex flex-col items-center justify-center text-white transition-transform cursor-pointer relative overflow-hidden group min-h-62.5">
                    <Image src="/webp/3.webp" alt="Startups Launched" fill className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2" />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center">
                        <h3 className="font-varela font-bold text-6xl text-primary">100+</h3>
                        <p className="font-jakarta text-lg mt-2">Startups Launched</p>
                    </div>
                </div>

                {/* Campus Wide - Wide Bottom */}
                <div className="bento-item md:col-span-2 md:h-full rounded-3xl p-8 flex items-center justify-between transition-transform cursor-pointer relative overflow-hidden group min-h-62.5">
                    <Image src="/webp/4.webp" alt="Campus Wide" fill className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 max-w-sm">
                        <h3 className="font-varela font-bold text-4xl mb-4 text-white">Campus Wide.</h3>
                        <p className="font-jakarta text-lg text-white">From engineering to arts, innovation has no major.</p>
                    </div>
                    <div className="hidden md:block relative z-10 bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/30">
                        <Rocket size={32} className="text-white" />
                    </div>
                </div>
            </div>
        </section>
    );
}
