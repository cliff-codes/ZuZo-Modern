import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SEOHead } from "@/components/seo/seo-head";
import { Link } from "wouter";
import whiteLogo from "@assets/ZUZO LOGO ALL WHITE_1764457099254.png";
import { 
  Server, 
  Shield, 
  Zap, 
  ArrowDown, 
  Users, 
  FileText,
  Download,
  CheckCircle,
  ChevronRight,
  Mail,
  Building2,
  BarChart3,
  Network,
  Menu,
  ExternalLink
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const playbooks = {
  "Australia NDIS Growth Pack": {
    url: "/assets/playbooks/australia-ndis-growth-pack.html",
    filename: "Australia-NDIS-Growth-Pack.html"
  },
  "The MSP Night Shift Protocol": {
    url: "/assets/playbooks/msp-night-shift-protocol.html",
    filename: "MSP-Night-Shift-Protocol.html"
  },
  "Peak Season Survival Guide": {
    url: "/assets/playbooks/peak-season-survival-guide.html",
    filename: "Peak-Season-Survival-Guide.html"
  }
};

export default function PartnerPortal() {
  const [agents, setAgents] = useState(10);
  const [hourlyWage, setHourlyWage] = useState(25);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const zuzoRate = 9;
  const hoursPerMonth = 160;
  
  const currentMonthlyCost = agents * hourlyWage * hoursPerMonth;
  const zuzoMonthlyCost = agents * zuzoRate * hoursPerMonth;
  const monthlyMargin = currentMonthlyCost - zuzoMonthlyCost;
  const annualMargin = monthlyMargin * 12;

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadClick = (assetName: string) => {
    setSelectedAsset(assetName);
    setDownloadModalOpen(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
  };

  const getDownloadUrl = (assetName: string | null) => {
    if (!assetName || !playbooks[assetName as keyof typeof playbooks]) return null;
    return playbooks[assetName as keyof typeof playbooks];
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <SEOHead
        title="Partner Portal - White Label BPO Platform | ZuZo"
        description="Scale your margins, not your headcount. The invisible fulfillment engine for MSPs, 3PLs, and NDIS Providers. White-label BPO from Ghana."
        canonical="/partner-portal"
        keywords="white label BPO, partner program, MSP helpdesk, 3PL logistics, fulfillment center, NDIS claim processing, WISMO support, outsourcing partner"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/">
            <img 
              src={whiteLogo} 
              alt="ZuZo Logo" 
              className="h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              data-testid="link-logo"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#calculator" className="text-white/70 hover:text-white transition-colors text-sm" data-testid="link-calculator">
              Calculator
            </a>
            <a href="#partner-tracks" className="text-white/70 hover:text-white transition-colors text-sm" data-testid="link-partner-tracks">
              Partner Tracks
            </a>
            <a href="#resources" className="text-white/70 hover:text-white transition-colors text-sm" data-testid="link-resources">
              Resources
            </a>
            <Link href="/book-demo">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white border-0" data-testid="button-nav-become-partner">
                Become a Partner
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="text-white" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a0f1a] border-white/10 text-white w-[280px]">
                <VisuallyHidden>
                  <SheetTitle>Partner Portal Navigation</SheetTitle>
                  <SheetDescription>Navigate to different sections of the Partner Portal</SheetDescription>
                </VisuallyHidden>
                <div className="flex flex-col gap-6 mt-8">
                  <Link href="/book-demo">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0" data-testid="button-mobile-become-partner">
                      Become a Partner
                    </Button>
                  </Link>
                  <a href="#calculator" className="text-white/70 hover:text-white transition-colors py-2" data-testid="link-mobile-calculator">
                    Calculator
                  </a>
                  <a href="#partner-tracks" className="text-white/70 hover:text-white transition-colors py-2" data-testid="link-mobile-partner-tracks">
                    Partner Tracks
                  </a>
                  <a href="#resources" className="text-white/70 hover:text-white transition-colors py-2" data-testid="link-mobile-resources">
                    Resources
                  </a>
                  <Link href="/" className="text-white/70 hover:text-white transition-colors py-2">
                    Back to Main Site
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight" data-testid="text-hero-headline">
              Scale Your Margins,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Not Your Headcount.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subheadline">
              The invisible fulfillment engine for MSPs, 3PLs, and NDIS Providers. 
              <span className="text-white font-medium"> You own the client relationship; </span>
              we power the delivery from Ghana.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={scrollToCalculator}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 text-lg px-8 py-6 h-auto"
                data-testid="button-calculate-margin"
              >
                Calculate Your Margin Impact
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Network Visualization - Modern Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="mt-24 flex justify-center"
          >
            <div className="relative w-full max-w-6xl h-96">
              {/* Animated gradient background orbs */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div 
                  className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/40 to-transparent rounded-full blur-3xl"
                  animate={{ y: [-50, 50, -50], x: [-30, 30, -30] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-600/30 to-transparent rounded-full blur-3xl"
                  animate={{ y: [50, -50, 50], x: [30, -30, 30] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-t from-blue-600/25 to-transparent rounded-full blur-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Network SVG */}
              <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
                <defs>
                  {/* Advanced gradients */}
                  <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                  </linearGradient>

                  {/* Enhanced glow filter */}
                  <filter id="nodeglow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Line glow */}
                  <filter id="lineglow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Radial gradient for nodes */}
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

                {/* Animated connection lines with gradient flow */}
                <motion.g>
                  {/* Left to center connections */}
                  <motion.line x1="150" y1="200" x2="350" y2="120" stroke="url(#lineGradient1)" strokeWidth="2.5" filter="url(#lineglow)" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }} />
                  <motion.line x1="150" y1="200" x2="350" y2="280" stroke="url(#lineGradient1)" strokeWidth="2.5" filter="url(#lineglow)" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.9 }} />
                  
                  {/* Center connections */}
                  <motion.line x1="350" y1="120" x2="500" y2="200" stroke="url(#lineGradient2)" strokeWidth="3.5" filter="url(#lineglow)" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} />
                  <motion.line x1="350" y1="280" x2="500" y2="200" stroke="url(#lineGradient2)" strokeWidth="3.5" filter="url(#lineglow)" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.1 }} />
                  
                  {/* Right connections */}
                  <motion.line x1="500" y1="200" x2="650" y2="120" stroke="url(#lineGradient1)" strokeWidth="2.5" filter="url(#lineglow)" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.2 }} />
                  <motion.line x1="500" y1="200" x2="650" y2="280" stroke="url(#lineGradient1)" strokeWidth="2.5" filter="url(#lineglow)" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.3 }} />
                </motion.g>

                {/* Glow rings around nodes */}
                <motion.circle cx="150" cy="200" r="50" fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.3"
                  animate={{ r: [50, 70, 50] }} transition={{ duration: 3, repeat: Infinity }} />
                <motion.circle cx="500" cy="200" r="60" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.4"
                  animate={{ r: [60, 85, 60] }} transition={{ duration: 2.5, repeat: Infinity }} />
                <motion.circle cx="650" cy="120" r="40" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.3"
                  animate={{ r: [40, 55, 40] }} transition={{ duration: 3.2, repeat: Infinity }} />

                {/* Nodes with enhanced styling */}
                {/* Left node */}
                <motion.g
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <circle cx="150" cy="200" r="35" fill="url(#nodeGrad1)" filter="url(#nodeglow)" />
                  <circle cx="150" cy="200" r="35" fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.5" />
                </motion.g>

                {/* Top-middle node */}
                <motion.g
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <circle cx="350" cy="120" r="28" fill="url(#nodeGrad2)" filter="url(#nodeglow)" />
                  <circle cx="350" cy="120" r="28" fill="none" stroke="#818CF8" strokeWidth="1" opacity="0.5" />
                </motion.g>

                {/* Bottom-middle node */}
                <motion.g
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <circle cx="350" cy="280" r="28" fill="url(#nodeGrad2)" filter="url(#nodeglow)" />
                  <circle cx="350" cy="280" r="28" fill="none" stroke="#818CF8" strokeWidth="1" opacity="0.5" />
                </motion.g>

                {/* Center node - main hub */}
                <motion.g
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.25 }}
                >
                  <motion.circle cx="500" cy="200" r="45" fill="url(#nodeGrad3)" filter="url(#nodeglow)"
                    animate={{ opacity: [1, 0.9, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <circle cx="500" cy="200" r="45" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                </motion.g>

                {/* Right-top node */}
                <motion.g
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <circle cx="650" cy="120" r="28" fill="url(#nodeGrad4)" filter="url(#nodeglow)" />
                  <circle cx="650" cy="120" r="28" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.5" />
                </motion.g>

                {/* Right-bottom node */}
                <motion.g
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <circle cx="650" cy="280" r="28" fill="url(#nodeGrad4)" filter="url(#nodeglow)" />
                  <circle cx="650" cy="280" r="28" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.5" />
                </motion.g>
              </svg>

              {/* Modern Labels with glassmorphism */}
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
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">ZuZo Engine</div>
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
          </motion.div>
        </div>
      </section>

      {/* Arbitrage Value Proposition */}
      <section className="py-20 lg:py-28 bg-[#0d1321]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" data-testid="text-value-prop-title">
              The Arbitrage Advantage
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Premium service delivery at emerging market rates. Your margin is our mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1: MSPs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Card className="relative bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30 h-full overflow-hidden hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20" data-testid="card-msp">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/40 to-purple-600/10 flex items-center justify-center mb-6 border border-purple-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Server className="h-8 w-8 text-purple-300" />
                  </motion.div>
                  <div className="text-purple-300 text-xs font-semibold uppercase tracking-widest mb-3 opacity-80">
                    For MSPs
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tier 1 Helpdesk, Solved.
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Stop burning out US engineers on password resets. 24/7 coverage starting at{" "}
                    <span className="text-purple-300 font-bold">$8/hr</span>.
                  </p>
                  <div className="pt-6 border-t border-purple-500/20">
                    <div className="flex items-center gap-2 text-purple-300/90 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>ConnectWise & Autotask Ready</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Master Agents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Card className="relative bg-gradient-to-br from-blue-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-blue-500/30 h-full overflow-hidden hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" data-testid="card-master-agent">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600/40 to-blue-600/10 flex items-center justify-center mb-6 border border-blue-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="h-8 w-8 text-blue-300" />
                  </motion.div>
                  <div className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-3 opacity-80">
                    For Master Agents
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Zero-Churn Fulfillment.
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    <span className="text-blue-300 font-bold">4.7/5 CSAT scores</span> that protect your reputation and your residuals.
                  </p>
                  <div className="pt-6 border-t border-blue-500/20">
                    <div className="flex items-center gap-2 text-blue-300/90 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Salesforce & HubSpot Integration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: NDIS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Card className="relative bg-gradient-to-br from-cyan-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-cyan-500/30 h-full overflow-hidden hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20" data-testid="card-ndis">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-600/40 to-cyan-600/10 flex items-center justify-center mb-6 border border-cyan-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Zap className="h-8 w-8 text-cyan-300" />
                  </motion.div>
                  <div className="text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3 opacity-80">
                    For NDIS Providers
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Overnight Claim Processing.
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    We process claims while Australia sleeps.{" "}
                    <span className="text-cyan-300 font-bold">Wake up to a cleared queue.</span>
                  </p>
                  <div className="pt-6 border-t border-cyan-500/20">
                    <div className="flex items-center gap-2 text-cyan-300/90 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>NDIS Portal Certified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4: 3PLs/Fulfillment Centers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <Card className="relative bg-gradient-to-br from-orange-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-orange-500/30 h-full overflow-hidden hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20" data-testid="card-3pl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600/40 to-orange-600/10 flex items-center justify-center mb-6 border border-orange-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="h-8 w-8 text-orange-300" />
                  </motion.div>
                  <div className="text-orange-300 text-xs font-semibold uppercase tracking-widest mb-3 opacity-80">
                    For Fulfillment Centers
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    The WISMO Killer.
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    "Where Is My Order?" tickets eating your margins?{" "}
                    <span className="text-orange-300 font-bold">We handle them for $1.80/ticket.</span>
                  </p>
                  <div className="pt-6 border-t border-orange-500/20">
                    <div className="flex items-center gap-2 text-orange-300/90 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>ShipStation & Shopify Ready</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Margin Calculator */}
      <section id="calculator" className="relative py-20 lg:py-28 bg-[#0a0f1a] overflow-hidden">
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
                animate={{ boxShadow: ['0 0 20px rgba(16, 185, 129, 0.3)', '0 0 40px rgba(34, 197, 94, 0.2)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BarChart3 className="h-4 w-4 text-green-400" />
                <span className="text-green-300 text-sm font-medium">Interactive ROI Calculator</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent" data-testid="text-calculator-title">
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
                  '0 0 30px rgba(34, 197, 94, 0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] via-[#0f2f2a] to-[#0d1321] border-2 border-green-500/50 relative overflow-hidden" data-testid="card-calculator">
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
                          <span className="text-2xl font-bold text-white">{agents}</span>
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
                          onValueChange={(value) => setHourlyWage(value[0])}
                          min={15}
                          max={50}
                          step={1}
                          className="flex-1"
                          data-testid="slider-wage"
                        />
                        <div className="w-20 text-center">
                          <span className="text-2xl font-bold text-white">${hourlyWage}</span>
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
                    <div className="text-white/50 text-lg mb-4">Annual Margin Reclaimed</div>
                    <motion.div
                      key={annualMargin}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="relative"
                    >
                      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-400" data-testid="text-annual-savings">
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
                        className="mt-8 bg-green-600 hover:bg-green-700 text-white border-0"
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

      {/* Partner Tracks */}
      <section id="partner-tracks" className="py-20 lg:py-28 bg-[#0d1321]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" data-testid="text-partner-tracks-title">
              Choose Your Partner Track
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Two paths to partnership. Both paths to profit.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="white-label" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#1a1f35] p-1 h-auto">
                <TabsTrigger 
                  value="white-label" 
                  className="py-4 text-base data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  data-testid="tab-white-label"
                >
                  White Label
                </TabsTrigger>
                <TabsTrigger 
                  value="referral" 
                  className="py-4 text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  data-testid="tab-referral"
                >
                  Referral
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="white-label" className="mt-8">
                <Card className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30 overflow-hidden hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20" data-testid="card-white-label">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent" />
                  <CardContent className="p-8 lg:p-12 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/40 to-purple-600/10 flex items-center justify-center border border-purple-500/30"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Building2 className="h-8 w-8 text-purple-300" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">The Ghost</h3>
                        <p className="text-purple-300">Invisible Integration</p>
                      </div>
                    </div>
                    <p className="text-xl text-white/80 mb-8 leading-relaxed">
                      "We wear your jersey. We use your email domain. We work in your ticketing system (ConnectWise/Salesforce)."
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-white/60">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <span>Your branding everywhere</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <span>Your domain emails</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <span>Direct PSA integration</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <span>Your SLAs, our execution</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="referral" className="mt-8">
                <Card className="bg-gradient-to-br from-blue-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-blue-500/30 overflow-hidden hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" data-testid="card-referral">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent" />
                  <CardContent className="p-8 lg:p-12 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/40 to-blue-600/10 flex items-center justify-center border border-blue-500/30"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Users className="h-8 w-8 text-blue-300" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">The Broker</h3>
                        <p className="text-blue-300">Hands-Free Revenue</p>
                      </div>
                    </div>
                    <p className="text-xl text-white/80 mb-8 leading-relaxed">
                      "Simple hand-off. You introduce, we close, you earn lifetime recurring commissions."
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-white/60">
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span>15% recurring commission</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span>Zero effort after intro</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span>Lifetime client value</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span>Monthly payouts</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Gated Asset Library */}
      <section id="resources" className="py-20 lg:py-28 bg-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" data-testid="text-resources-title">
              Partner Resources
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Exclusive playbooks to accelerate your growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Asset 1: NDIS Growth Pack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-cyan-500/20 h-full hover:border-cyan-500/40 transition-all group" data-testid="card-ndis-pack">
                <CardContent className="p-8">
                  <div className="w-16 h-20 rounded-lg bg-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <FileText className="h-10 w-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Australia NDIS Growth Pack
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    How to double your plan management capacity without hiring locally.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-600/20 hover:text-cyan-300"
                    onClick={() => handleDownloadClick("Australia NDIS Growth Pack")}
                    data-testid="button-download-ndis"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Pack
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Asset 2: MSP Night Shift */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-purple-500/20 h-full hover:border-purple-500/40 transition-all group" data-testid="card-msp-pack">
                <CardContent className="p-8">
                  <div className="w-16 h-20 rounded-lg bg-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <FileText className="h-10 w-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    The MSP Night Shift Protocol
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    A guide to profitable 24/7 coverage for US/Canadian MSPs.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300"
                    onClick={() => handleDownloadClick("The MSP Night Shift Protocol")}
                    data-testid="button-download-msp"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Asset 3: Peak Season Survival Guide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-orange-500/20 h-full hover:border-orange-500/40 transition-all group" data-testid="card-peak-season">
                <CardContent className="p-8">
                  <div className="w-16 h-20 rounded-lg bg-orange-600/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <FileText className="h-10 w-10 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Peak Season Survival Guide
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Scale your support team from 5 to 50 agents for Black Friday—without hiring.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500/30 text-orange-400 hover:bg-orange-600/20 hover:text-orange-300"
                    onClick={() => handleDownloadClick("Peak Season Survival Guide")}
                    data-testid="button-download-peak-season"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Footer */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0d1321] to-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8" data-testid="text-compliance-title">
              Enterprise-Grade Compliance
            </h2>
            
            {/* Compliance Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2" data-testid="badge-iso">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-white/80 text-sm font-medium">ISO 27001 Aligned</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2" data-testid="badge-gdpr">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-white/80 text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2" data-testid="badge-hipaa">
                <Shield className="h-5 w-5 text-purple-400" />
                <span className="text-white/80 text-sm font-medium">HIPAA Ready</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2" data-testid="badge-soc2">
                <Shield className="h-5 w-5 text-cyan-400" />
                <span className="text-white/80 text-sm font-medium">SOC2 Ready</span>
              </div>
            </div>

            {/* Final CTA */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-final-cta">
                Ready to Scale Your Margins?
              </h3>
              <p className="text-white/60 mb-8">
                Join the next generation of fulfillment partners.
              </p>
              <Link href="/book-demo">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 text-lg px-10 py-6 h-auto"
                  data-testid="button-become-launch-partner"
                >
                  Become a Launch Partner
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Footer links */}
            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
              <div>
                &copy; {new Date().getFullYear()} ZuZo LTD. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/security" className="hover:text-white/60 transition-colors">
                  Security
                </Link>
                <Link href="/contact" className="hover:text-white/60 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Modal */}
      <Dialog open={downloadModalOpen} onOpenChange={setDownloadModalOpen}>
        <DialogContent className="bg-[#1a1f35] border-white/10 text-white sm:max-w-md" aria-describedby="download-dialog-description">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold" data-testid="text-modal-title">
              {emailSubmitted ? "Your Download is Ready!" : "Get Your Free Resource"}
            </DialogTitle>
            <DialogDescription id="download-dialog-description" className="text-white/60">
              {emailSubmitted 
                ? `Thank you! Your "${selectedAsset}" is ready to download.`
                : `Enter your work email to access "${selectedAsset}".`
              }
            </DialogDescription>
          </DialogHeader>
          
          {emailSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center"
              >
                <CheckCircle className="h-8 w-8 text-green-400" />
              </motion.div>
              <div className="text-center">
                <p className="text-white/70 text-base mb-6">Your resource is ready to download:</p>
                <Button 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0"
                  onClick={() => {
                    const downloadData = getDownloadUrl(selectedAsset);
                    if (downloadData) {
                      window.open(downloadData.url, '_blank');
                    }
                    setTimeout(() => {
                      setDownloadModalOpen(false);
                      setEmailSubmitted(false);
                      setEmail("");
                    }, 500);
                  }}
                  data-testid="button-download-resource"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download {selectedAsset}
                </Button>
              </div>
              <p className="text-xs text-white/40 text-center">
                We've also sent a copy to {email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <Label htmlFor="work-email" className="text-white/80">
                  Work Email
                </Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    id="work-email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                    data-testid="input-download-email"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                data-testid="button-submit-download"
              >
                <Download className="mr-2 h-4 w-4" />
                Get Access Now
              </Button>
              <p className="text-xs text-white/40 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
