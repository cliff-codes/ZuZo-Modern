import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Shield, Zap, Building2, CheckCircle } from 'lucide-react';

const tracks = [
    {
        id: 'msp',
        icon: Server,
        category: 'For MSPs',
        title: 'Tier 1 Helpdesk, Solved.',
        description: 'Stop burning out US engineers on password resets. 24/7 coverage starting at',
        highlight: '$8/hr',
        feature: 'ConnectWise & Autotask Ready',
        gradient: 'from-purple-950/40 via-[#1a1f35] to-[#0d1321]',
        border: 'border-purple-500/30 hover:border-purple-400/60',
        shadow: 'hover:shadow-purple-500/20',
        iconBg: 'from-purple-600/40 to-purple-600/10',
        iconBorder: 'border-purple-500/30',
        iconColor: 'text-purple-300',
        textColor: 'text-purple-300',
        delay: 0.1,
    },
    {
        id: 'master-agent',
        icon: Shield,
        category: 'For Master Agents',
        title: 'Zero-Churn Fulfillment.',
        description: '',
        highlight: '4.7/5 CSAT scores',
        highlightText: 'that protect your reputation and your residuals.',
        feature: 'Salesforce & HubSpot Integration',
        gradient: 'from-blue-950/40 via-[#1a1f35] to-[#0d1321]',
        border: 'border-blue-500/30 hover:border-blue-400/60',
        shadow: 'hover:shadow-blue-500/20',
        iconBg: 'from-blue-600/40 to-blue-600/10',
        iconBorder: 'border-blue-500/30',
        iconColor: 'text-blue-300',
        textColor: 'text-blue-300',
        delay: 0.2,
    },
    {
        id: 'ndis',
        icon: Zap,
        category: 'For NDIS Providers',
        title: 'Overnight Claim Processing.',
        description: 'We process claims while Australia sleeps.',
        highlight: 'Wake up to a cleared queue.',
        feature: 'NDIS Portal Certified',
        gradient: 'from-cyan-950/40 via-[#1a1f35] to-[#0d1321]',
        border: 'border-cyan-500/30 hover:border-cyan-400/60',
        shadow: 'hover:shadow-cyan-500/20',
        iconBg: 'from-cyan-600/40 to-cyan-600/10',
        iconBorder: 'border-cyan-500/30',
        iconColor: 'text-cyan-300',
        textColor: 'text-cyan-300',
        delay: 0.3,
    },
    {
        id: '3pl',
        icon: Building2,
        category: 'For Fulfillment Centers',
        title: 'The WISMO Killer.',
        description: '"Where Is My Order?" tickets eating your margins?',
        highlight: 'We handle them for $1.80/ticket.',
        feature: 'ShipStation & Shopify Ready',
        gradient: 'from-orange-950/40 via-[#1a1f35] to-[#0d1321]',
        border: 'border-orange-500/30 hover:border-orange-400/60',
        shadow: 'hover:shadow-orange-500/20',
        iconBg: 'from-orange-600/40 to-orange-600/10',
        iconBorder: 'border-orange-500/30',
        iconColor: 'text-orange-300',
        textColor: 'text-orange-300',
        delay: 0.4,
    },
];

export function PartnerTracksSection() {
    return (
        <section id="partner-tracks" className="py-20 lg:py-28 bg-[#0d1321]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                        data-testid="text-partner-tracks-title"
                    >
                        Choose Your Partner Track
                    </h2>
                    <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
                        Premium service delivery at emerging market rates. Your margin is our mission.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {tracks.map((track) => {
                        const Icon = track.icon;
                        return (
                            <motion.div
                                key={track.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: track.delay }}
                                className="group"
                            >
                                <Card
                                    className={`relative bg-gradient-to-br ${track.gradient} border-2 ${track.border} h-full overflow-hidden transition-all duration-300 hover:shadow-lg ${track.shadow}`}
                                    data-testid={`card-${track.id}`}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${track.iconBg.replace('/40', '/5')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    />
                                    <CardContent className="p-8 relative z-10">
                                        <motion.div
                                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${track.iconBg} flex items-center justify-center mb-6 border ${track.iconBorder}`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Icon className={`h-8 w-8 ${track.iconColor}`} />
                                        </motion.div>
                                        <div
                                            className={`${track.textColor} text-xs font-semibold uppercase tracking-widest mb-3 opacity-80`}
                                        >
                                            {track.category}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {track.title}
                                        </h3>
                                        <p className="text-white/70 leading-relaxed mb-6">
                                            {track.description && (
                                                <>
                                                    {track.description}{' '}
                                                    <span className={`${track.textColor} font-bold`}>
                                                        {track.highlight}
                                                    </span>
                                                </>
                                            )}
                                            {track.highlightText && (
                                                <>
                                                    <span className={`${track.textColor} font-bold`}>
                                                        {track.highlight}
                                                    </span>{' '}
                                                    {track.highlightText}
                                                </>
                                            )}
                                        </p>
                                        <div className={`pt-6 border-t ${track.border.replace('border-', 'border-').replace('/30', '/20')}`}>
                                            <div className={`flex items-center gap-2 ${track.textColor}/90 text-sm`}>
                                                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                                                <span>{track.feature}</span>
                                            </div>
                                        </div>
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

