
import {Link} from 'react-router-dom';

function Item({id, title, price, pictureUrl, stock}){
  
    let routerPath = "/item/" + id;
    let imgPath = "/images/" + pictureUrl;
  
return(
    <div className="fichaProducto" id={id}>
        <img src={imgPath} alt={"Imagen Producto"} />
        <p className="nombreProducto">  Mi {title}</p>
        <p className="detalleProducto"> Tuyo por: ${price}</p>
        <Link className="verDetalle" to={routerPath}> Conocé más</Link>
    </div>
)
}

export default Item;