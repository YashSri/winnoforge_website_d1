import { Globe2, Hammer, RefreshCcw, UsersRound } from "lucide-react";

const experiencePoints = [
  {
    label: "Builder-first environment",
    icon: Hammer,
  },
  {
    label: "Continuous learning cycles",
    icon: RefreshCcw,
  },
  {
    label: "Real-world collaboration",
    icon: Globe2,
  },
  {
    label: "Access to mentors and peers",
    icon: UsersRound,
  },
];

export default function CommunityExperienceSection() {
  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-4xl border border-white/60 bg-white/62 px-6 py-10 shadow-[0_16px_38px_rgba(24,42,72,0.1)] backdrop-blur-sm md:px-10">
        <h2 className="text-center font-varela text-4xl font-bold text-[#1f4270] md:text-5xl">
          Inside the FORGE Community
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiencePoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.label}
                className="flex items-center gap-3 rounded-2xl border border-[#4d96ff]/12 bg-white px-4 py-4"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#4d96ff]/14 text-[#2f5f95]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-jakarta text-sm font-semibold text-[#30527f] md:text-base">
                  {point.label}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
