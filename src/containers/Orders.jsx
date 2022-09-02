import React from 'react'
import {OrdersList} from '../components/OrdersList';
import initialState from '../initialState';

export const Orders = () => {
  return (
    <div>
    <OrdersList         
      cartList={initialState.orders} 
      unitTotal={true}
    />
    </div>
  )
}
