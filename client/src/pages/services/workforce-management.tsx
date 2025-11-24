import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  Users, 
  TrendingUp, 
  Target, 
  Clock,
  Shield,
  DollarSign,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  UserPlus,
  Calendar,
  BarChart3,
  Award
} from "lucide-react";

export default function WorkforceManagementService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm" data-testid="service-badge">
              Workforce Management Solutions
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="service-title">
              Optimize Your Workforce with Expert Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="service-subtitle">
              Access skilled professionals on-demand, scale your team instantly, and maintain 
              peak productivity with our comprehensive workforce management solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" data-testid="button-book-demo">
                  Schedule Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="outline" size="lg" data-testid="button-roi-calculator">
                  Calculate Your Savings
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
              The ZuZo Workforce Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-subtitle">
              Flexible, scalable workforce solutions that grow with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-visible" data-testid="benefit-card-scalability">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-scalability">Instant Scalability</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-scalability">
                  Scale your workforce up or down within 48 hours based on seasonal demands, 
                  projects, or business growth without long-term commitments.
                </p>
              </CardHeader>
            </Card>

            <Card className="overflow-visible" data-testid="benefit-card-talent">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-talent">Pre-Vetted Talent</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-talent">
                  Access a pool of pre-screened, highly skilled professionals who are trained 
                  and ready to contribute from day one.
                </p>
              </CardHeader>
            </Card>

            <Card className="overflow-visible" data-testid="benefit-card-cost">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-cost">60% Cost Reduction</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-cost">
                  Eliminate recruitment, training, benefits, and infrastructure costs while 
                  accessing top-tier talent at a fraction of traditional hiring costs.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Workforce Solutions */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-solutions">
              Comprehensive Workforce Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
              From recruitment to performance management, we handle every aspect
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card data-testid="service-card-recruitment">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UserPlus className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-talent-acquisition">Talent Acquisition</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-talent-acquisition">
                  We handle the entire recruitment process, from sourcing to onboarding, 
                  ensuring you get the right people quickly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-channel candidate sourcing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Skills assessment and vetting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Background verification and compliance checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Rapid onboarding and deployment</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-training">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-training-development">Training & Development</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-training-development">
                  Continuous skill development programs ensure your team stays current 
                  with industry best practices and technology.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Custom training programs aligned with your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Ongoing skill enhancement and certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Product and process-specific training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Performance coaching and mentorship</span>
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
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-shift-management">Shift Management & Scheduling</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-shift-management">
                  Optimize workforce scheduling with 24/7 coverage, ensuring business continuity 
                  across all time zones and peak periods.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">AI-powered scheduling optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 operations coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Absence management and backup coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Flexible shift patterns based on demand</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-performance">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-performance-management">Performance Management</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-performance-management">
                  Real-time performance tracking, quality assurance, and analytics to ensure 
                  optimal productivity and service delivery.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time performance dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Quality monitoring and feedback loops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">KPI tracking and performance reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Detailed analytics and reporting</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-compliance">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-compliance">Compliance & Risk Management</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-compliance">
                  Full compliance management covering labor laws, data protection, and 
                  industry-specific regulations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Labor law compliance across jurisdictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Data security and privacy (GDPR, CCPA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Regular compliance audits and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Risk mitigation and contingency planning</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-retention">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-employee-engagement">Employee Engagement & Retention</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-employee-engagement">
                  Maintain high retention rates through employee satisfaction programs, 
                  career development, and positive workplace culture.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Regular engagement surveys and feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Career pathing and advancement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Recognition and rewards programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Wellness and work-life balance initiatives</span>
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
              How We Build Your Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
              From requirement gathering to ongoing optimization
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Needs Assessment",
                description: "We understand your business requirements, team size needs, skill requirements, and timeline expectations."
              },
              {
                step: 2,
                title: "Talent Sourcing & Screening",
                description: "Our recruitment team sources, screens, and interviews candidates based on your specific criteria and standards."
              },
              {
                step: 3,
                title: "Team Formation & Training",
                description: "Selected candidates undergo rigorous training on your processes, tools, and quality standards."
              },
              {
                step: 4,
                title: "Deployment & Integration",
                description: "Your dedicated team begins operations with ongoing support, monitoring, and performance optimization."
              },
              {
                step: 5,
                title: "Continuous Improvement",
                description: "Regular performance reviews, skill development, and process optimization to maximize productivity and quality."
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
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-stats">
              Proven Workforce Excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center" data-testid="stat-card-deployment">
              <CardContent className="p-8">
                <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-deployment-time">48h</div>
                <div className="text-sm text-muted-foreground" data-testid="stat-label-deployment-time">Team Deployment Time</div>
              </CardContent>
            </Card>
            <Card className="text-center" data-testid="stat-card-retention">
              <CardContent className="p-8">
                <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-retention-rate">95%</div>
                <div className="text-sm text-muted-foreground" data-testid="stat-label-retention-rate">Employee Retention Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center" data-testid="stat-card-productivity">
              <CardContent className="p-8">
                <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-performance-achievement">98%</div>
                <div className="text-sm text-muted-foreground" data-testid="stat-label-performance-achievement">Performance Target Achievement</div>
              </CardContent>
            </Card>
            <Card className="text-center" data-testid="stat-card-satisfaction">
              <CardContent className="p-8">
                <div className="font-heading font-bold text-4xl text-primary mb-2" data-testid="stat-value-satisfaction-score">4.8/5</div>
                <div className="text-sm text-muted-foreground" data-testid="stat-label-satisfaction-score">Client Satisfaction Score</div>
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
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl" data-testid="heading-cta">
                      Build Your Dream Team Today
                    </h2>
                    <p className="text-lg text-muted-foreground" data-testid="text-cta-description">
                      Access pre-vetted talent, reduce hiring costs by 60%, and scale your operations with confidence.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-primary" />
                        <span className="font-semibold" data-testid="cta-benefit-deployment">48-hour team deployment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-6 w-6 text-primary" />
                        <span className="font-semibold" data-testid="cta-benefit-cost-reduction">60% cost reduction guaranteed</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        <span className="font-semibold" data-testid="cta-benefit-compliance">Full compliance and risk management</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Link href="/book-demo">
                      <Button size="lg" className="w-full" data-testid="button-cta-demo">
                        Start Building Your Team
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/book-demo">
                      <Button variant="outline" size="lg" className="w-full" data-testid="button-cta-contact">
                        Speak with HR Expert
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
