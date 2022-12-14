import React, {useContext, useState, useEffect} from 'react'
import {ProductCard} from '../ProductCard';
import {AddCart} from '../AddCart';
import {AppContext} from '../../context/AppContex';

import './style.css';

export const ProductList = () => {
  const [units, setUnits] = useState(Boolean);
  const {state, itemData, setItemData } = useContext(AppContext);
  const {products} = state;
  const {searchPro} = state;



  //actualiza la cantidad deseada del item -- Bug que al guardas crea un objeto nuevo en lugar de actualizar
  const unitsProduct = (ItemUnits) =>{
    setItemData (ItemUnits);
  }
  
  return (
      <article>
        <div className="pt-4 grid place-items-center space-y-4 pb-4 mb-28">
              {(searchPro.length < 0? searchPro : products).map(product =>(
                  <ProductCard 
                    key={product._id} 
                    product={product} 
                    units={units}
                    setUnits = {setUnits}
                    unitsProduct = {unitsProduct}
                  />
              ))}
        </div>

        <div>
          {units ? 
            <div 
              event
              className="fixed top-0 w-full h-full bg-transparent grid place-items-center " >
            <AddCart 
              itemData = {itemData}
              setUnits = {setUnits}
              units = {units}
            /></div> : null}
        </div>
    </article>
  )
}
