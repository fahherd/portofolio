export function initMenu(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-menu]');
  const openButton = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  if (!dialog || !openButton) return;

  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-menu-close]');
  let lastFocused: Element | null = null;
  let closeTimer = 0;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  const finishClose = () => {
    dialog.classList.remove('is-open');
    document.documentElement.classList.remove('menu-open');
    openButton.setAttribute('aria-expanded', 'false');
    if (dialog.open) dialog.close();
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  const close = () => {
    window.clearTimeout(closeTimer);
    dialog.classList.remove('is-open');
    document.documentElement.classList.remove('menu-open');
    openButton.setAttribute('aria-expanded', 'false');

    if (prefersReducedMotion) {
      finishClose();
      return;
    }

    closeTimer = window.setTimeout(finishClose, 280);
  };

  const open = () => {
    window.clearTimeout(closeTimer);
    lastFocused = document.activeElement;
    dialog.showModal();
    document.documentElement.classList.add('menu-open');
    openButton.setAttribute('aria-expanded', 'true');

    window.requestAnimationFrame(() => {
      dialog.classList.add('is-open');
      closeButton?.focus();
    });
  };

  openButton.addEventListener('click', open);
  closeButton?.addEventListener('click', close);

  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });

  dialog.querySelectorAll<HTMLAnchorElement>('[data-menu-link]').forEach((link) => {
    link.addEventListener('click', () => {
      finishClose();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dialog.open) {
      event.preventDefault();
      close();
    }
  });
}
