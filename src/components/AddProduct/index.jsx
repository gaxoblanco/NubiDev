import React from 'react'
import {Parrafo, Icon} from '../css/styles'

export const AddProduct = ()=>{

    return(
        <div className="container-addProduct">
            <Icon is32={true} fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </Icon>

            <div>
                <p className="text-lg font-semibold">16</p>
                <Parrafo isBold={true} isGray={true} >Unidades</Parrafo>
            </div>

            <Icon isSecondaryColor={true} is32={true} fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
            </Icon>
        </div>
    )
}