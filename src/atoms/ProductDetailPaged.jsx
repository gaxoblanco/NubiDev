import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../context/AppContex';
import {Parrafo} from '../components/css/styles';



export const ProductDetailPaged = () => {
    const {state, itemData} = useContext(AppContext);
    const [info, setInfo] = useState(
      {        
        name: 'Descripcion',
        data: itemData.descripcion,
        isOn: true
      })
    
    
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


    


    const handleClickActive = (e) =>{
      console.log('0', e);
      //paso cada options[x].isOn a false para que no sea visible 
      options.map(item => item.isOn = false);

      //busco la posicion del item que coincida con e y la paso a true.
      options[options.findIndex(item=> item.name == e)].isOn = true

      //setInfo siempre va a ser el objeto que sea True en el array options
      setInfo (options.find(item => item.isOn));
      
    }
console.log(info.data);
    
  return (
    <div>
        <div className="grid grid-cols-3">
          {options.map(item =>(
            <button
              key={item.name}
              onClick={()=>handleClickActive(item.name)}
              className={` 
              ${options.isOn 
                ? 'bg-gray-100 productDetail-buttonMoreData' 
                : "bg-none productDetail-buttonMoreData"}`}
            >
              <Parrafo>{item.name}</Parrafo>
            </button>
          ))}

        </div>
        <Parrafo positionLeft={true} className="bg-gray-100 p-4 rounded-b-lg">
              {info.name == 'Descripcion' 
                ? info.data : (info.name == 'Medidas' 
                ? <Medidas info={info} /> : <Caracteristicas info={info}/>)
              }
        </Parrafo>
    </div>
  )
}


export const Medidas = ({info}) => {
  return (
    <div className="grid grid-cols-2">
    <Parrafo>Ancho</Parrafo>
    <Parrafo>{info.data[0].ancho}</Parrafo>

    <Parrafo>Alto</Parrafo>
    <Parrafo>{info.data[0].alto}</Parrafo>

    <Parrafo>Profundidad</Parrafo>
    <Parrafo>{info.data[0].profundidad}</Parrafo>
    </div>
  )
}

export const Caracteristicas = ({info}) => {
  console.log(info.data);
  return (
    <div className="grid grid-cols-2">
    <Parrafo>Volumen</Parrafo>
    <Parrafo>{info.data[0].nombre}</Parrafo>

    <Parrafo>valor</Parrafo>
    <Parrafo>{info.data[0].valor}</Parrafo>
    </div>
  )
}
