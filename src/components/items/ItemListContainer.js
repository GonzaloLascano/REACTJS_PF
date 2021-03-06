import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../service/firebase'


function ItemListContainer() {
    
    const [items, setItems] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId){
            getDocs(collection(db,'items')).then((querySnapshot)=> {
                const queryProducts = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return {id: doc.id, ...doc.data()}
                })
                setItems(queryProducts);
            })
        }
        else {
            getDocs(query(collection(db, 'items'), where('category', '==', categoryId))).then((querySnapshot)=> {
                const queryProducts = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return {id: doc.id, ...doc.data()}
                })
                setItems(queryProducts);
            })
        }

    },[categoryId])

    return(
        <div className="pt-5 itemListContainer">
            <h1>Bienvenidos!</h1>
            <p>Aqui podras ver una lista de nuestros productos disponibles</p>
            {items? 
            <ItemList items = {items}/> 
            : 
            <div className="spinner-grow text-success m-auto" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }
        </div>
    )
}

export default ItemListContainer