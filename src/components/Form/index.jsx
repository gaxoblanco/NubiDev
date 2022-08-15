import React from 'react'
import {Direction, Parrafo, OnOff} from '../css/styles'

export const Form = ()=>{

    return (
        <div className='bg-slate-400 pl-4'>
            <Parrafo 
                positionLeft={true} 
                isBold={true} 
                isGray={true}
                className="ml-8">
                Nombre
            </Parrafo>
            <Parrafo positionLeft={true} is16={true}>
                Juan Manuel de la Santa rosa
            </Parrafo>
            <Parrafo positionLeft={true} isBold={true} isGray={true}>
                Email
            </Parrafo>
            <Parrafo positionLeft={true} is16={true}>
                juan@santarosa.com
            </Parrafo>
            <OnOff>
                <div>
                    <Parrafo positionLeft={true} isBold={true} isGray={true}>
                        Comentario (opcional)
                    </Parrafo>
                    <Parrafo positionLeft={true} is16={true}>
                    Hola si, queria que toda las envolutras de mi pedido fueran de color purpura claro
                    </Parrafo>
                </div>
            </OnOff>
            
        </div>
    )
}