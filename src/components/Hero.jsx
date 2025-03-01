import React, { useState } from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/grey-leather-coat.jpg",
    "/images/spring-wardrope.jpg",
    "/images/white-sneakers.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ];

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {/* Hero Image */}
      <img
        src={images[currentImageIndex]}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 text-black text-center">
        <h1 className="text-4xl font-bold text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
          Welcome to Our Store
        </h1>
      </div>

      <button
        onClick={goToPreviousImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
      >
        <FiArrowLeftCircle className="text-gray-500 cursor-pointer" size={32} />
      </button>
      <button
        onClick={goToNextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition hover:bg-chocolateBrown"
      >
        <FiArrowRightCircle
          className="text-gray-500 cursor-pointer"
          size={32}
        />
      </button>

      <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 px-6 py-2 rounded cursor-pointer hover:bg-opacity-75 transition-all hover:bg-chocolateBrown hover:text-white duration-500">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
