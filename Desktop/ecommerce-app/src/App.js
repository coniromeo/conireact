import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <div>
       <NavBar /> 
      <ItemListConteiner greetings ="Hola mundo ItemListConteiner" /> 

</div>
    );
}

export default App;
