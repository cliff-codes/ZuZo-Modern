import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceFeatures } from "@/components/services/service-features";
import { CTASection } from "@/components/home/cta-section";
import { InlineBookingCTA } from "@/components/cta/inline-booking-cta";
import { MiniTrustBar } from "@/components/trust/mini-trust-bar";
import { ServiceSchema } from "@/components/seo/service-schema";
import { Headset } from "lucide-react";

const features = [
  {
    title: "24/7 Customer Support",
    description: "Round-the-clock coverage across all time zones with multilingual capabilities and consistent quality standards.",
    benefits: [
      "Inbound and outbound calling",
      "Live chat and email support",
      "Social media management",
      "Technical troubleshooting",
      "Multilingual support teams",
    ],
  },
  {
    title: "Omnichannel Integration",
    description: "Unified customer experience across phone, email, chat, SMS, and social media platforms with seamless handoffs.",
    benefits: [
      "Single view of customer journey",
      "Cross-channel reporting",
      "Intelligent routing",
      "Context preservation",
      "Real-time synchronization",
    ],
  },
  {
    title: "Technical Support Excellence",
    description: "Level 1 and Level 2 technical assistance with trained specialists for your specific products and services.",
    benefits: [
      "Product-specific training",
      "Ticketing system integration",
      "Escalation management",
      "Knowledge base development",
      "Performance tracking",
    ],
  },
  {
    title: "Quality Assurance",
    description: "Rigorous monitoring and continuous improvement programs to maintain exceptional service quality.",
    benefits: [
      "Call recording and analysis",
      "Regular quality audits",
      "Customer satisfaction tracking",
      "Performance dashboards",
      "Ongoing agent training",
    ],
  },
];

export default function ContactCenterService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceSchema 
          name="Contact Center Services"
          description="24/7 omnichannel customer support with AI-powered automation"
          url="/services/contact-center"
        />
        <ServiceHero
          title="Contact Center Services"
          subtitle="24/7 Customer Support"
          description="Transform your customer experience with our omnichannel contact center solutions. From inbound support to technical assistance, we deliver exceptional service that builds loyalty and drives growth."
          icon={<Headset className="h-10 w-10 text-primary" />}
        />
        <MiniTrustBar />
        <ServiceFeatures features={features} />
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <InlineBookingCTA 
            title="Ready to Elevate Your Customer Support?"
            description="See how our contact center solutions can reduce costs by 60% while improving customer satisfaction. Book a free consultation today."
          />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
