"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        problem: "Theory Overload",
        solution: "Institution\nlayer",
        description: "Embedding a structured innovation ecosystem inside campuses.",
        glass: "linear-gradient(135deg, rgba(255, 107, 107, 0.35), rgba(255, 165, 89, 0.2))",
        rotate: "-2deg",
        speed: 0.2
    },
    {
        problem: "Passive Students",
        solution: "Corporate\nlayer",
        description: "Connecting companies with emerging talent and innovation.",
        glass: "linear-gradient(135deg, rgba(250, 204, 21, 0.35), rgba(255, 165, 0, 0.2))",
        rotate: "2deg",
        speed: 0.5
    },
    {
        problem: "Isolated Clubs",
        solution: "Builder\nlayer",
        description: "Where students become builders and ideas become real ventures.",
        glass: "linear-gradient(135deg, rgba(0, 210, 255, 0.35), rgba(58, 255, 217, 0.2))",
        rotate: "-1deg",
        speed: 0.8
    },
];

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {

            const totalScroll = cardsContainerRef.current!.scrollHeight - window.innerHeight;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=250%", // Increased pin duration for delay
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1
                }
            });

            // 1. Background Color Transitions — one per card
            tl.to(containerRef.current, {
                backgroundColor: "#0A5886", 
                duration: 0.3,
                ease: "power1.inOut",
            }, 0);

            tl.to(containerRef.current, {
                backgroundColor: "#0B2E33",
                duration: 0.3,
                ease: "power1.inOut",
            }, 0.35);

            tl.to(containerRef.current, {
                backgroundColor: "#002900",
                duration: 0.3,
                ease: "expo.in",
            }, 0.7);

            // 2. Move Cards Container Up
            tl.to(cardsContainerRef.current, {
                y: () => {
                    const containerHeight = cardsContainerRef.current!.scrollHeight;
                    const windowHeight = window.innerHeight;
                    return -(containerHeight - windowHeight / 2 - 200);
                },
                ease: "none",
                duration: 1 // Normalize duration
            }, 0);

            tl.to({}, { duration: 0.5 });
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen md:h-screen flex flex-col md:flex-row text-white md:overflow-hidden" style={{ backgroundColor: "#095886" }}>

            {/* Sticky Left Content - Mobile: Natural flow, Desktop: Sticky */}
            <div ref={textRef} className="w-full md:w-1/2 py-20 px-8 md:px-20 md:h-screen flex flex-col justify-center z-10 pointer-events-none">
                <div className="relative pointer-events-auto">
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

                    <h2 className="font-varela font-bold text-6xl md:text-8xl leading-none tracking-tight mb-8">
                        The
                        <div className="relative w-48 h-24 md:w-64 md:h-32">
                            <Image
                                src="/forge-logo.svg"
                                alt="Forge Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        way.
                    </h2>

                    <p className="font-jakarta text-xl text-gray-100 max-w-md leading-relaxed border-l-2 border-primary/30 pl-6">
                        We don't do boring. We don't do average. We prefer chaos over comfort and execution over excuses.
                    </p>

                </div>
            </div>

            {/* Scrolling Right Content (Cards) */}
            <div ref={cardsContainerRef} className="w-full md:w-1/2 relative flex flex-col items-center justify-start py-[12vh] md:pt-[20vh] md:pb-[20vh] gap-[10vh] md:gap-[30vh]">
                {cards.map((card, idx) => (
                    <div
                        key={card.problem}
                        className="parallax-card aspect-square w-[75%] md:w-[55%] rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-transform duration-500 hover:scale-105 backdrop-blur-xl"
                        style={{
                            background: card.glass,
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        }}
                        data-speed={card.speed}
                        data-rotate={card.rotate}
                    >
                        {/* Top: badge */}
                        <div className="flex justify-end">
                            <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                <span className="font-varela font-bold text-white text-sm">0{idx + 1}</span>
                            </div>
                        </div>

                        {/* Middle: big title */}
                        <h3 className="font-varela font-bold text-5xl md:text-6xl text-white leading-[0.95] whitespace-pre-line">
                            {card.solution}
                        </h3>

                        {/* Bottom: description */}
                        <p className="font-jakarta text-white/80 text-base leading-relaxed">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}
