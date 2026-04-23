export default function EcosystemHeroSection() {
  return (
    <section className="relative mb-20 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-140 bg-[radial-gradient(circle_at_18%_20%,rgba(77,150,255,0.22),transparent_42%),radial-gradient(circle_at_85%_12%,rgba(77,150,255,0.14),transparent_40%)]" />

      <div className="mx-auto max-w-5xl px-2 text-center">
        <p className="inline-flex items-center rounded-full border border-primary/12 bg-white/85 px-4 py-2 font-jakarta text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-[0_12px_30px_rgba(77,150,255,0.1)]">
          FORGE Ecosystem
        </p>

        <h1 className="mt-5 font-varela text-4xl font-bold leading-tight text-foreground md:text-6xl">
          The FORGE Ecosystem
        </h1>

        <p className="mx-auto mt-6 max-w-3xl font-jakarta text-xl leading-relaxed text-foreground/85">
          A structured innovation environment connecting institutions,
          builders, and industry, powered by Winnovation.
        </p>

        <p className="mx-auto mt-4 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
          FORGE transforms campuses into execution-driven ecosystems where
          students learn, build, and launch real-world innovations.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 font-jakarta text-sm font-semibold text-primary">
            50+ Startups launched
          </div>
          <div className="rounded-full border border-black/10 bg-white/85 px-4 py-2 font-jakarta text-sm font-semibold text-foreground/72 shadow-[0_12px_30px_rgba(24,42,72,0.06)]">
            Campus x Community x Industry
          </div>
        </div>
      </div>
    </section>
  );
}
