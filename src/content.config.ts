import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galeri = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/galeri' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.string().or(z.date()).optional(),
  }),
});

export const collections = {
  galeri,
};