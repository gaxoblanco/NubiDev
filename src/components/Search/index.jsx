import React from 'react'
import {Btn} from '../css/Button'
import {Icon} from '../css/styles'

export const Search = ()=>{



    return (
        <span className="bg-gray-500 w-5/6 relative">
            <input 
                className="container-search--search" 
                type="search" 
                placeholder={"Buscar" }
                
            />
            <Btn isBig={true} isGreen={true} is22={true} >Buscar Producto</Btn>
            <div className="search-clouse">
            <Icon isSecondaryColor={true} fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </Icon>
            </div>
        </span>
    )
}