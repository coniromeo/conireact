import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemCount from './components/ItemCount';
import ItemDetailConteiner from './components/ItemDetailConteiner';

const Home = () => {
  return (
<BrowserRouter>
<NavBar /> 
<Routes>
<Route path ='/' element ={<ItemListConteiner />} />
<Route path ='/category/idCategory' element = {<ItemListConteiner />} />
<Route path ='/item/:idItem' element ={<ItemDetailConteiner />} />
</Routes>
</ BrowserRouter>
  );
}

export default Home;