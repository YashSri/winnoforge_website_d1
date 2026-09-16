import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Page Not Found — FORGE",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-6 pt-28 pb-16 text-center md:pt-32">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          404
        </span>
        <h1 className="mt-4 font-varela text-4xl font-bold text-foreground md:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-jakarta text-lg text-foreground/70">
          The page you're looking for may have moved or the link may be broken.
          Here are a few places to pick back up.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
          >
            Back to Home
          </Link>
          <Link
            href="/programs"
            className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
          >
            Explore Programs
          </Link>
          <Link
            href="/collaborate"
            className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
          >
            Contact FORGE
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
