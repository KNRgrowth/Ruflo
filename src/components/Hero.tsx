import { useEffect, useRef } from "react";
import { business, hero, ticker } from "@/content";
import GoldDust from "./GoldDust";
import { ArrowIcon } from "./Icons";

const Hero = () => {
  const archImg = useRef<HTMLImageElement>(null);

  // gentle parallax on the arch photo
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight || !archImg.current) return;
      archImg.current.style.transform = `scale(1.08) translateY(${y * 0.06}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tickerItems = [...ticker, ...ticker];

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <img src={hero.image} alt="" className="hero__bgimg" />
        <GoldDust />
        <span className="hero__ghost">Brassy</span>
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow"><span className="rule"></span>{hero.eyebrow}</p>
          <h1 className="hero__title" id="hero-title">
            {hero.lines.map((l) => (
              <span className="line" key={l}><span>{l}</span></span>
            ))}
            <span className="line line--serif"><span>{hero.serifLine}</span></span>
          </h1>
          <p className="hero__lede">{hero.lede}</p>
          <div className="hero__actions">
            <a className="btn btn--brass" href="#services">Explore our services <ArrowIcon /></a>
            <a className="btn btn--ghost" href={business.phoneLink}>Call to book</a>
          </div>
          <p className="hero__meta">
            {business.street} &nbsp;·&nbsp; <a href={business.phoneLink}>{business.phoneDisplay}</a>
          </p>
        </div>

        <figure className="hero__frame">
          <div className="arch">
            <img ref={archImg} src={hero.image} alt={hero.imageAlt} width={494} height={472} />
          </div>
          <div className="badge" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="badge__ring">
              <defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
              <text><textPath href="#circ">BRASSY MONKEY ✦ BARBER &amp; SALON ✦ TECUMSEH OK ✦ </textPath></text>
            </svg>
            <img src="/images/brassy-monkey-logo.webp" alt="" className="badge__logo" width={120} height={120} />
          </div>
          <figcaption>{hero.imageCaption}</figcaption>
        </figure>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About"><span></span></a>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {tickerItems.map((t, i) => (
            <span key={i} style={{ display: "contents" }}><span>{t}</span><i>✦</i></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
