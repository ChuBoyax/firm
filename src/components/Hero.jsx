import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StarIcon } from './Star.jsx';
import { ArrowUpRight } from './Icons.jsx';
import { prefersReducedMotion } from '../motion.js';
import { CONTACT_PAGE, CREDENTIALS } from '../data.jsx';

const STARS = [
  [60, 90, 1.4], [120, 150, 1], [310, 80, 1.6], [340, 200, 1], [80, 260, 1.2], [250, 300, 1],
  [160, 60, 1], [360, 320, 1.3], [40, 380, 1], [290, 420, 1.1], [130, 420, 1.3], [220, 110, 1.2],
];

export default function Hero({ intro }) {
  const ref = useRef(null);

  // Ken Burns on the hero sky
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.to('.arch .sky', { scale: 1.12, rotation: 4, duration: 24, ease: 'none', repeat: -1, yoyo: true });
  }, { scope: ref });

  // Intro plays once the loader reveals the page
  useGSAP(() => {
    if (!intro || prefersReducedMotion()) return;
    gsap.from('h1 .ln span', { yPercent: 110, duration: .9, stagger: .09, ease: 'power3.out' });
    gsap.from('.hero-fade', { opacity: 0, y: 16, duration: .8, stagger: .08, delay: .25, ease: 'power2.out' });
    gsap.from('.arch', { opacity: 0, scale: .96, duration: 1.1, ease: 'power2.out' });
    gsap.from('.arch-badge', { opacity: 0, x: -20, duration: .8, delay: .7, ease: 'power2.out' });
  }, { scope: ref, dependencies: [intro] });

  return (
    <section className="hero" aria-labelledby="hero-h" ref={ref}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap">
        <div>
          <span className="eyebrow hero-fade"><StarIcon /> Individuals · Families · Businesses · Estates &amp; Trusts</span>
          <h1 id="hero-h">
            <span className="ln"><span>Lodesterre</span></span>
            <span className="ln"><span><em>Tax Accountants</em></span></span>
          </h1>
          <p className="lede hero-fade">Every legal tax credit, deduction and adjustment available to you and your family.</p>
          <div className="ctas hero-fade">
            <a className="btn btn-primary" href={CONTACT_PAGE}>Contact us <ArrowUpRight className="btn-arr" /></a>
            <a className="btn btn-ghost" href={CREDENTIALS}>Our credentials</a>
          </div>
        </div>
        <div className="hero-art">
          <figure className="arch">
            <svg viewBox="0 0 400 500" role="img" aria-label="Illustration of a night sky with a guiding lodestar">
              <g className="sky">
                <g fill="#EEF1F5">
                  {STARS.map(([cx, cy, r], i) => (
                    <circle key={`${cx}-${cy}`} className="tw" style={{ animationDelay: `${(i * .37) % 3}s` }} cx={cx} cy={cy} r={r} />
                  ))}
                </g>
                <g stroke="#8DB3D4" strokeWidth=".8" fill="none" opacity=".5">
                  <path d="M60 90 L120 150 L160 60 L220 110 L310 80" />
                  <path d="M80 260 L130 420 M250 300 L360 320 L290 420" />
                </g>
                <circle cx="200" cy="190" r="140" fill="none" stroke="#8DB3D4" strokeWidth=".6" opacity=".25" />
                <circle cx="200" cy="190" r="90" fill="none" stroke="#8DB3D4" strokeWidth=".6" opacity=".25" />
                <g transform="translate(150 140)"><use href="#star" fill="#D4A64E" /></g>
                <circle cx="200" cy="190" r="70" fill="#D4A64E" opacity=".08" />
              </g>
              <path d="M0 470 Q200 430 400 470 L400 500 L0 500 Z" fill="#1B2A41" />
            </svg>
            <figcaption>Lodestar: the star that guides.</figcaption>
          </figure>
          <div className="arch-badge" aria-hidden="true">
            <StarIcon />
            <span>Gray areas resolved in our clients' favor</span>
          </div>
        </div>
      </div>
    </section>
  );
}
