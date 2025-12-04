import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

interface Resource {
    id: string;
    title: string;
    description: string;
    color: 'cyan' | 'purple' | 'orange';
    testId: string;
}

const resources: Resource[] = [
    {
        id: 'ndis',
        title: 'Australia NDIS Growth Pack',
        description: 'How to double your plan management capacity without hiring locally.',
        color: 'cyan',
        testId: 'card-ndis-pack',
    },
    {
        id: 'msp',
        title: 'The MSP Night Shift Protocol',
        description: 'A guide to profitable 24/7 coverage for US/Canadian MSPs.',
        color: 'purple',
        testId: 'card-msp-pack',
    },
    {
        id: 'peak-season',
        title: 'Peak Season Survival Guide',
        description: 'Scale your support team from 5 to 50 agents for Black Friday—without hiring.',
        color: 'orange',
        testId: 'card-peak-season',
    },
];

interface ResourcesSectionProps {
    onDownloadClick: (assetName: string) => void;
}

export function ResourcesSection({ onDownloadClick }: ResourcesSectionProps) {
    const colorClasses = {
        cyan: {
            border: 'border-cyan-500/20 hover:border-cyan-500/40',
            iconBg: 'bg-cyan-600/20',
            iconColor: 'text-cyan-400',
            button: 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-600/20 hover:text-cyan-300',
        },
        purple: {
            border: 'border-purple-500/20 hover:border-purple-500/40',
            iconBg: 'bg-purple-600/20',
            iconColor: 'text-purple-400',
            button: 'border-purple-500/30 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300',
        },
        orange: {
            border: 'border-orange-500/20 hover:border-orange-500/40',
            iconBg: 'bg-orange-600/20',
            iconColor: 'text-orange-400',
            button: 'border-orange-500/30 text-orange-400 hover:bg-orange-600/20 hover:text-orange-300',
        },
    };

    return (
        <section id="resources" className="py-20 lg:py-28 bg-[#0a0f1a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                        data-testid="text-resources-title"
                    >
                        Partner Resources
                    </h2>
                    <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
                        Exclusive playbooks to accelerate your growth.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {resources.map((resource, index) => {
                        const colors = colorClasses[resource.color];
                        return (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index + 1) * 0.1 }}
                            >
                                <Card
                                    className={`bg-gradient-to-br from-[#1a1f35] to-[#0d1321] ${colors.border} h-full transition-all group`}
                                    data-testid={resource.testId}
                                >
                                    <CardContent className="p-8">
                                        <div
                                            className={`w-16 h-20 rounded-lg ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}
                                        >
                                            <FileText className={`h-10 w-10 ${colors.iconColor}`} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {resource.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                                            {resource.description}
                                        </p>
                                        <Button
                                            variant="outline"
                                            className={`w-full ${colors.button}`}
                                            onClick={() => onDownloadClick(resource.title)}
                                            data-testid={`button-download-${resource.id}`}
                                        >
                                            <Download className="mr-2 h-4 w-4" />
                                            Download {resource.id === 'ndis' ? 'Pack' : 'Guide'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

