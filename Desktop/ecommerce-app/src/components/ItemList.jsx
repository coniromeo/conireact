import Items from "./Items";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
    return (
        <div>
        {
            items.length > 0
            ? items.map(item => <Items key={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </div>
    );
}

export default ItemList;