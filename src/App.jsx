
import './App.css';
import CounterContainer from './componentes/Counter/CounterContainer';

import { ItemListContainer } from './componentes/ItemList/ItemListConteiner';
import { Navbar } from './componentes/Navbar/Navbar';

function App() {
  let saludo = "Bienvenido al Nuestro Bodegón!!"

  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer saludo= {saludo}/>
    <CounterContainer/>

    </div>
  );
}
export default App;
