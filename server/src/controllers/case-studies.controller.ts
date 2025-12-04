import type { Request, Response } from 'express';
import { storage } from '../storage';
import { NotFoundError } from '../utils/errors';
import { asyncHandler } from '../middleware/async-handler';

export const caseStudiesController = {
    create: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const caseStudy = await storage.createCaseStudy(req.body);
        res.status(201).json(caseStudy);
    }),

    getAll: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const publishedOnly = req.query.published !== 'false';
        const caseStudies = await storage.getCaseStudies(publishedOnly);
        res.json(caseStudies);
    }),

    getBySlug: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { slug } = req.params;
        const caseStudy = await storage.getCaseStudyBySlug(slug);
        if (!caseStudy) {
            throw new NotFoundError('Case study');
        }
        res.json(caseStudy);
    }),
};

