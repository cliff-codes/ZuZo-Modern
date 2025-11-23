import { Link } from "wouter";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { NewsletterSignup } from "./newsletter-signup";

export function Footer() {

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="font-heading font-bold text-3xl text-primary mb-4">
              ZuZo
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
              Transforming business operations with AI-powered virtual assistants and omnichannel contact center solutions. Trusted by 500+ businesses worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">Medina Estates, Greater Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href="mailto:remote@zuzogp.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                  remote@zuzogp.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href="tel:+233240526570" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-phone">
                  +233 240 526 570
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/contact-center" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact-center">
                  Contact Center
                </Link>
              </li>
              <li>
                <Link href="/services/virtual-assistants" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-virtual-assistants">
                  Virtual Assistants
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roi-calculator" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-roi-calculator">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-book-demo">
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="max-w-md">
            <h3 className="font-heading font-semibold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest insights on BPO, AI automation, and business optimization.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZuZo Company Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
