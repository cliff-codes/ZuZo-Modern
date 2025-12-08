import { useState } from 'react';
import { motion } from 'framer-motion';
import Cal from '@calcom/embed-react';
import { CheckCircle, Calendar, Phone, Mail } from 'lucide-react';
import { TimeSlotPicker } from './time-slot-picker';

export function BookingSection() {
    const [selectedDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | undefined>();
    const [showCalEmbed, setShowCalEmbed] = useState(false);

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        // Optionally trigger Cal.com booking flow
        setShowCalEmbed(true);
    };

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

                    {/* Enhanced Time Selection */}
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-2xl shadow-purple-500/10 backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-6 text-center">
                            <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">
                                Pick a Time That Works for You
                            </h3>
                            <p className="text-white/80 text-sm md:text-base">
                                30-minute partner strategy session via Microsoft Teams
                            </p>
                        </div>
                        <div className="p-6 bg-[#0a0f1a]">
                            {!showCalEmbed ? (
                                <TimeSlotPicker
                                    selectedDate={selectedDate}
                                    selectedTime={selectedTime}
                                    onTimeSelect={handleTimeSelect}
                                />
                            ) : (
                                <div className="space-y-4">
                                    {selectedTime && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                                        >
                                            <p className="text-green-400 font-medium mb-2">
                                                Selected Time: {selectedTime}
                                            </p>
                                            <button
                                                onClick={() => {
                                                    setShowCalEmbed(false);
                                                    setSelectedTime(undefined);
                                                }}
                                                className="text-sm text-white/70 hover:text-white transition-colors"
                                            >
                                                Choose a different time
                                            </button>
                                        </motion.div>
                                    )}
                                    <div
                                        className="rounded-lg overflow-hidden bg-white"
                                        data-testid="partner-cal-booking-embed"
                                    >
                                        <Cal
                                            namespace="partner-30min"
                                            calLink="zuzo-ltd/30min"
                                            style={{
                                                width: '100%',
                                                height: '600px',
                                                overflow: 'auto',
                                            }}
                                            config={{ layout: 'month_view' }}
                                        />
                                    </div>
                                </div>
                            )}
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
