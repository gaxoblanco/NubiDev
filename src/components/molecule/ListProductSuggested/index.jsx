import React, { useState, useRef } from "react";
import { ProductSuggested } from "../../atom/ProductSuggested";

export const ListProductSuggested = ({ products }) => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  //funcion para la posicion del mouse
  const handleMouseDown = (e) => {
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };
  // capturo si el mouse se mueve en x
  const handleMouseMove = (e) => {
    setTimeout(() => {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 0.6; // Adjust scrolling speed as needed
      containerRef.current.scrollLeft = scrollLeft - walk;
    }, 200); //
  };
  // capturo si el mouse se mueve en x
  const handleMouseUp = (e) => {
    const currentX = e.pageX - containerRef.current.offsetLeft; // Get the current position of the mouse
    setStartX(currentX);
  };

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-scroll mt-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseDown}
      onMouseLeave={handleMouseUp}
    >
      <div className="flex gap-4">
        {products.map((product) => (
          <ProductSuggested key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
