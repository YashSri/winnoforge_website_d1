"use client";

import { useState } from "react";
import { Building2, GraduationCap, HeartHandshake, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AudienceCard from "@/components/collaborate/AudienceCard";
import CollaborateForm, { type StakeholderType } from "@/components/collaborate/CollaborateForm";
import PartnerAudienceSection from "@/components/partner/PartnerAudienceSection";
import VoicesCarousel from "@/components/shared/VoicesCarousel";
import FaqAccordion, { type FaqItem } from "@/components/shared/FaqAccordion";

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
  { topic: "Winnovation", question: "What is Winnovation?", answer: "Winnovation is the organization behind FORGE, partnering with institutions, industry, and mentors to build a student-led innovation ecosystem." },
  { topic: "FORGE", question: "What is FORGE?", answer: "FORGE is the execution system that turns campus talent into builders through structured sprints, mentorship, and real problem statements." },
  { topic: "Programs", question: "What certification tracks does FORGE offer?", answer: "Data Science, Business Analyst, Data Analytics, Full Stack Development, and AI Productivity & Automation." },
  { topic: "Eligibility", question: "Do I need prior experience to join a program?", answer: "It depends on the track — check each program's Eligibility section, but most tracks are designed to take builders from wherever they're starting." },
  { topic: "Fees", question: "Are FORGE programs free?", answer: "Fee structures vary by program and partnership model — use the form below to ask about specifics." },
  { topic: "Partnerships", question: "How does my institution or company partner with FORGE?", answer: "Pick your audience above or fill out the form below — most partnerships move from discovery call to pilot within one cycle." },
  { topic: "Citadel", question: "Who can access the FORGE Citadel?", answer: "Builders enrolled in an active FORGE program or partner-institution cohort get access during their sprint cycles." },
  { topic: "Mentorship", question: "How do I become a mentor?", answer: "Select Mentor/Expert above and submit the form — we're always looking for practicing operators to mentor builders." },
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
        </section>

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

        <PartnerAudienceSection />

        <VoicesCarousel title="What Our Partners Say" voices={collaborateTestimonials} />

        <section
          id="collaborate-form"
          className="mx-auto w-full max-w-2xl scroll-mt-28 px-6 py-16 md:px-12 md:py-24"
        >
          <h2 className="text-center font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Start a Conversation
          </h2>
          <div className="mt-10 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:p-12">
            <CollaborateForm stakeholder={stakeholder} onStakeholderChange={setStakeholder} />
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h2 className="text-center font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={collaborateFaqs} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
