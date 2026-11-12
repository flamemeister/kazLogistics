import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { postJSON } from "../lib/api";
import Icon from "./Icon";
import DeliveryFlight from "../consultation/DeliveryFlight";
import { consultationCopy } from "../consultation/copy";
import { prepareConsultation } from "../consultation/contract";
export default function ConsultationForm() {
  const { t, i18n } = useTranslation();
  const copy = consultationCopy[i18n.resolvedLanguage] || consultationCopy.kk;
  const [status, setStatus] = useState("idle");
  const [fieldErrors, setFieldErrors] = useState([]);
  const [flightVisible, setFlightVisible] = useState(false);
  const closeFlight = useCallback(() => setFlightVisible(false), []);
  const busy = useRef(false);
  async function submit(e) {
    e.preventDefault();
    if (busy.current) return;
    const form = e.currentTarget;
    const { data, invalid } = prepareConsultation(
      Object.fromEntries(new FormData(form)),
    );
    if (invalid.length) {
      setFieldErrors(invalid);
      setStatus("error");
      form.elements.namedItem(invalid[0])?.focus();
      return;
    }
    busy.current = true;
    setFieldErrors([]);
    setStatus("loading");
    setFlightVisible(true);
    try {
      await postJSON("/api/", data);
      setStatus("success");
      form.reset();
    } catch (error) {
      const fields =
        error.status === 400 &&
        error.details &&
        typeof error.details === "object"
          ? Object.keys(error.details).filter((key) =>
              ["name", "phone", "email", "comment"].includes(key),
            )
          : [];
      setFieldErrors(fields);
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }
  return (
    <section className="form-section section" id="consultation-form">
      <div className="container form-layout">
        <div className="form-intro">
          <span className="eyebrow">{t("nav.contacts")}</span>
          <h2>{t("home.consultation.title")}</h2>
          <p>{t("home.consultation.description")}</p>
          <a href="tel:+77027714828" className="contact-line">
            <span className="contact-icon">
              <Icon name="phone" />
            </span>
            <span>+7 (702) 771 48 28</span>
            <Icon name="northeast" size={18} />
          </a>
          <a href="mailto:info@gslog.kz" className="contact-line">
            <span className="contact-icon">
              <Icon name="mail" />
            </span>
            <span>info@gslog.kz</span>
            <Icon name="northeast" size={18} />
          </a>
        </div>
        <form
          className="consultation-form"
          tabIndex={-1}
          onSubmit={submit}
          onChange={(e) => {
            setFieldErrors((fields) =>
              fields.filter((key) => key !== e.target.name),
            );
            if (status !== "loading") setStatus("idle");
          }}
          aria-busy={status === "loading"}
        >
          <div className="form-grid">
            {["name", "phone", "email"].map((key) => (
              <div
                className={`field ${key === "name" ? "field-full" : ""}`}
                key={key}
              >
                <label htmlFor={`consultation-${key}`}>
                  {t(`home.form.${key}`)}
                  <span aria-hidden="true"> *</span>
                </label>
                <input
                  id={`consultation-${key}`}
                  name={key}
                  type={
                    key === "phone" ? "tel" : key === "email" ? "email" : "text"
                  }
                  autoComplete={key === "phone" ? "tel" : key}
                  required
                  placeholder={t(`home.form.${key}Placeholder`)}
                  maxLength={key === "name" ? 100 : key === "phone" ? 40 : 254}
                  aria-invalid={fieldErrors.includes(key)}
                  aria-describedby={
                    fieldErrors.includes(key)
                      ? `consultation-${key}-error`
                      : undefined
                  }
                  disabled={status === "loading"}
                />
                {fieldErrors.includes(key) && (
                  <p className="field-error" id={`consultation-${key}-error`}>
                    {key === "phone" ? copy.phone : copy.invalid}
                  </p>
                )}
              </div>
            ))}
            <div className="field field-full">
              <label htmlFor="consultation-comment">
                {t("home.form.comment")}
              </label>
              <textarea
                id="consultation-comment"
                name="comment"
                rows="4"
                placeholder={t("home.form.commentPlaceholder")}
                maxLength={5000}
                aria-invalid={fieldErrors.includes("comment")}
                aria-describedby={
                  fieldErrors.includes("comment")
                    ? "consultation-comment-error"
                    : undefined
                }
                disabled={status === "loading"}
              />
              {fieldErrors.includes("comment") && (
                <p className="field-error" id="consultation-comment-error">
                  {copy.invalid}
                </p>
              )}
            </div>
          </div>
          <button
            className="button form-submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? copy.sending : t("home.form.send")}
            <Icon name="northeast" size={20} />
          </button>
          <div aria-live="polite">
            {["loading", "success", "error"].includes(status) && (
              <p
                className={`form-feedback ${status}`}
                role={status === "error" ? "alert" : "status"}
              >
                {status === "loading"
                  ? copy.sending
                  : status === "error" && fieldErrors.length
                    ? copy.check
                    : t(`home.form.${status}`)}
              </p>
            )}
          </div>
        </form>
        {flightVisible && (
          <DeliveryFlight
            status={status}
            copy={copy}
            message={
              status === "error" && fieldErrors.length
                ? copy.check
                : t(`home.form.${status}`)
            }
            onClose={closeFlight}
          />
        )}
      </div>
    </section>
  );
}
