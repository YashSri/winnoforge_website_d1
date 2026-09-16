import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-5xl">
        Ready to Be Part of What Comes Next?
      </h2>
      <p className="max-w-2xl font-jakarta text-base text-foreground/70 md:text-lg">
        Whether you are a student, institution, industry professional, mentor, or strategic
        partner, there is a place for you in the FORGE ecosystem.
      </p>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/programs"
          className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
        >
          Explore Programs
        </Link>
        <Link
          href="/citadel1"
          className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
        >
          Explore the Citadel
        </Link>
        <Link
          href="/collaborate"
          className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
