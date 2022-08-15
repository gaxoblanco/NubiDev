import React from 'react';
import {Btn} from '../css/Button';
import {Price, Parrafo, StateStock, IconStar, OnOff} from '../css/styles';

export const ProductCard = ()=>{

    return (
        <section className="bg-red-400 w-11/12 flex relative">
            <OnOff className="bg-fourth absolute px-4 rounded-r-lg">
                <p className="decoration-slate-200 text-base">30% Off</p>
            </OnOff>
            <img className="img-productCard" src="https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png" />
            <div>
                <Parrafo is16={true} positionLeft={true}>Taza para serigrafia plastico blanco.
                    blanco liso para cerigrafia, estampado.
                </Parrafo>
                <div className="state-product">
                    <Price className="price-product">$300</Price>
                    <div>
                        <StateStock>En stock</StateStock>
                        <Btn isGreen={true}>Agregar</Btn>
                    </div>
                </div>
            </div>
            <div>
            <IconStar fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </IconStar>
            </div>
        </section>
    )
}