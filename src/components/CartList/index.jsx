import React, {useContext} from 'react';
import {CartCard} from '../CartCard';

import {AppContext} from '../../context/AppContex';


export const CartList = ({Off}) => {
  const {state, removeFromCart} = useContext(AppContext);
  const {cart} = state;

  const handleSumTotal = () =>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue.precio;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="CartList">
        <div className="CartList-items">
            {cart.map(product =>(
                <CartCard 
                  key={product._id} 
                  product={product} 
                  off = {Off}
                />
            ))}
        </div>
    </div>
  )
}
