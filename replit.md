# ZuZo - Human-AI Powered BPO Solutions

## Overview

ZuZo is a B2B SaaS platform offering Business Process Outsourcing (BPO) solutions, including AI-powered virtual assistants and omnichannel contact center services. The platform enables businesses to reduce operational costs by 60% through a combination of human expertise and AI automation. 

**Key Features**:
- **Video Hero Section**: Homepage features a 3-minute overview video with optimized poster image for faster mobile loading, showcasing ZuZo's Gitex presentation with prominent "Get Your Free Strategy Session Now" CTA directing to /book-demo
- **6 Service Pages**: Contact Center, Virtual Assistants, AI & Automation, Back Office Support, Workforce Management, Omnichannel Platform (QContact) (all with contextual CTAs and Service schema markup)
- **8 Industry Solutions**: E-commerce, Financial Services, Healthcare, Technology/SaaS, Real Estate, Professional Services, Automotive, Logistics & Transportation (all with contextual CTAs and Service schema markup)
- **Strategic B2B Pages**: Customer Stories showcase, Security & Compliance, Comparison (ZuZo vs In-House vs Traditional BPO), BPO ROI Guide lead magnet
- **Resources Hub**: Blog, Case Studies, FAQ
- **Conversion Tools**: Contact forms, demo booking (Cal.com integration), ROI calculator, newsletter subscriptions, downloadable BPO ROI Guide with lead capture
- **Content Management**: Database-driven testimonials, blog posts, and case studies
- **Conversion Optimization**:
  - **Sticky Mobile CTA**: Always-visible "Book Free Demo" button on mobile (hidden on /book-demo and /contact pages)
  - **Contextual CTAs**: InlineBookingCTA and MiniTrustBar components on all service/industry pages
  - **Mobile Navigation**: Reorganized with prominent "Book Free Demo" and "Pricing" at top, collapsible accordion for Services/Industries/Resources
  - Client logos and trust indicators section with industry badges and key stats (500+ clients, 12+ industries, 98% satisfaction, 24/7 coverage)
  - "Why ZuZo?" section highlighting 6 key differentiators with trust badges (ISO 27001 Aligned, Data Protection Certified, GDPR Compliant)
  - Featured case study prominently displayed on homepage with real metrics and results
  - Compact testimonials on booking and contact pages for social proof
  - Post-newsletter subscription upsell prompting demo booking (auto-dismisses after 10 seconds)
  - Sticky header with "Book Free Demo" CTA available on all pages
- **SEO Optimization**: Service schema markup (schema.org) on all 14 service and industry pages for improved search visibility

The application is built as a full-stack web platform with a React-based frontend and Express backend, designed for rapid deployment (48-hour launch capability) and global 24/7 service delivery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React 18+ with TypeScript, using Vite as the build tool and development server.

**UI Framework**: shadcn/ui component library built on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling.

**Routing**: Wouter for lightweight client-side routing with comprehensive page coverage:
- **Service Pages** (7): /services (landing page), /services/contact-center, /services/virtual-assistants, /services/ai-automation, /services/back-office, /services/workforce-management, /services/omnichannel-platform (detail pages with InlineBookingCTA, MiniTrustBar, and Service schema)
- **Industry Pages** (9): /industries (landing page), /industries/ecommerce, /industries/financial-services, /industries/healthcare, /industries/technology, /industries/real-estate, /industries/professional-services, /industries/automotive, /industries/logistics (all with InlineBookingCTA, MiniTrustBar, and Service schema)
- **Resources** (6): /resources/blog, /resources/blog/:slug, /resources/case-studies, /resources/case-studies/:slug, /resources/faq, /resources/bpo-roi-guide (lead magnet with form capture)
- **Strategic Pages** (3): /customer-stories (success stories showcase), /security (compliance and certifications), /compare (competitive comparison)
- **Utility Pages**: /contact, /book-demo (with social proof testimonials), /roi-calculator, /pricing, /company/about, /privacy-policy

**State Management**: TanStack Query (React Query) for server state management, handling API calls, caching, and mutations for leads, subscribers, bookings, and content management.

**Design System**: 
- Typography: Montserrat (headings) and Open Sans (body text) with predefined size scales
- Spacing: Tailwind-based spacing primitives (4, 6, 8, 12, 16, 20, 24)
- Component patterns: Cards, carousels, forms, navigation with consistent hover/elevation effects
- Color system: CSS custom properties with HSL values for theming support

**Form Handling**: React Hook Form with Zod schema validation, integrated with backend validation schemas shared between client and server.

**Navigation System**: Comprehensive header navigation with:
- Services dropdown menu (6 services with descriptions: Contact Center, Virtual Assistants, AI & Automation, Back Office Support, Workforce Management, Omnichannel Platform)
- Industries dropdown menu (8 industries with descriptions: E-commerce, Financial Services, Healthcare, Technology/SaaS, Real Estate, Professional Services, Automotive, Logistics)  
- Resources dropdown menu (Blog, Case Studies, FAQ)
- Direct links for About, Pricing, and ROI Calculator
- Sticky header with "Book Free Demo" primary CTA and "Contact Us" secondary CTA
- **Mobile Navigation**: Reorganized sheet navigation with prominent "Book Free Demo" and "Pricing" at top, collapsible accordion sections for Services/Industries/Resources, improved conversion focus
- Comprehensive data-testid attributes for e2e testing

**Conversion Components**:
- `StickyMobileCTA`: Fixed bottom CTA button on mobile viewports, always visible during scrolling, hidden on /book-demo and /contact to avoid redundancy
- `InlineBookingCTA`: Contextual CTA section deployed on all service and industry pages with heading, description, and primary CTA button
- `MiniTrustBar`: Compact trust indicators showing key metrics (500+ clients, 98% satisfaction, 24/7 support) used on service/industry pages
- `ServiceSchema`: SEO schema markup component for service/industry pages implementing schema.org Service structured data
- `CompactTestimonials`: Displays 2 testimonials with 5-star ratings, client avatars, and company info on booking/contact pages
- `WhyZuzoSection`: 6 differentiator cards (60% cost reduction, 48-hour launch, 24/7 coverage, AI-powered, enterprise security, 500+ clients) with trust badges
- `FeaturedCaseStudy`: Prominent display of top case study with challenge, solution, results, and key metrics
- `ClientLogos`: Industry badges and stats grid showcasing 500+ clients across 12+ industries
- `NewsletterSignup`: Email subscription with post-signup upsell prompting demo booking (10-second auto-dismiss)

### Backend Architecture

**Runtime**: Node.js with Express.js framework running in ESM module mode.

**API Design**: RESTful API endpoints organized by resource type:
- `/api/leads` - Contact form submissions and demo requests
- `/api/subscribers` - Newsletter subscription management  
- `/api/bookings` - Demo consultation scheduling
- `/api/blogPosts` - Content management for blog articles
- `/api/caseStudies` - Customer success story management
- `/api/testimonials` - Customer review management

**Development vs Production**: Separate entry points (`index-dev.ts` and `index-prod.ts`) with Vite middleware integration in development for HMR, and static file serving in production.

**Validation Layer**: Shared Zod schemas between frontend and backend (via `@shared/schema`) ensure type safety and consistent validation across the stack.

### Data Storage

**Database**: PostgreSQL via Neon serverless database with WebSocket connections.

**ORM**: Drizzle ORM for type-safe database operations with schema-first approach.

**Schema Design**:
- `leads` table: Captures contact inquiries with source tracking, industry, team size, and service interests
- `subscribers` table: Email list management with active/unsubscribed status
- `bookings` table: Demo consultation scheduling with timezone support
- `blogPosts` table: Content management with publish status and slug-based routing
- `caseStudies` table: Customer success stories with similar content structure
- `testimonials` table: Customer reviews with ratings and company information

**Migration Management**: Drizzle Kit for schema migrations with SQL generation stored in `/migrations` directory.

### External Dependencies

**UI Component Library**: shadcn/ui with Radix UI primitives (@radix-ui/* packages) for accessible, unstyled components including dialogs, dropdowns, navigation menus, forms, and data display components.

**Database Provider**: Neon serverless PostgreSQL (@neondatabase/serverless) for scalable database hosting with connection pooling.

**Styling**: Tailwind CSS with PostCSS for utility-first styling and customization.

**Font Loading**: Google Fonts for Montserrat and Open Sans typefaces.

**Development Tools**:
- Replit-specific plugins for runtime error overlays, cartographer, and dev banners
- TypeScript for type safety across the entire stack
- ESBuild for production bundling

**Form Validation**: Zod for runtime type validation and schema definition, integrated with React Hook Form via @hookform/resolvers.

**Date Handling**: date-fns for date manipulation and formatting.

**Session Management**: connect-pg-simple for PostgreSQL-backed session storage (configured but authentication not yet implemented).

**Scheduling Integration**: Cal.com (@calcom/embed-react) for automated demo booking and calendar management:
- Inline calendar embed on /book-demo page
- Cal.com event link: https://cal.com/zuzo-ltd/30min
- Automatic sync of Cal.com bookings to local database for tracking and analytics
- Event listeners track booking success/cancellation events
- Brand color customization (#0066CC) matching ZuZo theme
- Bookings captured with name, email, company, phone, timezone, and scheduling details

**QContact CRM Integration**: Automatic webhook forwarding for all form submissions and newsletter subscriptions:
- Service module: `server/services/qcontact.service.ts`
- Webhook URL: https://zuzo.qcontact.com/api/v2/webhooks/callback/inbound
- Organization ID: 236522, Event ID: 1897941956
- **Contact Form Field Mapping**: 
  - name → first_name + last_name (automatic split)
  - email → c__email (custom field)
  - phone → phone_number
  - company → c__company (custom field)
  - industry → c__industry (custom field)
  - message → body
  - interestedServices → c__service_interest (custom field, comma-separated)
- **Newsletter Subscription Field Mapping**:
  - email → c__email (custom field)
  - first_name → "Newsletter", last_name → "Subscriber"
  - body → "Newsletter subscription request"
  - c__service_interest → "Newsletter Subscription"
- **Dual Storage**: Leads and subscribers stored in local PostgreSQL database AND forwarded to QContact
- **Error Handling**: Asynchronous forwarding with retry logic (up to 2 retries with exponential backoff)
- **Non-blocking**: Form submissions and subscriptions return immediately to user, QContact forwarding happens in background
- Credentials stored in environment variables (QCONTACT_ORG_ID, QCONTACT_EVENT_ID)