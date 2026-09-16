import { Rocket, ShieldCheck, Users } from "lucide-react";

const reasons = [
  {
    key: "execution",
    icon: Rocket,
    title: "Execution-led, not lecture-led",
    description: "Every builder ships something real — a prototype, a product, a pitch — instead of sitting through another theory module.",
  },
  {
    key: "industry",
    icon: ShieldCheck,
    title: "Industry-backed standards",
    description: "Mentors and problem statements come from operators who've actually built and shipped, so the bar stays real.",
  },
  {
    key: "student-led",
    icon: Users,
    title: "Student-run, not top-down",
    description: "Builders run the show — FORGE gives them the structure, network, and accountability to do it well.",
  },
];

export default function WhySection() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Why Winnovation and FORGE
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.key} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-clash text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
