import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../context/CartContext';
import ItemCart from './ItemCart';
import { getFirestore } from '../firebase/firebase';


const Cart  = () => {
const { cantCarrito } = useContext(ThemeContext)
const { carrito } = useContext(ThemeContext)
const { confirmaCompra } = useContext(ThemeContext)


const listaArt = [
    {id: 1, title: "Parlante", price: 345, pictureUrl: "parlante.png", detalle: "JBL GO", stock: 30, categoria: "electronico", cantidad: 0},
    {id: 2, title: "Encendedor", price: 1500, pictureUrl: "encendedor.png", detalle: "Clipper", stock: 20, categoria: "analogico", cantidad: 0},
    {id: 3, title: "Cuenco", price: 88, pictureUrl: "cuenco.png", detalle: "Ceramica", stock: 10, categoria: "analogico", cantidad: 0},
    {id: 4, title: "Cartas", price: 50, pictureUrl: "cartas.png", detalle: "Naipes Poker", stock: 7, categoria: "analogico", cantidad: 0},
    {id: 5, title: "Afinador", price: 2150, pictureUrl: "afinador.png", detalle: "Afinador Guitarra por vibracion", stock: 2, categoria: "electronico", cantidad: 0},
    {id: 6, title: "Control TV", price: 3999, pictureUrl: "control.png", detalle: "Control Magico TV LG", stock: 4, categoria: "electronico", cantidad: 0}
];



let cantidad = 0;
var itemsCarrito = [];

if (cantCarrito !== 0){
    for (let i = 0; i < cantCarrito; i++){
        itemsCarrito.push(listaArt.find(item => item.id === carrito[i].item));
        
    }
}

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
                        <tbody id="tablaCarrito">

                            {itemsCarrito.map((itemsCarrito) => (
                                <ItemCart id={itemsCarrito.id} title={itemsCarrito.title} price={itemsCarrito.price} pictureUrl={itemsCarrito.pictureUrl} stock={itemsCarrito.stock} key={itemsCarrito.id} />
                            ))}

                        </tbody>
                    </table>
                 
                    <form> 
                    <input type="text" id="nombreCompra" placeholder="Ingresá tu nombre"/> 
                    <input type="mail" id="mailCompra" placeholder="Ingresá tu mail"/> 
                    <input type="tel" id="telCompra" placeholder="1132021096" pattern="[0-9]{10}"/> 
                    <button type="button" className="btnConfirmar" onClick={() => confirmaCompra()}>Confirmá tu compra</button>          
                    </form>
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