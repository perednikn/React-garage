
import ItemCount from './ItemCount';

function Item({id, title, price, pictureUrl, detalle, stock}){
return(
<div className="fichaProducto" key={id}>
                    <p className="nombreProducto"> Nombre: {title}</p>
                    <p className="detalleProducto"> Precio: {price}</p>
                    <p className="detalleProducto"> Detalle: {detalle}</p>
                    <p className="fotoProducto"> FOTO: {pictureUrl}</p>
                    <ItemCount stock={stock}/>
</div>
)
}

export default Item;