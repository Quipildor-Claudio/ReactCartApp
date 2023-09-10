
import { Navigate, Route, Routes } from "react-router-dom";
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
                    <Routes>
                        <Route path="catalog" element={
                            <CatalogView handler={product => handlerAddProductCart(product)} />
                        } />
                        <Route path="cart" element={
                                cartItems?.length <= 0 ? 
                                <div className="alert alert-warning"> No existen productos en el caror de compras</div> 
                                :(
                                    <CartView items={cartItems} handlerDelete={handlerDeleteProductCard} />
                                )
                        } />
                        <Route path="/" element={ 
                            <Navigate to={'/catalog'}/>
                        }/>
                    </Routes>
                    
                
                </div>

            </div>
        </>
    )
}