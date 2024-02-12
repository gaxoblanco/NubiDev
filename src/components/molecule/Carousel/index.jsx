import React, { useEffect, useState } from "react";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    const carouselSlides = document.querySelectorAll(
      "[data-carousel-slide-to]"
    );
    const prevButton = document.querySelector("[data-carousel-prev]");
    const nextButton = document.querySelector("[data-carousel-next]");

    const showSlide = (index) => {
      carouselItems.forEach((item) => item.classList.add("hidden"));
      carouselSlides.forEach((slide) =>
        slide.setAttribute("aria-current", "false")
      );
      carouselItems[index].classList.remove("hidden");
      carouselSlides[index].setAttribute("aria-current", "true");
    };

    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
      );
    };

    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
      );
    };

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    showSlide(currentSlide);

    return () => {
      prevButton.removeEventListener("click", prevSlide);
      nextButton.removeEventListener("click", nextSlide);
    };
  }, [currentSlide]);

  return (
    <div id="default-carousel" className="flex gap-4" data-carousel="slide">
      {/* list img */}
      <div className="grid gap-4 bg-[#FBD5CA] p-4 rounded-xl min-w-[90px]">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={`https://picsum.photos/50?random=${index}`}
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
        <div className="relative w-[40vw] h-[40vw] overflow-hidden rounded-xl ">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`hidden duration-700 ease-in-out ${
                index === currentSlide ? "" : "opacity-0"
              }`}
              data-carousel-item
            >
              <img
                src={`https://picsum.photos/200?random=${index}`}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {[...Array(5)].map((_, index) => (
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
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-end justify-center h-full px-4 cursor-pointer group focus:outline-none pb-4"
          data-carousel-prev
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? 4 : prevSlide - 1
            )
          }
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
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-end justify-center h-full px-4 cursor-pointer group focus:outline-none pb-4"
          data-carousel-next
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 4 ? 0 : prevSlide + 1
            )
          }
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
