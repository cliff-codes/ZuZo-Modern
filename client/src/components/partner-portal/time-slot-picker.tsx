import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Sun, Moon, Sunset } from 'lucide-react';

interface TimeSlot {
    time: string;
    available: boolean;
}

interface TimePeriod {
    label: string;
    icon: React.ReactNode;
    slots: TimeSlot[];
    color: string;
}

interface TimeSlotPickerProps {
    selectedDate?: Date;
    onTimeSelect?: (time: string) => void;
    selectedTime?: string;
}

// Simple hash function for deterministic availability
const hashString = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
};

// Generate time slots for a day (30-minute intervals from 6 AM to 10 PM)
const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    for (let hour = 6; hour < 22; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            // Use hash for deterministic availability (same time = same availability)
            const hash = hashString(timeString);
            slots.push({
                time: timeString,
                available: (hash % 10) < 7, // ~70% available, but deterministic
            });
        }
    }
    return slots;
};

const formatTime = (time: string, format: '12h' | '24h' = '12h'): string => {
    const [hours, minutes] = time.split(':').map(Number);
    if (format === '24h') {
        return time;
    }
    const period = hours >= 12 ? 'pm' : 'am';
    const displayHour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    return `${displayHour}:${minutes.toString().padStart(2, '0')} ${period}`;
};

const groupTimeSlots = (slots: TimeSlot[]): TimePeriod[] => {
    const morning: TimeSlot[] = [];
    const afternoon: TimeSlot[] = [];
    const evening: TimeSlot[] = [];

    slots.forEach((slot) => {
        const hour = parseInt(slot.time.split(':')[0]);
        if (hour >= 6 && hour < 12) {
            morning.push(slot);
        } else if (hour >= 12 && hour < 17) {
            afternoon.push(slot);
        } else {
            evening.push(slot);
        }
    });

    return [
        {
            label: 'Morning',
            icon: <Sun className="h-4 w-4" />,
            slots: morning,
            color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
        },
        {
            label: 'Afternoon',
            icon: <Sunset className="h-4 w-4" />,
            slots: afternoon,
            color: 'from-orange-500/20 to-pink-500/20 border-orange-500/30',
        },
        {
            label: 'Evening',
            icon: <Moon className="h-4 w-4" />,
            slots: evening,
            color: 'from-purple-500/20 to-blue-500/20 border-purple-500/30',
        },
    ];
};

export function TimeSlotPicker({
    selectedDate,
    onTimeSelect,
    selectedTime,
}: TimeSlotPickerProps) {
    const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
    const [activePeriod, setActivePeriod] = useState<string>('Morning');
    
    // Memoize slots to prevent regeneration on every render
    const allSlots = useMemo(() => generateTimeSlots(), []);
    const periods = useMemo(() => groupTimeSlots(allSlots), [allSlots]);

    const handleTimeSelect = (time: string) => {
        if (onTimeSelect) {
            onTimeSelect(time);
        }
    };

    const activePeriodData = periods.find((p) => p.label === activePeriod) || periods[0];

    return (
        <div className="w-full">
            {/* Time Format Toggle */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>
                        {selectedDate
                            ? selectedDate.toLocaleDateString('en-US', {
                                  weekday: 'short',
                                  month: 'short',
                                  day: 'numeric',
                              })
                            : 'Select a date'}
                    </span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1">
                    <button
                        onClick={() => setTimeFormat('12h')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                            timeFormat === '12h'
                                ? 'bg-purple-600 text-white'
                                : 'text-white/60 hover:text-white/80'
                        }`}
                    >
                        12h
                    </button>
                    <button
                        onClick={() => setTimeFormat('24h')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                            timeFormat === '24h'
                                ? 'bg-purple-600 text-white'
                                : 'text-white/60 hover:text-white/80'
                        }`}
                    >
                        24h
                    </button>
                </div>
            </div>

            {/* Period Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
                {periods.map((period) => (
                    <button
                        key={period.label}
                        onClick={() => setActivePeriod(period.label)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                            activePeriod === period.label
                                ? `bg-gradient-to-r ${period.color} border-2 text-white`
                                : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white/80'
                        }`}
                    >
                        {period.icon}
                        <span>{period.label}</span>
                        <span className="text-xs opacity-70">
                            ({period.slots.filter((s) => s.available).length})
                        </span>
                    </button>
                ))}
            </div>

            {/* Time Slots Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activePeriod}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-[400px] overflow-y-auto scrollbar-hide pr-2"
                >
                    {activePeriodData.slots.map((slot) => (
                        <motion.button
                            key={slot.time}
                            onClick={() => slot.available && handleTimeSelect(slot.time)}
                            disabled={!slot.available}
                            className={`relative px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                selectedTime === slot.time
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                                    : slot.available
                                    ? 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:scale-105'
                                    : 'bg-white/5 border border-white/5 text-white/30 cursor-not-allowed opacity-50'
                            }`}
                            whileHover={slot.available ? { scale: 1.05 } : {}}
                            whileTap={slot.available ? { scale: 0.95 } : {}}
                        >
                            {formatTime(slot.time, timeFormat)}
                            {selectedTime === slot.time && (
                                <motion.div
                                    layoutId="selectedTime"
                                    className="absolute inset-0 rounded-lg border-2 border-purple-400"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {activePeriodData.slots.filter((s) => s.available).length === 0 && (
                <div className="text-center py-12 text-white/50">
                    <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">No available slots in this period</p>
                </div>
            )}
        </div>
    );
}

