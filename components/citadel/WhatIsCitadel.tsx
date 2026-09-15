import { CheckCircle2 } from "lucide-react";

const elements = [
  "A structured learning environment",
  "Practical project opportunities",
  "Access to mentors and experts",
  "Peer-to-peer collaboration",
  "Innovation activities",
  "Reflection and feedback",
  "Demonstration of work",
  "Clear pathways for continued growth",
];

export default function WhatIsCitadel() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          What Is the Citadel?
        </p>
        <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          More Than a Place. A Practice-Oriented Ecosystem.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
          The Citadel is designed to provide a focused environment for learning, experimentation,
          collaboration, and execution — bringing together the elements required for meaningful
          capability-building, and helping participants develop habits of ownership, curiosity,
          responsibility, and continuous improvement.
        </p>

        <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {elements.map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-jakarta text-sm text-foreground/75">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
