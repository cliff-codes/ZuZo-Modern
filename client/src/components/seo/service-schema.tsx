import { Helmet } from "react-helmet-async";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
}

export function ServiceSchema({ name, description, url, category = "Business Process Outsourcing" }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "ZuZo Company Limited",
      "url": "https://zuzogp.com"
    },
    "areaServed": "Worldwide",
    "category": category,
    "url": `https://zuzogp.com${url}`
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
