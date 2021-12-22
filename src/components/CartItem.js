import React from "react";
import { Link } from 'react-router-dom';
import useCartContext from "./CartContext";

function CartListItem (props) {
    const { removeItem } = useCartContext;
    
    return(
        <>
            <div className="row mb-4 d-flex justify-content-between align-items-center">
                
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <Link to={`/product/${props.id}`}><img src={props.img} className="img-fluid rounded-3 shadow border" alt={props.name}/></Link>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h6 className="text-muted">{props.category}</h6>
                  <h6 className="text-black mb-0">{props.name}</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex justify-content-center">
                  
                  <p id="form1" className="border-bottom m-0">{props.amount}</p>
                  
                  
                </div>
                
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h6 className="mb-0">${props.price}</h6>
                </div>
                <div onClick={() => props.remove(props)} className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <i className="fas fa-times"></i>
                </div>

            </div>
          
            <hr className="my-4"/>
        </>
    )
}

export default CartListItem;