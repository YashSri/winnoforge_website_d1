import type { Metadata } from "next";
import CommunityCoreCardsSection from "@/components1/community/CommunityCoreCardsSection";
import CommunityExperienceSection from "@/components1/community/CommunityExperienceSection";
import CommunityFinalCtaSection from "@/components1/community/CommunityFinalCtaSection";
import CommunityFutureExpansionSection from "@/components1/community/CommunityFutureExpansionSection";
import CommunityHeroSection from "@/components1/community/CommunityHeroSection";
import CommunityPartnersSection from "@/components1/community/CommunityPartnersSection";
import CommunityValueSection from "@/components1/community/CommunityValueSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FORGE Community",
  description:
    "A network of builders, institutions, and innovators shaping the future together.",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <CommunityHeroSection />
        <CommunityValueSection />
        <CommunityCoreCardsSection />
        <CommunityPartnersSection />
        <CommunityExperienceSection />
        <CommunityFutureExpansionSection />
        <CommunityFinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
