import { VideoHeroSection } from "@/components/home/video-hero-section";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesOverview } from "@/components/home/services-overview";
import { HowItWorks } from "@/components/home/how-it-works";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PricingSection } from "@/components/home/pricing-section";
import { CTASection } from "@/components/home/cta-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <VideoHeroSection />
        <TrustBar />
        <ServicesOverview />
        <HowItWorks />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
