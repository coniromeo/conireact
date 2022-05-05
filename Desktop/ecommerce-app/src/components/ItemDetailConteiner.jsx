import { useParams } from "react-router";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const {products} = require ('../utils/products');

const ItemDetailConteiner = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <>
        <ItemDetail item={dato} />
   
        </>
    );
}
export default ItemDetailConteiner;
