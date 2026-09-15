"use client";

import { useState } from "react";

interface MapNode {
  key: string;
  label: string;
  description: string;
}

const firstRing: MapNode[] = [
  { key: "institutions", label: "Partner Institutions", description: "Colleges and universities that embed FORGE into their campus." },
  { key: "chapters", label: "Campus Chapters", description: "The local operational arm of FORGE inside each partner institution." },
  { key: "students", label: "Students and Builders", description: "The people who move through the ecosystem as builders." },
  { key: "mentors", label: "Mentors and Experts", description: "Practitioners who guide builders through execution." },
  { key: "industry", label: "Industry Partners", description: "Companies who bring problem statements and hiring pathways." },
  { key: "infra", label: "Innovation Infrastructure", description: "The physical and digital environments builders work within." },
];

const secondRing: MapNode[] = [
  { key: "programs", label: "Programs", description: "Certification and skill-development tracks." },
  { key: "workshops", label: "Workshops", description: "Short, focused sessions that build specific skills." },
  { key: "hackathons", label: "Hackathons", description: "Time-boxed events that pressure-test problem-solving." },
  { key: "projects", label: "Projects", description: "Ongoing execution work that produces real outputs." },
  { key: "citadel", label: "Citadel", description: "The structured execution environment for deeper building." },
  { key: "incubation", label: "Incubation", description: "Support for validated ideas moving toward ventures." },
  { key: "hiring", label: "Hiring Network", description: "Pathways connecting builders to industry opportunities." },
  { key: "community", label: "Community", description: "The broader network of builders, mentors, and partners." },
  { key: "research", label: "Research & Problem Statements", description: "Real problems sourced from industry and public partners." },
  { key: "summits", label: "Summits & Showcases", description: "Convergence points where the ecosystem's work is presented." },
];

const outerRing: MapNode[] = [
  { key: "careers", label: "Careers", description: "Builders move toward meaningful career opportunities." },
  { key: "ventures", label: "Ventures", description: "Validated ideas can grow into real startups." },
  { key: "institutional", label: "Institutional Transformation", description: "Campuses build stronger innovation cultures over time." },
  { key: "collaboration", label: "Industry Collaboration", description: "Sustained relationships between builders and companies." },
  { key: "national", label: "National Innovation Capacity", description: "A long-term ambition, not a claim of current scale." },
  { key: "public", label: "Public-Purpose Problem Solving", description: "Innovation applied to challenges that matter beyond campus." },
];

const rings: { title: string; nodes: MapNode[] }[] = [
  { title: "Who's In It", nodes: firstRing },
  { title: "What Happens Inside It", nodes: secondRing },
  { title: "What It Leads To", nodes: outerRing },
];

export default function EcosystemMap() {
  const [active, setActive] = useState<MapNode>(firstRing[0]);

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          The Ecosystem Map
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          One Core. Three Layers. A Connected System.
        </h2>
        <p className="font-jakarta text-base text-foreground/70">
          Select any element to see how it connects to the rest of the ecosystem.
        </p>
      </div>

      <div className="mt-14 rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:p-12">
        <div className="mx-auto w-fit rounded-full bg-primary px-6 py-3 font-jakarta text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_18px_rgba(77,150,255,0.28)]">
          FORGE Central Core
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {rings.map((ring) => (
            <div key={ring.title}>
              <p className="mb-3 font-jakarta text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                {ring.title}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {ring.nodes.map((node) => (
                  <button
                    key={node.key}
                    type="button"
                    onMouseEnter={() => setActive(node)}
                    onFocus={() => setActive(node)}
                    onClick={() => setActive(node)}
                    aria-pressed={active.key === node.key}
                    className={`rounded-full px-4 py-2 font-jakarta text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      active.key === node.key
                        ? "bg-primary text-white shadow-[0_8px_18px_rgba(77,150,255,0.28)]"
                        : "bg-primary/8 text-foreground/70 hover:bg-primary/15"
                    }`}
                  >
                    {node.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-primary/5 p-6">
          <p className="font-jakarta text-base leading-relaxed text-foreground/80">
            <span className="font-clash text-lg font-semibold text-foreground">
              {active.label}.{" "}
            </span>
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}
