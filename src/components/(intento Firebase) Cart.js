import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import ThemeContext from '../context/CartContext';
import ItemCart from './ItemCart';
import { getFirestore } from '../firebase/firebase';

const Cart  = () => {
    const { cantCarrito } = useContext(ThemeContext)
    const [items, setItems] = useState([]);
    const [itemsCart, setItemsCart] = useState([]);
    const { carrito } = useContext(ThemeContext)
   
    useEffect(() => {

    const dataBase = getFirestore();
    const itemCollection = dataBase.collection('items')
    
    itemCollection.get().then(querySnapshot => {
        if (querySnapshot.size === 0){
            console.log("Sin info");
          
        }
        setItems(querySnapshot.docs.map(doc => doc.data()));
    })
//Evalúa si el contenido del carrito es distinto a cero para recorrerlo y filtrar de todos los elementos de Item
//sólo aquellos que estén el carrito para mostrarlos antes de finalizar la compra
    if (cantCarrito !== 0){
        for (let i = 0; i < cantCarrito; i++){
            console.log("Aca en el for, comenten")
            setItemsCart(...itemsCart, items.map(a => a.id === carrito[i].item))

        }}

}, []);


return(

    <div>
        
        <div>
            {cantCarrito !== 0 ? (<div>

                <div className="divMapeado cartContenido">
                    <table className="table tablaCart">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Precio U.</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                                <th scope="col">X</th>
                            </tr>
                        </thead>
                        <tbody>

                            {itemsCart.map((itemsCarrito) => (
                                <ItemCart id={itemsCarrito.id} title={itemsCarrito.title} price={itemsCarrito.price} pictureUrl={itemsCarrito.pictureUrl} stock={itemsCarrito.stock} key={itemsCarrito.id} />
                            ))}

                        </tbody>
                    </table>

                </div>
</div>) : (
            <div className="divMapeado carritoVacio">
             <h2> ¿Todavía no elegiste nada? </h2>
                <NavLink  className="btn btn-success btnCompraMas" to={'/'}> Recorré nuestro Garage</NavLink>
                
             </div>
        )
        }
        </div>
    </div>
)
}

export default Cart;