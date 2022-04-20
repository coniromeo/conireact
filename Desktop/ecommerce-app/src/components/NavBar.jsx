import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import "../App.css"

const NavBar = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className ="container-fluid">
    <a className="navbar-brand" href="#">Regalos Online</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Regalos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Como comprar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Contacto</a>
        </li>
        <li className="carrito"><CartWidget/></li>
      </ul>
    </div>
  </div>
</nav>
    );
}
export default NavBar;
