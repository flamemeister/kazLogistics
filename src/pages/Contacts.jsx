import { useTranslation } from "react-i18next";
import { PageHeading } from "../ui/Sections";
import ConsultationForm from "../ui/ConsultationForm";
import Icon from "../ui/Icon";
import { lazy } from "react";
import MapSlot from "../maps/MapSlot";
const OfficeMap = lazy(() => import("../maps/OfficeMap"));
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
          <MapSlot className="office-map-slot">
            <OfficeMap />
          </MapSlot>
        </div>
      </section>
      <ConsultationForm />
    </>
  );
}
