import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const citadelPoints = [
  "Prototype development",
  "AI-assisted building",
  "Demo reviews",
  "Startup refinement",
];

export default function ForgeCitadelSection() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[#1e4362] bg-[#082338] text-white shadow-[0_28px_80px_rgba(2,10,20,0.5)]">
        <div className="grid md:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <h2 className="font-varela text-4xl font-semibold leading-tight md:text-5xl">
              The FORGE Citadel
            </h2>

            <p className="mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-[#d2e6f7] md:text-lg">
              A high-intensity execution environment where ideas move from
              intent to tangible outputs.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {citadelPoints.map((point) => (
                <div
                  key={point}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/18 bg-white/8 px-4 py-3 font-jakarta text-sm text-white"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#C4F14E]"
                    aria-hidden="true"
                  />
                  {point}
                </div>
              ))}
            </div>

            <a
              href="/corporate#brochure"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#C4F14E] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-[#153020] transition hover:bg-[#d5f77d]"
            >
              Download Brochure
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative min-h-80">
            <Image
              src="/webp/7.webp"
              alt="FORGE Citadel"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#061b2d]/80 via-[#061b2d]/35 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
