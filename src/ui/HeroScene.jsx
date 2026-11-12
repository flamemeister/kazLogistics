import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Photo from "./Photo";
import "../styles/hero-scene.css";

const motionLabels = {
  ru: ["Остановить анимацию", "Включить анимацию"],
  kk: ["Анимацияны тоқтату", "Анимацияны қосу"],
  en: ["Pause animation", "Play animation"],
  zh: ["暂停动画", "播放动画"],
};

export default function HeroScene() {
  const scene = useRef(null);
  const { i18n } = useTranslation();
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pageActive, setPageActive] = useState(true);
  const labels = motionLabels[i18n.resolvedLanguage] || motionLabels.kk;

  useEffect(() => {
    const onVisibility = () => setPageActive(!document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    const observer = window.IntersectionObserver
      ? new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
      : null;
    observer?.observe(scene.current);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      className="hero-scene"
      ref={scene}
      data-paused={paused || !visible || !pageActive}
    >
      <Photo name="multimodal" className="hero-photo" priority />
      <svg
        className="hero-sea"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="hero-sea-light"
            x1="0"
            y1="0"
            x2="1440"
            y2="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d7eddc" stopOpacity="0" />
            <stop offset=".58" stopColor="#d7eddc" stopOpacity=".12" />
            <stop offset="1" stopColor="#ffffff" stopOpacity=".4" />
          </linearGradient>
          <mask id="hero-open-water">
            <path
              d="M0 0H1440V120L1080 150L920 105L690 120L420 390L0 800Z"
              fill="white"
            />
          </mask>
        </defs>
        <g
          mask="url(#hero-open-water)"
          stroke="url(#hero-sea-light)"
          strokeLinecap="round"
        >
          <g className="sea-current sea-current-near" strokeWidth="1.3">
            <path d="M-120 600C180 500 270 570 470 430S810 380 1040 230S1310 190 1570 120" />
            <path d="M-100 650C150 560 300 610 510 470S820 420 1100 260S1320 240 1580 160" />
            <path d="M-100 730C180 650 290 670 540 540S880 490 1130 340S1360 300 1580 230" />
          </g>
          <g className="sea-current sea-current-far" strokeWidth=".8">
            <path d="M-100 350C170 280 300 370 520 230S880 230 1120 130S1360 100 1560 40" />
            <path d="M-100 400C170 330 320 420 540 290S880 280 1150 180S1380 150 1570 90" />
            <path d="M-100 490C170 420 320 470 550 350S900 340 1180 230S1390 200 1580 150" />
          </g>
        </g>
      </svg>
      <div className="hero-water-light" aria-hidden="true" />
      <button
        className="hero-motion-toggle"
        onClick={() => setPaused((value) => !value)}
        aria-label={labels[paused ? 1 : 0]}
        aria-pressed={paused}
        title={labels[paused ? 1 : 0]}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          {paused ? (
            <path d="m5 3 8 5-8 5V3Z" />
          ) : (
            <path d="M4 3h3v10H4V3Zm5 0h3v10H9V3Z" />
          )}
        </svg>
      </button>
    </div>
  );
}
