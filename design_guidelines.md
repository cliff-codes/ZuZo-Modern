# ZuZo Website Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from top-tier B2B SaaS and enterprise service platforms (Salesforce, HubSpot, Zendesk, Intercom) to create a professional, conversion-optimized experience that builds trust while maintaining approachability.

**Core Principle**: Balance enterprise credibility with human-centered warmth. Every page should guide visitors toward conversion while demonstrating technological sophistication and operational excellence.

## Typography Hierarchy

**Font System**: Montserrat (primary) for headings and impact, Open Sans (secondary) for body content and extended reading.

- **Hero Headlines**: Montserrat Bold, text-5xl to text-7xl (48-72px), tight leading (leading-tight)
- **Section Headlines**: Montserrat SemiBold, text-3xl to text-4xl (30-36px)
- **Subheadings**: Montserrat SemiBold, text-xl to text-2xl (20-24px)
- **Body Text**: Open Sans Regular, text-base to text-lg (16-18px), relaxed leading (leading-relaxed)
- **Captions/Labels**: Open Sans Regular, text-sm to text-base (14-16px)
- **CTAs**: Montserrat SemiBold, text-base to text-lg (16-18px), uppercase tracking-wide

## Layout System & Spacing

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20, 24** for consistent rhythm.

- **Section Padding**: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- **Component Spacing**: gap-6 to gap-12 between major elements
- **Content Max Width**: max-w-7xl for full sections, max-w-4xl for content blocks, max-w-prose for text
- **Grid Systems**: 2-column (md), 3-column (lg) for features/services; single column mobile-first

## Component Library

### Navigation
- **Sticky Header**: Transparent on scroll with subtle backdrop blur, contains logo (left), main nav (center), CTA button (right)
- **Main Nav**: Horizontal menu with dropdowns for Services/Industries/Resources
- **Mobile**: Hamburger menu with slide-out panel

### Hero Sections
- **Homepage Hero**: Full-viewport height (80-90vh) with large hero image showing professional contact center environment or AI-human collaboration
- **Service Heroes**: 50-60vh height with relevant service imagery, headline, subheadline, dual CTAs (primary + secondary)
- **CTA Buttons on Images**: Frosted glass effect (backdrop-blur-sm) with semi-transparent backgrounds

### Service/Feature Cards
- **Structure**: Icon/image top, heading, 2-3 line description, optional "Learn More" link
- **Grid Layout**: 3-column (lg), 2-column (md), 1-column (mobile)
- **Styling**: Subtle border, hover elevation effect (shadow-lg on hover)

### Testimonial Components
- **Carousel Format**: Large quote, customer name/title/company, rating stars, company logo
- **Trust Badges**: Client logos in grid (grayscale, hover color), certifications, awards

### Forms & CTAs
- **Multi-step Forms**: Progress indicator at top, 2-3 fields per step, large touch targets (min-h-12)
- **Primary CTAs**: Large buttons (px-8 py-4), prominent placement, action-oriented copy
- **Secondary CTAs**: Outlined style, less visual weight

### Interactive Elements
- **ROI Calculator**: Card-based with sliders/inputs left, results display right, real-time updates
- **Calendar Integration**: Embedded booking widget with timezone detection
- **Video Players**: 16:9 aspect ratio, custom play button overlay, autoplay muted for demos

### Pricing Tables
- **Structure**: 3-tier cards (hourly, daily, monthly), highlighted "Most Popular", feature checkmarks
- **Mobile**: Stack vertically with equal visual weight

## Page Structure Guidelines

### Homepage
1. **Hero**: Full-height with compelling headline, subheadline, dual CTAs, background video or high-quality image
2. **Trust Bar**: Client logos, "500+ businesses" stat, certifications (h-16 to h-20)
3. **Value Propositions**: 3-4 key benefits with icons, statistics (60% cost reduction, 48hr launch)
4. **Services Overview**: Card grid showing core offerings, visual icons
5. **How It Works**: 4-step process with numbered icons, connecting lines
6. **Social Proof**: Large testimonial carousel, case study highlights
7. **Pricing Snapshot**: Simplified 3-tier display, CTA to full pricing
8. **Final CTA**: Strong conversion section with booking calendar embed or form

### Service Pages
- **Hero**: Service-specific imagery, clear value prop, dual CTAs
- **Challenge Definition**: Problem statement with relevant stats
- **Solution Features**: 2-column layout (feature + benefit pairs), icons, checkmarks
- **Process Flow**: Timeline or step-by-step visualization
- **Case Study**: Embedded success story with metrics
- **Pricing**: Service-specific rates, transparent breakdown
- **FAQ Accordion**: 6-8 common questions
- **Conversion CTA**: Booking form or demo request

### Industry Pages
- **Hero**: Industry-relevant imagery (healthcare, e-commerce, etc.)
- **Pain Points**: Bullet list or card grid of challenges
- **Solutions**: How ZuZo addresses each challenge, feature mapping
- **Metrics**: Industry-specific KPIs in stat blocks (3-4 numbers)
- **Testimonial**: Industry-relevant client quote with logo
- **Related Services**: Cross-sell component

## Images

### Required Images
1. **Homepage Hero**: Modern contact center environment with diverse team members using headsets and technology, professional lighting (1920x1080)
2. **AI Virtual Assistant**: Conceptual visualization of human-AI collaboration, split-screen showing human and AI interface (1200x800)
3. **Team Photos**: Professional headshots and team working photos for About page
4. **Service Icons**: Custom illustrated icons for 6 core services (SVG format preferred)
5. **Industry Imagery**: Stock photos representing e-commerce, healthcare, finance, tech sectors
6. **Client Logos**: Grayscale versions of partner/client company logos
7. **Office/Facility**: Professional photos of ZuZo Ghana office and infrastructure

### Image Treatment
- High quality, professional photography
- Consistent warm tone with slight blue tint for brand alignment
- People-focused imagery showing diversity and professionalism
- Avoid overly staged/stock photo aesthetics

## Accessibility & Performance

- **Touch Targets**: Minimum 44x44px (h-11 w-11) for all interactive elements
- **Contrast**: Ensure strong contrast for readability, especially on image overlays
- **Keyboard Navigation**: Full keyboard support, visible focus states
- **Loading**: Skeleton screens for content areas, lazy-load images below fold
- **Responsive Images**: WebP format with fallbacks, srcset for multiple sizes

## Animation Guidelines

**Use Sparingly**: Subtle transitions enhance without distracting.

- **Scroll Reveals**: Fade-up on scroll for section entry (opacity + translate)
- **Hover States**: Scale 1.02-1.05 on cards, shadow increase
- **Transitions**: 200-300ms duration, ease-in-out timing
- **No Auto-Playing Carousels**: User-controlled only (arrows/dots)

## Mobile Optimization

- **Navigation**: Hamburger menu, full-screen overlay
- **Forms**: Stack all fields vertically, large input heights (h-12)
- **CTAs**: Full-width buttons on mobile, fixed bottom bar for primary action
- **Typography**: Scale down by 20-30% from desktop sizes
- **Touch**: Increased spacing between interactive elements (gap-4 minimum)