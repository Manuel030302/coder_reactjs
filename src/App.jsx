import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Contador from './components/Contador/Contador';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Hola, aqui van los juegos" /> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
      
      {/* <Contador/> */}
    </div>
  );
}

export default App;
