import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContex";
import { Btn } from "../components/css/Button";
import {
  Price,
  Parrafo,
  StateStock,
  IconStar,
  OnOff,
} from "../components/css/styles";

import { AddCart } from "../components/molecule/AddCart";
import { ProdcutDetail } from "../components/ProductDetail";
import { ProductSuggested } from "../components/ProductSuggested";
import { ButtonCart } from "../components/atom/ButtonCart";

import { Carousel } from "../components/molecule/Carousel";
import { CardPrice } from "../components/molecule/CardPrice";

export const ProductDetail = () => {
  const { state, itemData, setItemData } = useContext(AppContext);
  const [units, setUnits] = useState(Boolean);
  const { products } = state;

  return (
    <div className="grid place-items-center h-[1500px]">
      <div className="px-[6rem] w-full grid grid_tc-21 gap-12 place-items-center">
        <Carousel />

        {/* Card para realizar la compra dentro del detalle del producto */}
        <CardPrice />
      </div>
      <div className="flex overflow-x-scroll w-11/12 mt-4">
        <div className="flex gap-4">
          {products.map((product) => (
            <ProductSuggested key={product._id} product={product} />
          ))}
        </div>
      </div>
      <ButtonCart />

      <div>
        {units ? (
          <div
            event
            className=" top-0 left-0 w-full h-full bg-transparent grid place-items-center"
          >
            <AddCart itemData={itemData} setUnits={setUnits} units={units} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
