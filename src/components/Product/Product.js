// import "./Product.css";
import { Component, useEffect, useState } from "react";
import styles from "./Product.module.css"
import { BiTrash } from "react-icons/bi";
// Object destructuring
// const Product = ({ click, product, onRemove, onDecreament, onIncreament, onChange, children }) => {
// class Product extends Component {
//     // const [userName, setUserName] = useState("");
//     // const changeHandler = (event) => {
//     //     setUserName(event.target.value)
//     // }
//     render() {
//         console.log('Product.js render.')
//         const { click, product, children, onChange, onDecreament, onIncreament, onRemove } = this.props;
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
//                     <button className={`${styles.button} ${product.quantity === 1 && styles.remove}`} onClick={onDecreament}>
//                         {product.quantity > 1 ? '-' : <BiTrash />}
//                     </button>
//                     <span className={styles.value}>{product.quantity}</span>
//                     <button className={styles.button} onClick={onIncreament}>+</button>
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

const Product = ({ click, product, onRemove, onDecreament, onIncreament, onChange, children }) => {
    console.log('Product.js render...')

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

    return (
        <div className={styles.product} onClick={click} >
            <p className={styles.name} > name: {product.name}</p>
            {<p className={styles.price}> price: {product.price}</p>}
            {children}
            <input type="text" onChange={onChange} value={product.name} />
            <span className={styles.quantity}>
                <button className={`${styles.button} ${product.quantity === 1 && styles.remove}`} onClick={onDecreament}>
                    {product.quantity > 1 ? '-' : <BiTrash />}
                </button>
                <span className={styles.value}>{product.quantity}</span>
                <button className={styles.button} onClick={onIncreament}>+</button>
            </span>
            <span className={styles.delete} onClick={onRemove}>Delete</span>
        </div >
    );
}

export default Product;