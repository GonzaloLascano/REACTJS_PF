import React from "react";
import ItemListCounter from "./ItemListCounter"

function ItemDetail (props) {
    return(
        <div className="container text-start border shadow m-3 pb-3">
        
          {/* <!-- Portfolio Item Heading --> */}
          <h1 className="my-4">{props.name}
            <small className="text-success text-opacity-50 mx-2">{props.author}</small>
          </h1>
        
          {/* <!-- Portfolio Item Row --> */}
          <div className="row">
        
            <div className="col-md-8 d-flex justify-content-center">
              <img className="img-fluid" src={props.img} alt={props.name}/>
            </div>
        
            <div className="col-md-4">
              <h3 className="my-3">Descripción</h3>
              <p>{props.description}</p>
              <h3 className="my-3">Detalles de compra</h3>
              {/* <!-- contador de items! --> */}
              <ItemListCounter stock={props.stock} initial={props.initial} price={props.price}/>
              {/* <!-- /contador de items! --> */}
            </div>
          </div>
        </div>
    );
}

export default ItemDetail