import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContex';
import {Link} from 'react-router-dom'
import {Btn} from '../css/Button';
import {Parrafo} from '../css/styles';
import {OrdersCard}  from '../OrdersCard';

export const OrdersList = () => {
  const {state} = useContext(AppContext);
  const {orders} = state;

    //obtengo un array: buyer, productList
  // console.log('orders-productList', orders);

  return (
    <div>
      {orders.map(product =>(
        <OrdersCard 
          key = {product.id} 
          product = {product} 
          paid = {product.paid}
          submit = {product.submit}
        />
      ))}

      <Link to="/">
        <Btn 
          isGreen={true}
          wSize={"100"}
          is22={true}
        >
          Seguir Comprando
        </Btn> 
      </Link>
    </div>
  )
}
