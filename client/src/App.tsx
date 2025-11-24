import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/scroll-to-top";
import { StickyMobileCTA } from "@/components/layout/sticky-mobile-cta";

// Pages
import Home from "@/pages/home";
import ContactCenterService from "@/pages/services/contact-center";
import VirtualAssistantsService from "@/pages/services/virtual-assistants";
import AIAutomationService from "@/pages/services/ai-automation";
import BackOfficeService from "@/pages/services/back-office";
import WorkforceManagementService from "@/pages/services/workforce-management";
import OmnichannelPlatformService from "@/pages/services/omnichannel-platform";
import Contact from "@/pages/contact";
import BookDemo from "@/pages/book-demo";
import ROICalculatorPage from "@/pages/roi-calculator";
import Pricing from "@/pages/pricing";
import About from "@/pages/company/about";
import BlogPage from "@/pages/resources/blog";
import BlogPostPage from "@/pages/resources/blog-post";
import CaseStudiesPage from "@/pages/resources/case-studies";
import CaseStudyPage from "@/pages/resources/case-study";
import FAQPage from "@/pages/resources/faq";
import IndustriesPage from "@/pages/industries/index";
import EcommercePage from "@/pages/industries/ecommerce";
import FinancialServicesPage from "@/pages/industries/financial-services";
import HealthcarePage from "@/pages/industries/healthcare";
import TechnologyPage from "@/pages/industries/technology";
import RealEstatePage from "@/pages/industries/real-estate";
import ProfessionalServicesPage from "@/pages/industries/professional-services";
import AutomotivePage from "@/pages/industries/automotive";
import LogisticsPage from "@/pages/industries/logistics";
import PrivacyPolicy from "@/pages/privacy-policy";
import CustomerStoriesPage from "@/pages/customer-stories";
import SecurityPage from "@/pages/security";
import ComparePage from "@/pages/compare";
import BPOROIGuidePage from "@/pages/resources/bpo-roi-guide";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={Home} />

      {/* Service Pages */}
      <Route path="/services/contact-center" component={ContactCenterService} />
      <Route path="/services/virtual-assistants" component={VirtualAssistantsService} />
      <Route path="/services/ai-automation" component={AIAutomationService} />
      <Route path="/services/back-office" component={BackOfficeService} />
      <Route path="/services/workforce-management" component={WorkforceManagementService} />
      <Route path="/services/omnichannel-platform" component={OmnichannelPlatformService} />

      {/* Resources */}
      <Route path="/resources/blog" component={BlogPage} />
      <Route path="/resources/blog/:slug" component={BlogPostPage} />
      <Route path="/resources/case-studies" component={CaseStudiesPage} />
      <Route path="/resources/case-studies/:slug" component={CaseStudyPage} />
      <Route path="/resources/faq" component={FAQPage} />
      <Route path="/resources/bpo-roi-guide" component={BPOROIGuidePage} />

      {/* Industries */}
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/industries/ecommerce" component={EcommercePage} />
      <Route path="/industries/financial-services" component={FinancialServicesPage} />
      <Route path="/industries/healthcare" component={HealthcarePage} />
      <Route path="/industries/technology" component={TechnologyPage} />
      <Route path="/industries/real-estate" component={RealEstatePage} />
      <Route path="/industries/professional-services" component={ProfessionalServicesPage} />
      <Route path="/industries/automotive" component={AutomotivePage} />
      <Route path="/industries/logistics" component={LogisticsPage} />

      {/* Tools & Actions */}
      <Route path="/contact" component={Contact} />
      <Route path="/book-demo" component={BookDemo} />
      <Route path="/roi-calculator" component={ROICalculatorPage} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/customer-stories" component={CustomerStoriesPage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/compare" component={ComparePage} />

      {/* Company */}
      <Route path="/company" component={About} />
      <Route path="/company/about" component={About} />

      {/* Legal */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />

      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <Router />
          <StickyMobileCTA />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
