import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CommunityHeroSection() {
  return (
    <section className="relative px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-120 bg-[radial-gradient(circle_at_18%_20%,rgba(77,150,255,0.22),transparent_42%),radial-gradient(circle_at_85%_12%,rgba(196,241,78,0.2),transparent_40%)]" />

      <div className="mx-auto max-w-5xl px-2 text-center">
        {/* <p className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-foreground/65">
          Not just a platform - a growing ecosystem
        </p> */}

        <h1 className="mt-6 font-varela text-4xl font-bold leading-tight text-foreground md:text-7xl">
          The FORGE Community
        </h1>

        <p className="mx-auto mt-6 max-w-3xl font-jakarta text-lg leading-relaxed text-foreground/75 md:text-2xl">
          A network of builders, institutions, and innovators shaping the future
          together.
        </p>

        <Link
          href="#community-join"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#23457A] px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2d5a9e] hover:shadow-[0_16px_35px_rgba(35,69,122,0.38)]"
        >
          Join the Community
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
