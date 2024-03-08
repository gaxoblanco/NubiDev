import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/AppContex";

import { Price, Parrafo } from "../../css/styles";

export const CardPrice = () => {
  const { state, itemData, setItemData } = useContext(AppContext);

  // suponiendo que options existe - convierto el objeto img en un array para poder iterar
  const options =
    itemData.options && typeof itemData.options === "object"
      ? Object.entries(itemData.options).map(([_, value]) => value)
      : null;

  // console.log("options", options);

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
      <div className="py-4 border-solid border-b-2 border-background">
        {/* agregar la variable que define si se entrega o no en el dia */}
        <p>Entrega en el dia</p>
      </div>
      <section className="py-4 border-solid border-b-2 border-background">
        <p className="text-lg font-medium text-text">
          Cantidad minima por caja
        </p>
        <a className="text-2xl font-semibold pl-4">10 u - $120</a>
      </section>
      <section className="pt-4">
        <Price is40={true} isBold={true}>
          $100
        </Price>
      </section>
      {/* variacion de color/opcion suponiendo que existe */}
      {Array.isArray(options) ? (
        <section className="py-4 border-solid border-b-2 border-background">
          <h3 className="mb-2">Variacion</h3>
          {/* listado de imgs con la imagen de las variaciones  */}
          <div className="flex gap-4 bg-[#FBD5CA] p-4 rounded-xl min-w-[90px] mb-6 place-content-evenly">
            {options.map((option, index) => (
              <img
                key={index}
                src={option.img}
                alt={option.value} // paso el value como un alt para personas con lectores de pantalla
                className={`w-12 h-12 rounded-lg cursor-pointer aspect-square`}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.zIndex = "1";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.zIndex = "0";
                }}
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
      ) : null}

      {/* detalles del proceso y medios de pago */}
      <section className="">
        <h3>Variacion</h3>
        {/* button para abrir el modal y agregar N* podrutos al pedido */}
      </section>
    </article>
  );
};
