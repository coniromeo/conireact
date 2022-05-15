import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();

    //componentDidUpdate
    useEffect(() => {
        const fetchFromFirestone = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
            id: doc.id, 
            ...doc.data()
        }));
            return dataFromFirestore;
        }
        
        fetchFromFirestone()
            .then(result => setDatos(result))
            .catch(err => console.log =(err))
         }, [datos] );
    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <ItemList items={datos} />
    );
}

export default ItemListContainer;