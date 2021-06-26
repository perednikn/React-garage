import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';





function App() {
  


  return (

    <BrowserRouter>
    <NavBar />

    <Switch>
      <Route exact path="/">
      <ItemListContainer />
      {/* <h2 className="bannerHome"> ESTA ES MI VENTA DE GARAGE </h2> */}
      
      </Route>
      <Route exact path="/category/:id">
      <ItemListContainer />
      </Route>
      <Route path="/item/:id">
        <ItemDetailContainer />
      </Route>
      <Route exact path="contacto">
        <h2>ACA VAN MIS DATOS</h2>
      </Route>
      <Route path="/category/electronico">
      <h2> ARTICULOS FILTRADOS POR SER ANALOGICOS</h2>
      </Route>
      <Route path="/category/analogico">
        <h2> ARTICULOS FILTRADOS POR SER ANALOGICOS</h2>
      </Route>
      <Route path="/cart">
        <h2> CARRITO</h2>
      </Route>
    </Switch>
    
    
    </BrowserRouter>

  )





  
  

}

export default App;
