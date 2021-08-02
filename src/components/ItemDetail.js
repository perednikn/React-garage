import ItemCount from './ItemCount';
import React from 'react'

function ItemDetail({id, title, price, pictureUrl, detalle, stock}){

    let picturePath = "/images/" + pictureUrl
    return(
    <div className="itemDetalle" key={id}>
        <div className="infoProducto">
            <span className="tituloDetalle"> Vas a comprar: <br/><p id="titDetalle">{title}</p></span> <br/>
            <span className="precioDetalle"> A tan solo: <p id="precDetalle">${price}.-</p></span> <br/>
            <p className="detalleDetalle"> Lo que tenés que saber: <br/> {detalle}</p> <br/>
        </div>
        <div className="imagenProducto">
            <img src={picturePath} alt={"imagen Producto"}/>
        </div>
        <div className="botonAgregar">
            <ItemCount stock={stock}/>
        </div>
    </div>
    )
    }

export default ItemDetail;