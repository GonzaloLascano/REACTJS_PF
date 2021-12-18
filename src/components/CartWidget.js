import React from "react";
import useCartContext from "./CartContext";

const CartWidget = () => {
    const { getAmountCart, clearCart } = useCartContext();

    return(
        
        <div className="rounded p-2 bg-light shadow-sm CartContainer">
            <img src="./assets/shopping-cart.png" alt="shopping cart" />
            {getAmountCart() > 0 &&
                <p className="m-0 CartCount" onClick={clearCart}>{getAmountCart()}</p> /* la funcion clearCart esta aca solamente de prueba */
            }
        </div>
        
    )
}

export default CartWidget