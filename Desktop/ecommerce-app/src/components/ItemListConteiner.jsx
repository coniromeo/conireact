import { useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router";

const { products } = require('../utils/products');

const ItemListConteiner = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams ();
    useEffect(()=> {
        customFetch (2000, products)
        .then(result => { 
            if(idCategory === undefined) setDatos(result);
            else {
              const productosfiltrados = products.filter(item => item.categoryId === parseInt(idCategory))
              
            setDatos(productosfiltrados)
            }})
        .catch(err => console.log(err))
        }, [idCategory]);
    
    console.log(idCategory);
    
    function onAdd(cantidad){
        if (cantidad === 1) {
            alert("se agrego " + cantidad + " producto");
            }
            else{ 
            alert("se agregaron " + cantidad + " productos");
                }
      
    }
    return (
        <>  
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
};

export default ItemListConteiner;