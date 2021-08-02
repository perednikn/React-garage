import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import ThemeContext from '../context/CartContext';



function ItemCount({ stock, initial}) {
    const { id } = useParams();
    const parseId = parseInt(id);
    const [clickeado, setClickeado] = useState(false); 
    const { addToCart }  = useContext(ThemeContext);
    
     const onAdd = () => {
        setClickeado(true);
        addToCart(parseId, cantidad)
    }
    
 
    let stockInicial = 1;
    const [cantidad, setCantidad] = useState(stockInicial);
    let stockActual = stock;

    return ( 
       
       (clickeado ? 
        <div className="btnProductoAgregado"> 
          <Link className="btn btn-success btnAlCart"  to={'/cart'}>IR AL CARRITO</Link> <br/>
          <Link className="btn btn-success btnCompraMas" to={'/'}>SEGUÍR COMPRANDO</Link>
        </div>
         :
        <div>
            <div className="ItemsEnCarrito">  
            <p>Comprá:</p>  <br/>
                <span className="cantCarrito"><p className="restaStock" onClick={() => {cantidad >= 1 && setCantidad(cantidad - 1); }}>-</p>
                    {cantidad}
                    <p onClick={() => {if (cantidad < stockActual){setCantidad(cantidad + 1);}}}>+</p>
                </span><br/>
                <p> De los {stockActual} disponibles</p>
            </div>
            
            
            <div className="botonAgregar">
                <button type="button" className="btn btn-success" onClick={() => onAdd()}>Agregar a Carrito</button>
            </div>
        
        </div> 

    
))   

}
export default ItemCount;