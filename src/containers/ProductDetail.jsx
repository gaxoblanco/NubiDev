import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContex';
import {Btn} from '../components/css/Button';
import {Price, Parrafo, StateStock, IconStar, OnOff} from '../components/css/styles';

import {ProdcutDetail} from '../components/ProductDetail';
import {ProductSuggested} from '../components/ProductSuggested';
import {ProductDetailPaged} from '../atoms/ProductDetailPaged';;

export const ProductDetail = () => {
    const {state, itemData, setItemData } = useContext(AppContext);
    const {products} = state;

  return (
    <article className="grid place-items-center">
        <div className="max-w-6xl  grid place-items-center">
            <div className="relative ">
                <OnOff 
                    className="bg-cuarto absolute px-4 rounded-r-lg mt-4 "
                    isOff={itemData.precioOferta ? false : true}
                    >
                    <p className="decoration-slate-200 text-base">{itemData.precioOferta} % Off</p>
                </OnOff>
                <Btn 
                    className="absolute right-4 bottom-4"
                    is22={true}
                    isGreen={true}>
                    Agregar
                </Btn>
                    <img className="w-11/12" src={itemData.imagen} />
            </div>

            <ProdcutDetail/>

            <div className="flex overflow-x-scroll w-11/12 mt-4">
                <div className="flex">
                    {products.map(product =>(
                    <ProductSuggested 
                    key={product._id} 
                    product={product} 
                    />
                ))}</div>
            </div>
        </div>
        
    </article>
  )
}
