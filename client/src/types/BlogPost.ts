export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    category: 'BPO Strategies' | 'Contact Center Management' | 'Technology Updates' | string;
    imageUrl?: string;
    published: boolean;
    publishedAt?: Date | string;
    createdAt: Date | string;
    updatedAt: Date | string;
    readTime?: number;
    featuredImage?: string;
};
