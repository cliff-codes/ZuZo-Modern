// client/src/components/cta/call-to-action.tsx
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

interface CallToActionProps {
    title: string;
    description: string;
    primaryButton: {
        text: string;
        href: string;
        icon?: React.ReactNode;
    };
    secondaryButton?: {
        text: string;
        href: string;
        icon?: React.ReactNode;
    };
    variant?: 'primary' | 'secondary' | 'gradient';
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export function CallToAction({
    title,
    description,
    primaryButton,
    secondaryButton,
    variant = 'gradient',
    className = '',
    titleClassName = '',
    descriptionClassName = '',
}: CallToActionProps) {
    const variantClasses = {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        gradient: 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground',
    };

    return (
        <section className={`py-20 lg:py-32 ${variantClasses[variant]} ${className}`}>
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2
                        className={`font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6 ${titleClassName}`}
                    >
                        {title}
                    </h2>
                    <p
                        className={`text-xl mb-10 opacity-90 max-w-3xl mx-auto ${descriptionClassName}`}
                    >
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <Link href={primaryButton.href} className="w-full md:w-auto">
                            <Button
                                size="lg"
                                variant={variant === 'primary' ? 'default' : 'secondary'}
                                className="w-full gap-2 text-base font-medium"
                            >
                                {primaryButton.text}
                                {primaryButton.icon || <ChevronRight className="w-5 h-5" />}
                            </Button>
                        </Link>
                        {secondaryButton && (
                            <Link href={secondaryButton.href} className="w-full md:w-auto">
                                <Button
                                    size="lg"
                                    variant={variant === 'primary' ? 'outline' : 'outline'}
                                    className={`w-full gap-2 text-base font-medium ${
                                        variant !== 'primary'
                                            ? 'border-white/30 hover:border-white text-white hover:bg-white/10'
                                            : ''
                                    }`}
                                >
                                    {secondaryButton.text}
                                    {secondaryButton.icon || <MessageCircle className="w-5 h-5" />}
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
