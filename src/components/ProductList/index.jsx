import React, {useContext, useState, useEffect} from 'react'
import {ProductCard} from '../ProductCard';
import {AddCart} from '../AddCart';
import {AppContext} from '../../context/AppContex';
import {activeFilter} from '../atom/activeFilter';
import {filterCard} from '../atom/filterCard';

// icons
import columnsGap from '../../assets/categories/columns-gap.svg';
import backpack from '../../assets/categories/backpack.svg';
import cups from '../../assets/categories/cup-straw.svg';
import luggage from '../../assets/categories/luggage.svg';


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

  const [isActive1, setIsActive1] = React.useState(false);
  const [isActive2, setIsActive2] = React.useState(false);
  const [isActive3, setIsActive3] = React.useState(false);

  // Puedes definir una función de manejo para cada instancia
  const handleToggle1 = () => {
    setIsActive1(!isActive1);
  };

  const handleToggle2 = () => {
    setIsActive2(!isActive2);
  };

  const handleToggle3 = () => {
    setIsActive3(!isActive3);
  };
  
  return (
      <article className='page-list-products mx-8'>
          {/* filtro de productos */}
          <section className="w-60">
            <h2 className="mb-4">Filtrar productos</h2>
            <form className="search-form mb-4 relative text-base">
              <input type="text" placeholder="Buscar productos" />
              <button type="submit" className="w-6 absolute">
                <svg fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </form>
            <div>
              {activeFilter('Promociones', isActive1, handleToggle1)}

              {activeFilter('Blanco', isActive2, handleToggle2)}
              {activeFilter('Negro', isActive3, handleToggle3)}
              {activeFilter('Color', isActive3, handleToggle3)}

              {activeFilter('En stock', isActive3, handleToggle3)}
              {activeFilter('Entrega Hoy', isActive3, handleToggle3)}
            </div>
          </section>
          {/* <section>
          <h2>Categorías populares</h2>
            {filterCard('Escritorio', luggage)}
            {filterCard('Bolsas y mochilas', backpack)}
            {filterCard('Tazas y vasos', cups)}
            {filterCard('Promocion', columnsGap)}
          </section> */}

          {/* listado de productos */}
          <section className="product-list pt-4 grid pb-4 mb-28">
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
                className="fixed top-0 w-full h-full bg-transparent grid place-items-center left-0" >
              <AddCart 
                itemData = {itemData}
                setUnits = {setUnits}
                units = {units}
              /></div> : null}
          </div>
    </article>
  )
}
