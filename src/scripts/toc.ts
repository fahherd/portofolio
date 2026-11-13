export function initToc(): void {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('[data-toc-link]'),
  );
  if (links.length === 0) return;

  const sections = links
    .map((link) => {
      const id = link.dataset.tocLink;
      if (!id) return null;
      const section = document.querySelector<HTMLElement>(id);
      return section ? { link, section } : null;
    })
    .filter((item): item is { link: HTMLAnchorElement; section: HTMLElement } =>
      Boolean(item),
    );

  if (sections.length === 0) return;

  let frame = 0;

  const update = () => {
    frame = 0;
    const offset = window.innerHeight * 0.32;
    let current = sections[0];

    for (const item of sections) {
      if (item.section.getBoundingClientRect().top <= offset) {
        current = item;
      }
    }

    sections.forEach((item) => {
      item.link.classList.toggle('is-active', item === current);
      if (item === current) {
        item.link.setAttribute('aria-current', 'true');
      } else {
        item.link.removeAttribute('aria-current');
      }
    });
  };

  const onScroll = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
}
