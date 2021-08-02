import React, { useEffect, useState}from 'react';
import { useParams } from "react-router";
import ItemDetail from './ItemDetail';
import { getFirestore } from '../firebase/firebase';


function ItemDetailContainer(){
   const { id } = useParams();
   let parametroID = parseInt(id);
   const [items, setItems] = useState([])

    useEffect(() => {
        const dataBase = getFirestore();
        const itemCollection = dataBase.collection('items')

        if (id !== "" && id !== undefined) {
        const byId = itemCollection.where('id', '==', parametroID)
        byId.get().then(querySnapshot => {
            if (querySnapshot.size === 0){
                console.log("Sin info")
            }
            setItems(querySnapshot.docs.map(doc=>doc.data()))
        })
  } 
    }, [id]);

return(
    
<div className="divMapeado">
        {items.map((items) => (
            <ItemDetail id={items.id} title={items.title} price={items.price} pictureUrl={items.pictureUrl} detalle={items.detalle} stock={items.stock} key={items.id}/>
        ))}
    </div>

    

    )

}
export default ItemDetailContainer;