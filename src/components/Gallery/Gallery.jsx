import React, { useState } from "react";
import Footer from "../Footer/Footer";

// Hero background image
import heroBg from "../../assets/images/image4.jpg";

// Example gallery images (use your actual paths)
import gallery1 from "../../assets/image1.jpeg";
import gallery2 from "../../assets/image1.jpeg";
import gallery3 from "../../assets/image1.jpeg";
import gallery4 from "../../assets/image1.jpeg";

// Icons from Heroicons (optional)
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const GalleryPage = () => {
  // Define gallery items: title + image
  const galleryItems = [
    {
      title: "Логистика грузовых перевозок",
      imageUrl: gallery1,
    },
    {
      title: "Морские грузоперевозки",
      imageUrl: gallery2,
    },
    {
      title: "Авиалогистика",
      imageUrl: gallery3,
    },
    {
      title: "Железнодорожные перевозки",
      imageUrl: gallery4,
    },
  ];

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <div className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
              ГАЛЕРЕЯ
            </h1>
            <div className="mt-2 h-1 w-16 bg-green-600 mx-auto" />
          </div>
        </div>
      </div>

      {/* ===== GALLERY CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Title / Intro (optional) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Наши направления</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Посмотрите на различные сферы нашей логистической деятельности
          </p>
          <div className="mt-2 h-1 w-16 bg-green-600 mx-auto"></div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group h-64 md:h-80 lg:h-96 overflow-hidden rounded-md shadow-sm cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center
                           bg-black bg-opacity-10 group-hover:bg-opacity-40 
                           transition-colors duration-300"
              >
                <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide opacity-100 group-hover:opacity-100">
                  {item.title}
                </h3>
                <div className="mt-1 h-[2px] w-12 bg-green-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX / SLIDER ===== */}
      {lightboxOpen && currentItem && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Prevent lightbox close when clicking on image container */}
          <div className="relative max-w-4xl w-full mx-4 bg-black" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Left arrow */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white px-2 hover:text-gray-300"
              onClick={prevImage}
            >
              <ChevronLeftIcon className="h-8 w-8" />
            </button>

            {/* Right arrow */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white px-2 hover:text-gray-300"
              onClick={nextImage}
            >
              <ChevronRightIcon className="h-8 w-8" />
            </button>

            {/* Large image */}
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              className="w-full h-auto object-contain"
            />

            {/* Caption + index */}
            <div className="p-4 text-white flex items-center justify-between">
              <div className="font-semibold">
                {currentItem.title}
              </div>
              <div className="text-sm text-gray-300">
                {selectedIndex + 1} / {galleryItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
