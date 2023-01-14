// import "./Product.css";
import styles from "./Product.module.css"
const Product = (props) => {
    return (
        // <div className="product">
        <div className={styles.product} onClick={props.click}>
            {/* <p className="product__name">name: {props.product.name}</p> */}
            <p className={styles.name}>name: {props.product.name}</p>
            {/* <p className="product__price">price: {props.product.price}</p> */}
            <p className={styles.price}>price: {props.product.price}</p>
            {/* Nested or children props */}
            {props.children}
            <span className={styles.quantity}>
                <button className={styles.button} onClick={props.onDecreament}>-</button>
                <span className={styles.value}>{props.product.quantity}</span>
                <button className={styles.button} onClick={props.onIncreament}>+</button>
            </span>
            <span className={styles.delete} onClick={props.onRemove}>Delete</span>
        </div>
    );
}

export default Product;