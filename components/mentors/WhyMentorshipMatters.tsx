const benefits = [
  "Ask better questions",
  "Understand practical constraints",
  "Approach problems more clearly",
  "Improve technical or creative work",
  "Communicate ideas",
  "Learn from mistakes",
  "Make informed decisions",
  "Build confidence",
  "Connect learning with real-world contexts",
];

export default function WhyMentorshipMatters() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
      <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Why Mentorship Matters
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Knowledge Becomes More Useful When Experience Is Shared
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70">
        Courses and resources can introduce concepts. Mentors and experts help participants
        understand how those concepts behave in real situations. Through interaction and
        feedback, participants may learn to:
      </p>
      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
        {benefits.map((item) => (
          <span
            key={item}
            className="rounded-full bg-primary/8 px-4 py-1.5 font-jakarta text-sm font-medium text-primary"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-xl font-jakarta text-xs text-foreground/50">
        Mentor access follows confirmed program arrangements — not every participant receives
        guaranteed individual mentorship.
      </p>
    </section>
  );
}
