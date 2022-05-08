import { useContext, useState } from "react";
import CartContext from "./CartContext";

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {

    const [count, setCount] = useState(initial);
    const Count = useContext(CartContext);
    const increment = () => {
        if (count < stock) {
           setCount(count +1);
       }
   }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count -1);
        }
    }
return (
    <div>
        <button type="button" class="btn btn-light" onClick={increment}>+</button>
        <span>{count} Productos </span>
        <button type="button" class="btn btn-light"onClick={decrement}>-</button>
        <span className="puntitos">...</span>
        <button type="button" class="btn btn-light"onClick={()=> onAdd(count)}>Agregar al carrito</button>
</div>
);
}
  //  return (
  //      <div>
  //        <p>You clicked {count} times</p>
  //        <button onClick={() => setCount(count + 1)}>
  //          Click me
  //        </button>
  //      </div>
  //    );
  //  }
    

    export default ItemCount;

