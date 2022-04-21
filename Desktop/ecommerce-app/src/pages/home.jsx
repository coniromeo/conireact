import ItemListConteiner from "../components/ItemListConteiner";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <ItemListConteiner greetings ="Hola Mundo! ItemListConteiner" />
        </div>
    );
}
export default Home;