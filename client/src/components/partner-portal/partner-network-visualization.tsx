import { motion } from 'framer-motion';

export function PartnerNetworkVisualization() {
    return (
        <div className="relative w-full max-w-6xl h-96">
            {/* Animated gradient background orbs */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/40 to-transparent rounded-full blur-3xl"
                    animate={{ y: [-50, 50, -50], x: [-30, 30, -30] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-600/30 to-transparent rounded-full blur-3xl"
                    animate={{ y: [50, -50, 50], x: [30, -30, 30] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-t from-blue-600/25 to-transparent rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Network SVG */}
            <svg
                className="w-full h-full"
                viewBox="0 0 1000 400"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                    </linearGradient>
                    <filter id="nodeglow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="lineglow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="nodeGrad1" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#A78BFA" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="nodeGrad2" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#818CF8" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="nodeGrad3" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="#C7F0D8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="nodeGrad4" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="#CFFAFE" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="1" />
                    </radialGradient>
                </defs>

                {/* Animated connection lines */}
                <motion.g>
                    <motion.line
                        x1="150"
                        y1="200"
                        x2="350"
                        y2="120"
                        stroke="url(#lineGradient1)"
                        strokeWidth="2.5"
                        filter="url(#lineglow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.8 }}
                    />
                    <motion.line
                        x1="150"
                        y1="200"
                        x2="350"
                        y2="280"
                        stroke="url(#lineGradient1)"
                        strokeWidth="2.5"
                        filter="url(#lineglow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.9 }}
                    />
                    <motion.line
                        x1="350"
                        y1="120"
                        x2="500"
                        y2="200"
                        stroke="url(#lineGradient2)"
                        strokeWidth="3.5"
                        filter="url(#lineglow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.line
                        x1="350"
                        y1="280"
                        x2="500"
                        y2="200"
                        stroke="url(#lineGradient2)"
                        strokeWidth="3.5"
                        filter="url(#lineglow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.1 }}
                    />
                    <motion.line
                        x1="500"
                        y1="200"
                        x2="650"
                        y2="120"
                        stroke="url(#lineGradient1)"
                        strokeWidth="2.5"
                        filter="url(#lineglow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.2 }}
                    />
                    <motion.line
                        x1="500"
                        y1="200"
                        x2="650"
                        y2="280"
                        stroke="url(#lineGradient1)"
                        strokeWidth="2.5"
                        filter="url(#lineglow)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.3 }}
                    />
                </motion.g>

                {/* Glow rings */}
                <motion.circle
                    cx="150"
                    cy="200"
                    r="50"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="1"
                    opacity="0.3"
                    animate={{ r: [50, 70, 50] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.circle
                    cx="500"
                    cy="200"
                    r="60"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    opacity="0.4"
                    animate={{ r: [60, 85, 60] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.circle
                    cx="650"
                    cy="120"
                    r="40"
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="1"
                    opacity="0.3"
                    animate={{ r: [40, 55, 40] }}
                    transition={{ duration: 3.2, repeat: Infinity }}
                />

                {/* Nodes */}
                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: 'spring', stiffness: 80 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <circle cx="150" cy="200" r="35" fill="url(#nodeGrad1)" filter="url(#nodeglow)" />
                    <circle
                        cx="150"
                        cy="200"
                        r="35"
                        fill="none"
                        stroke="#A78BFA"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                </motion.g>

                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9, type: 'spring', stiffness: 80 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <circle cx="350" cy="120" r="28" fill="url(#nodeGrad2)" filter="url(#nodeglow)" />
                    <circle
                        cx="350"
                        cy="120"
                        r="28"
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                </motion.g>

                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: 'spring', stiffness: 80 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <circle cx="350" cy="280" r="28" fill="url(#nodeGrad2)" filter="url(#nodeglow)" />
                    <circle
                        cx="350"
                        cy="280"
                        r="28"
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                </motion.g>

                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring', stiffness: 80 }}
                    whileHover={{ scale: 1.25 }}
                >
                    <motion.circle
                        cx="500"
                        cy="200"
                        r="45"
                        fill="url(#nodeGrad3)"
                        filter="url(#nodeglow)"
                        animate={{ opacity: [1, 0.9, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <circle
                        cx="500"
                        cy="200"
                        r="45"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        opacity="0.6"
                    />
                </motion.g>

                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, type: 'spring', stiffness: 80 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <circle cx="650" cy="120" r="28" fill="url(#nodeGrad4)" filter="url(#nodeglow)" />
                    <circle
                        cx="650"
                        cy="120"
                        r="28"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                </motion.g>

                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: 'spring', stiffness: 80 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <circle cx="650" cy="280" r="28" fill="url(#nodeGrad4)" filter="url(#nodeglow)" />
                    <circle
                        cx="650"
                        cy="280"
                        r="28"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                </motion.g>
            </svg>

            {/* Labels */}
            <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
            >
                <div className="text-lg font-bold text-purple-200 mb-1">Your Clients</div>
                <div className="text-xs text-purple-400/60">Client relationships</div>
            </motion.div>

            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="relative"
                >
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                        ZuZo Engine
                    </div>
                    <div className="text-xs text-blue-400/60 mt-1">Global execution hub</div>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 text-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9 }}
            >
                <div className="text-lg font-bold text-cyan-200 mb-1">24/7 Delivery</div>
                <div className="text-xs text-cyan-400/60">Real-time results</div>
            </motion.div>
        </div>
    );
}

