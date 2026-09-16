import { Award, Clock, GraduationCap, Users } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "500+",
    label: "Target campus partners",
  },
  {
    icon: Clock,
    value: "3 Months",
    label: "Founder program duration",
  },
  {
    icon: Users,
    value: "100K+",
    label: "Students to be impacted",
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry mentors",
  },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
            </div>
            <div className="font-varela font-bold text-3xl md:text-4xl text-foreground">
              {value}
            </div>
            <p className="font-jakarta text-sm text-foreground/60">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
