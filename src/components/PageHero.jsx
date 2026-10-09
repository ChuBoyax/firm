import { HOME } from '../data.jsx';

export default function PageHero({ kicker, title, id, children }) {
  return (
    <section className="page-hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap reveal">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href={HOME}>Home</a><span aria-hidden="true">/</span><span aria-current="page">{kicker}</span>
        </nav>
        <h1 id={id}>{title}</h1>
        {children && <p className="lede">{children}</p>}
      </div>
    </section>
  );
}
