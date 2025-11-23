import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { qcontactService } from "./services/qcontact.service";
import {
  insertLeadSchema,
  insertSubscriberSchema,
  insertBookingSchema,
  insertBlogPostSchema,
  insertCaseStudySchema,
  insertTestimonialSchema,
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead Management (Contact Forms)
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      // Forward to QContact asynchronously (don't block the response)
      qcontactService.forwardLeadWithRetry(lead).catch(error => {
        console.error('[QContact] Failed to forward lead:', error);
      });
      
      res.json(lead);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch leads" });
    }
  });

  // Newsletter Subscribers
  app.post("/api/subscribers", async (req, res) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.createSubscriber(validatedData);
      res.json(subscriber);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getSubscribers();
      res.json(subscribers);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch subscribers" });
    }
  });

  // Demo Bookings
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.json(booking);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch bookings" });
    }
  });

  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || !['pending', 'confirmed', 'completed', 'cancelled'].includes(status)) {
        return res.status(400).json({ error: "Invalid status value" });
      }
      
      const booking = await storage.updateBookingStatus(id, status);
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      
      res.json(booking);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to update booking" });
    }
  });

  // Blog Posts
  app.post("/api/blog-posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.json(post);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.get("/api/blog-posts", async (req, res) => {
    try {
      const publishedOnly = req.query.published !== 'false';
      const posts = await storage.getBlogPosts(publishedOnly);
      res.json(posts);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch blog post" });
    }
  });

  // Case Studies
  app.post("/api/case-studies", async (req, res) => {
    try {
      const validatedData = insertCaseStudySchema.parse(req.body);
      const caseStudy = await storage.createCaseStudy(validatedData);
      res.json(caseStudy);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.get("/api/case-studies", async (req, res) => {
    try {
      const publishedOnly = req.query.published !== 'false';
      const caseStudies = await storage.getCaseStudies(publishedOnly);
      res.json(caseStudies);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch case studies" });
    }
  });

  app.get("/api/case-studies/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const caseStudy = await storage.getCaseStudyBySlug(slug);
      if (!caseStudy) {
        return res.status(404).json({ error: "Case study not found" });
      }
      res.json(caseStudy);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch case study" });
    }
  });

  // Testimonials
  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.json(testimonial);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.get("/api/testimonials", async (req, res) => {
    try {
      const publishedOnly = req.query.published !== 'false';
      const testimonials = await storage.getTestimonials(publishedOnly);
      res.json(testimonials);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch testimonials" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
