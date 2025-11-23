# ZuZo - Human-AI Powered BPO Solutions

## Overview

ZuZo is a B2B SaaS platform offering Business Process Outsourcing (BPO) solutions, including AI-powered virtual assistants and omnichannel contact center services. The platform enables businesses to reduce operational costs by 60% through a combination of human expertise and AI automation. 

**Key Features**:
- **5 Service Pages**: Contact Center, Virtual Assistants, AI & Automation, Back Office Support, Workforce Management
- **6 Industry Solutions**: E-commerce, Financial Services, Healthcare, Technology/SaaS, Real Estate, Professional Services
- **Resources Hub**: Blog, Case Studies, FAQ
- **Conversion Tools**: Contact forms, demo booking, ROI calculator, newsletter subscriptions
- **Content Management**: Database-driven testimonials, blog posts, and case studies

The application is built as a full-stack web platform with a React-based frontend and Express backend, designed for rapid deployment (48-hour launch capability) and global 24/7 service delivery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React 18+ with TypeScript, using Vite as the build tool and development server.

**UI Framework**: shadcn/ui component library built on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling.

**Routing**: Wouter for lightweight client-side routing with comprehensive page coverage:
- **Service Pages** (5): /services/contact-center, /services/virtual-assistants, /services/ai-automation, /services/back-office, /services/workforce-management
- **Industry Pages** (7): /industries (landing page), /industries/ecommerce, /industries/financial-services, /industries/healthcare, /industries/technology, /industries/real-estate, /industries/professional-services
- **Resources** (5): /resources/blog, /resources/blog/:slug, /resources/case-studies, /resources/case-studies/:slug, /resources/faq
- **Utility Pages**: /contact, /book-demo, /roi-calculator, /pricing, /company/about

**State Management**: TanStack Query (React Query) for server state management, handling API calls, caching, and mutations for leads, subscribers, bookings, and content management.

**Design System**: 
- Typography: Montserrat (headings) and Open Sans (body text) with predefined size scales
- Spacing: Tailwind-based spacing primitives (4, 6, 8, 12, 16, 20, 24)
- Component patterns: Cards, carousels, forms, navigation with consistent hover/elevation effects
- Color system: CSS custom properties with HSL values for theming support

**Form Handling**: React Hook Form with Zod schema validation, integrated with backend validation schemas shared between client and server.

**Navigation System**: Comprehensive header navigation with:
- Services dropdown menu (5 services with descriptions)
- Industries dropdown menu (6 industries with descriptions)  
- Resources dropdown menu (Blog, Case Studies, FAQ)
- Direct links for About, Pricing, and ROI Calculator
- Mobile-responsive sheet navigation mirroring desktop structure
- Comprehensive data-testid attributes for e2e testing

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