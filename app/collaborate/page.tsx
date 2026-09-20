"use client";

import { useState } from "react";
import Link from "next/link";
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
import AudienceCard from "@/components/collaborate/AudienceCard";
import CollaborateForm, { type StakeholderType } from "@/components/collaborate/CollaborateForm";
import CollaborationPathways from "@/components/collaborate/CollaborationPathways";
import ReadinessChecklist from "@/components/collaborate/ReadinessChecklist";
import CollaborationStoriesEditorial from "@/components/collaborate/CollaborationStoriesEditorial";
import PartnerRepresentation from "@/components/collaborate/PartnerRepresentation";
import PartnerAudienceSection from "@/components/partner/PartnerAudienceSection";
import VoicesCarousel from "@/components/shared/VoicesCarousel";
import FaqAccordion, { type FaqItem } from "@/components/shared/FaqAccordion";
import CardGrid from "@/components/shared/CardGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";

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

const collaborationFormatCards = [
  { title: "Campus Program", description: "A structured learning or innovation experience delivered with an institution." },
  { title: "Workshop or Masterclass", description: "A focused session led by an approved mentor, expert, trainer, or practitioner." },
  { title: "Industry Challenge", description: "A practical problem or challenge presented to participants for exploration and solution development." },
  { title: "Innovation Showcase", description: "A platform for presenting approved projects, prototypes, research, or ideas." },
  { title: "Mentorship Series", description: "A structured sequence of guidance, feedback, and learning interactions." },
  { title: "Faculty Development Session", description: "An experience designed to support educators and institutional teams." },
  { title: "Community Event", description: "A workshop, discussion, panel, meetup, or collaborative activity." },
  { title: "Applied Project", description: "A practical project developed around a confirmed problem, objective, or learning goal." },
  { title: "Research or Experimentation Initiative", description: "A collaboration focused on exploring a defined question, problem, or technical possibility." },
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

const collaborateFaqs: (FaqItem & { topic: string })[] = [
  { topic: "Collaboration", question: "Who can collaborate with FORGE?", answer: "Institutions, industry organisations, mentors and experts, founders, communities, and researchers — see the Collaboration Pathways above for the full range." },
  { topic: "Collaboration", question: "What types of collaboration are possible?", answer: "Campus programs, workshops, mentorship series, industry challenges, innovation showcases, community events, applied projects, and research initiatives — see What Can We Build Together above." },
  { topic: "Winnovation", question: "What is Winnovation?", answer: "Winnovation is the organization behind FORGE, partnering with institutions, industry, and mentors to build a student-led innovation ecosystem." },
  { topic: "FORGE", question: "What is FORGE?", answer: "FORGE is the execution system that turns campus talent into builders through structured sprints, mentorship, and real problem statements." },
  { topic: "Institutions", question: "Does FORGE work with schools and colleges?", answer: "Yes — through the Institutional Collaboration pathway above, covering campus programs, skill pathways, campus chapters, and faculty development." },
  { topic: "Industry", question: "Can companies bring real-world problem statements?", answer: "Yes — industry problem statements are one of the core Industry Collaboration areas. Use the form below to start that conversation." },
  { topic: "Programs", question: "What certification tracks does FORGE offer?", answer: "Data Science, Business Analyst, Data Analytics, Full Stack Development, and AI Productivity & Automation." },
  { topic: "Eligibility", question: "Do I need prior experience to join a program?", answer: "It depends on the track — check each program's Eligibility section, but most tracks are designed to take builders from wherever they're starting." },
  { topic: "Fees", question: "Does collaboration involve a fee?", answer: "This depends on the specific engagement — we don't publish general pricing here since it varies by scope and format. Share your context in the form below and we'll clarify." },
  { topic: "Partnerships", question: "How does my institution or company partner with FORGE?", answer: "Pick your pathway above or fill out the form below — most partnerships move from discovery call to pilot within one cycle." },
  { topic: "Response time", question: "How long does it take to respond?", answer: "Response times vary by enquiry type and season — we haven't published a fixed standard yet, but we aim to follow up promptly." },
  { topic: "Citadel", question: "Who can access the FORGE Citadel?", answer: "Builders enrolled in an active FORGE program or partner-institution cohort get access during their sprint cycles." },
  { topic: "Events", question: "Can we organise an event with FORGE?", answer: "Yes — use the Community and Event Collaboration pathway above, or submit the form with your proposed format and timeline." },
  { topic: "Mentorship", question: "How do I become a mentor?", answer: "Select Mentor/Expert above and submit the form — we're always looking for practicing operators to mentor builders." },
  { topic: "Guarantees", question: "Does FORGE guarantee placements, funding, or investment?", answer: "No. FORGE supports capability-building, exposure, and structured collaboration — not guaranteed placement, funding, or investment outcomes." },
  { topic: "Enquiry", question: "What information should I include in my enquiry?", answer: "Your objective, audience, proposed format, timeline, and any relevant context — see the Readiness Checklist above." },
  { topic: "Community", question: "Is the FORGE Community open to everyone?", answer: "Yes — students, mentors, and partner organizations can all join the FORGE Community." },
];

export default function CollaboratePage() {
  const [stakeholder, setStakeholder] = useState<StakeholderType>("General Enquiry");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Collaborate
          </span>
          <h1 className="mt-4 font-varela text-4xl font-bold text-foreground md:text-6xl">
            Build the Future With FORGE
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-jakarta text-lg text-foreground/70">
            FORGE works with institutions, companies, mentors, experts, and strategic partners who
            want to contribute to a stronger culture of learning, innovation, and execution.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => document.getElementById("collaborate-form")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
            >
              Start a Conversation
            </button>
            <Link
              href="/programs"
              className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
            >
              Explore FORGE Programs
            </Link>
            <Link
              href="/ecosystem"
              className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
            >
              View the Ecosystem
            </Link>
          </div>
        </section>

        <CollaborationPathways
          onSelect={(s) => {
            setStakeholder(s);
            document.getElementById("collaborate-form")?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <section className="mx-auto w-full max-w-[1400px] px-6 pb-10 md:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <AudienceCard
                key={audience.title}
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
                cta={audience.cta}
                onSelect={() => {
                  setStakeholder(audience.stakeholder);
                  document.getElementById("collaborate-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </section>

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

        {/* Note: "How It Runs" is inside PartnerAudienceSection and is temporarily hidden there */}
        <PartnerAudienceSection />

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

        <CardGrid
          eyebrow="What Can We Build Together"
          heading="Possible Collaboration Formats"
          cards={collaborationFormatCards}
          columns={3}
        />

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

        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
              Frequently Asked <span className="text-[#1683EA]">Questions</span>
            </h2>
          </div>
          <FaqAccordion items={collaborateFaqs} />
        </section>

        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:px-12 md:py-24">
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Have an Idea for Collaboration?
          </h2>
          <p className="max-w-xl font-jakarta text-base text-foreground/70">
            Share your objective, context, and vision. Together, we can explore whether there is
            a meaningful way to connect learning, people, institutions, and innovation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => document.getElementById("collaborate-form")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
            >
              Start a Conversation
            </button>
            <Link
              href="/programs"
              className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
            >
              Explore FORGE Programs
            </Link>
            <Link
              href="/mentors"
              className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
            >
              Meet the Mentors
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
