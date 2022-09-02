import React, {useContext, useState} from 'react'
import {AppContext} from '../../context/AppContex';
import {CartCard} from '../CartCard';

export const OrderDetail = ({product, unitsProduct, setUnits, units}) => {
  const {state} = useContext(AppContext);
  const {orders} = state;
  // const {productList} = orders.productList[0] ? orders : [];

  console.log('orderDetail - product', product);


  return (
    <div>
    <p>nombre</p>
    <p>Email</p>

    {product.map(product =>(
        <CartCard 
          key = {product._id} 
          product = {product} 
          off= {true}
        />
      ))}

      <button type="button">Modiicar</button>
    </div>
  )
}
