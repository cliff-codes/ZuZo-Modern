import type { Request, Response } from 'express';
import { storage } from '../storage';
import { NotFoundError } from '../utils/errors';
import { asyncHandler } from '../middleware/async-handler';

export const blogPostsController = {
    create: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const post = await storage.createBlogPost(req.body);
        res.status(201).json(post);
    }),

    getAll: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const publishedOnly = req.query.published !== 'false';
        const posts = await storage.getBlogPosts(publishedOnly);
        res.json(posts);
    }),

    getBySlug: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { slug } = req.params;
        const post = await storage.getBlogPostBySlug(slug);
        if (!post) {
            throw new NotFoundError('Blog post');
        }
        res.json(post);
    }),
};

