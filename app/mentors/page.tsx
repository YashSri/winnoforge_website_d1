"use client";

import Link from "next/link";
import {
  BookOpen,
  Briefcase,
  Cpu,
  Lightbulb,
  Megaphone,
  Rocket,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CardGrid from "@/components/shared/CardGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import FaqAccordion from "@/components/shared/FaqAccordion";
import MentorDirectory from "@/components/mentors/MentorDirectory";
import WhyMentorshipMatters from "@/components/mentors/WhyMentorshipMatters";
import LearningThroughExperience from "@/components/mentors/LearningThroughExperience";
import FeaturedVoicesEditorial from "@/components/mentors/FeaturedVoicesEditorial";
import InstitutionalIndustryParticipation from "@/components/mentors/InstitutionalIndustryParticipation";
import ResponsibleRepresentation from "@/components/mentors/ResponsibleRepresentation";
import { useModal } from "@/components/modal/ModalContext";

const expertiseCategoryCards = [
  { icon: Cpu, title: "Technology and Engineering", description: "Software development, AI, machine learning, data science, robotics, IoT, and emerging technologies." },
  { icon: Lightbulb, title: "Innovation and Research", description: "Research methods, problem discovery, design thinking, prototyping, and applied innovation." },
  { icon: Rocket, title: "Entrepreneurship and Venture Building", description: "Ideation, customer discovery, business models, founder journeys, and venture operations." },
  { icon: Briefcase, title: "Industry and Professional Practice", description: "Industry workflows, career readiness, applied problem-solving, and organisational practices." },
  { icon: BookOpen, title: "Education and Institutional Development", description: "Teaching, faculty development, project-based education, and institutional innovation." },
  { icon: Megaphone, title: "Creative and Communication Practice", description: "Design, branding, storytelling, communication, and creative problem-solving." },
];

const contributionFormatCards = [
  { title: "Workshops", description: "Focused sessions designed to introduce concepts, tools, methods, or practical approaches." },
  { title: "Project Reviews", description: "Feedback on projects, prototypes, presentations, documentation, or experiments." },
  { title: "Mentorship Conversations", description: "Guidance around learning, problem-solving, career direction, entrepreneurship, or execution." },
  { title: "Industry Sessions", description: "Practical perspectives on real-world workflows, expectations, and challenges." },
  { title: "Founder Guidance", description: "Support for individuals exploring ideas, products, ventures, or initiatives." },
  { title: "Speaker Sessions", description: "Talks and conversations that expose participants to new ideas, experiences, and possibilities." },
  { title: "Challenge Evaluation", description: "Review or feedback during approved innovation challenges or showcases." },
  { title: "Faculty Engagement", description: "Support for educators and institutions seeking practical, innovation-oriented learning approaches." },
];

const mentorJourneySteps = [
  { title: "Prepare", description: "The participant understands the objective, problem, or project context." },
  { title: "Ask", description: "The participant brings specific questions, challenges, or areas of uncertainty." },
  { title: "Discuss", description: "The mentor or expert shares observations, experience, methods, or alternative perspectives." },
  { title: "Review", description: "The work, idea, or approach is examined constructively." },
  { title: "Apply", description: "The participant converts feedback into action." },
  { title: "Reflect", description: "The participant documents what changed and what was learned." },
  { title: "Continue", description: "The participant returns with improved work or moves toward the next challenge." },
];

const mentorsFaqs = [
  { question: "Who can become a FORGE mentor?", answer: "Practitioners, educators, founders, researchers, and industry professionals with relevant experience to share — submit an interest form and the FORGE team will follow up." },
  { question: "What can mentors contribute?", answer: "Workshops, project reviews, mentorship conversations, industry sessions, founder guidance, speaker sessions, challenge evaluation, and faculty engagement." },
  { question: "Is one-to-one mentorship guaranteed?", answer: "No — mentor access follows confirmed program arrangements, not a guaranteed individual assignment." },
  { question: "Can experts conduct sessions for partner campuses?", answer: "Yes — use the Invite an Expert flow above to submit a request." },
  { question: "Can founders and industry professionals participate?", answer: "Yes — both are welcome to express interest in mentoring through the form above." },
  { question: "How are expert profiles added?", answer: "Profiles go through a verification and approval process before publication — see Responsible Representation above." },
  { question: "Can I invite a particular speaker?", answer: "You can name a preferred expert or topic in your invitation, but participation depends on confirmation and availability." },
  { question: "Are mentor sessions recorded?", answer: "This depends on the specific session's recording and consent policy, confirmed at the time of the session." },
  { question: "How can I contact the FORGE team?", answer: "Use the Collaborate page for a general enquiry, or the forms on this page for mentoring or expert-invitation requests." },
];

export default function MentorsPage() {
  const { open } = useModal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Mentors & Experts
          </span>
          <h1 className="mt-4 font-varela text-4xl font-bold text-foreground md:text-6xl">
            Meet the People Behind the Learning
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-jakarta text-lg text-foreground/70">
            Discover the mentors, experts, speakers, educators, founders, and industry
            contributors who support learning, innovation, project development, and ecosystem
            growth across FORGE.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#directory"
              className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
            >
              Explore Our Experts
            </Link>
            <button
              type="button"
              onClick={() => open("mentor")}
              className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
            >
              Become a Mentor
            </button>
            <button
              type="button"
              onClick={() => open("invite-expert")}
              className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
            >
              Invite an Expert
            </button>
          </div>
        </section>

        <WhyMentorshipMatters />

        <CardGrid
          eyebrow="Expertise Categories"
          heading="Different Experiences. One Shared Purpose."
          cards={expertiseCategoryCards}
          columns={3}
        />

        <MentorDirectory />

        <CardGrid
          eyebrow="How Experts Contribute"
          heading="Mentor and Expert Contributions"
          cards={contributionFormatCards}
          columns={4}
        />

        <FeaturedVoicesEditorial />
        <LearningThroughExperience />

        <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Mentor-to-Learner Journey
            </span>
            <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
              A Typical Interaction
            </h2>
          </div>
          <div className="mt-14">
            <ProcessTimeline steps={mentorJourneySteps} />
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center font-jakarta text-base italic text-primary/65">
            Good mentorship does not replace effort. It makes effort more informed.
          </p>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center md:px-12 md:py-24">
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Have Experience to Share?
          </span>
          <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Become a Mentor or Expert
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-jakarta text-base leading-relaxed text-foreground/70">
            FORGE welcomes conversations with practitioners, educators, founders, researchers,
            industry professionals, and experienced contributors who are interested in
            supporting learning and innovation.
          </p>
          <button
            type="button"
            onClick={() => open("mentor")}
            className="mt-8 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
          >
            Express Interest in Mentoring
          </button>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center md:px-12 md:py-24">
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            For Institutions & Program Teams
          </span>
          <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Bring a New Perspective to Your Community
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-jakarta text-base leading-relaxed text-foreground/70">
            Institutions, program teams, and approved partners can invite a mentor, speaker, or
            expert for a campus session, technical workshop, industry interaction, founder talk,
            or innovation challenge.
          </p>
          <button
            type="button"
            onClick={() => open("invite-expert")}
            className="mt-8 rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
          >
            Submit an Expert Invitation
          </button>
        </section>

        <InstitutionalIndustryParticipation />
        <ResponsibleRepresentation />

        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
              Frequently Asked <span className="text-[#1683EA]">Questions</span>
            </h2>
          </div>
          <FaqAccordion items={mentorsFaqs} />
        </section>

        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:px-12 md:py-24">
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Experience the Difference Perspective Can Make
          </h2>
          <p className="max-w-xl font-jakarta text-base text-foreground/70">
            Learn from experience, ask better questions, build stronger work, and connect with
            people who can help you see the next possibility.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
            >
              Explore Programs
            </Link>
            <Link
              href="/community"
              className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
            >
              Meet the FORGE Community
            </Link>
            <button
              type="button"
              onClick={() => open("mentor")}
              className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
            >
              Become a Mentor
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
