import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../service/firebase'

const STORED_ITEMS = [
    {id:1, name:"Rompiente", category:"bastidor", img:"/assets/images/Rompiente.jpeg", description:"Acuarela sobre papel compuesta por trazos solidos en su mayoria", price:"$5000"}, 
    {id:2, name:"Cuchara", category:"papel", img:"/assets/images/Cuchara.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", price:"$2000"},
    {id:3, name:"Camino Otoñal", category:"bastidor", img:"/assets/images/Camino_Otonial.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", price:"$6000"},
    {id:4, name:"Flores Indigo", category:"papel", img:"/assets/images/Flores_indigo.jpeg", description:"Acuarela sobre bastidor. Se utilizo mayormente pincel humedo.", price:"$1000"}

];

/* function productPromise(categoryId) {
    
    return new Promise ((resolve, reject) => {
        let resolvedItems = [];

        setTimeout(function(){
            categoryId ?
                resolvedItems = STORED_ITEMS.filter((product) => product.category === categoryId)
                :
                resolvedItems = [...STORED_ITEMS];
            resolve(resolvedItems);
        },2000);
    });
} */

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
                /* if (categoryId){
                    let categoryProducts = queryProducts.filter((product) => product.category === categoryId)
                    setItems(categoryProducts)}
                else{
                setItems(queryProducts);
                } */
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