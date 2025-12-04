import type { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ValidationError } from '../utils/errors';

/**
 * Validates request body against a Zod schema
 */
export function validateBody(schema: ZodSchema) {
    return (req: Request, _res: Response, next: NextFunction): void => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                throw new ValidationError('Invalid request data', error.errors);
            }
            next(error);
        }
    };
}

/**
 * Validates request query parameters against a Zod schema
 */
export function validateQuery(schema: ZodSchema) {
    return (req: Request, _res: Response, next: NextFunction): void => {
        try {
            req.query = schema.parse(req.query);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                throw new ValidationError('Invalid query parameters', error.errors);
            }
            next(error);
        }
    };
}

/**
 * Validates request params against a Zod schema
 */
export function validateParams(schema: ZodSchema) {
    return (req: Request, _res: Response, next: NextFunction): void => {
        try {
            req.params = schema.parse(req.params);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                throw new ValidationError('Invalid route parameters', error.errors);
            }
            next(error);
        }
    };
}

