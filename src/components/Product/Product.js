// import "./Product.css";
import styles from "./Product.module.css"
const Product = (props) => {
    return (
        // <div className="product">
        <div className={styles.product} onClick={props.click}>
            {/* <p className="product__name">name: {props.name}</p> */}
            <p className={styles.name}>name: {props.name}</p>
            {/* <p className="product__price">price: {props.price}</p> */}
            <p className={styles.price}>price: {props.price}</p>
            {/* Nested or children props */}
            {props.children}
            <span className={styles.delete} onClick={props.removeHandler}>Delete</span>
        </div>
    );
}

export default Product;