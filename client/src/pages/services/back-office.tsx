import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  FileText, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield,
  Clock,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Receipt,
  ClipboardCheck,
  Database
} from "lucide-react";

export default function BackOfficeService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm" data-testid="service-badge">
              Back Office Support Services
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="service-title">
              Streamline Your Back Office Operations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="service-subtitle">
              Free your team from administrative burdens. Our expert back office support handles 
              essential business functions so you can focus on growth and innovation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" data-testid="button-book-demo">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="outline" size="lg" data-testid="button-roi-calculator">
                  Calculate ROI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-benefits">
              Why Outsource Your Back Office?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-subtitle">
              Reduce costs, improve accuracy, and gain operational flexibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-visible" data-testid="benefit-card-cost">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-cost">Up to 65% Cost Savings</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-cost">
                  Eliminate overhead costs associated with hiring, training, office space, 
                  and technology infrastructure for back office staff.
                </p>
              </CardHeader>
            </Card>

            <Card className="overflow-visible" data-testid="benefit-card-accuracy">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-accuracy">99.5% Accuracy Rate</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-accuracy">
                  Our rigorous quality control processes and specialized expertise ensure 
                  exceptional accuracy in data entry, processing, and reporting.
                </p>
              </CardHeader>
            </Card>

            <Card className="overflow-visible" data-testid="benefit-card-scalability">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-scalability">Instant Scalability</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-scalability">
                  Scale operations up or down based on business needs without the complexity 
                  and cost of hiring or laying off employees.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Back Office Services */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-solutions">
              Comprehensive Back Office Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
              End-to-end support for all your administrative and operational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card data-testid="service-card-accounting">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calculator className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-accounting">Accounting & Bookkeeping</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-accounting">
                  Professional accounting support to keep your financial records accurate, 
                  compliant, and up-to-date.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Accounts payable and receivable management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">General ledger maintenance and reconciliation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Financial reporting and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Tax preparation support</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-payroll">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Receipt className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-payroll">Payroll Processing</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-payroll">
                  Accurate, timely payroll management with full compliance to local regulations 
                  and tax requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Bi-weekly or monthly payroll processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Tax withholding and filing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Benefits administration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Year-end reporting and W-2/1099 generation</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-data-entry">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-data-entry">Data Entry & Management</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-data-entry">
                  Fast, accurate data entry and database management services to keep your 
                  information organized and accessible.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">High-volume data entry with 99.9% accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Database cleanup and deduplication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Document digitization and indexing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">CRM and ERP data management</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-document">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-document-processing">Document Processing</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-document-processing">
                  Comprehensive document management from scanning and indexing to processing 
                  and secure archival.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Invoice processing and verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Contract management and renewal tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Document digitization with OCR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Secure document storage and retrieval</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-hr">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-hr-administration">HR Administration</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-hr-administration">
                  Streamline HR operations with support for recruitment, onboarding, 
                  and employee record management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Resume screening and candidate coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Employee onboarding and offboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">HRIS data management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Compliance documentation and reporting</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-admin">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ClipboardCheck className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-admin-support">General Admin Support</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-admin-support">
                  Flexible administrative support for scheduling, correspondence, 
                  and day-to-day operational tasks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Calendar management and appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Email management and correspondence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Travel coordination and expense reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Vendor management and procurement support</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-process">
              Seamless Integration with Your Operations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
              Get started in 48 hours with our streamlined onboarding process
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Requirements Analysis",
                description: "We assess your current processes, identify pain points, and define service scope and KPIs."
              },
              {
                step: 2,
                title: "Team Setup & Training",
                description: "Your dedicated back office team is assembled and trained on your specific systems, processes, and standards."
              },
              {
                step: 3,
                title: "Process Integration",
                description: "We integrate with your existing tools and establish secure data exchange protocols and workflows."
              },
              {
                step: 4,
                title: "Go Live & Support",
                description: "Begin operations with continuous monitoring, quality assurance, and regular performance reporting."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start" data-testid={`process-step-${item.step}`}>
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-heading font-semibold text-xl mb-2" data-testid={`process-title-${item.step}`}>{item.title}</h3>
                  <p className="text-muted-foreground" data-testid={`process-description-${item.step}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center" data-testid="stat-card-accuracy">
              <CardContent className="p-8">
                <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-accuracy">99.5%</div>
                <div className="text-sm text-muted-foreground" data-testid="stat-label-accuracy">Accuracy Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center" data-testid="stat-card-savings">
              <CardContent className="p-8">
                <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-cost-reduction">65%</div>
                <div className="text-sm text-muted-foreground" data-testid="stat-label-cost-reduction">Cost Reduction</div>
              </CardContent>
            </Card>
            <Card className="text-center" data-testid="stat-card-turnaround">
              <CardContent className="p-8">
                <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-setup-time">48h</div>
                <div className="text-sm text-muted-foreground" data-testid="stat-label-setup-time">Setup Time</div>
              </CardContent>
            </Card>
            <Card className="text-center" data-testid="stat-card-support">
              <CardContent className="p-8">
                <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-support">24/7</div>
                <div className="text-sm text-muted-foreground" data-testid="stat-label-support">Support Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl" data-testid="heading-cta">
                    Ready to Streamline Your Back Office?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-cta-description">
                    Join hundreds of businesses that have reduced costs and improved efficiency with our back office solutions.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Link href="/book-demo">
                      <Button size="lg" data-testid="button-cta-demo">
                        Start Your Free Trial
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" data-testid="button-cta-contact">
                        Speak with an Expert
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
