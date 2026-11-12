import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./experience.css";
import useSceneActivity from "./useSceneActivity";
import {
  experienceCopy,
  journeyStages,
  journeyProgress,
  journeyIndex,
} from "./copy";
import Icon from "../ui/Icon";

function Transport({ mode }) {
  return (
    <svg
      className="journey-transport"
      viewBox="0 0 700 320"
      fill="none"
      aria-hidden="true"
    >
      {mode === "port" && (
        <g>
          <path d="M94 278V15h410M124 278V45h366M105 17l90 28 80-28 85 28 80-28M480 17v112m-32 0h66m-57 0v21m48-21v21" />
          <path d="m60 283 50 28h486l45-28H60Z" />
          <path d="M500 249v-37h56v37m-20-37v-18m-388 76h440" />
        </g>
      )}
      {mode === "rail" && (
        <g>
          <path d="M65 258h577v24H65zm40 24v15m116-15v15m250-15v15m110-15v15M40 318h625M50 303h600" />
          <circle cx="132" cy="291" r="16" />
          <circle cx="199" cy="291" r="16" />
          <circle cx="494" cy="291" r="16" />
          <circle cx="561" cy="291" r="16" />
          <path d="M65 258v-30m577 30v-30" />
        </g>
      )}
      {mode === "road" && (
        <g>
          <path d="M59 250h438v30H59zm438 30V146h73l65 73v61h-37m-101 0h35m-6-116h38l43 51h-81zM635 241h-28" />
          <circle cx="580" cy="281" r="26" />
          <circle cx="580" cy="281" r="12" />
          <circle cx="115" cy="281" r="24" />
          <circle cx="192" cy="281" r="24" />
          <path d="M54 316h604" />
        </g>
      )}
      {mode === "air" && (
        <g>
          <path d="m22 235 225-38 128-153 45 2-69 138 208-28 57-52 32-3-25 69 53 26-35 12-77-17-219 49 79 66-46 3-119-55-163 31-73-51Z" />
          <path d="m21 282 147-22m-98 53 119-21M441 82l-15 41" />
        </g>
      )}
    </svg>
  );
}

export default function JourneyStory() {
  const root = useRef(null);
  const [index, setIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const copy = experienceCopy[i18n.resolvedLanguage] || experienceCopy.kk;
  const { active, compact, reduced } = useSceneActivity(root);
  const manual = compact || reduced;
  const stage = journeyStages[index];
  useEffect(() => {
    if (!active || manual) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = root.current.getBoundingClientRect();
      const progress = journeyProgress(
        bounds.top,
        bounds.height,
        window.innerHeight,
      );
      setIndex(journeyIndex(progress));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [active, manual]);
  const select = (next) => {
    if (manual) {
      setIndex(next);
      return;
    }
    const bounds = root.current.getBoundingClientRect();
    const distance = bounds.height - window.innerHeight + 90;
    window.scrollTo({
      top: window.scrollY + bounds.top - 90 + ((next + 0.3) / 4) * distance,
      behavior: reduced ? "instant" : "smooth",
    });
  };
  return (
    <section
      id="cargo-journey"
      className="cargo-journey"
      ref={root}
      data-manual={manual}
      data-stage={stage.mode}
    >
      <div className="journey-sticky">
        <div className="container journey-header">
          <div>
            <span className="eyebrow">Great Steppe Logistics</span>
            <h2>{copy.journey}</h2>
          </div>
          <span className="journey-scroll-hint">
            <Icon name="arrow" size={18} />
            {copy.scroll}
          </span>
        </div>
        <div className="container">
          <div className="journey-cinema">
            {active &&
              journeyStages.map((item, n) => (
                <img
                  key={item.mode}
                  className="journey-backdrop"
                  src={`/media/${item.photo}-sm.webp`}
                  width="900"
                  height="600"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  data-current={index === n}
                />
              ))}
            <div className="journey-vignette" />
            <div className="journey-scene-grid" aria-hidden="true" />
            <div className="journey-copy" aria-live={manual ? "polite" : "off"}>
              <span className="journey-chapter">
                0{index + 1}
                <span>/ 04</span>
              </span>
              <h3>{t(`${stage.key}.title`)}</h3>
              <p>{t(`services.${stage.description}.description`)}</p>
              <Link className="text-link" to={`/services/${stage.slug}`}>
                {copy.open}
                <Icon name="northeast" size={20} />
              </Link>
            </div>
            <div className="journey-vehicle" aria-hidden="true">
              <Transport mode={stage.mode} />
            </div>
            <span className="journey-note">{copy.note}</span>
          </div>
          <div
            className="journey-chapters"
            role="group"
            aria-label={copy.journey}
          >
            {journeyStages.map((item, n) => (
              <button
                key={item.mode}
                onClick={() => select(n)}
                aria-pressed={index === n}
              >
                <span>0{n + 1}</span>
                {t(`${item.key}.title`)}
                <i />
              </button>
            ))}
          </div>
          <a className="journey-skip" href="#about-company">
            {t("nav.about")}
            <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
