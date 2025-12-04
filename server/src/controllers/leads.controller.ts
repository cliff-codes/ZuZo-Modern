import type { Request, Response } from 'express';
import { storage } from '../storage';
import { qcontactService } from '../services/qcontact.service';
import { logger } from '../utils/logger';
import { asyncHandler } from '../middleware/async-handler';

export const leadsController = {
    create: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const lead = await storage.createLead(req.body);

        // Forward to QContact asynchronously (don't block the response)
        qcontactService.forwardLeadWithRetry(lead).catch((error) => {
            logger.error('Failed to forward lead to QContact', error, 'leads-controller', {
                leadId: lead.id,
            });
        });

        res.status(201).json(lead);
    }),

    getAll: asyncHandler(async (_req: Request, res: Response): Promise<void> => {
        const leads = await storage.getLeads();
        res.json(leads);
    }),
};

