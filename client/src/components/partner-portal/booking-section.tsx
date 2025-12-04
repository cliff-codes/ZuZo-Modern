import { motion } from 'framer-motion';
import Cal from '@calcom/embed-react';
import { CheckCircle, Calendar, Phone, Mail } from 'lucide-react';

export function BookingSection() {
    return (
        <section
            id="book-call"
            className="py-20 lg:py-28 bg-gradient-to-b from-[#0a0f1a] to-[#0d1321]"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">
                            Book Your Partner Call
                        </span>
                    </div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                        data-testid="text-booking-title"
                    >
                        Let's Build Your{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Margin Engine
                        </span>
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                        Schedule a 30-minute strategy session with our Partner Success team. No
                        obligations—just a conversation about your growth goals.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Partner Benefits Bar */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Free strategy session</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Custom margin analysis</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>No commitment required</span>
                        </div>
                    </div>

                    {/* Cal.com Embed */}
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-white shadow-2xl shadow-purple-500/10">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-6 text-center">
                            <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">
                                Pick a Time That Works for You
                            </h3>
                            <p className="text-white/80 text-sm md:text-base">
                                30-minute partner strategy session via Microsoft Teams
                            </p>
                        </div>
                        <div data-testid="partner-cal-booking-embed">
                            <Cal
                                namespace="partner-30min"
                                calLink="zuzo-ltd/30min"
                                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                                config={{ layout: 'month_view' }}
                            />
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/50 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <a
                                href="tel:+233240526570"
                                className="hover:text-white/70 transition-colors"
                            >
                                Prefer a call? +233 24 052 6570
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <a
                                href="mailto:partners@zuzogp.com"
                                className="hover:text-white/70 transition-colors"
                            >
                                partners@zuzogp.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

