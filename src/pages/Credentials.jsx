import { StarIcon } from '../components/Star.jsx';
import { Icon } from '../components/Icons.jsx';
import PageHero from '../components/PageHero.jsx';
import { CREDENTIAL_GROUPS } from '../data.jsx';

export default function Credentials() {
  return (
    <>
      <PageHero kicker="Credentials" title="Credentials" id="cred-h">
        Lodesterre Tax Accountants
      </PageHero>

      <section className="page-body" aria-labelledby="cred-h">
        <div className="wrap">
          <div className="highlight reveal">
            <StarIcon className="hl-star" />
            <span className="badge">Client refund</span>
            <p className="hl-big">Quarter Million Dollar Refund</p>
            <p className="hl-sub"><b>+$46,000 in Interest</b> for Client With the HELP of the IRS and NYS Tax and Finance</p>
          </div>

          <div className="cred-grid">
            {CREDENTIAL_GROUPS.map(g => (
              <div className="dir-card reveal" key={g.id}>
                <div className="dir-head">
                  <span className="tool-ic"><Icon name={g.icon} /></span>
                  <h2>{g.label}</h2>
                  <span className="count">{g.items.length}</span>
                </div>
                <ul className="cred-list">
                  {g.items.map(item => (
                    <li key={item}><Icon name="doc" className="doc" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
