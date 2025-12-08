import type { Request, Response } from 'express';
import { storage } from '../storage';
import { asyncHandler } from '../middleware/async-handler';

export const testimonialsController = {
    create: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const testimonial = await storage.createTestimonial(req.body);
        res.status(201).json(testimonial);
    }),

    getAll: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const publishedOnly = req.query.published !== 'false';
        const testimonials = await storage.getTestimonials(publishedOnly);
        res.json(testimonials);
    }),
};

