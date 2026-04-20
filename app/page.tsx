import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InnovationGap from "@/components/InnovationGap";
import Philosophy from "@/components/Philosophy";
import HowItWorks from "@/components/HowItWorks";
import Citadel from "@/components/Citadel";
import Impact from "@/components/Impact";
import PartnershipCards from "@/components/PartnershipCards";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
    return (
        <SplashScreen>
            <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <Navbar />
                <Hero />
                <InnovationGap />
                <Philosophy />
                <HowItWorks />
                <Citadel />
                <Impact />
                <PartnershipCards />
                <Footer />
            </main>
        </SplashScreen>
    );
}
