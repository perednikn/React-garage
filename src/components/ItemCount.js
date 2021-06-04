import React, { useState } from 'react';

function ItemCount({ stock, initial}) {
 const [cantidad, setCantidad] = useState(initial);
   
 let stockActual = stock;

    const addItems = () => {
        if (cantidad < stockActual){
            setCantidad(cantidad + 1);
        }}

    const restaItems = () => {
        cantidad >= 1 && setCantidad(cantidad - 1);
        }


    /* useState(initial); */

    return (<div><div className="ItemsEnCarrito"> 
    <button className="btnRestaCarrito"
    onClick={restaItems}
    > - </button>
    <p> En carrito: {cantidad}</p>
    <button 
    onClick={addItems}
    > + </button>
    </div>
    <p> Stock disponible: {stockActual}</p>
    </div> 

    )

}
export default ItemCount;