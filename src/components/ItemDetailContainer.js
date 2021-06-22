import React, { useEffect, useState}from 'react';
import { useParams } from "react-router";
import ItemDetail from './ItemDetail';
//import ItemList from './ItemList';

function ItemDetailContainer(){
    let { id } = useParams();
    let articuloId = id;
    console.log(id)
    const [detalloItem, setDetalloItem] = useState([]);

    useEffect(() => {


        

    const listPrueba = [
        {id: 1, title: "Parlante", price: 500, pictureUrl: "parlante.png", detalle: "JBL GO", stock: 20},
        {id: 2, title: "Encendedor", price: 1500, pictureUrl: "encendedor.png", detalle: "Clipper", stock: 30},
        {id: 3, title: "Cuenco", price: 3500, pictureUrl: "cuenco.png", detalle: "Ceramica", stock: 10},
        {id: 4, title: "Cartas", price: 50, pictureUrl: "milogo.jpg", detalle: "asdasd", stock: 7}
    ];

    var listParameter = [];
    

    for (let i = 0; i < listPrueba.length; i++){
        if (listPrueba[i].id == articuloId){
            listParameter = listPrueba[i];
        }
    }
    console.table(listParameter);

    const getItemDetallados = (productos) => {
        return new Promise((resolve, reject) => {
              //Espera 2 segundos para simular demora
          setTimeout(() => {
              resolve(productos);
          }, 2000);
      });
  }

    getItemDetallados(listParameter)
        .then(result => setDetalloItem(result))
        .catch(error => console.log("oops"))

    }, [id]);

return(
    
    <div>
    
        <ItemDetail id={detalloItem.id} title={detalloItem.title} price={detalloItem.price} pictureUrl={detalloItem.pictureUrl} detalle={detalloItem.detalle} stock={detalloItem.stock}/>
   
</div>

    )

}
export default ItemDetailContainer;