import IconCart from './CartWidget.js'
import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar () {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid topNav">
    <NavLink activeClassName="selected" exact to={'/'}>Venta de Garage</NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul>
    <NavLink activeClassName="selected" className="navItem" to={'/item/:id'}>ITEM DETAIL</NavLink>
     <NavLink activeClassName="selected"  className="navItem" to="{'/category/electronico'}">ELECTRONICOS</NavLink>
     <NavLink activeClassName="selected"  className="navItem"to="{'/category/analogico'}">ANALOGICOS</NavLink>
     <NavLink activeClassName="selected"  className="navItem" to="{'/contacto'}">CONTACTO</NavLink>
     </ul>
    
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Cuánto queres gastar?" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Randomize</button>
      </form>
      <IconCart />
    </div>
  </div>
</nav>
}
export default NavBar;