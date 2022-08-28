import React, {useContext, useState} from 'react';
import {AddProduct} from '../AddProduct/index';
import {Btn} from '../css/Button';
import {Price, Parrafo, Icon} from '../css/styles';
import {AppContext} from '../../context/AppContex';

export const AddCart = ({units, setUnits, itemData})=>{
    const {state, addToCart} = useContext(AppContext);
    
    //unidades y precio total segun unidades
    const [unit, setUnit] = useState(1);
    const total = (itemData.precio * unit);

    const item = {
        itemData,
        units: unit,
        totalPrice: total
    }
    //valido si tengo un totalPrice
    if (itemData.totalPrice != null){
        item.totalPrice = itemData.totalPrice
        setUnits((itemData.units))
        console.log('addCart', itemData.units);
    }

//agrego al carrito itemData
    const handleAddToCart = item => () =>{
      addToCart(item);
      setUnits(false) 
    }

    return(
        <span>
        <div className="bg-slate-100 relative mx-12 rounded-lg">
            <div className="container-addCart--img relative">
                <img className="img-productCardSmall mt-6" src="https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png" />
                <Parrafo 
                    className="mt-6"
                    is16={true} 
                    positionLeft={true} 
                >
                    {itemData.descripcion} 
                </Parrafo>
                <button 
                    className="absolute top-0  right-0 z-10"
                    type="button"
                    onClick={()=> (setUnits(!units))}
                >
                    <Icon isSecondaryColor={true} fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </Icon>
                </button>
            </div>
            <div className="container-addCart--number">
                <AddProduct
                    unit={unit}
                    setUnit={setUnit}
                    stock={itemData.stock}
                 />
                <Price >${item.totalPrice}</Price>
            </div>
            <Btn 
                isBig={true} 
                isGreen={true} 
                is22={true}
                type="button"
                onClick={handleAddToCart(item)}
                >Agregar al Carrito
            </Btn>
        </div>
        </span>
    )
}