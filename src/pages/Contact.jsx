import { ArrowUpRight, Icon } from '../components/Icons.jsx';
import PageHero from '../components/PageHero.jsx';
import { ADDRESS, DIRECTIONS, PHONE, PHONE_HREF, WEBMASTER } from '../data.jsx';

export default function Contact() {
  return (
    <>
      <PageHero kicker="Contact" title="Contact Information" id="contact-h">
        Lodesterre Tax Accountants
      </PageHero>

      <section className="page-body" aria-labelledby="contact-h">
        <div className="wrap contact-grid reveal-group">
          <a className="contact-card contact-phone" href={PHONE_HREF}>
            <span className="tool-ic"><Icon name="phone" /></span>
            <span className="cc-label">Phone</span>
            <span className="cc-big">{PHONE}</span>
            <span className="go">Tap to call <ArrowUpRight /></span>
          </a>

          <div className="contact-card">
            <span className="tool-ic"><Icon name="pin" /></span>
            <span className="cc-label">Address</span>
            <address>
              <b>Lodesterre Tax Accountants</b>
              {ADDRESS.map(l => <span key={l}>{l}</span>)}
            </address>
            <a className="go" href={DIRECTIONS} target="_blank" rel="noopener">Get directions <ArrowUpRight /></a>
          </div>
        </div>

        <div className="wrap">
          <p className="note contact-note reveal">
            <Icon name="mail" className="note-ic" />
            Please report broken links to: <a href={WEBMASTER}>webmaster@lodesterre.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
