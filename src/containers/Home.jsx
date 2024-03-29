import React from 'react'
import {Helmet} from 'react-helmet'
import initialState from '../initialState';
import {ProductList} from '../components/organism/ProductList';
import {ButtonCart} from '../components/atom/ButtonCart';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>NubiStore</title>
      </Helmet>
      <ProductList 
        products={initialState.products} />
      <ButtonCart />
    </>
  )
}
