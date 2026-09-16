const terms = ["Learning", "Execution", "Community", "Industry", "Innovation"];

export default function FutureVision() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
      <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        The Future We Are Building
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        A Stronger Future of Learning, Work, and Innovation
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70">
        FORGE is being developed around a long-term ambition: to create environments in which
        students do not simply prepare for the future but actively practise building it. The
        goal is a culture in which curiosity becomes practice, practice becomes capability,
        capability becomes opportunity, and opportunity becomes meaningful contribution.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {terms.map((term, i) => (
          <div key={term} className="flex items-center gap-3 md:gap-4">
            <span className="rounded-2xl bg-primary/8 px-5 py-3 font-clash text-base font-semibold text-primary md:text-lg">
              {term}
            </span>
            {i < terms.length - 1 && (
              <span className="font-clash text-xl text-foreground/30" aria-hidden="true">
                +
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <span className="font-clash text-xl text-foreground/30" aria-hidden="true">
          =
        </span>
      </div>
      <div className="mt-4 rounded-2xl bg-[linear-gradient(135deg,#0E2E48_0%,#1E4D72_45%,#628ECB_100%)] px-6 py-4 font-clash text-xl font-semibold text-white md:text-2xl">
        Capability at Scale
      </div>
    </section>
  );
}
