import React, {useContext} from 'react'
import {ProductCard} from '../ProductCard';
import {AppContext} from '../../context/AppContex';

export const ProductList = () => {
  const {state, addToCart} = useContext(AppContext);
  const {products} = state;

  const handleAddToCart = product => () =>{
    addToCart(product);
  }
  return (
    <div>
        <div>
            {products.map(product =>(
                <ProductCard 
                  key={product._id} 
                  product={product} 
                  handleAddToCart={handleAddToCart}
                  />
            ))}
        </div>
    </div>
  )
}
