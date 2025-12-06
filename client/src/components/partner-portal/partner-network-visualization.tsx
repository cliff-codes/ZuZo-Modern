import { motion } from 'framer-motion';
import { Users, Zap, Clock } from 'lucide-react';

export function PartnerNetworkVisualization() {
    return (
        <div className="relative w-full max-w-6xl mx-auto h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden px-4 sm:px-6 md:px-0">
            {/* Animated gradient background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-transparent rounded-full blur-3xl"
                    animate={{ 
                        x: [-50, 50, -50],
                        y: [-30, 30, -30],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-blue-600/25 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-600/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"
                    animate={{ 
                        x: [30, -30, 30],
                        y: [50, -50, 50],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Single SVG - Responsive for both mobile and desktop */}
            <svg
                className="w-full h-full relative z-10"
                viewBox="0 0 1200 500"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Gradients */}
                    <linearGradient id="clientGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C084FC" stopOpacity="1" />
                        <stop offset="100%" stopColor="#9333EA" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="engineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                        <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="deliveryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="1" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
                        <stop offset="50%" stopColor="#818CF8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.7" />
                    </linearGradient>
                    
                    {/* Glow filters */}
                    <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="pulseGlow" x="-200%" y="-200%" width="500%" height="500%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connection Lines - Left to Center */}
                <motion.g>
                    <motion.line
                        x1="200"
                        y1="150"
                        x2="600"
                        y2="200"
                        stroke="url(#flowGradient1)"
                        strokeWidth="4"
                        filter="url(#lineGlow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.line
                        x1="200"
                        y1="250"
                        x2="600"
                        y2="250"
                        stroke="url(#flowGradient1)"
                        strokeWidth="4"
                        filter="url(#lineGlow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                    />
                    <motion.line
                        x1="200"
                        y1="350"
                        x2="600"
                        y2="300"
                        stroke="url(#flowGradient1)"
                        strokeWidth="4"
                        filter="url(#lineGlow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                    />
                </motion.g>

                {/* Connection Lines - Center to Right */}
                <motion.g>
                    <motion.line
                        x1="600"
                        y1="200"
                        x2="1000"
                        y2="150"
                        stroke="url(#flowGradient2)"
                        strokeWidth="4"
                        filter="url(#lineGlow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.1 }}
                    />
                    <motion.line
                        x1="600"
                        y1="250"
                        x2="1000"
                        y2="250"
                        stroke="url(#flowGradient2)"
                        strokeWidth="4"
                        filter="url(#lineGlow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.3 }}
                    />
                    <motion.line
                        x1="600"
                        y1="300"
                        x2="1000"
                        y2="350"
                        stroke="url(#flowGradient2)"
                        strokeWidth="4"
                        filter="url(#lineGlow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                    />
                </motion.g>

                {/* Animated flow particles */}
                {[0, 1, 2].map((i) => (
                    <motion.g key={`particle-left-${i}`}>
                        <motion.circle
                            r="4"
                            fill="#A78BFA"
                            filter="url(#pulseGlow)"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                cx: [200, 600],
                                cy: [150 + i * 100, 200 + (i - 1) * 50],
                            }}
                            transition={{
                                duration: 2,
                                delay: 1 + i * 0.3,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: 'easeInOut',
                            }}
                        />
                    </motion.g>
                ))}
                {[0, 1, 2].map((i) => (
                    <motion.g key={`particle-right-${i}`}>
                        <motion.circle
                            r="4"
                            fill="#22D3EE"
                            filter="url(#pulseGlow)"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                cx: [600, 1000],
                                cy: [200 + i * 50, 150 + i * 100],
                            }}
                            transition={{
                                duration: 2,
                                delay: 2 + i * 0.3,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: 'easeInOut',
                            }}
                        />
                    </motion.g>
                ))}

                {/* Client Nodes (Left) */}
                {[
                    { x: 200, y: 150 },
                    { x: 200, y: 250 },
                    { x: 200, y: 350 },
                ].map((pos, idx) => (
                    <motion.g key={`client-${idx}`}>
                        <motion.circle
                            cx={pos.x}
                            cy={pos.y}
                            r="45"
                            fill="none"
                            stroke="#A78BFA"
                            strokeWidth="2"
                            opacity="0.4"
                            animate={{ r: [45, 60, 45], opacity: [0.4, 0.2, 0.4] }}
                            transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        <motion.circle
                            cx={pos.x}
                            cy={pos.y}
                            r="35"
                            fill="url(#clientGradient)"
                            filter="url(#nodeGlow)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + idx * 0.2, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.15 }}
                        />
                        <circle
                            cx={pos.x}
                            cy={pos.y}
                            r="35"
                            fill="none"
                            stroke="#C084FC"
                            strokeWidth="2"
                            opacity="0.6"
                        />
                    </motion.g>
                ))}

                {/* ZuZo Engine Node (Center) */}
                <motion.g>
                    <motion.circle
                        cx="600"
                        cy="250"
                        r="70"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        opacity="0.3"
                        animate={{ r: [70, 95, 70], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    <motion.circle
                        cx="600"
                        cy="250"
                        r="55"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="2"
                        opacity="0.4"
                        animate={{ r: [55, 75, 55], opacity: [0.4, 0.2, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.circle
                        cx="600"
                        cy="250"
                        r="50"
                        fill="url(#engineGradient)"
                        filter="url(#nodeGlow)"
                        initial={{ scale: 0 }}
                        animate={{ 
                            scale: 1,
                            opacity: [1, 0.95, 1]
                        }}
                        transition={{ 
                            delay: 1,
                            type: 'spring',
                            stiffness: 80,
                            opacity: { duration: 2, repeat: Infinity }
                        }}
                        whileHover={{ scale: 1.2 }}
                    />
                    <circle
                        cx="600"
                        cy="250"
                        r="50"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="2.5"
                        opacity="0.7"
                    />
                    <motion.circle
                        cx="600"
                        cy="250"
                        r="30"
                        fill="#60A5FA"
                        opacity="0.3"
                        animate={{ r: [30, 45, 30], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.g>

                {/* Delivery Nodes (Right) */}
                {[
                    { x: 1000, y: 150 },
                    { x: 1000, y: 250 },
                    { x: 1000, y: 350 },
                ].map((pos, idx) => (
                    <motion.g key={`delivery-${idx}`}>
                        <motion.circle
                            cx={pos.x}
                            cy={pos.y}
                            r="45"
                            fill="none"
                            stroke="#22D3EE"
                            strokeWidth="2"
                            opacity="0.4"
                            animate={{ r: [45, 60, 45], opacity: [0.4, 0.2, 0.4] }}
                            transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        <motion.circle
                            cx={pos.x}
                            cy={pos.y}
                            r="35"
                            fill="url(#deliveryGradient)"
                            filter="url(#nodeGlow)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2 + idx * 0.2, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.15 }}
                        />
                        <circle
                            cx={pos.x}
                            cy={pos.y}
                            r="35"
                            fill="none"
                            stroke="#22D3EE"
                            strokeWidth="2"
                            opacity="0.6"
                        />
                    </motion.g>
                ))}
            </svg>

            {/* Text Labels - Responsive positioning */}
            {/* Your Clients - Left */}
            <motion.div
                className="absolute left-2 sm:left-4 md:left-16 top-[25%] sm:top-[30%] md:top-1/2 md:-translate-y-1/2 text-center z-20 w-[110px] sm:w-[130px] md:w-auto"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, type: 'spring' }}
            >
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="mb-2.5 md:mb-3"
                >
                    <Users className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-purple-400 mx-auto mb-2 md:mb-2" />
                </motion.div>
                <div className="text-base sm:text-lg md:text-xl font-bold text-purple-200 mb-1.5 md:mb-2 leading-snug">
                    Your Clients
                </div>
                <div className="text-xs sm:text-sm md:text-base text-purple-400/70 leading-relaxed">
                    Client relationships
                </div>
            </motion.div>

            {/* ZuZo Engine - Center */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-[160px] sm:w-[180px] md:w-auto px-3 sm:px-4 md:px-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, type: 'spring' }}
            >
                <motion.div
                    animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="mb-3 md:mb-3"
                >
                    <Zap className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-400 mx-auto mb-2 md:mb-2" />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-1.5 md:mb-2 leading-snug">
                        ZuZo Engine
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-blue-400/70 leading-relaxed">
                        Global execution hub
                    </div>
                </motion.div>
            </motion.div>

            {/* 24/7 Delivery - Right */}
            <motion.div
                className="absolute right-2 sm:right-4 md:right-16 top-[75%] sm:top-[70%] md:top-1/2 md:-translate-y-1/2 text-center z-20 w-[110px] sm:w-[130px] md:w-auto"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9, type: 'spring' }}
            >
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="mb-2.5 md:mb-3"
                >
                    <Clock className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-cyan-400 mx-auto mb-2 md:mb-2" />
                </motion.div>
                <div className="text-base sm:text-lg md:text-xl font-bold text-cyan-200 mb-1.5 md:mb-2 leading-snug">
                    24/7 Delivery
                </div>
                <div className="text-xs sm:text-sm md:text-base text-cyan-400/70 leading-relaxed">
                    Real-time results
                </div>
            </motion.div>
        </div>
    );
}
