import { business, hours, hoursNote } from "@/content";

const fmt = (t: string) => {
  const [hs, m = "00"] = t.split(":");
  let h = +hs;
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}${m === "00" ? "" : ":" + m} ${ap}`;
};
const mins = (t: string) => { const [h, m = "0"] = t.split(":"); return +h * 60 + +m; };

const Visit = () => {
  const now = new Date();
  const today = now.getDay();
  const nowM = now.getHours() * 60 + now.getMinutes();
  const anySet = hours.some((d) => d.closed || (d.open && d.close));
  const t = hours.find((d) => d.day === today);
  const openNow = !!t && !t.closed && !!t.open && !!t.close && nowM >= mins(t.open) && nowM < mins(t.close);

  return (
    <section className="visit section" id="visit" aria-labelledby="visit-title">
      <div className="wrap">
        <div className="visit__head reveal">
          <p className="eyebrow"><span className="rule"></span>Visit &amp; book</p>
          <h2 className="h2 h2--xl" id="visit-title">Ready for a <span className="serif">fresh look?</span></h2>
        </div>

        <div className="visit__grid">
          <div className="visit__card reveal">
            <div className="visit__block">
              <p className="label">Call to book</p>
              <a className="visit__phone" href={business.phoneLink}>{business.phoneDisplay}</a>
            </div>
            <div className="visit__block">
              <p className="label">Find us</p>
              <address>{business.name}<br />{business.street}<br />{business.cityStateZip}</address>
            </div>
            <div className="visit__actions">
              <a className="btn btn--brass" href={business.phoneLink}>Call now</a>
              <a className="btn btn--ghost" href={business.directions} target="_blank" rel="noopener">Get directions</a>
              <a className="btn btn--ghost" href={business.facebook} target="_blank" rel="noopener">Facebook</a>
            </div>

            <div className="hours">
              <div className="hours__head">
                <p className="label">Hours</p>
                {anySet && (
                  <span className={`hours__status ${openNow ? "is-open" : "is-closed"}`}>{openNow ? "Open now" : "Closed now"}</span>
                )}
              </div>
              <ul className="hours__list">
                {hours.map((d) => (
                  <li key={d.day} className={d.day === today ? "is-today" : ""}>
                    <span>{d.name}</span>
                    <span className="hours__time">
                      {d.closed ? "Closed" : d.open && d.close ? `${fmt(d.open)} – ${fmt(d.close)}` : "Call for hours"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="hours__note">{hoursNote}</p>
            </div>
          </div>

          <div className="visit__map reveal">
            <div className="map__fallback">
              <span className="map__pin" aria-hidden="true"></span>
              <p>{business.street}<br />{business.cityStateZip}</p>
              <a href={business.mapsSearch} target="_blank" rel="noopener">Open in Google Maps ↗</a>
            </div>
            <iframe
              title={`Map showing ${business.name} at ${business.street}, ${business.cityStateZip}`}
              src={business.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
