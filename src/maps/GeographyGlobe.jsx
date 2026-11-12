import { useEffect, useRef, useState, useCallback } from "react";
import { Map, Marker, NavigationControl } from "./engine";
import useMapDialog from "./useMapDialog";
import { OFFICE, REGIONS, movingPoints, fitGlobeZoom } from "./geography";
import { globeStyle } from "./globeStyle";
import { getMapCopy, controlLocale } from "./copy";
import useMapActivity from "./useMapActivity";
import Icon from "../ui/Icon";

export default function GeographyGlobe({ selected, onSelect, language }) {
  const canvas = useRef(null),
    panel = useRef(null),
    instance = useRef(null),
    styleReady = useRef(false);
  const [ready, setReady] = useState(false),
    [failed, setFailed] = useState(false),
    [expanded, setExpanded] = useState(false);
  const resizeMap = useCallback(() => instance.current?.resize(), []);
  useMapDialog(panel, resizeMap, expanded);
  const { active, reduced } = useMapActivity(panel);
  const copy = getMapCopy(language);
  useEffect(() => {
    let map;
    styleReady.current = false;
    setReady(false);
    setFailed(false);
    const local = getMapCopy(language);
    try {
      map = new Map({
        container: canvas.current,
        style: globeStyle(),
        center: [55, 34],
        zoom: fitGlobeZoom(
          panel.current.clientWidth,
          panel.current.clientHeight,
        ),
        minZoom: 0.2,
        maxZoom: 3,
        pitch: 0,
        scrollZoom: false,
        cooperativeGestures: true,
        attributionControl: { compact: true },
        locale: controlLocale(local),
        canvasContextAttributes: {
          antialias: true,
          powerPreference: "low-power",
        },
      });
      instance.current = map;
      map.on("resize", () => {
        const zoom = fitGlobeZoom(
          panel.current.clientWidth,
          panel.current.clientHeight,
        );
        if (Math.abs(map.getZoom() - zoom) > 0.02) map.setZoom(zoom);
      });
      map.getCanvas().setAttribute("aria-label", local.geography);
      map.addControl(
        new NavigationControl({ showCompass: false }),
        "top-right",
      );
      const pin = document.createElement("div");
      pin.className = "globe-office-pin";
      const label = document.createElement("span");
      label.className = "globe-office-label";
      label.textContent = local.almaty;
      pin.append(label);
      new Marker({ element: pin, anchor: "center" })
        .setLngLat(OFFICE)
        .addTo(map);
      map.once("load", () => {
        styleReady.current = true;
        setReady(true);
      });
      map.on("error", () => {
        if (!map.isStyleLoaded()) setFailed(true);
      });
      map.on("click", "region-points", (e) => {
        const id = e.features?.[0]?.properties?.id;
        if (id) onSelect(id);
      });
      map.on("mouseenter", "region-points", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "region-points", () => {
        map.getCanvas().style.cursor = "";
      });
    } catch {
      setFailed(true);
    }
    return () => {
      styleReady.current = false;
      instance.current = null;
      map?.remove();
    };
  }, [language, onSelect]);
  useEffect(() => {
    const map = instance.current;
    if (!ready || !map || !styleReady.current) return;
    map.setFilter("route-active", ["==", "id", selected]);
    const region = REGIONS.find((item) => item.id === selected);
    if (region)
      map.easeTo({
        center: [
          (region.center[0] + OFFICE[0]) / 2,
          (region.center[1] + OFFICE[1]) / 2 - 8,
        ],
        duration: reduced ? 0 : 1000,
      });
  }, [selected, ready, reduced]);
  useEffect(() => {
    const map = instance.current;
    if (!map || !ready || !styleReady.current || !active || reduced) return;
    let frame,
      last = 0;
    function animate(time) {
      if (time - last > 100) {
        map
          .getSource("flow")
          ?.setData(movingPoints((time % 16000) / 16000, selected));
        last = time;
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [ready, active, reduced, selected]);
  function reset() {
    instance.current?.easeTo({
      center: [55, 34],
      zoom: fitGlobeZoom(panel.current.clientWidth, panel.current.clientHeight),
      bearing: 0,
      duration: reduced ? 0 : 1000,
    });
  }
  return (
    <dialog
      open
      className="globe-panel map-panel-dialog"
      ref={panel}
      data-map-state={failed ? "error" : ready ? "ready" : "loading"}
      data-expanded={expanded}
      role={expanded ? "dialog" : "region"}
      aria-label={copy.geography}
      aria-modal={expanded || undefined}
      onCancel={(e) => {
        e.preventDefault();
        setExpanded(false);
      }}
    >
      <div className="globe-canvas" ref={canvas} />
      <button
        className="map-expand-toggle"
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? copy.exitFullscreen : copy.fullscreen}
        aria-expanded={expanded}
      >
        <Icon name={expanded ? "close" : "expand"} size={18} />
      </button>
      {!ready && (
        <div className="map-loading" role="status">
          {failed ? (
            copy.unavailable
          ) : (
            <>
              <span className="spinner" />
              {copy.loading}
            </>
          )}
        </div>
      )}
      <div className="globe-controls">
        <button onClick={reset} aria-label={copy.reset}>
          <Icon name="globe" size={18} />
        </button>
      </div>
      <div className="globe-office-caption">
        <span className="status-dot" />
        <div>
          <strong>
            {copy.almaty}, {copy.kazakhstan}
          </strong>
          <small>43°15′ N · 76°56′ E</small>
        </div>
      </div>
    </dialog>
  );
}
