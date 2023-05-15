import "./App.css";
/* import CounterContainer from './componentes/Counter/CounterContainer'; */
import { ItemListContainer } from "./componentes/ItemList/ItemListConteiner";
import { Navbar } from "./componentes/Navbar/Navbar";
import { ItemDetailContainer } from "./componentes/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./componentes/Cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import { FormCheckoutContainer } from "./componentes/FormCheckout/FormCheckoutContainer";
import Form from "./componentes/Form/Form";


/* import { useParams } from 'react-router-dom'; */

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/form" element={<Form/>} />
            <Route path="/checkout" element={<FormCheckoutContainer/>} />
            <Route path="*" element={<h1>No Existe</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
    /* {<div className="App">
    <Navbar/>
    <ItemListContainer saludo= {saludo}/>
    <CounterContainer/>

    </div>} */
  );
}
export default App;
