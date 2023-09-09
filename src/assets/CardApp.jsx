
import { useState } from "react";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";

const initialCartItem = [
    //  product:{},
    //   quantity:0,
    //   total:0

];

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItem);

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id), {
            //         product,
            //         quantity: hasItem.quantity + 1,

            //     }
            // ]);

            setCartItems(
                cartItems.map((i) => {
                    if (i.product.id === product.id) {
                        i.quantity += 1;
                    }
                    return i;
                }
                )
            )

        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);
        }
    }

    const handlerDeleteProductCard=(id)=>{
        setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
    }

    return (
        <>
            <div className="container my-4">
                <h1>Card App</h1>
                <div className="row">
                    <CatalogView handler={product => handlerAddProductCart(product)} />
                    {cartItems?.length<=0||(
                        <CartView items={cartItems} handlerDelete={handlerDeleteProductCard}/>
                    )}
                </div>

            </div>
        </>
    )
}