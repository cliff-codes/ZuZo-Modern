import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceFeatures } from "@/components/services/service-features";
import { CTASection } from "@/components/home/cta-section";
import { InlineBookingCTA } from "@/components/cta/inline-booking-cta";
import { MiniTrustBar } from "@/components/trust/mini-trust-bar";
import { ServiceSchema } from "@/components/seo/service-schema";
import { Network } from "lucide-react";

const features = [
  {
    title: "Unified Customer Experience",
    description: "Create seamless interactions across all touchpoints with real-time customer data sharing and consistent brand messaging throughout the customer journey.",
    benefits: [
      "Single unified platform for all channels",
      "Real-time customer data synchronization",
      "Consistent messaging across touchpoints",
      "Personalized customer journeys",
      "Complete interaction history",
    ],
  },
  {
    title: "Multi-Channel Support",
    description: "Connect with customers on their preferred platforms including phone, email, live chat, WhatsApp, SMS, and social media channels.",
    benefits: [
      "Voice, email, and chat integration",
      "WhatsApp Business messaging",
      "Social media management",
      "SMS and mobile app support",
      "Website widget integration",
    ],
  },
  {
    title: "AI-Powered Automation",
    description: "Leverage intelligent automation to route inquiries, automate responses, and provide smart routing based on customer context and agent expertise.",
    benefits: [
      "Smart inquiry routing",
      "AI-powered chatbots",
      "Automated response suggestions",
      "Predictive customer analytics",
      "Intelligent workload distribution",
    ],
  },
  {
    title: "Comprehensive Analytics",
    description: "Make data-driven decisions with unified customer journey analytics, cross-channel performance metrics, and customizable reporting dashboards.",
    benefits: [
      "Unified customer journey tracking",
      "Cross-channel performance reports",
      "Real-time analytics dashboards",
      "Customer satisfaction metrics",
      "Agent performance monitoring",
    ],
  },
  {
    title: "Built-in CRM Integration",
    description: "Integrated customer relationship management system ensures every agent has complete customer context and interaction history for personalized service.",
    benefits: [
      "Complete customer profiles",
      "Interaction history tracking",
      "Automated data capture",
      "Custom field configuration",
      "Third-party CRM integration",
    ],
  },
  {
    title: "Enterprise-Grade Security",
    description: "Protect customer data with ISO 27001 aligned processes, Data Protection Certification, and GDPR compliant infrastructure.",
    benefits: [
      "ISO 27001 aligned processes",
      "Data Protection Certified",
      "GDPR compliant operations",
      "End-to-end encryption",
      "Role-based access control",
    ],
  },
];

export default function OmnichannelPlatformService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceSchema 
          name="Omnichannel Platform"
          description="Enterprise omnichannel platform unifying all customer communications in one dashboard with AI-powered automation and built-in CRM"
          url="/services/omnichannel-platform"
        />
        <ServiceHero
          title="Omnichannel Platform"
          subtitle="QContact Enterprise Solutions"
          description="Transform your customer engagement with ZuZo's integrated QContact omnichannel platform. Unify all customer communications—voice, email, chat, WhatsApp, social media—in one intelligent dashboard with built-in CRM and AI-powered automation."
          icon={<Network className="h-10 w-10 text-primary" />}
        />
        <MiniTrustBar />
        <ServiceFeatures features={features} />
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <InlineBookingCTA 
            title="Ready to Unify Your Customer Communications?"
            description="Discover how our QContact omnichannel platform can streamline operations, improve customer satisfaction, and provide complete visibility across all channels. Schedule your free demo today."
          />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
