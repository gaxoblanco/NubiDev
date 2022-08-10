import React from 'react'
import {Direction, Parrafo, OnOff} from '../css/styles'

export const Form = ()=>{

    return (
        <Direction>
            <Parrafo isBold={true} isGray={true}>
                Nombre
            </Parrafo>
            <Parrafo is16={true}>
                Juan Manuel de la Santa rosa
            </Parrafo>
            <Parrafo isBold={true} isGray={true}>
                Email
            </Parrafo>
            <Parrafo is16={true}>
                juan@santarosa.com
            </Parrafo>
            <OnOff>
                <Direction>
                    <Parrafo isBold={true} isGray={true}>
                        Comentario (opcional)
                    </Parrafo>
                    <Parrafo is16={true}>
                    Hola si, queria que toda las envolutras de mi pedido fueran de color purpura claro
                    </Parrafo>
                </Direction>
            </OnOff>
            
        </Direction>
    )
}