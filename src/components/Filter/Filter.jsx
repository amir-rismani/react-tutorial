import { useState } from "react";
import { useProductActions } from "../Providers/ProductsProviderReducer";
import Select from 'react-select';

import styles from './Filter.module.css'
const options = [
  { value: '', label: 'All' },
  { value: 's', label: 's' },
  { value: 'm', label: 'm' },
  { value: 'l', label: 'l' },
  { value: 'xl', label: 'xl' },
  { value: '2xl', label: '2xl' },
  { value: '3xl', label: '3xl' },
  { value: '*xl', label: '*xl' },
];

const Filter = () => {
    const dispatch = useProductActions();
    const [value, setValue] = useState("");
    const changeHandler = (selectedOption) => {
        dispatch({type: 'filter', selectedOption});
        setValue(selectedOption)
    }

    return ( 
        <div className={styles.filter}>
            <p>
                Filter products base on:
            </p>
            <div className={styles.size}>
                Filter by size: 
                {/* <select onChange={changeHandler} value={value}>
                    <option value="">All</option>
                    <option value="s">s</option>
                    <option value="m">m</option>
                    <option value="l">l</option>
                    <option value="xl">xl</option>
                    <option value="2xl">2xl</option>
                    <option value="3xl">3xl</option>
                    <option value="*xl">*xl</option>
                </select> */}
                <Select
                    value={value}
                    onChange={changeHandler}
                    options={options}
                />
            </div>
        </div>
    );
}
 
export default Filter;