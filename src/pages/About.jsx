import { useTranslation } from "react-i18next";
import { PageHeading, ConsultationCTA } from "../ui/Sections";
import Photo from "../ui/Photo";
import Icon from "../ui/Icon";
export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeading title={t("about.title")} />
      <section className="section">
        <div className="container about-layout">
          <div className="about-summary">
            <span className="eyebrow">Great Steppe Logistics</span>
            <h2>{t("about.company.heading")}</h2>
            <p>
              {t("about.company.text1")}
              <strong>Great Steppe Logistics</strong>
              {t("about.company.text2")}
            </p>
          </div>
          <div className="about-photo">
            <Photo name="auto" />
          </div>
        </div>
      </section>
      <section className="section mission-section">
        <div className="container editorial">
          <h2>{t("about.mission.heading")}</h2>
          <p>{t("about.mission.text")}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>{t("about.principles.heading")}</h2>
          </div>
          <p className="principles-intro">{t("about.principles.text")}</p>
          <div className="principles">
            {["trust", "responsibility", "individual"].map((k, i) => (
              <article key={k}>
                <Icon name={["shield", "check", "globe"][i]} size={36} />
                <h3>{t(`about.principles.items.${k}.title`)}</h3>
                <p>{t(`about.principles.items.${k}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container editorial">
          <h2>{t("about.closing.heading")}</h2>
          <div className="prose">
            <p>{t("about.closing.text1")}</p>
            <p>{t("about.closing.text2")}</p>
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
