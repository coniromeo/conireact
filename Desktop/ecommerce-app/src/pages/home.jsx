import Cart from "../components/Cart"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "../components/ItemDetailConteiner";
import ItemListConteiner from "../components/ItemListConteiner";
import NavBar from "../components/NavBar";
import CartContextProvider, {CartContext} from "../components/CartContext";

const Home = () => {
    return (
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListConteiner />} />
                <Route path='/category/:idCategory' element={<ItemListConteiner />} />
                <Route path='/item/:idItem' element={< ItemDetailConteiner />} />
                <Route path='/cart' element ={<Cart/>} />
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;