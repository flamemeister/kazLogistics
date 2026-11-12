import "./consultation.css";

export function PaperPlane({ className = "" }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m3 5 27 11L3 27l5-11L3 5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 16h20M3 5l11 11L3 27"
        stroke="var(--plane-detail,#e9f3de)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default function DeliveryFlight({ status, copy }) {
  return (
    <div className="consultation-flight" data-state={status} aria-hidden="true">
      <div className="flight-labels">
        <span>{copy.origin}</span>
        <span>
          {status === "success"
            ? copy.delivered
            : status === "error"
              ? copy.failed
              : copy.destination}
        </span>
      </div>
      <div className="flight-route">
        <span className="flight-origin" />
        <span className="flight-route-line" />
        <span className="flight-route-progress" />
        <span className="flight-destination">
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m3 8 3 3 7-7" />
          </svg>
        </span>
        <span className="flight-plane">
          <PaperPlane />
        </span>
      </div>
    </div>
  );
}
