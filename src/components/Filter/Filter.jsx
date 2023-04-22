import { useState } from "react";
import { useProductActions } from "../Providers/ProductsProviderReducer";

const Filter = () => {
    const dispatch = useProductActions();
    const [value, setValue] = useState("");
    const changeHandler = (event) => {
        setValue(event.target.value)
        dispatch({type: 'filter', event});
    }

    return ( 
        <div>
            <p>
                filter products
            </p>
            <div>
                filter by size: 
                <select onChange={changeHandler} value={value}>
                    <option value="">All</option>
                    <option value="s">s</option>
                    <option value="m">m</option>
                    <option value="l">l</option>
                    <option value="xl">xl</option>
                    <option value="2xl">2xl</option>
                    <option value="3xl">3xl</option>
                    <option value="*xl">*xl</option>
                </select>
            </div>
        </div>
    );
}
 
export default Filter;