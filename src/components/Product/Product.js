// import "./Product.css";
import { useState } from "react";
import styles from "./Product.module.css"
import { BiTrash } from "react-icons/bi";
const Product = (props) => {
    // const [userName, setUserName] = useState("");
    // const changeHandler = (event) => {
    //     setUserName(event.target.value)
    // }
    return (
        // <div className="product">
        <div className={styles.product} onClick={props.click}>
            {/* Controlled component - Internal state */}
            {/* <input type="text" onChange={changeHandler} value={userName} /> */}
            {/* <p className="product__name">name: {props.product.name}</p> */}
            <p className={styles.name}>name: {props.product.name}</p>
            {/* <p className="product__price">price: {props.product.price}</p> */}
            <p className={styles.price}>price: {props.product.price}</p>
            {/* Nested or children props */}
            {props.children}
            {/* Controlled component - External state */}
            <input type="text" onChange={props.onChange} value={props.product.name} />
            <span className={styles.quantity}>
                <button className={`${styles.button} ${props.product.quantity === 1 && styles.remove}`} onClick={props.onDecreament}>
                    {props.product.quantity > 1 ? '-' : <BiTrash />}
                </button>
                <span className={styles.value}>{props.product.quantity}</span>
                <button className={styles.button} onClick={props.onIncreament}>+</button>
            </span>
            <span className={styles.delete} onClick={props.onRemove}>Delete</span>
        </div>
    );
}

export default Product;