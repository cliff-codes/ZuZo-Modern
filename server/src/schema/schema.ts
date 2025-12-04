import { sql } from 'drizzle-orm';
import { pgTable, text, varchar, timestamp, boolean, integer } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Leads from contact forms and demo requests
export const leads = pgTable('leads', {
    id: varchar('id')
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    name: text('name').notNull(),
    email: text('email').notNull(),
    company: text('company'),
    phone: text('phone'),
    message: text('message'),
    source: text('source').notNull(), // 'contact', 'demo', 'roi_calculator', 'newsletter'
    industry: text('industry'),
    teamSize: text('team_size'),
    currentChallenges: text('current_challenges'),
    interestedServices: text('interested_services').array(),
    estimatedMonthlySavings: integer('estimated_monthly_savings'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
    id: true,
    createdAt: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

// Newsletter subscribers
export const subscribers = pgTable('subscribers', {
    id: varchar('id')
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    email: text('email').notNull().unique(),
    status: text('status').notNull().default('active'), // 'active', 'unsubscribed'
    subscribedAt: timestamp('subscribed_at').defaultNow().notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).omit({
    id: true,
    status: true,
    subscribedAt: true,
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

// Demo bookings
export const bookings = pgTable('bookings', {
    id: varchar('id')
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    name: text('name').notNull(),
    email: text('email').notNull(),
    company: text('company'),
    phone: text('phone'),
    preferredDate: text('preferred_date'),
    preferredTime: text('preferred_time'),
    timezone: text('timezone'),
    interestedServices: text('interested_services').array(),
    message: text('message'),
    status: text('status').notNull().default('pending'), // 'pending', 'confirmed', 'completed', 'cancelled'
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
    id: true,
    status: true,
    createdAt: true,
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

// Blog posts (for future content management)
export const blogPosts = pgTable('blog_posts', {
    id: varchar('id')
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    excerpt: text('excerpt').notNull(),
    content: text('content').notNull(),
    author: text('author').notNull(),
    category: text('category').notNull(), // 'BPO Strategies', 'Contact Center Management', 'Technology Updates', etc.
    imageUrl: text('image_url'),
    published: boolean('published').notNull().default(false),
    publishedAt: timestamp('published_at'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

// Case studies
export const caseStudies = pgTable('case_studies', {
    id: varchar('id')
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    client: text('client').notNull(),
    industry: text('industry').notNull(),
    challenge: text('challenge').notNull(),
    solution: text('solution').notNull(),
    results: text('results').notNull(),
    metrics: text('metrics').array(), // ["60% cost reduction", "24/7 coverage", etc.]
    imageUrl: text('image_url'),
    logoUrl: text('logo_url'),
    published: boolean('published').notNull().default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({
    id: true,
    createdAt: true,
});

export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;

// Testimonials
export const testimonials = pgTable('testimonials', {
    id: varchar('id')
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    name: text('name').notNull(),
    title: text('title').notNull(),
    company: text('company').notNull(),
    content: text('content').notNull(),
    rating: integer('rating').notNull(), // 1-5
    imageUrl: text('image_url'),
    logoUrl: text('logo_url'),
    industry: text('industry'),
    published: boolean('published').notNull().default(true),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
    id: true,
    createdAt: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
