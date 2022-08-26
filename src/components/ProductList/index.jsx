import React, {useContext, useState} from 'react'
import {ProductCard} from '../ProductCard';
import {AddCart} from '../AddCart';
import {AppContext} from '../../context/AppContex';

import './style.css';

export const ProductList = () => {
  const [units, setUnits] = useState(false);
  const {state} = useContext(AppContext);
  const {products} = state;

  const [itemData, setItemData] = useState({})

  const unitsProduct = (ItemUnits) =>{
    setItemData (ItemUnits);
  }
  
  return (
      <div>
        <div>
            {products.map(product =>(
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
              // onClick={()=>{setUnits(!units)}}
              className="fixed top-0 w-full h-full bg-green-200 grid place-items-center p-50%" >
            <AddCart 
              itemData = {itemData}
              setUnits = {setUnits}
              units = {units}
            /></div> : null}
        </div>
    </div>
  )
}
