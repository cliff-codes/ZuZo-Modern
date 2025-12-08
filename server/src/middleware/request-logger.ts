import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, unknown> | undefined = undefined;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
        capturedJsonResponse = bodyJson as Record<string, unknown>;
        return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on('finish', () => {
        const duration = Date.now() - start;
        if (path.startsWith('/api')) {
            const logData: Record<string, unknown> = {
                method: req.method,
                path,
                statusCode: res.statusCode,
                duration: `${duration}ms`,
                ...(capturedJsonResponse && { response: capturedJsonResponse }),
            };

            if (res.statusCode >= 400) {
                logger.warn('API Request', 'request-logger', logData);
            } else {
                logger.info('API Request', 'request-logger', logData);
            }
        }
    });

    next();
}

