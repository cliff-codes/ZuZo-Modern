import { Award, Users, Clock, Shield } from 'lucide-react';

export function MiniTrustBar() {
    return (
        <div className="bg-muted/30 py-6" data-testid="mini-trust-bar">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center">
                            <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="font-bold text-lg">500+</div>
                        <div className="text-xs text-muted-foreground">Happy Clients</div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                            <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="font-bold text-lg">24/7</div>
                        <div className="text-xs text-muted-foreground">Support Coverage</div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                            <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="font-bold text-lg">4.5/5</div>
                        <div className="text-xs text-muted-foreground">Clutch Rating</div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
                            <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="font-bold text-lg">ISO 27001</div>
                        <div className="text-xs text-muted-foreground">Aligned</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
