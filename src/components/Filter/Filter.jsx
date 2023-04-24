import { useEffect, useState } from "react";
import { useProductActions } from "../Providers/ProductsProviderReducer";

import SearchBar from "../../common/SearchBar/SearchBar";
import SelectComponent from "../../common/Select/Select";

import styles from './Filter.module.css'

const filterOptions = [
  { value: '', label: 'All' },
  { value: 's', label: 's' },
  { value: 'm', label: 'm' },
  { value: 'l', label: 'l' },
  { value: 'xl', label: 'xl' },
  { value: '2xl', label: '2xl' },
  { value: '3xl', label: '3xl' },
  { value: '*xl', label: '*xl' },
];
const sortOptions = [ 
  { value: 'highest', label: 'Highest' },
  { value: 'lowest', label: 'Lowest' },
];

const Filter = () => {
    const dispatch = useProductActions();
    const [filter, setFilter] = useState({ value: '', label: 'All'});
    const [sort, setSort] = useState({ value: 'highest', label: 'Highest' });

    useEffect(()=>{
        dispatch({type: 'sort', selectedOption:sort});
    },[sort]);

    const filterHandler = (selectedOption) => {
        dispatch({type: 'filter', selectedOption});
        dispatch({type: 'sort', selectedOption: sort});
        setFilter(selectedOption)
    }

    const sortHandler = (selectedOption) => {
        dispatch({type: 'sort', selectedOption});
        setSort(selectedOption)
    }

    return ( 
        <section>
            <SearchBar filter={filter} sort={sort}/>
            <div className={styles.filter}>
                <p>
                    Filter products base on:
                </p>

                <SelectComponent
                    title="Filter by size:"
                    value={filter}
                    onChange={filterHandler}
                    options={filterOptions}
                />

                <SelectComponent
                    title="Sort by:"
                    value={sort}
                    onChange={sortHandler}
                    options={sortOptions}
                    />
            </div>
        </section>
    );
}
 
export default Filter;