import React from 'react'
import {Form} from '../components/Form';
import {CartList} from '../components/CartList';
import initialState from '../initialState';

export const Confirm = () => {
  return (
    <>
      <Form /> // problema a repara, noi son p son input ..... 
      <CartList 
        cartList={initialState.cartList} 
        Off={true}
      />
    </>
  )
}
