import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ROICalculator } from "@/components/calculator/roi-calculator";

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              ROI Calculator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              See how much you could save by partnering with ZuZo for your BPO needs. Real numbers, real savings.
            </p>
          </div>
          <ROICalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
}
