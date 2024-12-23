import React from 'react';
import backgroundImage from '../../assets/images/image3.jpg';
import Footer from "../Footer/Footer";

const Contacts = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">КОНТАКТЫ</h1>
            <div className="mt-2 h-1 w-16 bg-green-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Map Section */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.9881797601813!2d76.93142021548382!3d43.25161707913508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ec4d7d86521%3A0xdeadbeef12345678!2z0JrQsNC30LDQstCw0YDQuNGG0LAg0J7QvNC40LnRgdGC0LDRjyDQn9GA0LXQvdC40L3QsCwg0JrQvtCy0LAsINCc0L7RgdC60LLQsCwg0JDQvdC10LrRgdC40Y8!5e0!3m2!1sen!2skz!4v1700000000000!5m2!1sen!2skz&marker=43.251617,76.933609"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="text-gray-800 flex flex-col items-center md:items-start md:pl-8">
              <h2 className="text-2xl font-bold mb-4">КОНТАКТЫ</h2>
              <p className="mb-2 text-center md:text-left">
                Казахстан, город Алматы, Алмалинский район, проспект Сейфуллина, БЦ «Алтын Заман», дом 498, второй этаж, офис 201
              </p>
              <p className="mb-2 text-center md:text-left">Почтовый индекс: 050012</p>
              <p className="mb-2 text-center md:text-left">+7 (727) 352 88 80</p>
              <p className="mb-4 text-center md:text-left">info@kazakhtranstrade.kz</p>
              <div className="mt-2 h-1 w-16 bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ</h2>
          <p className="text-gray-600 mb-6">
            Заполните форму, чтобы получить бесплатную консультацию от наших специалистов. Мы свяжемся с вами в ближайшее время и ответим на все ваши вопросы.
          </p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Имя"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Номер телефона"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition duration-300"
            >
              ОТПРАВИТЬ
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contacts;
