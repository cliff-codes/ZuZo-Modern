import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: object;
  keywords?: string;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
  schema,
  keywords,
}: SEOProps) {
  const fullTitle = `${title} | ZuZo - Human-AI Powered BPO Solutions`;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://zuzo.replit.app';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : (typeof window !== 'undefined' ? window.location.href : siteUrl);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="ZuZo" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZuZo Company Limited",
    "legalName": "ZuZo Company Limited",
    "url": "https://zuzo.replit.app",
    "logo": "https://zuzo.replit.app/zuzo-logo.png",
    "description": "AI-powered virtual assistants, omnichannel contact center services, and comprehensive BPO solutions.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "29 Independence Avenue, 1st Floor, World Trade Centre Accra",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233-24-052-6570",
      "contactType": "Sales",
      "email": "remote@zuzogp.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/zuzo-contactcare247/",
      "https://www.facebook.com/profile.php?id=100063778181391"
    ]
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ZuZo BPO Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Cloud-based",
    "offers": {
      "@type": "Offer",
      "price": "6.19",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "description": "Starting from $6.19/hour for AI-powered virtual assistants and BPO services"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "AI-powered virtual assistants, omnichannel contact center, and comprehensive BPO solutions with 24/7 global coverage.",
    "featureList": [
      "24/7 Omnichannel Contact Center",
      "AI-Powered Virtual Assistants",
      "Back Office Support",
      "Workforce Management",
      "48-Hour Launch Capability",
      "60% Cost Reduction"
    ],
    "provider": {
      "@type": "Organization",
      "name": "ZuZo Company Limited"
    }
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  price?: string;
  features: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "ZuZo Company Limited"
    },
    "serviceType": "BPO Services",
    "areaServed": "Global",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://zuzo.replit.app",
      "servicePhone": "+233-24-052-6570"
    },
    ...(service.price && {
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": service.price,
          "priceCurrency": "USD"
        }
      }
    })
  };
}
