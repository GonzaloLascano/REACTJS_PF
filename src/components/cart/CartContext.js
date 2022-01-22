import React, {useContext, useState, createContext} from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    const [itemsCart, setItemsCart] = useState([]);
   
    const isInCart = (id) => {
        return itemsCart.some((producto) => {
           return producto.id === id
        });
    }

    const addItem = (item, amount) => { 
        if (isInCart(item.id)){ 
            setItemsCart(itemsCart.map((itemCart) => {
                if (itemCart.id === item.id){
                    itemCart.amount += amount
                }
                return itemCart;
            }))
        }
        else setItemsCart([...itemsCart, {...item, amount}]);
    }

    const removeItem = (item) => {
        if (isInCart(item.id)){
            setItemsCart(itemsCart.filter((itemCart) => {
               return itemCart.id !== item.id;
            }))
        }
    }

    const getAmountCart = () =>{
        return itemsCart.reduce((total, cartItem) =>{
            return total + cartItem.amount
        },0); 
    } 

    const clearCart = () => {
        setItemsCart([]);
    }

    return (
        <CartContext.Provider value={{itemsCart, addItem, removeItem, getAmountCart, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext;
