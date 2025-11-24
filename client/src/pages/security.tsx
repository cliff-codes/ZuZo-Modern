import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Server, 
  FileCheck, 
  Eye, 
  Database, 
  CheckCircle,
  ExternalLink,
  Mail
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InlineBookingCTA } from "@/components/cta/inline-booking-cta";
import { MiniTrustBar } from "@/components/trust/mini-trust-bar";
import { SEOHead } from "@/components/seo/seo-head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const certifications = [
  {
    name: "ISO 27001 Aligned",
    description: "Enterprise-grade security processes aligned with ISO 27001 standards",
    icon: Shield,
  },
  {
    name: "Data Protection Certified",
    description: "Certified data protection practices ensuring client privacy",
    icon: FileCheck,
  },
  {
    name: "GDPR Compliant",
    description: "Full compliance with EU data protection regulations",
    icon: Eye,
  },
  {
    name: "Enterprise Security",
    description: "Bank-level encryption and security controls",
    icon: Lock,
  },
];

const securityFeatures = [
  {
    title: "Data Encryption",
    description: "End-to-end encryption for data at rest and in transit using AES-256 and TLS 1.3",
    icon: Lock,
  },
  {
    title: "Access Controls",
    description: "Role-based access control (RBAC) with multi-factor authentication and audit logging",
    icon: Eye,
  },
  {
    title: "Security Audits",
    description: "Regular third-party penetration testing and vulnerability assessments",
    icon: Shield,
  },
  {
    title: "Secure Infrastructure",
    description: "Enterprise-grade data centers with 24/7 monitoring and physical security",
    icon: Server,
  },
  {
    title: "Data Backup",
    description: "Automated daily backups with 99.9% uptime SLA and disaster recovery",
    icon: Database,
  },
  {
    title: "Compliance Monitoring",
    description: "Continuous compliance monitoring and regular third-party audits",
    icon: FileCheck,
  },
];

const securityFAQs = [
  {
    question: "Where is our data stored?",
    answer: "All client data is stored in secure, SOC 2 certified data centers with redundancy across multiple geographic locations. We use enterprise-grade infrastructure with 24/7 monitoring and physical security controls.",
  },
  {
    question: "How do you handle data encryption?",
    answer: "We implement end-to-end encryption using AES-256 for data at rest and TLS 1.3 for data in transit. All connections to our systems are encrypted, and encryption keys are managed using industry-standard key management systems.",
  },
  {
    question: "Are you GDPR compliant?",
    answer: "Yes, we are fully GDPR compliant. We have implemented comprehensive data protection policies, provide data processing agreements (DPAs), support data subject access requests, and maintain detailed records of all data processing activities.",
  },
  {
    question: "Can you support HIPAA requirements?",
    answer: "Yes, we are HIPAA-ready and can sign Business Associate Agreements (BAAs) for healthcare clients. Our infrastructure, policies, and training programs meet HIPAA security and privacy requirements.",
  },
  {
    question: "How do you control access to our data?",
    answer: "We use role-based access control (RBAC) with the principle of least privilege. All users must authenticate using multi-factor authentication (MFA), and all access is logged and monitored. Access is reviewed regularly and revoked when no longer needed.",
  },
  {
    question: "Do you perform security audits?",
    answer: "Yes, we conduct regular third-party security audits and penetration testing. We also maintain SOC 2 Type II certification, which requires annual audits of our security controls by independent auditors.",
  },
  {
    question: "What is your data retention policy?",
    answer: "We retain data according to contractual requirements and applicable regulations. Clients can request data deletion at any time, and we maintain secure data destruction procedures to ensure data is unrecoverable after deletion.",
  },
  {
    question: "How do you handle security incidents?",
    answer: "We have a comprehensive incident response plan that includes detection, containment, investigation, and notification procedures. We maintain 24/7 security monitoring and will notify affected clients within 24 hours of any confirmed security incident.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Security & Compliance"
        description="Enterprise-grade security with ISO 27001 aligned processes and Data Protection Certification. GDPR compliant with AES-256 encryption, 24/7 monitoring, and 99.9% uptime SLA."
        canonical="/security"
        keywords="BPO security, GDPR compliance, ISO 27001 aligned, data protection certified, secure outsourcing, Ghana BPO"
      />
      <Header />

      <main className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        {/* Hero Section */}
        <section className="mb-16 lg:mb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="h-4 w-4" />
                Enterprise-Grade Security
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Security & Compliance You Can Trust
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Your data security is our top priority. We maintain the highest standards of security and compliance to protect your business and customer information.
              </p>
            </div>
          </div>
        </section>

        <MiniTrustBar />

        {/* Certifications Grid */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Industry-Leading Certifications
              </h2>
              <p className="text-lg text-muted-foreground">
                We maintain rigorous compliance certifications to ensure the highest standards of data protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card key={index} className="text-center hover-elevate" data-testid={`cert-card-${index}`}>
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Comprehensive Security Measures
              </h2>
              <p className="text-lg text-muted-foreground">
                Multi-layered security controls to protect your data at every level
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`security-feature-${index}`}>
                    <CardHeader className="gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-xl">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Data Security Details */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">
                Our Security Framework
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-3">
                      <Lock className="h-6 w-6 text-primary" />
                      Data Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Encryption at Rest:</strong> All data is encrypted using AES-256 encryption with regularly rotated keys
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Encryption in Transit:</strong> TLS 1.3 encryption for all data transmitted over networks
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Access Controls:</strong> Multi-factor authentication and role-based access with audit trails
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Security Audits:</strong> Regular third-party penetration testing and vulnerability assessments
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-3">
                      <Server className="h-6 w-6 text-primary" />
                      Infrastructure Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Secure Data Centers:</strong> SOC 2 certified facilities with 24/7 physical security and monitoring
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Redundancy:</strong> Multi-region data replication with automatic failover capabilities
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Backup & Recovery:</strong> Automated daily backups with 30-day retention and disaster recovery testing
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Uptime SLA:</strong> 99.9% uptime guarantee with real-time status monitoring
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-3">
                      <FileCheck className="h-6 w-6 text-primary" />
                      Privacy & Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Privacy Policy:</strong> Comprehensive data protection policies compliant with global regulations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Data Processing:</strong> Clear data processing agreements (DPAs) for all client engagements
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong>Employee Training:</strong> Mandatory security awareness training for all team members
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <strong>Privacy Policy:</strong> Read our complete{" "}
                        <Link href="/privacy-policy">
                          <span className="text-primary hover:underline">Privacy Policy</span>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Security FAQs */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">
                Security & Compliance Questions
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {securityFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                    <AccordionTrigger className="font-heading font-semibold hover:no-underline" data-testid={`faq-trigger-${index}`}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground" data-testid={`faq-content-${index}`}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Security Team CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                    Have Security Questions?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Our security team is here to answer your questions and provide detailed information about our security practices and compliance certifications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" data-testid="button-contact-security">
                        <Mail className="mr-2 h-5 w-5" />
                        Contact Security Team
                      </Button>
                    </Link>
                    <a 
                      href="mailto:security@zuzogp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" variant="outline" data-testid="button-email-security">
                        security@zuzogp.com
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <InlineBookingCTA 
              title="Experience Secure, Compliant BPO Services"
              description="Book a demo to see how our enterprise-grade security infrastructure protects your data while delivering exceptional results."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
