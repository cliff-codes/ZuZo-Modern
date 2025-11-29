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
        description="Scale your margins, not your headcount. The invisible fulfillment engine for MSPs, Master Agents, and NDIS Providers. White-label BPO from Ghana."
        canonical="/partner-portal"
        keywords="white label BPO, partner program, MSP helpdesk, NDIS claim processing, master agent, outsourcing partner"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent cursor-pointer" data-testid="link-logo">
              ZuZo
            </span>
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
              The invisible fulfillment engine for MSPs, Master Agents, and NDIS Providers. 
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

          {/* Abstract visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-20 flex justify-center"
          >
            <div className="relative w-full max-w-2xl h-48">
              {/* Connected nodes visualization */}
              <svg className="w-full h-full" viewBox="0 0 400 150">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                {/* Connection lines */}
                <motion.line x1="50" y1="75" x2="150" y2="45" stroke="url(#lineGrad)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.8 }} />
                <motion.line x1="50" y1="75" x2="150" y2="105" stroke="url(#lineGrad)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }} />
                <motion.line x1="150" y1="45" x2="250" y2="75" stroke="url(#lineGrad)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1 }} />
                <motion.line x1="150" y1="105" x2="250" y2="75" stroke="url(#lineGrad)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }} />
                <motion.line x1="250" y1="75" x2="350" y2="45" stroke="url(#lineGrad)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.2 }} />
                <motion.line x1="250" y1="75" x2="350" y2="105" stroke="url(#lineGrad)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.3 }} />
                
                {/* Nodes */}
                <motion.circle cx="50" cy="75" r="12" fill="#8B5CF6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
                <motion.circle cx="150" cy="45" r="10" fill="#6366F1" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} />
                <motion.circle cx="150" cy="105" r="10" fill="#6366F1" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} />
                <motion.circle cx="250" cy="75" r="14" fill="#3B82F6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
                <motion.circle cx="350" cy="45" r="10" fill="#0EA5E9" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
                <motion.circle cx="350" cy="105" r="10" fill="#0EA5E9" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
              </svg>
              
              {/* Labels */}
              <div className="absolute left-[8%] top-1/2 -translate-y-1/2 text-center">
                <span className="text-xs text-purple-400 font-medium">Your Clients</span>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-xs text-blue-400 font-medium">ZuZo Engine</span>
              </div>
              <div className="absolute right-[5%] top-1/2 -translate-y-1/2 text-center">
                <span className="text-xs text-cyan-400 font-medium">24/7 Delivery</span>
              </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-value-prop-title">
              The Arbitrage Advantage
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Premium service delivery at emerging market rates. Your margin is our mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: MSPs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-purple-500/20 h-full hover:border-purple-500/40 transition-colors" data-testid="card-msp">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center mb-6">
                    <Server className="h-7 w-7 text-purple-400" />
                  </div>
                  <div className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3">
                    For MSPs
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tier 1 Helpdesk, Solved.
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Stop burning out US engineers on password resets. 24/7 coverage starting at{" "}
                    <span className="text-purple-400 font-bold">$8/hr</span>.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
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
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-blue-500/20 h-full hover:border-blue-500/40 transition-colors" data-testid="card-master-agent">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
                    <Shield className="h-7 w-7 text-blue-400" />
                  </div>
                  <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
                    For Master Agents
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Zero-Churn Fulfillment.
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    <span className="text-blue-400 font-bold">4.7/5 CSAT scores</span> that protect your reputation and your residuals.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
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
            >
              <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-cyan-500/20 h-full hover:border-cyan-500/40 transition-colors" data-testid="card-ndis">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-cyan-600/20 flex items-center justify-center mb-6">
                    <Zap className="h-7 w-7 text-cyan-400" />
                  </div>
                  <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">
                    For NDIS Providers
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Overnight Claim Processing.
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    We process claims while Australia sleeps.{" "}
                    <span className="text-cyan-400 font-bold">Wake up to a cleared queue.</span>
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <CheckCircle className="h-4 w-4 text-cyan-400" />
                      <span>NDIS Portal Certified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Margin Calculator */}
      <section id="calculator" className="py-20 lg:py-28 bg-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 px-4 py-2 rounded-full mb-6">
                <BarChart3 className="h-4 w-4 text-green-400" />
                <span className="text-green-300 text-sm font-medium">ROI Calculator</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-calculator-title">
                The After-Hours Helpdesk Calculator
              </h2>
              <p className="text-white/60 text-lg">
                See how much margin you're leaving on the table.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-white/10" data-testid="card-calculator">
              <CardContent className="p-8 lg:p-12">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-partner-tracks-title">
              Choose Your Partner Track
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
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
                <Card className="bg-gradient-to-br from-purple-900/30 to-[#0d1321] border-purple-500/20" data-testid="card-white-label">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <Building2 className="h-7 w-7 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">The Ghost</h3>
                        <p className="text-purple-400">Invisible Integration</p>
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
                <Card className="bg-gradient-to-br from-blue-900/30 to-[#0d1321] border-blue-500/20" data-testid="card-referral">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center">
                        <Users className="h-7 w-7 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">The Broker</h3>
                        <p className="text-blue-400">Hands-Free Revenue</p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-resources-title">
              Partner Resources
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Exclusive playbooks to accelerate your growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <p className="text-white/70 text-sm mb-4">Click below to download your resource:</p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
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
