import { useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import products from "../utils/products";
import { useParams } from "react-router";


const ItemListConteiner = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams ();

    console.log(idCategory);

    

    useEffect(()=> {
        
        customFetch (2000, products.filter(item => {
            if(idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        })) 
        .then(result => setDatos(result))
        .catch(err => console.log(err))
        }, [datos]);
    
    console.log(idCategory);
    
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
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
};

export default ItemListConteiner;