import React, {useRef, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Parrafo} from '../css/styles'
import {Btn} from '../css/Button'
import {AppContext} from '../../context/AppContex';

export const Form = ({children})=>{
    const {state, addToBuyer} = useContext(AppContext);
    const form = useRef(null);
    const history = useHistory();

    const handleSubmit = () =>{
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'comit': formData.get('comit'),
        }
        console.log(buyer);

        addToBuyer(buyer);
        history.push('/')
    }

    return (
        <div className='bg-slate-200 pl-4 pr-4 mb-4 mt-4'>
        <form ref={form} >
            <Parrafo 
                positionLeft={true} 
                isBold={true} 
                isGray={true}
                className="ml-8">
                Nombre
            </Parrafo>
            <input 
                type="text"
                placeholder='nombre completo' 
                name="name"
                className=" w-full text-lg rounded-lg pl-2 pb-2"
            />

            <Parrafo positionLeft={true} isBold={true} isGray={true}>
                Email
            </Parrafo>
            <input 
                type="text"
                placeholder='Correo electrónico'  
                name="email"
                className=" w-full text-lg rounded-lg pl-2 pb-2"
            />
            <Parrafo positionLeft={true} isBold={true} isGray={true}>
                Comentario (opcional)
            </Parrafo>
            <textarea 
                type="text"
                placeholder='Correo electrónico'  
                name="comit"
                className=" h-40 w-full text-lg rounded-lg pl-2 pb-2 mb-4"
            />
        </form>
        {children}
        <Btn
            type="button"
            className="mt-4 mb-4"
            isBig= {true}
            isGreen= {true}
            is22= {true}
            onClick={handleSubmit}
        >Confirmar</Btn>
        </div>
    )
}