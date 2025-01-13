import React from "react";
import { useNavigate } from "react-router-dom"; 
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/depo_transfer.jpg";
import { FaFileAlt, FaTruck, FaDollarSign, FaClipboard, FaShieldAlt, FaLeaf, FaRoute, FaExchangeAlt, FaMapMarkerAlt, FaCube, FaTrain, FaBoxOpen, FaWarehouse} from "react-icons/fa";


const ProjectiveServices = () => {
  const navigate = useNavigate(); 

  const services = [
    {
      id: 1,
      title: "Планирование и координация",
    },
    {
      id: 2,
      title: "Определение оптимального маршрута и выбор подходящих транспортных средств и оборудования",
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
      title: "Предоставление информации по местонахождению Вашего груза на различных этапах перевозки в режиме реального времени",
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
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">КОНТЕЙНЕРНОЕ ДЕПО</h1>
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
              <li className="text-gray-700">Контейнерное депо</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги проектных перевозок включают:
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
    <h2 className="text-2xl font-bold mb-8 text-center">Преимущества проектных перевозок</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
        <FaShieldAlt size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Централизованное управление</h3>
          <p className="text-gray-700">
          Проектная логистика предлагает централизованное управление всеми аспектами логистики проекта, что позволяет более эффективно планировать и координировать перемещение грузов. Это включает планирование и оптимизацию маршрутов, выбор транспортных средств, организацию складирования и транспортировку грузов.   </p>
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
          <h3 className="text-lg font-bold text-gray-800">Специализированные знания и опыт</h3>
          <p className="text-gray-700">
          Проектная логистика требует специализированных знаний и опыта в управлении сложными логистическими операциями. Логистические компании, специализирующиеся на проектной логистике, обладают экспертизой в области грузоперевозок крупногабаритных и негабаритных грузов, управлении таможенными процедурами, обеспечении безопасности грузов и других особенностей, связанных с проектными перевозками.      </p>
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
          <h3 className="text-lg font-bold text-gray-800">Оптимизация времени и ресурсов</h3>
          <p className="text-gray-700">
          Проектная логистика направлена на оптимизацию времени и ресурсов при перевозке грузов. Она позволяет минимизировать время простоя грузов на складах и в пути, оптимизировать использование транспортных средств и ресурсов, а также снизить затраты на перевозку. </p>
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
          <h3 className="text-lg font-bold text-gray-800">Решение сложных логистических задач</h3>
          <p className="text-gray-700">
          Проектная логистика способна решать сложные логистические задачи, связанные с перевозкой крупногабаритных и тяжеловесных грузов, организацией логистики в удаленных или труднодоступных районах, выполнением строительных проектов и т.д. Она позволяет обеспечить безопасность и эффективность перевозок при соблюдении всех требований и сроков проекта.  </p>
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
          <h3 className="text-lg font-bold text-gray-800">Гибкость и адаптивность</h3>
          <p className="text-gray-700">
          Проектная логистика требует гибкости и адаптивности для работы с изменяющимися условиями и требованиями проектов. Логистические компании, специализирующиеся на проектной логистике, могут быстро реагировать на изменения и принимать необходимые меры для обеспечения успешной доставки груза в рамках проекта.    </p>
        </div>
      </div>
      {/* <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaShieldAlt size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Улучшенная безопасность и защита груза</h3>
          <p className="text-gray-700">
          Мультимодальные перевозки предоставляют возможность использовать различные меры безопасности для защиты груза на каждом этапе доставки. Каждый вид транспорта имеет свои собственные протоколы и системы безопасности, что увеличивает защиту и уменьшает риск потери или повреждения груза. </p>
        </div>
      </div> */}
    </div>
  </div>
</div>


<hr className="border-gray-200 my-8" />


{/* Stages Section */}
<div className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    <h2 className="text-2xl font-bold mb-8 text-center text-[#0A5225]">Этапы железнодорожной перевозки</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaClipboard size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Подача заявки и согласование условий</p>
      </div>
      {/* Step 2 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaRoute size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Разработка маршрута перевозки</p>
      </div>
      {/* Step 3 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaDollarSign size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Заключение договора и расчет стоимости</p>
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
        <p className="ml-4 text-gray-700">Разгрузка груза на складе назначения</p>
      </div>
    </div>
  </div>
</div>

<hr className="border-gray-200 my-8" />

{/* Text Section */}
<div className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    <h2 className="text-2xl font-bold mb-8 text-[#0A5225]">
      Проектная логистика – доставка высокой сложности под ключ
    </h2>
    <p className="text-gray-700 leading-relaxed mb-6">
      Перевозка негабаритного груза с полным циклом мероприятий – процесс, требующий особых навыков и высокой квалификации сотрудников. Great Steppe Logistics успешно разрабатывает подобные проекты и осуществляет доставку грузов в труднодоступные регионы. Организация доставки крупногабаритных, неформатных или тяжелых элементов (так называемый "тяжелый подъем") требует наличия специальных транспортных средств, правильной и тщательной подготовки маршрута, организации перевозок по строго определенным требованиям и техническим условиям. Перевозка планируется как по конкретным параметрам груза, так и по маршруту следования.
    </p>
    <p className="text-gray-700 leading-relaxed mb-6">
      Проектная логистика – это исключительно эффективная сфера транспорта и элита среди логистических решений, даже если принять во внимание широкое понимание негабаритные перевозки. Это не простая перевозка, как, например, перевозка экскаватора шириной 3 метра из пункта А в пункт Б, а сложный процесс, в котором задействовано множество специалистов и требуется знание ряда правил и ограничений. Требуется планирование, оценка рисков, подготовка документации, разрешений и строгая координация при осуществлении перевозок.
    </p>
    <h3 className="text-xl font-bold mt-6 text-[#0A5225]">
      Что такое проектный груз?
    </h3>
    <p className="text-gray-700 leading-relaxed mb-6">
      Негабаритный транспорт чаще всего касается перевозки крупных промышленных конструкций, таких как:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
      <li>для энергетики – генераторы, турбины, роторы, трансформаторы;</li>
      <li>для химической промышленности – реакторы, холодильные камеры;</li>
      <li>тяжелый груз – модули, фильтры, прессы, станки;</li>
    </ul>
    <p className="text-gray-700 leading-relaxed mt-6">
      с участием различного транспорта, например, морского, автомобильного, железнодорожного, и связанных с ними перегрузок.
    </p>
    <p className="text-gray-700 leading-relaxed mt-6">
      Наибольшую сложность при выполнении подобных заказов представляет количество факторов, влияющих на задачу. К ним относятся:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
      <li>тип груза;</li>
      <li>назначенный маршрут;</li>
      <li>тяжелое оборудование;</li>
      <li>место и условия погрузки;</li>
      <li>место и условия разгрузки;</li>
      <li>погода и сезон;</li>
      <li>безопасность груза и персонала;</li>
      <li>бюджет.</li>
    </ul>
    <p className="text-gray-700 leading-relaxed mt-6">
      Большинство из этих предметов являются фиксированными и определёнными условиями — груз, маршрут и оборудование. Безопасность же основана на тщательных расчётах и поддержке лучших технологий. Соответствующая методология может быть разработана на основе того, что можно назвать «критическими точками».
    </p>
  </div>
</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectiveServices;
