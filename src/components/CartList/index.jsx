import React, {useContext, useState} from 'react';
import {CartCard} from '../CartCard';
import {AddCart} from '../AddCart';
import {OnOff, Price, Parrafo} from '../css/styles';
import {AppContext} from '../../context/AppContex';


export const CartList = ({Off, precioTotal, unitTotal}) => {
  const {state} = useContext(AppContext);
  const [units, setUnits] = useState(false);
  const {cart} = state;

  const [itemData, setItemData] = useState({})

  const handleSumTotal = () =>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue.totalPrice;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const handleSumUnits = ()=>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue.units;
    const sumUnits = cart.reduce(reducer, 0);
    return sumUnits;
  }

  const handleAddToCart = product => () =>{
    addToCart(product);
    setUnits(false) 
  }

  const unitsProduct = (ItemUnits) =>{
    setItemData (ItemUnits);
  }

  return (
    <div className="grid place-items-center">


        <div className="absolute z-10 bg-slate-400">
          {units ? 
            <AddCart 
              handleAddToCart = {handleAddToCart}
              itemData = {itemData}
              setUnits = {setUnits}
            /> : null}
        </div>
    
        <div className="grid place-items-center w-full">
            {cart.map(product =>(
                <CartCard 
                  key = {product.itemData._id} 
                  product = {product} 
                  off = {Off}
                  unitsProduct = {unitsProduct}
                  setUnits = {setUnits}
                  units = {units}
                />
            ))}
        </div>
        <OnOff isOff={precioTotal}>
          <Price 
            className="w-full text-right "
            isBold={true}>
            {`Precio Total: $${handleSumTotal()}`}
          </Price>
        </OnOff>
        <OnOff className="w-full" isOff={unitTotal}>
          <Parrafo 
            className="w-1/3 text-left mt-2"
            isBold= {true}
            is16={true}>
            Total de la Orden
          </Parrafo>

          <div className="grid grid-cols-2 w-full mt-2">
            <div className="flex ml-4">
              <Price isBold= {true}>{handleSumUnits()}</Price>
              <Parrafo 
                is16={true}
                className="mt-6 pl-2">
                Unidades
              </Parrafo>
            </div>
            <div className="grid grid-cols-2 mr-12">
              <Parrafo 
                is16={true}
                className="mt-6 ">
                Total:
              </Parrafo>
              <Price isBold= {true}>${handleSumTotal()}</Price>
            </div>
          </div>
        </OnOff>
        
    </div>
  )
}
