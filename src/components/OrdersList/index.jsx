import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContex';
import {Btn} from '../css/Button';
import {Parrafo} from '../css/styles';
import {OrdersCard}  from '../OrdersCard';

export const OrdersList = () => {
  const {state} = useContext(AppContext);
  const {orders} = state;

    //obtengo un array: buyer, productList
  console.log('orders-productList', orders);

  return (
    <div>
      {orders.map(product =>(
        <OrdersCard 
          key = {1} 
          product = {product} 
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
