import { SEOHead } from "@/components/seo/seo-head";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - ZuZo"
        description="Learn how ZuZo collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        canonical="/privacy-policy"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg text-muted-foreground">
              At Zuzo, we are committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our services.
            </p>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect and process the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Contact information:</strong> Name, email address, phone number, and postal address.</li>
                <li><strong>Account information:</strong> Username, password, and other credentials used to access our services.</li>
                <li><strong>Business information:</strong> Company name, job title, and other details relevant to the services we provide.</li>
                <li><strong>Communication data:</strong> Correspondence and communications exchanged with us.</li>
                <li><strong>Usage data:</strong> Information about how you use our website and services, including IP address, browser type, and device information.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our services to you.</li>
                <li>To communicate with you regarding our services and updates.</li>
                <li>To personalize and improve your experience with our services.</li>
                <li>To comply with legal and regulatory requirements.</li>
                <li>For marketing and promotional purposes with your consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Service providers:</strong> Third-party service providers who assist us in operating our business and providing services.</li>
                <li><strong>Legal purposes:</strong> When required to comply with applicable laws, regulations, legal processes, or government requests.</li>
                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or any form of transfer or sale of some or all of our assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We take the security of your information seriously and implement appropriate technical and organizational measures to safeguard your personal data.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access, correct, or update your personal information.</li>
                <li>Object to the processing of your information.</li>
                <li>Request deletion of your data, subject to legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. We will notify you about significant changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at{" "}
                <a href="tel:+233240526570" className="text-primary hover:underline">+233 240 526 570</a> or{" "}
                <a href="mailto:support@zuzogp.com" className="text-primary hover:underline">support@zuzogp.com</a>.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-muted-foreground italic">
                By using our services, you agree to the collection and use of information as outlined in this Privacy Policy.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: November 24, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
