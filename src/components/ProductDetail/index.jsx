import React, {useContext, useState} from 'react'
import {AppContext} from '../../context/AppContex';
import {Btn} from '../css/Button';
import {Parrafo, Price, StateStock, OnOff, IconStar} from '../css/styles';
import {ProductDetailPaged} from '../../atoms/ProductDetailPaged';

export const ProdcutDetail = () => {
    const {state, itemData } = useContext(AppContext);
    

  return (
    <div className="productDetail w-11/12">
            <div className="productDetail-Section">
                <Parrafo
                  is16={true}
                  isBold={true}
                  positionLeft={true}
                >{itemData.nombre}</Parrafo>
                <Parrafo
                  className='mt-12'
                  isGray={true}
                  marginR={true}
                >cu</Parrafo>
                <Price
                  is40={true}
                  isBold={true}
                >{itemData.precio}</Price>
            </div>
            <div className="productDetail-Section">
                <Parrafo
                  positionLeft={true}
                >{itemData.intro}</Parrafo>
                <StateStock
                  className='mt-2 mr-2'
                  inStock={itemData.stock ? true : false} 
                >Stock</StateStock>
                <Parrafo
                  is16={true}
                  isBold={true}
                  isGray={true}
                >{itemData.stock}</Parrafo>
            </div>

            <ProductDetailPaged />

    </div>
  )
}
