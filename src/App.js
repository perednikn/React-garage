import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
//import ItemList from './components/ItemListContainer.js'
//import IconCart from './components/CartWidget.js'
//import Milogo from './Img/milogo.jpg';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
//import { BrowserRouter } from 'react-router-dom';




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

    </Switch>
    
    
    </BrowserRouter>

  )





  
  

}

export default App;
