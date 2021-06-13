import React, { useState } from 'react';

function ItemCount({ stock, initial}) {
    const onAdd = () => {
        console.log("Ha modificado el carrito");
    }
    
 
    let stockInicial = 1;
 
const [cantidad, setCantidad] = useState(stockInicial);
   
 let stockActual = stock;



    /* useState(initial); */

    return (<div><div className="ItemsEnCarrito"> 
    <button className="btnRestaCarrito"
    onClick={() => {cantidad >= 1 && setCantidad(cantidad - 1); }}> - </button>
    <p> En carrito: {cantidad}</p>
    <button 
    onClick={() => {if (cantidad < stockActual){setCantidad(cantidad + 1);}}}> + </button>
    </div>
    <p> Stock disponible: {stockActual}</p>

    <button type="button" className="btn btn-success" onClick={onAdd}>Agregar a Carrito</button>
    </div> 

    
    )

}
export default ItemCount;