import React from 'react'
import initialState from '../initialState';
import {ProductList} from '../components/ProductList';
import {ButtonCart} from '../components/ButtonCart';

export const Home = () => {
  return (
    <>
      <ProductList products={initialState.products} />
      <ButtonCart />
    </>
  )
}
