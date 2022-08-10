import React from 'react'
import {AddProduct} from '../AddProduct/index';
import {Btn} from '../css/Button';
import {Price} from '../css/styles';

export const AddCart = ()=>{

    return(
        <span className="container-addCart">
            <div className="container-addCart--img">
                <img className="img-productCardSmall" src="https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png" />
                <h3>Taza para serigrafia plastico blanco.
                    blanco liso para cerigrafia, estampado.
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
            </div>
            <div className="container-addCart--number">
                <AddProduct />
                <Price>$4600</Price>
            </div>
            <Btn isBig={true} isGreen={true} is22={true}>Agregar al Carrito</Btn>
        </span>
    )
}