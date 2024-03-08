// import { list } from 'postcss';
import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../../css/Button";
import { Price, Parrafo, StateStock, OnOff } from "../../css/styles";

export const ProductCard = ({
  product,
  unitsProduct,
  setUnits,
  units,
  imgSize,
}) => {
  // si imgSize aun no existe cargo 100
  // imgSize = imgSize ? imgSize : 100;

  return (
    <div
      className={`shadow-component bg-[#FFC39E] relative duration-500 ease-in-out hover:scale-105 p-4 m-4 rounded-2xl `}
      // agrego un style width
      style={{ width: imgSize + "px" }}
    >
      <Link
        onClick={() => unitsProduct(product)}
        className="absolute h-full w-10/12"
        to="/detalleproducto"
      ></Link>
      <section className="product-card-container grid rounded-lg">
        <OnOff
          className="bg-cuarto absolute px-4 rounded-lg"
          isOff={product.discoutOffert ? false : true}
        >
          <p className="decoration-slate-200">{product.discoutOffert} % Off</p>
        </OnOff>
        <figure>
          <img
            className="aspect-square rounded-lg min-h-52"
            src={product.img.url1}
            alt={product.img.alt}
            width={100 + "%;"}
            height={100 + "%;"}
          />
        </figure>
        <div
          className="size-full min-h-52 h-full flex flex-col justify-between pt-4"
          style={
            imgSize == 240
              ? {
                  display: "grid",
                  gridTemplateRows: "4.2fr 1fr",
                  gridGap: "1.4rem",
                }
              : {}
          }
        >
          <Parrafo marginR={true} is20={true} positionLeft={true}>
            {product.name}
          </Parrafo>
          <div
            className="flex text-left relative"
            style={imgSize == 240 ? { width: "200px" } : {}}
          >
            <Price>${product.price}</Price>
            <div className="absolute right-1 bottom-1">
              <StateStock
                className="ml-8"
                inStock={product.stock ? true : false}
              >
                {product.stock ? "En Stock" : "Sin Stock"}
              </StateStock>
              <Btn
                className="z-10"
                type="button"
                isGreen={true}
                onClick={() => {
                  setUnits(!units), unitsProduct(product);
                }}
              >
                Agregar
              </Btn>
            </div>
          </div>
        </div>
      </section>
      <a href="#" className="absolute top-[0.9rem] right-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="42"
          fill="currentColor"
          className="bi bi-bookmark-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
        </svg>
      </a>
    </div>
  );
};
