import type { Dictionary } from '../i18n/ui';

export interface NavItem {
  id: 'home' | 'about' | 'work' | 'expertise' | 'experience' | 'recognition' | 'contact';
  href: string;
  labelKey: keyof Dictionary['nav'];
}

export const navItems: NavItem[] = [
  { id: 'home', href: '#top', labelKey: 'home' },
  { id: 'about', href: '#about', labelKey: 'about' },
  { id: 'work', href: '#work', labelKey: 'work' },
  { id: 'expertise', href: '#expertise', labelKey: 'expertise' },
  { id: 'experience', href: '#experience', labelKey: 'experience' },
  { id: 'recognition', href: '#recognition', labelKey: 'recognition' },
  { id: 'contact', href: '#contact', labelKey: 'contact' },
];
