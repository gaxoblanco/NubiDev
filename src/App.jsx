

import './App.css'
import {ProductCard} from './components/ProductCard';
import {AddCart} from './components/AddCart';
import {CartCard} from './components/CartCard';
import {Search} from './components/Search';
import {Form} from './components/Form';

import {Cart} from './screens/Cart';


function App() {

  return (
    <div className="App">
    <div className="root-home"><p>ruta - Home </p></div>

    {/* <Cart /> */}


    <ProductCard />
    <AddCart />
    <CartCard />
    <Search />
    <Form />

    </div>
  )
}

export default App
