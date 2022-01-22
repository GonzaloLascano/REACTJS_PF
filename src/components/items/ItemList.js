import Item from "./Item";

function ItemList ({items}) {
    if(items.length === 0){
        return(
        <h5>Uh, oh... Se ve que o no hay productos o hubo un error, por favor intenta de nuevo mas tarde.</h5>
        )
    }
    else {
        return(
            <div className="p3 d-flex flex-md-row justify-content-center">
                {items.map((item)=>{
                    return (<Item key={item.id} id={item.id} name={item.name} img={item.img} description={item.description} price={item.price}/>);
                })}       
            </div>
        );
    }
};

export default ItemList;