import React, {useRef, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Parrafo} from '../css/styles'
import {Btn} from '../css/Button'
import {AppContext} from '../../context/AppContex';

export const Form = ({children})=>{
    const {state, addToOrders} = useContext(AppContext);
    const form = useRef(null);
    const {cart} = state;
    // const history = useHistory();

    //Guardo la informacion del Array de Cart en el array de Orders
    const handleSubmit = () =>{
        const productList = cart
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'comit': formData.get('comit'),
        }
        const order= {
            buyer,
            productList,
            paid: false,
            submit: false,
            id: buyer.name,
        }
        
        addToOrders(order)

        // console.log(state);
        // console.log('order', order);
    }

    return (
        <div className='pl-4 pr-4 bg-slate-100'>
        <form ref={form} >
            <Parrafo 
                positionLeft={true} 
                isBold={true} 
                isGray={true}
                className="ml-8">
                name
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
        <Link to={'/ordenes'}>
            <Btn
                type="button"
                className="mt-4 mb-4"
                isBig= {true}
                isGreen= {true}
                is22= {true}
                onClick={handleSubmit}
            >Confirmar</Btn>
        </Link>
        </div>
    )
}