import React, {useState} from 'react'
import {Parrafo, Icon} from '../css/styles'

export const AddProduct = ({unit, setUnit, stock})=>{
    //funcion de sumar y restar con los botones, retornando una variable 

    const menos = ()=>{
        if (unit > 1){
            setUnit((unit - 1))
        }
    }
    const mas = ()=>{
        if (unit <= stock){
            setUnit((unit + 1))
        }
    }
    return(
        unit,
        <div className="container-addProduct">
            <button
                onClick={(mas)}
            >
                <Icon is32={true} fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </Icon>
            </button>

            <div>
                <p className="text-lg font-semibold">{unit}</p>
                <Parrafo isBold={true} isGray={true} >Unidades</Parrafo>
            </div>

            <button
                onClick={(menos)}
            >
                <Icon isSecondaryColor={true} is32={true} fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                </Icon>
            </button>
        </div>
    )
}