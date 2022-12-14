// import { list } from 'postcss';
import React from 'react';
import {Link} from 'react-router-dom'
import {Btn} from '../css/Button';
import {Price, Parrafo, StateStock, IconStar, OnOff} from '../css/styles';



export const ProductCard = ({product, unitsProduct, setUnits, units})=>{
    


    return (
        <div className=" mx-4 relative duration-500 ease-in-out hover:scale-105">
            <Link 
                onClick={()=> unitsProduct(product)} 
                className="absolute h-full w-10/12"
                to='/detalleproducto' >
            </Link>
            <section className="max-w-[34rem] flex rounded-lg">
                <OnOff 
                    className="bg-cuarto absolute px-4 rounded-lg"
                    isOff={product.precioOferta ? false : true}
                >
                    <p className="decoration-slate-200 text-base">{product.precioOferta} % Off</p>
                </OnOff>
                <img className="img-productCard" src={product.imagen} />
                <div className="min-w-[18rem]">
                    <Parrafo 
                        marginR={true}
                        is16={true} 
                        positionLeft={true}>{product.nombre}
                    </Parrafo>
                    <div className="flex text-left mt-10 relative">
                        <Price>${product.precio}</Price>
                        <div className="absolute right-1 bottom-1">
                            <StateStock className="ml-8"
                                inStock={product.stock ? true : false} >{product.stock ? 'En Stock' : 'Sin Stock'}
                            </StateStock>
                            <Btn
                                className="z-10"
                                type="button" 
                                isGreen={true}
                                onClick={()=> {setUnits(!units), unitsProduct(product)}}
                            >
                                Agregar
                            </Btn>
                        </div>
                    </div>
                </div>
            </section>
            <a href="#" className="absolute -top-6 right-0">
                <IconStar isOn={false} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </IconStar>
            </a>
        </div>
    )
}