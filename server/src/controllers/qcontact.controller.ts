import type { Request, Response } from 'express';
import { qcontactService } from '../services/qcontact.service';
import { storage } from '../storage';
import { NotFoundError } from '../utils/errors';
import { asyncHandler } from '../middleware/async-handler';

export const qcontactController = {
    /**
     * Forward a lead to QContact by lead ID
     * POST /api/qcontact/leads/:id/forward
     */
    forwardLead: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { retry = false, maxRetries } = req.body;

        const lead = await storage.getLeadById(id);
        if (!lead) {
            throw new NotFoundError('Lead');
        }

        let result;
        if (retry) {
            result = await qcontactService.forwardLeadWithRetry(lead, maxRetries || 2);
        } else {
            result = await qcontactService.forwardLead(lead);
        }

        if (result.success) {
            res.json({
                success: true,
                message: 'Lead forwarded to QContact successfully',
                leadId: lead.id,
            });
        } else {
            res.status(500).json({
                success: false,
                error: result.error || 'Failed to forward lead to QContact',
                leadId: lead.id,
            });
        }
    }),

    /**
     * Forward a subscriber to QContact by subscriber ID
     * POST /api/qcontact/subscribers/:id/forward
     */
    forwardSubscriber: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { retry = false, maxRetries } = req.body;

        const subscriber = await storage.getSubscriberById(id);
        if (!subscriber) {
            throw new NotFoundError('Subscriber');
        }

        let result;
        if (retry) {
            result = await qcontactService.forwardSubscriberWithRetry(subscriber, maxRetries || 2);
        } else {
            result = await qcontactService.forwardSubscriber(subscriber);
        }

        if (result.success) {
            res.json({
                success: true,
                message: 'Subscriber forwarded to QContact successfully',
                subscriberId: subscriber.id,
            });
        } else {
            res.status(500).json({
                success: false,
                error: result.error || 'Failed to forward subscriber to QContact',
                subscriberId: subscriber.id,
            });
        }
    }),

    /**
     * Get QContact service status and configuration
     * GET /api/qcontact/status
     */
    getStatus: asyncHandler(async (_req: Request, res: Response): Promise<void> => {
        const orgId = process.env.QCONTACT_ORG_ID;
        const eventId = process.env.QCONTACT_EVENT_ID;
        const webhookUrl = process.env.QCONTACT_WEBHOOK_URL;
        const isConfigured = qcontactService.isServiceConfigured();

        res.json({
            configured: isConfigured,
            hasOrgId: !!orgId,
            hasEventId: !!eventId,
            hasCustomWebhookUrl: !!webhookUrl,
            setupInstructions: !isConfigured
                ? {
                      message: 'QContact is not fully configured',
                      steps: [
                          '1. Get your Organization ID and Event ID from QContact dashboard',
                          '2. Navigate to Settings → Integrations → Webhooks',
                          '3. Add QCONTACT_ORG_ID and QCONTACT_EVENT_ID to your .env file',
                          '4. Restart the server',
                      ],
                      documentation: 'See server/docs/QCONTACT_SETUP.md for detailed instructions',
                  }
                : undefined,
        });
    }),

    /**
     * Test QContact webhook connection
     * POST /api/qcontact/test
     */
    testConnection: asyncHandler(async (_req: Request, res: Response): Promise<void> => {
        // Create a test lead to test the connection
        const testLead = {
            id: 'test-' + Date.now(),
            name: 'Test Lead',
            email: 'test@example.com',
            company: 'Test Company',
            phone: null,
            message: 'This is a test message from the API',
            source: 'api_test',
            industry: null,
            teamSize: null,
            currentChallenges: null,
            interestedServices: null,
            estimatedMonthlySavings: null,
            createdAt: new Date(),
        };

        const result = await qcontactService.forwardLead(testLead as any);

        if (result.success) {
            res.json({
                success: true,
                message: 'QContact webhook connection test successful',
            });
        } else {
            res.status(500).json({
                success: false,
                error: result.error || 'QContact webhook connection test failed',
            });
        }
    }),
};
