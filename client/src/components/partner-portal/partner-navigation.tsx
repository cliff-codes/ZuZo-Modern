import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import whiteLogo from '@assets/ZUZO LOGO ALL WHITE_1764457099254.png';

interface PartnerNavigationProps {
    onScrollToCalculator: () => void;
    onScrollToBooking: () => void;
}

export function PartnerNavigation({
    onScrollToCalculator,
    onScrollToBooking,
}: PartnerNavigationProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                <Link href="/">
                    <img
                        src={whiteLogo}
                        alt="ZuZo Logo"
                        className="h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                        data-testid="link-logo"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#calculator"
                        className="text-white/70 hover:text-white transition-colors text-sm"
                        data-testid="link-calculator"
                    >
                        Calculator
                    </a>
                    <a
                        href="#partner-tracks"
                        className="text-white/70 hover:text-white transition-colors text-sm"
                        data-testid="link-partner-tracks"
                    >
                        Partner Tracks
                    </a>
                    <a
                        href="#resources"
                        className="text-white/70 hover:text-white transition-colors text-sm"
                        data-testid="link-resources"
                    >
                        Resources
                    </a>
                    <Button
                        size="sm"
                        onClick={onScrollToBooking}
                        className="bg-purple-600 hover:bg-purple-700 text-white border-0"
                        data-testid="button-nav-become-partner"
                    >
                        Book a Call
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-white"
                                data-testid="button-mobile-menu"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="bg-[#0a0f1a] border-white/10 text-white w-[280px]"
                        >
                            <VisuallyHidden>
                                <SheetTitle>Partner Portal Navigation</SheetTitle>
                                <SheetDescription>
                                    Navigate to different sections of the Partner Portal
                                </SheetDescription>
                            </VisuallyHidden>
                            <div className="flex flex-col gap-6 mt-8">
                                <Button
                                    onClick={onScrollToBooking}
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0"
                                    data-testid="button-mobile-become-partner"
                                >
                                    Book a Call
                                </Button>
                                <a
                                    href="#calculator"
                                    className="text-white/70 hover:text-white transition-colors py-2"
                                    data-testid="link-mobile-calculator"
                                >
                                    Calculator
                                </a>
                                <a
                                    href="#partner-tracks"
                                    className="text-white/70 hover:text-white transition-colors py-2"
                                    data-testid="link-mobile-partner-tracks"
                                >
                                    Partner Tracks
                                </a>
                                <a
                                    href="#resources"
                                    className="text-white/70 hover:text-white transition-colors py-2"
                                    data-testid="link-mobile-resources"
                                >
                                    Resources
                                </a>
                                <Link
                                    href="/"
                                    className="text-white/70 hover:text-white transition-colors py-2"
                                >
                                    Back to Main Site
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
