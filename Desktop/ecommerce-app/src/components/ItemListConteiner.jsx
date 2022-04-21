import ItemCount from "./ItemCount";

const ItemListConteiner = ({greetings}) => {
    function onAdd(cantidad){
        if (cantidad ==1) {
            alert("se agrego " + cantidad + " producto");
            }
            else{ 
            alert("se agregaron " + cantidad + " productos");
                }
      
    }
    return (
        <div>
            <h5>{greetings}</h5>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
    );   
}
export default ItemListConteiner;