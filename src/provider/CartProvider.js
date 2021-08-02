import React, { useState } from 'react';
import ThemeContext from '../context/CartContext';
import { getFirestore } from '../firebase/firebase';


export default function CartProvider ({defaultValue = [], children}){
   
    const [carrito, setCart] = useState(defaultValue)
    var itemsCarrito = [];
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
        console.log("elemento Agregado")
       
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
    const postCompra = (id) =>{
        alert(`Se creó la orden # ${id}. \n A continuación será redirigido al home`)
        setTimeout(()=>{
            window.location='./';
        }, 100);
        
    }
   
  
    const confirmaCompra = () =>{
    
        let nombre = document.getElementById("nombreCompra")
        let mail = document.getElementById("mailCompra")
        let telefono = document.getElementById("telCompra")
       let totalCompra = 0
        let tablaCarrito = document.getElementById("tablaCarrito")
        let filasTabla = tablaCarrito.rows.length;
        
          let precioTotales = tablaCarrito.getElementsByClassName("precioTotalProducto");
    
    
          if ((nombre.value !== "") && (mail.value !== "") && (telefono.value !== "")){
            //Calcula el valor total de la compra (recorriendo tabla)
            for (let i = 0; i < filasTabla; i++){
                let precio = precioTotales[i].outerText;
                totalCompra += parseInt(precio)
            }
        
        
            
        const db = getFirestore();
        const order = db.collection('orders')
     
        //Crea el Array de items para la order
       const itemCompra = itemsCarrito.map((itemsCarrito) => (
        {id: itemsCarrito.id,
         title:itemsCarrito.title,
         price: itemsCarrito.price}
         
    ))
    var fecha = new Date();
        //Crea la order
        const newOrder = {
            buyer:{
                email: mail.value,
                name: nombre.value,
                phome: telefono.value
            },
            date: fecha.getDate() + '-' + (fecha.getMonth() + 1) + '-' + (fecha.getFullYear()),
            price: totalCompra,
            items: itemCompra
            
        };
    
        order
        .add(newOrder)
        .then(({ id }) => {
           
            postCompra(id)
        })
        .catch(error => {
            console.log("oops");
        })
    }else{
        alert("para realizar la compra debe ingresar correctamente sus datos")
    }
    
    }
    const [itemsTodos, setItemsTodos] = useState([]);
    const llamarDB = () => {
        const dataBase = getFirestore();
        const itemCollection = dataBase.collection('items')
        
        itemCollection.get().then(querySnapshot => {
            if (querySnapshot.size === 0){
                console.log("Sin info");
              
            }
            setItemsTodos(querySnapshot.docs.map(doc => doc.data()));
        })
        return itemsTodos;
    }


    return(
        <ThemeContext.Provider 
        value={{ carrito, addToCart, isInCart, cartSize, cantCarrito: carrito.length, removeFromCart, confirmaCompra, postCompra, llamarDB, itemsTodos }}
        >
            {children}
        </ThemeContext.Provider>
    );

}