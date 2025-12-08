import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

/**
 * Security headers middleware
 */
export function securityHeaders(_req: Request, res: Response, next: NextFunction): void {
    // Prevent clickjacking
    res.setHeader('X-Frame-Options', 'DENY');
    // Prevent MIME type sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff');
    // Enable XSS protection
    res.setHeader('X-XSS-Protection', '1; mode=block');
    // Referrer policy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    // Content Security Policy (adjust as needed)
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
    );
    next();
}

/**
 * Rate limiting placeholder - in production, use a proper rate limiting library like express-rate-limit
 */
export function rateLimiter(_req: Request, _res: Response, next: NextFunction): void {
    // TODO: Implement proper rate limiting with express-rate-limit or similar
    // For now, this is a placeholder
    next();
}

/**
 * Request size limiter - already handled by express.json limit, but good to document
 */
export function requestSizeLimiter(_req: Request, _res: Response, next: NextFunction): void {
    // Request size is already limited by express.json({ limit: '10mb' })
    next();
}

