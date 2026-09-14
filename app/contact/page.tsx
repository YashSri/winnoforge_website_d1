"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TabSwitch from "@/components/shared/TabSwitch";
import FaqAccordion, { type FaqItem } from "@/components/shared/FaqAccordion";
import { useModal, type ModalType } from "@/components/modal/ModalContext";

interface ContactPath {
  key: string;
  label: string;
  blurb: string;
  cta: string;
  modal: Exclude<NonNullable<ModalType>, "download">;
}

const contactPaths: ContactPath[] = [
  {
    key: "students",
    label: "Students",
    blurb: "Want to join FORGE as a builder? Tell us a bit about yourself and we'll reach out.",
    cta: "Join the Community",
    modal: "join",
  },
  {
    key: "institutions",
    label: "Institutions",
    blurb: "Looking to bring FORGE to your campus? Let's talk about what a partnership could look like.",
    cta: "Start a Conversation",
    modal: "partner",
  },
  {
    key: "industry",
    label: "Industry Partners",
    blurb: "Want access to builders and real problem-statement execution? Reach out to explore a partnership.",
    cta: "Start a Conversation",
    modal: "partner",
  },
  {
    key: "mentors",
    label: "Mentors & Experts",
    blurb: "Want to mentor FORGE builders? Tell us about your expertise.",
    cta: "Apply to Mentor",
    modal: "mentor",
  },
];

const generalFaqs: (FaqItem & { topic: string })[] = [
  { topic: "Winnovation", question: "What is Winnovation?", answer: "Winnovation is the organization behind FORGE, partnering with institutions, industry, and mentors to build a student-led innovation ecosystem." },
  { topic: "FORGE", question: "What is FORGE?", answer: "FORGE is the execution system that turns campus talent into builders through structured sprints, mentorship, and real problem statements." },
  { topic: "Programs", question: "What certification tracks does FORGE offer?", answer: "Data Science, Business Analyst, Data Analytics, Full Stack Development, and AI Productivity & Automation." },
  { topic: "Eligibility", question: "Do I need prior experience to join a program?", answer: "It depends on the track — check each program's Eligibility section, but most tracks are designed to take builders from wherever they're starting." },
  { topic: "Fees", question: "Are FORGE programs free?", answer: "Fee structures vary by program and partnership model — reach out through the Students or Institutions path above for specifics." },
  { topic: "Partnerships", question: "How does my institution or company partner with FORGE?", answer: "Use the Institutions or Industry Partners tab above to start a conversation — most partnerships move from discovery call to pilot within one cycle." },
  { topic: "Citadel", question: "Who can access the FORGE Citadel?", answer: "Builders enrolled in an active FORGE program or partner-institution cohort get access during their sprint cycles." },
  { topic: "Mentorship", question: "How do I become a mentor?", answer: "Use the Mentors & Experts tab above to apply — we're always looking for practicing operators to mentor builders." },
  { topic: "Community", question: "Is the FORGE Community open to everyone?", answer: "Yes — students, mentors, and partner organizations can all join the FORGE Community." },
];

export default function ContactPage() {
  const [active, setActive] = useState("students");
  const { open } = useModal();
  const activePath = contactPaths.find((p) => p.key === active) ?? contactPaths[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center md:px-12 md:py-24">
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </span>
          <h1 className="mt-4 font-varela text-4xl font-bold text-foreground md:text-6xl">
            Let's Talk
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-jakarta text-lg text-foreground/70">
            Pick the path that fits you best — we'll route you to the right conversation.
          </p>

          <div className="mt-10 flex justify-center">
            <TabSwitch
              tabs={contactPaths.map((p) => ({ key: p.key, label: p.label }))}
              active={active}
              onChange={setActive}
            />
          </div>

          <div className="mt-10 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:p-12">
            <p className="font-jakarta text-base leading-relaxed text-foreground/70">
              {activePath.blurb}
            </p>
            <button
              type="button"
              onClick={() => open(activePath.modal)}
              className="mt-6 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
            >
              {activePath.cta}
            </button>
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h2 className="text-center font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={generalFaqs} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
