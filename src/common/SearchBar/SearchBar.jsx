import { useState } from 'react';
import styles from './SearchBar.module.css'
import { useProductActions } from '../../components/Providers/ProductsProviderReducer';

const SearchBar = () => {
    const [value, setValue] = useState("");
    const dispatch = useProductActions();
    
    const changeHandler = (event) => {
        dispatch({type:'search', event})
        setValue(event.target.value)
    }

    return (
        <div className={styles.formControl}>
            <input type="text" name="search" id="search" placeholder='Search a product...' value={value} onChange={changeHandler}/>
        </div>
    );
}

export default SearchBar;