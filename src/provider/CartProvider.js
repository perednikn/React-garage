import React, { useContext, useState } from 'react';
import ThemeContext from '../context/CartContext';

export default function CartProvider ({defaultValue = [], children}){
    const [clickeado, setClickeado] = useState(false);
    const [carrito, setCart] = useState(defaultValue)
  
    function getFromCart(id){
        return carrito.find (x => x.item === id);
        }
    function isInCart(id){
        return id === undefined ? undefined: getFromCart(id) !== undefined;
    }

    function addToCart(obj, cantidad){
        if (isInCart(obj)){
            console.log("El objeto ya existe en el carrito");
            
            return;
        }else{
        setCart([...carrito, {item: obj, cant: cantidad}]);
        console.log("elemento Agregadooooo")
        /* setClickeado(true); */
    }
    }

    function removeFromCart(id){
      
        var nuevoCarrito = []
         for(let elemento of carrito){
            if (elemento.item !== id){
                nuevoCarrito.push(elemento)
            }
        } 
        setCart(nuevoCarrito);
    }

    function cartSize(){
        let size = 0;
        for (let i = 0; i < carrito.length; i++){
            size += carrito[i].cant;
        }
        return size;
    }
    function clickeadoFalse(){
        setClickeado(false)
    }
    return(
        <ThemeContext.Provider 
        value={{ carrito, addToCart, isInCart, cartSize, clickeadoFalse, clickeado, cantCarrito: carrito.length, removeFromCart}}
        >
            {children}
        </ThemeContext.Provider>
    );

}