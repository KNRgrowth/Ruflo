import { why } from "@/content";

const Why = () => (
  <section className="why section" id="why" aria-labelledby="why-title">
    <div className="wrap why__grid">
      <div className="why__head reveal">
        <p className="eyebrow"><span className="rule"></span>Why Brassy Monkey?</p>
        <h2 className="h2" id="why-title">{why.title} <span className="serif">{why.titleSerif}</span></h2>
        <p className="why__neon" aria-hidden="true">{why.neon}</p>
      </div>
      <ul className="why__list">
        {why.reasons.map((r) => (
          <li className="why__item" key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>
        ))}
      </ul>
    </div>
  </section>
);

export default Why;
