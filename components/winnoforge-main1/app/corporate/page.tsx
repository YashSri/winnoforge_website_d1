import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PartnerAudienceSection from "@/components/partner/PartnerAudienceSection";
import VoicesCarousel from "@/components/shared/VoicesCarousel";
import PartnerButton from "@/components/modal/PartnerButton";

const partnerTestimonials = [
  {
    quote: "Partnering with FORGE gave our students hands-on execution experience we couldn't build in-house.",
    name: "Dr. Sameer Joshi",
    designation: "Director of Innovation",
    org: "Partner Institution",
  },
  {
    quote: "We've sourced three of our strongest hires directly out of FORGE cohorts.",
    name: "Neha Gupta",
    designation: "Talent Lead",
    org: "Industry Partner",
  },
  {
    quote: "The MoU-to-pilot timeline was faster than any vendor process we've run before.",
    name: "Prof. Alok Bhatt",
    designation: "Dean, Engineering",
    org: "Partner Institution",
  },
];

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Partner With Us
          </span>
          <h1 className="mt-4 font-varela text-4xl font-bold text-foreground md:text-6xl">
            Bring FORGE to Your Institution or Organization
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-jakarta text-lg text-foreground/70">
            Whether you're a campus looking to build an execution culture or a company looking
            for builders who ship, FORGE has a partnership path built for you.
          </p>
        </section>

        <PartnerAudienceSection />

        <VoicesCarousel title="What Our Partners Say" voices={partnerTestimonials} />

        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:px-12 md:py-24">
          <h2 className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
            Ready to start a conversation?
          </h2>
          <PartnerButton className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]">
            Start a Partnership
          </PartnerButton>
        </section>
      </main>

      <Footer />
    </div>
  );
}
