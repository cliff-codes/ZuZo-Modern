import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does ZuZo provide?",
    answer: "ZuZo offers comprehensive BPO solutions including 24/7 contact center services, AI-powered virtual assistants, workflow automation, back office support, and workforce management. We combine human expertise with AI technology to deliver exceptional results."
  },
  {
    question: "How quickly can you deploy a team?",
    answer: "We can deploy fully trained teams within 48 hours. Our streamlined onboarding process and extensive talent pool allow us to match the right professionals to your needs almost immediately."
  },
  {
    question: "What kind of cost savings can I expect?",
    answer: "On average, our clients achieve 60% cost reduction compared to maintaining in-house teams. The exact savings depend on your specific needs, team size, and service requirements. Use our ROI Calculator for a personalized estimate."
  },
  {
    question: "Do you provide 24/7 support?",
    answer: "Yes! We operate across multiple time zones in Ghana and have teams available 24/7/365 to ensure continuous coverage for your business operations."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including E-commerce, Financial Services, Healthcare, Technology, Real Estate, Professional Services, and more. Our teams are trained to understand industry-specific requirements and compliance needs."
  },
  {
    question: "How do you ensure quality?",
    answer: "We maintain rigorous quality standards through continuous monitoring, regular performance reviews, comprehensive training programs, and dedicated quality assurance teams. All agents undergo extensive training and ongoing skill development."
  },
  {
    question: "What technology do you use?",
    answer: "We use state-of-the-art BPO technology including AI-powered routing, omnichannel platforms, CRM integrations, advanced analytics, and our proprietary smart headset technology for enhanced communication quality."
  },
  {
    question: "Can I scale my team up or down?",
    answer: "Absolutely! One of the key benefits of partnering with ZuZo is complete flexibility. You can scale your team size up or down based on seasonal demands, business growth, or changing needs with minimal notice."
  },
  {
    question: "What are your pricing models?",
    answer: "We offer three flexible pricing models: Hourly ($6.19/hour), Daily ($45/day for 8 hours), and Monthly ($990/month for dedicated VA). Choose the model that best fits your business needs and budget."
  },
  {
    question: "How do virtual assistants differ from contact center agents?",
    answer: "Virtual assistants provide dedicated administrative and executive support (calendar management, email, research, etc.), while contact center agents handle customer-facing interactions (phone support, chat, technical assistance). Both can be customized to your specific requirements."
  },
  {
    question: "What happens if I'm not satisfied with the service?",
    answer: "We're committed to your satisfaction. If you're not happy with any aspect of our service, we'll work with you to address concerns, provide additional training, or replace team members as needed. We also offer flexible contracts with no long-term commitments required."
  },
  {
    question: "How do you handle data security and compliance?",
    answer: "We take data security seriously with SOC 2 compliance, encrypted communications, secure infrastructure, regular security audits, and GDPR compliance. We can also accommodate industry-specific compliance requirements (HIPAA, PCI-DSS, etc.)."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes! We integrate seamlessly with popular CRM systems (Salesforce, HubSpot, Zendesk), communication platforms, project management tools, and custom software. Our technical team ensures smooth integration with your existing workflow."
  },
  {
    question: "Where is ZuZo located?",
    answer: "ZuZo is based in Ghana, West Africa. Our strategic location provides cost advantages while maintaining excellent English proficiency, cultural alignment with Western markets, and favorable time zone coverage."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Find answers to common questions about ZuZo's BPO services, pricing, and operations
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
                      <AccordionTrigger className="text-left font-heading font-semibold text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-heading font-bold text-2xl mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Our team is ready to answer any questions and help you find the perfect BPO solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" data-testid="button-contact">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/book-demo">
                    <Button variant="outline" size="lg" data-testid="button-book-demo">
                      Book Free Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
