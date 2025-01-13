import React from 'react';
import Footer from "../Footer/Footer";

const Contacts = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative text-white h-[40vh]" style={{ backgroundColor: "#0A5225" }}>
  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
  <div className="relative flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold">КОНТАКТЫ</h1>
      <div className="mt-2 h-1 w-16 bg-green-600 mx-auto"></div>
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
                src="https://www.google.com/maps?q=43.25156659873732,76.93376998601416&z=17&output=embed"
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
              <p className="mb-2 text-center md:text-left">+7 (701) 536 78 73</p>
              <p className="mb-4 text-center md:text-left">info@gslog.kz</p>
              <div className="mt-2 h-1 w-16 bg-green-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contacts;
