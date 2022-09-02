import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContex';
import {Btn} from '../css/Button';
import {OrdersCard}  from '../OrdersCard';

export const OrdersList = () => {

  const {state} = useContext(AppContext);
  const {orders} = state;

  return (
    <div>
      {orders.map(product =>(
        <OrdersCard 
          key = {product._id} 
          product = {product} 
          off = {Off}
          unitsProduct = {unitsProduct}
          setUnits = {setUnits}
          units = {units}
        />
      ))}

      <Btn 
        isGreen={true}
        isBig={true}
        is22={true}
      >
        Seguir Comprando
      </Btn>
    </div>
  )
}
