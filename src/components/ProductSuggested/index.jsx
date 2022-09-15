import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from '../../context/AppContex';
import {Parrafo} from '../css/styles';

export const ProductSuggested = ({product}) => {
  const {itemData, setItemData } = useContext(AppContext);
  return (
    <Link to="/detalleproducto" onClick={()=>setItemData(product)} className="w-40">
        <img className="w-40" src={product.imagen} />
        <Parrafo>{product.nombre}</Parrafo>
    </Link>
  )
}
