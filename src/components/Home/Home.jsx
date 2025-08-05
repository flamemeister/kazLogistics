// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  TruckIcon,
  GlobeAltIcon,
  ClockIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import Footer from "../Footer/Footer";
import bgImage from "../../assets/images/iStock-1275144846.jpg";
import endpoint from "../../services/api";
import { FaComments, FaTimes, FaSyncAlt } from "react-icons/fa";
import "../../styles/spinner.css";

const Home = () => {
  const { t } = useTranslation();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: t("home.chat.initial"),
      type: "bot",
      timestamp: t("home.chat.initialTimestamp"),
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setChatVisible((v) => !v);

  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: userInput,
      type: "user",
      timestamp: t("home.chat.now"),
    };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
    setIsTyping(true);

    try {
      const response = await axios.post(
        "http://78.140.241.59:8009/chat/chat/",
        { message: userInput }
      );
      const botResponse = {
        id: messages.length + 2,
        text: response.data.response,
        type: "bot",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: messages.length + 2, text: t("home.chat.error"), type: "bot", timestamp: t("home.chat.now") },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleScrollToForm = () => {
    const formEl = document.getElementById("consultation-form");
    formEl?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      comment: e.target.comment.value,
    };

    try {
      const response = await axios.post(endpoint, formData);
      if (response.status === 200) {
        setAlertMessage(t("home.form.success"));
        setAlertVisible(true);
        e.target.reset();
      }
    } catch {
      setAlertMessage(t("home.form.error"));
      setAlertVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <>
      {/* ALERT MODAL */}
      {alertVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {t("home.notification.title")}
            </h3>
            <p className="text-gray-600 mb-6">{alertMessage}</p>
            <button
              onClick={() => setAlertVisible(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              {t("home.notification.close")}
            </button>
          </div>
        </div>
      )}

      {/* LOADER */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="loader border-t-4 border-green-600 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}

      {/* HERO SECTION */}
<section
  className="relative bg-cover bg-center bg-no-repeat flex items-center"
  style={{ backgroundImage: `url(${bgImage})`, height: "100vh" }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60" />

  {/* content */}
  <div
    className={`relative z-10 px-4`}
    style={{
      maxWidth: isMobile ? "90%" : "40%",
      marginLeft: isMobile ? "5%" : "10%",
      textAlign: isMobile ? "center" : "left",
    }}
  >
<h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
  {t("home.bannerHeading")}
</h1>

<p className="text-gray-300 mt-4 text-base sm:text-lg md:text-xl max-w-lg">
  {t("home.bannerSubheading")}
</p>



  </div>
</section>


      {/* CONSULTATION FORM */}
      <section id="consultation-form" className="bg-white py-16 fade-in-up">
        <div className="max-w-2xl mx-auto px-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            {t("home.consultation.title")}
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-xl mx-auto">
            {t("home.consultation.description")}
          </p>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                {t("home.form.name")}
              </label>
              <input
                type="text"
                name="name"
                placeholder={t("home.form.namePlaceholder")}
                required
                className="w-full border rounded-md p-3 focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                {t("home.form.phone")}
              </label>
              <input
                type="tel"
                name="phone"
                placeholder={t("home.form.phonePlaceholder")}
                required
                className="w-full border rounded-md p-3 focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                {t("home.form.email")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("home.form.emailPlaceholder")}
                className="w-full border rounded-md p-3 focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                {t("home.form.comment")}
              </label>
              <textarea
                name="comment"
                rows="4"
                placeholder={t("home.form.commentPlaceholder")}
                className="w-full border rounded-md p-3 focus:border-green-600"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
            >
              {t("home.form.send")}
            </button>
          </form>
        </div>
      </section>

      {/* FLOATING CHAT ICON */}
      <div className="fixed right-5 z-50 bottom-20 md:bottom-5">
        <button
          onClick={toggleChat}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transform hover:scale-110"
        >
          {chatVisible ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaComments className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* CHAT WINDOW */}
      {chatVisible && (
        <div className="fixed bottom-20 right-5 bg-white border rounded-lg shadow-lg w-80 animate-fade-in-up">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800">
              {t("home.chat.header")}
            </h3>
            <button
              onClick={() => setMessages([])}
              className="text-gray-500 hover:text-gray-800"
              title={t("home.chat.refresh")}
            >
              <FaSyncAlt />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${
                  message.type === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`p-3 rounded-lg shadow-sm ${
                    message.type === "bot"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-green-600 text-white"
                  }`}
                  style={{ maxWidth: "75%" }}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-500 text-sm">
                  {t("home.chat.typing")}
                </span>
              </div>
            )}
          </div>
          <div className="p-3 border-t flex items-center">
            <input
              type="text"
              placeholder={t("home.chat.inputPlaceholder")}
              className="flex-1 border rounded-md p-2 focus:border-green-600"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.3s ease-out; }
      `}</style>

      <Footer />
    </>
  );
};

export default Home;
