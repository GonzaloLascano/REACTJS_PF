
const ITEMS = [{}]

function productPromise() {
    return new Promise ((resolve, reject) =>{
        setTimeout(function(){
            resolve(ITEMS)
        },2000);
    });
}

const ItemListContainer = (props) => {
    return(
        <div className="pt-5 itemListContainer">
            <h1>{props.greeting}</h1>
            <p>Aqui podras ver una lista de nuestros productos disponibles</p>
        </div>
    )
}

export default ItemListContainer