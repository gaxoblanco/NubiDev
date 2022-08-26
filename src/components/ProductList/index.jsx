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

        <div className="absolute z-10 bg-slate-400">
          {units ? 
            <AddCart 
              itemData = {itemData}
              setUnits = {setUnits}
            /> : null}
        </div>
        
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

    </div>
  )
}
