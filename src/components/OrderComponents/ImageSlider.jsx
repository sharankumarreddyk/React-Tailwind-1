import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container relative w-fit h-100 overflow-hidden">
      <div
        className="slides flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide w-fit flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full "
            />
          </div>
        ))}
      </div>
      <button
        id="prev"
        className="absolute top-1/2 left-0 -translate-y-1/2 button-bg text-black bg-gray-200 hover:bg-gray-300 rounded-full p-2 opacity-80 text-xl"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        id="next"
        className="absolute top-1/2 right-0 -translate-y-1/2 button-bg text-black bg-gray-200 hover:bg-gray-300 rounded-full p-2 opacity-80 text-xl"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div id="dotsContainer" className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-gray-700 opacity-100"
                : "bg-gray-400 opacity-30"
            }`}
            onClick={() => goToSlide(index)} // Make dots clickable
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
