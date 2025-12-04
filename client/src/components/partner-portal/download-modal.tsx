import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Download, CheckCircle } from 'lucide-react';

interface DownloadModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    selectedAsset: string | null;
    onDownload: (assetName: string) => void;
}

const playbooks: Record<string, { url: string; filename: string }> = {
    'Australia NDIS Growth Pack': {
        url: '/assets/playbooks/australia-ndis-growth-pack.html',
        filename: 'Australia-NDIS-Growth-Pack.html',
    },
    'The MSP Night Shift Protocol': {
        url: '/assets/playbooks/msp-night-shift-protocol.html',
        filename: 'MSP-Night-Shift-Protocol.html',
    },
    'Peak Season Survival Guide': {
        url: '/assets/playbooks/peak-season-survival-guide.html',
        filename: 'Peak-Season-Survival-Guide.html',
    },
};

export function DownloadModal({ open, onOpenChange, selectedAsset, onDownload }: DownloadModalProps) {
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmailSubmitted(true);
    };

    const getDownloadUrl = (assetName: string | null) => {
        if (!assetName || !playbooks[assetName]) return null;
        return playbooks[assetName];
    };

    const handleDownload = () => {
        if (selectedAsset) {
            const downloadData = getDownloadUrl(selectedAsset);
            if (downloadData) {
                window.open(downloadData.url, '_blank');
            }
            onDownload(selectedAsset);
            setTimeout(() => {
                onOpenChange(false);
                setEmailSubmitted(false);
                setEmail('');
            }, 500);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-purple-500/30 text-white max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">
                        {emailSubmitted ? 'Ready to Download!' : 'Get Your Resource'}
                    </DialogTitle>
                    <DialogDescription className="text-white/60">
                        {emailSubmitted
                            ? 'Your resource is ready'
                            : 'Enter your work email to access this exclusive resource'}
                    </DialogDescription>
                </DialogHeader>

                {emailSubmitted ? (
                    <div className="space-y-6 py-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="flex justify-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-600/20 to-green-500/10 border-2 border-green-500/50 flex items-center justify-center">
                                <CheckCircle className="h-8 w-8 text-green-400" />
                            </div>
                        </motion.div>
                        <div className="text-center">
                            <p className="text-white/70 text-base mb-6">
                                Your resource is ready to download:
                            </p>
                            <Button
                                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-lg shadow-green-500/25"
                                onClick={handleDownload}
                                data-testid="button-download-resource"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download {selectedAsset}
                            </Button>
                        </div>
                        <p className="text-xs text-white/40 text-center">
                            We've also sent a copy to {email}
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleEmailSubmit} className="space-y-4 py-4">
                        <div>
                            <Label htmlFor="work-email" className="text-white/80">
                                Work Email
                            </Label>
                            <div className="relative mt-2">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                                <Input
                                    id="work-email"
                                    type="email"
                                    placeholder="you@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500"
                                    data-testid="input-download-email"
                                />
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
                            data-testid="button-submit-download"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Get Access Now
                        </Button>
                        <p className="text-xs text-white/40 text-center">
                            We respect your privacy. No spam, ever.
                        </p>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}

