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
      {/* filtro de productos */}
        <section>
          <form>
            <input type="submit" value="Filtrar" className="btn btn-primary"/>
            <label className="mx-2">Precio</label>
            <select className="mx-2">
              <option value="0">Todos</option>
              <option value="1">Menor a mayor</option>
              <option value="2">Mayor a menor</option>
            </select>
            <label className="mx-2">Color</label>
            <select className="mx-2">
              <option value="0">blanco</option>
              <option value="1">negror</option>
              <option value="2">color</option>
            </select>
            {/* chexbox para por mayor o por menor */}
            <div className="flex">
              <label className="mx-2">Por mayor</label>
              <input type="checkbox" className="mx-2"/>
              <label className="mx-2">Por menor</label>
              <input type="checkbox" className="mx-2"/>
            </div>
            
          </form>
        </section>
      {/* listado de productos */}
        <section className="product-list pt-4 grid pb-4 m-20 mb-28">
              {(searchPro.length < 0? searchPro : products).map(product =>(
                  <ProductCard 
                    key={product._id} 
                    product={product} 
                    units={units}
                    setUnits = {setUnits}
                    unitsProduct = {unitsProduct}
                  />
              ))}
        </section>

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
