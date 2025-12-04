import { CheckCircle, Search, Settings, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Discovery & Assessment',
        description:
            'We analyze your operations to identify bottlenecks, inefficiencies, and opportunities for optimization.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        number: '02',
        icon: Settings,
        title: 'Custom Solution Design',
        description:
            'Tailored BPO solutions built specifically for your industry, workflow, and business objectives.',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        number: '03',
        icon: Rocket,
        title: '48-Hour Deployment',
        description:
            'Rapid implementation with trained professionals integrated seamlessly into your existing systems.',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        number: '04',
        icon: TrendingUp,
        title: 'Continuous Optimization',
        description:
            'Ongoing performance monitoring, quality assurance, and strategic improvements to maximize ROI.',
        gradient: 'from-green-500 to-emerald-500',
    },
];

export function HowItWorks() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span>Our Process</span>
                    </div>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
                        How We Transform Your Operations
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                        Our proven 4-step methodology ensures rapid deployment and measurable
                        results from day one.
                    </p>
                </div>

                {/* Timeline Steps */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Horizontal Timeline Line (Desktop) */}
                    <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-8 lg:gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLast = index === steps.length - 1;

                            return (
                                <div
                                    key={index}
                                    className="relative group"
                                    data-testid={`step-${index + 1}`}
                                >
                                    {/* Connector Line (Mobile/Tablet) */}
                                    {!isLast && (
                                        <>
                                            <div className="hidden md:block lg:hidden absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                                            <div className="block md:hidden absolute top-8 left-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-transparent"></div>
                                        </>
                                    )}

                                    {/* Step Card */}
                                    <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 group-hover:bg-card/80">
                                        {/* Number Badge and Icon Container with Flex */}
                                        <div className="flex items-center justify-between mb-6">
                                            {/* Step Number Badge */}
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm">
                                                    <span className="text-xs sm:text-sm font-bold text-primary">
                                                        {step.number}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Icon Container */}
                                            <div className="flex-shrink-0 relative">
                                                <div
                                                    className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <Icon
                                                        className="h-7 w-7 sm:h-8 sm:w-8 text-white"
                                                        strokeWidth={2}
                                                    />
                                                </div>
                                                {/* Decorative Glow */}
                                                <div
                                                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-xl transition-opacity duration-300`}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className="font-heading font-bold text-xl sm:text-2xl leading-tight group-hover:text-primary transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Hover Arrow Indicator */}
                                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ArrowRight className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Success Metrics */}
                <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    {[
                        {
                            value: '2 Weeks',
                            label: 'Average Implementation Time',
                            icon: CheckCircle,
                        },
                        { value: '90%+', label: 'Client Satisfaction Score', icon: CheckCircle },
                        { value: '60%', label: 'Average Cost Reduction', icon: CheckCircle },
                    ].map((metric, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-success/5 to-success/10 border border-success/20 rounded-xl p-6 sm:p-8 hover:border-success/40 hover:shadow-lg hover:shadow-success/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-success/20 group-hover:bg-success/30 transition-colors">
                                    <metric.icon className="h-5 w-5 sm:h-6 sm:w-6 text-success" />
                                </div>
                                <span className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                                    {metric.value}
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
