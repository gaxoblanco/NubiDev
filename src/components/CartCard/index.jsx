import React, {useContext} from 'react'
import {Price, Parrafo, OnOff, Icon} from '../css/styles';
import {AppContext} from '../../context/AppContex';

export const CartCard = ({product, off, unitsProduct, setUnits, units})=>{
    const {state, removeFromCart} = useContext(AppContext);

    const handleDeleteToCart = item => () =>{
        removeFromCart(item)
    }

    return (
        <section className="container-cartCard w-11/12">
            <img className='img-cartCard' src={product.imagen} />
            <div className="cartCard-description">
                <Parrafo is16={true} positionLeft={true}>{product.codigo}</Parrafo>
            </div>
            <OnOff isOff={off}>
                <button 
                    type='button' 
                    className=""
                    onClick={()=>{setUnits(!units), unitsProduct(product)}}
                >
                    <Icon is32={true} viewBox="0 0 16 16" fill="currentColor" >
                        <path  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </Icon>
                </button>
            </OnOff>
            <div>
                <div className="cartCard-units">
                    <Parrafo isGray={true} isBold={true}>5</Parrafo>
                    <Parrafo isGray={true}>unidades</Parrafo>
                    <OnOff>
                        <button type="button" onClick={handleDeleteToCart(product)}>
                            <Icon isSecondaryColor={true} viewBox="0 0 16 16" fill="currentColor">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </Icon>
                        </button>
                    </OnOff>
                </div>
                <Price >${product.precio}</Price>
            </div>
        </section>
    )
}