import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

const LOADED_ITEMS = [{id:"1", name:"Rompiente", img:"../public/assets/images/Rompiente.jpeg", description:"Una roca en medio de un oceano agitado", price:"$5000"}, {id:"2", name:"Cuchara", img:"../public/assets/images/Cuchara.jpeg", description:"Una cuchara posada sobre un plato.", price:"$2000"}]

function productPromise() {
    return new Promise ((resolve, reject) =>{
        setTimeout(function(){
            resolve(LOADED_ITEMS)
        },2000);
    });
}

function ItemListContainer() {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        let loadItems = productPromise();
        
        loadItems.then( function(promise_result) {
            setItems(promise_result);
        })
        .finally(
            function() {
                console.log("Promesa cumplida exitosamente.");
            }
        )
    },[]);

    return(
        <div className="pt-5 itemListContainer">
            <h1>{props.greeting} Bienvenidos!</h1>
            <p>Aqui podras ver una lista de nuestros productos disponibles</p>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer