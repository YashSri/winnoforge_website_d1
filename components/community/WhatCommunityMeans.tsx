const contributions = [
  "Asking a thoughtful question",
  "Sharing a useful resource",
  "Helping a peer",
  "Reviewing a project",
  "Participating in a workshop",
  "Presenting an idea",
  "Joining a challenge",
  "Offering professional insight",
  "Supporting a campus activity",
  "Documenting a learning experience",
];

export default function WhatCommunityMeans() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
      <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        What the Community Means
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        More Than a Network. A Culture of Contribution.
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70">
        A community becomes meaningful when people contribute to it. Within FORGE, contribution
        can take many forms — every one of them can help create a stronger environment for
        learning and innovation.
      </p>
      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
        {contributions.map((item) => (
          <span
            key={item}
            className="rounded-full bg-primary/8 px-4 py-1.5 font-jakarta text-sm font-medium text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
