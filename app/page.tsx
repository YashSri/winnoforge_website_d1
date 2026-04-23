import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <Hero />
        <Philosophy />
        <HowItWorks />
        <Footer />
      </main>
    </SplashScreen>
  );
}
