import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CitadelFinalCta() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-varela text-3xl font-semibold leading-tight text-foreground md:text-5xl">
          Step Into an Environment Built for Growth
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
          Explore the FORGE Citadel, discover the pathways available to you, and become part of
          an ecosystem where learning is connected to practice, collaboration, and meaningful
          progress.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/programs"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
          >
            Explore Programs
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/community#mentors"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-foreground transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            Meet the Mentors
          </Link>
          <Link
            href="/collaborate"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-7 py-3.5 font-jakarta text-sm font-semibold tracking-wide text-foreground transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            Connect With FORGE
          </Link>
        </div>
      </div>
    </section>
  );
}
