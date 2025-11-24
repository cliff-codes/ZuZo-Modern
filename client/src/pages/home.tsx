import { VideoHeroSection } from "@/components/home/video-hero-section";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyZuzoSection } from "@/components/home/why-zuzo-section";
import { FeaturedCaseStudy } from "@/components/home/featured-case-study";
import { ClientLogos } from "@/components/home/client-logos";
import { HowItWorks } from "@/components/home/how-it-works";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PricingSection } from "@/components/home/pricing-section";
import { CTASection } from "@/components/home/cta-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SEOHead, getOrganizationSchema, getSoftwareApplicationSchema } from "@/components/seo/seo-head";

export default function Home() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getSoftwareApplicationSchema()
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Home"
        description="Transform your business with ZuZo's AI-powered virtual assistants and omnichannel contact center solutions. 60% cost reduction, 48-hour launch, and 24/7 global coverage. Trusted by 500+ businesses worldwide."
        canonical="/"
        keywords="BPO services, virtual assistants, contact center, AI automation, back office support, Ghana BPO, omnichannel support"
        schema={combinedSchema}
      />
      <Header />
      <main>
        <VideoHeroSection />
        <TrustBar />
        <ClientLogos />
        <WhyZuzoSection />
        <ServicesOverview />
        <FeaturedCaseStudy />
        <HowItWorks />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
