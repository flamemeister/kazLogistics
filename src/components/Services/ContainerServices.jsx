import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/Container shipments.jpg";
import {
  FaFileAlt,
  FaInbox,
  FaDollarSign,
  FaRoute,
  FaBoxes,
  FaShieldAlt,
  FaExchangeAlt,
  FaClipboardCheck,
  FaSatelliteDish,
  FaTruckMoving,
  FaHandshake,
  FaFileInvoice,
  FaCalculator,
} from "react-icons/fa";

const ContainerServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title:
        "Перевозки грузов с полной и частичной загрузкой контейнера (LCL, FCL)",
    },
    {
      id: 2,
      title: "Подбор оптимального маршрута и транспорта",
    },
    {
      id: 3,
      title:
        "Транспортировка груза с помощью морского, воздушного, наземного видов транспорта",
    },
    {
      id: 4,
      title: "Перевозка опасных грузов",
    },
    {
      id: 5,
      title:
        "Регулярное получение информации о местонахождении и состоянии груза",
    },
    {
      id: 6,
      title: "Страхование груза",
    },
    {
      id: 7,
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
            Контейнерные перевозки
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
              <li className="text-gray-700">Контейнерные перевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги контейнерных перевозок включают:
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
            Преимущества контейнерных перевозок
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaShieldAlt size={28} aria-label="Защита и безопасность груза" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Защита и безопасность груза
                </h3>
                <p className="text-gray-700">
                  Контейнеры обеспечивают защиту груза от повреждений, влаги,
                  воздействия погодных условий и внешних факторов. Грузы
                  упаковываются в контейнеры, что уменьшает риск потери или
                  повреждения во время транспортировки.
                </p>
              </div>
            </div>
            {/* Advantage 2 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaBoxes size={28} aria-label="Стандартизация и универсальность" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Стандартизация и универсальность
                </h3>
                <p className="text-gray-700">
                  Контейнеры имеют стандартные размеры и характеристики, что
                  облегчает их использование и перевозку на различных видах
                  транспорта, включая морские, железнодорожные и автомобильные
                  перевозки. Это увеличивает гибкость и эффективность
                  логистических операций.
                </p>
              </div>
            </div>
            {/* Advantage 3 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaDollarSign size={28} aria-label="Экономичность" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Экономичность
                </h3>
                <p className="text-gray-700">
                  Контейнерные перевозки позволяют оптимизировать затраты на
                  транспортировку за счет стандартизации и возможности использования
                  различных видов транспорта.
                </p>
              </div>
            </div>
            {/* Advantage 4 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaClipboardCheck size={28} aria-label="Удобство погрузки и разгрузки" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Удобство погрузки и разгрузки
                </h3>
                <p className="text-gray-700">
                  Контейнеры позволяют эффективную погрузку и разгрузку грузов,
                  что сокращает время операций и увеличивает производительность.
                  Это особенно важно при перевозке больших объемов груза или при
                  работе с крупногабаритными и тяжелыми предметами.
                </p>
              </div>
            </div>
            {/* Advantage 5 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaExchangeAlt size={28} aria-label="Мультимодальность" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Мультимодальность
                </h3>
                <p className="text-gray-700">
                  Контейнерные перевозки позволяют организовывать
                  мультимодальные перевозки, используя комбинацию различных
                  видов транспорта. Это позволяет выбрать оптимальные маршруты и
                  снизить затраты на доставку грузов.
                </p>
              </div>
            </div>
            {/* Advantage 6 */}
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaSatelliteDish size={28} aria-label="Отслеживание и управление" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Легкость отслеживания и управления
                </h3>
                <p className="text-gray-700">
                  Современные технологии позволяют отслеживать контейнеры в
                  режиме реального времени, что обеспечивает лучший контроль над
                  грузом и улучшает управление логистическими процессами.
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
                <FaInbox size={28} className="text-white" aria-label="Получение заявки" />
              </div>
              <p className="ml-4 text-gray-700">Получение заявки</p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute size={28} className="text-white" aria-label="Разработка оптимального маршрута" />
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
                <FaCalculator size={28} className="text-white" aria-label="Расчет ставки" />
              </div>
              <p className="ml-4 text-gray-700">Расчет ставки</p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaFileAlt size={28} className="text-white" aria-label="Оформление необходимых документов" />
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
                <FaTruckMoving size={28} className="text-white" aria-label="Доставка груза до места назначения" />
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
                <FaSatelliteDish size={28} className="text-white" aria-label="Отслеживание местонахождения груза" />
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
                <FaHandshake size={28} className="text-white" aria-label="Выдача груза получателю" />
              </div>
              <p className="ml-4 text-gray-700">Выдача груза получателю</p>
            </div>
            {/* Step 8 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaFileInvoice size={28} className="text-white" aria-label="Получение закрывающих документов" />
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
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex">
            <div className="w-2/3">
              <p className="text-gray-700 leading-relaxed mb-3">
                В сфере грузоперевозок важными параметрами являются скорость,
                надежность и сохранность груза. Ответом на все эти требования
                является контейнерная перевозка, услуга, которую успешно
                предлагает компания «NurZhol Company». Контейнерная перевозка —
                это способ транспортировки, который подразумевает использование
                стандартизированных грузовых контейнеров. Этот подход
                обеспечивает безопасность груза, ускоряет процесс погрузки и
                разгрузки, и гарантирует эффективность грузоперевозок.
              </p>
              <h2 className="text-2xl font-bold mb-3">
                Контейнерная перевозка грузов имеет ряд значительных
                преимуществ, которые делают ее предпочтительной для многих видов
                грузов:
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>1) Безопасность груза:</strong> Грузы в контейнере защищены от внешних
                воздействий и механических повреждений. Это особенно важно для
                транспортировки хрупких или деликатных товаров.
                <br /><br />
                <strong>2) Универсальность:</strong> Контейнеры могут использоваться для перевозки
                самых разных видов грузов, начиная от сыпучих и заканчивая
                температурно-чувствительными. Существуют специальные контейнеры,
                оборудованные системами поддержания нужного температурного
                режима, или такие, которые предназначены для перевозки опасных
                грузов.
                <br /><br />
                <strong>3) Модульность и удобство погрузки/разгрузки:</strong> Благодаря
                стандартизированным размерам контейнеров, они легко стыкуются и
                укладываются на складе или на транспортных средствах. Это
                упрощает процесс погрузки и разгрузки, сокращая затраты на эти
                операции.
                <br /><br />
                <strong>4) Мультимодальность перевозок:</strong> Контейнеры легко
                перевозятся любым видом транспорта (автомобиль, железнодорожный,
                морской, воздушный), что позволяет использовать разные виды
                транспорта в одной цепочке доставки для оптимизации маршрута и
                снижения затрат.
                <br /><br />
                Компания «NurZhol Company» — это логистическая
                компания, специализирующаяся на организации грузоперевозок по
                СНГ, Ближнему Востоку и Европе. За годы работы мы накопили
                огромный опыт, позволяющий нам обеспечить наивысшее качество
                услуг и удовлетворить потребности самых требовательных клиентов.
              </p>
            </div>
            <div className="w-1/3 ml-3">
              <p className="text-gray-700 leading-relaxed mb-3">
                Перевозки грузов в контейнерах — это не только удобный, но и
                безопасный способ транспортировки товаров. Надежная конструкция
                контейнеров обеспечивает защиту груза от внешних воздействий, а
                также от механических повреждений. Все это делает контейнерные
                перевозки предпочтительным решением для транспортировки широкого
                спектра товаров. «NurZhol Company» предлагает клиентам полный
                комплекс услуг, связанных с контейнерной перевозкой. Мы помогаем
                с подбором оптимального маршрута, занимаемся оформлением всех
                необходимых документов, а также предлагаем услуги погрузки и
                разгрузки. Будучи профессионалами в области логистики, мы знаем,
                как важно соблюдать сроки. Поэтому в «NurZhol Company» мы
                предлагаем быстрые и эффективные решения для всех ваших
                потребностей в перевозках грузов. Благодаря нам, контейнерные
                перевозки становятся простыми и надежными, помогая вашему
                бизнесу достичь новых высот.
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

export default ContainerServices;
