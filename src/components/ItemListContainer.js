import ItemCount from './ItemCount.js'


function ItemList(){
  const onAdd = () => {
    console.log("ha modificado el carrito");
  }
  
  return <div className="fichaProducto">
    
    <h3 className="fotoProducto"> UNA FOTO</h3>
    <h5 className="nombreProducto">NombreProducto</h5>
    <h6 className="detalleProducto">Detalle del Producto<br />
        Detalle del Producto<br />
        Detalle del Producto</h6>

        <ItemCount  stock={15} initial={11} onAdd={onAdd}/>
        <button type="button" className="btn btn-success">Agregar a Carrito</button>
  </div>


}
export default ItemList;