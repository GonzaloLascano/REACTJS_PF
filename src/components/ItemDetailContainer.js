import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import {db} from '../service/firebase'/* !! */
import { collection, getDocs} from "firebase/firestore";

const STORED_ITEMS = [
    {id:1, name:"Rompiente", category:"bastidor", author:"Admigual", img:"/assets/images/Rompiente.jpeg", description:"Acuarela sobre papel compuesta por trazos solidos en su mayoria.", stock:4, initial:1, price:5000}, 
    {id:2, name:"Cuchara", category:"papel", author:"La Glorieta",img:"/assets/images/Cuchara.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo. Retrato de una cuchara sobre un plato con sombras abstractas de fondo. Le dan un tinte minimalista y reflexivo.", stock:6, initial:1,  price:2000},
    {id:3, name:"Camino Otoñal", category:"bastidor", author:"Admigual", img:"/assets/images/Camino_Otonial.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", stock:1, initial:1,  price:6000},
    {id:4, name:"Flores Indigo", category:"papel", author:"La Glorieta", img:"/assets/images/Flores_indigo.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.",  stock:12, initial:1, price:1000}
];

function DetailPromise(idReq) {
    return new Promise ((resolve, reject) =>{
        setTimeout(function() {
            const itemRequested = STORED_ITEMS.find((element) => {
                return element.id === idReq
            });
            itemRequested ? resolve(itemRequested) : reject(console.log("No se encontro el Articulo."));
            },2000);
    });
}

/* componente */

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        let detailedItem = DetailPromise(Number(id));

        detailedItem
        .then(function (foundItem){
            setItem(foundItem);
        })
        .catch(function(error){
            console.log(error);
        })
    },[id]);

    return(
        <>
            {item ?
            <ItemDetail
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            author={item.author}
            description={item.description}
            img={item.img}
            stock={item.stock}
            initial={item.initial}
            price={item.price}/> 
            :
            <h3 className="m-5 d-flex">
                <div className="spinner-grow text-success mx-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                Cargando Items!
                <div className="spinner-grow text-success mx-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </h3>
            }
        </>
    );
}

export default ItemDetailContainer