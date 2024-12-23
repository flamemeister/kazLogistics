import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img src="/path-to-logo.png" alt="Kazakh Trans Trade" className="mx-auto md:mx-0 mb-4" />
            <p className="text-sm leading-relaxed">
              KazakhTransTrade is an international transport and logistics company that has been operating since 2020 and provides a full range of services for the delivery and storage of cargo. We carry out cargo transportation in Kazakhstan and the CIS countries. Also from China and Southeast Asia to Kazakhstan.
            </p>
          </div>

          {/* Working Hours */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Working hours</h3>
            <ul className="text-sm space-y-2">
              <li>Mon - Fri: <span className="text-green-500">9:00 - 18:00</span></li>
              <li>Dinner: <span className="text-green-500">13:00 - 14:00</span></li>
              <li>Sat-Sun: <span className="text-green-500">Day off</span></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Contacts</h3>
            <p className="text-sm">
              Kazakhstan, Almaty city, Mynbaev street 151, BC "VERUM", 4th floor, office 57, 050046
            </p>
            <p className="text-sm mt-2">+7 727 352 88 80</p>
            <p className="text-sm">info@kazakhtranstrade.kz</p>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Statistics */}
        <div className="flex flex-wrap justify-around text-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <div>
            <h4 className="text-green-500 text-xl font-bold">100+</h4>
            <p>Corporate Clients</p>
          </div>
          <div>
            <h4 className="text-green-500 text-xl font-bold">2567</h4>
            <p>Successfully Completed Orders</p>
          </div>
          <div>
            <h4 className="text-green-500 text-xl font-bold">1000+</h4>
            <p>Completed LTL, FTL Transportations</p>
          </div>
          <div>
            <h4 className="text-green-500 text-xl font-bold">178</h4>
            <p>Rented Cars</p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-8">
          &copy; All Rights Reserved. KazakhTransTrade.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
