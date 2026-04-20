import { Building2, Factory, Wrench } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    short: "IL",
    title: "Institution Layer",
    description: "Embedding a structured innovation ecosystem inside campuses.",
    icon: Building2,
    image: "/webp/2.webp",
    overlay: "from-sky-950/90 via-sky-900/70 to-sky-900/45",
    glow: "hover:shadow-[0_0_55px_rgba(77,150,255,0.28)]",
    iconTone: "text-sky-50 bg-sky-100/20 ring-1 ring-sky-100/40",
  },
  {
    short: "CL",
    title: "Corporate Layer",
    description: "Connecting companies with emerging talent and innovation.",
    icon: Factory,
    image: "/webp/4.webp",
    overlay: "from-orange-950/90 via-orange-900/70 to-orange-900/40",
    glow: "hover:shadow-[0_0_55px_rgba(249,115,22,0.24)]",
    iconTone: "text-orange-50 bg-orange-100/20 ring-1 ring-orange-100/40",
  },
  {
    short: "BL",
    title: "Builder Layer",
    description:
      "Where students become builders and ideas become real ventures.",
    icon: Wrench,
    image: "/webp/6.webp",
    overlay: "from-emerald-950/90 via-emerald-900/70 to-emerald-900/40",
    glow: "hover:shadow-[0_0_55px_rgba(132,204,22,0.22)]",
    iconTone: "text-emerald-50 bg-emerald-100/20 ring-1 ring-emerald-100/40",
  },
];

export default function EcosystemPillarsSection() {
  return (
    <section className="mb-12 flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-5 text-center lg:mb-7">
          <h2 className="font-varela text-3xl font-bold text-foreground md:text-5xl">
            Three Layers. One Ecosystem.
          </h2>
        </div>

        <div className="grid gap-6 md:auto-rows-fr md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className={`group relative flex min-h-[46vh] flex-col overflow-hidden rounded-[1.8rem] border border-white/20 bg-black p-7 transition-all duration-300 hover:-translate-y-1 md:min-h-[70vh] ${pillar.glow}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.title} visual`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-b ${pillar.overlay}`}
                  />
                  <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <span className="absolute right-0 top-0 font-clash text-xs font-semibold tracking-[0.18em] text-white/80">
                    {pillar.short}
                  </span>

                  <div
                    className={`mb-6 inline-flex w-fit rounded-2xl p-3 transition-transform duration-300 group-hover:scale-105 ${pillar.iconTone}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-clash text-3xl font-semibold text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-sm font-jakarta text-base leading-relaxed text-white/85">
                    {pillar.description}
                  </p>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-white/25" />
                    <p className="mt-4 font-jakarta text-xs uppercase tracking-[0.16em] text-white/75">
                      Glow Hover Animation
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
