// import { list } from 'postcss';
import React from 'react';
import {Link} from 'react-router-dom'
import {Btn} from '../css/Button';
import {Price, Parrafo, StateStock, IconStar, OnOff} from '../css/styles';



export const ProductCard = ({product, unitsProduct, setUnits, imgSize})=>{
    
    // si imgSize aun no existe cargo 100
    // imgSize = imgSize ? imgSize : 100;

    return (
        <div className={`prodcut-card relative duration-500 ease-in-out hover:scale-105 p-4 m-4 rounded-2xl max-w-[360px] `}
        // agrego un style width
        style={{width: imgSize + 'px'}}
        >
            <Link 
                onClick={()=> unitsProduct(product)} 
                className="absolute h-full w-10/12"
                to='/detalleproducto' >
            </Link>
            <section className="product-card-container grid rounded-lg ">
                <OnOff 
                    className="bg-cuarto absolute px-4 rounded-lg"
                    isOff={product.discoutOffert ? false : true}
                >
                    <p className="decoration-slate-200">{product.discoutOffert} % Off</p>
                </OnOff>
                <figure>
                    <img className="product-card--img rounded-lg " src={product.img.url1} alt={product.img.alt} width={100 + '%;'} 
                    height={100 + '%;'} />
                </figure>
                <div className="size-full min-h-28 flex flex-col justify-around">
                    <Parrafo 
                        marginR={true}
                        is20={true} 
                        positionLeft={true}
                    >
                        {product.name}
                    </Parrafo>
                    <div className="flex text-left relative">
                        <Price>${product.price}</Price>
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
            <a href="#" className="absolute top-0 right-0">
                <IconStar isOn={false} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </IconStar>
            </a>
        </div>
    )
}