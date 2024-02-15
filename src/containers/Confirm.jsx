import React from "react";
import { Form } from "../components/Form";
import { CartList } from "../components/atom/CartList";
import initialState from "../initialState";

export const Confirm = () => {
  return (
    <>
      <Form>
        <CartList
          cartList={initialState.cartList}
          Off={true}
          precioTotal={true}
          unitTotal={false}
        />
      </Form>
    </>
  );
};
