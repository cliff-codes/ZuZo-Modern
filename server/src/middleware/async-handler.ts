import type { Request, Response, NextFunction } from 'express';

type AsyncRequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction,
) => Promise<void> | Promise<Response>;

/**
 * Wraps async route handlers to automatically catch and forward errors
 * to the error handling middleware
 */
export function asyncHandler(fn: AsyncRequestHandler) {
    return (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

