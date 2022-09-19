import {useState} from 'react'
import initialState from '../initialState'

export const useInitialState = () => {
    const [state, setState] = useState(initialState)
    // const [search, setSearch] = useState(initialState)
    const [itemData, setItemData] = useState({})

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
        console.log('payload', payload.itemData);
        console.log('total', payload.totalPrice);
        //busco el index del elemento a modificar 
        
        const index = state.cart.findIndex 
            (items => items.itemData._id === payload.itemData._id);
        console.log('index', index);

        
        setState({
            ...state,
            cart: state.cart.findIndex (items => items.itemData._id === payload.itemData._id)
        });
    }

    //Orders - va en otro archivo este Hook, pero por lo visto no entiendo algun detalle porque no me logre conectar el otro hook.
    const addToOrders = payload => {    
        setState({
            ...state,
            orders: [...state.orders, payload]
        });
    };

    //Me llega el Array de  prodyctos que cumplieron con la busqueda y lo almaceno
    //ProductsList tiene que consultar si searchPro esta vacio o tiene alguna busqueda.
    const searchProducts = payload=>{
        setState({
            ...state,
            searchPro: [...state.searchPro, payload]
        })
        
      }


  return {
    addToCart,
    removeFromCart,
    addToOrders,
    edditToCart,
    searchProducts,
    state,
    itemData,
    setItemData
  }
}
