import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SEOHead, getPartnerProgramSchema } from "@/components/seo/seo-head";
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
  ExternalLink,
  Calendar,
  Phone,
  TrendingUp,
  ArrowRight
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

  // Initialize Cal.com with Partner Portal purple theme
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "partner-30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#7c3aed" },
          dark: { "cal-brand": "#7c3aed" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const zuzoRate = 9;
  const hoursPerMonth = 160;
  
  const currentMonthlyCost = agents * hourlyWage * hoursPerMonth;
  const zuzoMonthlyCost = agents * zuzoRate * hoursPerMonth;
  const monthlyMargin = currentMonthlyCost - zuzoMonthlyCost;
  const annualMargin = monthlyMargin * 12;

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
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
        description="Scale your margins, not your headcount. The invisible fulfillment engine for MSPs, 3PLs, and NDIS Providers. White-label BPO from Ghana. Access QContact integration, margin calculator, and gated resources."
        canonical="/partner-portal"
        keywords="white label BPO, partner program, MSP helpdesk, 3PL logistics, fulfillment center, NDIS claim processing, WISMO support, outsourcing partner, QContact, technology stack integration, arbitrage BPO"
        schema={getPartnerProgramSchema()}
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
            <Button 
              size="sm" 
              onClick={scrollToBooking}
              className="bg-purple-600 hover:bg-purple-700 text-white border-0" 
              data-testid="button-nav-become-partner"
            >
              Book a Call
            </Button>
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
                  <Button 
                    onClick={scrollToBooking}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0" 
                    data-testid="button-mobile-become-partner"
                  >
                    Book a Call
                  </Button>
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

      {/* Interoperability Stack Section */}
      <section className="py-20 lg:py-28 bg-[#0d1321]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" data-testid="text-tech-stack-title">
              We Speak Your Language
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              ZuZo acts as a seamless extension of your team. We don't force you to adapt to our systems; we plug directly into yours.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="ccaas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#1a1f35] p-1 h-auto gap-1">
                <TabsTrigger 
                  value="ccaas" 
                  className="py-3 text-sm data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  data-testid="tab-ccaas"
                >
                  Contact Center
                </TabsTrigger>
                <TabsTrigger 
                  value="msp" 
                  className="py-3 text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  data-testid="tab-msp"
                >
                  IT Services
                </TabsTrigger>
                <TabsTrigger 
                  value="ecommerce" 
                  className="py-3 text-sm data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                  data-testid="tab-ecommerce"
                >
                  E-Commerce
                </TabsTrigger>
                <TabsTrigger 
                  value="ndis" 
                  className="py-3 text-sm data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
                  data-testid="tab-ndis"
                >
                  Healthcare
                </TabsTrigger>
              </TabsList>

              {/* CCaaS Tab */}
              <TabsContent value="ccaas" className="mt-8">
                <Card className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30" data-testid="card-ccaas-stack">
                  <CardContent className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-white mb-2">Certified CCaaS Platforms</h3>
                    <p className="text-white/60 mb-8">Enterprise-grade contact center capabilities for Master Agents and resellers.</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { name: "QContact", desc: "Rated #1 mid-market contact center—omnichannel (voice, chat, email, WhatsApp, social) + built-in CRM" },
                        { name: "Five9", desc: "The #1 cloud contact center platform" },
                        { name: "Genesys Cloud CX", desc: "Enterprise-scale omnichannel orchestration" },
                        { name: "Nice CXone", desc: "AI-powered customer experience platform" },
                        { name: "RingCentral", desc: "Mid-market communication leader" },
                        { name: "Dialpad", desc: "AI-native cloud communications" }
                      ].map((platform, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all">
                          <div className="font-bold text-purple-300 mb-1">{platform.name}</div>
                          <div className="text-sm text-white/60">{platform.desc}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-white/50 text-sm mt-8 italic">Our agents are pre-trained on all platforms above, reducing your client's Time-to-Value by 40%.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* MSP Tab */}
              <TabsContent value="msp" className="mt-8">
                <Card className="bg-gradient-to-br from-blue-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-blue-500/30" data-testid="card-msp-stack">
                  <CardContent className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-white mb-2">Seamless ITSM Workflow Integration</h3>
                    <p className="text-white/60 mb-8">Work directly inside your PSA, RMM, and documentation platforms.</p>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-bold text-blue-300 mb-4">Ticketing & PSA</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { name: "QContact", desc: "Full-featured ticketing + omnichannel case management" },
                            { name: "ConnectWise PSA", desc: "Industry standard for MSPs" },
                            { name: "Autotask (Datto)", desc: "Enterprise ITSM platform" },
                            { name: "HaloPSA", desc: "Fastest-growing PSA in 2025" }
                          ].map((tool, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                              <div className="font-bold text-blue-300 mb-1">{tool.name}</div>
                              <div className="text-sm text-white/60">{tool.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-300 mb-4">Monitoring & RMM</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { name: "NinjaOne", desc: "Modern unified endpoint management" },
                            { name: "ConnectWise Automate", desc: "Deep PSA integration" },
                            { name: "Kaseya VSA", desc: "Enterprise RMM solution" }
                          ].map((tool, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                              <div className="font-bold text-blue-300 mb-1">{tool.name}</div>
                              <div className="text-sm text-white/60">{tool.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-300 mb-4">Documentation</h4>
                        <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                          <div className="font-bold text-blue-300 mb-1">IT Glue</div>
                          <div className="text-sm text-white/60">SOP documentation and knowledge base integration</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm mt-8 italic">Our Tier 1 techs work directly inside your PSA board, resolving tickets and documenting every step.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* E-Commerce Tab */}
              <TabsContent value="ecommerce" className="mt-8">
                <Card className="bg-gradient-to-br from-orange-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-orange-500/30" data-testid="card-ecommerce-stack">
                  <CardContent className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-white mb-2">E-Commerce & Logistics Engine</h3>
                    <p className="text-white/60 mb-8">Resolve WISMO tickets directly in your systems without warehouse escalation.</p>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-bold text-orange-300 mb-4">Support Platforms</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { name: "QContact", desc: "Omnichannel support (voice, email, WhatsApp, live chat, SMS, social)" },
                            { name: "Gorgias", desc: "#1 helpdesk for Shopify stores" },
                            { name: "Zendesk", desc: "Enterprise support platform" },
                            { name: "Intercom", desc: "In-app messaging and ticketing" }
                          ].map((tool, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-4 border border-orange-500/20">
                              <div className="font-bold text-orange-300 mb-1">{tool.name}</div>
                              <div className="text-sm text-white/60">{tool.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-orange-300 mb-4">Order & Fulfillment Systems</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { name: "Shopify Plus", desc: "Order modifications and refund processing" },
                            { name: "ShipStation", desc: "Tracking and shipping label management" },
                            { name: "AfterShip", desc: "Proactive tracking updates" },
                            { name: "NetSuite", desc: "ERP for large-scale 3PLs" }
                          ].map((tool, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-4 border border-orange-500/20">
                              <div className="font-bold text-orange-300 mb-1">{tool.name}</div>
                              <div className="text-sm text-white/60">{tool.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm mt-8 italic">We resolve "Where is my order?" tickets directly in Gorgias and ShipStation, keeping your warehouse team focused on fulfillment.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* NDIS Tab */}
              <TabsContent value="ndis" className="mt-8">
                <Card className="bg-gradient-to-br from-cyan-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-cyan-500/30" data-testid="card-ndis-stack">
                  <CardContent className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-white mb-2">NDIS & Allied Health Administration</h3>
                    <p className="text-white/60 mb-8">Government-certified compliance and specialized plan management expertise.</p>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-bold text-cyan-300 mb-4">Government Portals</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { name: "QContact", desc: "Unified communication hub for client outreach + case tracking" },
                            { name: "PRODA", desc: "Provider Digital Access (instant trust signal)" },
                            { name: "PACE", desc: "Next-gen NDIS computer system" }
                          ].map((tool, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-4 border border-cyan-500/20">
                              <div className="font-bold text-cyan-300 mb-1">{tool.name}</div>
                              <div className="text-sm text-white/60">{tool.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-cyan-300 mb-4">Plan Management</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { name: "Lumary", desc: "Market-leading plan management" },
                            { name: "ShiftCare", desc: "Rostering and care coordination" },
                            { name: "CareMaster", desc: "Comprehensive care management" },
                            { name: "Brevity", desc: "Streamlined plan admin" }
                          ].map((tool, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-4 border border-cyan-500/20">
                              <div className="font-bold text-cyan-300 mb-1">{tool.name}</div>
                              <div className="text-sm text-white/60">{tool.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-cyan-300 mb-4">Accounting & Compliance</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { name: "Xero", desc: "Australian accounting standard" },
                            { name: "MYOB", desc: "Local NDIS-compliant bookkeeping" }
                          ].map((tool, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-4 border border-cyan-500/20">
                              <div className="font-bold text-cyan-300 mb-1">{tool.name}</div>
                              <div className="text-sm text-white/60">{tool.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm mt-8 italic">Our admin teams are PRODA-verified and proficient in Lumary and Xero, ensuring compliant overnight invoice processing.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Platform Agnostic Message - HIGHLIGHTED */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center relative"
            >
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 rounded-2xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-amber-950/40 to-orange-950/40 rounded-2xl p-10 md:p-12 border-2 border-amber-500/50 shadow-2xl">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
                
                {/* Content */}
                <div className="flex flex-col items-center gap-4">
                  <Zap className="h-8 w-8 text-amber-400" />
                  <div>
                    <p className="text-white text-lg md:text-xl">
                      <span className="text-amber-300 font-bold text-2xl">Don't see your stack?</span>
                    </p>
                    <p className="text-amber-100 text-base md:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
                      We are <span className="font-bold text-white">platform-agnostic</span>. Our <span className="font-bold text-amber-300">Rapid Implementation Protocol</span> allows us to train a dedicated pod on your proprietary software in <span className="font-bold text-yellow-300 underline underline-offset-2">under 10 days</span>.
                    </p>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10-Day Onboarding Timeline */}
      <section className="py-20 lg:py-28 bg-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-timeline-title">
              Your 10-Day Onboarding Path
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">From assessment to full deployment in just 10 days.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Days 1-2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/30 border-2 border-purple-500 mb-4 flex-shrink-0">
                  <span className="font-bold text-white text-lg">1-2</span>
                </div>
                <div className="bg-gradient-to-br from-purple-950/40 to-[#1a1f35] border border-purple-500/30 rounded-lg p-4 flex-1">
                  <h4 className="font-bold text-white mb-2">Assessment & Setup</h4>
                  <p className="text-white/60 text-sm">Tool stack review, security protocols, team allocation.</p>
                </div>
                <div className="hidden md:flex h-16 w-1 bg-gradient-to-b from-purple-500 to-blue-500/30 my-4" />
              </motion.div>

              {/* Days 3-5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/30 border-2 border-blue-500 mb-4 flex-shrink-0">
                  <span className="font-bold text-white text-lg">3-5</span>
                </div>
                <div className="bg-gradient-to-br from-blue-950/40 to-[#1a1f35] border border-blue-500/30 rounded-lg p-4 flex-1">
                  <h4 className="font-bold text-white mb-2">Training & Integration</h4>
                  <p className="text-white/60 text-sm">Hands-on platform training, PSA/API setup, documentation.</p>
                </div>
                <div className="hidden md:flex h-16 w-1 bg-gradient-to-b from-blue-500 to-cyan-500/30 my-4" />
              </motion.div>

              {/* Days 6-8 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-600/30 border-2 border-cyan-500 mb-4 flex-shrink-0">
                  <span className="font-bold text-white text-lg">6-8</span>
                </div>
                <div className="bg-gradient-to-br from-cyan-950/40 to-[#1a1f35] border border-cyan-500/30 rounded-lg p-4 flex-1">
                  <h4 className="font-bold text-white mb-2">Pilot Launch</h4>
                  <p className="text-white/60 text-sm">Soft launch with limited clients, performance monitoring.</p>
                </div>
                <div className="hidden md:flex h-16 w-1 bg-gradient-to-b from-cyan-500 to-green-500/30 my-4" />
              </motion.div>

              {/* Days 9-10 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center md:items-start md:col-span-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600/30 border-2 border-green-500 mb-4 flex-shrink-0">
                  <span className="font-bold text-white text-lg">9-10</span>
                </div>
                <div className="bg-gradient-to-br from-green-950/40 to-[#1a1f35] border border-green-500/30 rounded-lg p-4 w-full">
                  <h4 className="font-bold text-white mb-2">Full Deployment</h4>
                  <p className="text-white/60 text-sm">Scale to full production, performance optimization, ongoing support.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0d1321] to-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-next-steps-title">
              What Happens Next
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">Your journey to partnership in 4 clear steps.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="flex gap-6 items-start"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600/30 border-2 border-purple-500 flex-shrink-0 mt-1">
                  <span className="font-bold text-white text-lg">1</span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white mb-2" data-testid="text-step-1">Book Your Demo</h4>
                  <p className="text-white/70">Click "Become a Launch Partner" to schedule a 30-minute partnership consultation.</p>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center py-2">
                <ArrowDown className="h-6 w-6 text-purple-400 animate-bounce" />
              </div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600/30 border-2 border-blue-500 flex-shrink-0 mt-1">
                  <span className="font-bold text-white text-lg">2</span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white mb-2" data-testid="text-step-2">Partner Package Sent</h4>
                  <p className="text-white/70">Receive your customized partnership proposal with pricing, terms, and integration roadmap.</p>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center py-2">
                <ArrowDown className="h-6 w-6 text-blue-400 animate-bounce" />
              </div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cyan-600/30 border-2 border-cyan-500 flex-shrink-0 mt-1">
                  <span className="font-bold text-white text-lg">3</span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white mb-2" data-testid="text-step-3">Onboarding Call</h4>
                  <p className="text-white/70">Kickoff meeting with your dedicated partner success manager to confirm timeline and requirements.</p>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center py-2">
                <ArrowDown className="h-6 w-6 text-cyan-400 animate-bounce" />
              </div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-6 items-start"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600/30 border-2 border-green-500 flex-shrink-0 mt-1">
                  <span className="font-bold text-white text-lg">✓</span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white mb-2" data-testid="text-step-4">10-Day Launch</h4>
                  <p className="text-white/70">Your team goes live. Our Rapid Implementation Protocol begins – full deployment in under 10 days.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Partner Metrics Dashboard */}
      <section className="py-20 lg:py-28 bg-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-metrics-title">
              Live Partner Metrics
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">Real-time proof of our partner success.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Partners Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Card className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30 h-full" data-testid="card-partners-metric">
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/30 border border-purple-500 mb-4"
                  >
                    <Users className="h-8 w-8 text-purple-300" />
                  </motion.div>
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text mb-2" data-testid="text-partners-count">
                    500+
                  </div>
                  <p className="text-white/70 text-lg font-semibold">Partners Generating Revenue</p>
                  <p className="text-white/50 text-sm mt-2">Across 50+ countries and 12+ industries</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tickets Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-blue-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-blue-500/30 h-full" data-testid="card-tickets-metric">
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/30 border border-blue-500 mb-4"
                  >
                    <BarChart3 className="h-8 w-8 text-blue-300" />
                  </motion.div>
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text mb-2" data-testid="text-tickets-count">
                    2M+
                  </div>
                  <p className="text-white/70 text-lg font-semibold">Tickets Resolved Monthly</p>
                  <p className="text-white/50 text-sm mt-2">Across all partnership tiers and regions</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Retention Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-green-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-green-500/30 h-full" data-testid="card-retention-metric">
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/30 border border-green-500 mb-4"
                  >
                    <TrendingUp className="h-8 w-8 text-green-300" />
                  </motion.div>
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text mb-2" data-testid="text-retention-rate">
                    98%
                  </div>
                  <p className="text-white/70 text-lg font-semibold">Partner Retention Rate</p>
                  <p className="text-white/50 text-sm mt-2">Year-over-year repeat business</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Support Commitment */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0d1321] to-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-support-title">
              Our Partner Support Commitment
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">We don't just launch your partnership – we actively manage your success.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 24/7 Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-2 border-amber-500/30 h-full hover:border-amber-500/60 transition-all group" data-testid="card-24-7-support">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-600/30 border border-amber-500 mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="h-7 w-7 text-amber-300" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3" data-testid="text-support-24-7">
                    24/7 Partner Hotline
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Dedicated emergency support line. Critical issues resolved within 1 hour. Direct escalation path to our leadership team.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Dedicated Manager */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30 h-full hover:border-purple-500/60 transition-all group" data-testid="card-dedicated-manager">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-600/30 border border-purple-500 mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-7 w-7 text-purple-300" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3" data-testid="text-support-manager">
                    Dedicated Success Manager
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Named partner account manager. Direct communication channel. Proactive optimization and strategic reviews.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* 90-Day Check-ins */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-2 border-cyan-500/30 h-full hover:border-cyan-500/60 transition-all group" data-testid="card-90-day-checkin">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-600/30 border border-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                    <Calendar className="h-7 w-7 text-cyan-300" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3" data-testid="text-support-checkins">
                    Weekly Check-ins (90 Days)
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Structured optimization sessions during your launch phase. Performance review, agent quality tuning, process refinement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Tier Pricing Breakdown */}
      <section className="py-20 lg:py-28 bg-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-pricing-tiers-title">
              Partnership Tier Pricing
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">Scale your margins as you grow. Clear, transparent pricing at every tier.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tier 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Card className="bg-gradient-to-br from-blue-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-blue-500/30 h-full hover:border-blue-500/60 transition-all" data-testid="card-tier-1">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-white mb-2" data-testid="text-tier-1-name">Tier 1: Starter</h4>
                    <p className="text-blue-300 font-semibold">1-10 Agents</p>
                  </div>
                  <div className="bg-blue-600/20 rounded-lg p-4 mb-6 border border-blue-500/30">
                    <div className="text-4xl font-bold text-blue-300 mb-2" data-testid="text-tier-1-margin">35%</div>
                    <p className="text-white/70 text-sm">Your margin per agent</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-sm">Standard onboarding</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-sm">Email support</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-sm">Monthly check-ins</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mt-6 italic">Perfect for testing the partnership model.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tier 2 - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-bold" data-testid="badge-popular">
                  Most Popular
                </div>
                <Card className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/60 h-full hover:border-purple-500/80 transition-all shadow-lg shadow-purple-500/20" data-testid="card-tier-2">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2" data-testid="text-tier-2-name">Tier 2: Growth</h4>
                      <p className="text-purple-300 font-semibold">11-50 Agents</p>
                    </div>
                    <div className="bg-purple-600/20 rounded-lg p-4 mb-6 border border-purple-500/30">
                      <div className="text-4xl font-bold text-purple-300 mb-2" data-testid="text-tier-2-margin">45%</div>
                      <p className="text-white/70 text-sm">Your margin per agent</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Rapid Implementation Protocol</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Dedicated success manager</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Weekly optimization calls</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Priority support</span>
                      </div>
                    </div>
                    <p className="text-white/50 text-xs mt-6 italic">Rapid growth path with dedicated support.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Tier 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-green-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-green-500/30 h-full hover:border-green-500/60 transition-all" data-testid="card-tier-3">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-white mb-2" data-testid="text-tier-3-name">Tier 3: Enterprise</h4>
                    <p className="text-green-300 font-semibold">51+ Agents</p>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-4 mb-6 border border-green-500/30">
                    <div className="text-4xl font-bold text-green-300 mb-2" data-testid="text-tier-3-margin">50%+</div>
                    <p className="text-white/70 text-sm">Your margin per agent</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">Custom pricing & terms</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">Dedicated partnership manager</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">24/7 priority hotline</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">Custom API access</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mt-6 italic">Enterprise solution with full customization.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner FAQ - Tabbed */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0d1321] to-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-faq-title">
              Partner FAQ
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">Everything you need to know about partnering with ZuZo. Transparent answers to your toughest questions.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="pricing" className="w-full" data-testid="faq-tabs">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-white/5 border border-white/10 p-2 rounded-lg" data-testid="faq-tab-list">
                <TabsTrigger value="pricing" className="text-xs sm:text-sm md:text-base py-2" data-testid="tab-pricing">Pricing</TabsTrigger>
                <TabsTrigger value="white-label" className="text-xs sm:text-sm md:text-base py-2" data-testid="tab-white-label">White Label</TabsTrigger>
                <TabsTrigger value="operations" className="text-xs sm:text-sm md:text-base py-2" data-testid="tab-operations">Operations</TabsTrigger>
                <TabsTrigger value="tech" className="text-xs sm:text-sm md:text-base py-2" data-testid="tab-tech">Tech</TabsTrigger>
              </TabsList>

              {/* Tab 1: Pricing & Margins */}
              <TabsContent value="pricing" className="space-y-4" data-testid="faq-pricing-content">
                <Accordion type="single" collapsible>
                  <AccordionItem value="pricing-1" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-pricing-model">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      How does the "Margin Per Agent" model actually work?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      We operate on a <span className="font-semibold text-white">Wholesale BPO model</span>. ZuZo provides you with a "Buy Rate" (e.g., for a dedicated agent) that is significantly lower than market value. You are free to set your own "Sell Rate" to your end-client. 
                      <br /><br />
                      <span className="text-white/90 font-semibold">Example:</span> If your Buy Rate is $9/hr and you sell the seat at $18/hr, you keep 50% margin. We do not dictate your pricing strategy.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pricing-2" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-tier-pricing">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      What is included in the "Tier 2 & 3" pricing?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Unlike the Starter tier, Tiers 2 and 3 include our <span className="font-semibold text-white">Rapid Implementation Protocol</span> (setup in &lt;14 days) and a <span className="font-semibold text-white">Dedicated Partner Success Manager</span>. This manager is your single point of contact, ensuring you don't have to manage the agents yourself—we manage the performance, you manage the client relationship.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pricing-3" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-downtime-pay">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      Do I pay for agents when they aren't on calls?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Our standard model is <span className="font-semibold text-white">Dedicated Staffing</span>, meaning you pay a flat monthly rate for a dedicated resource who works exclusively for your brand (or your client's brand). This ensures they are fully trained on <span className="italic">your</span> specific SOPs and culture, unlike a shared "minute-based" call center.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pricing-4" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-roi-timeline">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      How long until we see ROI?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Most partners see positive ROI within <span className="font-semibold text-white">30 days of launch</span>. At our $9/hr rate vs. typical $15-25/hr hiring costs, the math works immediately. If you reach profitability within 30 days, great. If not, we extend free training at no cost.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Tab 2: White Label & Security */}
              <TabsContent value="white-label" className="space-y-4" data-testid="faq-white-label-content">
                <Accordion type="single" collapsible>
                  <AccordionItem value="wl-1" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-client-invisibility">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      Will my clients know I am outsourcing to ZuZo?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      No. We operate as a <span className="font-semibold text-white">100% White Label extension</span> of your team.
                      <ul className="list-disc list-inside mt-3 space-y-2">
                        <li><span className="font-semibold text-white">Email:</span> We use your domain (e.g., support@youragency.com)</li>
                        <li><span className="font-semibold text-white">Phone:</span> We answer with your custom greeting</li>
                        <li><span className="font-semibold text-white">Systems:</span> We work directly inside your ticketing system (ConnectWise, Zendesk, Salesforce)</li>
                      </ul>
                      <br />
                      To your client, our agent is just another member of your team—they just happen to be sitting in Accra.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wl-2" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-client-protection">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      How do you protect my client relationship? (Non-Solicitation)
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Trust is our currency. All Partnership Agreements include a strict <span className="font-semibold text-white">Non-Solicitation & Non-Compete Clause</span>. ZuZo is legally bound not to solicit or accept business directly from your end-clients. Your book of business belongs to you, forever.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wl-3" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-facility-visits">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      Can I visit the facility or send my clients to visit?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Absolutely. We encourage it. If you bring a client to our Accra facility, we will rebrand the meeting space with <span className="italic">your</span> agency's logo for the day. We are <span className="font-semibold text-white">your office in Africa</span>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wl-4" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-data-sovereignty">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      How do you handle Data Sovereignty (GDPR/Australian Privacy)?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      We utilize a <span className="font-semibold text-white">VDI (Virtual Desktop Infrastructure)</span> environment. This means your customer data never actually leaves your server; our agents merely view it through a secure, encrypted window. No data is stored locally on hard drives in Ghana, ensuring full compliance with GDPR, HIPAA, and Australian Privacy Principles.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Tab 3: Operations */}
              <TabsContent value="operations" className="space-y-4" data-testid="faq-operations-content">
                <Accordion type="single" collapsible>
                  <AccordionItem value="ops-1" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-accents">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      How do you handle accents and cultural nuances?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Ghana is a Commonwealth nation with English as the official language. Our agents are college-educated and speak with a <span className="font-semibold text-white">neutral, "Global English" accent</span> that is highly rated for clarity in US and UK markets. We invite you to "blind test" our agents before signing a contract.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ops-2" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-quality-monitoring">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      How do I monitor quality if I'm not there?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Radical transparency. As a partner, you get:
                      <ol className="list-decimal list-inside mt-3 space-y-2">
                        <li><span className="font-semibold text-white">Real-Time Access:</span> Login access to call recordings and live screen monitoring</li>
                        <li><span className="font-semibold text-white">Weekly Calibration:</span> A weekly QA score (CSAT/QA) report sent to you</li>
                        <li><span className="font-semibold text-white">The "Red Flag" System:</span> If an agent falls below your KPI threshold for 2 weeks, we automatically place them on a Performance Improvement Plan (PIP) or replace them at no cost to you</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ops-3" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-escalations">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      Do you handle escalations?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Absolutely. Our agents are trained to identify escalation-worthy issues and flag them immediately. For Tier 2+ partners, we have a <span className="font-semibold text-white">dedicated escalation manager available 24/7</span>. Your SLAs are our SLAs – we don't cut corners on critical issues.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ops-4" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-scaling">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      What happens if I need to scale up for a busy season (like Q4)?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      This is where our <span className="font-semibold text-white">Tier 3 (Enterprise)</span> status shines. We maintain a "bench" of pre-vetted talent. For partners in the Growth or Enterprise tiers, we can ramp up 5-10 additional agents in as little as <span className="font-semibold text-white">10 business days</span>.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Tab 4: Tech Specs */}
              <TabsContent value="tech" className="space-y-4" data-testid="faq-tech-content">
                <Accordion type="single" collapsible>
                  <AccordionItem value="tech-1" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-tech-setup">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      What technical setup is required from my side?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Very little. We need:
                      <ol className="list-decimal list-inside mt-3 space-y-2">
                        <li>Provisioned licenses for your tools (e.g., a seat on your Salesforce/Zendesk)</li>
                        <li>VPN access (if required)</li>
                        <li>Training manuals (SOPs)</li>
                      </ol>
                      <br />
                      Our IT team handles the rest, ensuring our hardware matches your security specs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tech-2" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-integrations">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      Can we use this for our own clients?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Yes – that's exactly what our <span className="font-semibold text-white">White Label ("The Ghost")</span> track is for. Your clients never know ZuZo exists. Your agents use your domain, your branding, your systems. You control the entire relationship and pricing. No restrictions on resale.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tech-3" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-integration-support">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      What systems do we currently integrate with?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      Our platform integrates with <span className="font-semibold text-white">Salesforce, HubSpot, Zendesk, ConnectWise, Freshdesk, Jira, Microsoft Teams, Slack, and Zapier</span>. If you use a system not listed, our API team can typically establish integration within 5-7 business days. For Tier 3 partners, custom API access is included.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tech-4" className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4" data-testid="faq-contracts">
                    <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                      What are the contract terms?
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-4">
                      <span className="font-semibold text-white">Tier 1-2 partners:</span> 6-month rolling contract with 30-day exit. <span className="font-semibold text-white">Tier 3 enterprise partners:</span> Custom terms based on volume. All contracts are designed to protect both parties while giving you flexibility. No lock-in traps.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Partner Badge/Certification Program */}
      <section className="py-20 lg:py-28 bg-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-certification-title">
              Partner Certification Program
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">Earn recognition. Build credibility. Grow faster.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ZuZo Certified Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Card className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30 h-full hover:border-purple-500/60 transition-all" data-testid="card-certified-badge">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-600/20 border-2 border-purple-500 mb-4">
                      <CheckCircle className="h-10 w-10 text-purple-300" />
                    </div>
                    <h4 className="text-2xl font-bold text-white" data-testid="text-certified-title">ZuZo Certified Partner</h4>
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Earned after completing your first month as an active partner. Includes downloadable email signature badge, website badge, and LinkedIn verification.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Email signature badge (4 formats)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Website embed code</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">LinkedIn profile badge</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm italic">Boost credibility with your prospects and clients.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Performer Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-amber-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-amber-500/30 h-full hover:border-amber-500/60 transition-all" data-testid="card-top-performer">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-600/20 border-2 border-amber-500 mb-4">
                      <TrendingUp className="h-10 w-10 text-amber-300" />
                    </div>
                    <h4 className="text-2xl font-bold text-white" data-testid="text-top-performer-title">Top Performer Recognition</h4>
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Awarded quarterly to partners achieving 98%+ retention, highest agent quality, or fastest scaling. Featured in partner newsletter and case studies.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Quarterly feature in partner newsletter</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Exclusive Q/A interview rights</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">5% margin bonus for 3 months</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm italic">Excellence rewarded. Growth accelerated.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Booking Section */}
      <section id="book-call" className="py-20 lg:py-28 bg-gradient-to-b from-[#0a0f1a] to-[#0d1321]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <Calendar className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Book Your Partner Call</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-booking-title">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Margin Engine
              </span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Schedule a 30-minute strategy session with our Partner Success team. 
              No obligations—just a conversation about your growth goals.
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
                <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">Pick a Time That Works for You</h3>
                <p className="text-white/80 text-sm md:text-base">
                  30-minute partner strategy session via Microsoft Teams
                </p>
              </div>
              <div data-testid="partner-cal-booking-embed">
                <Cal
                  namespace="partner-30min"
                  calLink="zuzo-ltd/30min"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+233240526570" className="hover:text-white/70 transition-colors">
                  Prefer a call? +233 24 052 6570
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:partners@zuzogp.com" className="hover:text-white/70 transition-colors">
                  partners@zuzogp.com
                </a>
              </div>
            </div>
          </motion.div>
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
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 text-lg px-10 py-6 h-auto"
                data-testid="button-become-launch-partner"
              >
                Book Your Partner Call
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
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
