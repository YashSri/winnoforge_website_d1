import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import HowItWorks from "@/components/HowItWorks";
import Citadel from "@/components/Citadel";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
    return (
        <SplashScreen>
            <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <Navbar />
                <Hero />
                <Philosophy />
                <HowItWorks />
                <Citadel />
                <Impact />
                <Footer />
            </main>
        </SplashScreen>
    );
}
