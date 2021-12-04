import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Bienvenid@ a nuestra tienda!" /> */}
      <ItemDetailContainer itemId={2}/>
    </div>
  );
}

export default App;
