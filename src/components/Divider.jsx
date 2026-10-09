import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '../motion.js';

export default function Divider() {
  const ref = useRef(null);

  // Draw the line and star in as the divider scrolls into view
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    ref.current.querySelectorAll('.draw').forEach(p => {
      const len = p.getTotalLength();
      gsap.fromTo(p,
        { strokeDasharray: len, strokeDashoffset: len },
        { strokeDashoffset: 0, duration: 1.4, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } });
    });
  }, { scope: ref });

  return (
    <div className="divider" aria-hidden="true" ref={ref}>
      <svg viewBox="0 0 520 24">
        <path className="draw" d="M0 12 H236 M284 12 H520" />
        <path className="draw" d="M260 0 L264 8 L272 12 L264 16 L260 24 L256 16 L248 12 L256 8 Z" />
      </svg>
    </div>
  );
}
