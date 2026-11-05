import { about } from "@/content";

const About = () => (
  <section className="about section" id="about" aria-labelledby="about-title">
    <div className="wrap about__grid">
      <div className="about__copy reveal">
        <p className="eyebrow"><span className="rule"></span>{about.eyebrow}</p>
        <h2 className="h2" id="about-title">{about.title} <span className="serif">{about.titleSerif}</span></h2>
        <p className="lead">{about.lead}</p>
        {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <ul className="pills" aria-label="Who we serve">
          {about.pills.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
      <div className="about__media reveal">
        <figure className="frame frame--tall">
          <img src={about.mainImage} alt={about.mainImageAlt} width={492} height={472} loading="lazy" />
          <span className="corner corner--tl"></span><span className="corner corner--br"></span>
        </figure>
        <figure className="frame frame--float">
          <img src={about.smallImage} alt={about.smallImageAlt} width={218} height={157} loading="lazy" />
        </figure>
        <p className="about__stamp"><span>Find us on</span><strong>N. Broadway</strong><span>Tecumseh, OK</span></p>
      </div>
    </div>
  </section>
);

export default About;
