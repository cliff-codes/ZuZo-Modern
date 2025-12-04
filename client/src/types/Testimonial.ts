export type Testimonial = {
    id: string;
    name: string;
    title: string;
    company: string;
    content: string;
    rating: number;
    imageUrl: string | null;
    logoUrl: string | null;
    industry: string | null;
    published: boolean;
    createdAt: Date | string;
};

