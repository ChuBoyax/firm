export const STAR_PATH = 'M50 2 L58 42 L98 50 L58 58 L50 98 L42 58 L2 50 L42 42 Z';

/** Reusable lodestar shape, referenced with <use href="#star"/>. */
export function StarDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <path id="star" d={STAR_PATH} />
      </defs>
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <use href="#star" />
    </svg>
  );
}

export function Brand() {
  return (
    <a className="brand" href="./" aria-label="Lodesterre Tax Accountants, home">
      <StarIcon />
      <span><b>Lodesterre</b><small>Tax Accountants</small></span>
    </a>
  );
}
