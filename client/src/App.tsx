import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/home";
import ContactCenterService from "@/pages/services/contact-center";
import VirtualAssistantsService from "@/pages/services/virtual-assistants";
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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={Home} />

      {/* Service Pages */}
      <Route path="/services/contact-center" component={ContactCenterService} />
      <Route path="/services/virtual-assistants" component={VirtualAssistantsService} />

      {/* Resources */}
      <Route path="/resources/blog" component={BlogPage} />
      <Route path="/resources/blog/:slug" component={BlogPostPage} />
      <Route path="/resources/case-studies" component={CaseStudiesPage} />
      <Route path="/resources/case-studies/:slug" component={CaseStudyPage} />
      <Route path="/resources/faq" component={FAQPage} />

      {/* Tools & Actions */}
      <Route path="/contact" component={Contact} />
      <Route path="/book-demo" component={BookDemo} />
      <Route path="/roi-calculator" component={ROICalculatorPage} />
      <Route path="/pricing" component={Pricing} />

      {/* Company */}
      <Route path="/company" component={About} />
      <Route path="/company/about" component={About} />

      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
