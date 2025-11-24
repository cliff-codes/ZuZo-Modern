import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  ShoppingCart, 
  Building2, 
  Heart, 
  Laptop, 
  Home as HomeIcon, 
  Briefcase,
  Car,
  Truck,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Shield
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      id: "ecommerce",
      name: "E-commerce & Retail",
      icon: ShoppingCart,
      description: "Scale customer support, automate order processing, and deliver 24/7 shopping assistance",
      benefits: ["Order management", "Customer service", "Returns processing", "Live chat support"],
      path: "/industries/ecommerce"
    },
    {
      id: "financial-services",
      name: "Financial Services",
      icon: Building2,
      description: "Secure, compliant support for banking, insurance, and fintech operations",
      benefits: ["Fraud detection", "Customer onboarding", "Claims processing", "Compliance support"],
      path: "/industries/financial-services"
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      description: "HIPAA-compliant solutions for patient scheduling, records management, and telehealth",
      benefits: ["Appointment scheduling", "Patient records", "Billing support", "Telehealth coordination"],
      path: "/industries/healthcare"
    },
    {
      id: "technology",
      name: "Technology & SaaS",
      icon: Laptop,
      description: "Technical support, developer relations, and customer success at scale",
      benefits: ["Technical helpdesk", "Developer support", "Customer success", "Documentation"],
      path: "/industries/technology"
    },
    {
      id: "real-estate",
      name: "Real Estate",
      icon: HomeIcon,
      description: "Lead qualification, property inquiries, and tenant support services",
      benefits: ["Lead management", "Property inquiries", "Tenant support", "Appointment booking"],
      path: "/industries/real-estate"
    },
    {
      id: "professional-services",
      name: "Professional Services",
      icon: Briefcase,
      description: "Client communication, appointment management, and administrative support",
      benefits: ["Client communication", "Scheduling", "Document processing", "Billing support"],
      path: "/industries/professional-services"
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: Car,
      description: "Dealership support, service scheduling, parts inquiries, and customer retention",
      benefits: ["Service appointments", "Sales support", "Parts inquiries", "Warranty processing"],
      path: "/industries/automotive"
    },
    {
      id: "logistics",
      name: "Logistics & Transportation",
      icon: Truck,
      description: "Shipment tracking, carrier coordination, warehouse operations, and delivery support",
      benefits: ["Shipment tracking", "Carrier coordination", "Claims handling", "Customer service"],
      path: "/industries/logistics"
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
                Industry-Specific BPO Solutions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground" data-testid="page-subtitle">
                Tailored outsourcing solutions designed for your industry's unique challenges and compliance requirements
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

        {/* Why Industry-Specific Solutions */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-why-industry">
                Why Industry-Specific Solutions Matter
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-why-industry-subtitle">
                Generic outsourcing doesn't work. Your industry has unique needs, regulations, and customer expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-visible" data-testid="benefit-card-compliance">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-compliance">
                    Industry Compliance
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-compliance">
                    Pre-trained teams understand your industry's regulatory requirements, with ISO 27001 aligned processes and Data Protection Certification.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-expertise">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-expertise">
                    Domain Expertise
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-expertise">
                    Agents trained in your industry's terminology, workflows, and customer expectations from day one.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-results">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-results">
                    Faster Results
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-results">
                    Shorter onboarding, better performance, and higher customer satisfaction with specialized teams.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Solutions Grid */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-solutions">
                Choose Your Industry
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
                Explore tailored BPO solutions designed for your industry's specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Card key={industry.id} className="hover-elevate overflow-visible" data-testid={`industry-card-${industry.id}`}>
                    <CardHeader className="gap-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-2xl" data-testid={`industry-title-${industry.id}`}>
                        {industry.name}
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground" data-testid={`industry-description-${industry.id}`}>
                        {industry.description}
                      </p>
                      <ul className="space-y-3">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3" data-testid={`industry-benefit-${industry.id}-${idx}`}>
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={industry.path}>
                        <Button className="w-full" variant="outline" data-testid={`button-industry-${industry.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-stats">
                Industry-Leading Performance
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="text-center" data-testid="stat-card-industries">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-industries">
                    15+
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-industries">
                    Industries Served
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-compliance">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-compliance">
                    100%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-compliance">
                    Compliance Rate
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-satisfaction">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-satisfaction">
                    96%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-satisfaction">
                    Client Satisfaction
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-retention">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-retention">
                    94%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-retention">
                    Client Retention
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading font-bold text-3xl md:text-4xl" data-testid="heading-cta">
                Ready to Transform Your Industry Operations?
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-cta-description">
                Get a customized solution designed specifically for your industry's unique challenges.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/book-demo">
                  <Button size="lg" data-testid="button-cta-demo">
                    Schedule Your Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/roi-calculator">
                  <Button size="lg" variant="outline" data-testid="button-cta-roi">
                    Calculate Your ROI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
