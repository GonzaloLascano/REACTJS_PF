import ItemListCounter from "./ItemListCounter"
import { Link } from 'react-router-dom';
import useCartContext from "../cart/CartContext";

function ItemDetail (props) {
    const { addItem, isInCart } = useCartContext();

    function onAdd(amount) {
      addItem(props, amount);
      console.log("felicidades! agregaste " + amount + " producto/s a tu carrito");
    }
    
    return(
        <div className="container text-start border shadow mt-3 mx-auto pb-3">
        
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
              <hr/>
              <h3 className="my-3">Detalles de compra</h3>

              {props.stock === 0 ? 
                <>
                  <p className="text-secondary">
                    Ups! parece que no hay mas stock de este articulo. Pronto lo vamos a reponer.                  
                  </p>
                  <Link to="/" type="button" className="btn btn-light border-success shadow-sm rounded-pill">Volver a la galería</Link>
                </>
              :
              isInCart(props.id)?
              <>
                <h5>Agregado! que preferis hacer ahora?</h5> 
                <Link to="/cart" type="button" className="btn btn-light border-success shadow-sm rounded-pill">Terminar Compra!</Link>
                <Link to="/" type="button" className="btn btn-light border-success shadow-sm rounded-pill mx-3">Volver a la galería</Link>
              </>
              :
              <ItemListCounter stock={props.stock} initial={props.initial} price={props.price} onAdd={onAdd}/>
              }
            
            </div>
          </div>
        </div>
    );
}

export default ItemDetail