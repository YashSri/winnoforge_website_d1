import { Presentation } from "lucide-react";

export default function AnnualSummit() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:grid md:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Presentation className="h-6 w-6" />
          </div>
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Where the Ecosystem Converges
          </span>
          <h2 className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
            The Annual FORGE Innovation Summit
          </h2>
          <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
            The Annual FORGE Innovation Summit brings together the work emerging from the
            ecosystem. Teams present projects and prototypes. Mentors, industry leaders,
            investors, and domain experts examine the work. Participants receive exposure to
            informed feedback, practical questions, and possible future opportunities.
          </p>
          <p className="font-clash text-lg font-medium leading-snug text-foreground">
            &ldquo;What is built should be visible, reviewable, and connected to the world beyond
            the classroom.&rdquo;
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-black/5 md:min-h-[320px]">
          <div className="flex flex-col justify-center gap-1 bg-[linear-gradient(135deg,#0E2E48_0%,#1E4D72_100%)] p-6 text-white">
            <span className="font-varela text-2xl font-semibold">Demo Days</span>
            <span className="font-jakarta text-xs text-white/70">Teams present shipped work</span>
          </div>
          <div className="flex flex-col justify-center gap-1 bg-primary/10 p-6">
            <span className="font-varela text-2xl font-semibold text-foreground">Evaluation Panels</span>
            <span className="font-jakarta text-xs text-foreground/60">Mentors and experts review</span>
          </div>
          <div className="flex flex-col justify-center gap-1 bg-primary/10 p-6">
            <span className="font-varela text-2xl font-semibold text-foreground">Investor Conversations</span>
            <span className="font-jakarta text-xs text-foreground/60">Early exposure to funders</span>
          </div>
          <div className="flex flex-col justify-center gap-1 bg-[linear-gradient(135deg,#1E4D72_0%,#628ECB_100%)] p-6 text-white">
            <span className="font-varela text-2xl font-semibold">Industry Engagement</span>
            <span className="font-jakarta text-xs text-white/70">Companies meet builders</span>
          </div>
        </div>
      </div>
    </section>
  );
}
