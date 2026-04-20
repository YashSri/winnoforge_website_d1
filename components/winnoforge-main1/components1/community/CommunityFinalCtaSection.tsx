import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CommunityFinalCtaSection() {
  return (
    <section id="community-join" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-[#23457A]/25 bg-linear-to-br from-[#44689A] via-[#36598c] to-[#264978] px-6 py-16 text-center text-white shadow-[0_30px_80px_rgba(22,40,72,0.34)] md:px-12 md:py-20">
        <h2 className="font-varela text-4xl font-bold leading-tight md:text-7xl">
          Become Part of FORGE
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-jakarta text-lg text-white/88 md:text-xl">
          Join a community where ideas turn into execution.
        </p>

        <Link
          href="/login"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-[#23457A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ecf3ff] hover:shadow-[0_14px_30px_rgba(255,255,255,0.35)]"
        >
          Join the FORGE Community
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
