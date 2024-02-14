import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContex";

export const Carousel = () => {
  const { state, itemData, setItemData } = useContext(AppContext); // obtengo los datos del itemData - AppContext
  const [currentSlide, setCurrentSlide] = useState(0);

  // convierto el objeto img en un array para poder iterar
  const arrayImg = Object.entries(itemData.img)
    .filter(([key]) => key !== "alt") // excluyo el elemento alt
    .map(([_, value]) => value);

  const showSlide = (index) => {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    carouselItems.forEach((item, idx) => {
      item.classList.toggle("hidden", idx !== index);
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? arrayImg.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === arrayImg.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    showSlide(currentSlide);
  }, [currentSlide]);

  return (
    <div
      id="default-carousel"
      className="flex gap-4 place-content-evenly"
      data-carousel="slide"
    >
      {/* list img */}
      <div className="grid gap-6 bg-[#FBD5CA] p-4 rounded-xl min-w-[90px] place-content-evenly">
        {arrayImg.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            className={`w-14 h-14 rounded-lg cursor-pointer ${
              index === currentSlide
                ? "border-1 border-solid border-[#FFC39E] drop-shadow-md"
                : ""
            }`}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.zIndex = "1";
              setCurrentSlide(index);
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.zIndex = "0";
            }}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="relative w-68 flex">
        <div className="relative w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] overflow-hidden rounded-xl ">
          {arrayImg.map((imgUrl, index) => (
            <div
              key={index}
              className={`hidden duration-700 ease-in-out ${
                index === currentSlide ? "" : "opacity-0"
              }`}
              data-carousel-item
            >
              <img
                src={imgUrl}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {arrayImg.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
              disabled={index >= arrayImg.length}
            ></button>
          ))}
        </div>
        {/* button return */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-end justify-center h-full px-4 cursor-pointer group focus:outline-none pb-4"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-red dark:group-focus:ring-red-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* buton next */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-end justify-center h-full px-4 cursor-pointer group focus:outline-none pb-4"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};
