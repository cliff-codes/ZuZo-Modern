export type CaseStudy = {
    id: string;
    slug: string;
    title?: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string;
    metrics?: string[];
    imageUrl?: string;
    published: boolean;
    publishedAt?: Date | string;
    createdAt: Date | string;
    updatedAt: Date | string;
};

