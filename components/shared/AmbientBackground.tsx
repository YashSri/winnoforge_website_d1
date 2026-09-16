"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  const parallaxLayerRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const parallaxCurrent = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      // Smooth lerp damping towards cursor for main spotlight
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08;

      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.transform = `translate3d(${currentPos.current.x - 250}px, ${currentPos.current.y - 250}px, 0)`;
      }

      // Parallax offset for interactive floating node layer
      if (typeof window !== "undefined") {
        const targetParallaxX = (targetPos.current.x - window.innerWidth / 2) * 0.02;
        const targetParallaxY = (targetPos.current.y - window.innerHeight / 2) * 0.02;

        parallaxCurrent.current.x += (targetParallaxX - parallaxCurrent.current.x) * 0.05;
        parallaxCurrent.current.y += (targetParallaxY - parallaxCurrent.current.y) * 0.05;

        if (parallaxLayerRef.current) {
          parallaxLayerRef.current.style.transform = `translate3d(${parallaxCurrent.current.x}px, ${parallaxCurrent.current.y}px, 0)`;
        }
      }

      animId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Interactive cursor-following spotlight */}
      <div
        ref={mouseGlowRef}
        className="will-change-transform absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#1683E8]/12 via-[#00B4D8]/08 to-transparent blur-[100px] pointer-events-none"
      />

      {/* Floating Ambient Orb 1 - Top Right */}
      <div className="absolute top-[5%] -right-24 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#1683E8]/10 via-[#38BDF8]/06 to-transparent blur-[110px] animate-ambient-float-1" />

      {/* Floating Ambient Orb 2 - Center Left */}
      <div className="absolute top-[38%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#0284C7]/08 via-[#1683E8]/06 to-transparent blur-[120px] animate-ambient-float-2" />

      {/* Floating Ambient Orb 3 - Lower Center */}
      <div className="absolute top-[70%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#1683E8]/08 to-transparent blur-[100px] animate-ambient-float-3" />

      {/* Interactive Parallax Layer: Floating Builder Micro-Elements */}
      <div
        ref={parallaxLayerRef}
        className="will-change-transform absolute inset-0 pointer-events-none"
      >
        {/* Floating Node 1 */}
        <div className="absolute top-[16%] left-[10%] flex items-center justify-center animate-drift-slow">
          <div className="w-3 h-3 rounded-full bg-[#1683E8]/40 ring-4 ring-[#1683E8]/10 animate-pulse-glow" />
        </div>

        {/* Floating Node 2 */}
        <div className="absolute top-[26%] right-[14%] flex items-center justify-center animate-drift-reverse">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1683E8]/35 ring-4 ring-[#1683E8]/10" />
        </div>

        {/* Floating Node 3 */}
        <div className="absolute top-[48%] left-[7%] flex items-center justify-center animate-drift-slow">
          <div className="w-3.5 h-3.5 rounded-full bg-[#1683E8]/30 ring-6 ring-[#1683E8]/10 animate-pulse-glow" />
        </div>

        {/* Floating Node 4 */}
        <div className="absolute top-[64%] right-[8%] flex items-center justify-center animate-drift-reverse">
          <div className="w-2 h-2 rounded-full bg-[#1683E8]/40 ring-4 ring-[#1683E8]/15" />
        </div>

        {/* Floating Node 5 */}
        <div className="absolute top-[82%] left-[18%] flex items-center justify-center animate-drift-slow">
          <div className="w-3 h-3 rounded-full bg-[#1683E8]/35 ring-4 ring-[#1683E8]/10 animate-pulse-glow" />
        </div>

        {/* Floating Ring Accent */}
        <div className="absolute top-[22%] left-[82%] w-16 h-16 rounded-full border border-[#1683E8]/15 animate-spin-slow" />
        <div className="absolute top-[72%] left-[12%] w-20 h-20 rounded-full border border-[#1683E8]/10 animate-spin-slow" />
      </div>

      {/* Subtle Engineering Grid Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1683E8_1px,transparent_1px),linear-gradient(to_bottom,#1683E8_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)] opacity-[0.025]" />
    </div>
  );
}
