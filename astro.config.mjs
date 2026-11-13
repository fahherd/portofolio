// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deployment notes:
 * - Set SITE_URL in production, e.g. https://fajarherdiansyah.dev
 * - If deploying to GitHub Pages under a project path, set BASE_PATH=/repository-name
 * - All internal URLs are generated through src/utils/url.ts so the base path
 *   can change without editing components.
 */
const site = process.env.SITE_URL ?? 'https://fahherd.github.io';
const base = process.env.BASE_PATH ?? '/';
const basePath = base.endsWith('/') ? base : `${base}/`;

// Projects that live on an external domain only render a redirect page locally.
// Those pages are noindex, so keep them out of the sitemap.
const projectsDir = new URL('./src/content/projects/', import.meta.url);
const externalPaths = /** @type {string[]} */ ([]);
try {
  for (const file of readdirSync(projectsDir)) {
    if (!file.endsWith('.json')) continue;
    const project = JSON.parse(
      readFileSync(new URL(file, projectsDir), 'utf8'),
    );
    if (!project.externalUrl) continue;
    const slug = file.replace(/\.json$/, '');
    externalPaths.push(
      `${basePath}id/karya/${slug}/`,
      `${basePath}en/work/${slug}/`,
    );
  }
} catch {
  // Content directory is optional while bootstrapping.
}

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      // `/` is a noindex language gateway, and external projects are redirects.
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== basePath && !externalPaths.includes(pathname);
      },
      i18n: {
        defaultLocale: 'id',
        locales: {
          id: 'id',
          en: 'en',
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
