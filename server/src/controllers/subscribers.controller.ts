import type { Request, Response } from 'express';
import { storage } from '../storage';
import { qcontactService } from '../services/qcontact.service';
import { logger } from '../utils/logger';
import { asyncHandler } from '../middleware/async-handler';

export const subscribersController = {
    create: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const subscriber = await storage.createSubscriber(req.body);

        // Forward to QContact asynchronously (don't block the response)
        qcontactService.forwardSubscriberWithRetry(subscriber).catch((error) => {
            logger.error('Failed to forward subscriber to QContact', error, 'subscribers-controller', {
                subscriberId: subscriber.id,
            });
        });

        res.status(201).json(subscriber);
    }),

    getAll: asyncHandler(async (_req: Request, res: Response): Promise<void> => {
        const subscribers = await storage.getSubscribers();
        res.json(subscribers);
    }),
};

