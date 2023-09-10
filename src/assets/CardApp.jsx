

import { useItemsCart } from "../hooks/useItemsCart";
import { NavBar } from "../components/NavBar";
import { CartRoutes } from "../routes/CartRoutes";


export const CartApp = () => {
    const { cartItems, handlerAddProductCart, handlerDeleteProductCard } = useItemsCart();

    return (
        <>
            <NavBar />
            <div className="container my-4">

                <h1>Card App</h1>
                <div className="row">

                    <CartRoutes
                        cartItems={cartItems}
                        handlerAddProductCart={handlerAddProductCart}
                        handlerDeleteProductCard={handlerDeleteProductCard} />
                </div>

            </div>
        </>
    )
}