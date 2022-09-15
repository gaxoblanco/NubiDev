import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../context/AppContex';
import {Parrafo} from '../components/css/styles';



export const ProductDetailPaged = () => {
    const {state, itemData} = useContext(AppContext)
    
    const options = [
      {
        name: 'Descripcion',
        data: itemData.descripcion,
        isOn: true
      },
      {
        name: 'Medidas',
        data: itemData.medidas,
        isOn: false
      },
      {
        name: 'Caracteristicas',
        data: itemData.caracteristicas,
        isOn: false
      }
    ];

    let dataPrint = options.filter(item => item.isOn)
    


    const handleClickActive = (e) =>{
      //paso cada options[x].isOn a false para que no sea visible 
      options.map(item => item.isOn = false);
      
      //activo el elemento deseado deseado
      options[e].isOn = true;
      useEffect
    }

    useEffect(()=>{
      dataPrint
      console.log(dataPrint);
    }, [])
  return (
    <div>
        <div className="grid grid-cols-3">
            <button 
              onClick={()=>handleClickActive(0)} 
              className={` 
              ${options[0].isOn 
                ? 'bg-gray-100 productDetail-buttonMoreData' 
                : "bg-none productDetail-buttonMoreData"}`}
            >Descripcion</button>
            <button 
              onClick={()=>handleClickActive(1)} 
              className="productDetail-buttonMoreData"
            >Medidas</button>
            <button 
              onClick={()=>handleClickActive(2)} 
              className="productDetail-buttonMoreData"
            >Caracteristicas</button>
        </div>
        <Parrafo positionLeft={true} className="bg-gray-100 p-4 rounded-b-lg">
              {options.find(item => item.isOn).data}
        </Parrafo>
    </div>
  )
}
