import './App.css';
import ItemListCounter from './components/ItemListCounter'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenid@ a nuestra tienda!" />
      <ItemListCounter productName="Faroles" initial={1} stock={5}/>
      <ItemListCounter productName="Cuadro Acuarelas" initial={1} stock={5}/>
      <ItemListCounter productName="Velas Aromaticas" initial={12} stock={60}/>
    </div>
  );
}

export default App;
