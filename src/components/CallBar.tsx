import { useEffect, useState } from "react";
import { business } from "@/content";
import { PhoneIcon } from "./Icons";

/** Sticky "Call to book" bar on phones, shown after scrolling past the hero. */
const CallBar = () => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      setShown(!!hero && window.scrollY > hero.offsetHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a className={`callbar ${shown ? "is-shown" : ""}`} href={business.phoneLink}>
      <PhoneIcon /> Call to book · {business.phoneDisplay}
    </a>
  );
};

export default CallBar;
