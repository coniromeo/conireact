import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Link to='/Cart' style={{textDecoration: "none"}}>
        <Badge badgeContent={test.calcItemsQty()} color="secondary">
        <ShoppingCartOutlined />
        </Badge>
        </Link>
    );
}

export default CartWidget;