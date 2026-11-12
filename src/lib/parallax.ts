const DEFAULT_SPEED = 0.7;

/**
 * Scroll-linked parallax for a pinned hero: the node travels at `speed` times
 * the scroll speed, so it drifts up the screen slower than the page while the
 * sections below rise up and cover it.
 */
export function parallax(node: HTMLElement, speed?: number) {
  let rate = speed ?? DEFAULT_SPEED;
  let frame = 0;

  const update = () => {
    frame = 0;
    const drift = Math.min(Math.max(0, 1 - rate) * window.scrollY, window.innerHeight);
    node.style.transform = `translate3d(0, ${-drift}px, 0)`;
  };

  const request = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    update();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
  }

  return {
    update(next?: number) {
      rate = next ?? DEFAULT_SPEED;
      update();
    },
    destroy() {
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      if (frame) cancelAnimationFrame(frame);
      node.style.transform = '';
    }
  };
}
