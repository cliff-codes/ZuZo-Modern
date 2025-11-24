import { Link } from "wouter";
import { Facebook, Linkedin, Mail, Phone, MapPin, MessageCircle, Award } from "lucide-react";
import { NewsletterSignup } from "./newsletter-signup";
import whiteLogo from "@assets/ZUZO LOGO ALL WHITE_1763932128050.png";

export function Footer() {

  return (
    <footer className="bg-slate-950 text-white border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img 
              src={whiteLogo} 
              alt="ZuZo Logo" 
              className="h-16 w-auto mb-6"
              data-testid="footer-logo"
            />
            <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming business operations with AI-powered virtual assistants and omnichannel contact center solutions. Trusted by 500+ businesses worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  World Trade Centre Accra<br />
                  29 Independence Avenue, 1st Floor<br />
                  Accra, Ghana
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-gray-300 flex-shrink-0" />
                <a href="mailto:remote@zuzogp.com" className="text-gray-300 hover:text-white transition-colors" data-testid="link-email">
                  remote@zuzogp.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+233240526570" className="text-gray-300 hover:text-white transition-colors block" data-testid="link-phone-1">
                    +233 24 052 6570
                  </a>
                  <a href="tel:+233302729016" className="text-gray-300 hover:text-white transition-colors block" data-testid="link-phone-2">
                    +233 30 272 9016
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MessageCircle className="h-4 w-4 text-gray-300 flex-shrink-0" />
                <a href="https://wa.me/233508000013" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" data-testid="link-whatsapp">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/contact-center" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-contact-center">
                  Contact Center
                </Link>
              </li>
              <li>
                <Link href="/services/virtual-assistants" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-virtual-assistants">
                  Virtual Assistants
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-ai-automation">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/back-office" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-back-office">
                  Back Office
                </Link>
              </li>
              <li>
                <Link href="/services/workforce-management" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-workforce">
                  Workforce Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roi-calculator" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-roi-calculator">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-book-demo">
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="font-heading font-semibold mb-2 text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest insights on BPO, AI automation, and business optimization.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} ZuZo Company Limited. All rights reserved.
            </p>
            <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors" data-testid="footer-link-privacy">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://clutch.co/profile/zuzo-company#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Clutch.co Reviews"
              data-testid="link-clutch"
            >
              <Award className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/zuzo-contactcare247/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063778181391"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
              data-testid="link-facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/233508000013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="WhatsApp"
              data-testid="link-whatsapp-footer"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
