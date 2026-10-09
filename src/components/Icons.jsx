const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function ArrowUpRight(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M5 11 L11 5 M6 5 H11 V10" {...stroke} />
    </svg>
  );
}

export function Caret(props) {
  return (
    <svg viewBox="0 0 10 10" aria-hidden="true" {...props}>
      <path d="M1.5 3.5 L5 7 L8.5 3.5" {...stroke} />
    </svg>
  );
}

const PATHS = {
  refunds: 'M6 3 H18 V21 L15 19 L12 21 L9 19 L6 21 Z M9 8 H15 M9 12 H15 M9 16 H12',
  calc: 'M6 3 H18 A1 1 0 0 1 19 4 V20 A1 1 0 0 1 18 21 H6 A1 1 0 0 1 5 20 V4 A1 1 0 0 1 6 3 Z M8 6 H16 V9 H8 Z M8.5 13 H9.5 M11.5 13 H12.5 M14.5 13 H15.5 M8.5 17 H9.5 M11.5 17 H12.5 M14.5 17 H15.5',
  links: 'M12 3 A9 9 0 1 0 12 21 A9 9 0 1 0 12 3 Z M3 12 H21 M12 3 C9 6 9 18 12 21 M12 3 C15 6 15 18 12 21',
  map: 'M9 4 L3 6 V20 L9 18 L15 20 L21 18 V4 L15 6 Z M9 4 V18 M15 6 V20',
  gauge: 'M4 16 A8 8 0 1 1 20 16 M12 16 L16 10 M3 19 H21',
  amend: 'M5 20 H9 L19 10 L15 6 L5 16 Z M13 8 L17 12',
  badge: 'M4 6 H20 V19 H4 Z M9 4 V8 M15 4 V8 M7 12 H11 M7 15.5 H11 M14 11 H17 V15 H14 Z',
  cap: 'M2 9 L12 4 L22 9 L12 14 Z M6 11 V16 C6 17.5 9 19 12 19 C15 19 18 17.5 18 16 V11 M22 9 V15',
  shield: 'M12 3 L19 6 V11 C19 16 15.5 19.5 12 21 C8.5 19.5 5 16 5 11 V6 Z M9 12 L11 14 L15 10',
  award: 'M12 3 A6 6 0 1 0 12 15 A6 6 0 1 0 12 3 Z M8.5 13.8 L7 21 L12 18.5 L17 21 L15.5 13.8',
  doc: 'M7 3 H14 L18 7 V21 H7 Z M14 3 V7 H18 M10 12 H15 M10 15.5 H15',
  phone: 'M5 4 H9 L11 9 L8.5 10.5 C9.5 12.8 11.2 14.5 13.5 15.5 L15 13 L20 15 V19 C20 20 19 21 18 21 C10.5 20.5 3.5 13.5 3 6 C3 5 4 4 5 4 Z',
  pin: 'M12 21 C8 16.5 5 13 5 9.5 A7 7 0 0 1 19 9.5 C19 13 16 16.5 12 21 Z M12 7 A2.5 2.5 0 1 0 12 12 A2.5 2.5 0 1 0 12 7 Z',
  mail: 'M3 6 H21 V18 H3 Z M3 6 L12 13 L21 6',
};

export function Icon({ name, ...props }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d={PATHS[name]} {...stroke} />
    </svg>
  );
}

export function QuoteMark(props) {
  return (
    <svg viewBox="0 0 40 32" aria-hidden="true" {...props}>
      <path d="M0 32 V18 C0 8 5 2 15 0 L16 5 C10 7 8 10 8 15 H15 V32 Z M24 32 V18 C24 8 29 2 39 0 L40 5 C34 7 32 10 32 15 H39 V32 Z" />
    </svg>
  );
}
