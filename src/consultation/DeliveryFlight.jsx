import { useEffect, useRef, useState } from "react";
import { flightRoute } from "./flightRoute";
import Icon from "../ui/Icon";
import "./consultation.css";

function Airliner() {
  return (
    <svg
      width="140"
      height="100"
      viewBox="0 0 140 100"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="airliner-body"
          x1="70"
          y1="43"
          x2="70"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset=".5" stopColor="#e6f1ef" />
          <stop offset="1" stopColor="#7f9f9a" />
        </linearGradient>
        <linearGradient
          id="airliner-wing"
          x1="64"
          y1="10"
          x2="64"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ecf4f0" />
          <stop offset=".5" stopColor="#97b5ad" />
          <stop offset="1" stopColor="#cee0d9" />
        </linearGradient>
      </defs>
      <path
        d="m26 47-16-23H3l10 26L3 76h7l16-23Z"
        fill="#83b29d"
        stroke="#c4dccd"
        strokeWidth=".6"
      />
      <path
        d="M57 47 35 8h14l45 39v6L49 92H35l22-39Z"
        fill="url(#airliner-wing)"
        stroke="#e7f3e3"
        strokeWidth=".6"
      />
      <path d="m57 47-15-34m15 40L42 87" stroke="#608f7c" strokeWidth="1.3" />
      <rect x="62" y="27" width="23" height="7" rx="3" fill="#e3f0e8" />
      <path d="M82 27v7" stroke="#708d82" strokeWidth="2" />
      <rect x="62" y="66" width="23" height="7" rx="3" fill="#d0e2d7" />
      <path d="M82 66v7" stroke="#708d82" strokeWidth="2" />
      <path
        d="M9 46.5 98 44c17 0 30 2 39 6-9 4-22 6-39 6L9 53.5Z"
        fill="url(#airliner-body)"
        stroke="#d8e8df"
        strokeWidth=".7"
      />
      <path d="m112 45.5 10 1.5-3 2-9-1Z" fill="#24483e" />
      <path d="M40 51h61" stroke="#286344" strokeWidth="1" />
      <g fill="#4c796b">
        <circle cx="50" cy="47.5" r=".8" />
        <circle cx="55" cy="47.5" r=".8" />
        <circle cx="60" cy="47.5" r=".8" />
        <circle cx="65" cy="47.5" r=".8" />
        <circle cx="70" cy="47.5" r=".8" />
        <circle cx="75" cy="47.5" r=".8" />
        <circle cx="80" cy="47.5" r=".8" />
        <circle cx="85" cy="47.5" r=".8" />
        <circle cx="90" cy="47.5" r=".8" />
        <circle cx="95" cy="47.5" r=".8" />
      </g>
    </svg>
  );
}

export default function DeliveryFlight({ status, copy, message, onClose }) {
  const dialog = useRef(null);
  const stage = useRef(null);
  const distance = useRef(0);
  const [size, setSize] = useState({ width: 1000, height: 500 });
  const [progress, setProgress] = useState(0);
  const [arrived, setArrived] = useState(false);
  const [reduced, setReduced] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const route = flightRoute(size.width, size.height);

  useEffect(() => {
    const node = dialog.current;
    const previous = document.activeElement;
    const form = node.parentElement?.querySelector(".consultation-form");
    const overflow = document.body.style.overflow;
    node.showModal();
    document.body.style.overflow = "hidden";
    node.querySelector(".delivery-flight-close").focus();
    const observer = new ResizeObserver(([entry]) =>
      setSize({
        width: Math.round(entry.contentRect.width),
        height: Math.round(entry.contentRect.height),
      }),
    );
    observer.observe(stage.current);
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    media.addEventListener("change", update);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
      node.close();
      document.body.style.overflow = overflow;
      if (
        previous?.isConnected &&
        previous !== document.body &&
        !previous.disabled
      ) {
        previous.focus({ preventScroll: true });
      } else if (form?.isConnected) form.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    if (status === "error") return;
    const target = status === "success" ? 1 : 0.62;
    if (reduced) {
      distance.current = status === "success" ? 1 : 0;
      setProgress(distance.current);
      setArrived(status === "success");
      return;
    }
    let frame;
    let start;
    const from = distance.current;
    const duration =
      status === "success" ? Math.max(1800, (1 - from) * 3600) : 2400;
    const animate = (time) => {
      if (start === undefined) start = time;
      const portion = Math.min(1, (time - start) / duration);
      const eased = portion * portion * (3 - 2 * portion);
      distance.current = from + (target - from) * eased;
      setProgress(distance.current);
      if (portion < 1) frame = requestAnimationFrame(animate);
      else if (status === "success") setArrived(true);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [status, reduced]);

  const delivered = status === "success" && arrived;
  useEffect(() => {
    if (!delivered) return;
    const timeout = setTimeout(onClose, 2000);
    return () => clearTimeout(timeout);
  }, [delivered, onClose]);
  const title =
    status === "error"
      ? copy.failed
      : delivered
        ? copy.delivered
        : copy.sending;
  return (
    <dialog
      className="delivery-flight"
      ref={dialog}
      data-state={status}
      data-arrived={delivered}
      aria-labelledby="delivery-flight-title"
      aria-describedby="delivery-flight-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="delivery-flight-sky" aria-hidden="true" />
      <header className="delivery-flight-header">
        <img
          src="/media/logo-white.webp"
          alt="Great Steppe Logistics"
          width="640"
          height="166"
        />
        <span aria-hidden="true">
          A <span>→</span> B
        </span>
        <button
          type="button"
          className="delivery-flight-close"
          aria-label={copy.close}
          onClick={onClose}
        >
          <Icon name="close" size={24} />
        </button>
      </header>
      <div className="delivery-flight-heading" aria-live="polite">
        <span className="eyebrow">Great Steppe Logistics</span>
        <h2 id="delivery-flight-title">{title}</h2>
        <p id="delivery-flight-description">
          {status === "error" || delivered ? message : copy.flightHint}
        </p>
      </div>
      <div className="delivery-flight-stage" ref={stage} aria-hidden="true">
        <svg
          className="delivery-route-svg"
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          fill="none"
        >
          <path className="delivery-route-halo" d={route.path} />
          <path className="delivery-route-track" d={route.path} />
          <path
            className="delivery-route-progress"
            d={route.path}
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={100 - progress * 100}
          />
          <circle
            className="delivery-point-outer"
            cx={route.a.x}
            cy={route.a.y}
            r="26"
          />
          <circle
            className="delivery-point"
            cx={route.a.x}
            cy={route.a.y}
            r="16"
          />
          <text x={route.a.x} y={route.a.y + 5} textAnchor="middle">
            A
          </text>
          <circle
            className="delivery-point-outer destination-ring"
            cx={route.b.x}
            cy={route.b.y}
            r="26"
          />
          <circle
            className="delivery-point destination-point"
            cx={route.b.x}
            cy={route.b.y}
            r="16"
          />
          {delivered ? (
            <path
              className="delivery-check"
              d={`m ${route.b.x - 7} ${route.b.y} 5 5 10 -11`}
            />
          ) : (
            <text x={route.b.x} y={route.b.y + 5} textAnchor="middle">
              B
            </text>
          )}
        </svg>
        <span
          className="delivery-point-label"
          style={{
            left: `clamp(74px, ${route.a.x}px, calc(100% - 74px))`,
            top: route.a.y + 38,
          }}
        >
          {copy.origin}
        </span>
        <span
          className="delivery-point-label"
          style={{
            left: `clamp(74px, ${route.b.x}px, calc(100% - 74px))`,
            top: route.b.y + 38,
          }}
        >
          {copy.destination}
        </span>
        <div
          className="delivery-airliner"
          style={{
            offsetPath: `path("${route.path}")`,
            offsetDistance: `${progress * 100}%`,
          }}
        >
          <Airliner />
        </div>
      </div>
      <footer className="delivery-flight-footer">
        <span className="delivery-flight-status">
          <span />
          {title}
        </span>
        <button
          type="button"
          className="delivery-flight-return"
          onClick={onClose}
        >
          {status === "loading" ? copy.hideFlight : copy.backToForm}
          <Icon name="arrow" size={20} />
        </button>
      </footer>
    </dialog>
  );
}
