import React, { useContext, useState, useEffect } from "react";
import { Price, Parrafo } from "../../css/styles";

export const CardPrice = () => {
  // useEffect para posicionar el informationModal en fixed
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fixedDiv = document.getElementById("informationModal");

      if (scrollY <= 260) {
        fixedDiv.classList.remove("fixed");
        fixedDiv.classList.remove("w-[26rem]");
        fixedDiv.classList.add("w-full");
      } else {
        fixedDiv.classList.add("fixed");
        fixedDiv.classList.add("w-[26rem]");
        fixedDiv.classList.remove("w-full");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <article
      className="grid w-full rounded-xl bg-[#FFC39E] top-8 right-[6rem] p-3"
      id="informationModal"
    >
      <div className="py-4 border-solid border-b-2 border-[#FFF6E5]">
        {/* agregar la variable que define si se entrega o no en el dia */}
        <p>Entrega en el dia</p>
      </div>
      <section className="py-4 border-solid border-b-2 border-[#FFF6E5]">
        <p className="text-lg font-medium text-[#5E483A]">
          Cantidad minima por caja
        </p>
        <a className="text-2xl font-semibold pl-4">10 u - $120</a>
      </section>
      <section className="pt-4">
        <Price is40={true} isBold={true}>
          $100
        </Price>
      </section>
      {/* variacion de color/opcion */}
      <section className="py-4 border-solid border-b-2 border-[#FFF6E5]">
        <h3 className="mb-2">Variacion</h3>
        {/* listado de imgs con la imagen de las variaciones  */}
        <div className="flex gap-4 bg-[#FBD5CA] p-4 rounded-xl min-w-[90px] mb-6 place-content-evenly">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={`https://picsum.photos/50?random=${index}`}
              className={`w-12 h-12 rounded-lg cursor-pointer`}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.zIndex = "1";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.zIndex = "0";
              }}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
        {/* button para abrir el modal y agregar N* podrutos al pedido */}
        <button
          className="px-8 py-2 bg-[#fff] rounded-lg font-medium w-full"
          onClick={() => {
            setUnits(!units);
          }}
          alt="Agregar al pedido"
        >
          Agregar al pedido
        </button>
      </section>
      {/* detalles del proceso y medios de pago */}
      <section className="">
        <h3>Variacion</h3>
        {/* button para abrir el modal y agregar N* podrutos al pedido */}
      </section>
    </article>
  );
};
