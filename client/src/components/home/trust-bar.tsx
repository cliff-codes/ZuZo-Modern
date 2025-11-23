export function TrustBar() {
  const stats = [
    { value: "500+", label: "Businesses Served" },
    { value: "60%", label: "Average Cost Reduction" },
    { value: "24/7", label: "Global Coverage" },
    { value: "48hrs", label: "Launch Time" },
  ];

  return (
    <section className="py-12 bg-card border-y">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
