import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Network, ArrowDown } from 'lucide-react';
import { PartnerNetworkVisualization } from './partner-network-visualization';

interface PartnerHeroProps {
    onScrollToCalculator: () => void;
}

export function PartnerHero({ onScrollToCalculator }: PartnerHeroProps) {
    return (
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full mb-8"
                    >
                        <Network className="h-4 w-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">Partner Program</span>
                    </motion.div>

                    <h1
                        className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight"
                        data-testid="text-hero-headline"
                    >
                        Scale Your Margins,{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Not Your Headcount.
                        </span>
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
                        data-testid="text-hero-subheadline"
                    >
                        The invisible fulfillment engine for MSPs, 3PLs, and NDIS Providers.
                        <span className="text-white font-medium">
                            {' '}
                            You own the client relationship;{' '}
                        </span>
                        we power the delivery from Ghana.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            onClick={onScrollToCalculator}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 text-lg px-8 py-6 h-auto shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
                            data-testid="button-calculate-margin"
                        >
                            Calculate Your Margin Impact
                            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Network Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    className="mt-24 flex justify-center"
                >
                    <PartnerNetworkVisualization />
                </motion.div>
            </div>
        </section>
    );
}

