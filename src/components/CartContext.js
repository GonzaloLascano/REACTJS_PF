import React, {useContext, useState, createContext} from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [itemsCart, setItemsCart] = useState([]);

    const getAmountCart = () => {
        return itemsCart.reduce((total, item) => {
            return (total + item.amount)
        }, 0)
    }

    const addItem = (item, amount) => {
        if (isInCart(item.id)){
            let itemToAdd = items.find((itemInCart) => {
                return itemInCart.id === item.id;
            });

            itemToAdd.amount += amount;

            let filteredCart = itemsCart.filter( (itemInCart) =>{
                return itemInCart.id !== item.id;
            });

            setItemsCart([...filteredCart, itemToAdd]);
        }
        else setItemsCart([...itemsCart, {...item,amount}])/* 26min */
    }

    const isInCart = (id) => {
        return itemsCart.some((item) => {
            return item.id === id;
        })
    }

    const clearCart = () => {
        setItemsCart([]);
    }

    return(/* algo debe retornar */
        <CartContext.Provider value={/* funcionalidades DENTRO DE UN OBJETO que van a consumir los componentes children */}>
            {children}
        </CartContext.Provider> 
    );
}

export default useCartContext;