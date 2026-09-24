"use client";

import { useState } from "react";
import {
  Building2,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Network,
  Rocket,
  Users,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CollaborateHero from "@/components/collaborate/CollaborateHero";
import CollaborateForm, { type StakeholderType } from "@/components/collaborate/CollaborateForm";
import CollaborationPathways from "@/components/collaborate/CollaborationPathways";
import ReadinessChecklist from "@/components/collaborate/ReadinessChecklist";
import CollaborationStoriesEditorial from "@/components/collaborate/CollaborationStoriesEditorial";
import PartnerRepresentation from "@/components/collaborate/PartnerRepresentation";
import PartnerWithForge from "@/components/partner/PartnerWithForge";
import VoicesCarousel from "@/components/shared/VoicesCarousel";
import FaqAccordion, { type FaqItem } from "@/components/shared/FaqAccordion";
import CardGrid from "@/components/shared/CardGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import CollaborationFormats from "@/components/collaborate/CollaborationFormats";

const whyCollaborateCards = [
  { icon: Network, title: "Connect Learning With Practice", description: "Bring practical challenges, projects, and real-world context into learning environments." },
  { icon: Rocket, title: "Develop Capability", description: "Support structured skill development, project execution, and continuous improvement." },
  { icon: Users, title: "Engage Emerging Talent", description: "Interact with learners and builders through approved programs, showcases, and challenges." },
  { icon: Lightbulb, title: "Share Experience", description: "Contribute knowledge through mentorship, workshops, reviews, and conversations." },
  { icon: Building2, title: "Strengthen Institutions", description: "Support institutions in developing practical, innovation-oriented learning experiences." },
  { icon: FlaskConical, title: "Explore New Ideas", description: "Create space for experimentation, problem-solving, and cross-disciplinary thinking." },
  { icon: HeartHandshake, title: "Build Long-Term Relationships", description: "Move beyond one-time activities toward purposeful, sustained collaboration where appropriate." },
];

const collaborationModelSteps = [
  { title: "Connect", description: "Share your organisation, role, interests, and initial idea." },
  { title: "Understand", description: "The FORGE team reviews the context, objectives, audience, and requirements." },
  { title: "Explore", description: "Identify the most relevant collaboration pathway and possible scope." },
  { title: "Design", description: "Discuss the format, responsibilities, timelines, resources, and expected outputs." },
  { title: "Confirm", description: "Agree on the approved scope, points of contact, and next steps." },
  { title: "Deliver", description: "Execute the activity, program, session, challenge, or initiative." },
  { title: "Review", description: "Reflect on participation, outputs, feedback, and future possibilities." },
];


const audiences: {
  icon: typeof GraduationCap;
  title: string;
  description: string;
  cta: string;
  stakeholder: StakeholderType;
}[] = [
  {
    icon: GraduationCap,
    title: "Colleges & Universities",
    description: "Build industry-aligned learning and innovation pathways on campus.",
    cta: "Explore Institutional Collaboration",
    stakeholder: "College / University",
  },
  {
    icon: Building2,
    title: "Industry & Corporate Partners",
    description: "Engage with emerging talent, real problem statements, innovation projects, and hiring pathways.",
    cta: "Explore Industry Collaboration",
    stakeholder: "Company",
  },
  {
    icon: Users,
    title: "Mentors & Experts",
    description: "Contribute through talks, workshops, reviews, mentorship, and industry insight.",
    cta: "Join the Expert Network",
    stakeholder: "Mentor / Expert",
  },
  {
    icon: HeartHandshake,
    title: "CSR & Strategic Partners",
    description: "Support structured student development, innovation infrastructure, and measurable ecosystem outcomes.",
    cta: "Explore Strategic Collaboration",
    stakeholder: "CSR / Strategic Partner",
  },
];

const collaborateTestimonials = [
  {
    quote: "Partnering with FORGE gave our students hands-on execution experience we couldn't build in-house.",
    name: "Dr. Sameer Joshi",
    designation: "Director of Innovation",
    org: "Partner Institution",
  },
  {
    quote: "We've sourced three of our strongest hires directly out of FORGE cohorts.",
    name: "Neha Gupta",
    designation: "Talent Lead",
    org: "Industry Partner",
  },
  {
    quote: "The MoU-to-pilot timeline was faster than any vendor process we've run before.",
    name: "Prof. Alok Bhatt",
    designation: "Dean, Engineering",
    org: "Partner Institution",
  },
];


export default function CollaboratePage() {
  const [stakeholder, setStakeholder] = useState<StakeholderType>("General Enquiry");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-24 md:pt-28">
        <CollaborateHero />

        <CollaborationPathways
          onSelect={(s) => {
            setStakeholder(s);
            document.getElementById("collaborate-form")?.scrollIntoView({ behavior: "smooth" });
          }}
        />


        {/* =====================================================
            TEMPORARILY HIDDEN
            SECTION: WHY COLLABORATE WITH FORGE

            The original implementation is intentionally preserved.
            Uncomment the following block to restore this section.
        ===================================================== */}
        {/*
        <CardGrid
          eyebrow="Why Collaborate With FORGE"
          heading="Collaboration With a Clear Purpose"
          cards={whyCollaborateCards}
          columns={3}
        />
        */}

        <PartnerWithForge />

        {/* =====================================================
            TEMPORARILY HIDDEN
            SECTION: COLLABORATION MODEL

            The original implementation is intentionally preserved.
            Uncomment the following block to restore this section.
        ===================================================== */}
        {/*
        <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Collaboration Model
            </span>
            <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
              From First Conversation to Shared Action
            </h2>
          </div>
          <div className="mt-14">
            <ProcessTimeline steps={collaborationModelSteps} />
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center font-jakarta text-base italic text-primary/65">
            Good collaboration begins with clarity and grows through shared responsibility.
          </p>
        </section>
        */}

        <CollaborationFormats />

        <ReadinessChecklist />

        <VoicesCarousel title="What Our Partners Say" voices={collaborateTestimonials} />

        {/* =====================================================
            TEMPORARILY HIDDEN
            SECTION: COLLABORATION STORIES

            The original implementation is intentionally preserved.
            Uncomment the following block to restore this section.
        ===================================================== */}
        {/* <CollaborationStoriesEditorial /> */}

        <PartnerRepresentation />

        <section
          id="collaborate-form"
          className="mx-auto w-full max-w-2xl scroll-mt-28 px-6 py-16 md:px-12 md:py-24"
        >
          <h2 className="text-center font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Tell Us What You Have in Mind
          </h2>
          <div className="mt-10 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:p-12">
            <CollaborateForm stakeholder={stakeholder} onStakeholderChange={setStakeholder} />
          </div>
        </section>

        <FaqAccordion />

      </main>

      <Footer />
    </div>
  );
}
