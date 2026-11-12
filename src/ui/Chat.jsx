import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { postJSON } from "../lib/api";
import Icon from "./Icon";
export default function Chat() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const lock = useRef(false);
  const feed = useRef(null);
  const controller = useRef(null);
  const field = useRef(null);
  const trigger = useRef(null);
  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => {
    if (open) {
      field.current?.focus();
      feed.current?.scrollTo({
        top: feed.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [open, messages, busy]);
  async function send(e) {
    e.preventDefault();
    const message = input.trim();
    if (!message || lock.current) return;
    lock.current = true;
    setBusy(true);
    setInput("");
    setMessages((v) => [
      ...v,
      { id: crypto.randomUUID(), type: "user", text: message },
    ]);
    controller.current = new AbortController();
    try {
      const data = await postJSON(
        "/chat/chat/",
        { message },
        { signal: controller.current.signal },
      );
      if (!data.response) throw new Error("Missing response");
      setMessages((v) => [
        ...v,
        { id: crypto.randomUUID(), type: "bot", text: data.response },
      ]);
    } catch (error) {
      if (error.name !== "AbortError")
        setMessages((v) => [...v, { id: crypto.randomUUID(), type: "error" }]);
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <div
      className="chat-widget"
      onKeyDown={(e) => {
        if (e.key === "Escape") close();
      }}
    >
      {open && (
        <section className="chat-panel" aria-label={t("home.chat.header")}>
          <div className="chat-heading">
            <div>
              <span className="status-dot" />
              {t("home.chat.header")}
            </div>
            <div>
              <button
                className="icon-button"
                aria-label={t("home.chat.refresh")}
                disabled={busy}
                onClick={() => setMessages([])}
              >
                <Icon name="refresh" size={18} />
              </button>
              <button
                className="icon-button"
                aria-label={t("home.notification.close")}
                onClick={close}
              >
                <Icon name="close" size={20} />
              </button>
            </div>
          </div>
          <div className="chat-feed" ref={feed} role="log" aria-live="polite">
            <p className="chat-message bot">{t("home.chat.initial")}</p>
            {messages.map((m) => (
              <p className={`chat-message ${m.type}`} key={m.id}>
                {m.type === "error" ? t("home.chat.error") : m.text}
              </p>
            ))}
            {busy && (
              <p className="chat-typing">
                <span className="spinner" />
                {t("home.chat.typing")}
              </p>
            )}
          </div>
          <form className="chat-form" onSubmit={send}>
            <input
              ref={field}
              aria-label={t("home.chat.inputPlaceholder")}
              placeholder={t("home.chat.inputPlaceholder")}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={2000}
              disabled={busy}
            />
            <button
              className="icon-button"
              aria-label={t("home.form.send")}
              disabled={busy || !input.trim()}
            >
              <Icon name="arrow" size={21} />
            </button>
          </form>
        </section>
      )}
      <button
        ref={trigger}
        className="chat-trigger"
        aria-label={open ? t("home.notification.close") : t("home.chat.header")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? "close" : "chat"} size={25} />
      </button>
    </div>
  );
}
