const CartWidget = () => {
    return(
        <div className="rounded p-2 bg-light shadow-sm CartContainer">
            <img src="./assets/shopping-cart.png" alt="shopping cart" />
            <p className="m-0 CartCount">0</p>
        </div>
    )
}

export default CartWidget