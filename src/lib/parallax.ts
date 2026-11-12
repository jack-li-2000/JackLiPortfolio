const DEFAULT_FACTOR = 0.45;
const MAX_TRAVEL_RATIO = 0.85;

/**
 * Scroll-linked parallax for a pinned hero: slides the node down as the page
 * scrolls so the sections that follow rise up and cover it.
 */
export function parallax(node: HTMLElement, factor?: number) {
  let strength = factor ?? DEFAULT_FACTOR;
  let frame = 0;

  const update = () => {
    frame = 0;
    const distance = Math.min(window.scrollY * strength, window.innerHeight * MAX_TRAVEL_RATIO);
    node.style.transform = `translate3d(0, ${distance}px, 0)`;
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
      strength = next ?? DEFAULT_FACTOR;
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
