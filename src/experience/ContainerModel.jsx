import "./experience.css";

export default function ContainerModel({ open = false }) {
  return (
    <div className="freight-model" data-open={open} aria-hidden="true">
      <div className="freight-face freight-front">
        <img
          src="/media/logo-white.webp"
          alt=""
          width="640"
          height="166"
          loading="lazy"
        />
        <span className="freight-code">GSLU · 2026</span>
      </div>
      <div className="freight-face freight-back">
        <img
          src="/media/logo-white.webp"
          alt=""
          width="640"
          height="166"
          loading="lazy"
        />
      </div>
      <div className="freight-face freight-top" />
      <div className="freight-face freight-bottom" />
      <div className="freight-face freight-left" />
      <div className="freight-face freight-right">
        <div className="freight-interior" />
        <div className="freight-door freight-door-a">
          <i />
          <i />
          <span>GSL</span>
        </div>
        <div className="freight-door freight-door-b">
          <i />
          <i />
          <span>2026</span>
        </div>
      </div>
      <div className="freight-corner c1" />
      <div className="freight-corner c2" />
      <div className="freight-corner c3" />
      <div className="freight-corner c4" />
    </div>
  );
}
