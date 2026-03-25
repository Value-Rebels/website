import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const langId = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '').replace(/\//g, '-');

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team', generateId: langId }),
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    photo: z.string(),
    order: z.number(),
    lang: z.enum(['en', 'de']),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services', generateId: langId }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    detailDescription: z.string().optional(),
    heroCtaLabel: z.string().optional(),
    heroCtaHref: z.string().optional(),
    processSteps: z.array(z.string()).optional(),
    whoItIsFor: z.array(z.string()).optional(),
    caseStudies: z.array(z.object({
      title: z.string(),
      summary: z.string(),
      results: z.array(z.string()),
      clientName: z.string().optional(),
    })).optional(),
    icon: z.string().optional(),
    order: z.number(),
    lang: z.enum(['en', 'de']),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles', generateId: langId }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    readingTime: z.number(),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    lang: z.enum(['en', 'de']),
    slug: z.string(),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const clients = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/clients' }),
  schema: z.object({
    clients: z.array(z.object({
      name: z.string(),
      logo: z.string(),
    })),
  }),
});

export const collections = { team, services, articles, videos, clients };
