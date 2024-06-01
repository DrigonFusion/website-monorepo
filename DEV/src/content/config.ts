import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    authors: z.array(z.string()),
    image: z.object({
      url: z.string().default("https://cdn.drigonfusion.xyz/static/images/blog/default.png"),
      alt: z.string().default("DrigonFusion Blog Post Banner"),
    }),
    tags: z.array(z.string()),
  }),
});

const team = defineCollection({
  schema: z.object({
    name: z.string(),
    image: z.string().default("https://cdn.drigonfusion.xyz/static/images/avatar.png"),
    roles: z.array(z.string()),
    signature: z.string(),
  }),
});

const gaming = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string().default("https://cdn.drigonfusion.xyz/static/images/blog/default.png"),
      alt: z.string().default("DrigonFusion Blog Post Banner"),
    }),
    pubDate: z.date(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

const code = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string().default("https://cdn.drigonfusion.xyz/static/images/blog/default.png"),
      alt: z.string().default("DrigonFusion Blog Post Banner"),
    }),
    pubDate: z.date(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
  team,
  gaming,
  code,
  news,
};