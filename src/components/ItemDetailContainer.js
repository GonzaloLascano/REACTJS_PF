import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const STORED_ITEMS = [
    {id:1, name:"Rompiente", author:"Admigual", img:"/assets/images/Rompiente.jpeg", description:"Acuarela sobre papel compuesta por trazos solidos en su mayoria.", stock:4, initial:1, price:"$5000"}, 
    {id:2, name:"Cuchara", author:"La Glorieta",img:"/assets/images/Cuchara.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo. Retrato de una cuchara sobre un plato con sombras abstractas de fondo. Le dan un tinte minimalista y reflexivo.", stock:6, initial:1,  price:"$2000"},
    {id:3, name:"Camino Otoñal", author:"Admigual", img:"/assets/images/Camino_Otonial.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", stock:1, initial:1,  price:"$6000"},
    {id:4, name:"Flores Indigo", author:"La Glorieta", img:"/assets/images/Flores_indigo.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.",  stock:12, initial:1, price:"$1000"}
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
    const [item, setItem] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        let detailedItem = DetailPromise(Number(id));

        detailedItem
        .then(function (foundItem){
            setItem(foundItem);
        })
        .catch(function(error){
            console.log(error);
        })
        .finally(function() {
            console.log("promesa cumplida");
        });
    },[id]);

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

/* NOTAS ENTREGA 4/12/21: Acabo de terminar el desafio. Tratando de despejar algunas dudas: Siguiendo un poco la guia que hay en slack,
react me tiraba error cuando ponia "null" como parametro en el useState y dejaba los brackets "[]" Antes del cierre de useEffect(). 
No tengo del todo claro por que, despues de probar 20 cosas al sacar ambas cosas (reemplazar el null por brackets en useState y eliminando 
los brackets en useEffect todo empezo a funcionar) */

export default ItemDetailContainer