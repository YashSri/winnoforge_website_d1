import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export interface GridCard {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export default function CardGrid({
  eyebrow,
  heading,
  description,
  cards,
  columns = 3,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  cards: GridCard[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2 max-w-4xl"
      : columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="relative w-full overflow-hidden px-6 py-16 md:px-12 md:py-24">
      {/* Subtle Solid Geometric Background Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        <div className="absolute left-10 top-1/4 h-3.5 w-3.5 rounded-full bg-[#1683E8]" />
        <div className="absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-[#EAF3FF] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute -right-12 top-1/2 h-56 w-56 rounded-full bg-[#EAF3FF] animate-[pulse_10s_ease-in-out_infinite_2s]" />
        <div className="absolute right-12 bottom-1/4 h-3 w-3 rounded-full bg-[#1683E8]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Header Block */}
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {eyebrow && (
            <div className="flex items-center justify-center gap-3 select-none">
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
              <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
                {eyebrow}
              </span>
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            </div>
          )}

          <h2 className="font-clash text-3xl font-bold tracking-tight text-[#111111] md:text-4xl lg:text-[42px] leading-[1.06]">
            {heading}
          </h2>

          {description && (
            <p className="font-jakarta text-base sm:text-lg leading-relaxed text-[#5F6672]">
              {description}
            </p>
          )}
        </ScrollReveal>

        {/* Card Grid with Interactive Blue Hover & Staggered Entrance */}
        <div className={`mt-14 mx-auto grid grid-cols-1 gap-6 ${colClass}`}>
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <ScrollReveal key={card.title} delay={idx * 60}>
                <div
                  tabIndex={0}
                  className="group relative flex h-full flex-col justify-between rounded-[24px] border border-[#D9DEE7] bg-[#FFFFFF] p-7 sm:p-8 shadow-[0_10px_30px_rgba(16,42,67,0.05)] select-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.015] hover:bg-[#1683E8] hover:border-[#1474CE] hover:shadow-[0_22px_48px_rgba(22,131,232,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] focus-visible:ring-offset-2"
                >
                  <div>
                    {/* Top Row: Icon Container + Index Badge */}
                    <div className="flex items-center justify-between">
                      {Icon && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#1683E8] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#55A8F2] group-hover:text-white group-hover:scale-108 group-hover:-translate-y-0.5 shadow-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                      )}

                      <span className="font-jakarta text-xs font-bold tracking-wider text-[#7A8492] transition-colors duration-300 group-hover:text-white/90">
                        {num}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-clash text-xl font-bold text-[#111111] transition-colors duration-300 group-hover:text-white mt-5 leading-snug">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="font-jakarta text-sm leading-relaxed text-[#5F6672] transition-colors duration-300 group-hover:text-white/90 mt-2.5">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Micro Divider */}
                  <div className="mt-6 pt-4 border-t border-[#D9DEE7]/70 transition-colors duration-300 group-hover:border-white/20 flex items-center justify-between">
                    <span className="w-6 h-[1.5px] bg-[#D9DEE7] transition-colors duration-300 group-hover:bg-white/40" />
                    <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.16em] text-[#7A8492] transition-colors duration-300 group-hover:text-white/80">
                      FORGE
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
