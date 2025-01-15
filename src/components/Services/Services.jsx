import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import card1 from "../../assets/images/auto_card.jpeg";
import card2 from "../../assets/images/air_card.jpeg";
import card3 from "../../assets/images/train_card.jpeg";
import card4 from "../../assets/images/container_card.jpeg";
import card5 from "../../assets/images/multimodal_card.jpeg";
import card6 from "../../assets/images/nonhabaryte_card.jpeg";
import card7 from "../../assets/images/depo_card.jpeg";
import card8 from "../../assets/images/go_back.png";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { id: 1, image: card1, link: "/services/auto" },
    { id: 2, image: card2, link: "/services/air" },
    { id: 3, image: card3, link: "/services/railway" },
    { id: 4, image: card4, link: "/services/container" },
    { id: 5, image: card5, link: "/services/multimodal" },
    { id: 6, image: card6, link: "/services/nonhabaryte" },
    { id: 7, image: card7, link: "/services/projectiveы" },
    { id: 8, image: card8, link: "/" },
  ];

  return (
    <div>
      <div className="pt-32"></div> {/* Увеличено значение отступа */}
      <div className="bg-white text-black py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Услуги</h1>
          <div className="mt-2 h-1 w-16 bg-[#0A5225] mx-auto" />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* <h2 className="text-2xl font-bold mb-8 text-center">Наши услуги</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) =>
              service.image ? (
                <Link
                  to={service.link}
                  key={service.id}
                  className="group block rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-full h-full">
                    <img
                      src={service.image}
                      alt={`Service ${service.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              ) : (
                <div
                  key={service.id}
                  onClick={() => navigate(-1)} // Переход на предыдущую страницу
                  className="cursor-pointer group block rounded-lg shadow-lg bg-green-600 text-white flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-lg font-bold">Вернуться назад</h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Additional Text Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-gray-800">
          <h2 className="text-2xl font-bold text-center mb-6">
            Добро пожаловать в Great Steppe Logistics
          </h2>
          <p className="leading-relaxed mb-6">
            Добро пожаловать на страницу услуг компании Great Steppe Logistics —
            вашего надежного партнера в мире транспортно-логистических решений.
            Мы предоставляем полный спектр услуг, помогая вашему бизнесу
            максимально эффективно организовать грузоперевозки любого типа и
            масштаба.
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Железнодорожные перевозки:</strong> Мы предлагаем все виды
              железнодорожных перевозок, включая контейнерные и сборные грузы.
              Обеспечиваем быстрое и безопасное перемещение грузов как внутри
              страны, так и за её пределами.
            </li>
            <li>
              <strong>Автоперевозки:</strong> С помощью нашей широкой сети
              партнёров мы организовываем доставку грузов автотранспортом в
              любую точку мира. У нас есть доступ к различным видам
              автотранспорта, включая специализированный.
            </li>
            <li>
              <strong>Мультимодальные перевозки:</strong> Идеальный выбор для
              международной логистики. Мы координируем процесс перевозки с
              использованием различных видов транспорта.
            </li>
            <li>
              <strong>Авиаперевозки:</strong> Если важна скорость, наши услуги
              авиаперевозки обеспечат быструю и своевременную доставку,
              сотрудничая с ведущими авиакомпаниями.
            </li>
            <li>
              <strong>Проектная логистика:</strong> Мы помогаем организовать
              сложные проекты, разрабатывая оптимальный план транспортировки.
            </li>
            <li>
              <strong>Негабаритные перевозки:</strong> Для крупных и
              тяжеловесных грузов мы предоставляем решения, учитывающие все
              нюансы.
            </li>
          </ul>
          <p className="leading-relaxed mt-6">
            Наша цель — предоставить лучшие логистические решения, которые
            способствуют успеху вашего бизнеса. Свяжитесь с нами уже сегодня,
            чтобы обсудить ваши потребности и найти оптимальное решение!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
