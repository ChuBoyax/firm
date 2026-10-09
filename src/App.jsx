import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import { StarDefs } from './components/Star.jsx';
import Loader from './components/Loader.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Credentials from './pages/Credentials.jsx';
import { prefersReducedMotion } from './motion.js';

function loaderSeen() {
  try { return sessionStorage.getItem('lt_loader') === '1'; } catch { return false; }
}

/* Smooth scroll, synced with ScrollTrigger, and smooth in-page anchor jumps */
function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = t => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80 });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}

export default function App({ page }) {
  // Loader plays once per session
  const [seen] = useState(loaderSeen);
  const [loading, setLoading] = useState(!seen);
  const [intro, setIntro] = useState(seen);
  const mainRef = useRef(null);

  useEffect(() => {
    try { sessionStorage.setItem('lt_loader', '1'); } catch { /* storage blocked */ }
  }, []);

  useSmoothScroll();

  // Fade sections up as they scroll into view
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const inView = el => ({ trigger: el, start: 'top 88%' });
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.from(el, { opacity: 0, y: 28, duration: .8, ease: 'power2.out', scrollTrigger: inView(el) });
    });
    gsap.utils.toArray('.reveal-group').forEach(el => {
      gsap.from(el.children, { opacity: 0, y: 28, duration: .7, stagger: .08, ease: 'power2.out', scrollTrigger: inView(el) });
    });
  }, { scope: mainRef });

  return (
    <>
      <StarDefs />
      {loading && <Loader onReveal={() => setIntro(true)} onDone={() => setLoading(false)} />}
      <Header page={page} />
      <main id="top" ref={mainRef}>
        {page === 'contact' && <Contact />}
        {page === 'credentials' && <Credentials />}
        {page === 'home' && <Home intro={intro} />}
      </main>
      <Footer />
    </>
  );
}
