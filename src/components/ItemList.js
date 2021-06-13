import React, { useEffect, useState }from 'react';
import Item from './Item.js';

 
const ItemList = () => { 
    

    const [usoItem, setUsoItem] = useState([]);
    
    useEffect(() => {

      
    const listaArt = [
        {id: 1, title: "Mate", price: 500, pictureUrl: "milogo.jpg", detalle: "asdasd", stock: 20},
        {id: 2, title: "Termo", price: 1500, pictureUrl: "milogo.jpg", detalle: "asdasd", stock: 30},
        {id: 3, title: "PS3", price: 3500, pictureUrl: "milogo.jpg", detalle: "asdasd", stock: 10},
        {id: 4, title: "Cartas", price: 50, pictureUrl: "milogo.jpg", detalle: "asdasd", stock: 7}
    ];
   
    const getProductos = (productos) => {
      return new Promise((resolve, reject) => {
            //Espera 2 segundos para simular demora
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}
    
    getProductos(listaArt)
        .then(result => setUsoItem(result))
        .catch(error => console.log("Error"))
        
    
}, []);

return(
    <div>
        {usoItem.map((usoItem) => (
            <Item id={usoItem.id} title={usoItem.title} price={usoItem.price} pictureUrl={usoItem.pictureUrl} detalle={usoItem.detalle} stock={usoItem.stock}/>
        ))}
    </div>
)

}

export default ItemList;



