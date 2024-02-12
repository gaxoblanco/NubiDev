import React, {useContext, useState, useEffect} from 'react'
import {AppContext} from '../../context/AppContex';
import {AddProduct} from '../AddProduct/index';
import {Btn} from '../css/Button';
import {Parrafo, Price, StateStock, OnOff, IconStar} from '../css/styles';
import {ProductDetailPaged} from '../../atoms/ProductDetailPaged';

export const ProdcutDetail = () => {
    const {state, itemData } = useContext(AppContext);

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

  return (
    <div className="w-full rounded-xl bg-[#FFC39E]">
            <div className="productDetail-Section">
              <AddProduct
                unit={item.units != null ? item.units : unit}
                setUnit={setUnit}
                stock={itemData.stock == null ? itemData.itemData.stock : itemData.stock}
              />
              <Btn 
                onClick={()=> {setUnits(!units)}}
                className='absolute -right-0 bottom-0'
                fSize={1.4}
                isGreen={true}>
                Agregar
              </Btn>
              <div className="flex">
                {/* <Parrafo
                  className='mt-6'
                  isGray={true}
                  marginR={true}
                >cu</Parrafo> */}
                <Price
                  is40={true}
                  isBold={true}
                >${item.totalPrice}</Price>
              </div>
            </div>
            <div className="productDetail-Section mb-4">
              <Parrafo
                marginR={true}
                positionLeft={true}
              >{itemData.intro}</Parrafo>
              <StateStock
                className='mt-2 mr-2'
                inStock={itemData.stock ? true : false} 
              >Stock</StateStock>
              <Parrafo
                is20={true}
                isBold={true}
                isGray={true}
              >{itemData.stock}</Parrafo>
            </div>

            <ProductDetailPaged />
    </div>
  )
}
