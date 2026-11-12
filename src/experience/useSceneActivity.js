import { useEffect, useState } from "react";

export default function useSceneActivity(ref) {
  const [active, setActive] = useState(false);
  const [reduced, setReduced] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [compact, setCompact] = useState(
    () => matchMedia("(max-width: 800px)").matches,
  );
  const [saveData] = useState(() => Boolean(navigator.connection?.saveData));
  useEffect(() => {
    let visible = false;
    const update = () => setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        update();
      },
      { rootMargin: "120px" },
    );
    observer.observe(ref.current);
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const width = matchMedia("(max-width: 800px)");
    const onMotion = () => setReduced(motion.matches);
    const onWidth = () => setCompact(width.matches);
    motion.addEventListener("change", onMotion);
    width.addEventListener("change", onWidth);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", onMotion);
      width.removeEventListener("change", onWidth);
      document.removeEventListener("visibilitychange", update);
    };
  }, [ref]);
  return { active, reduced, compact, saveData };
}
