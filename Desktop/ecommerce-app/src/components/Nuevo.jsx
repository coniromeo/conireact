import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'; 

const Nuevo = () => {
    return (
        <>
        <Link to='/Cart' style={{textDecoration: "none"}}>
        <Button variant="contained" color="secondary"> Ver Carrito </Button>
        </Link>
        </>
    );
}


export default Nuevo;
