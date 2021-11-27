import { useState } from "react";

const ItemListCounter = (props) => {
    const [amount, setAmount] = useState(props.initial)

    function addCount() {
       amount < props.stock ? setAmount(amount + 1) : setAmount(amount + 0);
    }

    function substractCount() {
        amount > 1? setAmount(amount - 1): setAmount(amount-0);
    }
    function onAdd() {
        console.log("felicidades! agregaste" + amount + "producto/s a tu carrito");
    }
    return (
        <div className="counterContainer w-75 m-auto">
        <div className="countInfo border bg-light mb-2 p-2">
            <p className="itemDescription">
                Faroles: {props.stock} en stock.
            </p>
            <div className="counterHandles d-flex justify-content-between border p-2 rounded-pill">
                <button type="button" className="btn btn-success rounded-pill" onClick={addCount}>+</button>
                <p class="border-bottom w-25 m-0 align-middle text-center">{amount}</p>
                <button type="button" className="btn btn-success rounded-pill" onClick={substractCount}>-</button>
            </div>
        </div>
        <button type="button" className="btn btn-outline-success w-100" onClick={onAdd}>Agregar al Carrito</button>
    </div>    
    );
}