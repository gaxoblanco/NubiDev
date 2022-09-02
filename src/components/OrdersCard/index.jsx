import React, {useState, useContext} from 'react';
import {AppContext} from '../../context/AppContex';
import {OrderDetail} from '../OrderDetail';
import {Icon, Parrafo} from '../css/styles';
import {Btn} from '../css/Button';
import './styled.css'

export const OrdersCard = ({product, paid, submit}) => {
    const {state} = useContext(AppContext);
    const {orders} = state; 

    const [open, close] = useState(false);

    console.log(product);
  return (
    <section className="bg-slate-200 mt-4 mb-4 grid place-items-center">
        <div className="OrdersCard bg-slate-200 p-4 w-11/12">
            <button 
                type="button"
                onClick={()=> close(!open)}
                className="w-10 h-10 mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
            </button>
            <div>
                {paid ? 
                    <div className="flex h-12">
                        <Icon className="w-10 h-10 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bg-red" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                        </Icon>
                        <Parrafo 
                            marginL={true} 
                            is16={true} 
                            isBold={true}>
                                Pagado
                        </Parrafo>
                    </div>
                    :
                    <Btn isGreen={true}>Coordinar Pago</Btn>
                }
            </div>

            <div className="flex h-12">
                <div 
                    className={submit ? 
                        `mt-2 text-primario w-6 h-6 `
                    :   `mt-2 text-terciario w-6 h-6`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </div>
                <Parrafo 
                    marginL={true} 
                    is16={true} 
                    isBold={true} 
                    isGray={submit ? false : true}>
                        Retirado
                </Parrafo>
            </div>
        </div>
            {open ? 
                <div className="w-11/12">
                    <OrderDetail
                        key = {product.productList.id}
                        product= {product.productList}
                        name={product.buyer.name}
                        email={product.buyer.email}
                    ></OrderDetail>
                </div>
                :
                <></>
            }
    </section>
  )
}
