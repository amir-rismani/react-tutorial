import { useState } from 'react';
import styles from './SearchBar.module.css'
import { useProductActions } from '../../components/Providers/ProductsProviderReducer';

const SearchBar = ({filter, sort}) => {
    const [value, setValue] = useState("");
    const dispatch = useProductActions();
    
    const changeHandler = (event) => {
        console.log(filter);
        dispatch({type: 'filter', selectedOption: filter});
        dispatch({type:'search', event});
        dispatch({type: 'sort', selectedOption: sort});
        setValue(event.target.value);
    }

    return (
        <div className={styles.formControl}>
            <input type="text" name="search" id="search" placeholder='Search a product...' value={value} onChange={changeHandler}/>
        </div>
    );
}

export default SearchBar;