"use client";

import { useState } from "react";
import Image from "next/image";
import TabSwitch from "@/components/shared/TabSwitch";
import { projectDomains, projects } from "@/lib/projects-data";

const stageLabels: Record<string, string> = {
  idea: "Idea",
  research: "Research",
  prototype: "Prototype",
  mvp: "MVP",
  venture: "Venture",
};

export default function BuiltThroughForge() {
  const [domain, setDomain] = useState<string>("All");

  const filtered = domain === "All" ? projects : projects.filter((p) => p.domain.includes(domain));

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Ideas Become Real When They Are Built
        </h2>
        <p className="max-w-2xl font-jakarta text-base text-foreground/70">
          Explore projects, prototypes, research directions, and innovation stories emerging from
          the FORGE ecosystem.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <TabSwitch
          tabs={[{ key: "All", label: "All" }, ...projectDomains.map((d) => ({ key: d, label: d }))]}
          active={domain}
          onChange={setDomain}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center font-jakarta text-sm text-foreground/60">
          No approved projects in this domain yet — check back soon.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-3 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
            >
              {project.image && (
                <div className="relative aspect-[16/10] w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              )}
              <div className="flex flex-col gap-2 p-6">
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
                  {stageLabels[project.stage]}
                </span>
                <h3 className="font-clash text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
