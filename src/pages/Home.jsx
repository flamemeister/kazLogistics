import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Photo from "../ui/Photo";
import Icon from "../ui/Icon";
import { ButtonLink, ServiceCards } from "../ui/Sections";
import ConsultationForm from "../ui/ConsultationForm";
import Chat from "../ui/Chat";
import HeroScene from "../ui/HeroScene";
import GeographySection from "../maps/GeographySection";
import JourneyStory from "../experience/JourneyStory";
import ContainerShowcase from "../experience/ContainerShowcase";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <section className="home-hero">
        <HeroScene />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            Great Steppe Logistics
            <span className="hero-line" />
          </div>
          <h1>{t("home.bannerHeading")}</h1>
          <div className="hero-bottom">
            <p>{t("home.bannerSubheading")}</p>
            <div className="hero-buttons">
              <ButtonLink light>{t("home.consultation.title")}</ButtonLink>
              <Link className="text-link" to="/services">
                {t("nav.services")}
                <Icon name="arrow" size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <span>GREAT STEPPE LOGISTICS</span>
            <a href="#directions" aria-label={t("nav.services")}>
              <Icon name="arrow" className="rotate-down" size={18} />
            </a>
            <span>ALMATY, KAZAKHSTAN</span>
          </div>
        </div>
      </section>
      <section className="section directions" id="directions">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Great Steppe Logistics</span>
              <h2>{t("services.title")}</h2>
            </div>
            <Link className="text-link dark" to="/services">
              {t("nav.services")}
              <Icon name="northeast" size={21} />
            </Link>
          </div>
          <ServiceCards compact />
        </div>
      </section>
      <JourneyStory />
      <ContainerShowcase />
      <section className="home-about section">
        <div className="container about-layout">
          <div className="about-photo">
            <Photo name="container" />
            <div className="photo-caption">
              <Icon name="globe" size={32} />
              <span>
                Great Steppe
                <br />
                Logistics
              </span>
            </div>
          </div>
          <div className="about-summary">
            <span className="eyebrow">{t("nav.about")}</span>
            <h2>{t("about.company.heading")}</h2>
            <p>
              {t("about.company.text1")}
              <strong>Great Steppe Logistics</strong>
              {t("about.company.text2")}
            </p>
            <ButtonLink to="/about">{t("nav.about")}</ButtonLink>
          </div>
        </div>
      </section>
      <GeographySection />
      <ConsultationForm />
      <Chat />
    </>
  );
}
