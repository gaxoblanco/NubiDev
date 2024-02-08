import React, {useContext, useState, useEffect} from 'react';
import {AddProduct} from '../../AddProduct/index';
import {Btn} from '../../css/Button';
import {Price, Parrafo, Icon} from '../../css/styles';
import {AppContext} from '../../../context/AppContex';

export const AddCart = ({units, setUnits, itemData})=>{
    const {state, addToCart, edditToCart} = useContext(AppContext);
    
    //unidades y precio total segun unidades
    const [unit, setUnit] = useState(1);
    const total = ((itemData.price ? itemData.price : itemData.itemData.price) * unit);

    const item = {
        _id: itemData._id,
        units: unit,
        totalPrice: total,
        itemData,
    }

    useEffect(()=>{
        if (itemData.totalPrice != null){
            item._id = itemData._id;
            setUnit(itemData.units);
            item.itemData = itemData.itemData;
            // console.log('itemData',itemData.itemData._id);
        }
    }, [])

//agrego al carrito itemData
    const handleAddToCart = item => () =>{
      addToCart(item);
      setUnits(false) 
    }
    const handleEdditToProduct = item =>() =>{
        edditToCart(item);
        setUnits(false) 
    }
    
    
    return(
        <span>
        <div className="bg-[#FFC39E] relative mx-12 rounded-xl container-addCart p-4">
            <div className="container-addCart--img relative">
                <img 
                    className="img-productCardSmall mb-4 mr-4" 
                    src={itemData.img.url1} 
                    alt={itemData.img.alt}
                    />
                <Parrafo 
                    className="mt-6"
                    is20={true} 
                    positionLeft={true} 
                >
                    {itemData.description ? itemData.description : itemData.nombre} 
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
                    unit={item.units != null ? item.units : unit}
                    setUnit={setUnit}
                    stock={itemData.stock == null ? itemData.itemData.stock : itemData.stock}
                 />
                <Price >${item.totalPrice}</Price>
            </div>
            <Btn 
                wSize={'300'} 
                isGreen={true} 
                is22={true}
                type="button"
                onClick={handleAddToCart(item)}
                >Agregar al Carrito
            </Btn>
            {/* <Btn 
                // wSize={100} 
                isGreen={false} 
                is22={true}
                type="button"
                onClick={handleEdditToProduct(item)}
                >Editar carrito
            </Btn> */}
        </div>
        </span>
    )
}