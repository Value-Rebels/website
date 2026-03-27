import { defineCollection, z } from 'astro:content';

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    thumbnail: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    readingTime: z.number(),
    excerpt: z.string(),
    lang: z.string(),
    slug: z.string(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    photo: z.string(),
    order: z.number(),
    lang: z.string(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.string(),
  }).passthrough(),
});

export const collections = { videos, articles, team, services };
