// import { Bagde } from "material-ui/core";
// import { ShoppingCartIcon } from "material-ui/icons";
import carrito from "../assets/carrito-de-compras.png";
import "../App.css"
import CartContext from "./CartContext";
import { useContext } from "react";
const styled = {
    width:"35px",
    textAlign:"left",
}

const CartWidget = () => {
    const test = useContext(CartContext);
    return(
    //     <Bagde BagdeContent={9} color="secondary">
    //     <ShoppingCartIcon />
    //     </Bagde>
    <div>
        <img style= {styled} src={carrito} defaultValue="carrito"></img>
        <span>6</span>
    </div>
    );
}
export default CartWidget;
