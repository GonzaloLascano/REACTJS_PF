import react from "react";
import Item from "./Item";

function ItemList ({items}) {
    
    return(
        <div className="p3 d-flex justify-content-center">
            {items.map((item)=>{
                <item item key={item.id} nombre={item.name} img={item.img} description={item.description} price={item.price}/>
            })}       
        </div>
    );
};

export default ItemList;