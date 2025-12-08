import type { Express } from 'express';
import {
    insertLeadSchema,
    insertSubscriberSchema,
    insertBookingSchema,
    insertBlogPostSchema,
    insertCaseStudySchema,
    insertTestimonialSchema,
} from '../schema/schema';
import { z } from 'zod';
import { validateBody, validateParams } from '../middleware/validator';
import { leadsController } from '../controllers/leads.controller';
import { subscribersController } from '../controllers/subscribers.controller';
import { bookingsController } from '../controllers/bookings.controller';
import { blogPostsController } from '../controllers/blog-posts.controller';
import { caseStudiesController } from '../controllers/case-studies.controller';
import { testimonialsController } from '../controllers/testimonials.controller';
import { healthController } from '../controllers/health.controller';
import { qcontactController } from '../controllers/qcontact.controller';

const idParamSchema = z.object({
    id: z.string().uuid('Invalid ID format'),
});

const slugParamSchema = z.object({
    slug: z.string().min(1, 'Slug is required'),
});

const bookingStatusBodySchema = z.object({
    status: z.enum(['pending', 'confirmed', 'completed', 'cancelled']),
});

const qcontactForwardBodySchema = z.object({
    retry: z.boolean().optional().default(false),
    maxRetries: z.number().int().min(0).max(5).optional(),
});

export function registerRoutes(app: Express): void {
    // Health check
    app.get('/api/health', healthController.check);

    // Lead Management (Contact Forms)
    app.post('/api/leads', validateBody(insertLeadSchema), leadsController.create);
    app.get('/api/leads', leadsController.getAll);

    // Newsletter Subscribers
    app.post('/api/subscribers', validateBody(insertSubscriberSchema), subscribersController.create);
    app.get('/api/subscribers', subscribersController.getAll);

    // Demo Bookings
    app.post('/api/bookings', validateBody(insertBookingSchema), bookingsController.create);
    app.get('/api/bookings', bookingsController.getAll);
    app.patch(
        '/api/bookings/:id/status',
        validateParams(idParamSchema),
        validateBody(bookingStatusBodySchema),
        bookingsController.updateStatus,
    );

    // Blog Posts
    app.post('/api/blog-posts', validateBody(insertBlogPostSchema), blogPostsController.create);
    app.get('/api/blog-posts', blogPostsController.getAll);
    app.get('/api/blog-posts/:slug', validateParams(slugParamSchema), blogPostsController.getBySlug);

    // Case Studies
    app.post('/api/case-studies', validateBody(insertCaseStudySchema), caseStudiesController.create);
    app.get('/api/case-studies', caseStudiesController.getAll);
    app.get('/api/case-studies/:slug', validateParams(slugParamSchema), caseStudiesController.getBySlug);

    // Testimonials
    app.post('/api/testimonials', validateBody(insertTestimonialSchema), testimonialsController.create);
    app.get('/api/testimonials', testimonialsController.getAll);

    // QContact Integration
    app.get('/api/qcontact/status', qcontactController.getStatus);
    app.get('/api/qcontact/test', qcontactController.testConnection);
    app.post('/api/qcontact/test', qcontactController.testConnection); // Also support POST for backward compatibility
    app.post(
        '/api/qcontact/leads/:id/forward',
        validateParams(idParamSchema),
        validateBody(qcontactForwardBodySchema),
        qcontactController.forwardLead,
    );
    app.post(
        '/api/qcontact/subscribers/:id/forward',
        validateParams(idParamSchema),
        validateBody(qcontactForwardBodySchema),
        qcontactController.forwardSubscriber,
    );
}
