import { Award } from "lucide-react";

const forms = [
  "Project demonstrations",
  "Reviews",
  "Showcases",
  "Completion records",
  "Certificates or credentials, where applicable",
  "Portfolio development",
  "Peer recognition",
  "Mentor feedback",
  "Participation in approved challenges",
  "Progression to advanced pathways",
];

export default function ProgressRecognition() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Award className="h-6 w-6" />
        </div>
        <p className="mt-4 font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          Progress and Recognition
        </p>
        <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Make Progress Visible
        </h2>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
          {forms.map((form) => (
            <span
              key={form}
              className="rounded-full bg-white/85 px-4 py-1.5 font-jakarta text-sm font-medium text-foreground/70 shadow-[0_10px_24px_rgba(23,23,23,0.05)]"
            >
              {form}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl font-jakarta text-sm leading-relaxed text-foreground/55">
          Participation supports capability-building, exposure, and progression — it does not
          automatically lead to employment, placement, funding, investment, admission, promotion,
          incubation, or certification from an external authority unless formally verified and
          approved.
        </p>
      </div>
    </section>
  );
}
