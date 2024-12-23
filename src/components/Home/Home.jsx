import React, { useState } from "react";
import axios from "axios";
import {
  TruckIcon,
  GlobeAltIcon,
  ClockIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import Footer from "../Footer/Footer";
import bgImage from "../../assets/images/home_bg_image.png";
import endpoint from "../../services/api";

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
        setAlertMessage("Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.");
        setAlertVisible(true);
        e.target.reset();
      }
    } catch (error) {
      setAlertMessage("Произошла ошибка при отправке формы. Попробуйте еще раз позже.");
      setAlertVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{fadeAnimations}</style>

      {alertVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-md shadow-lg max-w-md text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Уведомление</h3>
            <p className="text-gray-600 mb-6">{alertMessage}</p>
            <button
              onClick={() => setAlertVisible(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
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
        className="relative bg-cover bg-center bg-no-repeat min-h-[75vh] flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 text-center w-full fade-in-up">
          <div className="flex flex-col items-center justify-center py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Great Steppe Logistics
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Ваша международная транспортно-логистическая компания
            </p>
            <button
              onClick={handleScrollToForm}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      <section
        id="consultation-form"
        className="bg-white py-16 md:py-20 fade-in-up"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Получите консультацию
          </h2>
          <p className="mt-2 text-gray-600 text-center max-w-xl mx-auto">
            Заполните форму ниже, и мы свяжемся с вами, чтобы найти лучшие
            решения для ваших логистических задач.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Имя</label>
              <input
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Номер телефона</label>
              <input
                type="tel"
                name="phone"
                placeholder="Введите номер телефона"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Введите адрес электронной почты"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Комментарий</label>
              <textarea
                name="comment"
                rows="4"
                placeholder="Опишите свой вопрос или запрос..."
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-600"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Отправить
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;