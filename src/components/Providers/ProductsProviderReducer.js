import { createContext, useContext, useReducer } from "react";

const productsContext = createContext();
const productsContextDispatcher = createContext();
const initialState = [
    { id: 1, name: 'React', price: '99 $', quantity: 12 },
    { id: 2, name: 'Vue', price: '99 $', quantity: 8 },
    { id: 3, name: 'JavaScript', price: '90 $', quantity: 4 }
];

const reducer = (state, action) => {
    let filteredProducts = [], index = 0, product = {}, productLists = [];
    switch (action.type) {
        case 'remove':
            filteredProducts = state.filter(product => product.id !== action.productId);
            return filteredProducts;
        case 'decrement':
            index = state.findIndex(product => product.id === action.productId);
            product = { ...state[index] };
            if (product.quantity === 1) {
                filteredProducts = state.filter(product => product.id !== action.productId);
                return filteredProducts;
            }
            product.quantity--;
            productLists = [...state];
            productLists[index] = product;
            return productLists;
        case 'increment':
            // 1. Find index item on state.
            index = state.findIndex(product => product.id === action.productId);

            // 2. Clone product item on state and increment quantity.
            product = { ...state[index] };
            product.quantity++;

            // 3. Clone products on state and replace changed product.
            productLists = [...state];
            productLists[index] = product;

            // 4. Update state.
            return productLists;
        case 'change':
            index = state.findIndex(product => product.id === action.productId);
            product = { ...state[index] };
            product.name = action.event.target.value;
            productLists = [...state];
            productLists[index] = product;
            return productLists;
        default:
            return state;
    }
}

const ProductProvider = ({ children }) => {
    const [products, dispatch] = useReducer(reducer, initialState);

    return (
        <productsContext.Provider value={products}>
            <productsContextDispatcher.Provider value={dispatch}>
                {children}
            </productsContextDispatcher.Provider>
        </productsContext.Provider>
    );
}

export default ProductProvider;

export const useProducts = () => useContext(productsContext);
export const useProductActions = () => useContext(productsContextDispatcher);