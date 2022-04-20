// import { Bagde } from "material-ui/core";
// import { ShoppingCartIcon } from "material-ui/icons";
import carrito from "../assets/carrito-de-compras.png";
import "../App.css"
const styled = {
    width:"35px",
    textAlign:"left",
}

const CartWidget = () => {
    return(
    //     <Bagde BagdeContent={9} color="secondary">
    //     <ShoppingCartIcon />
    //     </Bagde>
    <div>
        <img style= {styled} src={carrito}></img>
        <span>6</span>
    </div>
    );
}
export default CartWidget;
