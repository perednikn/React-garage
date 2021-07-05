
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

function Item({id, title, price, pictureUrl, stock}){
  
    let routerPath = "/item/" + id;
    let imgPath = "/images/" + pictureUrl;
  
return(
<div className="fichaProducto" id={id}>
                    <img src={imgPath} alt={"Imagen Producto"} />
                    <p className="nombreProducto"> Nombre: {title}</p>
                    <p className="detalleProducto"> Precio: {price}</p>
                    <ItemCount stock={stock}/>
                    <Link className="verDetalle" to={routerPath}> DETALLE</Link>
</div>
)
}

export default Item;