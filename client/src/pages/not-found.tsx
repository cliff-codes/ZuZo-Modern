import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="font-heading font-bold text-9xl text-primary/20">404</h1>
                    </div>

                    <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                        Page Not Found
                    </h2>

                    <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved. Let's get you
                        back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" data-testid="button-go-home">
                                <Home className="mr-2 h-5 w-5" />
                                Go to Homepage
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => window.history.back()}
                            data-testid="button-go-back"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
