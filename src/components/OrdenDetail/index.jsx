import React, {useContext, useState} from 'react'
import {AppContext} from '../../context/AppContex';
import {CartCard} from '../CartCard';

export const OrdenDetail = () => {
  const {state} = useContext(AppContext);
  const {cart} = state;

  console.log(product);


  return (
    <div>
    <p>nombre</p>
    <p>Email</p>

    {cart.map(product =>(
        <CartCard 
          key = {product._id} 
          product = {product} 
          off = {true}
          unitsProduct = {unitsProduct}
          setUnits = {setUnits}
          units = {units}
        />
      ))}

      <button type="button">Modiicar</button>
    </div>
  )
}
