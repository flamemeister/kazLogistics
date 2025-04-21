import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/Multimodal.jpg";
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
  FaHandshake,
  FaFileInvoice
} from "react-icons/fa";

const MultimodalServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title:
        "Разработку оптимального маршрута и подбор эффективных транспортных средств",
    },
    {
      id: 2,
      title:
        "Предоставление информации по местонахождению Вашего груза на различных этапах перевозки в режиме реального времени",
    },
    {
      id: 3,
      title: "Оформление таможенных документов",
    },
    {
      id: 4,
      title: "Страхование груза",
    },
    // You can uncomment or modify these if needed:
    // {
    //   id: 5,
    //   title: "Транспортировка груза с помощью морского, воздушного, наземного видов транспорта",
    // },
    // {
    //   id: 6,
    //   title: "Страхование груза",
    // },
    // {
    //   id: 7,
    //   title: "Оформление таможенных документов",
    // },
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
            Мультимодальные перевозки
          </h1>
        </div>
      </div>

      {/* Hero Section (mobile) */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-20 md:hidden flex flex-col items-center justify-center text-center">
        <div className="mt-[30px]"></div>
        <h1 className="text-3xl font-bold uppercase">
          Мультимодальные перевозки
        </h1>
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
              <li className="text-gray-700">Мультимодальные перевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги мультимодальных перевозок включают:
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

      {/* Advantages Section (renamed heading to match "мультимодальные") */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Преимущества мультимодальных перевозок
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaShieldAlt size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Гибкость и оптимизация маршрута
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Мультимодальные перевозки позволяют выбирать оптимальный
                  маршрут, используя разные виды транспорта для доставки груза.
                  Это помогает обойти ограничения и выбрать наиболее эффективные
                  и быстрые варианты доставки.
                </p>
              </div>
            </div>
            {/* Advantage 2 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaDollarSign size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Снижение затрат
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Комбинирование разных видов транспорта может помочь снизить
                  общие затраты на перевозку. Например, использование морского
                  или железнодорожного транспорта на долгие дистанции и
                  автотранспорта на короткие участки зачастую дешевле, чем
                  полагаться на один вид транспорта.
                </p>
              </div>
            </div>
            {/* Advantage 3 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaCube size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Увеличение скорости доставки
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Мультимодальные перевозки могут значительно сократить общее
                  время доставки груза. Груз начинается движение сразу после
                  погрузки на первый вид транспорта, не дожидаясь, например,
                  полного заполнения контейнера или отдельного рейса.
                </p>
              </div>
            </div>
            {/* Advantage 4 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaLeaf size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Большая географическая доступность
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  При помощи разных видов транспорта можно охватить и те районы,
                  где отсутствует, к примеру, железная дорога или морской порт.
                  Это особенно удобно для отдаленных регионов.
                </p>
              </div>
            </div>
            {/* Advantage 5 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Легкость отслеживания и управления
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Для мультимодальных перевозок используются системы
                  отслеживания и координации, позволяющие видеть движение груза
                  по всем этапам. Это облегчает управление логистикой и
                  оперативную реакцию на возможные задержки.
                </p>
              </div>
            </div>
            {/* Advantage 6 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaShieldAlt size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Улучшенная безопасность
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Использование нескольких видов транспорта подразумевает
                  различные протоколы и системы безопасности, что в совокупности
                  снижает риск потери или повреждения груза на разных этапах.
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
          <h2 className="text-2xl font-bold mb-8 text-center">
            Этапы мультимодальной перевозки
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
              Получение заявки
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
              Расчет ставки
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaClipboard size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Оформление документов</p>
            </div>
            {/* Step 5 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaTrain size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Доставка груза до назначения</p>
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
              Отслеживание местонахождения
              </p>
            </div>
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaHandshake size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
              Выдача груза получателю
              </p>
            </div>
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaFileInvoice size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
              Получение закрывающих документов
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Text Section (Updated) */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8">
            Мультимодальные перевозки грузов – эффективное решение
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Мультимодальные перевозки — это способ перевозки грузов на большие
            расстояния, при котором товары и материальные ценности
            транспортируются несколькими видами транспорта. Такой подход
            наиболее популярен среди клиентов, так как даёт возможность
            упростить таможенную процедуру и расширить географию доставки.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Особенностью мультимодальных перевозок является то, что одна
            логистическая компания берёт на себя организацию перевозки и несёт
            ответственность за сохранность товара по договору, оказывая
            комплексные услуги в сфере погрузочно-разгрузочных работ,
            страхования грузов и т.д.
          </p>

          <h3 className="text-xl font-bold mt-6">
            Преимущества модального транспорта
          </h3>
          <ul className="list-decimal list-inside text-gray-700 mt-4 space-y-2 text-justify">
            <li>
              Продукция доставляется из точки А в точку Б в кратчайшие сроки.
              Это особенно важно для скоропортящихся продуктов (например, при
              рефрижераторных перевозках).
            </li>
            <li>
              Транспортные услуги менее затратны, так как заказчик платит только
              одной транспортной компании и не тратит время на подключение
              других подрядчиков для перегрузки или дополнительных операций.
            </li>
            <li>
              Исключаются дополнительные задержки и простои из-за отсутствия
              транспорта в месте перегрузки. Организация мультимодальных
              перевозок подразумевает чёткий план и синхронизацию всех видов
              транспорта.
            </li>
            <li>
              Международные перевозки возможно организовать в любую точку мира.
              Мультимодальный подход позволяет добраться даже на другой
              континент или в труднодоступные регионы, где невозможно
              использовать только один вид транспорта.
            </li>
            <li>
              Безопасность груза повышается, так как ответственность за весь
              маршрут несёт одна компания. Вероятность утраты и порчи груза
              минимизируется, что особенно важно для дорогостоящих отправлений.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6 text-justify">
            Мультимодальная логистика может включать различные сочетания
            транспорта. Наиболее распространённые:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-justify">
            <li>автомобиль + морской корабль;</li>
            <li>автомобиль + железная дорога;</li>
            <li>автомобиль + автомобиль (например, перегрузка на месте). </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6 text-justify">
            Возможны и другие комбинации — иногда с участием трёх или четырёх
            видов транспорта, чтобы добиться максимально эффективной и быстрой
            доставки.
          </p>
          <p className="text-gray-700 leading-relaxed mt-6 text-justify">
            Чтобы подобрать оптимальный способ доставки вашего груза, свяжитесь
            с нашими специалистами и получите самое выгодное для вас решение!
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MultimodalServices;
