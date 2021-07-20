import React, { useEffect, useState }from 'react';
import Item from './Item.js';
import { useParams } from 'react-router';
import { getFirestore } from '../firebase/firebase';

 
const ItemList = () => { 
    

    const [items, setItems] = useState([]);
    const [loading, setLoading]  = useState(true);
    const {id} = useParams();
    
    useEffect(() => {

    const dataBase = getFirestore();
    const itemCollection = dataBase.collection('items')
    
    itemCollection.get() .then(querySnapshot => {
        if (querySnapshot.size === 0){
            console.log("Sin info");
            setLoading(false);
        }
        setItems(querySnapshot.docs.map(doc => doc.data()));
        setLoading(false);
    })
    debugger;

    if (id !== "" && id !== undefined) {
           
            const byCategory = itemCollection.where('categoria', '==', id)

            byCategory.get().then(querySnapshot => {
                if (querySnapshot.size === 0){
                    console.log("Sin info")
                    setLoading(false);
                }
                setItems(querySnapshot.docs.map(doc=>doc.data()))
                setLoading(false);
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



