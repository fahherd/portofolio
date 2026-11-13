export function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>(
    '[data-reveal], [data-reveal-media]',
  );
  if (elements.length === 0) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        element.classList.add('is-visible');
        observer.unobserve(element);
      });
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.05,
    },
  );

  elements.forEach((element) => observer.observe(element));
}
