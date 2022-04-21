import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import "../App.css"

const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="www.regalosonline.com.ar">Regalos Online</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="linco">
              <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
            </li>
            <li className="linco">
              <a class="nav-link" href="#">Productos</a>
            </li>
            <li className="linco">
              <a class="nav-link" href="#">Como Comprar</a>
            </li>
          </ul>
          <li className="carrito"><CartWidget/></li>
          <li className="carrito">Registrarse</li>
                </div>
      </div>
    </nav>)
}
export default NavBar;
