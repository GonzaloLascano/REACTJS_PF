import React, {useContext, useState, createContext} from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [itemsCart, setItemsCart] = useState([/* aca deberia ir algo */]);

    const getAmountCart = () => {
        return itemsCart.reduce((total, item) => {
            return (total + item.amount)
        }, 0)
    }

    return(/* algo debe retornar */
        <CartContext.Provider value={/* funcionalidades DENTRO DE UN OBJETO que van a consumir los componentes children */}>
            {children}
        </CartContext.Provider> 
    );
}

export default useCartContext;