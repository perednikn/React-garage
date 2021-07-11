import React, { useContext, useState } from 'react';
import ThemeContext from '../context/CartContext';

export default function CartProvider ({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue)

    function getFromCart(id){
        return cart.find (x => x.item === id);
        /* 
        Saco esta linea porque todavía no trabajo con id en el cart, pq no sumo unidades
         return cart.find (x => x.id === id);
        */
    }
    function isInCart(id){
        return id === undefined ? undefined: getFromCart(id) !== undefined;
    }

    function addToCart(obj, cantidad){
       
       debugger;
        if (isInCart(obj)){
            console.log("El objeto ya existe en el carrito");
            return;
        }
        setCart([...cart, {item: obj, cant: cantidad}]);
        console.log("elemento Agregadooooo")
    }

    return(
        <ThemeContext.Provider 
        value={{ cart, addToCart, isInCart, cartSize: cart.length}}
        >
            {children}
        </ThemeContext.Provider>
    );

}