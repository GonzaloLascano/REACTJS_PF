import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cart from './components/cart/Cart'
import {CartContextProvider} from './components/cart/CartContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <ItemListContainer greeting="Bienvenid@ a nuestra tienda!" />
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer greeting="Categoría seleccionada" />
            </Route>
            <Route path="/product/:id">
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
