import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemCount from './components/ItemCount';
import ItemDetailConteiner from './components/ItemDetailConteiner';

function App() {
  return (
    <div>
       <NavBar /> 
{ /* <ItemListConteiner greetings ="Bienvenido a nuestro portal de regalos"> */} 
      <ItemDetailConteiner/>
      <ItemCount/>  
   
      
    </div>
    );
}

export default App;