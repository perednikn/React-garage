import ItemCount from './ItemCount';
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
                        
                        <p className="agregarDetalle"><ItemCount stock={stock}/></p>
    </div>
    )
    }

export default ItemDetail;