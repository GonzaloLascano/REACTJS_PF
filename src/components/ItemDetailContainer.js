import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ItemDetail from "./ItemDetail";

const STORED_ITEMS = [
    {id:"1", name:"Rompiente", author:"Admigual", img:"/assets/images/Rompiente.jpeg", description:"Acuarela sobre papel compuesta por trazos solidos en su mayoria", stock:4, initial:1, price:"$5000"}, 
    {id:"2", name:"Cuchara", author:"La Glorieta",img:"/assets/images/Cuchara.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", stock:6, initial:1,  price:"$2000"},
    {id:"3", name:"Camino Otoñal", author:"Admigual", img:"/assets/images/Camino_Otonial.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", stock:1, initial:1,  price:"$6000"},
    {id:"4", name:"Flores Indigo", author:"La Glorieta", img:"/assets/images/Flores_indigo.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.",  stock:12, initial:1, price:"$1000"}
];

function DetailPromise(idReq) {
    return new Promise ((resolve, reject) =>{
        setTimeout( function() {
            const itemRequested = STORED_ITEMS.find((element) => {
                return element.id === idReq
            });
            itemRequested ? resolve(itemRequested) : reject (alert("No se encontro el Articulo."));
            },2000)
    });
}

/* componente */

function ItemDetailContainer({itemId=1}) {
    const [item, setItem] = useState(null);

    useEffect(() =>{
        const detailedItem = DetailPromise(itemId);

        detailedItem
        .then(function (foundItem){
            stateItem(foundItem);
        })
        .finally(function() {
            console.log("promesa cumplida")
        });
    },[]);

    return(
        <ItemDetail
        key={item.id}
        name={item.name}
        author={item.author}
        description={item.description}
        img={item.img}
        stock={item.stock}
        initial={item.initial}
        price={item.price}/>
    );
}

export default ItemDetailContainer
