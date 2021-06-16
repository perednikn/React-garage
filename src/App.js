import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemList from './components/ItemListContainer.js'
import IconCart from './components/CartWidget.js'
import Milogo from './Img/milogo.jpg';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
//import { BrowserRouter } from 'react-router-dom';




function App() {
  


  return (

    <BrowserRouter>
    <NavBar />

    <Switch>
      <Route exact path="/">
      <h2>Este es el home  de es una venta de garage </h2>
      </Route>
      <Route exact path="/articulos">
        <ItemListContainer />
      </Route>
      <Route exact path="/articulos/:id">
        <ItemDetailContainer />
      </Route>

    </Switch>
    
    
    </BrowserRouter>

  )




  {/* <div className="NavBar">
  <NavBar />
  </div>
  <h2>Esta es una venta de garage </h2>
  <div className="container" id="divArticulos"></div>
  <ItemList />
   */}
  
  

}

export default App;
