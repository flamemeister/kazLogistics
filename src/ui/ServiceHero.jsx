import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { serviceVideos } from "../data/serviceVideos";
import Icon from "./Icon";
import VideoScene from "./VideoScene";
import "../styles/service-hero.css";

export default function ServiceHero({ service }) {
  const { t } = useTranslation();
  return (
    <section className="service-hero" data-service={service.slug}>
      <VideoScene
        key={service.slug}
        asset={serviceVideos[service.slug]}
        className="service-video"
      />
      <div className="service-hero-shade" aria-hidden="true" />
      <div className="container service-hero-content">
        <nav className="breadcrumb" aria-label={t("nav.services")}>
          <Link to="/">{t("nav.home")}</Link>
          <span aria-hidden="true">/</span>
          <Link to="/services">{t("nav.services")}</Link>
        </nav>
        <div className="service-hero-layout">
          <div className="service-hero-copy">
            <div className="service-hero-kicker">
              <span className="eyebrow">Great Steppe Logistics</span>
            </div>
            <h1>{t(`${service.key}.title`)}</h1>
            <Link className="service-hero-cta" to="/#consultation-form">
              {t("home.consultation.title")}
              <Icon name="northeast" size={20} />
            </Link>
          </div>
        </div>
        <div className="service-hero-footer" aria-hidden="true">
          <span>GREAT STEPPE LOGISTICS</span>
          <span className="service-hero-rule" />
          <Icon name={service.icon} size={20} />
        </div>
      </div>
    </section>
  );
}
