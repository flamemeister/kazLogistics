import { useEffect } from "react";

// Content stays visible when JS, motion, or the observer API is unavailable.
export default function useReveal(pathname) {
  useEffect(() => {
    if (
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const nodes = document.querySelectorAll(
      "main .section-heading, main .service-card, main .about-photo, main .about-summary, main .form-intro, main .consultation-form, main .advantages article, main .principles article, main .stages li",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.add("reveal-visible");
          observer.unobserve(target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -25px 0px" },
    );
    nodes.forEach((node, index) => {
      node.classList.add("reveal-ready");
      node.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
      observer.observe(node);
    });
    return () => {
      observer.disconnect();
      nodes.forEach((node) =>
        node.classList.remove("reveal-ready", "reveal-visible"),
      );
    };
  }, [pathname]);
}
