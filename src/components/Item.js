
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

function Item({id, title, price, pictureUrl, stock}){
    //let imgSrc = "../Img/" + pictureUrl;
    let routerPath = "/item/" + id;
    console.log(routerPath);
return(
<div className="fichaProducto" key={id}>
                    <img src="imgSrc" />
                    <p className="fotoProducto"> FOTO: {pictureUrl}</p>
                    <p className="nombreProducto"> Nombre: {title}</p>
                    <p className="detalleProducto"> Precio: {price}</p>
                    <p className="alCarritoProducto"><ItemCount stock={stock}/></p>
                    <Link class="verDetalle" to={routerPath}> DETALLE</Link>
</div>
)
}

export default Item;