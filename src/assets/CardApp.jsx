
import { useEffect, useReducer, useState } from "react";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";
import { itemsCartReducer } from "../reducer/itemsCartReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsCartActions";

const initialCartItem = JSON.parse(sessionStorage.getItem('cart')) || [];

export const CartApp = () => {

    //const [cartItems, setCartItems] = useState(initialCartItem);

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

    return (
        <>
            <div className="container my-4">
                <h1>Card App</h1>
                <div className="row">
                    <CatalogView handler={product => handlerAddProductCart(product)} />
                    {cartItems?.length <= 0 || (
                        <CartView items={cartItems} handlerDelete={handlerDeleteProductCard} />
                    )}
                </div>

            </div>
        </>
    )
}