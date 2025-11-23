import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const services = [
  { title: "Contact Center Services", href: "/services/contact-center", description: "24/7 omnichannel customer support" },
  { title: "Virtual Assistants", href: "/services/virtual-assistants", description: "AI-powered administrative support" },
  { title: "AI & Automation", href: "/services/ai-automation", description: "Intelligent process automation" },
  { title: "Back Office Support", href: "/services/back-office", description: "Administrative & operational support" },
  { title: "Workforce Management", href: "/services/workforce-management", description: "Scalable team solutions" },
];

const industries = [
  { title: "E-commerce & Retail", href: "/industries/ecommerce", description: "24/7 customer support & order management" },
  { title: "Financial Services", href: "/industries/financial-services", description: "Secure, compliant financial operations" },
  { title: "Healthcare", href: "/industries/healthcare", description: "HIPAA-compliant patient support" },
  { title: "Technology & SaaS", href: "/industries/technology", description: "Technical support & customer success" },
  { title: "Real Estate", href: "/industries/real-estate", description: "Lead qualification & tenant support" },
  { title: "Professional Services", href: "/industries/professional-services", description: "Client communication & admin support" },
  { title: "Automotive", href: "/industries/automotive", description: "Dealership & service center support" },
  { title: "Logistics & Transportation", href: "/industries/logistics", description: "Shipment tracking & carrier coordination" },
];

const resources = [
  { title: "Blog", href: "/resources/blog", description: "Latest insights and best practices" },
  { title: "Case Studies", href: "/resources/case-studies", description: "Success stories from our clients" },
  { title: "FAQ", href: "/resources/faq", description: "Frequently asked questions" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="font-heading font-bold text-2xl md:text-3xl text-primary">
              ZuZo
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-sans" data-testid="nav-services-trigger">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate"
                            data-testid={`link-service-${service.href.split("/").pop()}`}
                          >
                            <div className="text-sm font-medium leading-none font-heading">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-sans" data-testid="nav-industries-trigger">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                    {industries.map((industry) => (
                      <li key={industry.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={industry.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate"
                            data-testid={`link-industry-${industry.href.split("/").pop()}`}
                          >
                            <div className="text-sm font-medium leading-none font-heading">
                              {industry.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {industry.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-sans" data-testid="nav-resources-trigger">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6">
                    {resources.map((resource) => (
                      <li key={resource.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={resource.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate"
                            data-testid={`link-resource-${resource.href.split("/").pop()}`}
                          >
                            <div className="text-sm font-medium leading-none font-heading">
                              {resource.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {resource.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/company" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover-elevate disabled:pointer-events-none disabled:opacity-50" data-testid="link-company">
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover-elevate disabled:pointer-events-none disabled:opacity-50" data-testid="link-pricing">
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/roi-calculator" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover-elevate disabled:pointer-events-none disabled:opacity-50" data-testid="link-roi-calculator">
                  ROI Calculator
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="outline" data-testid="button-contact">
                Contact Us
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button data-testid="button-book-demo">
                Book Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 overflow-y-auto">
              <nav className="flex flex-col gap-6 mt-8">
                <div>
                  <h3 className="font-heading font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Services
                  </h3>
                  <div className="flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 rounded-md hover-elevate"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-service-${service.href.split("/").pop()}`}
                      >
                        <div className="font-medium font-heading text-sm">{service.title}</div>
                        <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Industries
                  </h3>
                  <div className="flex flex-col gap-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        className="block px-4 py-3 rounded-md hover-elevate"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-industry-${industry.href.split("/").pop()}`}
                      >
                        <div className="font-medium font-heading text-sm">{industry.title}</div>
                        <p className="text-xs text-muted-foreground mt-1">{industry.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Resources
                  </h3>
                  <div className="flex flex-col gap-2">
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block px-4 py-3 rounded-md hover-elevate"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-resource-${resource.href.split("/").pop()}`}
                      >
                        <div className="font-medium font-heading text-sm">{resource.title}</div>
                        <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Link href="/company" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start" data-testid="mobile-link-company">
                      About
                    </Button>
                  </Link>
                  <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start" data-testid="mobile-link-pricing">
                      Pricing
                    </Button>
                  </Link>
                  <Link href="/roi-calculator" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start" data-testid="mobile-link-roi-calculator">
                      ROI Calculator
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full" data-testid="mobile-button-contact">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/book-demo" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full" data-testid="mobile-button-book-demo">
                      Book Free Demo
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
