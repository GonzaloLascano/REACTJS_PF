import { useState } from "react";

const ItemListCounter = (props) => {
    const [amount, setAmount] = useState(props.initial);


    function addCount() {
       amount < props.stock ? setAmount(amount + 1) : setAmount(amount + 0);
    }

    function substractCount() {
        (amount > 1) && setAmount(amount - 1);
    }

    return (
        <div className="counterContainer w-100 mx-auto my-2 shadow">
        <div className="countInfo border bg-light mb-2 p-2">
            <p className="itemDescription h5">
            Precio: ${props.price} - {props.stock} en stock.
            </p>
            <div className="counterHandles d-flex justify-content-between border p-2 rounded-pill">
                <button type="button" className="btn btn-success rounded-pill" onClick={substractCount}>-</button>
                <p className="border-bottom w-25 m-0 align-middle text-center">{amount}</p>
                <button type="button" className="btn btn-success rounded-pill" onClick={addCount}>+</button>
            </div>
        </div>
        <button type="button" className="btn btn-outline-success w-100" onClick={() => {props.onAdd(amount)}}>Agregar al Carrito</button> 
    </div>    
    );
}

export default ItemListCounter;