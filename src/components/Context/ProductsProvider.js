import { createContext, useContext, useState } from "react";

const productsContext = createContext();
const productsContextDispatcher = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'React', price: '99 $', quantity: 12 },
        { id: 2, name: 'Vue', price: '99 $', quantity: 8 },
        { id: 3, name: 'JavaScript', price: '90 $', quantity: 4 }
    ]);

    return (
        <productsContext.Provider value={products}>
            <productsContextDispatcher.Provider value={setProducts}>
                {children}
            </productsContextDispatcher.Provider>
        </productsContext.Provider>
    );
}

export default ProductProvider;

export const useProducts = () => useContext(productsContext);
export const useProductActions = () => {
    const products = useProducts();
    const setProducts = useContext(productsContextDispatcher)

    const removeHandler = (id) => {
        const filteredProducts = products.filter(product => product.id !== id);
        setProducts(filteredProducts);
    }

    const decreamentHandler = (id) => {
        const index = products.findIndex(product => product.id === id);
        const product = { ...products[index] };
        if (product.quantity === 1) {
            this.removeHandler(id);
            return
        }
        product.quantity--;
        const productLists = [...products];
        productLists[index] = product;
        setProducts(productLists);
    }

    const increamentHandler = (id) => {
        // 1. Find index item on state.
        const index = products.findIndex(product => product.id === id);

        // 2. Clone product item on state and increament quantity.
        const product = { ...products[index] };
        product.quantity++;

        // 3. Clone products on state and replace changed product.
        const productLists = [...products];
        productLists[index] = product;

        // 4. Update state.
        setProducts(productLists);
    }

    const changeHandler = (event, id) => {
        const index = products.findIndex(product => product.id === id);
        const product = { ...products[index] };
        product.name = event.target.value;
        const productLists = [...products];
        productLists[index] = product;
        setProducts(productLists);
    }

    return { removeHandler, decreamentHandler, increamentHandler, changeHandler }

}