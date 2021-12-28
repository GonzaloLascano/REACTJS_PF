import React from "react";
import { Link } from 'react-router-dom';
import useCartContext from './CartContext';
import CartListItem from './CartItem'
import { db } from '..service/firebase.js'
import {addDoc, collection} from 'firebase/firestore';

function Cart (){
    const pathGalery = '/'
    const { itemsCart, clearCart, getAmountCart, removeItem } = useCartContext();
    const cartPrice = () => {
        return itemsCart.reduce((total, cartItem) =>{
            return (total + cartItem.amount * cartItem.price);
        },0);
    } 

    if (itemsCart.length === 0){
        return(
            <div className="w-50 d-flex flex-column mx-auto mt-5 p-5 border rounded shadow">
            <img className="opacity-50 mb-3 mx-auto" src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png" alt="Empty Shopping Cart" style={{width: "50px"}} />
            <h2 className="mt-2">Uh, Oh.. :(</h2>
            <h6>Parece que no agregaste nada al carrito!</h6>
                <Link to={pathGalery} type="button" className="btn btn-success rounded-pill mt-4 mx-auto w-50">
                    Volver A la Galería
                </Link>
            </div>
        )
    }
    else {
        return (
            <section className="h-100 h-custom" style={{backgroundColor: "#afb390"}}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
                    <div className="card-body p-0">
                      <div className="row g-0">
                        <div className="col-lg-8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h1 className="fw-bold mb-0 text-black">Carrito de Compras</h1>
                              <h6 className="mb-0 text-muted">{itemsCart.length} items</h6> {/* <!-- contador de productos --> */}
                            </div>
    
                            <hr className="my-4"/>
    
                            {/* <!-- item carro ------------------------------------------------- --> */}
                            
                            {itemsCart.map((item) => {
                                    return(
                                    <CartListItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        category={item.category}
                                        img={item.img}
                                        price={item.price}
                                        amount={item.amount}
                                        remove={removeItem}
                                    />
                                    )
                                })
                            }

                            {/* <!-- /item carro ------------------------------------------ --> */}
          
                            <div className="pt-5 d-flex justify-content-space-around">
                              <h6 className="mb-0"><Link to="/" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                              <div><i onClick={clearCart} className="fas fa-trash-alt opacity-50" alt="Vaciaro Carrito"></i> <small>vaciar carrito</small></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Carro ----------------------------------------------------- --> */}
                            
                        {/* <!-- sumario ------------------------------------------------------ --> */}
    
                        <div className="col-lg-4 bg-light text-start" style={{borderRightRadius: "15px"}}>
                          <div className="p-5">
                            <h3 className="fw-bold mb-5 mt-2 pt-1">Sumario</h3>
                            <hr className="my-4"/>
          
                            <div className="d-flex justify-content-between mb-4">
                              <h5 className="text-uppercase">PRODUCTOS ({getAmountCart()})</h5>
                              <h5>$ {cartPrice()}</h5>
                            </div>
                            
          
                            {/* <h5 className="text-uppercase mb-3">Envío</h5>
          
                            <div className="mb-4 pb-2">
                              <select className="select">
                                <option value="1">Standard-Delivery- $5.00</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                              </select>
                            </div> ------------------ ENVIO (work in progress) ------------------*/}
          
                            <hr className="my-4"/>
          
                            <div className="d-flex justify-content-between mb-5">
                              <h5 className="text-uppercase">Precio Total</h5>
                              <h5>$ {cartPrice()}</h5>
                            </div>
          
                            <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Pagar</button>
          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }

    
}

export default Cart;