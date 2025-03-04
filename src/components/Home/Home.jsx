import React, { useState, useEffect } from "react";
import axios from "axios";
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

const fadeAnimations = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}`;

const Home = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Привет! Я бот компании Great Steppe Logistics. Как я могу помочь вам сегодня?",
      type: "bot",
      timestamp: "26h ago",
    },
  ]);

  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: userInput,
      type: "user",
      timestamp: "Just now",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");
    setIsTyping(true);

    try {
      const response = await axios.post(
        "http://78.140.241.59:8009/chat/chat/",
        {
          message: userInput,
        }
      );

      const botResponse = {
        id: messages.length + 2,
        text: response.data.response,
        type: "bot",
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "Произошла ошибка. Попробуйте позже.",
        type: "bot",
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleScrollToForm = () => {
    const formEl = document.getElementById("consultation-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
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
        setAlertMessage(
          "Форма успешно отправлена! Мы свяжемся с вами в ближайшее время."
        );
        setAlertVisible(true);
        e.target.reset();
      }
    } catch (error) {
      setAlertMessage(
        "Произошла ошибка при отправке формы. Попробуйте еще раз позже."
      );
      setAlertVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run on mount + on resize
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile(); // initial check

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <>
      <style>{fadeAnimations}</style>
      {alertVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Уведомление
            </h3>
            <p className="text-gray-600 mb-6">{alertMessage}</p>
            <button
              onClick={() => setAlertVisible(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="loader border-t-4 border-green-600 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}

      <section
        className="relative bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${bgImage})`, height: "100vh" }}
      >
        {/* Полупрозрачный фон */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Контейнер для текста */}
        <div
          className={`
      relative
      z-10
      px-4
      fade-in-up
    `}
          style={{
            maxWidth: isMobile ? "90%" : "40%", // Уменьшаем ширину текста на компьютерах
            marginLeft: isMobile ? "5%" : "10%", // Отступ слева
            textAlign: isMobile ? "center" : "left", // Центрирование текста на мобильных
          }}
        >
          <p className="text-gray-200 font-bold text-lg sm:text-xl md:text-2xl mt-4 md:mt-2 mb-8">
          Мы создаем ценность в каждом продукте, делая его надежным, эффективным и востребованным
          </p>
        </div>
      </section>

      <section
        id="consultation-form"
        className="bg-white py-16 md:py-20 fade-in-up"
      >
        <div className="max-w-2xl mx-auto px-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Получите консультацию
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-xl mx-auto">
            Заполните форму ниже, и мы свяжемся с вами, чтобы найти лучшие
            решения для ваших логистических задач.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Имя</label>
              <input
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-600 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Номер телефона</label>
              <input
                type="tel"
                name="phone"
                placeholder="Введите номер телефона"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-600 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Введите адрес электронной почты"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-600 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Комментарий</label>
              <textarea
                name="comment"
                rows="4"
                placeholder="Опишите свой вопрос или запрос..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-600 transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Отправить
            </button>
          </form>
        </div>
      </section>

      {/* Floating Chat Icon */}
      <div
        className="
    fixed
    right-5
    z-50
    bottom-20       /* default for mobile */
    md:bottom-5     /* override for desktop and larger */
    transition-all
  "
      >
        <button
          onClick={toggleChat}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-110 focus:outline-none"
        >
          {chatVisible ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaComments className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {chatVisible && (
        <div
          className="fixed bottom-20 right-5 bg-white border border-gray-300 rounded-lg shadow-lg w-80 animate-fade-in-up"
          style={{
            animation: "fadeInUp 0.3s ease-out",
          }}
        >
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800">Чат с нами</h3>
            <button
              onClick={() => setMessages([])}
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
              title="Обновить чат"
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
                  style={{
                    maxWidth: "75%",
                  }}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {/* Индикатор загрузки */}
            {isTyping && (
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-500 text-sm">
                  Бот печатает...
                </span>
              </div>
            )}
          </div>
          <div className="p-3 border-t border-gray-200 flex items-center">
            <input
              type="text"
              placeholder="Введите сообщение..."
              className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-600 transition-colors duration-300"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.3s ease-out;
          }
        `}
      </style>

      <Footer />
    </>
  );
};

export default Home;
