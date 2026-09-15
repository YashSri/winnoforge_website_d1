import {
  Award,
  Briefcase,
  Building2,
  Compass,
  Cpu,
  Eye,
  Flag,
  FlaskConical,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  Network,
  RefreshCw,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
  UserSearch,
  Users,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";
import EcosystemEngineSection from "@/components1/ecosystem/EcosystemEngineSection";
import EcosystemHeroSection from "@/components1/ecosystem/EcosystemHeroSection";
import EcosystemHowWorksSection from "@/components1/ecosystem/EcosystemHowWorksSection";
import EcosystemPillarsSection from "@/components1/ecosystem/EcosystemPillarsSection";
import LeadershipMilestonesSection from "@/components1/ecosystem/LeadershipMilestonesSection";
import WhyForgeExists from "@/components1/ecosystem/WhyForgeExists";
import EcosystemBlueprint from "@/components1/ecosystem/EcosystemBlueprint";
import EcosystemMap from "@/components1/ecosystem/EcosystemMap";
import GovernmentInnovation from "@/components1/ecosystem/GovernmentInnovation";
import AnnualSummit from "@/components1/ecosystem/AnnualSummit";
import FutureVision from "@/components1/ecosystem/FutureVision";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FaqAccordion from "@/components/shared/FaqAccordion";
import VoicesCarousel from "@/components/shared/VoicesCarousel";
import CardGrid from "@/components/shared/CardGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import FinalCta from "@/components/home/FinalCta";

const ecosystemFaqs = [
  {
    question: "What is Winnovation?",
    answer:
      "Winnovation is the organization behind FORGE — it partners with institutions, industry, and mentors to build a student-led innovation ecosystem on campuses.",
  },
  {
    question: "What is FORGE?",
    answer:
      "FORGE is the execution system that turns campus talent into builders — moving students from ideas to shipped prototypes through structured sprints and mentorship.",
  },
  {
    question: "How do I join as a student?",
    answer:
      "If your institution already partners with FORGE, you can join through your campus chapter. Otherwise, use the Collaborate page to bring FORGE to your campus.",
  },
  {
    question: "Do I need prior experience to get involved?",
    answer:
      "No. FORGE is built to take builders from wherever they're starting — the structure and mentorship are what close the experience gap.",
  },
  {
    question: "How can my company get involved?",
    answer:
      "Industry partners bring problem statements, mentor builders, and evaluate outcomes. Reach out through the Collaborate page to start a conversation.",
  },
];

const mentorVoices = [
  {
    quote: "Mentoring FORGE builders is the closest thing to running a real product team with students.",
    name: "Priya Suresh",
    designation: "Senior Product Manager",
    org: "Mentor Network",
  },
  {
    quote: "The structure FORGE gives students is what most bootcamps miss — real accountability.",
    name: "Karthik Iyer",
    designation: "Engineering Lead",
    org: "Mentor Network",
  },
  {
    quote: "I've watched builders go from hesitant to shipping in a single cycle.",
    name: "Ananya Bose",
    designation: "Founder",
    org: "Mentor Network",
  },
];

const whoWeAreCards = [
  { icon: Building2, title: "Industry Alignment", description: "Learning is connected to tools, workflows, problems, and expectations that exist beyond the classroom." },
  { icon: Wrench, title: "Applied Learning", description: "Students are encouraged to practise, build, document, present, receive feedback, and improve." },
  { icon: TrendingUp, title: "Capability Development", description: "The goal is not only course completion. The goal is the development of demonstrated ability." },
];

const philosophyCards = [
  { icon: Compass, title: "Knowledge", description: "Understand concepts, systems, tools, and principles." },
  { icon: Flag, title: "Ownership", description: "Take responsibility for a problem, task, project, or outcome." },
  { icon: RefreshCw, title: "Iteration", description: "Use feedback and evidence to improve the work." },
  { icon: Users, title: "Collaboration", description: "Build with peers, mentors, institutions, and industry." },
  { icon: Eye, title: "Demonstration", description: "Show what has been built through documented and reviewable outputs." },
  { icon: TrendingUp, title: "Progression", description: "Move from one level of capability to the next through evidence and experience." },
];

const differentiationCards = [
  { icon: GraduationCap, title: "Not Just a Workshop", description: "Workshops are part of a broader learning and execution journey." },
  { icon: Zap, title: "Not Just a Hackathon", description: "Hackathons are used as pressure tests and opportunities to demonstrate capability." },
  { icon: Award, title: "Not Just a Certificate", description: "Recognition should be connected to meaningful work and verified outputs where the applicable program supports it." },
  { icon: Building2, title: "Not Just a Physical Space", description: "The Citadel is intended as an execution environment with culture, structure, mentorship, and progression." },
  { icon: Briefcase, title: "Not Just Placement Activity", description: "Industry engagement is designed to happen throughout the year, not only at the end of the academic cycle." },
  { icon: UsersRound, title: "Not Just a Student Club", description: "Campus Chapters are intended to connect students, institutions, mentors, and the broader FORGE network." },
];

const stakeholderCards = [
  { icon: Users, title: "Students and Builders", description: "Participate in learning, projects, workshops, hackathons, community activity, and execution pathways." },
  { icon: Landmark, title: "Institutions", description: "Colleges and universities provide the campus context in which learning, innovation, and industry collaboration can become embedded." },
  { icon: GraduationCap, title: "Faculty", description: "Support academic alignment, student development, institutional coordination, and collaboration around projects." },
  { icon: Lightbulb, title: "Mentors and Experts", description: "Contribute practical experience through seminars, workshops, reviews, mentorship, and evaluation." },
  { icon: Building2, title: "Industry Partners", description: "Contribute through problem statements, talent engagement, innovation experimentation, mentorship, and hiring." },
  { icon: Rocket, title: "Founders and Entrepreneurs", description: "Participate in problem discovery, validation, prototyping, incubation, and venture development." },
  { icon: Shield, title: "Government and Public Institutions", description: "May contribute real problem statements, policy conversations, and public-purpose innovation opportunities where formal relationships exist." },
  { icon: Network, title: "FORGE Core and Campus Teams", description: "Support standards, coordination, execution systems, and the operation of the ecosystem." },
];

const strategicDimensionCards = [
  { icon: Building2, title: "Innovation Infrastructure", description: "The physical and cultural environments in which students and teams work, build, review, and collaborate." },
  { icon: Award, title: "Certification and Skill Development", description: "Structured learning pathways designed around relevant tools, technologies, and practical capability." },
  { icon: TrendingUp, title: "Progression and Demonstrated Capability", description: "A learner's movement through increasingly demanding activities, projects, reviews, and execution environments." },
  { icon: Briefcase, title: "Industry and Hiring Network", description: "A year-round relationship with companies and practitioners through problem statements, mentorship, projects, and hiring pathways." },
];

const campusTransformationCards = [
  { icon: Sparkles, title: "Culture", description: "A stronger problem-solving and innovation mindset." },
  { icon: Cpu, title: "Technology", description: "Exposure to emerging technologies and practical tools." },
  { icon: Handshake, title: "Industry", description: "Real-world projects, mentors, and professional context." },
  { icon: Rocket, title: "Startup Ecosystem", description: "Support for ideation, validation, prototyping, and venture development." },
];

const industryParticipationCards = [
  { icon: UserSearch, title: "Talent Engagement", description: "Observe capability through sustained interaction and practical work." },
  { icon: Lightbulb, title: "Problem Statements", description: "Bring relevant challenges into structured learning and innovation environments." },
  { icon: FlaskConical, title: "Innovation Collaboration", description: "Explore ideas, prototypes, and early-stage solutions with emerging talent." },
  { icon: Users, title: "Mentorship", description: "Help students understand professional expectations and real-world workflows." },
  { icon: Briefcase, title: "Hiring Pathways", description: "Connect with learners through verified, relevant, and approved engagement channels." },
];

const innovationScaleCards = [
  { icon: Compass, title: "Shared Knowledge", description: "Practices, learnings, and insights move across campuses." },
  { icon: Network, title: "Cross-Campus Collaboration", description: "Teams from different institutions can work on shared problems." },
  { icon: FlaskConical, title: "Distributed Experimentation", description: "Multiple teams can explore different pathways to a problem." },
  { icon: Shield, title: "Common Standards", description: "A shared framework helps preserve quality and consistency." },
  { icon: Sparkles, title: "Convergence", description: "Summits, demo days, and showcases bring the network together." },
];

const howEcosystemWorksSteps = [
  { title: "Discover", description: "Encounter FORGE through a course, seminar, workshop, or campus chapter." },
  { title: "Learn", description: "Gain foundational knowledge in a domain or problem area." },
  { title: "Practise", description: "Work through tools, exercises, and guided tasks." },
  { title: "Build", description: "Collaborate with peers on real projects." },
  { title: "Receive Feedback", description: "Interact with mentors to improve the work." },
  { title: "Iterate", description: "Use feedback and evidence to refine the output." },
  { title: "Demonstrate", description: "Show progress through documented, reviewable outputs." },
  { title: "Progress", description: "Move toward advanced learning, internships, Citadel, or hiring opportunities." },
];

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="relative overflow-x-hidden pb-16 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[linear-gradient(180deg,rgba(247,251,255,1),rgba(255,255,255,0)),radial-gradient(circle_at_top_left,rgba(77,150,255,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(120,178,255,0.14),transparent_32%)]" />

        {/* Hero — existing, unchanged */}
        <EcosystemHeroSection />

        {/* Who We Are */}
        <CardGrid
          eyebrow="Who We Are"
          heading="Winnovation FORGE: Building What Comes Next"
          description="Winnovation FORGE is built around a simple belief: education becomes more valuable when knowledge is applied, tested, reviewed, and transformed into something real."
          cards={whoWeAreCards}
          columns={3}
        />
        <LeadershipMilestonesSection />

        {/* Why FORGE Exists */}
        <WhyForgeExists />

        {/* FORGE Philosophy */}
        <CardGrid
          eyebrow="Our Philosophy"
          heading="Capability Is Built, Not Declared"
          description="We believe education should produce more than knowledge — it should develop the ability to act on knowledge."
          cards={philosophyCards}
          columns={3}
        />
        <div className="mx-auto w-full max-w-3xl px-6 pb-16 text-center md:px-12">
          <p className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
            &ldquo;Forging Minds. Building Innovation. Creating the Future.&rdquo;
          </p>
        </div>

        {/* What Makes FORGE Different */}
        <CardGrid
          eyebrow="What Makes FORGE Different"
          heading="Not a Collection of Activities. A Connected System."
          description="A seminar, a workshop, a hackathon, a project, mentorship, the Citadel, and industry engagement each add value on their own — the real value lies in the connection between them."
          cards={differentiationCards}
          columns={3}
        />

        {/* Ecosystem Blueprint */}
        <EcosystemBlueprint />

        {/* Ecosystem Map */}
        <EcosystemMap />

        {/* Existing pillars / credential-logo blocks — unchanged */}
        <EcosystemPillarsSection />

        {/* The People of the Ecosystem */}
        <CardGrid
          eyebrow="Who Participates"
          heading="An Ecosystem Is Built by People"
          description="FORGE connects different groups that contribute to learning, execution, innovation, and opportunity. Each group has a different role, but the system works because the roles interact."
          cards={stakeholderCards}
          columns={4}
        />

        {/* How the Ecosystem Works */}
        <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              How the Ecosystem Works
            </span>
            <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
              From Learning to Execution to Opportunity
            </h2>
          </div>
          <div className="mt-14">
            <ProcessTimeline steps={howEcosystemWorksSteps} />
          </div>
        </section>

        {/* Existing how-it-works (partner logos/stats) and engine section — unchanged */}
        <EcosystemHowWorksSection />
        <EcosystemEngineSection />

        {/* Four Strategic Dimensions */}
        <CardGrid
          eyebrow="The Strategic Architecture"
          heading="Four Connected Dimensions"
          description="Industry engagement and progression pathways are designed to support stronger career readiness and opportunity discovery."
          cards={strategicDimensionCards}
          columns={4}
        />

        {/* Campus Transformation */}
        <CardGrid
          eyebrow="Campus-Level Execution"
          heading="The Campus Becomes an Active Innovation Environment"
          description="A campus becomes more powerful when learning, experimentation, mentorship, and industry interaction are part of everyday institutional life, not isolated events."
          cards={campusTransformationCards}
          columns={4}
        />

        {/* Industry and Corporate Participation */}
        <CardGrid
          eyebrow="Industry & Institutions"
          heading="Industry Is Not the Final Stop. It Is Part of the Journey."
          description="FORGE creates opportunities for companies to engage with emerging talent throughout the year — not only during recruitment or placement periods."
          cards={industryParticipationCards}
          columns={3}
        />

        {/* Government and Public-Purpose Innovation */}
        <GovernmentInnovation />

        {/* Innovation at Scale */}
        <CardGrid
          eyebrow="How Innovation Scales"
          heading="Build Locally. Learn Collectively. Scale Responsibly."
          description="The FORGE ecosystem is designed to support local execution while enabling shared learning across institutions."
          cards={innovationScaleCards}
          columns={3}
        />

        {/* Annual Summit */}
        <AnnualSummit />

        {/* Mentor Voices */}
        <VoicesCarousel title="Mentor Voices" voices={mentorVoices} />

        {/* The Future We Are Building */}
        <FutureVision />

        {/* FAQ */}
        <section className="mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={ecosystemFaqs} />
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
