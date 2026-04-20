import { ArrowRight, GraduationCap, Rocket, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    value: "45+",
    label: "Institutions",
    icon: GraduationCap,
  },
  {
    value: "10,000+",
    label: "Students",
    icon: Users,
  },
  {
    value: "40+",
    label: "Startups",
    icon: Rocket,
  },
];

export default function EcosystemHowWorksSection() {
  return (
    <section className="mb-24 flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-4xl border border-black/10 bg-[#f1f1f4] shadow-[0_28px_80px_rgba(23,23,23,0.1)]">
        <div className="grid lg:grid-cols-12">
          <div className="p-8 md:p-12 lg:col-span-7 lg:pr-8">
            <h2 className="font-varela text-3xl font-bold text-foreground md:text-5xl">
              See How FORGE Works
            </h2>

            <p className="mt-5 max-w-2xl font-jakarta text-lg leading-relaxed text-foreground/70">
              A structured ecosystem where institutions, students, and industry
              come together to build real-world innovation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-black/10 bg-white/85 p-4"
                  >
                    <span className="inline-flex rounded-xl bg-green-100 p-2 text-green-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-varela text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-jakarta text-sm font-medium text-foreground/70">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#D9E2B7] px-6 py-3 font-jakarta text-base font-bold tracking-wide text-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore the Ecosystem
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative min-h-90 lg:col-span-5 lg:min-h-140">
            <Image
              src="/webp/4.webp"
              alt="Mentor leading students during a FORGE ecosystem session"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-white/30 to-[#f1f1f4]/92" />
          </div>
        </div>

        <div className="border-t border-black/10 bg-white/55 px-8 py-5 md:px-12">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-foreground/70">
            <span className="font-zodiak text-4xl text-[#8B1E2D]">
              Stanford
            </span>
            <span className="font-jakarta text-3xl font-semibold text-[#737373]">
              Microsoft
            </span>
            <span className="font-clash text-3xl font-semibold text-[#B64D31]">
              ZOHO
            </span>
            <span className="font-jakarta text-xl">+ and many more...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
