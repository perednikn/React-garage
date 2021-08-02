import { useContext } from 'react'
import ThemeContext from '../context/CartContext';

function ItemCart({id, title, price, pictureUrl}){

    const { carrito, removeFromCart } = useContext(ThemeContext);
    
    console.table(id)

    const itemCant = carrito.filter(a => a.item === id);
  

    if (itemCant.length > 0){
      var cantidadPedida = itemCant[0].cant;
      
      var precio = price * cantidadPedida;
      var imgPath = "/images/" + pictureUrl;
  }
return( <tr className="filaCart">
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td><img src={imgPath} alt={"Imagen Producto"} /></td>
      <td>{price}</td>
      <td>{cantidadPedida}</td> 
      <td className="precioTotalProducto">{precio}</td>
      <td><button onClick={() => {removeFromCart(id)}}>X</button></td>
      </tr>  )     
}

export default ItemCart;