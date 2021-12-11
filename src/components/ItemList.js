import Item from "./Item";

function ItemList ({items}) {
    
    return(
        <div className="p3 d-flex flex-md-row justify-content-center">
            {items.map((item)=>{
                console.log(item.id);
                return (<Item key={item.id} id={item.id} name={item.name} img={item.img} description={item.description} price={item.price}/>);
            })}       
        </div>
    );
};

export default ItemList;