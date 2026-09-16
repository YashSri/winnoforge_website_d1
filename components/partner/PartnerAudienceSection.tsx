"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Building2,
  Handshake,
  Lightbulb,
  Megaphone,
  Trophy,
  UserSearch,
  Users,
  Wrench,
} from "lucide-react";
import TabSwitch from "@/components/shared/TabSwitch";
import OfferingCard from "@/components/partner/OfferingCard";
import ProcessTimeline from "@/components/shared/ProcessTimeline";

const institutionOfferings = [
  { icon: Wrench, title: "On-Campus Training", description: "Structured, execution-led training delivered directly on your campus." },
  { icon: BadgeCheck, title: "Certifications & Credentialing", description: "Industry-backed certification tracks your students can enroll in." },
  { icon: Users, title: "Workshops & Bootcamps", description: "Short, high-intensity sessions that introduce students to real building." },
  { icon: Building2, title: "Faculty Development Programs", description: "Upskilling tracks for faculty to bring execution-led teaching into the classroom." },
  { icon: Trophy, title: "Hackathons & Innovation Challenges", description: "Campus-wide events that surface builders and feed the FORGE pipeline." },
];

const industryOfferings = [
  { icon: Lightbulb, title: "Problem Statement Sourcing", description: "Bring real business problems to FORGE builders instead of hypothetical case studies." },
  { icon: UserSearch, title: "Talent Pipeline Access", description: "Direct visibility into builders who've already shipped real products." },
  { icon: Handshake, title: "Mentor Network Participation", description: "Your team mentors builders directly, staying close to emerging talent." },
  { icon: Megaphone, title: "Co-Branded Programs", description: "Joint certification or training tracks branded with your organization." },
  { icon: Trophy, title: "Corporate Hackathons", description: "FORGE runs hackathons around your problem statements and brand." },
];

const institutionSteps = [
  { title: "Discovery Call", description: "We learn about your campus, students, and goals." },
  { title: "MoU & Scoping", description: "We define the partnership scope and sign a formal MoU." },
  { title: "Pilot Cohort", description: "A first cohort runs on your campus to validate the model." },
  { title: "Full Rollout", description: "The program scales across your student body." },
  { title: "Ongoing Partnership", description: "Continuous cohorts, reviews, and expanded offerings." },
];

const industrySteps = [
  { title: "Discovery Call", description: "We learn about your problem areas and hiring needs." },
  { title: "Problem Statement Intake", description: "You submit real problem statements for builders to tackle." },
  { title: "Builder Matching", description: "We match your problem statements to the right builder teams." },
  { title: "Sprint Execution", description: "Builders execute against your problem statements in sprint cycles." },
  { title: "Outcome Review", description: "You review outputs and engage with standout builders." },
];

export default function PartnerAudienceSection() {
  const [active, setActive] = useState("institutions");

  const offerings = active === "institutions" ? institutionOfferings : industryOfferings;
  const steps = active === "institutions" ? institutionSteps : industrySteps;

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Partner With FORGE
        </h2>
        <TabSwitch
          tabs={[
            { key: "institutions", label: "For Institutions" },
            { key: "industry", label: "For Industry" },
          ]}
          active={active}
          onChange={setActive}
        />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((offering) => (
          <OfferingCard key={offering.title} {...offering} />
        ))}
      </div>

      {/* =====================================================
          TEMPORARILY HIDDEN
          SECTION: HOW IT RUNS

          The original implementation is intentionally preserved.
          Uncomment the following block to restore this section.
      ===================================================== */}
      {/*
      <div className="mt-16">
        <h3 className="text-center font-clash text-2xl font-semibold text-foreground">
          How It Runs
        </h3>
        <div className="mt-10">
          <ProcessTimeline steps={steps} />
        </div>
      </div>
      */}
    </section>
  );
}
