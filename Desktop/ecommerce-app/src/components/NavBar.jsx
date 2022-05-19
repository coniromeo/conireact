
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import "../App.css"
import { Link } from "react-router-dom";
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <div class="container-fluid">
//       <div><Link to='/'> Regalos Online </Link></div>
      
//         </div>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarText">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <Link to='/category/1'>
//             <li className="linco">Teteras  </li>
//             </Link>
//             <Link to='/category/2'>
//               <li className="linco">Velas    </li>
//             </Link>
//             <Link to='/category/3'>
//            <li className="linco">Sweet Box  </li>
//           </Link>
//           <Link to='/category/4'>
//             <li className="linco">Portarretrato  </li>
//           </Link>
//           <li className="carrito"><CartWidget/></li>
//           <li className="linco">Suscribite </li>
//           </ul>
//           </div>
//         </nav>)
// }

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <Link className="logo" to='/'style={{ textDecoration: 'none' }}><img style={{height: 40, width:40}} src="https://firebasestorage.googleapis.com/v0/b/react-8c409.appspot.com/o/e8a4766354adc86a2c77b9e87eebb6a8.jpg?alt=media&token=c1c66a8d-6816-4a74-a1da-f79a3cb9908b" alt="Logo Web"/><a className="navbar-brand" href="#">RegalosOnline</a></Link>
      </div>     
            
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div align="left">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link to='/category/1'style={{ textDecoration: 'none' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Teteras</a>
            </li>
            </Link>
            <Link to='/category/2'style={{ textDecoration: 'none' }}>
            <li className="nav-item"> 
              <a className="nav-link" href="#">Velas</a>
            </li>
            </Link>
            <Link to='/category/3'style={{ textDecoration: 'none' }}>
            <li className="nav-item">
              <a className="nav-link" href="#">SweetBox</a>
            </li>
            </Link>
            <Link to='/category/4'style={{ textDecoration: 'none' }}>
             <li className="nav-item">
              <a className="nav-link" href="#">Portarretratos</a>
            </li>
            </Link>          
            <Link to='/cart' style={{textDecoration:'none'}}>
           <li className="carrito"><CartWidget/></li>
           </Link>
          </ul>
        </div>
      </div>
    </nav>
);
}

export default NavBar;