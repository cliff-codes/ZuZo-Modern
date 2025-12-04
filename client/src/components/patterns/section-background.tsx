import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface SectionBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'gradient';
    pattern?: 'grid' | 'dots' | 'circuit' | 'blobs' | 'none';
    children: React.ReactNode;
}

export function SectionBackground({
    variant = 'primary',
    pattern = 'blobs',
    className,
    children,
    ...props
}: SectionBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Animated background effect
    useEffect(() => {
        if (pattern !== 'blobs' || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let time = 0;

        const resizeCanvas = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const draw = () => {
            time += 0.001;
            ctx.clearRect(0, 0, width, height);

            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, 'hsl(210, 40%, 98%)');
            gradient.addColorStop(0.3, 'hsl(210, 40%, 96%)');
            gradient.addColorStop(0.7, 'hsl(214, 32%, 91%)');
            gradient.addColorStop(1, 'hsl(215, 20%, 65%)');

            // Draw background
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw animated blobs
            const drawBlob = (x: number, y: number, radius: number, color: string) => {
                ctx.save();
                ctx.beginPath();
                ctx.filter = `blur(60px)`;
                ctx.fillStyle = color;
                ctx.arc(
                    x + Math.sin(time * 0.5) * 50,
                    y + Math.cos(time * 0.3) * 50,
                    radius,
                    0,
                    Math.PI * 2,
                );
                ctx.fill();
                ctx.restore();
            };

            // Add multiple blobs with different colors and movements
            drawBlob(width * 0.3, height * 0.2, 150, 'hsl(210, 40%, 96%, 0.5)');
            drawBlob(width * 0.7, height * 0.8, 200, 'hsl(214, 32%, 91%, 0.4)');
            drawBlob(width * 0.2, height * 0.7, 180, 'hsl(215, 20%, 65%, 0.3)');
            drawBlob(width * 0.8, height * 0.3, 220, 'hsl(210, 40%, 96%, 0.3)');

            requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [pattern]);

    const variantClasses = {
        primary: 'bg-background',
        secondary: 'bg-muted/30',
        accent: 'bg-primary/5',
        gradient: 'bg-gradient-to-br from-primary/10 via-primary/5 to-primary/20',
    };

    const patternStyles = {
        grid: {
            backgroundImage: `
        linear-gradient(to right, hsl(var(--muted)) 1px, transparent 1px),
        linear-gradient(to bottom, hsl(var(--muted)) 1px, transparent 1px)
      `,
            backgroundSize: '40px 40px',
            opacity: '0.1',
        },
        dots: {
            backgroundImage: 'radial-gradient(hsl(var(--muted)) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
            opacity: '0.2',
        },
        circuit: {
            backgroundImage: `
        radial-gradient(circle at 1px 1px, hsl(var(--muted)) 1px, transparent 0),
        radial-gradient(circle at 8px 8px, hsl(var(--muted)) 1px, transparent 0)
      `,
            backgroundSize: '16px 16px',
            opacity: '0.15',
        },
        blobs: {
            background: 'transparent',
        },
        none: {},
    };

    return (
        <div
            className={cn('relative overflow-hidden', variantClasses[variant], className)}
            {...props}
        >
            {pattern === 'blobs' && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ opacity: 0.5 }}
                />
            )}
            {pattern !== 'blobs' && pattern !== 'none' && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        maskImage:
                            'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage:
                            'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                        ...patternStyles[pattern],
                    }}
                    aria-hidden="true"
                />
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
