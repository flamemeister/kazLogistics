import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Map, Marker, NavigationControl } from "./engine";
import useMapDialog from "./useMapDialog";
import { OFFICE, DIRECTIONS_URL } from "./geography";
import { getMapCopy, controlLocale } from "./copy";
import Icon from "../ui/Icon";

export default function OfficeMap() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || "kk";
  const copy = getMapCopy(language),
    panel = useRef(null),
    canvas = useRef(null),
    instance = useRef(null);
  const [status, setStatus] = useState("loading"),
    [attempt, setAttempt] = useState(0),
    [expanded, setExpanded] = useState(false);
  const resizeMap = useCallback(() => instance.current?.resize(), []);
  useMapDialog(panel, resizeMap, expanded);
  useEffect(() => {
    let map;
    const local = getMapCopy(language);
    setStatus("loading");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    try {
      map = new Map({
        container: canvas.current,
        style: "/maps/office-style.json",
        center: OFFICE,
        zoom: 14.8,
        pitch: 18,
        bearing: -12,
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
      map.getCanvas().setAttribute("aria-label", local.office);
      map.addControl(
        new NavigationControl({ showCompass: false }),
        "top-right",
      );
      const pin = document.createElement("div");
      pin.className = "office-pin";
      pin.setAttribute("aria-hidden", "true");
      const dot = document.createElement("span");
      pin.append(dot);
      new Marker({ element: pin, anchor: "center" })
        .setLngLat(OFFICE)
        .addTo(map);
      map.once("load", () => {
        setStatus("ready");
        map.easeTo({
          center: OFFICE,
          zoom: 16.05,
          pitch: 32,
          bearing: -12,
          padding: { top: 30, bottom: 140, left: 20, right: 20 },
          duration: reduced ? 0 : 1700,
        });
        for (const layer of map.getStyle().layers) {
          if (
            layer.type === "symbol" &&
            layer.layout?.["text-field"] &&
            !layer.id.includes("shield")
          )
            map.setLayoutProperty(layer.id, "text-field", [
              "coalesce",
              ["get", `name:${language}`],
              ["get", "name"],
              ["get", "name:latin"],
            ]);
        }
      });
      map.on("error", () => {
        if (!map.isStyleLoaded()) setStatus("error");
      });
    } catch {
      setStatus("error");
    }
    const deadline = setTimeout(() => {
      if (!map?.isStyleLoaded()) setStatus("error");
    }, 18000);
    return () => {
      clearTimeout(deadline);
      instance.current = null;
      map?.remove();
    };
  }, [language, attempt]);
  function recenter() {
    instance.current?.easeTo({
      center: OFFICE,
      zoom: 16.05,
      pitch: 32,
      bearing: -12,
      padding: { top: 30, bottom: 140, left: 20, right: 20 },
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 900,
    });
  }
  return (
    <dialog
      open
      className="office-map-panel map-panel-dialog"
      ref={panel}
      data-map-state={status}
      data-expanded={expanded}
      role={expanded ? "dialog" : "region"}
      aria-label={copy.office}
      aria-modal={expanded || undefined}
      onCancel={(e) => {
        e.preventDefault();
        setExpanded(false);
      }}
    >
      <div className="office-map-canvas" ref={canvas} />
      {status !== "ready" && (
        <div className="office-map-status" role="status">
          {status === "loading" ? (
            <>
              <span className="spinner" />
              {copy.loading}
            </>
          ) : (
            <>
              <span>{copy.unavailable}</span>
              <button onClick={() => setAttempt((v) => v + 1)}>
                {copy.retry}
              </button>
            </>
          )}
        </div>
      )}
      <button
        className="map-recenter"
        onClick={recenter}
        aria-label={copy.recenter}
      >
        <Icon name="pin" size={17} />
        {copy.recenter}
      </button>
      <button
        className="map-expand-toggle"
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? copy.exitFullscreen : copy.fullscreen}
        aria-expanded={expanded}
      >
        <Icon name={expanded ? "close" : "expand"} size={19} />
      </button>
      <div className="office-map-card">
        <div className="office-map-card-heading">
          <span className="status-dot" />
          <strong>Great Steppe Logistics</strong>
          <span>{copy.almaty}</span>
        </div>
        <p>{t("contacts.address")}</p>
        <a
          className="map-route-link"
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
        >
          {copy.directions}
          <Icon name="northeast" size={16} />
        </a>
      </div>
    </dialog>
  );
}
