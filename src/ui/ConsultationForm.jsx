import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { postJSON } from "../lib/api";
import Icon from "./Icon";
export default function ConsultationForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");
  const busy = useRef(false);
  async function submit(e) {
    e.preventDefault();
    if (busy.current) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    busy.current = true;
    setStatus("loading");
    try {
      await postJSON("/api/", data);
      setStatus("success");
      form.reset();
    } catch {
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
          onSubmit={submit}
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
                  {key !== "email" && <span aria-hidden="true"> *</span>}
                </label>
                <input
                  id={`consultation-${key}`}
                  name={key}
                  type={
                    key === "phone" ? "tel" : key === "email" ? "email" : "text"
                  }
                  autoComplete={key === "phone" ? "tel" : key}
                  required={key !== "email"}
                  placeholder={t(`home.form.${key}Placeholder`)}
                  maxLength={key === "name" ? 150 : key === "phone" ? 40 : 254}
                  disabled={status === "loading"}
                />
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
                disabled={status === "loading"}
              />
            </div>
          </div>
          <button
            className="button form-submit"
            disabled={status === "loading"}
          >
            {status === "loading" && <span className="spinner" />}
            {t("home.form.send")}
            <Icon name="northeast" size={20} />
          </button>
          <div aria-live="polite">
            {["success", "error"].includes(status) && (
              <p
                className={`form-feedback ${status}`}
                role={status === "error" ? "alert" : "status"}
              >
                {t(`home.form.${status}`)}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
