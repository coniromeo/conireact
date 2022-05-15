import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import "../App.css"
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div><Link to='/'> Regalos Online </Link></div>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to='/category/1'>
            <li className="linco">  Teteras  </li>
            </Link>
            <li className="puntitos">...</li>
            <Link to='/category/2'>
              <li className="linco">  Velas    </li>
            </Link>
            
            <li className="puntitos">...</li>
            <Link to='/category/3'>
           <li className="linco">  Sweet Box  </li>
          </Link>
           <Link to='/category/4'>
            <li className="linco"> Portarretrato  </li>
          </Link>
            <li className="puntitos">...</li>
          <li className="carrito"><CartWidget/></li>
          
          <li className="puntitos">...</li>
          <li className="carrito">Suscribite </li>
          </ul>
          </div>
        </nav>)
}
export default NavBar;
