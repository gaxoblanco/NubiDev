import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartList } from "../components/atom/CartList";
import { Btn } from "../components/css/Button";

import initialState from "../initialState";

export const Cart = () => {
  return (
    <>
      <CartList cartList={initialState.cart} Off={false} unitTotal={true} />
      <Link to={"/carrito/confirmar"}>
        <Btn type="button" wSize={true} is22={true} isGreen={true}>
          Confirmar Orden
        </Btn>
      </Link>
      <Link to={"/"}>
        <Btn type="button" wSize={true} is22={true}>
          Seguir Comprando
        </Btn>
      </Link>
    </>
  );
};
