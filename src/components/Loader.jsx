import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { STAR_PATH } from './Star.jsx';
import { prefersReducedMotion } from '../motion.js';

export default function Loader({ onReveal, onDone }) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;

    if (prefersReducedMotion()) {
      el.style.transition = 'opacity .3s';
      el.querySelector('.word').style.opacity = 1;
      el.querySelector('.tag').style.opacity = 1;
      el.querySelector('.mark path').style.fill = 'var(--brass)';
      let t2;
      const t1 = setTimeout(() => {
        el.style.opacity = 0;
        t2 = setTimeout(onDone, 320);
      }, 300);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }

    const brass = getComputedStyle(document.documentElement).getPropertyValue('--brass');
    gsap.timeline({ onComplete: onDone })
      .to('.mark path', { strokeDashoffset: 0, duration: .7, ease: 'power2.inOut' })
      .to('.mark path', { fill: brass, duration: .3 }, '-=.1')
      .to('.word', { opacity: 1, duration: .4 }, '-=.35')
      .to('.trail span', { opacity: 1, duration: .12, stagger: .12 }, '-=.3')
      .to('.tag', { opacity: 1, duration: .35 }, '-=.4')
      .to(el.firstElementChild, { y: -60, opacity: 0, duration: .45, ease: 'power2.in' }, '+=.1')
      .to(el, { yPercent: -100, duration: .65, ease: 'power3.inOut' }, '-=.2')
      .add(onReveal, '-=.4');
  }, { scope: ref });

  return (
    <div id="loader" ref={ref} role="status" aria-label="Loading">
      <div>
        <svg className="mark" viewBox="0 0 100 100" aria-hidden="true"><path d={STAR_PATH} /></svg>
        <div className="word">Lodesterre</div>
        <div className="trail" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="tag">Lodesterre Tax Accountants</div>
      </div>
    </div>
  );
}
