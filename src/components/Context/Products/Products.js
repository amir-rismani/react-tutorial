import { useProducts } from "../../Providers/ProductsProviderReducer";
import Product from "../../Product/Product";

import styles from "./Products.module.css"
const Products = () => {
    const products = useProducts();
    return (
        <div className={styles.products}>
            <h2>Cart</h2>
            {
                products.length ?
                    products.map(product =>
                        <Product
                            product={product}
                            key={product.id}
                        />) :
                    <div>Product is not exist...</div>}
        </div >
    );
}

export default Products;