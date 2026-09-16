import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgramDetailTemplate from "@/components/programs/ProgramDetailTemplate";
import { getProgramBySlug, programs } from "@/lib/programs-data";
import { pageMetadata } from "@/lib/page-metadata";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program)
    return { title: "Program Not Found — FORGE", robots: { index: false } };
  return pageMetadata({
    title: `${program.name} — FORGE`,
    description: program.shortDescription,
    path: `/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden pt-28 md:pt-32">
        <ProgramDetailTemplate program={program} />
      </main>
      <Footer />
    </div>
  );
}
