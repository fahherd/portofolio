import type { Locale } from '../i18n/config';

export type Localized<T> = Record<Locale, T>;

export interface Period {
  start: string;
  end: string | null;
}
