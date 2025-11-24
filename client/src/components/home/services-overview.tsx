import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Headset, Bot, Cpu, FileText, Users, Network, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Headset,
    title: "Contact Center Services",
    description: "24/7 omnichannel customer support with AI-powered routing and human expertise",
    features: ["Inbound/Outbound Support", "Live Chat & Email", "Technical Support", "Multilingual Teams"],
    href: "/services/contact-center",
  },
  {
    icon: Bot,
    title: "AI-Powered Virtual Assistants",
    description: "Executive and administrative support enhanced with intelligent automation",
    features: ["Executive Support", "Administrative Tasks", "Social Media Management", "Content Creation"],
    href: "/services/virtual-assistants",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Workflow automation with human-in-the-loop quality control",
    features: ["RPA & ML Integration", "Predictive Analytics", "AI Data Entry", "Smart Headsets"],
    href: "/services/ai-automation",
  },
  {
    icon: FileText,
    title: "Back Office Support",
    description: "Data entry, document management, and administrative excellence",
    features: ["Data Processing", "Document Management", "Research & Analysis", "Quality Assurance"],
    href: "/services/back-office",
  },
  {
    icon: Users,
    title: "Workforce Management",
    description: "Capacity planning, scheduling optimization, and performance analytics",
    features: ["Capacity Planning", "Real-time Scheduling", "Performance Tracking", "Resource Allocation"],
    href: "/services/workforce-management",
  },
  {
    icon: Network,
    title: "Omnichannel Platform",
    description: "Enterprise platform unifying all customer communications in one dashboard",
    features: ["Live chat, email, voice, SMS, social", "Automation & smart routing", "Built-in CRM & analytics", "WhatsApp Business integration"],
    href: "/services/omnichannel-platform",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Complete BPO Solutions for Modern Business
          </h2>
          <p className="text-lg text-muted-foreground">
            From virtual assistants to enterprise-grade contact centers, we provide everything you need to scale operations efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full group" data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline" data-testid="button-view-all-services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
