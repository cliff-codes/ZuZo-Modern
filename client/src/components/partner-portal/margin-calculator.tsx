import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BarChart3, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

export function MarginCalculator() {
    const [agents, setAgents] = useState(10);
    const [hourlyWage, setHourlyWage] = useState(25);

    const zuzoRate = 9;
    const hoursPerMonth = 160;

    const currentMonthlyCost = agents * hourlyWage * hoursPerMonth;
    const zuzoMonthlyCost = agents * zuzoRate * hoursPerMonth;
    const monthlyMargin = currentMonthlyCost - zuzoMonthlyCost;
    const annualMargin = monthlyMargin * 12;

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <section
            id="calculator"
            className="relative py-20 lg:py-28 bg-[#0a0f1a] overflow-hidden"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-600/30 to-cyan-600/20 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-600/20 to-green-600/10 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <motion.div
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/30 to-cyan-600/30 border border-green-500/50 px-4 py-2 rounded-full mb-6"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(16, 185, 129, 0.3)',
                                    '0 0 40px rgba(34, 197, 94, 0.2)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <BarChart3 className="h-4 w-4 text-green-400" />
                            <span className="text-green-300 text-sm font-medium">
                                Interactive ROI Calculator
                            </span>
                        </motion.div>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                            data-testid="text-calculator-title"
                        >
                            See Your Margin Growth Live
                        </h2>
                        <p className="text-white/70 text-lg">
                            See how much margin you're leaving on the table.
                        </p>
                    </div>

                    <motion.div
                        className="relative"
                        animate={{
                            boxShadow: [
                                '0 0 30px rgba(34, 197, 94, 0.2)',
                                '0 0 60px rgba(34, 197, 94, 0.3)',
                                '0 0 30px rgba(34, 197, 94, 0.2)',
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Card
                            className="bg-gradient-to-br from-[#1a1f35] via-[#0f2f2a] to-[#0d1321] border-2 border-green-500/50 relative overflow-hidden"
                            data-testid="card-calculator"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-cyan-600/5 opacity-50" />
                            <CardContent className="p-8 lg:p-12 relative z-10">
                                <div className="grid lg:grid-cols-2 gap-12">
                                    {/* Inputs */}
                                    <div className="space-y-8">
                                        <div>
                                            <Label className="text-white/80 text-sm mb-4 block">
                                                Number of US/Canada Agents
                                            </Label>
                                            <div className="flex items-center gap-4">
                                                <Slider
                                                    value={[agents]}
                                                    onValueChange={(value) => setAgents(value[0])}
                                                    min={1}
                                                    max={50}
                                                    step={1}
                                                    className="flex-1"
                                                    data-testid="slider-agents"
                                                />
                                                <div className="w-16 text-center">
                                                    <span className="text-2xl font-bold text-white">
                                                        {agents}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-xs text-white/40 mt-2">
                                                <span>1</span>
                                                <span>50</span>
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-white/80 text-sm mb-4 block">
                                                Current Hourly Wage (USD)
                                            </Label>
                                            <div className="flex items-center gap-4">
                                                <Slider
                                                    value={[hourlyWage]}
                                                    onValueChange={(value) =>
                                                        setHourlyWage(value[0])
                                                    }
                                                    min={15}
                                                    max={50}
                                                    step={1}
                                                    className="flex-1"
                                                    data-testid="slider-wage"
                                                />
                                                <div className="w-20 text-center">
                                                    <span className="text-2xl font-bold text-white">
                                                        ${hourlyWage}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-xs text-white/40 mt-2">
                                                <span>$15</span>
                                                <span>$50</span>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="text-white/50">Your Current Cost</span>
                                                    <div className="text-xl font-bold text-red-400 mt-1">
                                                        {formatCurrency(currentMonthlyCost)}/mo
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-white/50">ZuZo Cost (@$9/hr)</span>
                                                    <div className="text-xl font-bold text-green-400 mt-1">
                                                        {formatCurrency(zuzoMonthlyCost)}/mo
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Output */}
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <div className="text-white/50 text-lg mb-4">
                                            Annual Margin Reclaimed
                                        </div>
                                        <motion.div
                                            key={annualMargin}
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="relative"
                                        >
                                            <div
                                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-400"
                                                data-testid="text-annual-savings"
                                            >
                                                {formatCurrency(annualMargin)}
                                            </div>
                                            <div className="absolute -inset-4 bg-green-400/10 blur-2xl rounded-full -z-10" />
                                        </motion.div>
                                        <p className="text-white/40 mt-6 text-sm max-w-xs">
                                            Based on {agents} agents at {hoursPerMonth} hours/month
                                        </p>
                                        <Link href="/book-demo">
                                            <Button
                                                size="lg"
                                                className="mt-8 bg-green-600 hover:bg-green-700 text-white border-0 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
                                                data-testid="button-claim-margin"
                                            >
                                                Claim Your Margin
                                                <ChevronRight className="ml-2 h-5 w-5" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

