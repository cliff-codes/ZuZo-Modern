import { CheckCircle, Search, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Assessment",
    description: "We analyze your operations to identify bottlenecks, inefficiencies, and opportunities for optimization.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Custom Solution Design",
    description: "Tailored BPO solutions built specifically for your industry, workflow, and business objectives.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "48-Hour Deployment",
    description: "Rapid implementation with trained professionals integrated seamlessly into your existing systems.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Continuous Optimization",
    description: "Ongoing performance monitoring, quality assurance, and strategic improvements to maximize ROI.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-24 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            How We Transform Your Operations
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven 4-step methodology ensures rapid deployment and measurable results from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`step-${index + 1}`}>
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}

                {/* Step Card */}
                <div className="relative">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary text-primary-foreground mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="font-heading font-bold text-4xl text-primary/20 absolute top-0 right-0">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-success/10 border border-success/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-heading font-semibold text-2xl">2 Weeks</span>
            </div>
            <p className="text-sm text-muted-foreground">Average Implementation Time</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-success/10 border border-success/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-heading font-semibold text-2xl">90%+</span>
            </div>
            <p className="text-sm text-muted-foreground">Client Satisfaction Score</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-success/10 border border-success/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-heading font-semibold text-2xl">60%</span>
            </div>
            <p className="text-sm text-muted-foreground">Average Cost Reduction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
