import './App.css';
/* import CounterContainer from './componentes/Counter/CounterContainer'; */
import { ItemListContainer } from './componentes/ItemList/ItemListConteiner';
import { Navbar } from './componentes/Navbar/Navbar';
import { ItemDetailContainer } from './componentes/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from './componentes/Cart/CartContainer';

function App() {
  /* gi */

  return (
    
    <BrowserRouter>
    
    <Routes>

      <Route element={ <Navbar/> }>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/category/:name" element={ <ItemListContainer/> } />
        <Route path="/itemDetail/:id" element={ <ItemDetailContainer/> } />
        <Route path="/cart" element={ <CartContainer/> }/>
        <Route path="/*" element={<h1>No Existe</h1>} />
      </Route>

    </Routes>
    
    </BrowserRouter>
    /* {<div className="App">
    <Navbar/>
    <ItemListContainer saludo= {saludo}/>
    <CounterContainer/>

    </div>} */
  );
}
export default App;
