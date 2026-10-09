import { StarIcon } from './Star.jsx';
import { ArrowUpRight } from './Icons.jsx';
import { ADDRESS, CONTACT_PAGE, CREDENTIALS, HOME, MENUS, PHONE, PHONE_HREF, STATE_REFUNDS, TAX_ALERT, WEBMASTER } from '../data.jsx';

const ext = { target: '_blank', rel: 'noopener' };

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-cta">
          <h2>Lodesterre Tax Accountants</h2>
          <div className="ctas">
            <a className="btn btn-brass" href={CONTACT_PAGE}>Contact us <ArrowUpRight className="btn-arr" /></a>
            <a className="btn btn-light" href={CREDENTIALS}>Credentials</a>
          </div>
        </div>
        <div className="cols">
          <div>
            <a className="brand" href={HOME}>
              <StarIcon />
              <span><b>Lodesterre</b><small>Tax Accountants</small></span>
            </a>
            <address className="foot-addr">
              <a href={PHONE_HREF}>{PHONE}</a>
              {ADDRESS.map(l => <span key={l}>{l}</span>)}
            </address>
            <ul>
              <li><a href={CREDENTIALS}>Credentials</a></li>
              <li><a href={CONTACT_PAGE}>Contact</a></li>
              <li><a href={TAX_ALERT}>Tax Alert</a></li>
            </ul>
          </div>
          {MENUS.map(m => (
            <div key={m.id}>
              <h3>{m.label}</h3>
              <ul>
                {m.links.map(([label, href]) => <li key={label}><a href={href} {...ext}>{label}</a></li>)}
                {m.states && (
                  <li className="foot-states">
                    <span>Where's my state refund?</span>
                    {STATE_REFUNDS.map(([label, href]) => <a key={label} href={href} {...ext}>{label}</a>)}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="base">
          <span>© {new Date().getFullYear()} Lodesterre Tax Accountants</span>
          <span>Please report broken links to: <a href={WEBMASTER}>webmaster@lodesterre.com</a></span>
        </div>
      </div>
    </footer>
  );
}
