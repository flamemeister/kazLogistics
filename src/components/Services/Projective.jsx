import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/depo_transfer.jpg";
import {
  FaFileAlt,
  FaTruck,
  FaDollarSign,
  FaClipboard,
  FaShieldAlt,
  FaLeaf,
  FaRoute,
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaCube,
  FaTrain,
  FaBoxOpen,
  FaWarehouse,
} from "react-icons/fa";

const ProjectiveServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Безопасное и эффективное хранение контейнеров",
    },
    {
      id: 2,
      title: "Техническое обслуживание и ремонт контейнеров",
    },
    {
      id: 3,
      title: "Очистка и дезинфекция контейнеров",
    },
    {
      id: 4,
      title: "Мониторинг и учет контейнеров",
    },
    {
      id: 5,
      title: "Организация дальнейшей транспортировки",
    },
    {
      id: 6,
      title: "Аренда контейнеров различных типов",
    },
    {
      id: 7,
      title: "Консультационные услуги по оптимизации логистики",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            Контейнерное депо
          </h1>
        </div>
      </div>

      {/* Hero Section without Background Image (Visible on small screens) */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-20 md:hidden flex flex-col items-center justify-center text-center">
        <div className="mt-10"></div>
        <h1 className="text-3xl font-bold uppercase">Контейнерное депо</h1>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <nav className="text-gray-500 text-sm">
            <ul className="flex space-x-2">
              <li>
                <a href="/" className="hover:text-green-600">
                  Главная страница
                </a>
              </li>
              <li>›</li>
              <li>
                <a href="/services" className="hover:text-green-600">
                  Услуги
                </a>
              </li>
              <li>›</li>
              <li className="text-gray-700">Контейнерное депо</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги контейнерного депо включают:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {`0${service.id}`}
                </h3>
                <p className="text-gray-700">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Advantages Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Преимущества контейнерного депо
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaShieldAlt size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Безопасное хранение
                </h3>
                <p className="text-gray-700">
                  Контейнерное депо обеспечивает надёжную охрану и защиту
                  контейнеров от внешних факторов, таких как погодные условия,
                  кражи и повреждения.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Эффективное управление запасами
                </h3>
                <p className="text-gray-700">
                  Использование современных технологий позволяет вести точный
                  учёт контейнеров, что сокращает время на поиск и обработку
                  грузов.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaCube size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Оптимизация логистики
                </h3>
                <p className="text-gray-700">
                  Гибкость в планировании и размещении контейнеров снижает
                  издержки на транспортировку и ускоряет процесс доставки.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaLeaf size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Техническое обслуживание и ремонт
                </h3>
                <p className="text-gray-700">
                  Регулярная инспекция, очистка и ремонт контейнеров
                  обеспечивают их долгосрочную эксплуатацию и соответствие
                  международным стандартам.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaDollarSign size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Снижение операционных затрат
                </h3>
                <p className="text-gray-700">
                  Консолидация хранения контейнеров в одном месте уменьшает
                  расходы на аренду площадей, логистику и обслуживание.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Text Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-[#0A5225]">
            Контейнерное депо – комплексное решение для хранения и обработки
            контейнеров
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Контейнерные перевозки играют ключевую роль в глобальной логистике,
            а эффективное управление пустыми и загруженными контейнерами требует
            высокой степени организации, опыта и применения современных
            технологий. Great Steppe Logistics предлагает комплексные решения по
            хранению, обработке и техническому обслуживанию контейнеров,
            обеспечивая бесперебойное движение грузов и высокие стандарты
            безопасности. Контейнерное депо – это не просто склад для пустых
            контейнеров, а многофункциональный логистический центр,
            обеспечивающий их учёт, подготовку к дальнейшему использованию,
            ремонт и перераспределение в зависимости от потребностей клиента.
            Обеспечение бесперебойной работы контейнерного парка требует чётко
            организованных процессов, координации персонала и автоматизированных
            систем управления.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Комплексное решение для вашей логистики Контейнерное депо Great
            Steppe Logistics – это стратегически важный элемент в цепочке
            поставок, который помогает избежать узких мест в логистике,
            минимизировать затраты на хранение и повысить общую эффективность
            перевозок. Благодаря передовым технологиям, профессионализму
            сотрудников и строгим стандартам безопасности, мы гарантируем
            бесперебойное управление вашими контейнерами. Доверьтесь нашему
            опыту и обеспечьте максимальную эффективность вашей логистической
            сети!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectiveServices;
