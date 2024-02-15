import React, { useContext, useState } from "react";
import { CartCard } from "../../molecule/CartCard";
import { AddCart } from "../../molecule/AddCart";
import { OnOff, Price, Parrafo } from "../../css/styles";
import { AppContext } from "../../../context/AppContex";

export const CartList = ({ Off, precioTotal, unitTotal }) => {
  const { state } = useContext(AppContext);
  const [units, setUnits] = useState(false);
  const { cart } = state;

  const [itemData, setItemData] = useState({});
  // setItemData(cart.)
  //functions
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.totalPrice;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const handleSumUnits = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.units;
    const sumUnits = cart.reduce(reducer, 0);
    return sumUnits;
  };

  const unitsProduct = (ItemUnits) => {
    setItemData(ItemUnits);
    // console.log('CartList Item data',itemData);
  };

  return (
    <div className="pt-4 grid place-items-center space-y-4 pb-4">
      <div className="grid place-items-center w-11/12">
        {cart.map((product) => (
          <CartCard
            key={product._id}
            product={product}
            off={Off}
            unitsProduct={unitsProduct}
            setUnits={setUnits}
            units={units}
          />
        ))}
      </div>
      <OnOff isOff={precioTotal}>
        <Price className="w-full text-right " isBold={true}>
          {`Precio Total: $${handleSumTotal()}`}
        </Price>
      </OnOff>
      <OnOff className="w-11/12" isOff={unitTotal}>
        <Parrafo className="w-1/3 text-left mt-2" isBold={true} is20={true}>
          Total de la Orden
        </Parrafo>

        <div className="grid grid-cols-2 mt-2 bg-slate-100 rounded-lg">
          <div className="flex ml-4">
            <Price isBold={true}>{handleSumUnits()}</Price>
            <Parrafo is20={true} className="mt-6 pl-2">
              Unidades
            </Parrafo>
          </div>
          <div className="grid grid-cols-2 mr-4">
            <Parrafo is20={true} className="mt-6 ">
              Total:
            </Parrafo>
            <Price isBold={true}>${handleSumTotal()}</Price>
          </div>
        </div>
      </OnOff>
      {units ? (
        <div
          event
          // onClick={()=>{setUnits(!units)}}
          className="fixed top-0 w-full h-full bg-transparent grid place-items-center p-50%"
        >
          <AddCart itemData={itemData} setUnits={setUnits} units={units} />
        </div>
      ) : null}
    </div>
  );
};
