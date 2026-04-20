"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: 1,
        title: "Ignite.",
        description:
            "From weekend bootcamps to deep-dive masterclasses, we build real skills—not just résumé lines. Hands-on workshops led by industry mentors who've shipped products, not just slide decks.",
        cta: "Bootcamps",
        image: "/webp/1.webp",
        align: "right" as const,
        nudge: 20,   // px shift from natural position
        gap: 0,      // no extra gap (first card)
    },
    {
        id: 2,
        title: "Innovation.",
        description:
            "Hackathons, design sprints, and wild ideation sessions. We throw problems at you and watch you build solutions in 48 hours or less. The best ideas don't wait for permission.",
        cta: "Hackathons",
        image: "/webp/2.webp",
        align: "left" as const,
        nudge: -10,
        gap: 6,
    },
    {
        id: 3,
        title: "Forge.",
        description:
            "Prototyping labs, MVP sprints, and technical mentorship. We give you the tools, the team, and the runway to go from napkin sketch to working product—fast.",
        cta: "Prototyping",
        image: "/webp/3.webp",
        align: "center" as const,
        nudge: 40,
        gap: 10,
    },
    {
        id: 4,
        title: "Launch.",
        description:
            "Demo days, pitch nights, and investor connections. When you're ready to ship, we put you on stage. Funding, feedback, and your first real users—all in one place.",
        cta: "Demo Days",
        image: "/launch-step-4.jpg",
        align: "left" as const,
        nudge: 30,
        gap: 4,
    },
];

// Map alignment to tailwind justify classes + flex direction
const alignConfig = {
    left: { justify: "md:justify-start", direction: "md:flex-row" },
    center: { justify: "md:justify-center", direction: "md:flex-row" },
    right: { justify: "md:justify-end", direction: "md:flex-row-reverse" },
};

// Midway solution: A single stroke path using Bezier curves to replicate the organic flow.
// Using a Cubic Bezier (C) effectively merges the last two turns to avoid the sharp "elbow".
const strokePath = "M 856 50 Q 550 200 144 316 C 50 800 700 1200 108 1396";

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".zigzag-card");

        // Animate the mask stroke to reveal the filled background
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();

            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top+=450 center",
                    end: "bottom center",
                    scrub: 1
                }
            });
        }

        cards.forEach((card) => {
            // Read the data-direction to decide slide direction
            const dir = card.dataset.dir;
            const xStart = dir === "right" ? 100 : dir === "left" ? -100 : 0;
            const yStart = dir === "center" ? 60 : 0;

            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=60",
                    toggleActions: "play none none none",
                },
                x: xStart,
                y: yStart,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="programs"
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            {/* Animated Background Stroke */}
            <div className="absolute right-40 inset-0 hidden md:flex justify-center items-start pointer-events-none z-0 opacity-100">
                <svg
                    className="w-full max-w-200 h-auto mt-150"
                    viewBox="0 0 879 1397"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMin meet"
                >
                    <path
                        ref={pathRef}
                        d={strokePath}
                        stroke="#C4F14E"
                        strokeWidth="100"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <h2 className="font-varela font-bold text-5xl md:text-7xl text-center mb-6 text-foreground">
                    The <span className="text-primary">Forge Engine</span>
                </h2>
                <p className="font-jakarta text-foreground/60 text-center text-lg max-w-md mx-auto mb-20">
                    Four stages. One relentless cycle. Every step pushes you closer to launch.
                </p>

                {/* Zig-Zag Cards — organic placement */}
                <div className="flex flex-col">
                    {steps.map((step) => {
                        const cfg = alignConfig[step.align];

                        return (
                            <div
                                key={step.id}
                                className={`flex flex-col md:flex-row ${cfg.justify} items-center`}
                            >
                                <div
                                    className={`zigzag-card flex flex-col gap-6 ${cfg.direction} items-center w-full md:w-[75%] lg:w-[65%] mt-12 md:mt-[${step.gap}rem]`}
                                    data-dir={step.align}
                                    style={{
                                        "--nudge": `${step.nudge}px`,
                                        "--gap": `${step.gap}rem`
                                    } as React.CSSProperties}
                                >
                                    <style jsx>{`
                                        @media (min-width: 768px) {
                                            .zigzag-card[data-dir="${step.align}"] {
                                                transform: translateX(var(--nudge));
                                                margin-top: var(--gap);
                                            }
                                        }
                                        @media (max-width: 767px) {
                                            .zigzag-card {
                                                transform: none !important;
                                                margin-top: 3rem !important; /* Consistent spacing on mobile */
                                            }
                                        }
                                    `}</style>
                                    {/* Image Side */}
                                    <div className="w-full md:w-1/2 relative shrink-0">
                                        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl group">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full md:w-1/2">
                                        <span className="font-mono text-sm tracking-widest text-foreground/40 uppercase mb-3 block">
                                            Step 0{step.id}
                                        </span>

                                        <h3 className="font-varela font-bold text-4xl md:text-5xl text-foreground mb-5 leading-tight">
                                            {step.title}
                                        </h3>

                                        <p className="font-jakarta text-foreground/70 text-base md:text-lg leading-relaxed mb-8">
                                            {step.description}
                                        </p>

                                        <a
                                            href="#programs"
                                            className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-5 py-2.5 font-jakarta font-semibold text-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
                                        >
                                            {step.cta}
                                            <span className="bg-primary rounded-full p-1 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                                <ArrowRight size={14} className="text-white" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
