import { business, services } from "@/content";
import { ServiceIcon } from "./Icons";

const Services = () => (
  <section className="services section" id="services" aria-labelledby="services-title">
    <div className="wrap">
      <div className="section-head reveal">
        <p className="eyebrow"><span className="rule"></span>Services</p>
        <h2 className="h2" id="services-title">The <span className="serif">menu.</span></h2>
        <p className="section-head__note">Every service starts with a conversation. Call to book your chair and ask about pricing for your hair.</p>
      </div>

      <div className="svc-grid">
        {services.map((s) => (
          <article className="svc reveal" key={s.title}>
            <div className="svc__bg" aria-hidden="true" style={{ backgroundImage: `url('${s.image}')` }}></div>
            <ServiceIcon name={s.icon} />
            <p className="svc__tag">{s.tag}</p>
            <h3 className="svc__title">{s.title}</h3>
            <p className="svc__desc">{s.description}</p>
            <div className="svc__foot">
              <span className="svc__price">{s.price}</span>
              <a href={business.phoneLink} className="svc__link">
                Book<span aria-hidden="true"> →</span><span className="sr-only"> {s.title}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
