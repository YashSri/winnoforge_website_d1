const contributors = [
  "Partner colleges",
  "Schools",
  "Faculty teams",
  "Industry professionals",
  "Founders",
  "Researchers",
  "Practitioners",
  "Community leaders",
  "Innovation organisations",
];

export default function InstitutionalIndustryParticipation() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
      <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Institutional & Industry Participation
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Expertise That Connects Across the Ecosystem
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70">
        Mentors and experts can help connect learning environments with the wider world through
        institutional programs, industry engagement, practical challenges, and shared knowledge.
      </p>
      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
        {contributors.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white px-4 py-1.5 font-jakarta text-sm font-medium text-foreground/70 shadow-[0_10px_24px_rgba(24,42,72,0.06)]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
