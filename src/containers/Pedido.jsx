import React from 'react'
import {Form} from '../components/Form';
import {CartList} from '../components/CartList'
import initialState from '../initialState';

export const Pedido = () => {
  return (
    <>
      <Form />
      <CartList 
        cartList={initialState.cartList} 
        off = {true}
      />
    </>
  )
}
