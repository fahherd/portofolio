import type { Locale } from '../i18n/config';
import type { Period } from '../data/types';

const intlLocale: Record<Locale, string> = {
  id: 'id-ID',
  en: 'en-US',
};

function formatMonthYear(value: string, locale: Locale): string {
  if (/^\d{4}$/.test(value)) return value;

  const [year, month] = value.split('-').map(Number);
  if (!year || !month) return value;

  const date = new Date(Date.UTC(year, month - 1, 1));
  return new Intl.DateTimeFormat(intlLocale[locale], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function formatDate(value: string, locale: Locale): string {
  return formatMonthYear(value, locale);
}

export function formatPeriod(
  period: Period,
  locale: Locale,
  presentLabel: string,
): string {
  const start = formatMonthYear(period.start, locale);
  const end = period.end ? formatMonthYear(period.end, locale) : presentLabel;
  return `${start} — ${end}`;
}

export function formatRange(
  start: string,
  end: string | null | undefined,
  locale: Locale,
  presentLabel: string,
  singleDateLabel?: string,
): string {
  const startLabel = formatMonthYear(start, locale);

  if (end === undefined) {
    return singleDateLabel ? `${singleDateLabel} ${startLabel}` : startLabel;
  }

  const endLabel = end ? formatMonthYear(end, locale) : presentLabel;
  return `${startLabel} — ${endLabel}`;
}
