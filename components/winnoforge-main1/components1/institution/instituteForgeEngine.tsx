export function ForgeEngine() {
  const steps = [
    { number: "01", title: "Ignite", description: "Explore technologies and ideas" },
    { number: "02", title: "Innovate", description: "Turn ideas into concepts" },
    { number: "03", title: "Forge", description: "Build prototypes and MVPs" },
    { number: "04", title: "Launch", description: "Present and scale startups" },
  ];

  return (
    <section className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[30px] border border-[#d7e2ee] bg-[#f8fbff] p-6 shadow-[0_20px_60px_rgba(16,48,82,0.1)] md:p-10 lg:p-12">
        <h2 className="text-center font-varela text-4xl font-semibold text-foreground md:text-5xl">
          The FORGE Engine
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
          Four stages. One relentless cycle. Every step pushes you closer to launch.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-4 md:gap-5">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-3xl border border-[#c5d9ee] bg-white px-5 py-6 shadow-[0_12px_34px_rgba(24,57,92,0.1)] md:px-6"
            >
              <span className="absolute left-5 top-5 h-3 w-3 rounded-full bg-[#4D96FF]" />
              {index < steps.length - 1 && (
                <span className="absolute -right-3 top-6 hidden h-0.5 w-6 bg-[#7fb5ef] md:block" />
              )}

              <div className="pl-6">
                <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.16em] text-[#3c6f9f]">
                  STEP {step.number}
                </p>
                <h3 className="mt-2 font-varela text-3xl font-semibold text-[#0c3554]">
                  {step.title}
                </h3>
                <p className="mt-3 font-jakarta text-base leading-relaxed text-[#34506a]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
