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
                  is20={true}
                  isBold={true}
                  positionLeft={true}
                >{itemData.name}</Parrafo>
                <Parrafo
                  className='mt-12'
                  isGray={true}
                  marginR={true}
                >cu</Parrafo>
                <Price
                  is40={true}
                  isBold={true}
                >{itemData.price}</Price>
            </div>
            <div className="productDetail-Section mb-4">
                <Parrafo
                  marginR={true}
                  positionLeft={true}
                >{itemData.intro}</Parrafo>
                <StateStock
                  className='mt-2 mr-2'
                  inStock={itemData.stock ? true : false} 
                >Stock</StateStock>
                <Parrafo
                  is20={true}
                  isBold={true}
                  isGray={true}
                >{itemData.stock}</Parrafo>
            </div>

            <ProductDetailPaged />

    </div>
  )
}
