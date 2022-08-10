

import './App.css'
import {Header} from './components/Header';
import {ProductCard} from './components/ProductCard';
import {AddCart} from './components/AddCart';
import {CartCard} from './components/CartCard';
function App() {

  return (
    <div className="App">
    <Header />
    <div className="root-home"><p>ruta - Home </p></div>
    <ProductCard />
    <AddCart />
    <CartCard />
    </div>
  )
}

export default App
