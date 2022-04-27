import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div>
       <NavBar /> 
      <ItemListConteiner greetings ="Hola mundo ItemListConteiner"> 
      <ItemDetail/>
      <ItemCount/>  
  
      </ItemListConteiner>
      
    </div>
    );
}

export default App;