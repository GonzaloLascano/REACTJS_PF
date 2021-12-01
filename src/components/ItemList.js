import Item from "./Item";

function ItemList ({items}) {
    
    return(
        <div className="p3 d-flex flex-md-row justify-content-center">
            {items.map((item)=>{
                return (<Item key={item.id} name={item.name} img={item.img} description={item.description} price={item.price}/>);
            })}       
        </div>
    );
};

export default ItemList;