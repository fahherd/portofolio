import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedString = z.object({
  id: z.string(),
  en: z.string(),
});

const mediaSchema = z.object({
  src: z.string(),
  alt: localizedString,
  caption: localizedString.optional(),
  fit: z.enum(['cover', 'contain']).default('cover'),
  width: z.number().optional(),
  height: z.number().optional(),
});

const featureSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

const architectureSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const challengeSchema = z.object({
  challenge: z.string(),
  solution: z.string(),
});

const projectCopySchema = z.object({
  title: z.string(),
  summary: z.string(),
  overview: z.string().optional(),
  context: z.string().optional(),
  problem: z.string().optional(),
  objectives: z.array(z.string()).optional(),
  role: z.string().optional(),
  responsibilities: z.array(z.string()).optional(),
  features: z.array(featureSchema).optional(),
  roles: z.array(z.string()).optional(),
  architecture: z.array(architectureSchema).optional(),
  challenges: z.array(challengeSchema).optional(),
  outcome: z.array(z.string()).optional(),
  galleryNote: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.json',
  }),
  schema: z.object({
    kind: z.enum(['case-study', 'repository']).default('case-study'),
    status: z.enum(['verified', 'draft']).default('verified'),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    year: z.number(),
    period: z
      .object({
        start: z.string(),
        end: z.string().nullable(),
      })
      .optional(),
    category: z
      .enum([
        'web-application',
        'backend-development',
        'frontend-development',
        'personal-project',
        'academic-project',
      ])
      .optional(),
    technologies: z.array(z.string()).default([]),
    links: z
      .object({
        live: z.url().optional(),
        github: z.url().optional(),
      })
      .default({}),
    /**
     * Canonical destination when the project lives outside this site.
     * The home card links here directly and the localized case-study URL
     * becomes a redirect, so no local case-study page is rendered.
     */
    externalUrl: z.url().optional(),
    cover: mediaSchema.optional(),
    gallery: z.array(mediaSchema).default([]),
    caseStudyStatus: z
      .enum(['complete', 'partial', 'pending'])
      .default('pending'),
    copy: z.object({
      id: projectCopySchema,
      en: projectCopySchema,
    }),
  }),
});

export const collections = { projects };
