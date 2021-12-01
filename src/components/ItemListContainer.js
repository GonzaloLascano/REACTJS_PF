import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

const STORED_ITEMS = [
    {id:"1", name:"Rompiente", img:"/assets/images/Rompiente.jpeg", description:"Acuarela sobre papel compuesta por trazos solidos en su mayoria", price:"$5000"}, 
    {id:"2", name:"Cuchara", img:"/assets/images/Cuchara.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", price:"$2000"},
    {id:"3", name:"Camino Otoñal", img:"/assets/images/Camino_Otonial.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", price:"$6000"},
    {id:"4", name:"Flores Indigo", img:"/assets/images/Flores_indigo.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", price:"$1000"}
];

function productPromise() {
    
    return new Promise ((resolve, reject) => {
        setTimeout(function(){
            resolve(STORED_ITEMS)
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
    },[])

    return(
        <div className="pt-5 itemListContainer">
            <h1>Bienvenidos!</h1>
            <p>Aqui podras ver una lista de nuestros productos disponibles</p>
            <ItemList items = {items}/>
        </div>
    )
}

export default ItemListContainer