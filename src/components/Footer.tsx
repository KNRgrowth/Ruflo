import { business, navLinks } from "@/content";

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer__top">
        <a className="brand brand--lg" href="#top" aria-label="Back to top">
          <img src="/images/brassy-monkey-logo.webp" alt="" width={72} height={72} loading="lazy" />
          <span className="brand__word">Brassy <em>Monkey</em></span>
        </a>
        <p className="footer__tag">Good hair. Good style. <span className="serif">A little attitude.</span></p>
      </div>
      <div className="footer__cols">
        <nav aria-label="Footer">
          <p className="label">Explore</p>
          {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div>
          <p className="label">Visit</p>
          <address>{business.street}<br />{business.cityStateZip}</address>
        </div>
        <div>
          <p className="label">Contact</p>
          <a href={business.phoneLink}>{business.phoneDisplay}</a>
          <a href={business.facebook} target="_blank" rel="noopener">Facebook ↗</a>
        </div>
      </div>
      <p className="footer__word" aria-hidden="true">Brassy Monkey</p>
      <div className="footer__base">
        <p>© {new Date().getFullYear()} Brassy Monkey · Barber Shop &amp; Hair Salon · Tecumseh, Oklahoma</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
