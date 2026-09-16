import { Award } from "lucide-react";

const forms = [
  "Featured community story",
  "Project showcase",
  "Community highlight",
  "Approved certificate",
  "Public acknowledgement",
  "Peer appreciation",
  "Mentor recognition",
];

export default function CommunityRecognition() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center md:px-12 md:py-24">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Award className="h-6 w-6" />
      </div>
      <span className="mt-4 block font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Community Recognition
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Recognising Meaningful Contribution
      </h2>
      <p className="mx-auto mt-6 max-w-xl font-jakarta text-base leading-relaxed text-foreground/70">
        Helpful peer support, consistent participation, project progress, knowledge sharing,
        mentorship, community leadership, and responsible conduct can all be recognised —
        through formats like:
      </p>
      <div className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2">
        {forms.map((item) => (
          <span
            key={item}
            className="rounded-full bg-primary/8 px-4 py-1.5 font-jakarta text-sm font-medium text-primary"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-xl font-jakarta text-xs text-foreground/50">
        Recognition is not guaranteed, and not every contribution receives a formal award.
      </p>
    </section>
  );
}
