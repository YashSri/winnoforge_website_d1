"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface DiagramNode {
  key: string;
  label: string;
  description: string;
}

const nodes: DiagramNode[] = [
  {
    key: "institution",
    label: "Institution",
    description:
      "Colleges and universities open campus infrastructure and student time to FORGE's execution model.",
  },
  {
    key: "builder",
    label: "Student / Builder",
    description:
      "Students step in as builders, taking ownership of real problem statements from day one.",
  },
  {
    key: "mentors",
    label: "Mentors",
    description:
      "Practitioners and operators guide builders through sprints, reviews, and milestone accountability.",
  },
  {
    key: "industry",
    label: "Industry",
    description:
      "Companies bring real problem statements and evaluate outputs against real-world bars.",
  },
  {
    key: "innovation",
    label: "Innovation",
    description:
      "Sprint cycles convert problem statements into working prototypes and early products.",
  },
  {
    key: "outcomes",
    label: "Outcomes",
    description:
      "Builders graduate with shipped products, industry exposure, and in some cases, startups.",
  },
];

export default function EcosystemDiagram() {
  const [activeKey, setActiveKey] = useState(nodes[0].key);
  const panelRef = useRef<HTMLParagraphElement>(null);
  const active = nodes.find((n) => n.key === activeKey) ?? nodes[0];

  useGSAP(
    () => {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      );
    },
    { dependencies: [activeKey] },
  );

  return (
    <div className="flex w-full flex-col gap-8 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:p-10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {nodes.map((node, i) => (
          <div key={node.key} className="flex items-center gap-3">
            <button
              type="button"
              onMouseEnter={() => setActiveKey(node.key)}
              onFocus={() => setActiveKey(node.key)}
              onClick={() => setActiveKey(node.key)}
              aria-pressed={activeKey === node.key}
              className={`rounded-full px-4 py-2 font-jakarta text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeKey === node.key
                  ? "bg-primary text-white shadow-[0_8px_18px_rgba(77,150,255,0.28)]"
                  : "bg-primary/8 text-foreground/70 hover:bg-primary/15"
              }`}
            >
              {node.label}
            </button>
            {i < nodes.length - 1 && (
              <span className="hidden text-foreground/30 sm:inline" aria-hidden="true">
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>
      <p
        ref={panelRef}
        className="font-jakarta text-base leading-relaxed text-foreground/70"
      >
        <span className="font-clash text-lg font-semibold text-foreground">
          {active.label}.{" "}
        </span>
        {active.description}
      </p>
    </div>
  );
}
