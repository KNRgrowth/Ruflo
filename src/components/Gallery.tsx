import { useEffect, useRef, useState } from "react";
import { business, gallery, GalleryItem } from "@/content";

const sizeClass = (s?: string) => (s === "tall" ? " g-item--tall" : s === "wide" ? " g-item--wide" : "");

const BeforeAfter = ({ item }: { item: Extract<GalleryItem, { type: "beforeAfter" }> }) => {
  const [pos, setPos] = useState(50);
  return (
    <div className="ba__stage" style={{ ["--pos" as string]: `${pos}%` }}>
      <img src={item.after} alt={`After: ${item.alt}`} />
      <img src={item.before} alt={`Before: ${item.alt}`} className="ba__before" />
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)}
        className="ba__range" aria-label="Drag to compare before and after" />
      <span className="ba__label ba__label--l">Before</span><span className="ba__label ba__label--r">After</span>
    </div>
  );
};

const Gallery = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [shown, setShown] = useState<{ src: string; alt: string; caption: string } | null>(null);

  useEffect(() => {
    if (shown) dialog.current?.showModal();
  }, [shown]);

  return (
    <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="section-head section-head--split reveal">
          <div>
            <p className="eyebrow"><span className="rule"></span>Gallery</p>
            <h2 className="h2" id="gallery-title">Inside <span className="serif">the shop.</span></h2>
          </div>
          <p className="section-head__note">Fresh cuts, color and the people who wear them. Tap any photo to view it larger.</p>
        </div>

        <div className="g-grid">
          {gallery.map((item, i) => (
            <figure key={i} className={`g-item${sizeClass(item.size)}${item.type === "beforeAfter" ? " ba" : ""} reveal`}>
              {item.type === "photo" ? (
                <button className="g-open" aria-label={`View larger: ${item.caption}`}
                  onClick={() => setShown({ src: item.src, alt: item.alt, caption: `${item.label} · ${item.caption}` })}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </button>
              ) : (
                <BeforeAfter item={item} />
              )}
              <figcaption><span>{item.label}</span>{item.caption}</figcaption>
            </figure>
          ))}

          <figure className="g-item g-item--logo reveal">
            <img src="/images/brassy-monkey-logo.webp" alt="Brassy Monkey logo: two monkeys in sunglasses, one wearing a crown and one a leopard headband" width={484} height={484} loading="lazy" />
            <figcaption><span>The crew</span>King &amp; queen of the shop</figcaption>
          </figure>
          <a className="g-item g-item--cta g-item--wide reveal" href={business.facebook} target="_blank" rel="noopener">
            <span className="g-cta__eyebrow">More on Facebook</span>
            <span className="g-cta__title">New cuts, color &amp; before-and-afters every week</span>
            <span className="g-cta__go">See the latest <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </div>

      <dialog className="lightbox" ref={dialog} aria-label="Photo viewer"
        onClose={() => setShown(null)}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}>
        <button className="lightbox__close" aria-label="Close photo" onClick={() => dialog.current?.close()}>×</button>
        {shown && <img src={shown.src} alt={shown.alt} />}
        <p>{shown?.caption}</p>
      </dialog>
    </section>
  );
};

export default Gallery;
