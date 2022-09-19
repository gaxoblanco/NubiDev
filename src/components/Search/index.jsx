import React, {useState, useMemo, useRef} from 'react'
import {Btn} from '../css/Button'
import {Icon} from '../css/styles'

export const Search = ({open, setOpen, searchValue, setSearchValue, handleSearch})=>{
    //Paso searchValue para recordar la ultima busqueda realizada
    const onSearchValueChange = (event)=>{
        console.log('desde el Search',event.target.value);
         setSearchValue(event.target.value);
    }

    return (
        <span className="relative bg-slate-100 p-8 rounded-lg">
            <div className="flex">    
                <input 
                    className="container-search--search mt-4" 
                    type="text"
                    placeholder={"Buscar"}
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
                
                <button 
                    onClick={()=>setOpen(!open)}
                    type="button">
                    <Icon isSecondaryColor={true} fill="currentColor" className="bi bi-dash-circle-fill absolute right-2 top-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </Icon>
                </button>
            </div>

            <Btn 
                onClick={()=> handleSearch(searchValue)}
                isBig={true} 
                isGreen={true} 
                is22={true} >
                    Buscar Producto
            </Btn>
        </span>
    )
}