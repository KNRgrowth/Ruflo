import { owner } from "@/content";

const Owner = () => (
  <section className="owner section" id="misty" aria-labelledby="owner-title">
    <div className="wrap owner__grid">
      <figure className="owner__portrait reveal">
        <div className="owner__photo">
          <img src={owner.photo} alt={owner.photoAlt} width={900} height={1125} loading="lazy" />
        </div>
        <figcaption><span>{owner.signature}</span><span>{owner.role}</span></figcaption>
        <span className="owner__vert" aria-hidden="true">Owner · Stylist · Brassy Monkey</span>
      </figure>

      <div className="owner__copy reveal">
        <p className="eyebrow eyebrow--dark"><span className="rule"></span>{owner.eyebrow}</p>
        <h2 className="h2 h2--dark" id="owner-title">{owner.title} <span className="serif">{owner.titleSerif}</span></h2>
        <p className="lead lead--dark">{owner.lead}</p>
        {owner.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <p className="signature" aria-label={`Signed, ${owner.signature}`}>{owner.signature}</p>
        <blockquote className="owner__quote">
          <p>“{owner.quote}”</p>
          <cite>{owner.quoteBy}</cite>
        </blockquote>
      </div>
    </div>
  </section>
);

export default Owner;
