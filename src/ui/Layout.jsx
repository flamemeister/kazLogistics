import { useEffect, useState, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import Modal from "./Modal";
import { services } from "../data/services";
import useReveal from "../lib/useReveal";
const languages = { kk: "Қаз", ru: "Рус", en: "Eng", zh: "中文" };
const links = [
  ["/", "home"],
  ["/services", "services"],
  ["/about", "about"],
  ["/contacts", "contacts"],
];

function Header() {
  const { t, i18n } = useTranslation();
  const [mobile, setMobile] = useState(false);
  const [language, setLanguage] = useState(false);
  const languageRoot = useRef(null);
  const menuButton = useRef(null);
  const lang = i18n.resolvedLanguage || "kk";
  useEffect(() => {
    const dismiss = (e) => {
      if (!languageRoot.current?.contains(e.target)) setLanguage(false);
    };
    const escape = (e) => {
      if (e.key === "Escape") {
        setLanguage(false);
        setMobile(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span>Great Steppe Logistics</span>
          <div>
            <a href="tel:+77027714828">
              <Icon name="phone" size={14} />
              +7 (702) 771 48 28
            </a>
            <a href="mailto:info@gslog.kz">
              <Icon name="mail" size={14} />
              info@gslog.kz
            </a>
          </div>
        </div>
      </div>
      <div className="container navigation">
        <Link className="brand" to="/" aria-label="Great Steppe Logistics">
          <img
            src="/media/brand/gslog-header-2026.webp"
            width="190"
            height="63"
            alt="Great Steppe Logistics"
          />
        </Link>
        <nav className="desktop-nav" aria-label={t("nav.home")}>
          {links.map(([url, key]) => (
            <NavLink key={url} to={url} end={url === "/"}>
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="language" ref={languageRoot}>
            <button
              className="language-trigger"
              aria-haspopup="true"
              aria-expanded={language}
              aria-controls="language-options"
              onClick={() => setLanguage((v) => !v)}
            >
              <img
                className="language-flag"
                src={`/media/flags/${lang}.png`}
                alt=""
                width="24"
                height="16"
              />
              {languages[lang]}
              <Icon name="chevron" size={13} />
            </button>
            {language && (
              <div id="language-options" className="language-options">
                {Object.entries(languages).map(([code, label]) => (
                  <button
                    key={code}
                    lang={code}
                    aria-pressed={code === lang}
                    onClick={() => {
                      i18n.changeLanguage(code);
                      setLanguage(false);
                    }}
                  >
                    <span className="language-option-label">
                      <img
                        className="language-flag"
                        src={`/media/flags/${code}.png`}
                        alt=""
                        width="24"
                        height="16"
                      />
                      {label}
                    </span>
                    {code === lang && <Icon name="check" size={15} />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/#consultation-form"
            className="header-cta"
            aria-label={t("home.consultation.title")}
          >
            <Icon name="northeast" />
          </Link>
          <button
            ref={menuButton}
            className="icon-button mobile-toggle"
            onClick={() => setMobile((v) => !v)}
            aria-label={t("nav.services")}
            aria-expanded={mobile}
            aria-controls="mobile-navigation"
          >
            <Icon name={mobile ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {mobile && (
        <nav
          className="mobile-navigation container"
          id="mobile-navigation"
          aria-label={t("nav.services")}
        >
          {links.map(([url, key], i) => (
            <NavLink key={url} to={url} onClick={() => setMobile(false)}>
              <span>0{i + 1}</span>
              {t(`nav.${key}`)}
              <Icon name="northeast" size={20} />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
function Footer() {
  const { t } = useTranslation();
  const [wechat, setWechat] = useState(false);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/">
                <img
                  src="/media/brand/gslog-header-2026.webp"
                  alt="Great Steppe Logistics"
                  width="235"
                  height="78"
                  loading="lazy"
                />
              </Link>
              <p>{t("contacts.address")}</p>
            </div>
            <div>
              <span className="eyebrow">{t("nav.services")}</span>
              <div className="footer-links">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`}>
                    {t(`${s.key}.title`)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-contact">
              <span className="eyebrow">{t("nav.contacts")}</span>
              <a href="tel:+77027714828" className="footer-phone">
                +7 (702) 771 48 28
              </a>
              <a href="mailto:info@gslog.kz">info@gslog.kz</a>
              <div className="social-links">
                <a
                  href="https://wa.me/77027714828"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp <Icon name="northeast" size={14} />
                </a>
                <button onClick={() => setWechat(true)}>
                  WeChat <Icon name="northeast" size={14} />
                </button>
                <a
                  href="https://www.linkedin.com/company/great-steppe-logistics-llp/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Icon name="northeast" size={14} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Great Steppe Logistics</span>
            <div>
              <Link to="/about">{t("nav.about")}</Link>
              <Link to="/contacts">{t("nav.contacts")}</Link>
            </div>
          </div>
        </div>
      </footer>
      {wechat && (
        <Modal
          title="WeChat"
          closeLabel={t("home.notification.close")}
          onClose={() => setWechat(false)}
        >
          <img className="qr" src="/media/wechat.webp" alt="WeChat QR" />
        </Modal>
      )}
    </>
  );
}
export default function Layout() {
  const location = useLocation();
  const { t } = useTranslation();
  useReveal(location.pathname);
  useEffect(() => {
    if (location.hash)
      requestAnimationFrame(() =>
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return (
    <>
      <a className="skip-link" href="#main">
        {t("nav.home")}
      </a>
      <Header />
      <main id="main" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
