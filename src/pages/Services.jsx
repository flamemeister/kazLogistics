import { useTranslation } from "react-i18next";
import { PageHeading, ServiceCards, ConsultationCTA } from "../ui/Sections";
export default function Services() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeading title={t("services.title")} />
      <section className="section">
        <div className="container">
          <ServiceCards />
        </div>
      </section>
      <section className="section soft">
        <div className="container editorial">
          <div>
            <span className="eyebrow">Great Steppe Logistics</span>
            <h2>{t("services.welcomeTitle")}</h2>
          </div>
          <div className="prose">
            <p>{t("services.intro")}</p>
            {["rail", "road", "multimodal", "air", "project", "oversize"].map(
              (k) => (
                <div key={k}>
                  <h3>{t(`services.${k}.label`)}</h3>
                  <p>{t(`services.${k}.description`)}</p>
                </div>
              ),
            )}
            <p>{t("services.outro")}</p>
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
