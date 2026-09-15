import { experts } from "@/lib/experts-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ExpertsSpeakers() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Learn From People Who Build
        </h2>
        <p className="max-w-2xl font-jakarta text-base text-foreground/70">
          FORGE brings learning closer to the real world through conversations, workshops,
          masterclasses, reviews, and mentorship with people who have built, operated, researched,
          led, or solved problems in their respective domains.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-jakarta text-base font-semibold text-primary">
              {initials(expert.name)}
            </div>
            <div>
              <h3 className="font-clash text-lg font-semibold text-foreground">{expert.name}</h3>
              <p className="font-jakarta text-xs text-foreground/60">
                {expert.designation}, {expert.organisation}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {expert.domain.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/8 px-3 py-1 font-jakarta text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            {expert.contribution && (
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {expert.contribution}
              </p>
            )}
            <span
              aria-disabled="true"
              className="mt-auto w-fit cursor-not-allowed font-jakarta text-sm font-semibold text-foreground/30"
              title="Full profile pages coming soon"
            >
              View Profile &rarr;
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
