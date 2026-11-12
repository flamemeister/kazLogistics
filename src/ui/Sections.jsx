import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import Photo from "./Photo";
import { services } from "../data/services";

export function ButtonLink({
  children,
  to = "/#consultation-form",
  light = false,
}) {
  return (
    <Link className={`button ${light ? "button-light" : ""}`} to={to}>
      {children}
      <Icon name="northeast" size={20} />
    </Link>
  );
}
export function PageHeading({ title, subtitle, image, label }) {
  const { t } = useTranslation();
  return (
    <section className={`page-heading ${image ? "has-photo" : ""}`}>
      {image && <Photo name={image} className="page-heading-photo" priority />}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">{t("nav.home")}</Link>
          <span>/</span>
          <span>{label || title}</span>
        </div>
        <div className="page-heading-content">
          <span className="eyebrow">Great Steppe Logistics</span>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
export function ServiceCards({ compact = false }) {
  const { t, i18n } = useTranslation();
  const language = (i18n.resolvedLanguage || "kk").split("-")[0];
  return (
    <div className={`service-grid ${compact ? "compact" : ""}`}>
      {services.map((s) => (
        <Link className="service-card" to={`/services/${s.slug}`} key={s.slug}>
          <div className="service-card-media">
            <img
              src={`/media/cards/${s.slug}-${language}.jpg`}
              alt=""
              width="1280"
              height="1280"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="service-card-caption">
            <span className="service-card-number">0{s.id}</span>
            <h3>{t(`${s.key}.title`)}</h3>
            <span className="service-card-arrow">
              <Icon name="northeast" size={22} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function ConsultationCTA() {
  const { t } = useTranslation();
  return (
    <section className="consultation-cta">
      <div className="container">
        <div>
          <span className="eyebrow">Great Steppe Logistics</span>
          <h2>{t("home.consultation.title")}</h2>
          <p>{t("home.consultation.description")}</p>
        </div>
        <ButtonLink light>{t("home.form.send")}</ButtonLink>
      </div>
    </section>
  );
}
