import React, { useContext, useState, useEffect } from "react";
import { ProductCard } from "../../molecule/ProductCard";
import { AddCart } from "../../molecule/AddCart";
import { AppContext } from "../../../context/AppContex";
import { activeFilter } from "../../atom/activeFilter";
import { filterCard } from "../../atom/filterCard";

import "./style.css";

export const ProductList = () => {
  const [units, setUnits] = useState(Boolean);
  const { state, itemData, setItemData } = useContext(AppContext);
  const { products } = state;
  const { searchPro } = state;

  //actualiza la cantidad deseada del item -- Bug que al guardas crea un objeto nuevo en lugar de actualizar
  const unitsProduct = (ItemUnits) => {
    setItemData(ItemUnits);
  };

  const [isActive1, setIsActive1] = React.useState(false);
  const [isActive2, setIsActive2] = React.useState(false);
  const [isActive3, setIsActive3] = React.useState(false);

  // Puedes definir una función de manejo para cada instancia
  const handleToggle1 = () => {
    setIsActive1(!isActive1);
  };

  const handleToggle2 = () => {
    setIsActive2(!isActive2);
  };

  const handleToggle3 = () => {
    setIsActive3(!isActive3);
  };

  let imgSize = 260;
  let boolean = false;

  const imageSize = (index) => {
    if (boolean) {
      imgSize = index % 2 === 0 ? 240 : 340;
      boolean = index % 2 === 0 ? true : false;

      // return imgSize;
    } else {
      imgSize = index % 2 === 0 ? 340 : 240;
      boolean = index % 2 === 0 ? false : true;

      // return imgSize;
    }
  };

  return (
    <article className="page-list-products mx-8">
      {/* filtro de productos */}
      <section className="shadow-component w-72 peach-fuzz--300 bg-[#FBD5CA] rounded-xl max-h-[600px] p-5">
        <h2 className="mb-4">Filtrar productos</h2>
        <form className="search-form mb-4 relative text-base">
          <input
            type="text"
            placeholder="Buscar productos"
            className="p-1 mr-[-2rem] rounded-md w-full accent-secondary"
          />
          <button type="submit" className="w-8 p-1.5 absolute">
            <svg fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <div>
          {activeFilter("Promociones", isActive1, handleToggle1)}

          {activeFilter("Blanco", isActive2, handleToggle2)}
          {activeFilter("Negro", isActive3, handleToggle3)}
          {activeFilter("Color", isActive3, handleToggle3)}

          {activeFilter("En stock", isActive3, handleToggle3)}
          {activeFilter("Entrega Hoy", isActive3, handleToggle3)}
        </div>
      </section>

      {/* listado de productos */}
      <section className="product-list pt-4 mb-28 flex flex-wrap justify-center pb-4">
        {(searchPro.length < 0 ? searchPro : products).map((product, index) => {
          {
            /* const value = (index % 2) === 0 ? 260 : 340; */
          }
          imageSize(index);
          return (
            <>
              <ProductCard
                key={product._id}
                product={product}
                units={units}
                setUnits={setUnits}
                unitsProduct={unitsProduct}
                imgSize={imgSize}
              />
            </>
          );
        })}
      </section>

      <div>
        {units ? (
          <div
            event
            className="fixed top-0 w-full h-full bg-transparent grid left-0"
          >
            <AddCart itemData={itemData} setUnits={setUnits} units={units} />
          </div>
        ) : null}
      </div>
    </article>
  );
};
