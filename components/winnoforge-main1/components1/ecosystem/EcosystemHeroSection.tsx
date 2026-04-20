import { Download } from "lucide-react";
import Image from "next/image";

const partners = [
  "HEIZEN",
  "SOTI",
  "WINNOVATION",
  "FORGE CITADEL",
  "FORGE SUMMIT",
  "COMMUNITY PARTNER",
  "INDUSTRY NETWORK",
  "MENTOR ALLIANCE",
  "CAMPUS HUB",
  "STARTUP CELL",
];

export default function EcosystemHeroSection() {
  return (
    <section className="relative mb-24 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-130 bg-[radial-gradient(circle_at_10%_20%,rgba(77,150,255,0.22),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(196,241,78,0.25),transparent_45%)]" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          {/* <p className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 font-jakarta text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
            FORGE Ecosystem
          </p> */}

          <h1 className="font-varela text-4xl font-bold leading-tight text-foreground md:text-6xl">
            The FORGE Ecosystem
          </h1>

          <p className="mt-6 max-w-xl font-jakarta text-xl text-foreground/85">
            A structured innovation environment connecting institutions,
            builders, and industry.
          </p>

          <p className="mt-4 max-w-xl font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
            FORGE transforms campuses into execution-driven ecosystems where
            students learn, build, and launch real-world innovations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-6 py-3 font-jakarta text-sm font-bold tracking-wide text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Download Brochure
              <Download className="h-4 w-4" />
            </button>

            <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-jakarta text-sm font-semibold text-primary">
              100+ Startups launched
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="group relative h-80 overflow-hidden rounded-4xl border border-white/50 bg-white shadow-[0_28px_80px_rgba(23,23,23,0.12)] md:h-105">
            <Image
              src="/webp/1.webp"
              alt="FORGE team and builders in the ecosystem"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-clash text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                  Live Ecosystem
                </p>
                <p className="font-varela text-2xl font-semibold text-white">
                  Build. Ship. Launch.
                </p>
              </div>
              {/* <div className="rounded-full bg-white/90 px-3 py-2 font-jakarta text-xs font-bold text-foreground">
                Video / Image
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl rounded-[1.75rem] border border-black/10 bg-white/70 p-5 backdrop-blur-sm md:p-6">
        <p className="mb-4 font-jakarta text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
          Partners
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="rounded-xl border border-black/10 bg-white px-4 py-3 text-center font-clash text-sm font-semibold text-foreground/75"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
