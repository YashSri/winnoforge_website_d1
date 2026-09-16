"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const paths = [
  {
    key: "learn",
    label: "I Want to Learn",
    description: "Explore programs, workshops, and beginner-friendly learning sessions.",
    cta: "Explore Programs",
    href: "/programs",
  },
  {
    key: "build",
    label: "I Want to Build",
    description: "Find project spaces, challenges, and builder-focused opportunities.",
    cta: "Explore the Citadel",
    href: "/citadel1",
  },
  {
    key: "mentor",
    label: "I Want to Mentor",
    description: "Learn how to contribute as a mentor or expert.",
    cta: "Meet the Mentors",
    href: "/mentors",
  },
  {
    key: "share",
    label: "I Want to Share Knowledge",
    description: "Speak, run a workshop, or contribute to community discussions.",
    cta: "Meet the Mentors",
    href: "/mentors",
  },
  {
    key: "collaborate",
    label: "I Want to Collaborate",
    description: "Explore institutional, industry, founder, or project collaboration.",
    cta: "Start a Conversation",
    href: "/collaborate",
  },
  {
    key: "explore",
    label: "I Want to Explore Opportunities",
    description: "See approved events, showcases, and enquiry routes.",
    cta: "See What's Happening",
    href: "#activities",
  },
];

export default function ParticipationSelector() {
  const [active, setActive] = useState(paths[0].key);
  const activePath = paths.find((p) => p.key === active) ?? paths[0];

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Find Your Community Path
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          How Would You Like to Participate?
        </h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {paths.map((path) => (
          <button
            key={path.key}
            type="button"
            onClick={() => setActive(path.key)}
            aria-pressed={active === path.key}
            className={`rounded-full px-4 py-2 font-jakarta text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              active === path.key
                ? "bg-primary text-white shadow-[0_8px_18px_rgba(77,150,255,0.28)]"
                : "bg-primary/8 text-foreground/70 hover:bg-primary/15"
            }`}
          >
            {path.label}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
        <p className="font-jakarta text-base leading-relaxed text-foreground/70">
          {activePath.description}
        </p>
        <Link
          href={activePath.href}
          className="mt-5 inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold text-primary transition-colors hover:text-primary/70"
        >
          {activePath.cta}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
