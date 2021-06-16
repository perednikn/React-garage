import ItemCount from './ItemCount';

function ItemDetail({id, title, price, pictureUrl, detalle, stock}){
    return(
    <div className="itemDetalle" key={id}>
                        <p className=""> Nombre: {title}</p> <br/>
                        <p className=""> Precio: {price}</p> <br/>
                        <p className=""> Detalle: {detalle}</p> <br/>
                        <p className=""> FOTO: {pictureUrl}</p> <br/>
                        <p className="agregarDetalle"><ItemCount stock={stock}/></p>
    </div>
    )
    }

export default ItemDetail;