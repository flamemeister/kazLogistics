import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/train_transfer.jpg";
import {
  FaFileInvoice,
  FaClipboardList,
  FaDollarSign,
  FaFileAlt,
  FaRoute,
  FaBoxOpen,
  FaShieldAlt,
  FaLeaf,
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaHandshake,
  FaTruckMoving,
} from "react-icons/fa";

const RailServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Перевозку грузов в универсальных и специализиро- ванных вагонах",
    },
    {
      id: 2,
      title: "Перевозку сухих, навалочных, тарно-штучных и жидких грузов",
    },
    {
      id: 3,
      title: "Перевозку негабаритных проектных грузов",
    },
    {
      id: 4,
      title: "Полный контроль передвижения груза по всем маршрутам следования",
    },
    {
      id: 5,
      title: "Предоставление вагонов",
    },
    {
      id: 6,
      title: "Оформление таможенных документов",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            ЖД перевозки
          </h1>
        </div>
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
              <li className="text-gray-700">ЖД перевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги ж/д перевозок включают:
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
            Преимущества ж/д перевозок
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaBoxOpen size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Высокая грузоподъемность
                </h3>
                <p className="text-gray-700">
                  Железнодорожные составы способны перевозить большие объемы
                  грузов. Это особенно полезно для тяжелых и крупногабаритных
                  грузов, которые не могут быть легко перевезены другими видами
                  транспорта.
                </p>
              </div>
            </div>
            {/* Advantage 2 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaDollarSign size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Экономическая эффективность
                </h3>
                <p className="text-gray-700">
                  ЖД перевозки обычно предлагают более низкие тарифы по
                  сравнению с авиаперевозками. Они могут быть особенно выгодными
                  для долгосрочных контрактов или крупных партий грузов.
                </p>
              </div>
            </div>
            {/* Advantage 3 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaShieldAlt size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Безопасность и надежность
                </h3>
                <p className="text-gray-700">
                  Железнодорожные перевозки обладают высокими стандартами
                  безопасности и надежности. Грузы хорошо защищены от
                  повреждений и кражи, так как доступ к вагонам контролируется и
                  они обычно имеют закрытую структуру.
                </p>
              </div>
            </div>
            {/* Advantage 4 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaLeaf size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Экологическая эффективность
                </h3>
                <p className="text-gray-700">
                  ЖД перевозки считаются более экологически чистыми по сравнению
                  с автоперевозками и авиаперевозками. Они потребляют меньше
                  топлива на тонну груза и могут значительно снижать выбросы
                  углекислого газа и других вредных веществ.
                </p>
              </div>
            </div>
            {/* Advantage 5 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Гибкость маршрутов
                </h3>
                <p className="text-gray-700">
                  Железнодорожные сети предлагают широкий выбор маршрутов,
                  охватывающих большую часть территории. Это позволяет
                  доставлять грузы в отдаленные и труднодоступные районы, где
                  другие виды транспорта могут быть ограничены или
                  отсутствовать.
                </p>
              </div>
            </div>
            {/* Advantage 6 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaExchangeAlt size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Межмодальные перевозки
                </h3>
                <p className="text-gray-700">
                  Железнодорожные перевозки хорошо сочетаются с другими видами
                  транспорта, такими как автомобильные и морские перевозки. Это
                  позволяет организовать межмодальные перевозки, оптимизировать
                  время доставки и снизить затраты на перевозку.
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
            Этапы перевозки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaClipboardList size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Получение заявки</p>
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
                Разработка оптимального маршрута
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
              <p className="ml-4 text-gray-700">Расчет ставки</p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaFileAlt size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Оформление необходимых документов
              </p>
            </div>
            {/* Step 5 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaTruckMoving size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Доставка груза до места назначения
              </p>
            </div>
            {/* Step 6 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaMapMarkerAlt size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Отслеживание местонахождения груза
              </p>
            </div>
            {/* Step 7 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaHandshake size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Выдача груза получателю</p>
            </div>
            {/* Step 8 */}
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

      {/* Text Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-3">
          <div className="flex">
            <div className="w-2/3">
              <h2 className="text-2xl font-bold mb-3">
                Железнодорожные перевозки – экономично и мощно
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Железнодорожный транспорт на сегодня наиболее экономически
                выгодное решение, если вы хотите перевезти крупногабаритные,
                тяжеловесные грузы и большие партии товаров на дальние
                расстояния. В Казахстане, как и во всем мире, грузовой
                железнодорожный транспорт обычно используется для перевозки
                сырья, такого как уголь, сталь, жидкостей и опасных грузов.
                Кроме того, грузовые железнодорожные перевозки — это самый
                безопасный вид логистических услуг. В Nur Zhol Company мы
                поможем вам организовать доставку груза по железной дороге или
                другими видами транспорта, идеально подходящими для ваших нужд.
                Являясь одним из лидеров рынка перевозок Республики Казахстан,
                мы квалифицированно организуем и своевременно доставим ваш груз
                в место назначения.
              </p>
              <h2 className="text-2xl font-bold mb-3">
                Можно ли перевозить опасные грузы по железной дороге?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Поезда часто используются для перевозки опасных материалов,
                например, нефти, промышленных газов, серной кислоты и прочих.
                Перевозка грузов железнодорожным транспортом строго регулируется
                международными правилами, по которым допускается перевозить
                опасные грузы в большем объеме, чем при перевозке воздушным или
                некоторыми видами наземного транспорта.
              </p>
              <h2 className="text-2xl font-bold mb-3">
                Какой максимальный вес разрешен для железнодорожных перевозок?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Обычно современный железнодорожный вагон имеет грузоподъемность
                до 70 тонн. Учитывая, что поезд может состоять из 50 и более
                вагонов, общая грузоподъемность может превышать 3 500 тонн. В
                зависимости от размера груза и типа груза специалист подбирает
                нужный тип вагона.
              </p>
              <h2 className="text-2xl font-bold mb-3">
                Сколько стоят железнодорожные перевозки?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Стоимость услуги железнодорожного транспорта зависит от деталей
                груза (габариты, вес и тип), места отправления и пункта
                доставки. Поскольку движение поездов ограничено грузовыми
                железнодорожными коридорами, эта услуга обычно сочетается с
                автомобильным транспортом, чтобы обеспечить связь между станцией
                и адресом назначения.
              </p>
            </div>
            <div className="w-1/3 ml-3">
              <h2 className="text-2xl font-bold mb-3">
                Международные железнодорожные грузовые перевозки дешевле
                автомобильных?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Железнодорожные перевозки на сегодня один из самых
                востребованных запросов для этого вида транспорта, но они могут
                быть дороже автомобильных из-за высоких затрат на обработку.
                Если адреса не связаны напрямую с железнодорожными станциями,
                также будет необходимо организовать мультимодальные перевозки,
                сочетающие железнодорожный и автомобильный транспорт для
                перевозки грузов на железнодорожную станцию и обратно. Однако
                при перевозках больших партий грузов или на дальние расстояния
                стоимость железнодорожных перевозок, как правило, ниже, чем
                остальных, из-за меньшего расхода топлива. Каковы основные
                преимущества железнодорожного транспорта по сравнению с
                автомобильным или морским? Низкие цены и короткие сроки
                перевозки крупногабаритных грузов на большие расстояния являются
                одним из ключевых преимуществ железнодорожного транспорта по
                сравнению с автомобильным или морским транспортом. Например,
                железнодорожные перевозки из Китая могут быть на 50% быстрее,
                чем морские перевозки. Тем не менее, авиаперевозки остаются
                самой быстрой транспортной услугой. Чтобы узнать точную
                стоимость и получить ответ специалиста на другие вопросы, просто
                оставьте вашу заявку!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RailServices;
