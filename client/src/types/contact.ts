import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().optional(),
    source: z.enum(['contact', 'demo', 'roi_calculator', 'newsletter']),
    industry: z.string().optional(),
    teamSize: z.string().optional(),
    currentChallenges: z.string().optional(),
    interestedServices: z.array(z.string()).optional(),
    estimatedMonthlySavings: z.number().int().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type InsertLead = Omit<ContactFormValues, 'source'> & {
    source: string;
};
