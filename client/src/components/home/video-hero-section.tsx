import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play, CheckCircle } from "lucide-react";
import videoFile from "@assets/Zuzo Ltd Gitex - Oct 7_ 2025_1760910955846-DS4WSt0i_1763928463966.mp4";

export function VideoHeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Stop Losing Customers to Poor Support
              <br />
              <span className="text-primary">Start Delivering Exceptional Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get world-class customer support, sales, and admin teams powered by AI automation and omnichannel technology — <strong>without hiring, training, or managing staff</strong>
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold">Reduce costs by 60%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold">Launch in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold">Scale instantly</span>
              </div>
            </div>

            <Link href="/book-demo">
              <Button size="lg" className="text-lg px-8 py-6 h-auto" data-testid="button-hero-book-demo">
                Get Your Free Strategy Session Now
              </Button>
            </Link>
            
            <p className="text-sm text-muted-foreground mt-4">
              🎁 Free 30-minute consultation • No credit card • No commitment
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-card border">
            <video
              controls
              className="w-full"
              poster="/api/placeholder/1200/675"
              data-testid="video-hero-player"
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                <span className="font-semibold">3-Minute Overview:</span>
                <span className="text-sm">See how ZuZo transforms your customer operations with AI + expert teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
