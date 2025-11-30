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
  ogImage,
  ogType = "website",
  schema,
  keywords,
}: SEOProps) {
  const fullTitle = `${title} | ZuZo - Human-AI Powered BPO Solutions`;
  const siteUrl = 'https://zuzo.replit.app';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/og-default.png`;

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
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="ZuZo" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

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

export function getPartnerProgramSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "ZuZo Partner Program",
    "description": "White-label BPO partnership for MSPs, 3PLs, and NDIS providers with technology integration, margin acceleration, and rapid deployment.",
    "offers": [
      {
        "@type": "Offer",
        "name": "White Label Partnership - 'The Ghost'",
        "description": "Become the invisible fulfillment engine for your clients. Deliver ZuZo-powered services under your brand with full margin capture.",
        "seller": {
          "@type": "Organization",
          "name": "ZuZo Company Limited"
        },
        "url": "https://zuzo.replit.app/partner-portal",
        "priceCurrency": "USD",
        "price": "0"
      },
      {
        "@type": "Offer",
        "name": "Referral Partnership - 'The Broker'",
        "description": "Introduce qualified leads to ZuZo and earn recurring referral commissions. Zero setup cost, passive revenue.",
        "seller": {
          "@type": "Organization",
          "name": "ZuZo Company Limited"
        },
        "url": "https://zuzo.replit.app/partner-portal",
        "priceCurrency": "USD",
        "price": "0"
      }
    ],
    "provider": {
      "@type": "Organization",
      "name": "ZuZo Company Limited",
      "description": "AI-powered virtual assistants and omnichannel BPO solutions for Global enterprises"
    },
    "availableLanguage": ["English"],
    "areaServed": ["US", "Canada", "UK", "Australia", "Global"]
  };
}
