export const locales = ['id', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'id';

export const localeLabels: Record<Locale, string> = {
  id: 'ID',
  en: 'EN',
};

export const localeNames: Record<Locale, string> = {
  id: 'Indonesia',
  en: 'English',
};

export const htmlLang: Record<Locale, string> = {
  id: 'id',
  en: 'en',
};

export const ogLocale: Record<Locale, string> = {
  id: 'id_ID',
  en: 'en_US',
};

export function isLocale(value: string | undefined): value is Locale {
  return value === 'id' || value === 'en';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'id' ? 'en' : 'id';
}
