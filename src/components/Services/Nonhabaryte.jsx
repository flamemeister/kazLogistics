import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/nonhabaryte_transfer.jpg";
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

const NonhabaryteServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Планирование и координация",
    },
    {
      id: 2,
      title:
        "Определение оптимального маршрута и выбор подходящих транспортных средств и оборудования",
    },
    {
      id: 3,
      title: "Получение необходимых разрешений и лицензий для перевозки груза",
    },
    {
      id: 4,
      title: "Упаковка и загрузка с помощью специального оборудования",
    },
    {
      id: 5,
      title: "Транспортировка груза до места назначения",
    },
    {
      id: 6,
      title:
        "Предоставление информации по местонахождению Вашего груза на различных этапах перевозки в режиме реального времени",
    },
    {
      id: 7,
      title: "Разгрузка и размещение",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(1.7)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            Негабаритные перевозки
          </h1>
        </div>
      </div>

      {/* Hero Section (mobile) */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-20 md:hidden flex flex-col items-center justify-center text-center">
        <div className="mt-10"></div>
        <h1 className="text-3xl font-bold uppercase">Негабаритные перевозки</h1>
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
              <li className="text-gray-700">Негабаритные перевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги негабаритных перевозок включают:
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
            Преимущества негабаритных перевозок
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
                  Доставка больших грузов
                </h3>
                <p className="text-gray-700">
                  Негабаритные перевозки позволяют доставить грузы, которые
                  превышают стандартные размеры или вес. Это могут быть крупные
                  машины, строительное оборудование, промышленные компоненты,
                  суда и т.д.
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
                  Специализированные ТС
                </h3>
                <p className="text-gray-700">
                  Для перевозки тяжеловесных / крупногабаритных грузов
                  используются особые транспортные средства (низкорамные
                  платформы, гусеничные транспортеры и пр.), обладающие
                  достаточной грузоподъемностью и прочностью.
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
                  Профессиональное обслуживание
                </h3>
                <p className="text-gray-700">
                  Выполнение таких перевозок требует высокого уровня
                  профессионализма. Перевозчик и логистическая компания должны
                  иметь опыт в организации подобного рода перевозок и знать все
                  законодательные нормы.
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
                  Специальные разрешения
                </h3>
                <p className="text-gray-700">
                  Перевозка негабаритных грузов требует получения специальных
                  разрешений и, в ряде случаев, сопровождения эскортных служб
                  или полиции. Это может включать временное закрытие дорог или
                  согласование маршрута.
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
                  Глобальная доставка
                </h3>
                <p className="text-gray-700">
                  Негабаритные перевозки позволяют транспортировать оборудование
                  и материалы по всему миру, что особенно важно для
                  строительных, энергетических, нефтегазовых и иных крупных
                  проектов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Stages Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#0A5225]">
            Этапы железнодорожной перевозки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaClipboard size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Подача заявки и согласование условий
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Разработка маршрута перевозки
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaDollarSign size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Заключение договора и расчет стоимости
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaBoxOpen size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Загрузка груза</p>
            </div>
            {/* Step 5 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaTrain size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Перевозка груза по маршруту</p>
            </div>
            {/* Step 6 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaWarehouse size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Разгрузка груза на складе назначения
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Text Section (Updated for single-column layout) */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8">
            Негабаритные перевозки – доставка грузов любой сложности
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Одно из направлений деятельности логистической компании Great Steppe
            Logistics — перевозка негабаритных грузов. К числу таких относятся
            перевозка тяжеловесных грузов, крупного оборудования, техники. Опыт
            и профессионализм, которые мы накопили, позволяют доставлять товары
            вовремя и в идеальном состоянии. Наши специалисты отлично
            ориентируются в таможенных и экспедиторских документах, необходимых
            при перевозках крупногабаритных грузов, и оформляют специальные
            разрешения на перевозку таких грузов. Благодаря этому вы избежите
            непредвиденных препятствий и получите оперативное исполнение заказа.
          </p>

          <h3 className="text-xl font-bold mt-6 text-[#0A5225]">
            Что такое негабаритный транспорт?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Негабаритные перевозки — это перевозки грузов, размеры (или вес)
            которых вместе с транспортным средством превышают допустимые
            законодательные нормы. Обычно это:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 text-justify">
            <li>Длина: более 16,5 метров</li>
            <li>Ширина: более 2,5 метров</li>
            <li>Высота: более 4 метров</li>
            <li>Масса: более 42 тонн</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Если превышен хотя бы один из указанных параметров, транспортное
            средство или его комбинация относят к одной из категорий
            негабаритных перевозок. Для каждой категории действуют свои правила,
            в том числе требования к сопровождению (количество пилотов и т. д.)
            на всём пути.
          </p>

          <h3 className="text-xl font-bold mt-6 text-[#0A5225]">
            Как организована негабаритная перевозка?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Наше сотрудничество с клиентом начинается с определения типа
            негабаритного груза, технических и логистических требований, а также
            оценки рисков, связанных с перевозкой. Мы детально планируем
            маршрут, составляем график перевозок, готовим план погрузки и
            разгрузки, занимаемся страхованием груза от непредвиденных
            повреждений.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            В Great Steppe Logistics мы уделяем особое внимание безопасности
            перевозки негабаритных грузов. Это гарантирует высокое качество
            услуг вне зависимости от типа груза или дальности маршрута.
            Негабаритные перевозки особенно востребованы промышленными
            предприятиями и строительными компаниями. Все этапы согласуются с
            клиентом, чьи индивидуальные требования и приоритеты мы учитываем в
            первую очередь. Более подробную информацию о перевозке вашего груза
            можно получить у наших специалистов.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NonhabaryteServices;
