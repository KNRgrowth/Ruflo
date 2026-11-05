const paths: Record<string, JSX.Element> = {
  scissors: <><circle cx="13" cy="35" r="6" /><circle cx="35" cy="35" r="6" /><path d="M17 31 38 6M31 31 10 6" /></>,
  women: <><path d="M10 42c4-10 2-22 8-30 4-5 12-5 16 0 6 8 4 20 8 30" /><path d="M18 12c2 8 0 18 3 28M30 12c-2 8 0 18-3 28" /></>,
  star: <><path d="M24 6l3.5 7.5L36 15l-6 6 1.5 8.5L24 25.5 16.5 29.5 18 21l-6-6 8.5-1.5z" /><path d="M14 40h20" /></>,
  razor: <><path d="M8 30h22l10-10H18z" /><path d="M8 30v4h22l10-10v-4" /><path d="M22 20l4-8" /></>,
  comb: <><path d="M8 18h32v6H8z" /><path d="M12 24v14M17 24v14M22 24v14M27 24v14M32 24v14M37 24v14" /></>,
  brush: <><path d="M30 6l12 12-18 18H12V24z" /><path d="M12 36 6 42" /><path d="M24 12l12 12" /></>,
};

export const ServiceIcon = ({ name }: { name: string }) => (
  <svg className="svc__icon" aria-hidden="true" viewBox="0 0 48 48">{paths[name] ?? paths.scissors}</svg>
);

export const PhoneIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
  </svg>
);

export const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
