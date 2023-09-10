
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";
import { useItemsCart } from "../hooks/useItemsCart";


export const CartApp = () => {
    const { cartItems, handlerAddProductCart, handlerDeleteProductCard } = useItemsCart();

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