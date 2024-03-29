// import "./Product.css";
import { useContext, useEffect } from "react";
import styles from "./Product.module.css"
import { BiTrash } from "react-icons/bi";
import { userContext } from "../../App";
// import { useProductActions } from "../Providers/ProductsProvider";
import { useProductActions } from "../Providers/ProductsProviderReducer";
// Object destructuring
// const Product = ({ click, product, onRemove, ondecrement, onincrement, onChange, children }) => {
// class Product extends Component {
//     // const [userName, setUserName] = useState("");
//     // const changeHandler = (event) => {
//     //     setUserName(event.target.value)
//     // }
//     render() {
//         console.log('Product.js render.')
//         const { click, product, children, onChange, ondecrement, onincrement, onRemove } = this.props;
//         return (
//             // <div className="product">
//             <div className={styles.product} onClick={click} >
//                 {/* Controlled component - Internal state */}
//                 {/* <input type="text" onChange={changeHandler} value={userName} /> */}
//                 {/* <p className="product__name">name: {product.name}</p> */}
//                 <p className={styles.name} > name: {product.name}</p>
//                 {/* <p className="product__price">price: {product.price}</p> */}
//                 {<p className={styles.price}> price: {product.price}</p>}
//                 {/* Nested or children props */}
//                 {children}
//                 {/* Controlled component - External state */}
//                 <input type="text" onChange={onChange} value={product.name} />
//                 <span className={styles.quantity}>
//                     <button className={`${styles.button} ${product.quantity === 1 && styles.remove}`} onClick={ondecrement}>
//                         {product.quantity > 1 ? '-' : <BiTrash />}
//                     </button>
//                     <span className={styles.value}>{product.quantity}</span>
//                     <button className={styles.button} onClick={onincrement}>+</button>
//                 </span>
//                 <span className={styles.delete} onClick={onRemove}>Delete</span>
//             </div >
//         );
//     }

//     // The only lifecycle method - Unmounting
//     componentWillUnmount() {
//         console.log('Product.js', 'componentWillUnmount');
//     }
// }

const Product = ({ click, product, children }) => {
    console.log('Product.js render...')
    const dispatch = useProductActions();

    // Generally CDM, CDU and CWUM implemented in useEffect.
    // useEffect(() => {
    //     console.log('Product.js useEffect...')
    // });

    // If you pass the second argument to useeffect which is an empty array, it will be CDM
    // useEffect(() => {
    //     console.log('Product.js useEffect CDM...')
    // }, []);


    // If you pass the second argument to useeffect which is an array of values (props or state), it will be CDU
    // useEffect(() => {
    //     console.log('Product.js useEffect CDU...')
    // }, [product]);

    // If the function passed to useEffect may return a clean-up function, it will be CWUM
    useEffect(() => {
        return () => {
            // Clean up
            console.log('Product.js useEffect CWUM...')
        };
    }, [product]);

    // Using context
    const user = useContext(userContext);
    console.log(`userContext is ${user}`);


    return (
        <div className={styles.product} onClick={click} >
            <p className={styles.name} > name: {product.name}</p>
            <div className={styles.meta}>
                {<p className={styles.price}> price: {product.price}</p>}
                {children}
                {/* <input type="text" onChange={(event) => dispatch({ type: 'change', event, productId: product.id })} value={product.name} /> */}
                <span className={styles.quantity}>
                    <button className={`${styles.button} ${product.quantity === 1 && styles.remove}`} onClick={() => dispatch({ type: 'decrement', productId: product.id })}>
                        {product.quantity > 1 ? '-' : <BiTrash />}
                    </button>
                    <span className={styles.value}>{product.quantity}</span>
                    <button className={styles.button} onClick={() => dispatch({ type: 'increment', productId: product.id })}>+</button>
                </span>
                <span className={styles.delete} onClick={() => dispatch({ type: 'remove', productId: product.id })}>Delete</span>
            </div>
        </div >
    );
}

export default Product;