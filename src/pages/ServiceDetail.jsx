import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services, stages } from "../data/services";
import { ConsultationCTA } from "../ui/Sections";
import ServiceHero from "../ui/ServiceHero";
import Icon from "../ui/Icon";
import NotFound from "./NotFound";

function Paragraph({ value }) {
  if (/^\s*-|\n\s*-/.test(value)) {
    const items = value.split(/(?:^|\s)-\s*/).filter((item) => item.trim());
    return (
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.trim()}</li>
        ))}
      </ul>
    );
  }
  return <p>{value}</p>;
}

function TextBlock({ block }) {
  if (!block) return null;
  return (
    <div className="text-block">
      {block.heading && <h3>{block.heading}</h3>}
      {Object.entries(block)
        .filter(([key]) => key !== "heading")
        .map(([key, value]) =>
          Array.isArray(value) ? (
            <ul key={key}>
              {value.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : typeof value === "string" ? (
            <Paragraph key={key} value={value} />
          ) : (
            <TextBlock key={key} block={value} />
          ),
        )}
    </div>
  );
}
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const { t } = useTranslation();
  if (!service) return <NotFound />;
  const k = service.key;
  const text = t(`${k}.text`, { returnObjects: true, defaultValue: {} });
  return (
    <>
      <ServiceHero service={service} />
      <div className="container service-breadcrumb">
        <Link to="/services">{t(`${k}.breadcrumb.services`)}</Link>
        <span>/</span>
        <span>{t(`${k}.breadcrumb.current`)}</span>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>{t(`${k}.services.heading`)}</h2>
            <span className="section-count">01 / 03</span>
          </div>
          <div className="offering-grid">
            {Array.from({ length: service.count }, (_, i) => i + 1).map(
              (id) => (
                <div className="offering" key={id}>
                  <span>{t(`${k}.services.items.${id}.prefix`)}</span>
                  <p>{t(`${k}.services.items.${id}.title`)}</p>
                  <Icon name="northeast" size={18} />
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <div className="section-heading">
            <h2>{t(`${k}.advantages.heading`)}</h2>
            <span className="section-count">02 / 03</span>
          </div>
          <div className="advantages">
            {service.advantages.map((key, i) => (
              <article key={key}>
                <div className="advantage-icon">
                  <Icon
                    name={
                      ["shield", "globe", "box", "truck", "check", "rail"][
                        i % 6
                      ]
                    }
                    size={27}
                  />
                </div>
                <h3>{t(`${k}.advantages.items.${key}.title`)}</h3>
                <p>{t(`${k}.advantages.items.${key}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {k !== "containerDepot" && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>{t(`${k}.stages.heading`)}</h2>
              <span className="section-count">03 / 03</span>
            </div>
            <ol className="stages">
              {stages.map((key, i) => (
                <li key={key}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{t(`${k}.stages.items.${k === "auto" ? i + 1 : key}`)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
      <section className="section service-text">
        <div className="container editorial">
          <div className="editorial-aside">
            <Icon name={service.icon} size={44} />
            <h2>{t(`${k}.title`)}</h2>
            <Link className="text-link dark" to="/#consultation-form">
              {t("home.consultation.title")}
              <Icon name="northeast" size={20} />
            </Link>
          </div>
          <div className="prose">
            {service.details ? (
              Array.from({ length: service.details }, (_, i) => i + 1).map(
                (id) => (
                  <TextBlock
                    key={id}
                    block={t(`${k}.details.${id}`, { returnObjects: true })}
                  />
                ),
              )
            ) : (
              <TextBlock block={text} />
            )}
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
