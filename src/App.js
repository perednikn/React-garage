import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import CartProvider from './provider/CartProvider';






function App() {
  
  return (

    <BrowserRouter>
    <NavBar />

    <Switch>
      <Route exact path="/">
        <CartProvider>
            <ItemListContainer />
        </CartProvider>
      </Route>
    
      <Route exact path="/category/:id">
        <CartProvider>
          <ItemListContainer />
        </CartProvider>
      </Route>
    
      <Route path="/item/:id">
       <CartProvider>
        <ItemDetailContainer />
        </CartProvider>
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
    
      <Route path="/cart">
       <CartProvider>
          <h2> CARRITO</h2>
        </CartProvider>
      </Route>
    </Switch>
    
    
    </BrowserRouter>

  )





  
  

}

export default App;
