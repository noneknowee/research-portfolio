import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(['估值研究', '策略研究', '论文研读', '会计准则', '书本研读']),
    tags: z.array(z.string()).default([]),
    status: z.enum(['published', 'draft']).default('published'),
    featured: z.boolean().default(false),
    readingMinutes: z.number().int().positive().optional(),
    challenge: z.string().optional(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    attachment: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sectionLabel: z.string(),
    headlineLine1: z.string(),
    headlineLine2: z.string(),
    lead: z.string(),
    contactLabel: z.string(),
    principles: z.array(z.object({
      label: z.string(),
      statement: z.string(),
    })),
  }),
});

export const collections = { articles, pages };
