const ItemListCounter = (props) => {
    return (
        <div className="counterContainer w-75 m-auto">
        <div className="countInfo border bg-light mb-2 p-2">
            <p className="itemDescription">
                Faroles
            </p>
            <div className="counterHandles d-flex justify-content-between border p-2 rounded-pill">
                <button type="button" className="btn btn-success rounded-pill">+</button>
                <input type="text" className="border-0 shadow-none text-center" placeholder="cantidad productos">
                <button type="button" className="btn btn-success rounded-pill">-</button>
            </div>
        </div>
        <button type="button" className="btn btn-outline-success w-100">Agregar al Carrito</button>
    </div>    
    );
}