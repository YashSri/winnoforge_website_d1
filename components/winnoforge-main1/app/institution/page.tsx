"use client";

import Navbar from "@/components1/institution/Navbar";
import { ForgeCitadel } from "@/components1/institution/instituteForgeCitadel";
import { ForgeEngine } from "@/components1/institution/instituteForgeEngine";
import { Footer } from "@/components1/institution/instituteFooter";
import { Hero } from "@/components1/institution/instituteHero";
import { InstitutionalGap } from "@/components1/institution/InstitutionalGap";
import { InstitutionalModel } from "@/components1/institution/InstitutionalModel";
import { Outcomes } from "@/components1/institution/instituteOutcomes";
import { PartnerCTA } from "@/components1/institution/institutionPartnerCTA";

export default function InstitutionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <InstitutionalGap />
        <InstitutionalModel />
        <ForgeEngine />
        <ForgeCitadel />
        <Outcomes />
        <PartnerCTA />
      </main>

      <Footer />
    </div>
  );
}
