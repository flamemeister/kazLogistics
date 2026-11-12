import { lazy, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { REGIONS } from "./geography";
import { getMapCopy } from "./copy";
import MapSlot from "./MapSlot";
import Icon from "../ui/Icon";
const GeographyGlobe = lazy(() => import("./GeographyGlobe"));
export default function GeographySection() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || "kk";
  const copy = getMapCopy(language),
    [selected, setSelected] = useState("china");
  return (
    <section className="geography-section" id="geography">
      <div className="container geography-layout">
        <div className="geography-copy">
          <span className="eyebrow">Great Steppe Logistics</span>
          <h2>{copy.geography}</h2>
          <p>{copy.overview}</p>
          <div
            className="geography-regions"
            role="group"
            aria-label={copy.geography}
          >
            {REGIONS.map((region, i) => (
              <button
                key={region.id}
                onClick={() => setSelected(region.id)}
                aria-pressed={selected === region.id}
              >
                <span>0{i + 1}</span>
                <strong>{copy.regions[i]}</strong>
                <Icon name="northeast" size={17} />
              </button>
            ))}
          </div>
          <p className="geography-note">{copy.schematic}</p>
          <Link className="text-link" to="/contacts">
            {t("nav.contacts")}
            <Icon name="northeast" size={19} />
          </Link>
        </div>
        <div className="geography-visual">
          <MapSlot className="globe-slot">
            <GeographyGlobe
              language={language}
              selected={selected}
              onSelect={setSelected}
            />
          </MapSlot>
          <p className="globe-hint">{copy.drag}</p>
        </div>
      </div>
    </section>
  );
}
