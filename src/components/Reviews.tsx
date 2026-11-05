import { reviews } from "@/content";

const Reviews = () => {
  const featured = reviews.find((r) => r.featured);
  const rest = reviews.filter((r) => r !== featured);

  return (
    <section className="reviews section" id="reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow"><span className="rule"></span>Reviews</p>
          <h2 className="h2" id="reviews-title">Word around <span className="serif">Tecumseh.</span></h2>
          <p className="reviews__score"><strong>{reviews.length} of {reviews.length}</strong> recommend Brassy Monkey on Facebook</p>
        </div>

        {featured && (
          <figure className="review-feature reveal">
            <span className="qmark" aria-hidden="true">“</span>
            <blockquote>
              <p>{featured.text} {featured.highlight && <mark>{featured.highlight}</mark>}</p>
            </blockquote>
            <figcaption>
              <span className="avatar" aria-hidden="true">{featured.initials}</span>
              <span><strong>{featured.name}</strong><small>Recommends Brassy Monkey · Facebook · {featured.date}</small></span>
            </figcaption>
          </figure>
        )}

        <div className="review-grid">
          {rest.map((r) => (
            <figure className="review reveal" key={r.name}>
              <span className="qmark" aria-hidden="true">“</span>
              <blockquote><p>{r.text}{r.highlight ? ` ${r.highlight}` : ""}</p></blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{r.initials}</span>
                <span><strong>{r.name}</strong><small>Recommends · Facebook · {r.date}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
