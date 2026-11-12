import { useTranslation } from "react-i18next";
import { PageHeading } from "../ui/Sections";
import ConsultationForm from "../ui/ConsultationForm";
import Icon from "../ui/Icon";
export default function Contacts() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeading title={t("contacts.title")} />
      <section className="section">
        <div className="container contacts-layout">
          <div className="contact-details">
            <div>
              <Icon name="pin" size={28} />
              <p>
                {t("contacts.address")}
                <small>{t("contacts.postal")}</small>
              </p>
            </div>
            <a href="tel:+77273440040">
              <Icon name="phone" size={28} />
              <span>{t("contacts.phone")}</span>
              <Icon name="northeast" size={18} />
            </a>
            <a href="mailto:info@gslog.kz">
              <Icon name="mail" size={28} />
              <span>{t("contacts.email")}</span>
              <Icon name="northeast" size={18} />
            </a>
          </div>
          <iframe
            className="map"
            src="https://www.google.com/maps?q=43.25156659873732,76.93376998601416&z=17&output=embed"
            title={t("contacts.mapTitle")}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <ConsultationForm />
    </>
  );
}
