import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
       <NavBar /> 
      <ItemListConteiner greetings ="Hola mundo ItemListConteiner"> 
      <ItemCount/>
      </ItemListConteiner>
      
    </div>
    );
}

export default App;
