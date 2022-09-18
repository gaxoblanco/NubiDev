import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContex';
import {Btn} from '../components/css/Button';
import {Price, Parrafo, StateStock, IconStar, OnOff} from '../components/css/styles';

import {AddCart} from '../components/AddCart';
import {ProdcutDetail} from '../components/ProductDetail';
import {ProductSuggested} from '../components/ProductSuggested';
import {ButtonCart} from '../components/ButtonCart';

export const ProductDetail = () => {
    const {state, itemData, setItemData } = useContext(AppContext);
    const [units, setUnits] = useState(Boolean)
    const {products} = state;

  return (
    <article className="grid place-items-center">
        <div className="max-w-6xl  grid place-items-center">
            <div className="relative grid place-items-center">
                <OnOff 
                    className="bg-cuarto absolute px-4 rounded-r-lg mt-4 "
                    isOff={itemData.precioOferta ? false : true}
                    >
                    <p className="decoration-slate-200 text-base">{itemData.precioOferta} % Off</p>
                </OnOff>
                <Btn 
                    onClick={()=> {setUnits(!units)}}
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
        <ButtonCart />

        <div>
          {units ? 
            <div 
              event
              className="fixed top-0 left-0 w-full h-full bg-transparent grid place-items-center " >
            <AddCart 
              itemData = {itemData}
              setUnits = {setUnits}
              units = {units}
            /></div> : null}
        </div>
    </article>
    
  )
}
