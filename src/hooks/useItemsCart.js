import { useEffect, useReducer, useState } from "react";

import { itemsCartReducer } from "../reducer/itemsCartReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsCartActions";

const initialCartItem = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {
    const [cartItems, dispach] = useReducer(itemsCartReducer, initialCartItem);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispach({
                type: UpdateQuantityProductCart,
                payload: product
            });
        } else {
            dispach({
                type: AddProductCart,
                payload: product
            });
        }
    }

    const handlerDeleteProductCard = (id) => {
        dispach({
            type: DeleteProductCart,
            payload: id
        });
    }
  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCard
  }
}
