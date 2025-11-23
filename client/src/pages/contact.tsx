import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Facebook } from "lucide-react";
import { SEOHead, getOrganizationSchema } from "@/components/seo/seo-head";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us"
        description="Get in touch with ZuZo BPO Solutions. Located at World Trade Centre Accra, Ghana. Email: remote@zuzogp.com. Phone: +233 24 052 6570. 24/7 support available."
        canonical="/contact"
        keywords="contact ZuZo, BPO contact, Ghana contact center, business process outsourcing inquiry"
        schema={getOrganizationSchema()}
      />
      <Header />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to transform your operations? We're here to help. Reach out and let's discuss how ZuZo can accelerate your business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:remote@zuzogp.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        remote@zuzogp.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Phone</div>
                      <div className="space-y-1.5">
                        <a href="tel:+233240526570" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                          +233 24 052 6570
                        </a>
                        <a href="tel:+233302729016" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                          +233 30 272 9016
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">WhatsApp</div>
                      <a href="https://wa.me/233508000013" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +233 50 800 0013
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Office</div>
                      <p className="text-sm text-muted-foreground">
                        World Trade Centre Accra<br />
                        29 Independence Avenue, 1st Floor<br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <p className="text-sm text-muted-foreground">
                        Mon - Fri: 8:00 AM - 6:00 PM GMT<br />
                        24/7 Support Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Average Response Time</div>
                    <div className="text-muted-foreground">&lt; 24 hours</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href="https://www.linkedin.com/company/zuzo-contactcare247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover-elevate transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">LinkedIn</div>
                      <div className="text-xs text-muted-foreground">Follow us for updates</div>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100063778181391"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover-elevate transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Facebook className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Facebook</div>
                      <div className="text-xs text-muted-foreground">Like our page</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/233508000013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover-elevate transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">Chat with us instantly</div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
