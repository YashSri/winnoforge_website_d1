import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Calendar,
  FlaskConical,
  Globe,
  GraduationCap,
  Hammer,
  Handshake,
  Laptop,
  Layers,
  Lightbulb,
  MapPin,
  Network,
  RefreshCcw,
  Rocket,
  UsersRound,
} from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import type { ComponentType } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JoinButton from "@/components/modal/JoinButton";
import PartnerButton from "@/components/modal/PartnerButton";
import CommunityHero from "@/components/community/CommunityHero";
import WhoMakesUpCommunity from "@/components/community/WhoMakesUpCommunity";
import WhatsHappeningSection from "@/components/community/WhatsHappeningSection";
import CommunityEditorialGallery from "@/components/community/CommunityEditorialGallery";
import WhatCommunityMeans from "@/components/community/WhatCommunityMeans";
import StoriesSection from "@/components/community/StoriesSection";
import FeaturedVoicesEditorial from "@/components/community/FeaturedVoicesEditorial";
import ParticipationSelector from "@/components/community/ParticipationSelector";
import CampusInstitutionalCommunity from "@/components/community/CampusInstitutionalCommunity";
import CommunityGuidelines from "@/components/community/CommunityGuidelines";
import CommunityRecognition from "@/components/community/CommunityRecognition";
import CardGrid from "@/components/shared/CardGrid";
import CommunityEngagementSection from "@/components/community/CommunityEngagementSection";
import CommunityParticipationLoop from "@/components/community/CommunityParticipationLoop";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import FaqAccordion from "@/components/shared/FaqAccordion";

export const metadata = pageMetadata({
  title: "FORGE Community | Learn, Build, Connect, and Collaborate",
  description:
    "Explore the Winnovation FORGE community through learning sessions, events, projects, mentorship, innovation challenges, campus activities, and collaborative opportunities.",
  path: "/community",
});

const communityAudienceCards = [
  { icon: GraduationCap, title: "Learners", description: "Students and participants exploring skills, projects, technology, innovation, and new opportunities." },
  { icon: Hammer, title: "Builders", description: "People developing applications, prototypes, experiments, research projects, creative work, or ventures." },
  { icon: Lightbulb, title: "Mentors and Experts", description: "Professionals, educators, founders, researchers, and practitioners sharing knowledge and perspective." },
  { icon: Building2, title: "Faculty and Educators", description: "People supporting practical learning, institutional development, student engagement, and innovation-led education." },
  { icon: Layers, title: "Institutions", description: "Schools, colleges, and partner organisations participating in structured ecosystem activities." },
  { icon: Rocket, title: "Founders", description: "Individuals exploring problems, developing products, validating ideas, or building ventures." },
  { icon: Briefcase, title: "Industry Contributors", description: "Professionals and organisations contributing challenges, workshops, feedback, exposure, and collaboration." },
  { icon: Network, title: "Community and FORGE Teams", description: "People coordinating activities, supporting participants, facilitating collaboration, and improving the ecosystem experience." },
];

const engagementModeCards = [
  { icon: MapPin, title: "In-Person", description: "Campus activities, workshops, meetups, project sessions, and showcases." },
  { icon: Laptop, title: "Online", description: "Digital sessions, discussions, resource sharing, project coordination, and approved community activities." },
  { icon: Handshake, title: "Hybrid", description: "Experiences combining online preparation with in-person learning, interaction, or demonstration." },
];

const participationLoopSteps = [
  { title: "Discover", description: "Find a program, event, discussion, project, or community activity." },
  { title: "Participate", description: "Join a session, challenge, workshop, or conversation." },
  { title: "Connect", description: "Meet peers, mentors, educators, founders, or industry contributors." },
  { title: "Contribute", description: "Share knowledge, ask questions, review work, or support a project." },
  { title: "Build", description: "Work with others on an idea, prototype, project, or initiative." },
  { title: "Share", description: "Present progress, publish approved learnings, or participate in a showcase." },
  { title: "Continue", description: "Explore the next activity, pathway, or opportunity within the ecosystem." },
];

const communityFaqs = [
  { question: "Who can participate in the FORGE community?", answer: "Learners, builders, mentors, faculty, institutions, founders, and industry contributors — subject to specific program or activity requirements." },
  { question: "Is the community open to everyone?", answer: "Most activities are open, but some are restricted to approved participants or partners depending on the program." },
  { question: "How can I join an event?", answer: "Use the Register Interest button on the relevant event card above, or the Join FORGE CTA." },
  { question: "Can I share my project?", answer: "Yes — approved project showcases and stories are published through our review process." },
  { question: "Can I start a community activity?", answer: "Participants can propose workshops, discussions, challenges, or initiatives — reach out through the Join or Collaborate pathways." },
  { question: "Can I become a mentor or speaker?", answer: "Yes — visit the Mentors & Experts page to express interest." },
  { question: "Are community activities online or offline?", answer: "Both — see the Online and Offline Engagement section above for the actual formats available." },
  { question: "Are there campus-based communities?", answer: "Yes, through confirmed campus chapters and institutional activities — see Campus & Institutional Community above." },
  { question: "Can industry professionals participate?", answer: "Yes — use the Collaborate page to explore the approved industry collaboration pathway." },
  { question: "How are community stories selected?", answer: "Stories are reviewed and published based on relevance, accuracy, permissions, and approval." },
];

// ─── DATA ────────────────────────────────────────────────────────────────────

const benefitSections = [
  {
    id: "learning",
    heading: "Learning & Development",
    subtext: "",
    cards: [
      {
        Icon: Calendar,
        title: "Exclusive Access\nto Events",
        description:
          "Be part of workshops, hackathons, and sessions designed to push ideas into execution.",
      },
      {
        Icon: GraduationCap,
        title: "Continuous Learning Cycles",
        description:
          "Learn, apply, and iterate through structured cycles that ensure consistent growth and real skill development.",
      },
      {
        Icon: Lightbulb,
        title: "Idea to\nExecution",
        description:
          "Transform your ideas into real-world outcomes by building, testing, and refining solutions step by step.",
      },
    ],
  },
  {
    id: "practical",
    heading: "Practical Experience",
    subtext: "",
    cards: [
      {
        Icon: FlaskConical,
        title: "Research & Development",
        description:
          "Work on emerging ideas, explore new technologies, and contribute to real innovation projects.",
      },
      {
        Icon: Globe,
        title: "Real-world Collaboration",
        description:
          "Work alongside peers, mentors, and industry experts to solve real problems and build meaningful solutions together.",
      },
      {
        Icon: Hammer,
        title: "Builder-first Environment",
        description:
          "Focus on creating, experimenting, and shipping ideas quickly in a hands-on, maker-driven ecosystem.",
      },
    ],
  },
  {
    id: "career",
    heading: "Career & Industry",
    subtext: "",
    cards: [
      {
        Icon: Building2,
        title: "Institutional Collaborations",
        description:
          "FORGE partners with leading institutions through MoUs to build structured innovation ecosystems.",
      },
      {
        Icon: Briefcase,
        title: "Industry\nExposure",
        description:
          "Gain insights into real industry practices through interactions, mentorship, and hands-on experiences with professionals.",
      },
      {
        Icon: Layers,
        title: "Career\nPathways",
        description:
          "Explore structured opportunities, guidance, and support to navigate your career and unlock future possibilities.",
      },
    ],
  },
];

const valuePills = [
  { Icon: Hammer, label: "Builder-first Environment" },
  { Icon: RefreshCcw, label: "Continuous Learning Cycles" },
  { Icon: Globe, label: "Real-world Collaboration" },
  { Icon: UsersRound, label: "Access to Mentors & Peers" },
  { Icon: BadgeCheck, label: "Certifications" },
  { Icon: FlaskConical, label: "Research Programs" },
];



export default function CommunityNewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <CommunityHero />

        {/* =====================================================
            TEMPORARILY HIDDEN — WHAT THE COMMUNITY MEANS
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <WhatCommunityMeans /> */}

        <WhoMakesUpCommunity />
        <WhatsHappeningSection />
        <CommunityEditorialGallery />
        <StoriesSection />

        {/* =====================================================
            TEMPORARILY HIDDEN — FEATURED COMMUNITY VOICES
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <FeaturedVoicesEditorial /> */}

        <CommunityParticipationLoop />

        {/* =====================================================
            TEMPORARILY HIDDEN — FIND YOUR COMMUNITY PATHS
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <ParticipationSelector /> */}

        {/* =====================================================
            TEMPORARILY HIDDEN — CAMPUS AND INSTITUTIONAL COMMUNITY
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <CampusInstitutionalCommunity /> */}

        <CommunityEngagementSection />
        {benefitSections.map((section) => (
          <BenefitSection key={section.id} section={section} />
        ))}
        <ValueStripSection />
        <CommunityGuidelines />

        {/* =====================================================
            TEMPORARILY HIDDEN — COMMUNITY RECOGNITION
            To restore this section, uncomment the component below.
        ===================================================== */}
        {/* <CommunityRecognition /> */}

        {/* =====================================================
            TEMPORARILY HIDDEN — JOIN OR CONNECT
            To restore this section, uncomment the block below.
        ===================================================== */}
        {/*
        <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center md:px-12 md:py-24">
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Join or Connect
          </span>
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            There Is a Place for Your Curiosity Here
          </h2>
          <p className="max-w-xl font-jakarta text-base text-foreground/70">
            Whether you are learning your first technical skill, building a project, exploring
            entrepreneurship, supporting students, sharing professional experience, or looking
            for meaningful collaboration, FORGE offers pathways to connect.
          </p>
          <JoinButton className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]">
            Join the FORGE Ecosystem
          </JoinButton>
        </section>
        */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
              Frequently Asked <span className="text-[#1683EA]">Questions</span>
            </h2>
          </div>
          <FaqAccordion items={communityFaqs} />
        </section>
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:px-12 md:py-24">
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Bring Your Questions, Ideas, and Energy
          </h2>
          <p className="max-w-xl font-jakarta text-base text-foreground/70">
            The FORGE community grows when people learn openly, build responsibly, and
            contribute generously. Find an activity, meet a collaborator, share your work, or
            start a conversation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#activities"
              className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
            >
              Explore Community Activities
            </Link>
            <JoinButton className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]">
              Join FORGE
            </JoinButton>
            <PartnerButton className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]">
              Partner With FORGE
            </PartnerButton>
          </div>
        </section>
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}


// ─── 2–5. BENEFIT SECTIONS ────────────────────────────────────────────────────

type BenefitCard = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

type BenefitSectionProps = {
  section: {
    id: string;
    heading: string;
    subtext: string;
    cards: BenefitCard[];
  };
};

function BenefitSection({ section }: BenefitSectionProps) {
  return (
    <section id={section.id} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-varela text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {section.heading}
          </h2>
          {section.subtext && (
            <p className="mx-auto mt-4 max-w-2xl font-jakarta text-lg text-foreground/70">
              {section.subtext}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {section.cards.map((card, i) => {
            const Icon = card.Icon;
            return (
              <article
                key={`${section.id}-card-${i}`}
                className="group rounded-[2rem] border border-black/10 bg-white/88 p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(77,150,255,0.14)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.22)]">
                  <Icon className="h-6 w-6" />
                </div>

                {card.title && (
                  <h3 className="mt-6 whitespace-pre-line font-varela text-3xl font-semibold leading-snug text-foreground md:text-4xl">
                    {card.title}
                  </h3>
                )}

                {card.description && (
                  <p className="mt-4 font-jakarta text-lg leading-relaxed text-foreground/72">
                    {card.description}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 6. VALUE STRIP ───────────────────────────────────────────────────────────

function ValueStripSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-varela text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Inside the FORGE Community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-jakarta text-lg text-foreground/70">
            Built for builders. Backed by institutions. Connected to industry.
          </p>
        </div>

        <div className="rounded-4xl border border-black/10 bg-gradient-to-br from-[#F7FBFF] via-white to-[#EEF5FF] px-6 py-8 shadow-[0_16px_40px_rgba(24,42,72,0.08)] backdrop-blur-sm md:px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {valuePills.map((pill) => {
              const Icon = pill.Icon;
              return (
                <div
                  key={pill.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-black/10 bg-white/88 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(77,150,255,0.12)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#78B2FF] text-white shadow-[0_10px_24px_rgba(77,150,255,0.22)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-jakarta text-sm font-semibold leading-snug text-foreground">
                    {pill.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 8. FINAL CTA ─────────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section id="community-join" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-primary/12 bg-gradient-to-br from-[#F7FBFF] via-white to-[#EDF5FF] px-6 py-16 text-center text-foreground shadow-[0_30px_80px_rgba(77,150,255,0.12)] md:px-12 md:py-20">
        <h2 className="font-varela text-4xl font-bold leading-tight md:text-7xl">
          Become Part of FORGE
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-jakarta text-lg text-foreground/72 md:text-xl">
          Join a community where ideas turn into execution.
        </p>

        <PartnerButton className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)]">
          Partner With FORGE
          <ArrowRight className="h-4 w-4" />
        </PartnerButton>
      </div>
    </section>
  );
}
