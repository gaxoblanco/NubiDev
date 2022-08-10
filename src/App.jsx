

import './App.css'
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {ProductCard} from './components/ProductCard';
import {AddCart} from './components/AddCart';
import {CartCard} from './components/CartCard';
import {Search} from './components/Search';
import {Form} from './components/Form';


function App() {

  return (
    <div className="App">
    <Header />
    <div className="root-home"><p>ruta - Home </p></div>
    <ProductCard />
    <AddCart />
    <CartCard />
    <Search />
    <Footer />
    <Form />
    </div>
  )
}

export default App
