const STORAGE_KEY = 'fh-locale';

export function initLocaleLinks(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-locale-switch]').forEach((link) => {
    link.addEventListener('click', () => {
      const nextLocale = link.dataset.localeSwitch;
      if (nextLocale) {
        try {
          window.localStorage.setItem(STORAGE_KEY, nextLocale);
        } catch {
          /* Storage can be unavailable in private modes. */
        }
      }

      if (link.dataset.preserveHash === 'true' && window.location.hash) {
        const hash = window.location.hash;
        link.href = `${link.href.split('#')[0]}${hash}`;
      }
    });
  });
}
