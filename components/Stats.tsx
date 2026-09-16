"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Clock, GraduationCap, Users } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: GraduationCap,
    target: 500,
    suffix: "+",
    label: "Target campus partners",
  },
  {
    icon: Clock,
    target: 3,
    suffix: " Months",
    label: "Founder program duration",
  },
  {
    icon: Users,
    target: 100,
    suffix: "K+",
    label: "Students to be impacted",
  },
  {
    icon: Award,
    target: 50,
    suffix: "+",
    label: "Industry mentors",
  },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-count");

      for (const el of counters) {
        const target = Number(el.dataset.target);
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(counter.value).toString();
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-20 px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map(({ icon: Icon, target, suffix, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
            </div>
            <div className="font-varela font-bold text-3xl md:text-4xl text-foreground">
              <span className="stat-count" data-target={target}>
                0
              </span>
              {suffix}
            </div>
            <p className="font-jakarta text-sm text-foreground/60">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
