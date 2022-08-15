import React from 'react';
import {CartCard} from '../../components/CartCard'
import {Article} from '../../components/css/styles';

export const Cart = ()=>{

    return (
        <Article>
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
        </Article>
    )
}