import { useEffect, useRef, useState } from "react";
import { business, navLinks } from "@/content";
import { PhoneIcon } from "./Icons";

const Nav = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) spy.observe(el);
    });
    return () => { window.removeEventListener("scroll", onScroll); spy.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`nav ${solid || open ? "is-solid" : ""}`}>
        <div className="nav__inner">
          <a className="brand" href="#top" aria-label={`${business.name} home`}>
            <img src="/images/brassy-monkey-logo.webp" alt="" width={44} height={44} />
            <span className="brand__word">Brassy <em>Monkey</em></span>
          </a>
          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href ? "is-active" : ""}>{l.label}</a>
            ))}
          </nav>
          <a className="btn btn--brass btn--sm nav__cta" href={business.phoneLink}>
            <PhoneIcon /><span>{business.phoneDisplay}</span>
          </a>
          <button
            ref={toggleRef}
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span>
          </button>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu" hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a className="btn btn--brass" href={business.phoneLink}>Call to book · {business.phoneDisplay}</a>
          <p>{business.street}<br />{business.cityStateZip}</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
