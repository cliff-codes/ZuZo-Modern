import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  Bot, 
  Zap, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Target,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Brain,
  Workflow,
  BarChart3
} from "lucide-react";

export default function AIAutomationService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm" data-testid="service-badge">
              AI & Automation Solutions
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="service-title">
              Transform Operations with AI-Powered Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="service-subtitle">
              Combine human expertise with cutting-edge AI technology to automate repetitive tasks, 
              improve accuracy, and free your team to focus on strategic initiatives.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" data-testid="button-book-demo">
                  Schedule a Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button variant="outline" size="lg" data-testid="button-roi-calculator">
                  Calculate Your ROI
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
              Why Choose AI-Powered Automation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-subtitle">
              Leverage the best of both worlds—AI efficiency and human intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-visible" data-testid="benefit-card-cost">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-cost">60% Cost Reduction</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-cost">
                  Dramatically reduce operational costs through intelligent process automation 
                  while maintaining superior quality standards.
                </p>
              </CardHeader>
            </Card>

            <Card className="overflow-visible" data-testid="benefit-card-speed">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-speed">10X Faster Processing</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-speed">
                  AI-powered automation handles repetitive tasks in seconds, not hours, 
                  accelerating your business processes exponentially.
                </p>
              </CardHeader>
            </Card>

            <Card className="overflow-visible" data-testid="benefit-card-accuracy">
              <CardHeader className="gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-2xl" data-testid="benefit-title-accuracy">99.9% Accuracy</h3>
                <p className="text-muted-foreground" data-testid="benefit-description-accuracy">
                  Eliminate human error in data processing, document management, 
                  and routine tasks with AI precision.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Automation Services */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-solutions">
              Our AI Automation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
              Comprehensive automation across your entire business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card data-testid="service-card-data-processing">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-data-processing">Intelligent Data Processing</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-data-processing">
                  Automated data entry, extraction, validation, and reconciliation using 
                  AI-powered OCR and machine learning algorithms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Document digitization and classification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Automated invoice processing and approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time data validation and error detection</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-workflow">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Workflow className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-process-automation">Process Automation</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-process-automation">
                  End-to-end workflow automation across departments and systems, 
                  reducing manual intervention and accelerating operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Automated customer onboarding flows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Smart email routing and response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Scheduled reporting and notifications</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-chatbots">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-chatbots">AI Chatbots & Virtual Agents</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-chatbots">
                  Deploy intelligent chatbots that handle customer inquiries, qualify leads, 
                  and provide 24/7 support with natural language understanding.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-channel deployment (web, WhatsApp, social)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Context-aware conversations with learning capability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Seamless handoff to human agents when needed</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card data-testid="service-card-analytics">
              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid="service-title-predictive-analytics">Predictive Analytics</h3>
                </div>
                <p className="text-muted-foreground" data-testid="service-description-predictive-analytics">
                  Leverage AI to forecast trends, identify patterns, and make data-driven 
                  decisions that optimize business performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Customer behavior prediction and churn prevention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Demand forecasting and inventory optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Anomaly detection and fraud prevention</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6" data-testid="heading-process">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
              A proven methodology to integrate AI into your operations seamlessly
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Discovery & Assessment",
                description: "We analyze your current processes to identify high-impact automation opportunities and define clear success metrics."
              },
              {
                step: 2,
                title: "Solution Design",
                description: "Our AI experts design custom automation workflows tailored to your specific business requirements and systems."
              },
              {
                step: 3,
                title: "Pilot Implementation",
                description: "We deploy a proof-of-concept in a controlled environment, validate results, and gather feedback for optimization."
              },
              {
                step: 4,
                title: "Full Deployment",
                description: "Roll out the AI solution across your organization with comprehensive training and change management support."
              },
              {
                step: 5,
                title: "Optimization & Scaling",
                description: "Continuous monitoring, refinement, and expansion of automation capabilities based on performance data."
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

      {/* ROI Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl" data-testid="heading-roi">
                      Proven ROI in 90 Days
                    </h2>
                    <p className="text-lg text-muted-foreground" data-testid="text-roi-description">
                      Our clients typically see measurable returns within the first quarter of implementation.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        <span className="font-semibold" data-testid="roi-metric-cost-reduction">Average 60% cost reduction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-primary" />
                        <span className="font-semibold" data-testid="roi-metric-processing-speed">75% faster processing times</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-primary" />
                        <span className="font-semibold" data-testid="roi-metric-accuracy">99.5% accuracy improvement</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Link href="/roi-calculator">
                      <Button size="lg" className="w-full" data-testid="button-calculate-savings">
                        Calculate Your Savings
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/book-demo">
                      <Button variant="outline" size="lg" className="w-full" data-testid="button-schedule-consultation">
                        Schedule a Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl" data-testid="heading-cta">
              Ready to Transform Your Operations with AI?
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-cta-description">
              Join forward-thinking companies that are leveraging AI automation to drive efficiency and growth.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" data-testid="button-cta-demo">
                  Book Your Demo Today
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" data-testid="button-cta-contact">
                  Contact Our Team
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
