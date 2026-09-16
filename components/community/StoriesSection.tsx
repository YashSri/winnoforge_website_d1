import Image from "next/image";

interface Story {
  title: string;
  category: string;
  summary: string;
  contributor: string;
  date: string;
  image: string;
}

const stories: Story[] = [
  {
    title: "From First Cohort to First Startup",
    category: "Founder Reflection",
    summary: "One builder's path from a FORGE bootcamp to a funded startup.",
    contributor: "Builder Community",
    date: "May 2026",
    image: "/webp/5.webp",
  },
  {
    title: "What a Semester at the Citadel Taught Me",
    category: "Learner Project Journey",
    summary: "A builder reflects on their first sprint cycle and what changed along the way.",
    contributor: "Builder Community",
    date: "Mar 2026",
    image: "/webp/6.webp",
  },
  {
    title: "Bringing FORGE to Our Campus",
    category: "Campus Activity",
    summary: "How one partner institution set up its first FORGE campus chapter.",
    contributor: "Partner Institution",
    date: "Feb 2026",
    image: "/webp/activation-builders.webp",
  },
];

export default function StoriesSection() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Stories From the Ecosystem
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <div
            key={story.title}
            className="flex flex-col gap-3 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image src={story.image} alt={story.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
                {story.category}
              </span>
              <h3 className="font-clash text-lg font-semibold text-foreground">{story.title}</h3>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {story.summary}
              </p>
              <p className="font-jakarta text-xs text-foreground/45">
                {story.contributor} &middot; {story.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
