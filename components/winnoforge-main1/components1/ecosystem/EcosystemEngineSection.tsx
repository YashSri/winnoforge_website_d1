import { Flame, Lightbulb, Rocket, Wrench } from "lucide-react";
import Image from "next/image";

const engineSteps = [
  {
    id: "01",
    title: "Ignite",
    description:
      "Students explore technologies through seminars and workshops.",
    icon: Flame,
    image: "/webp/2.webp",
  },
  {
    id: "02",
    title: "Innovate",
    description: "Hackathons turn ideas into concepts through collaboration.",
    icon: Lightbulb,
    image: "/webp/5.webp",
  },
  {
    id: "03",
    title: "Forge",
    description:
      "Teams build prototypes inside the Bootcamp and Innovation Citadel.",
    icon: Wrench,
    image: "/webp/6.webp",
  },
  {
    id: "04",
    title: "Launch",
    description:
      "Top projects present innovations at the FORGE Innovation Summit.",
    icon: Rocket,
    image: "/webp/8.webp",
  },
];

export default function EcosystemEngineSection() {
  return (
    <section className="mb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-4xl border border-black/10 bg-white/80 p-6 md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-varela text-3xl font-bold text-foreground md:text-5xl">
            The FORGE Engine
          </h2>
          <p className="mt-5 font-jakarta text-lg leading-relaxed text-foreground/70">
            Four stages. One relentless cycle. Every step pushes you closer to
            launch.
          </p>
        </div>

        <div className="relative mt-12 hidden h-8 md:block">
          <div className="absolute left-[12%] right-[12%] top-1/2 h-0.5 -translate-y-1/2 bg-linear-to-r from-primary via-secondary to-primary/70" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {engineSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group relative rounded-[1.6rem] border border-black/10 bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute -top-3 left-5 rounded-full border border-black/10 bg-white px-3 py-1 font-jakarta text-xs font-semibold text-foreground/60">
                  Step {step.id}
                </span>

                <div className="relative h-36 overflow-hidden rounded-2xl">
                  <Image
                    src={step.image}
                    alt={`${step.title} stage inside FORGE`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <h3 className="font-clash text-3xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <span className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <p className="mt-3 font-jakarta text-sm leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
