import React, {useContext, useState} from 'react';
import {CartCard} from '../CartCard';
import {AddCart} from '../AddCart';
import {Price} from '../css/styles';
import {AppContext} from '../../context/AppContex';


export const CartList = ({Off}) => {
  const {state} = useContext(AppContext);
  const [units, setUnits] = useState(false);
  const {cart} = state;

  const [itemData, setItemData] = useState({})

  const handleSumTotal = () =>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue.totalPrice;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

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
        <Price 
          className="w-3/4 text-right"
          isBold={true}>
          {`Precio Total: $ ${handleSumTotal()}`}
        </Price>
    </div>
  )
}
