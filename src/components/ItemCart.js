
import {Link} from 'react-router-dom';
import { useContext } from 'react'
import ThemeContext from '../context/CartContext';

function ItemCart({id, title, price, pictureUrl}){

    const { carrito, removeFromCart } = useContext(ThemeContext);

    const itemCant = carrito.filter(a => a.item === id);
    var cantidadPedida = itemCant[0].cant;
    debugger;
  
    let precio = price * cantidadPedida;
    let imgPath = "/images/" + pictureUrl;
  
return(<tr className="filaCart">
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td><img src={imgPath} alt={"Imagen Producto"} /></td>
      <td>{price}</td>
      <td>{cantidadPedida}</td> 
      <td>{precio}</td>
      <td><button onClick={() => {removeFromCart(id)}}>X</button></td>
      </tr>

)
}

export default ItemCart;