import { useEffect, useRef, useState } from 'react';
import { Brand } from './Star.jsx';
import { ArrowUpRight, Caret, Icon } from './Icons.jsx';
import { CONTACT_PAGE, CREDENTIALS, MENUS, PHONE, PHONE_HREF, host } from '../data.jsx';

const ext = { target: '_blank', rel: 'noopener' };

function Dropdown({ menu, open, onToggle }) {
  return (
    <div className="dd">
      <button className="dd-btn" aria-expanded={open} aria-controls={`dd-${menu.id}`} onClick={onToggle}>
        {menu.label}<Caret className="caret" />
      </button>
      <div className="dd-menu" id={`dd-${menu.id}`} hidden={!open}>
        {menu.states && (
          <>
            <span className="dd-group">Where's my state refund?</span>
            <div className="dd-states">
              {menu.states.map(([label, href]) => <a key={label} href={href} {...ext}>{label}</a>)}
            </div>
          </>
        )}
        {menu.links.map(([label, href]) => (
          <a key={label} className="dd-item" href={href} {...ext}>
            <span>{label}<small>{host(href)}</small></span>
            <ArrowUpRight className="arr" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Header({ page }) {
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on outside click or Escape
  useEffect(() => {
    if (!openMenu) return;
    const onClick = e => { if (!navRef.current.contains(e.target)) setOpenMenu(null); };
    const onKey = e => { if (e.key === 'Escape') setOpenMenu(null); };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [openMenu]);

  const onNavClick = e => {
    if (e.target.closest('a')) { setOpenMenu(null); setNavOpen(false); }
  };

  return (
    <header className={`site${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <Brand />
        <button className="menu-btn" aria-expanded={navOpen} aria-controls="mainnav" onClick={() => setNavOpen(o => !o)}>
          <span className={`burger${navOpen ? ' x' : ''}`} aria-hidden="true"><i /><i /></span>
          Menu
        </button>
        <nav className={`main${navOpen ? ' open' : ''}`} id="mainnav" aria-label="Main" ref={navRef} onClick={onNavClick}>
          {MENUS.map(m => (
            <Dropdown
              key={m.id}
              menu={m}
              open={openMenu === m.id}
              onToggle={() => setOpenMenu(o => (o === m.id ? null : m.id))}
            />
          ))}
          <a className="nav-link" href={CREDENTIALS} aria-current={page === 'credentials' ? 'page' : undefined}>Credentials</a>
          <a className="nav-phone" href={PHONE_HREF}><Icon name="phone" />{PHONE}</a>
          <a className="btn btn-primary nav-cta" href={CONTACT_PAGE} aria-current={page === 'contact' ? 'page' : undefined}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
