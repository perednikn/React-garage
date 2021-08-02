import IconCart from './CartWidget.js'
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light opcionesNav">
  <div className="container-fluid topNav NavBarStyle ">
    <NavLink activeClassName="selected navItem" exact to={'/'}>Venta de Garage</NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <NavLink activeClassName="selected" className="navItem" to={'/category/electronico'}>ELECTRONICOS</NavLink>
    <NavLink activeClassName="selected" className="navItem" to={'/category/analogico'}>ANALOGICOS</NavLink>
 
     
      <IconCart />
    </div>
  </div>
</nav>
}
export default NavBar;