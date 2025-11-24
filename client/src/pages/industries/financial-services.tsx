import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InlineBookingCTA } from "@/components/cta/inline-booking-cta";
import { MiniTrustBar } from "@/components/trust/mini-trust-bar";
import { ServiceSchema } from "@/components/seo/service-schema";
import { Link } from "wouter";
import { 
  Building2, 
  Shield, 
  Lock, 
  FileCheck,
  UserCheck,
  AlertTriangle,
  FileText,
  Users,
  TrendingUp,
  Target,
  ChevronRight,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceSchema 
          name="Financial Services BPO Solutions"
          description="Secure, compliant operations for financial institutions"
          url="/industries/financial-services"
          category="Financial Services"
        />
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="text-sm" data-testid="industry-badge">
                Financial Services Solutions
              </Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="heading-hero">
                Secure, Compliant BPO for Financial Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-description">
                PCI-DSS and SOC 2 certified support for banking, insurance, and fintech. Deliver 
                exceptional customer experiences while maintaining the highest security and regulatory 
                compliance standards. Reduce costs by 60% without compromising on quality.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/book-demo">
                  <Button size="lg" data-testid="button-hero-demo">
                    Schedule a Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/roi-calculator">
                  <Button variant="outline" size="lg" data-testid="button-hero-roi">
                    Calculate Your Savings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <MiniTrustBar />

        {/* Why Choose ZuZo */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-benefits">
                Why Choose ZuZo for Financial Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-subtitle">
                Purpose-built for the security and compliance demands of financial institutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-visible" data-testid="benefit-card-compliance">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-compliance">
                    Regulatory Compliance
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-compliance">
                    PCI-DSS Level 1, SOC 2 Type II, and ISO 27001 certified operations. Our teams are 
                    trained on financial regulations including GDPR, KYC, AML, and industry-specific 
                    compliance requirements to ensure your operations meet all standards.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-fraud">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-fraud">
                    Fraud Detection Support
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-fraud">
                    Specialized teams trained to identify suspicious activities, verify transactions, 
                    and escalate potential fraud cases. AI-assisted monitoring combined with human 
                    oversight ensures comprehensive fraud prevention.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-security">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-security">
                    Secure Data Handling
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-security">
                    End-to-end encryption, secure access controls, and comprehensive audit trails. 
                    Our infrastructure is designed with financial-grade security, including secure 
                    workstations, monitored facilities, and strict data handling protocols.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Financial Services Solutions */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-solutions">
                Financial Services Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
                Comprehensive support services for banking, insurance, and fintech operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card data-testid="service-card-onboarding">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-onboarding">
                      Customer Onboarding
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-onboarding">
                    Streamline account opening and customer verification processes. Handle document 
                    collection, identity verification, and compliance checks while delivering a 
                    seamless onboarding experience that reduces drop-off rates.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Account application processing and verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Document collection and validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Welcome calls and product education</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-claims">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileCheck className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-claims">
                      Claims Processing
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-claims">
                    Efficient insurance claims intake, documentation, and status tracking. Our teams 
                    handle first notice of loss (FNOL), gather supporting documents, and coordinate 
                    with adjusters to accelerate claims resolution.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">FNOL intake and initial assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Document gathering and verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Claims status updates and communication</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-fraud">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-fraud">
                      Fraud Detection Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-fraud">
                    AI-powered transaction monitoring combined with human expertise to identify and 
                    prevent fraudulent activities. Verify suspicious transactions, conduct outbound 
                    verification calls, and escalate confirmed fraud cases.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Transaction verification and customer callbacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Suspicious activity reporting (SAR) support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Card blocking and dispute resolution</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-account-management">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-account-management">
                      Account Management Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-account-management">
                    Provide ongoing customer support for account inquiries, transaction disputes, 
                    balance inquiries, and product questions. Handle routine requests efficiently 
                    while escalating complex issues appropriately.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Balance and transaction inquiries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Account updates and profile changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Product recommendations and cross-selling</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-compliance-docs">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-compliance-docs">
                      Compliance Documentation
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-compliance-docs">
                    Maintain accurate records, process regulatory documentation, and ensure audit-ready 
                    compliance files. Our teams understand financial recordkeeping requirements and 
                    maintain meticulous documentation standards.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Regulatory report preparation and filing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Audit trail maintenance and documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Compliance monitoring and tracking</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-kyc">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-kyc">
                      KYC Verification
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-kyc">
                    Comprehensive Know Your Customer (KYC) and Anti-Money Laundering (AML) verification 
                    processes. Verify customer identities, screen against watchlists, and maintain 
                    compliance with regulatory requirements.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Identity document verification and authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Sanctions and watchlist screening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Enhanced due diligence for high-risk customers</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Support Financial Services */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-process">
                How We Support Financial Institutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
                Our secure, compliant methodology for financial services BPO
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card data-testid="process-card-1">
                <CardContent className="p-8 flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-xl text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-3" data-testid="process-title-1">
                      Security & Compliance Audit
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-1">
                      We conduct a comprehensive security assessment of your requirements, ensuring our 
                      infrastructure, processes, and team training meet all regulatory standards including 
                      PCI-DSS, SOC 2, GDPR, and industry-specific regulations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="process-card-2">
                <CardContent className="p-8 flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-xl text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-3" data-testid="process-title-2">
                      Specialized Training Program
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-2">
                      Agents undergo extensive training on financial products, regulatory compliance, fraud 
                      detection, and data security. Certification programs ensure deep understanding of 
                      financial services operations and customer expectations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="process-card-3">
                <CardContent className="p-8 flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-xl text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-3" data-testid="process-title-3">
                      Secure System Integration
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-3">
                      Integrate with your core banking systems, CRM, and fraud detection platforms using 
                      encrypted connections, role-based access controls, and comprehensive audit logging 
                      to ensure complete data security.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="process-card-4">
                <CardContent className="p-8 flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-xl text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-3" data-testid="process-title-4">
                      Continuous Monitoring & Quality Assurance
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-4">
                      Real-time quality monitoring, random call reviews, and compliance checks ensure 
                      consistent performance. Regular audits and reporting provide full transparency into 
                      operations and security posture.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 py-16">
          <InlineBookingCTA 
            title="Secure Your Financial Operations"
            description="Learn how ZuZo's PCI-DSS and SOC 2 certified support helps financial institutions reduce costs by 60% while maintaining the highest security standards. Schedule your consultation."
          />
        </div>

        {/* Stats Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-stats">
                Financial Services Performance
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
              <Card className="text-center" data-testid="stat-card-cost-savings">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-cost-savings">
                    60%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-cost-savings">
                    Cost Reduction
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-fraud">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-fraud">
                    99.5%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-fraud">
                    Fraud Detection Accuracy
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-security">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-security">
                    Zero
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-security">
                    Security Breaches
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading font-bold text-3xl md:text-4xl" data-testid="heading-cta">
                Ready for Secure, Compliant Financial Services BPO?
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-cta-description">
                Join leading financial institutions who trust ZuZo for secure, compliant operations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/book-demo">
                  <Button size="lg" data-testid="button-cta-demo">
                    Schedule Your Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" data-testid="button-cta-contact">
                    Contact Sales
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
