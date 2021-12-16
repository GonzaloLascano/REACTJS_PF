import useCartContext from "./CartContext";

const CartWidget = () => {
    const { getAmountCart } = useCartContext();

    return(
        <div className="rounded p-2 bg-light shadow-sm CartContainer">
            <img src="./assets/shopping-cart.png" alt="shopping cart" />
            {getAmountCart() > 0 &&
            <p className="m-0 CartCount">{getAmountCart()}</p>
            }
        </div>
    )
}

export default CartWidget