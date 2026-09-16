const shares = [
  "What worked",
  "What failed",
  "What changed over time",
  "Which assumptions were incorrect",
  "How constraints shaped decisions",
  "How teams collaborate",
  "How ideas become products",
  "How professionals continue learning",
];

export default function LearningThroughExperience() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
      <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Learning Through Experience
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        The Value of a Real-World Perspective
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70">
        Mentors and experts can help participants see beyond the immediate task. They may share:
      </p>
      <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-2 text-left sm:grid-cols-2">
        {shares.map((item) => (
          <li key={item} className="flex items-center gap-2 font-jakarta text-sm text-foreground/70">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-xl font-jakarta text-sm italic text-foreground/60">
        The objective is not to provide one universal formula. It is to expose participants to
        different approaches and help them develop their own judgement.
      </p>
    </section>
  );
}
