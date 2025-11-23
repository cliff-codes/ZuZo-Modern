import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  Briefcase, 
  MessageSquare, 
  Zap, 
  Users,
  Calendar,
  FileText,
  CreditCard,
  Mail,
  Clock,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="text-sm" data-testid="industry-badge">
                Professional Services Solutions
              </Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="heading-hero">
                Focus on Billable Work, We'll Handle the Rest
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-description">
                Maximize your billable hours with comprehensive administrative support for law firms, 
                consulting agencies, accounting practices, and professional services. Handle client 
                communication, scheduling, and back-office tasks while reducing costs by 60%.
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

        {/* Why Choose ZuZo */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-benefits">
                Why Choose ZuZo for Professional Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-subtitle">
                Support solutions designed to help professionals focus on high-value client work
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-visible" data-testid="benefit-card-communication">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-communication">
                    Client Communication Excellence
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-communication">
                    Professional, polished communication that reflects your firm's brand and values. 
                    Our teams handle client inquiries, status updates, and routine correspondence with 
                    the same attention to detail you'd expect from in-house staff.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-efficiency">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-efficiency">
                    Administrative Efficiency
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-efficiency">
                    Free your professionals from administrative burden so they can focus on billable 
                    work. Our support handles scheduling, document processing, billing coordination, 
                    and routine tasks that consume valuable time.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-flexibility">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-flexibility">
                    Flexible Support Model
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-flexibility">
                    Scale support up or down based on your firm's workload. Need extra capacity during 
                    tax season, quarter-end, or major projects? We adjust instantly without the 
                    complexity of hiring, training, or laying off staff.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Services Solutions */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-solutions">
                Professional Services Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
                Comprehensive administrative support for law firms, consulting, accounting, and more
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card data-testid="service-card-client-communication">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-client-communication">
                      Client Communication Management
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-client-communication">
                    Professional phone answering, email management, and client inquiry handling. 
                    Maintain consistent, branded communication that enhances your firm's reputation 
                    while ensuring no client message goes unanswered.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Professional phone answering and screening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Client status updates and follow-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Inquiry routing and urgent matter escalation</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-scheduling">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-scheduling">
                      Appointment Booking & Calendar Management
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-scheduling">
                    Streamline your schedule with professional appointment coordination, calendar 
                    management, and meeting logistics. Handle booking, rescheduling, reminders, 
                    and conflict resolution efficiently.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Client meeting scheduling and coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Calendar management across multiple professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Automated reminders and confirmation calls</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-documents">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-documents">
                      Document Processing & Management
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-documents">
                    Handle routine document tasks including formatting, organization, filing, and 
                    distribution. Process client intake forms, engagement letters, and administrative 
                    documents to keep your practice running smoothly.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Document formatting and organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Client intake and onboarding paperwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Digital filing and document retrieval</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-billing">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-billing">
                      Billing Support & Invoice Management
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-billing">
                    Support your billing operations with invoice preparation, payment processing, 
                    and collections follow-up. Improve cash flow with professional, timely billing 
                    communication and payment tracking.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Invoice preparation and distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Payment processing and reconciliation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Polite collections follow-up and reminders</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-calendar-management">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-calendar-management">
                      Calendar & Time Management
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-calendar-management">
                    Optimize professional time with proactive calendar management, meeting preparation, 
                    and deadline tracking. Ensure your team stays on schedule and prepared for every 
                    client engagement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Daily schedule optimization and coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Meeting preparation and materials organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Deadline tracking and proactive reminders</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-email">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-email">
                      Email Management & Correspondence
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-email">
                    Manage email overload with professional inbox management, response drafting, 
                    and correspondence routing. Filter important messages, handle routine inquiries, 
                    and maintain your firm's communication standards.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Inbox triage and priority flagging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Standard response handling and drafting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Follow-up tracking and correspondence management</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Support Professional Services */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-process">
                How We Support Professional Service Firms
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
                Our methodology for seamless integration with your professional practice
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
                      Firm Culture & Standards Training
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-1">
                      Deep immersion in your firm's culture, communication style, and service 
                      standards. Our team learns your terminology, client service philosophy, and 
                      brand voice to become true extensions of your practice.
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
                      Practice Management Integration
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-2">
                      Integrate with your practice management software, CRM, billing systems, and 
                      document management platforms. Secure access and proper workflows ensure 
                      seamless operations across all systems.
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
                      Role-Based Task Assignment
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-3">
                      Define clear responsibilities and escalation protocols for different types 
                      of client interactions and administrative tasks. Assign dedicated support 
                      for specific professionals or practice areas as needed.
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
                      Quality Assurance & Client Feedback
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-4">
                      Regular quality reviews, client satisfaction monitoring, and performance 
                      reporting. Continuous improvement cycles ensure our support consistently 
                      meets your firm's high standards.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="process-card-5">
                <CardContent className="p-8 flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-xl text-primary">5</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-3" data-testid="process-title-5">
                      Flexible Scaling & Optimization
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-5">
                      Adjust support levels dynamically based on your firm's workload and growth. 
                      Scale up during busy seasons or major projects, then optimize during slower 
                      periods without HR complexity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-stats">
                Professional Services Impact
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="text-center" data-testid="stat-card-billable-hours">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-billable-hours">
                    35%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-billable-hours">
                    More Billable Hours
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-satisfaction">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-satisfaction">
                    4.9/5
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-satisfaction">
                    Client Satisfaction
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-efficiency">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-efficiency">
                    50%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-efficiency">
                    Admin Efficiency Gain
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
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading font-bold text-3xl md:text-4xl" data-testid="heading-cta">
                Ready to Maximize Your Billable Hours?
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-cta-description">
                Join professional service firms who trust ZuZo for administrative excellence.
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
