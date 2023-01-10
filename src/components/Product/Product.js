// import "./Product.css";
import styles from "./Product.module.css"
const Product = (props) => {
    return (
        // <div className="product">
        <div className={styles.container}>
            {/* <p className="product__name">name: {props.name}</p> */}
            <p className={styles.name}>name: {props.name}</p>
            {/* <p className="product__price">price: {props.price}</p> */}
            <p className={styles.price}>price: {props.price}</p>
        </div>
    );
}

export default Product;