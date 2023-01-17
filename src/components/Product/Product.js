// import "./Product.css";
import { useState } from "react";
import styles from "./Product.module.css"
import { BiTrash } from "react-icons/bi";
// Object destructuring
const Product = ({ click, product, onRemove, onDecreament, onIncreament, onChange, children }) => {
    // const [userName, setUserName] = useState("");
    // const changeHandler = (event) => {
    //     setUserName(event.target.value)
    // }
    
    console.log('Product.js render.')

    return (
        // <div className="product">
        <div className={styles.product} onClick={click}>
            {/* Controlled component - Internal state */}
            {/* <input type="text" onChange={changeHandler} value={userName} /> */}
            {/* <p className="product__name">name: {product.name}</p> */}
            <p className={styles.name}>name: {product.name}</p>
            {/* <p className="product__price">price: {product.price}</p> */}
            <p className={styles.price}>price: {product.price}</p>
            {/* Nested or children props */}
            {children}
            {/* Controlled component - External state */}
            <input type="text" onChange={onChange} value={product.name} />
            <span className={styles.quantity}>
                <button className={`${styles.button} ${product.quantity === 1 && styles.remove}`} onClick={onDecreament}>
                    {product.quantity > 1 ? '-' : <BiTrash />}
                </button>
                <span className={styles.value}>{product.quantity}</span>
                <button className={styles.button} onClick={onIncreament}>+</button>
            </span>
            <span className={styles.delete} onClick={onRemove}>Delete</span>
        </div>
    );
}

export default Product;