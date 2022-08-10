import React from 'react'
import {Btn} from '../css/Button'

export const Search = ()=>{



    return (
        <span className="container-search">
            <input 
                className="container-search--search" 
                type="search" 
                placeholder={"Buscar" }
                
                />
            <Btn isBig={true} isGreen={true} is22={true} >Buscar Producto</Btn>
            <div className="search-clouse">
                <svg className="icon-more">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
            </div>
        </span>
    )
}