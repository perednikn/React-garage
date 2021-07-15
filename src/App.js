import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import CartProvider from './provider/CartProvider.js';
import Cart from './components/Cart.js'





function App() {
  
  return (
<CartProvider>
    <BrowserRouter>
    <NavBar />

    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
    
      <Route exact path="/category/:id">
          <ItemListContainer />
      </Route>
    
      <Route path="/item/:id">
        <ItemDetailContainer />
      </Route>
    
      <Route exact path="/contacto">
        <h2>ACA VAN MIS DATOS</h2>
      </Route>
    
      <Route exact path="/category/electronico">
        <h2> ARTICULOS FILTRADOS POR SER ANALOGICOS</h2>
      </Route>
    
      <Route exact path="/category/analogico">
        <h2> ARTICULOS FILTRADOS POR SER ANALOGICOS</h2>
      </Route>
    
      <Route exact path="/cart">
       <Cart />
      </Route>
    </Switch>
    
    
    </BrowserRouter>
    </CartProvider>

  )





  
  

}

export default App;
