import { db } from "../server/db";
import { testimonials } from "../shared/schema";

const seedTestimonials = [
  {
    name: "Elymas Dekonor",
    title: "Global Senior Manager",
    company: "Eyewear Nonprofit",
    rating: 5,
    content: "They work beyond the defined scope and give thoughtful attention to related needs. They are very responsive and adaptable to the project.",
    published: true,
  },
  {
    name: "Sarah Mitchell",
    title: "CEO",
    company: "TechFlow Solutions",
    rating: 5,
    content: "ZuZo transformed our customer support operations. The 60% cost reduction was impressive, but the quality improvement exceeded all expectations.",
    published: true,
  },
  {
    name: "David Chen",
    title: "Operations Director",
    company: "Global Retail Corp",
    rating: 5,
    content: "The 48-hour deployment was incredible. Our virtual assistant team was operational before we even finished onboarding internally.",
    published: true,
  },
  {
    name: "Maria Rodriguez",
    title: "VP of Customer Success",
    company: "FinTech Innovations",
    rating: 5,
    content: "Outstanding omnichannel support. Our customer satisfaction scores increased by 35% within the first quarter of partnership.",
    published: true,
  },
];

async function seedDatabase() {
  try {
    console.log("Seeding testimonials...");
    
    // Insert testimonials
    for (const testimonial of seedTestimonials) {
      await db.insert(testimonials).values(testimonial);
      console.log(`Inserted testimonial: ${testimonial.name}`);
    }
    
    console.log("✓ Testimonials seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
