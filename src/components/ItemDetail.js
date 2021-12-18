import React, { useState } from "react";
import ItemListCounter from "./ItemListCounter"
import { Link } from 'react-router-dom';
import useCartContext from "./CartContext";

function ItemDetail (props) {
    const { addItem, removeItem } = useCartContext();
    const [onCart, setOnCart] = useState(0); /* estado en el cual se almacena lo que se agrego al carrito en itemlistcounter */

    function onAdd(amount) {
      setOnCart(amount);
      addItem(props, amount);
      console.log("felicidades! agregaste " + amount + " producto/s a tu carrito");
    }
    
    return(
        <div className="container text-start border shadow m-3 pb-3">
        
          {/* <!-- Portfolio Item Heading --> */}
          <h1 className="my-4">{props.name}
            <small className="text-success text-opacity-50 mx-2"> por "{props.author}"</small>
          </h1>
        
          {/* <!-- Portfolio Item Row --> */}
          <div className="row">
        
            <div className="col-md-8 d-flex justify-content-center">
              <img className="img-fluid h-100" src={props.img} alt={props.name}/>
            </div>
        
            <div className="col-md-4">
              <h3 className="my-3">Descripción</h3>
              <p>{props.description}</p>
              <h3 className="my-3">Detalles de compra</h3>

              {onCart? <Link to="/cart" type="button" className="btn btn-light border-success shadow-sm rounded-pill" onClick={() => {removeItem(props)}}>Terminar Compra!</Link> /* la funcion removeItem esta aca solamente de prueba */
              :
              <ItemListCounter stock={props.stock} initial={props.initial} price={props.price} onAdd={onAdd}/>
              }
            </div>
          </div>
        </div>
    );
}

export default ItemDetail