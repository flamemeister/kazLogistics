import { useEffect, useState } from "react";
export default function useMapActivity(ref) {
  const [active, setActive] = useState(true);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    let visible = true;
    const update = () => setActive(visible && !document.hidden);
    const observer = window.IntersectionObserver
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          update();
        })
      : null;
    observer?.observe(ref.current);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReduced(media.matches);
    document.addEventListener("visibilitychange", update);
    media.addEventListener("change", onMotion);
    update();
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", update);
      media.removeEventListener("change", onMotion);
    };
  }, [ref]);
  return { active, reduced };
}
