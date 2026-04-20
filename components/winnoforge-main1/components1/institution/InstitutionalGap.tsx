import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function InstitutionalGap() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#0E2E48] text-white shadow-[0_26px_80px_rgba(1,10,24,0.45)]">
        <div className="grid md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <h2 className="font-varela text-4xl font-semibold leading-tight md:text-5xl">
              The Institutional Innovation Gap
            </h2>

            <div className="mt-6 space-y-4 font-jakarta text-base leading-relaxed text-[#d8e7f5] md:text-lg">
              <p>Modern campuses have infrastructure, labs, AI centres, and resources, but lack structured execution.</p>
              <p>
                Students attend workshops and hackathons, yet very few graduate having built real products, startups, or
                validated solutions.
              </p>
              <p>Innovation remains episodic, not continuous.</p>
            </div>

            <p className="mt-7 font-jakarta text-lg font-semibold text-white md:text-xl">
              FORGE solves this by embedding execution into the campus itself.
            </p>

            <a
              href="/corporate#brochure"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:bg-white/20"
            >
              Download Brochure
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative min-h-80 md:min-h-full">
            <div className="absolute inset-0 bg-linear-to-b from-[#15486f] to-[#0b2941]" />
            <Image
              src="/man_speaking.png"
              alt="Institutional Innovation"
              fill
              className="object-contain object-bottom drop-shadow-[0_26px_40px_rgba(0,0,0,0.35)]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
