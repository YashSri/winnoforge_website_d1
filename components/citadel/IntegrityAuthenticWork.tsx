import { CheckCircle2 } from "lucide-react";

const expectations = [
  "Represent their own contributions accurately",
  "Document their process",
  "Explain decisions and methods",
  "Distinguish original work from referenced material",
  "Acknowledge collaboration",
  "Use tools responsibly",
  "Disclose relevant assistance where required",
  "Avoid fabricating results, evidence, or progress",
  "Respond constructively when work is reviewed",
];

export default function IntegrityAuthenticWork() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Integrity and Authentic Work
          </p>
          <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Build Honestly. Show the Real Work.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
            The Citadel encourages authentic participation and transparent progress. Participants
            are expected to:
          </p>
        </div>

        <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {expectations.map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-jakarta text-sm text-foreground/75">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center font-jakarta text-sm leading-relaxed text-foreground/60">
          Where digital tools or AI systems are used, participants should follow the applicable
          program or institutional requirements for disclosure, attribution, and responsible use.
        </p>
      </div>
    </section>
  );
}
