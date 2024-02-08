import React, {useState} from 'react'
//importo la img del logo
import logo from '../../assets/milogo.jpg'
import color from '../../assets/PeachFuzzColor.jpg'

export const Header = ({open, setOpen})=>{


    return (
        <header className="container-header relative h-20 bg-[#FBD5CA] mb-10 p-4">
            <a
                className="w-8"
                href="">
                <svg fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </a>

            <img 
                className="logo-header" 
                src={color}
                alt="logo" />

            <button
                type="button"
                onClick={()=>setOpen(!open)}
                className="w-8"
            >
                <svg fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
 
        </header>
    )
}