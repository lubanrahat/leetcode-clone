import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import HowItWorks from "@/components/landing/HowItWorks";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}