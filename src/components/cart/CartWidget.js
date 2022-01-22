import React from "react";
import useCartContext from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { getAmountCart, clearCart } = useCartContext();

    return(
        
        <div className={`rounded p-2 bg-light shadow-sm CartContainer ${getAmountCart(0) <= 0 ? 'opacity-25' : 'opacity-100'}`}>
            <Link to="/cart"><img src="./assets/shopping-cart.png" alt="shopping cart" />
            </Link>
            {getAmountCart() > 0 &&
                <p className="m-0 CartCount" onClick={clearCart}>{getAmountCart()}</p>
            }
        </div>
        
    )
}

export default CartWidget