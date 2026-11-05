import { useEffect } from "react";

/** Page-wide scroll effects: fade-in reveals, brass "why" rows, card spotlight. */
export function useSiteEffects() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observers: IntersectionObserver[] = [];

    // Reveal on scroll — only for elements that start below the first screen
    if (!reduce && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.remove("is-pending");
              io.unobserve(e.target);
            }
          }),
        { rootMargin: "0px 0px -8% 0px" }
      );
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.classList.add("is-pending");
          const idx = Array.prototype.indexOf.call(el.parentNode?.children ?? [], el);
          el.style.transitionDelay = `${(idx % 3) * 0.09}s`;
          io.observe(el);
        }
      });
      observers.push(io);
    }

    // "Why" rows light up in brass
    const whyItems = document.querySelectorAll(".why__item");
    if ("IntersectionObserver" in window) {
      const wio = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-lit")),
        { rootMargin: "0px 0px -35% 0px" }
      );
      whyItems.forEach((el) => wio.observe(el));
      observers.push(wio);
    } else whyItems.forEach((el) => el.classList.add("is-lit"));

    // Service cards: brass spotlight follows the pointer
    const cards = document.querySelectorAll<HTMLElement>(".svc");
    const move = (e: PointerEvent) => {
      const card = e.currentTarget as HTMLElement;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    cards.forEach((c) => c.addEventListener("pointermove", move));

    return () => {
      observers.forEach((o) => o.disconnect());
      cards.forEach((c) => c.removeEventListener("pointermove", move));
    };
  }, []);
}
