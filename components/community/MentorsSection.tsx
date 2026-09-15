"use client";

import MentorCard, { type Mentor } from "@/components/mentors/MentorCard";
import InsightCard, { type Insight } from "@/components/mentors/InsightCard";
import TrainerSpotlightCard from "@/components/mentors/TrainerSpotlightCard";
import VoicesCarousel from "@/components/shared/VoicesCarousel";
import { programs } from "@/lib/programs-data";
import { useModal } from "@/components/modal/ModalContext";

const mentors: Mentor[] = [
  {
    name: "Priya Suresh",
    designation: "Senior Product Manager",
    org: "Mentor Network",
    expertise: ["Product", "Strategy"],
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    name: "Karthik Iyer",
    designation: "Engineering Lead",
    org: "Mentor Network",
    expertise: ["Engineering", "Systems Design"],
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    name: "Ananya Bose",
    designation: "Founder",
    org: "Mentor Network",
    expertise: ["Startups", "Fundraising"],
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    name: "Rohan Kapoor",
    designation: "Engineering Manager",
    org: "Industry Partner",
    expertise: ["Hiring", "Engineering"],
    linkedinUrl: "https://www.linkedin.com",
  },
];

const insights: Insight[] = [
  {
    title: "Why Execution Beats Theory in Your First Internship",
    excerpt: "What actually gets junior builders noticed by hiring managers.",
    author: "Priya Suresh",
  },
  {
    title: "The 3 Questions Every Mentor Asks Before a Sprint Review",
    excerpt: "A framework for giving feedback that actually changes outcomes.",
    author: "Karthik Iyer",
  },
  {
    title: "What Investors Look for in a Student-Built Prototype",
    excerpt: "Lessons from reviewing dozens of FORGE Citadel demo days.",
    author: "Ananya Bose",
  },
];

const editorialVoices = [
  {
    quote: "The best mentors don't give answers — they ask the question the builder hasn't asked themselves yet.",
    name: "Priya Suresh",
    designation: "Senior Product Manager",
    org: "Mentor Network",
  },
];

export default function MentorsSection() {
  const { open } = useModal();

  return (
    <>
      <section id="mentors" className="mx-auto w-full max-w-4xl scroll-mt-28 px-6 pt-16 text-center md:px-12 md:pt-24">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Mentors & Experts
        </span>
        <h2 className="mt-4 font-varela text-4xl font-bold text-foreground md:text-5xl">
          The People Behind the Bar
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-jakarta text-lg text-foreground/70">
          FORGE builders learn from practicing operators, not just instructors — meet the
          mentors, trainers, and experts who keep the standard real.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-10 md:px-12">
        <h3 className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
          Mentor Directory
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.name} mentor={mentor} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12">
        <h3 className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
          Mentor Insights
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard key={insight.title} insight={insight} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-10 md:px-12">
        <h3 className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
          Trainer Spotlight
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <TrainerSpotlightCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      <VoicesCarousel title="From Our Mentors" voices={editorialVoices} />

      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:px-12">
        <h3 className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
          Become a Mentor
        </h3>
        <p className="max-w-xl font-jakarta text-base text-foreground/70">
          Share your expertise with builders who are shipping real products, not just doing
          assignments.
        </p>
        <button
          type="button"
          onClick={() => open("mentor")}
          className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
        >
          Apply to Mentor
        </button>
      </section>
    </>
  );
}
