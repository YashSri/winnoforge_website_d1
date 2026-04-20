import { ArrowRight, Building2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="px-4 py-8 md:px-8 md:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Transforming Campuses Into Innovation Ecosystems
          </h1>

          <p className="mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
            FORGE embeds a structured execution framework inside institutions - enabling students to build,
            innovate, and launch real-world solutions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/corporate#brochure"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0E2E48] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:bg-[#15476d]"
            >
              Download Brochure <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9">
            <p className="mb-4 font-jakarta text-xs font-semibold uppercase tracking-[0.08em] text-[#1a3d5a]">
              Trusted by Leading Institutions
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-2xl border border-[#cbdced] bg-white px-4 py-3 font-jakarta text-xs font-semibold uppercase tracking-[0.08em] text-[#1a3d5a]">
                <Building2 className="h-4 w-4" /> TECH UNIV
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-[#cbdced] bg-white px-4 py-3 font-jakarta text-xs font-semibold uppercase tracking-[0.08em] text-[#1a3d5a]">
                <Building2 className="h-4 w-4" /> GLOBAL EDU
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-[#cbdced] bg-white px-4 py-3 font-jakarta text-xs font-semibold uppercase tracking-[0.08em] text-[#1a3d5a]">
                <Building2 className="h-4 w-4" /> INNOVATE COLL
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative min-h-80 overflow-hidden rounded-[28px] border border-[#d6e3ef] bg-[#dce9f6] shadow-[0_20px_40px_rgba(11,38,60,0.2)] md:min-h-115"
        >
          <Image
            src="/webp/8.webp"
            alt="Innovation Hub"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#08263e]/65 via-[#08263e]/15 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-white backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="font-jakarta text-[11px] font-semibold tracking-[0.14em] uppercase">Live Ecosystem</span>
            </div>
            <p className="font-jakarta text-sm text-white">
              Empowering the next generation of builders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
