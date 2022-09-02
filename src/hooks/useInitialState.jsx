import {useState} from 'react'
import initialState from '../initialState'

export const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = payload => {
     
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter (items => items._id != payload._id)
        });
    };


    const edditToCart = payload => {
        console.log('paylodad', payload.itemData);
        console.log('total', payload.totalPrice);
        //busco el index del elemento a modificar 
        const index = state.cart.findIndex (items => items.itemData._id === payload.itemData._id);
        console.log('index', index);

        
        setState({
            ...state,
            cart: state.cart.findIndex (items => items.itemData._id === payload.itemData._id)
        });
        console.log(state.cart);



        // if(payload._id == product._id){
        //     product.precioTotal = payload.precioTotal,
        //     product.units = payload.units
        // }
        
    }
    

 
    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }



  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    edditToCart,
    state,
  }
}
