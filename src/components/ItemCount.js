import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import ThemeContext from '../context/CartContext';



function ItemCount({ stock, initial}) {
    const { id } = useParams()
    const [clickeado, setClickeado] = useState(false);
    const { addToCart }  = useContext(ThemeContext);
    const onAdd = (cantidadCarrito) => {
        setClickeado(true);
        
        console.log("TE MANDO " + cantidadCarrito + " DE ESAS PAL CHANGO")
    }
    
 
    let stockInicial = 1;
 
    const [cantidad, setCantidad] = useState(stockInicial);
   
     let stockActual = stock;




    return ( 
       
        (clickeado ?  <Link className="btn btn-success" to={'/cart'}>IR AL CARRITO</Link> :
    
        
            <div><div className="ItemsEnCarrito"> 
  
    <span className="cantCarrito"><p className="restaStock" onClick={() => {cantidad >= 1 && setCantidad(cantidad - 1); }}>-</p>
    {cantidad}
    <p onClick={() => {if (cantidad < stockActual){setCantidad(cantidad + 1);}}}>+</p>
    </span>
  
    </div>
    <p> Stock disponible: {stockActual}</p>

    <button type="button" className="btn btn-success" onClick={ () => addToCart(id, cantidad)}>Agregar a Carrito</button>
    </div> 

    
    ) )   

}
export default ItemCount;