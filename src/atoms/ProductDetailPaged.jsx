import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../context/AppContex';
import {Parrafo} from '../components/css/styles';



export const ProductDetailPaged = () => {
    const {state, itemData} = useContext(AppContext);
    const [info, setInfo] = useState(
      {        
        name: 'Descripcion',
        data: itemData.description,
        isOn: true
      })
    
    
    const [options, setOptions] = useState([
      {
        name: 'Descripcion',
        data: itemData.description,
        isOn: true
      },
      {
        name: 'Medidas',
        data: itemData.measures,
        isOn: false
      },
      {
        name: 'Caracteristicas',
        data: itemData.characteristic,
        isOn: false
      }
    ]);


    


    const handleClickActive = (name) =>{
      //paso cada options[x].isOn a false para que no sea visible 
      options.map(item => item.isOn = false);

      //busco la posicion del elemento con el mismo name en el array options
      const index = options.findIndex(item => item.name === name);
      //cambio el valor de isOn a true
      options[index].isOn = true;

      //setInfo siempre va a ser el objeto que sea True en el array options
      setInfo (options.find(item => item.isOn));
      
    }
console.log("options", options);
    
  return (
    <div className='min-h-[15rem]'>
        <div className="grid grid-cols-3">
          {options.map(item =>(
            <button
              key={item.name}
              onClick={()=>handleClickActive(item.name)}
              className={` 
              ${item.isOn 
                ? 'border-[#FBD5CA] border-t-4 border-x-2 border-solid productDetail-buttonMoreData' 
                : "bg-none productDetail-buttonMoreData"}`}
            >
              <Parrafo>{item.name}</Parrafo>
            </button>
          ))}

        </div>
        <Parrafo positionLeft={true} className="border-[#FBD5CA] p-4 rounded-b-lg min-h-[10rem]">
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
    <Parrafo>{info.data[0].name}</Parrafo>

    <Parrafo>valor</Parrafo>
    <Parrafo>{info.data[0].valor}</Parrafo>
    </div>
  )
}
