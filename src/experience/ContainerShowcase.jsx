import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services } from "../data/services";
import Icon from "../ui/Icon";
import ContainerModel from "./ContainerModel";
import useSceneActivity from "./useSceneActivity";
import { experienceCopy } from "./copy";

export default function ContainerShowcase() {
  const root = useRef(null);
  const stage = useRef(null);
  const camera = useRef({ x: -16, y: -30 });
  const drag = useRef(null);
  const [selected, setSelected] = useState(null);
  const [opened, setOpened] = useState(false);
  const { t, i18n } = useTranslation();
  const copy = experienceCopy[i18n.resolvedLanguage] || experienceCopy.kk;
  const { active, reduced, compact } = useSceneActivity(root);
  const rotate = (x, y) => {
    camera.current = { x: Math.max(-55, Math.min(25, x)), y };
    stage.current.style.setProperty("--container-x", `${camera.current.x}deg`);
    stage.current.style.setProperty("--container-y", `${camera.current.y}deg`);
  };
  const reset = () => {
    rotate(-16, -30);
    setOpened(false);
  };
  const pointerMove = (event) => {
    if (!active) return;
    if (drag.current) {
      const dx = event.clientX - drag.current.x;
      const dy = event.clientY - drag.current.y;
      rotate(
        drag.current.rx - (event.pointerType === "touch" ? 0 : dy * 0.3),
        drag.current.ry + dx * 0.5,
      );
    } else if (!compact && !reduced && event.pointerType === "mouse") {
      const bounds = event.currentTarget.getBoundingClientRect();
      rotate(
        -16 - ((event.clientY - bounds.top) / bounds.height - 0.5) * 14,
        -30 + ((event.clientX - bounds.left) / bounds.width - 0.5) * 40,
      );
    }
  };
  const pointerDown = (event) => {
    if (event.button !== 0) return;
    drag.current = {
      x: event.clientX,
      y: event.clientY,
      rx: camera.current.x,
      ry: camera.current.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const pointerUp = (event) => {
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const keyboard = (event) => {
    const step = {
      ArrowLeft: [0, -15],
      ArrowRight: [0, 15],
      ArrowUp: [-10, 0],
      ArrowDown: [10, 0],
    }[event.key];
    if (!step) return;
    event.preventDefault();
    rotate(camera.current.x + step[0], camera.current.y + step[1]);
  };
  const choose = (service) => {
    setSelected(service);
    setOpened(true);
    rotate(-12, -54);
  };
  return (
    <section
      className="container-showcase section"
      id="cargo-configurator"
      ref={root}
    >
      <div className="container">
        <div className="showcase-heading">
          <div>
            <span className="eyebrow">Great Steppe Logistics · 3D</span>
            <h2>{copy.container}</h2>
          </div>
          <p>{copy.intro}</p>
        </div>
        <div className="showcase-layout">
          <div className="showcase-view">
            <div
              className="container-stage"
              ref={stage}
              role="group"
              tabIndex="0"
              aria-label={copy.model}
              aria-describedby="container-help"
              onPointerMove={pointerMove}
              onPointerDown={pointerDown}
              onPointerUp={pointerUp}
              onPointerCancel={pointerUp}
              onLostPointerCapture={() => {
                drag.current = null;
              }}
              onPointerLeave={() => {
                if (!drag.current && !reduced) rotate(-16, -30);
              }}
              onKeyDown={keyboard}
            >
              <div className="container-orbit orbit-one" />
              <div className="container-orbit orbit-two" />
              <span className="container-stage-code" aria-hidden="true">
                GSL / INTERACTIVE OBJECT
              </span>
              <div className="container-display">
                <ContainerModel open={opened} />
              </div>
              <div className="container-ground-shadow" />
              <span className="container-stage-axis" aria-hidden="true">
                X — Y — Z
              </span>
            </div>
            <div className="container-tools">
              <span id="container-help">
                {compact ? copy.touch : copy.rotate}
              </span>
              <button
                onClick={reset}
                aria-label={copy.reset}
                title={copy.reset}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M4 9a8 8 0 1 1 0 6M4 3v6h6" />
                </svg>
                <span>{copy.reset}</span>
              </button>
            </div>
          </div>
          <div className="container-options">
            <span className="eyebrow">{copy.choose}</span>
            <div role="group" aria-label={copy.choose}>
              {services.map((service) => (
                <button
                  className="container-service"
                  key={service.slug}
                  onClick={() => choose(service)}
                  aria-pressed={selected?.slug === service.slug}
                >
                  <span className="container-service-n">0{service.id}</span>
                  <Icon name={service.icon} size={21} />
                  <span>{t(`${service.key}.title`)}</span>
                  <Icon name="northeast" size={18} />
                </button>
              ))}
            </div>
            <div className="container-service-detail" aria-live="polite">
              {selected ? (
                <Link to={`/services/${selected.slug}`}>
                  {copy.open}
                  <strong>{t(`${selected.key}.title`)}</strong>
                  <Icon name="arrow" size={24} />
                </Link>
              ) : (
                <div>
                  <Icon name="box" size={24} />
                  <span>Great Steppe Logistics</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
