import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
const {products} = require ('../utils/products');

const ItemListConteiner = ({greetings}) => {
    const [datos, setDatos] = useState([]);
    
    useEffect(()=> {
        customFetch (8000, products)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    } , []);

    function onAdd(cantidad){
        if (cantidad ==1) {
            alert("se agrego " + cantidad + " producto");
            }
            else{ 
            alert("se agregaron " + cantidad + " productos");
                }
      
    }

    return (
        <>
            <h5>{greetings}</h5>
            <ItemList items={datos} />
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    );   
}
export default ItemListConteiner;