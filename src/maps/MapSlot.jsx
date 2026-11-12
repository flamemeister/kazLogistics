import { Component, Suspense, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getMapCopy } from "./copy";
import "../styles/maps.css";
class MapBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
export default function MapSlot({ children, className = "" }) {
  const ref = useRef(null),
    [near, setNear] = useState(false);
  const { i18n } = useTranslation();
  const copy = getMapCopy(i18n.resolvedLanguage);
  useEffect(() => {
    if (!window.IntersectionObserver) {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const loading = (
    <div className="map-loading" role="status">
      <span className="spinner" />
      {copy.loading}
    </div>
  );
  return (
    <div className={`map-slot ${className}`} ref={ref}>
      <MapBoundary
        fallback={<div className="map-loading">{copy.unavailable}</div>}
      >
        {near ? <Suspense fallback={loading}>{children}</Suspense> : loading}
      </MapBoundary>
    </div>
  );
}
