import { StarIcon } from './Star.jsx';
import { ArrowUpRight, QuoteMark } from './Icons.jsx';
import { SERVE, TAX_ALERT } from '../data.jsx';

export function TaxAlert() {
  return (
    <section className="alert-sec" aria-labelledby="alert-h">
      <div className="wrap">
        <div className="alert reveal">
          <div className="alert-stars" aria-hidden="true">
            <StarIcon /><StarIcon /><StarIcon />
          </div>
          <div>
            <span className="badge"><span className="dot" />Tax Alert!</span>
            <h2 id="alert-h">You will not believe these ads</h2>
          </div>
          <a className="btn" href={TAX_ALERT}>Read the tax alert <ArrowUpRight className="btn-arr" /></a>
        </div>
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section className="mission" id="mission" aria-labelledby="mission-h">
      <div className="wrap">
        <div className="reveal">
          <h2 className="kicker" id="mission-h">Our Mission</h2>
          <p className="statement">
            Our Mission is to minimize taxes by utilizing <em>every legal tax credit, deduction and adjustment</em> available to the taxpayer and their families.
          </p>
        </div>
        <div className="mission-grid">
          <div className="reveal">
            <p className="lede">We serve single individuals, families, small to large businesses, partnerships, corporations, estates and trusts with the same consistent due diligence we would provide to our parents.</p>
            <ul className="serve">
              {SERVE.map(s => <li key={s}><StarIcon />{s}</li>)}
            </ul>
          </div>
          <blockquote className="quote reveal">
            <QuoteMark className="qm" />
            <p>Whenever we encounter gray areas of the Internal Revenue Code we take the position that is most advantageous to our clients.</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
