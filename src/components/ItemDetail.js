import ItemCount from './ItemCount';
import React from 'react'
//import Image from '../../public/images';



function ItemDetail({id, title, price, pictureUrl, detalle, stock}){

    let picturePath = "/images/" + pictureUrl
    return(
    <div className="itemDetalle" key={id}>
                        <p className=""> Nombre: {title}</p> <br/>
                        {/* <p className=""> ELEGISTE EL PRODUCTO: {productoID}</p> */}
                        <p className=""> Precio: {price}</p> <br/>
                        <p className=""> Detalle: {detalle}</p> <br/>
                        
                        <img src={picturePath} alt={"imagen Producto"}/>
                        <ItemCount stock={stock}/>
    </div>
    )
    }

export default ItemDetail;