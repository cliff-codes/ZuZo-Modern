import type { Request, Response } from 'express';
import { z } from 'zod';
import { storage } from '../storage';
import { NotFoundError, ValidationError } from '../utils/errors';
import { asyncHandler } from '../middleware/async-handler';

const bookingStatusSchema = z.enum(['pending', 'confirmed', 'completed', 'cancelled']);

export const bookingsController = {
    create: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const booking = await storage.createBooking(req.body);
        res.status(201).json(booking);
    }),

    getAll: asyncHandler(async (_req: Request, res: Response): Promise<void> => {
        const bookings = await storage.getBookings();
        res.json(bookings);
    }),

    updateStatus: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { status } = req.body;

        const validationResult = bookingStatusSchema.safeParse(status);
        if (!validationResult.success) {
            throw new ValidationError('Invalid status value. Must be one of: pending, confirmed, completed, cancelled');
        }

        const booking = await storage.updateBookingStatus(id, validationResult.data);
        if (!booking) {
            throw new NotFoundError('Booking');
        }

        res.json(booking);
    }),
};

