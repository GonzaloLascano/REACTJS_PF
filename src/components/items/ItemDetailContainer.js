import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import {db} from '../../service/firebase'
import { getDoc, doc} from "firebase/firestore";


/* componente */

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getDoc(doc(db, 'items', id)).then((QuerySnapshot) => {
            const product = {id: QuerySnapshot.id, ...QuerySnapshot.data()}
            setItem(product)
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