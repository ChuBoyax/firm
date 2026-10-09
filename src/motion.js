export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isMobile = () => window.matchMedia('(max-width: 860px)').matches;
