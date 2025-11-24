import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  Headset, 
  Bot, 
  Cpu, 
  FileText, 
  Users, 
  Network,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "contact-center",
      name: "Contact Center Services",
      icon: Headset,
      description: "24/7 omnichannel customer support with AI-powered routing and human expertise",
      benefits: ["Inbound/Outbound Support", "Live Chat & Email", "Technical Support", "Multilingual Teams"],
      path: "/services/contact-center"
    },
    {
      id: "virtual-assistants",
      name: "AI-Powered Virtual Assistants",
      icon: Bot,
      description: "Executive and administrative support enhanced with intelligent automation",
      benefits: ["Executive Support", "Administrative Tasks", "Social Media Management", "Content Creation"],
      path: "/services/virtual-assistants"
    },
    {
      id: "ai-automation",
      name: "AI & Automation",
      icon: Cpu,
      description: "Workflow automation with human-in-the-loop quality control",
      benefits: ["RPA & ML Integration", "Predictive Analytics", "AI Data Entry", "Smart Headsets"],
      path: "/services/ai-automation"
    },
    {
      id: "back-office",
      name: "Back Office Support",
      icon: FileText,
      description: "Data entry, document management, and administrative excellence",
      benefits: ["Data Processing", "Document Management", "Research & Analysis", "Quality Assurance"],
      path: "/services/back-office"
    },
    {
      id: "workforce-management",
      name: "Workforce Management",
      icon: Users,
      description: "Capacity planning, scheduling optimization, and performance analytics",
      benefits: ["Capacity Planning", "Real-time Scheduling", "Performance Tracking", "Resource Allocation"],
      path: "/services/workforce-management"
    },
    {
      id: "omnichannel-platform",
      name: "Omnichannel Platform",
      icon: Network,
      description: "Enterprise platform unifying all customer communications in one dashboard",
      benefits: ["Live chat, email, voice, SMS, social", "Automation & smart routing", "Built-in CRM & analytics", "WhatsApp Business integration"],
      path: "/services/omnichannel-platform"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="page-title">
                Complete BPO Solutions for Modern Business
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground" data-testid="page-subtitle">
                From virtual assistants to enterprise-grade contact centers, we provide everything you need to scale operations efficiently
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/book-demo">
                  <Button size="lg" data-testid="button-hero-demo">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" data-testid="button-hero-contact">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why ZuZo Services */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-why-services">
                Why Choose ZuZo BPO Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-why-services-subtitle">
                Reduce costs by 60% while maintaining exceptional quality and service standards
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-visible" data-testid="benefit-card-cost">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-success/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-cost">
                    60% Cost Reduction
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-cost">
                    Significantly lower operational costs compared to in-house teams or traditional BPO providers.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-speed">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-speed">
                    48-Hour Launch
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-speed">
                    Rapid deployment gets your operations running faster than traditional hiring cycles.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-security">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-security">
                    Enterprise Security
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-security">
                    ISO 27001 aligned processes and Data Protection Certification ensure your data is safe.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-all-services">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
                Choose the services that match your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.id} className="hover-elevate transition-all duration-300" data-testid={`card-service-${service.id}`}>
                    <CardHeader className="gap-4">
                      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl" data-testid={`service-title-${service.id}`}>
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`service-description-${service.id}`}>
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={service.path}>
                        <Button className="w-full group" variant="outline" data-testid={`button-learn-more-${service.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4" data-testid="cta-heading">
                  Ready to Transform Your Operations?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="cta-description">
                  Book a free consultation to discover how ZuZo's BPO services can reduce costs by 60% while improving efficiency and quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/book-demo">
                    <Button size="lg" data-testid="button-cta-demo">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/roi-calculator">
                    <Button variant="outline" size="lg" data-testid="button-cta-calculator">
                      Calculate Your Savings
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
