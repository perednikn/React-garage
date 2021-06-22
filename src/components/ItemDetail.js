import ItemCount from './ItemCount';
import { useParams } from 'react-router';



function ItemDetail({id, title, price, pictureUrl, detalle, stock}){
    let { productoID } = useParams();
    
   
    let picturePath = "../Img/" + pictureUrl
    return(
    <div className="itemDetalle" key={id}>
                        <p className=""> Nombre: {title}</p> <br/>
                        <p className=""> ELEGISTE EL PRODUCTO: {productoID}</p>
                        <p className=""> Precio: {price}</p> <br/>
                        <p className=""> Detalle: {detalle}</p> <br/>
                        <img src={picturePath}/>
                        <p className=""> FOTO: {picturePath}</p> <br/>
                        <p className="agregarDetalle"><ItemCount stock={stock}/></p>
    </div>
    )
    }

export default ItemDetail;