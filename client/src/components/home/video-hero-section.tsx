import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Play, Pause, CheckCircle, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { useState, useRef } from 'react';
import videoFile from '@assets/Zuzo Ltd Gitex - Oct 7_ 2025_1760910955846-DS4WSt0i_1763928463966.mp4';
import videoPoster from '@assets/generated_images/zuzo_ghana_contact_center_team.png';

export function VideoHeroSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPauseButton, setShowPauseButton] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleMouseEnter = () => {
        if (isPlaying) {
            setShowPauseButton(true);
        }
    };

    const handleMouseLeave = () => {
        setShowPauseButton(false);
    };

    return (
        <section className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-visible">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            radial-gradient(at 0% 0%, hsl(210, 100%, 50%) 0px, transparent 50%),
                            radial-gradient(at 100% 0%, hsl(280, 100%, 50%) 0px, transparent 50%),
                            radial-gradient(at 100% 100%, hsl(210, 100%, 50%) 0px, transparent 50%),
                            radial-gradient(at 0% 100%, hsl(280, 100%, 50%) 0px, transparent 50%)
                        `,
                    }}
                ></div>
            </div>

            {/* Sophisticated Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                        linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    maskImage:
                        'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
                    WebkitMaskImage:
                        'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
                }}
            ></div>

            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[80px]"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 lg:py-32 pb-32 lg:pb-40">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch max-w-7xl mx-auto">
                    {/* Left Column - Content */}
                    <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in flex flex-col justify-center">
                        {/* Trust Badge with Glassmorphism */}
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg w-fit mx-auto lg:mx-0">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span>Trusted by 500+ businesses worldwide</span>
                        </div>

                        {/* Main Headline with Gradient Text */}
                        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7.5xl leading-[1.1] space-y-2">
                            <span className="block text-white">Stop Losing</span>
                            <span className="block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                                    Customers
                                </span>
                                <span className="text-white"> to</span>
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80">
                                Poor Support
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Get world-class customer support, sales, and admin teams powered by{' '}
                            <span className="text-white font-semibold">AI automation</span> and{' '}
                            <span className="text-white font-semibold">omnichannel technology</span>
                        </p>

                        {/* Key Benefits - Modern Cards */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            {[
                                {
                                    icon: TrendingUp,
                                    text: '60% Cost Reduction',
                                    color: 'from-green-500 to-emerald-600',
                                },
                                {
                                    icon: Sparkles,
                                    text: '48-Hour Launch',
                                    color: 'from-blue-500 to-cyan-600',
                                },
                                {
                                    icon: CheckCircle,
                                    text: 'Scale Instantly',
                                    color: 'from-purple-500 to-pink-600',
                                },
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}
                                    ></div>
                                    <div className="relative flex items-center gap-3">
                                        <div
                                            className={`p-2 rounded-lg bg-gradient-to-br ${benefit.color}`}
                                        >
                                            <benefit.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <span className="font-semibold text-white text-sm md:text-base">
                                            {benefit.text}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Link href="/book-demo">
                                <Button
                                    size="lg"
                                    className="text-base px-8 py-7 h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
                                    data-testid="button-hero-book-demo"
                                >
                                    Get Your Free Strategy Session
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/roi-calculator">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-base px-8 py-7 h-auto bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
                                    data-testid="button-hero-roi-calculator"
                                >
                                    <Play className="mr-2 h-5 w-5" />
                                    Calculate Savings
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Note */}
                        <p className="text-sm text-slate-400 pt-2">
                            ✓ No credit card • ✓ 30-minute consultation • ✓ No commitment
                        </p>
                    </div>

                    {/* Right Column - Video */}
                    <div className="relative group animate-fade-in pb-8 lg:pb-0 flex items-stretch">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500"></div>

                        {/* Video Container */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-500 bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col w-full">
                            <div 
                                className="relative flex-1 cursor-pointer"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <video
                                    ref={videoRef}
                                    controls
                                    preload="metadata"
                                    poster={videoPoster}
                                    className="w-full h-full object-cover"
                                    data-testid="video-hero-player"
                                    aria-label="ZuZo company overview video showcasing BPO solutions"
                                    onPlay={handlePlay}
                                    onPause={handlePause}
                                >
                                    <source src={videoFile} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                {/* Enhanced Video Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>

                                {/* Play Button Overlay (when paused) */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Play className="h-10 w-10 text-white ml-1" fill="white" />
                                        </div>
                                    </div>
                                )}

                                {/* Pause Button Overlay (when playing and hovering) */}
                                {isPlaying && showPauseButton && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center transition-opacity duration-300">
                                            <Pause className="h-10 w-10 text-white" fill="white" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Modern Video Caption */}
                            <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 p-6 backdrop-blur-sm">
                                <div className="flex items-center justify-center gap-4">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 backdrop-blur-md ring-2 ring-white/30">
                                        <Play className="h-6 w-6 text-white" fill="white" />
                                    </div>
                                    <div className="flex-1 text-center">
                                        <div className="font-bold text-white text-base mb-1">
                                            3-Minute Overview
                                        </div>
                                        <div className="text-sm text-white/90">
                                            See how ZuZo transforms customer operations
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats Cards */}
                        <div className="absolute bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl hidden lg:block animate-float z-20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/20 rounded-lg">
                                    <CheckCircle className="h-5 w-5 text-green-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">500+</div>
                                    <div className="text-xs text-slate-300">Happy Clients</div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="absolute top-4 right-4 lg:-top-6 lg:-right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl hidden lg:block animate-float z-20"
                            style={{ animationDelay: '1s' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <TrendingUp className="h-5 w-5 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">60%</div>
                                    <div className="text-xs text-slate-300">Cost Savings</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}