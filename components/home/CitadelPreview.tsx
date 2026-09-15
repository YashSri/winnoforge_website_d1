import Link from "next/link";
import { ArrowRight } from "lucide-react";

const previewItems = [
  "Innovation Citadel",
  "Center of Excellence",
  "Six-Month Activation Engine",
  "Bootcamp",
  "Incubation & Venture Development",
  "Sprint Reviews",
  "Demo Days",
  "Industry Problem Statements",
];

const pathway = [
  "Activation",
  "Selection",
  "Bootcamp",
  "Structured Sprints",
  "Incubation",
  "Prototype / MVP",
  "Demo Day",
  "Industry or Venture Opportunities",
];

export default function CitadelPreview() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,#0E2E48_0%,#1E4D72_45%,#628ECB_100%)] px-6 py-14 shadow-[0_20px_70px_rgba(2,8,20,0.4)] md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#78D8C6]">
            FORGE Citadel
          </span>
          <h2 className="mt-4 font-varela text-3xl font-semibold text-white md:text-5xl">
            The Place Where Ideas Become Products
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-[#D8E7F5] md:text-lg">
            The FORGE Citadel is a separate execution environment designed for focused building,
            structured review, collaboration, and venture development. It is not a classroom,
            computer lab, or coworking space — selected participants work through defined
            milestones, mentor feedback, practical experimentation, and repeated iteration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {previewItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-jakarta text-sm font-medium text-white backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {pathway.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-4 py-2 font-jakarta text-xs font-semibold text-white">
                {step}
              </span>
              {i < pathway.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/citadel1"
            className="rounded-full bg-white px-7 py-3 font-jakarta text-sm font-semibold text-[#0E2E48] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,255,255,0.2)]"
          >
            Explore FORGE Citadel
          </Link>
        </div>
      </div>
    </section>
  );
}
