import React, { useEffect, useState }from 'react';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';

function ItemDetailContainer(){
    const [detalloItem, setDetalloItem] = useState([]);


    useEffect(() => {

    const listPrueba = [
        {id: 1, title: "Mate", price: 500, pictureUrl: "milogo.jpg", detalle: "asdasd", stock: 20},
    ];

    const getItemDetallados = (productos) => {
        return new Promise((resolve, reject) => {
              //Espera 2 segundos para simular demora
          setTimeout(() => {
              resolve(productos);
          }, 2000);
      });
  }

    getItemDetallados(listPrueba)
        .then(result => setDetalloItem(result))
        .catch(error => console.log("oops"))

    }, []);

return(
    
    <div>
    {detalloItem.map((detalloItem) => (
        <ItemDetail id={detalloItem.id} title={detalloItem.title} price={detalloItem.price} pictureUrl={detalloItem.pictureUrl} detalle={detalloItem.detalle} stock={detalloItem.stock}/>
     ))} 
</div>

    )

}
export default ItemDetailContainer;