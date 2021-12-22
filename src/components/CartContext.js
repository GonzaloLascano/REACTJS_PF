import React, {useContext, useState, createContext} from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) =>{

    const [itemsCart, setItemsCart] = useState([]); /* en este estado vamos a tener un array con los objetos del carrito. Estos se componen de dos elementos: un Item (el producto en si) y una Cantidad (a ser comprada) */
   
    const isInCart = (id) => {
        return itemsCart.some((producto) => {
           return producto.id === id
        });
    }

    const addItem = (item, amount) => { /* funcion donde item es un item completo, un producto con todas sus propiedades y descripciones */
        if (isInCart(item.id)){ 
            setItemsCart(itemsCart.map((itemCart) => {
                if (itemCart.id === item.id){
                    itemCart.amount += amount
                }
                return itemCart;
            }))
        }
        else setItemsCart([...itemsCart, {...item, amount}]); /* se usa el spread en item para "desempaquetar" todas las propiedades de items y encerrarlas en un mismo "paquete" junto a la propiedad amount */
    }

    const removeItem = (item) => { /* creo una funcion que verifica que el item que ingresa este en el carrito y de ser asi lo filtra devolviendo todos los demas items menos ese */
        if (isInCart(item.id)){
            setItemsCart(itemsCart.filter((itemCart) => {
               return itemCart.id !== item.id;
            }))
        }
    }

    const getAmountCart = () =>{
        return itemsCart.reduce((total, cartItem) =>{
            return total + cartItem.amount
        },0); /* aca va a ir una funcion que suma las cantidades compradas de cada producto del array itemsCart */
    } 

    const clearCart = () => {
        setItemsCart([]);
    }/* prueba individual de vaciamiento de carrito */

    return (
        <CartContext.Provider value={{itemsCart, addItem, removeItem, getAmountCart, clearCart, isInCart}}> {/* aca en VALUE hay que poner un value con todo lo que va a proveer ese contexto. objetos arrays funciones etc */}
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext;
