import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div>
       <NavBar /> 
      <ItemListConteiner greetings ="Bienvenido a nuestro portal de regalos"> 
      <ItemDetail/>
      <ItemCount/>  
  
      </ItemListConteiner>
      
    </div>
    );
}

export default App;