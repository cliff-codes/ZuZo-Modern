import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  Laptop, 
  Code, 
  Users, 
  LifeBuoy,
  GitBranch,
  Bug,
  FileText,
  UserPlus,
  TrendingUp,
  Target,
  ChevronRight,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="text-sm" data-testid="industry-badge">
                Technology & SaaS Solutions
              </Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="heading-hero">
                Technical Support That Speaks Developer
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-description">
                Scale your technical support, developer relations, and customer success operations 
                with teams who understand your technology stack. Deliver exceptional developer 
                experiences while reducing support costs by 60%.
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
                Why Choose ZuZo for Technology & SaaS
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-subtitle">
                Support teams with the technical expertise your developers and users deserve
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-visible" data-testid="benefit-card-expertise">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-expertise">
                    Technical Expertise
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-expertise">
                    Support agents with technical backgrounds who understand APIs, SDKs, coding 
                    concepts, and technical troubleshooting. They speak the language of developers 
                    and can handle complex technical inquiries with accuracy.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-dev-relations">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GitBranch className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-dev-relations">
                    Developer Support
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-dev-relations">
                    Dedicated developer relations support that understands your API documentation, 
                    SDK features, and integration patterns. Help developers succeed with your platform 
                    through expert guidance and community engagement.
                  </p>
                </CardHeader>
              </Card>

              <Card className="overflow-visible" data-testid="benefit-card-customer-success">
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-customer-success">
                    Customer Success at Scale
                  </h3>
                  <p className="text-muted-foreground" data-testid="benefit-description-customer-success">
                    Proactive customer success operations that drive adoption, reduce churn, and 
                    increase expansion revenue. From onboarding to renewal, we help your customers 
                    achieve their goals with your SaaS product.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Solutions */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-solutions">
                Technology & SaaS Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
                Comprehensive support services for software companies and technology platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card data-testid="service-card-helpdesk">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <LifeBuoy className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-helpdesk">
                      Technical Helpdesk
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-helpdesk">
                    Multi-tier technical support for your SaaS platform or software products. Handle 
                    user questions, troubleshoot technical issues, and escalate complex problems to 
                    your engineering team when necessary.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Multi-channel support (email, chat, phone, tickets)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Bug reproduction and detailed reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Feature explanation and best practices guidance</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-dev-relations">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-dev-relations">
                      Developer Relations Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-dev-relations">
                    Support developers integrating with your API or platform. Answer technical 
                    questions, provide code examples, troubleshoot integration issues, and engage 
                    with your developer community.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">API and SDK integration support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Code review and troubleshooting assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Community forum and Stack Overflow monitoring</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-customer-success">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-customer-success">
                      Customer Success Operations
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-customer-success">
                    Proactive customer success management to drive adoption, engagement, and retention. 
                    Monitor product usage, reach out to at-risk accounts, and identify expansion 
                    opportunities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Health score monitoring and at-risk outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Quarterly business reviews (QBRs) coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Upsell and expansion opportunity identification</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-documentation">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-documentation">
                      Documentation Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-documentation">
                    Maintain and improve your knowledge base, help center, and API documentation. 
                    Create new articles based on common support questions, update existing content, 
                    and ensure documentation stays current.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Knowledge base article creation and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Tutorial and guide development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Documentation gap analysis from support tickets</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-bug-triage">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Bug className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-bug-triage">
                      Bug Triage & QA Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-bug-triage">
                    Streamline your bug reporting process with detailed reproduction steps, environment 
                    information, and priority classification. Reduce noise for your engineering team 
                    by filtering and documenting issues thoroughly.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Bug reproduction and detailed documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Severity and priority classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Jira/GitHub issue creation and tracking</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card data-testid="service-card-onboarding">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <UserPlus className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl" data-testid="service-title-onboarding">
                      User Onboarding Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground" data-testid="service-description-onboarding">
                    Guide new users through setup, configuration, and first-value experiences. 
                    Conduct onboarding calls, provide implementation assistance, and ensure customers 
                    achieve quick wins with your product.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Welcome calls and product walkthroughs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Configuration and setup assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Training session scheduling and delivery</span>
                    </li>
                  </ul>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Support Technology */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-process">
                How We Support Technology Companies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
                Our methodology for delivering technical support excellence
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
                      Technical Onboarding & Certification
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-1">
                      Agents complete comprehensive product training, earn internal certifications, 
                      and learn your technology stack deeply. We hire for technical aptitude and train 
                      on your specific product until they're true product experts.
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
                      Platform Integration & Tool Setup
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-2">
                      Integrate with your support tools (Zendesk, Intercom, Jira, GitHub), knowledge 
                      base, monitoring systems, and internal platforms. Create seamless workflows 
                      between support and engineering teams.
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
                      Tiered Support Structure
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-3">
                      Implement multi-tier support model where L1 handles common questions, L2 tackles 
                      complex technical issues, and seamless escalation to your engineering team for 
                      product bugs or advanced troubleshooting.
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
                      Knowledge Sharing & Feedback Loops
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-4">
                      Regular feedback sessions with your product team, bug pattern analysis, feature 
                      request aggregation, and documentation improvement suggestions. Support insights 
                      drive product development.
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
                      Performance Metrics & Continuous Training
                    </h3>
                    <p className="text-muted-foreground" data-testid="process-description-5">
                      Track CSAT, first response time, resolution rate, and technical accuracy. 
                      Continuous product update training ensures agents stay current as your product 
                      evolves and new features launch.
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
                Technology Support Performance
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="text-center" data-testid="stat-card-accuracy">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-accuracy">
                    95%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-accuracy">
                    Technical Accuracy
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-satisfaction">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-satisfaction">
                    4.7/5
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-satisfaction">
                    Developer Satisfaction
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="stat-card-retention">
                <CardContent className="p-8">
                  <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-retention">
                    92%
                  </div>
                  <div className="text-muted-foreground" data-testid="stat-label-retention">
                    Customer Retention
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
                Ready to Scale Your Technical Support?
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-cta-description">
                Join leading SaaS companies who trust ZuZo for expert technical support at scale.
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
