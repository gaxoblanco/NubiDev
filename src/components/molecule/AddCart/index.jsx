import React, { useContext, useState, useEffect } from "react";
import { AddProduct } from "../../atom/AddProduct/index";
import { Btn } from "../../css/Button";
import { Price, Parrafo, Icon } from "../../css/styles";
import { AppContext } from "../../../context/AppContex";

export const AddCart = ({ units, setUnits, itemData }) => {
  const { state, addToCart, edditToCart } = useContext(AppContext);

  //valido que options existe y lo convierto en array
  const options =
    itemData.options && typeof itemData.options === "object"
      ? Object.entries(itemData.options).map(([_, value]) => value)
      : null;

  //unidades y precio total segun unidades
  const [unit, setUnit] = useState(1);
  const [selectOptions, setSelectOptions] = useState([]); // Estado para almacenar las opciones seleccionadas

  const item = {
    _id: itemData._id,
    totalPrice: itemData.price,
    itemData: {
      ...itemData,
      options: selectOptions.map((option) => ({
        value: option.value,
        unit: option.unit,
        img: option.img,
      })), // Mantenemos solo el valor y la imagen de las opciones
    },
  };

  // Declara un estado para totalUnits
  // const [totalUnits, setTotalUnits] = useState(0);
  const [totalUnits, setTotalUnits] = useState([]);

  //agrego al carrito itemData
  const handleAddToCart = (selectOptions) => () => {
    console.log("handleAddToCart", selectOptions); // obengo un array de opciones sobre el itemProduct
    addToCart(item); // pasar selectOptions en lugarde item ----------------------------------------------------------------
    setUnits(false);
  };
  const handleEdditToProduct = (item) => () => {
    edditToCart(item);
    setUnits(false);
  };
  const [optionWorking, setOptionWorking] = useState({});
  // userEfect para un console log donde veo el selectOptions
  useEffect(() => {
    if (selectOptions[0]) {
      console.log("useEffect- selectOptions", selectOptions);

      const newTotalUnits = {}; // Creamos un nuevo objeto para actualizar el estado totalUnits

      // Recorremos las opciones seleccionadas
      selectOptions.forEach((option) => {
        // Calculamos el precio total para cada opción
        const totalPrice = option.price * option.unit;
        // Actualizamos el estado newTotalUnits usando el id de la opción como clave
        newTotalUnits[option.value] = totalPrice;
      });

      // Actualizamos el estado totalUnits con el nuevo objeto
      setTotalUnits(newTotalUnits);
    }
  }, [selectOptions, unit]);

  useEffect(() => {
    console.log("useEffect- totalUnits", totalUnits);
    console.log("itemData", itemData);
    console.log("chek", itemData["options"][1]["price"]);
  }, [totalUnits]);

  return (
    <span>
      <div className="bg-primary absolute h-full right-0 rounded-xl container-addCart p-4">
        <div className="container-addCart--img relative pt-12 border-solid border-b-2 border-background pb-8">
          <img
            className="img-productCardSmall mr-4 aspect-square"
            src={itemData.img.url1}
            alt={itemData.img.alt}
          />
          <p className="">
            {itemData.description ? itemData.description : itemData.nombre}
          </p>
          <button
            className="absolute top-0  right-0 z-10"
            type="button"
            onClick={() => setUnits(!units)}
          >
            <Icon
              isSecondaryColor={true}
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </Icon>
          </button>
        </div>
        {/* itero options */}
        {Array.isArray(options) ? (
          options.map((option, index) => (
            <div className="flex items-center gap-3 place-content-around my-4 border-solid border-b-2 border-background">
              <img
                key={index}
                className="img-productCardSmall mb-4 mr-4 w-14 h-14"
                src={option.img}
                alt={option.value}
              />
              <p className="mb-4 w-40">{option.value}</p>
              {/* atom - cantidad de productos */}
              <AddProduct
                setSelectOptions={setSelectOptions}
                selectOptions={selectOptions}
                option={option}
                optionWorking={optionWorking}
                setOptionWorking={setOptionWorking}
                stock={
                  itemData.stock == null
                    ? itemData.itemData.stock
                    : itemData.stock
                }
              />
              {/* atom - cantidad de productos */}
              <p className="text-lg mb-[-2.4rem]">
                ${itemData["options"][index]["price"]}
              </p>
              <p className="text-2xl">
                ${totalUnits[option.value] ? totalUnits[option.value] : 0}
              </p>
            </div>
          ))
        ) : (
          // si option no existe muestro img 1 y solo el unico elemento
          <div className="flex gap-3 place-content-around my-4">
            <img
              className="img-productCardSmall mb-4 mr-4 w-14 h-14"
              src={itemData.img["url1"]}
              alt={itemData.img["alt"]}
            />
            {/* atom - cantidad de productos */}
            <AddProduct
              unit={item.units != null ? item.units : unit}
              setSelectOptions={setSelectOptions}
              stock={
                itemData.stock == null
                  ? itemData.itemData.stock
                  : itemData.stock
              }
            />
            {/* <Price>${item.totalPrice}</Price> */}
          </div>
        )}
        <Btn
          wSize={"300"}
          isGreen={true}
          is22={true}
          type="button"
          onClick={handleAddToCart(selectOptions)}
        >
          Agregar al Carrito
        </Btn>
        {/* <Btn 
                // wSize={100} 
                isGreen={false} 
                is22={true}
                type="button"
                onClick={handleEdditToProduct(item)}
                >Editar carrito
            </Btn> */}
      </div>
    </span>
  );
};
