import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SeguirComprando =()=>{
    return(
    <>
    <Link to='/' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">Volver al inicio</Button></Link>
    </>
    );
    
}
export default SeguirComprando;
