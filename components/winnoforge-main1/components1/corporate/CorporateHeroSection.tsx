import { ArrowRight } from "lucide-react";
import Image from "next/image";

const keyPoints = [
  "Continuous Activation",
  "Structured Execution",
  "Mentor-led Reviews",
  "Startup Outputs",
];

export default function CorporateHeroSection() {
  return (
    <section id="brochure" className="px-4 py-8 md:px-8 md:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Transforming Campuses Into Innovation Ecosystems
          </h1>

          <p className="mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
            FORGE embeds a structured execution framework inside institutions,
            enabling students to build, innovate, and launch real-world
            solutions.
          </p>

          <a
            href="/corporate#brochure"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0E2E48] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:bg-[#15476d]"
          >
            Download Brochure
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {keyPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[#cbdced] bg-white px-4 py-3 font-jakarta text-xs font-semibold uppercase tracking-[0.08em] text-[#1a3d5a]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-[28px] border border-[#d6e3ef] bg-[#dce9f6] shadow-[0_20px_40px_rgba(11,38,60,0.2)] md:min-h-115">
          <Image
            src="/webp/8.webp"
            alt="Institutional innovation program"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#08263e]/65 via-[#08263e]/15 to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 font-jakarta text-sm text-white backdrop-blur-sm">
            The FORGE network turns institutional potential into measurable
            innovation outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
