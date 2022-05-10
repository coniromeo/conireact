import SearchIcon from '@material-ui/icons/Search';

import { SearchContainer, Input} from "./styledComponents";

const SearchForm = () => {
    const handelEvent = (evt) => {
        if (
        evt.keyCode === 65 ||
        evt.keyCode === 69 ||
        evt.keyCode === 73 ||
        evt.keyCode === 79 ||
        evt.keyCode === 85)
         evt.preventDefault();
        console.log(evt.keyCode);
    }
    return(
         <SearchContainer>
        <Input onKeyDown={handelEvent}/>
        <SearchIcon />
        </SearchContainer>
       
    );
}
export default SearchForm;
