import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceFeatures } from "@/components/services/service-features";
import { CTASection } from "@/components/home/cta-section";
import { InlineBookingCTA } from "@/components/cta/inline-booking-cta";
import { MiniTrustBar } from "@/components/trust/mini-trust-bar";
import { ServiceSchema } from "@/components/seo/service-schema";
import { Bot } from "lucide-react";

const features = [
  {
    title: "Executive Virtual Assistants",
    description: "High-level administrative support for executives and senior leadership teams with discretion and professionalism.",
    benefits: [
      "Calendar and schedule management",
      "Email management and correspondence",
      "Meeting coordination and preparation",
      "Travel arrangements and itineraries",
      "Personal task management",
    ],
  },
  {
    title: "Administrative Support",
    description: "Comprehensive administrative assistance to streamline daily operations and free up your team's time.",
    benefits: [
      "Data entry and database management",
      "Document preparation and formatting",
      "Appointment scheduling",
      "Customer communication",
      "File organization and management",
    ],
  },
  {
    title: "Specialized Virtual Assistants",
    description: "Expert VAs with domain-specific knowledge for specialized business functions and industry requirements.",
    benefits: [
      "Social media management",
      "Content creation and curation",
      "Lead generation and research",
      "Market research and analysis",
      "Project coordination",
    ],
  },
  {
    title: "AI-Enhanced Productivity",
    description: "Human expertise enhanced with AI tools for maximum efficiency and accuracy in task completion.",
    benefits: [
      "Smart task prioritization",
      "Automated reporting",
      "AI-assisted research",
      "Intelligent scheduling",
      "Real-time collaboration",
    ],
  },
];

export default function VirtualAssistantsService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceSchema 
          name="AI-Powered Virtual Assistants"
          description="Smart administrative support combining human expertise with AI efficiency"
          url="/services/virtual-assistants"
        />
        <ServiceHero
          title="AI-Powered Virtual Assistants"
          subtitle="Smart Administrative Support"
          description="Scale your business with dedicated virtual assistants who combine human expertise with AI-powered efficiency. From executive support to specialized tasks, we provide the talent you need without the overhead."
          icon={<Bot className="h-10 w-10 text-primary" />}
        />
        <MiniTrustBar />
        <ServiceFeatures features={features} />
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <InlineBookingCTA 
            title="Get Your Dedicated Virtual Assistant Team"
            description="Discover how our AI-powered virtual assistants can save you 20+ hours per week. Schedule your free consultation and ROI analysis."
          />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
