import type { Locale } from '../i18n/config';

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBase(path: string): string {
  const normalized = path.replace(/^\/+/, '');
  return `${base}${normalized}`;
}

export function homePath(locale: Locale): string {
  return withBase(`${locale}/`);
}

export function projectPath(locale: Locale, slug: string): string {
  const segment = locale === 'id' ? 'karya' : 'work';
  return withBase(`${locale}/${segment}/${slug}/`);
}

export function alternateProjectPath(locale: Locale, slug: string): string {
  return projectPath(locale, slug);
}

export function absoluteUrl(path: string, site: URL | undefined): string {
  const normalized = withBase(path);
  return new URL(normalized, site ?? 'http://localhost:4321').href;
}

export function currentAbsoluteUrl(
  pathname: string,
  site: URL | undefined,
): string {
  return new URL(pathname, site ?? 'http://localhost:4321').href;
}

export function stripBase(pathname: string): string {
  if (base === '/') return pathname;
  return pathname.startsWith(base)
    ? `/${pathname.slice(base.length)}`
    : pathname;
}
