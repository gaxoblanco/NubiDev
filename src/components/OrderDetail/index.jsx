import React, {useContext, useState} from 'react'
import {AppContext} from '../../context/AppContex';
import {Btn} from '../css/Button';
import {Parrafo, Price} from '../css/styles'
import {CartCard} from '../CartCard';

export const OrderDetail = ({product, name, email}) => {
  const {state} = useContext(AppContext);
  const {orders} = state;
  // const {productList} = orders.productList[0] ? orders : [];

  console.log('orderDetail - product', name);

  //precio total del pedido
  const Total = () =>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue.totalPrice;
    const sum = product.reduce(reducer, 0);
    return sum;
  };


  return (
    <div>
      <div className="flex">
        <Parrafo
          className="mt-2"
          isBold={true} 
          isGray={true}
          marginR={true}>
            Nombre:
        </Parrafo>
        <Parrafo
          isBold={true} 
          is20={true}>
            {name}
        </Parrafo>
      </div>
      <div className="flex mb-4">
        <Parrafo
          className="mt-2"
          isBold={true} 
          isGray={true}
          marginR={true}>
            Correo:
        </Parrafo>
        <Parrafo
          isBold={true} 
          is20={true}>
            {email}
        </Parrafo>
      </div>


      {product.map(product =>(
          <CartCard 
            key = {product._id} 
            product = {product} 
            off= {true}
          />
        ))}

      <div className="grid grid-cols-3 ">
        <Btn 
          className="m-2"
          type="button">
            Modificar Orden
          </Btn>
        <div></div>
        <Price className="flex" is20={true} isBold={true}>
          <Parrafo 
            className="mt-8 flex-auto text-right"  
            marginR={true}
            isBold={true} 
            isGray={true}>
              Total
          </Parrafo>         
            ${Total()}
        </Price>
      </div>
    </div>
  )
}
