// import { list } from 'postcss';
import React, {useState, useEffect, useReducer} from 'react';
import {Btn} from '../css/Button';
import {Price, Parrafo, StateStock, IconStar, OnOff} from '../css/styles';


const initialState = {
    favorites: []
  }

  const favoriteReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state, favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    };
  }



export const ProductCard = ({product, handleAddToCart})=>{

    // const [products, setProducts] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)


    useEffect(()=>{
        // fetch( lista )
        // .then( response => response.json())
        // .then( data => setStock(data.results));

    }, [])

    
    let isFavorite = false;
    const favoriteClick = favorite =>{
        // dispatch({type: 'ADD_TO_FAVORITE', payload: favorite});
        console.log(isFavorite);
        isFavorite = !isFavorite;
        return isFavorite;
    }


    return (
        <div className="bg-red-400 w-11/12 flex relative">

            <section className="bg-red-400 w-11/12 flex relative">
                <OnOff 
                    className="bg-cuarto absolute px-4 rounded-r-lg"
                    isOff={product.precioOferta ? false : true}
                >
                    <p className="decoration-slate-200 text-base">{product.precioOferta} % Off</p>
                </OnOff>
                <img className="img-productCard" src={product.imagen} />
                <div>
                    <Parrafo is16={true} positionLeft={true}>{product.descripcion}
                    </Parrafo>
                    <div className="state-product">
                        <Price className="price-product">${product.precio}</Price>
                        <div>
                            <StateStock inStock={product.stock ? true : false} >{product.stock ? 'En Stock' : 'Sin Stock'}</StateStock>
                            <Btn
                                type="button" 
                                isGreen={true}
                                onClick={handleAddToCart(product)}
                            >
                                Agregar
                            </Btn>
                        </div>
                    </div>
                </div>
                <a href="#" >
                <IconStar isOn={isFavorite} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </IconStar>
                </a>
            </section>
        </div>
    )
}