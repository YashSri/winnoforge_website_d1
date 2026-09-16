"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const whoOptions = [
  { key: "school", label: "School Learner", category: "Foundation Programs", href: "/programs#catalog" },
  { key: "college", label: "College Student", category: "Technical Skill Programs", href: "/programs#catalog" },
  { key: "founder", label: "Founder", category: "Founder and Venture Programs", href: "/programs#featured-pathways" },
  { key: "faculty", label: "Faculty Member", category: "Faculty Programs", href: "/collaborate" },
  { key: "institution", label: "Institution", category: "Institutional Programs", href: "/collaborate" },
  { key: "industry", label: "Industry Professional", category: "Industry & Corporate Programs", href: "/collaborate" },
];

const whatOptions = [
  "Technical skills",
  "Innovation capability",
  "Entrepreneurial capability",
  "Teaching capability",
  "Industry exposure",
  "Institutional ecosystem",
];

const levelOptions = ["Beginner", "Intermediate", "Advanced"];

const experienceOptions = ["Workshop", "Cohort", "Project", "Challenge", "Mentorship", "Campus program"];

function PillGroup({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: string | null;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 font-jakarta text-sm font-semibold text-foreground">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={legend}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="peer sr-only"
            />
            <span className="block cursor-pointer rounded-full border border-black/10 bg-white px-4 py-2 font-jakarta text-sm font-medium text-foreground/70 transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-primary hover:bg-black/5">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function PathwaySelector() {
  const [who, setWho] = useState<string | null>(null);
  const [what, setWhat] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [experience, setExperience] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const match = whoOptions.find((o) => o.label === who);

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Pathway Selector
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Where Should You Begin?
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-8 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:p-10">
        <PillGroup
          legend="Who are you?"
          options={whoOptions.map((o) => o.label)}
          value={who}
          onChange={(v) => {
            setWho(v);
            setSubmitted(false);
          }}
        />
        <PillGroup
          legend="What do you want to develop?"
          options={whatOptions}
          value={what}
          onChange={(v) => {
            setWhat(v);
            setSubmitted(false);
          }}
        />
        <PillGroup
          legend="What is your current level?"
          options={levelOptions}
          value={level}
          onChange={(v) => {
            setLevel(v);
            setSubmitted(false);
          }}
        />
        <PillGroup
          legend="What kind of experience do you prefer?"
          options={experienceOptions}
          value={experience}
          onChange={(v) => {
            setExperience(v);
            setSubmitted(false);
          }}
        />

        <button
          type="button"
          disabled={!who || !what || !level || !experience}
          onClick={() => setSubmitted(true)}
          className="w-fit rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          See Recommendations
        </button>

        {submitted && (
          <div className="rounded-2xl bg-primary/5 p-6">
            {match ? (
              <>
                <p className="font-jakarta text-sm font-semibold uppercase tracking-wide text-primary">
                  Suggested Starting Point
                </p>
                <p className="mt-2 font-clash text-xl font-semibold text-foreground">
                  {match.category}
                </p>
                <Link
                  href={match.href}
                  className="mt-4 inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold text-primary transition-colors hover:text-primary/70"
                >
                  Explore This Pathway
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </>
            ) : (
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                We are building more pathways for this goal. Share your interest and the FORGE
                team will help you identify the most relevant next step.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
