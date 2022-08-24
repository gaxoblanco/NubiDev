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


  return {
    addToCart,
    removeFromCart,
    state,
  }
}
