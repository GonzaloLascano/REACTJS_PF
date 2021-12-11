import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="Bienvenid@ a nuestra tienda!" />
          </Route>
          <Route path="/product/:id" exact>
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
