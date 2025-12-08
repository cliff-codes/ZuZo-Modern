import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/home/cta-section';
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: 'Efficiency',
        description:
            'Optimizing processes to deliver maximum value with minimal waste, ensuring our clients achieve our goals effectively.',
    },
    {
        icon: Award,
        title: 'Excellence',
        description:
            'Maintaining the highest standards in service delivery, continuously improving our capabilities to exceed expectations.',
    },
    {
        icon: TrendingUp,
        title: 'Innovation',
        description:
            'Embracing cutting-edge technology and creative solutions to stay ahead in the evolving BPO landscape.',
    },
    {
        icon: Users,
        title: 'Partnership',
        description:
            'Building lasting relationships with clients, acting as an extension of their team rather than just a service provider.',
    },
    {
        icon: Globe,
        title: 'Reliability',
        description:
            'Our 24/7 ContactCare247 commitment ensures consistent, dependable support when businesses need it most.',
    },
];

const stats = [
    { value: '2018', label: 'Founded in Ghana' },
    { value: '500+', label: 'Businesses Served' },
    { value: '60%', label: 'Avg Cost Reduction' },
    { value: '90%+', label: 'Client Satisfaction' },
];

export default function About() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                    <div className="relative container mx-auto px-4 lg:px-8 z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-foreground font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                                Redefining Business Process Outsourcing
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                At ZuZo, we believe outsourcing should amplify your business
                                capabilities, not compromise them. We've transformed the traditional
                                BPO model by combining human expertise, cutting-edge technology, and
                                true partnership.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12 bg-card border-y">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="font-heading font-bold text-4xl text-primary mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 lg:py-24">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <Card className="hover-elevate transition-all">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                        <Target className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="font-heading font-bold text-2xl mb-4">
                                        Our Mission
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To streamline business processes for our clients by
                                        providing world-class BPO services, enabling them to focus
                                        on their core business operations while we deliver
                                        exceptional customer experiences through innovative
                                        technology solutions.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="hover-elevate transition-all">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                        <Eye className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="font-heading font-bold text-2xl mb-4">
                                        Our Vision
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To be the leading BPO service provider in Ghana and across
                                        Africa, recognized for our efficiency, effectiveness, and
                                        commitment to creating lasting partnerships with businesses
                                        worldwide.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20 lg:py-24 bg-card/50">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                The principles that guide everything we do at ZuZo.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <Card key={index} className="hover-elevate transition-all">
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="font-heading font-semibold text-xl mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* The ZuZo Advantage */}
                <section className="py-20 lg:py-24">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">
                                The ZuZo Advantage
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-heading font-semibold text-xl mb-3">
                                        Strategic Location
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Operating from Ghana, we provide businesses with the perfect
                                        balance of cost efficiency and quality delivery. Our
                                        location offers an English-speaking talent pool, favorable
                                        time zones for both European and American business hours,
                                        cost advantages of up to 60% compared to onshore
                                        alternatives, and political stability with growing tech
                                        infrastructure.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-heading font-semibold text-xl mb-3">
                                        Proven Expertise
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our team brings together seasoned professionals with deep
                                        experience across industries including e-commerce, financial
                                        services, healthcare, technology, and professional services.
                                        We don't just execute tasks—we optimize processes and drive
                                        results.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-heading font-semibold text-xl mb-3">
                                        Technology-First Approach
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We leverage cutting-edge UCaaS, CCaaS, VoIP, and cloud
                                        solutions to ensure seamless integration with your existing
                                        systems. Our AI-powered analytics provide real-time insights
                                        that help you make better business decisions.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-heading font-semibold text-xl mb-3">
                                        Scalable Partnership Model
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Whether you need a single virtual assistant or a
                                        comprehensive contact center operation, our flexible
                                        engagement models grow with your business. We can deploy
                                        dedicated teams in as little as 2 weeks, with built-in
                                        scalability for peak periods or rapid expansion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </div>
    );
}