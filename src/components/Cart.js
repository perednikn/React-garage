import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../context/CartContext';
import ItemCart from './ItemCart';

const Cart  = () => {
const { cantCarrito } = useContext(ThemeContext)
const [ items, setItems ] = useState([])
const { carrito } = useContext(ThemeContext)
/* const [condition, setCondition] = useState(false); */

const listaArt = [
    {id: 1, title: "Parlante", price: 500, pictureUrl: "parlante.png", detalle: "JBL GO", stock: 20, categoria: "electronico", cantidad: 0},
    {id: 2, title: "Encendedor", price: 1500, pictureUrl: "encendedor.png", detalle: "Clipper", stock: 30, categoria: "analogico", cantidad: 0},
    {id: 3, title: "Cuenco", price: 3500, pictureUrl: "cuenco.png", detalle: "Ceramica", stock: 10, categoria: "analogico", cantidad: 0},
    {id: 4, title: "Cartas", price: 50, pictureUrl: "milogo.jpg", detalle: "asdasd", stock: 7, categoria: "analogico", cantidad: 0}
];
let cantidad = 0;
var itemsCarrito = [];

if (cantCarrito !== 0){
    
    for (let i = 0; i < cantCarrito; i++){
       
       itemsCarrito.push(listaArt.find(item => item.id === carrito[i].item));
       
       console.table(itemsCarrito);
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
                        <tbody>

                            {itemsCarrito.map((itemsCarrito) => (
                                <ItemCart id={itemsCarrito.id} title={itemsCarrito.title} price={itemsCarrito.price} pictureUrl={itemsCarrito.pictureUrl} stock={itemsCarrito.stock} key={itemsCarrito.id} />
                            ))}

                        </tbody>
                    </table>

                </div>
</div>) : (
            <div className="divMapeado carritoVacio">
             <h2> EL CARRO TA VACIO</h2>
                <NavLink to={'/'}> ANDA A COMPRA COSITA</NavLink>
             </div>
        )
        }
        </div>
    </div>
)
}

export default Cart;