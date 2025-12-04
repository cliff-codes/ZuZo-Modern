import type { Request, Response } from 'express';
import { pool } from '../db';
import { asyncHandler } from '../middleware/async-handler';

export const healthController = {
    check: asyncHandler(async (_req: Request, res: Response): Promise<void> => {
        // Check database connection
        let dbStatus = 'disconnected';
        try {
            await pool.query('SELECT 1');
            dbStatus = 'connected';
        } catch (error) {
            dbStatus = 'error';
        }

        const health = {
            status: dbStatus === 'connected' ? 'healthy' : 'unhealthy',
            timestamp: new Date().toISOString(),
            services: {
                database: dbStatus,
            },
        };

        const statusCode = dbStatus === 'connected' ? 200 : 503;
        res.status(statusCode).json(health);
    }),
};

