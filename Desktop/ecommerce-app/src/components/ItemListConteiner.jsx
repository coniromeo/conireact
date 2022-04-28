import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import products from "../utils/products";


const ItemListConteiner = ({greetings}) => {
    const [datos, setDatos] = useState([]);
    
    useEffect(()=> {
        customFetch (2000, products)
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
    console.log("estado" , datos)
    console.log("products" , products)
    return (
        <>
            <h5>{greetings}</h5>
            <ItemList items={datos} />
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    );   
}
export default ItemListConteiner;