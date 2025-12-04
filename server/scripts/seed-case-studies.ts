import { db } from '../server/db';
import { caseStudies } from '../../shared/schema';

const seedCaseStudies = [
    {
        title: 'TechFlow Solutions - 65% Cost Reduction in Customer Support',
        slug: 'techflow-solutions-cost-reduction',
        client: 'TechFlow Solutions',
        industry: 'Technology',
        challenge:
            "TechFlow Solutions was struggling with high customer support costs and increasing ticket volumes. Their in-house team of 15 agents couldn't keep up with demand, leading to long wait times and frustrated customers. Monthly support costs exceeded $85,000.",
        solution:
            "ZuZo deployed a dedicated team of 12 contact center specialists trained specifically on TechFlow's product. We implemented AI-powered ticket routing and introduced 24/7 coverage across multiple time zones.",
        results: `<h2>Background</h2>
<p>TechFlow Solutions, a rapidly growing SaaS platform serving 50,000+ users, faced a common scaling challenge: explosive growth in customer support needs without corresponding budget increases.</p>

<h2>The Challenge in Detail</h2>
<p>Key pain points included:</p>
<ul>
<li>Average response time of 8+ hours</li>
<li>Customer satisfaction score of 3.2/5</li>
<li>High agent turnover (45% annually)</li>
<li>No 24/7 coverage despite global customer base</li>
<li>Escalating costs with every new hire</li>
</ul>

<h2>Our Approach</h2>
<p>We started with a comprehensive 2-week analysis of their support operations, identifying bottlenecks and opportunities. Then we:</p>

<h3>Phase 1: Team Building (Week 3-4)</h3>
<p>Recruited and trained 12 support specialists with technical backgrounds. Each agent completed 40 hours of product-specific training.</p>

<h3>Phase 2: Integration (Week 5-6)</h3>
<p>Integrated with TechFlow's Zendesk instance, documented all processes, and established quality metrics.</p>

<h3>Phase 3: Full Operation (Week 7+)</h3>
<p>Launched 24/7 support with intelligent routing, achieving full capacity within 48 hours.</p>

<h2>Results After 6 Months</h2>
<ul>
<li><strong>65% cost reduction</strong> - From $85,000 to $29,750 monthly</li>
<li><strong>40% satisfaction improvement</strong> - From 3.2 to 4.5/5 rating</li>
<li><strong>85% faster response</strong> - From 8 hours to 72 minutes average</li>
<li><strong>24/7 coverage</strong> - Supporting all time zones</li>
<li><strong>Zero turnover</strong> - Same core team after 12 months</li>
</ul>

<h2>Client Testimonial</h2>
<p><em>"ZuZo transformed our support operations. We're spending 65% less while delivering significantly better service. It's the best business decision we've made this year."</em> - Sarah Mitchell, CEO</p>`,
        metrics: [
            '65% cost reduction',
            '12 team members',
            '385% ROI',
            '40% satisfaction improvement',
        ],
        published: true,
    },
    {
        title: 'Global Retail Corp - Scaling E-commerce Support 3X',
        slug: 'global-retail-corp-scaling-ecommerce-support',
        client: 'Global Retail Corp',
        industry: 'E-commerce',
        challenge:
            "Global Retail Corp needed to triple their support capacity for the holiday season but couldn't afford to hire and train temporary staff only to lay them off in January. They needed a flexible, cost-effective solution.",
        solution:
            'ZuZo provided a scalable omnichannel support team that could ramp up from 8 to 24 agents during peak season and scale back down afterward. We integrated with their Shopify store, email, chat, and social media channels.',
        results: `<h2>The Seasonal Challenge</h2>
<p>E-commerce businesses face unique challenges with seasonal demand spikes. Global Retail Corp's support volume increased 300% during November and December, but hiring temporary staff meant:</p>
<ul>
<li>6+ weeks recruitment and training</li>
<li>Inconsistent service quality</li>
<li>Expensive severance costs</li>
<li>Lost institutional knowledge</li>
</ul>

<h2>The ZuZo Solution</h2>
<p>We created a flexible support model with a core team of 8 agents year-round and the ability to scale to 24 agents within 48 hours for peak season.</p>

<h3>Omnichannel Integration</h3>
<p>Our team handled:</p>
<ul>
<li>Email support (Zendesk)</li>
<li>Live chat (Intercom)</li>
<li>Phone support (VoIP integration)</li>
<li>Social media (Facebook, Instagram, Twitter)</li>
<li>Shopify admin for order management</li>
</ul>

<h2>Peak Season Performance</h2>
<p>During the critical November-December period:</p>
<ul>
<li>Handled 47,000+ customer interactions</li>
<li>Maintained 92% first-contact resolution</li>
<li>Average response time under 3 minutes</li>
<li>Zero service disruptions</li>
</ul>

<h2>Cost Comparison</h2>
<p>Traditional Model: $156,000 for seasonal hiring
ZuZo Model: $54,000 for scaled support
<strong>Savings: $102,000 (65% reduction)</strong></p>

<h2>Year-Round Benefits</h2>
<p>Beyond peak season, Global Retail maintains the core 8-agent team at 55% less cost than their previous in-house operation.</p>`,
        metrics: [
            '65% cost reduction',
            '8-24 scalable team',
            '425% ROI',
            '47,000+ interactions handled',
        ],
        published: true,
    },
];

async function seedDatabase() {
    try {
        console.log('Seeding case studies...');

        for (const caseStudy of seedCaseStudies) {
            await db.insert(caseStudies).values(caseStudy);
            console.log(`Inserted case study: ${caseStudy.companyName}`);
        }

        console.log('✓ Case studies seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
