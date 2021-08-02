import React, { useEffect, useState, useContext }from 'react';
import Item from './Item.js';
import { useParams } from 'react-router';
import { getFirestore } from '../firebase/firebase';
import ThemeContext from '../context/CartContext';
 
const ItemList = () => { 
    

    const [items, setItems] = useState([]);

    const {id} = useParams();

   
    useEffect(() => {

    const dataBase = getFirestore();
    const itemCollection = dataBase.collection('items')
    
    itemCollection.get().then(querySnapshot => {
        if (querySnapshot.size === 0){
            console.log("Sin info");
          
        }
        setItems(querySnapshot.docs.map(doc => doc.data()));
    })
    

    if (id !== "" && id !== undefined) {
           
            const byCategory = itemCollection.where('categoria', '==', id)

            byCategory.get().then(querySnapshot => {
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
            <Item id={items.id} title={items.title} price={items.price} pictureUrl={items.pictureUrl} stock={items.stock} key={items.id}/>
        ))}
    </div>
)

}

export default ItemList;



