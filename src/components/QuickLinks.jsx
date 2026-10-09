import { ArrowUpRight, Icon } from './Icons.jsx';
import { AMENDED, MENUS, STATE_REFUNDS, WEBMASTER, WITHHOLDING, host } from '../data.jsx';

const ext = { target: '_blank', rel: 'noopener' };

/** The three most-used tools, right under the hero */
export function Tools() {
  return (
    <section className="tools" aria-label="Refund tools">
      <div className="wrap tools-grid reveal-group">
        <div className="tool tool-wide">
          <span className="tool-ic"><Icon name="map" /></span>
          <h3>Where's my state refund?</h3>
          <div className="state-chips">
            {STATE_REFUNDS.map(([label, href]) => <a key={label} href={href} {...ext}>{label}</a>)}
          </div>
        </div>
        <a className="tool" href={WITHHOLDING} {...ext}>
          <span className="tool-ic"><Icon name="gauge" /></span>
          <h3>Estimate my Federal withholding</h3>
          <span className="go">{host(WITHHOLDING)} <ArrowUpRight /></span>
        </a>
        <a className="tool" href={AMENDED} {...ext}>
          <span className="tool-ic"><Icon name="amend" /></span>
          <h3>Amended Status</h3>
          <span className="go">{host(AMENDED)} <ArrowUpRight /></span>
        </a>
      </div>
    </section>
  );
}

/** Every link from the header menus, laid out as cards */
export function Directory() {
  return (
    <section className="directory" id="links" aria-labelledby="dir-h">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="kicker">Quick links</span>
            <h2 id="dir-h">Refunds, calculators &amp; links</h2>
          </div>
          <p className="note">Please report broken links to: <a href={WEBMASTER}>webmaster@lodesterre.com</a></p>
        </div>
        <div className="dir-grid reveal-group">
          {MENUS.map(m => (
            <div className="dir-card" key={m.id}>
              <div className="dir-head">
                <span className="tool-ic"><Icon name={m.icon} /></span>
                <h3>{m.label}</h3>
              </div>
              <ul className="dir-list">
                {m.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} {...ext}>
                      <span><b>{label}</b><small>{host(href)}</small></span>
                      <ArrowUpRight className="arr" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
