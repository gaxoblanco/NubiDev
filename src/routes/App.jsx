import '../App.css'
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Home} from '../containers/Home';
import {Cart} from '../containers/Cart';
import {Pedido} from '../containers/Pedido';
import {Confirm} from '../containers/Confirm'
import {Orders} from '../containers/Orders';
import {ProductDetail} from '../containers/ProductDetail';
import {NotFound} from '../containers/NotFound';

import {Layout} from '../components/Layout';
import {AppContext} from '../context/AppContex';
import {useInitialState} from '../hooks/useInitialState';



export const App = () => {
  
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route exact path='/' component = {Home} />
                  <Route exact path='/carrito' component = {Cart} />
                  <Route exact path='/pedido' component = {Pedido} />
                  <Route exact path='/carrito/confirmar' component = {Confirm} />
                  <Route exact path='/ordenes' component = {Orders} />
                  <Route exact path='/detalleproducto' component = {ProductDetail} />
                  <Route component = {NotFound} />
              </Switch>
          </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
