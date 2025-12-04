import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/errors';
import { logger } from '../utils/logger';

export function errorHandler(
    err: Error | AppError,
    req: Request,
    res: Response,
    _next: NextFunction,
): void {
    // JSON parsing errors (empty body, malformed JSON)
    // These occur when express.json() tries to parse invalid or empty JSON
    if (err instanceof SyntaxError && err.message.includes('JSON')) {
        logger.warn('JSON parsing error', 'error-handler', {
            message: err.message,
            path: req.path,
        });
        // For empty bodies, return success (some endpoints don't need a body)
        if (err.message.includes('Unexpected end of JSON input')) {
            req.body = req.body || {};
            return res.status(400).json({
                error: 'Empty or invalid JSON body',
                message: 'Request body is empty or contains invalid JSON. Some endpoints may work without a body.',
            });
        }
        res.status(400).json({
            error: 'Invalid JSON in request body',
            message: err.message,
        });
        return;
    }

    // Zod validation errors
    if (err instanceof ZodError) {
        const errors = err.errors.map((e) => ({
            path: e.path.join('.'),
            message: e.message,
        }));

        logger.warn('Validation error', 'error-handler', { errors });
        res.status(400).json({
            error: 'Validation failed',
            details: errors,
        });
        return;
    }

    // Custom application errors
    if (err instanceof AppError) {
        logger.error(err.message, err, 'error-handler', {
            statusCode: err.statusCode,
            isOperational: err.isOperational,
        });

        res.status(err.statusCode).json({
            error: err.message,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        });
        return;
    }

    // Unknown errors
    logger.error('Unhandled error', err, 'error-handler');
    res.status(500).json({
        error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
}

