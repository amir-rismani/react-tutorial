import { useProducts } from "../ProductsProvider";
import Product from "../../Product/Product";

const Products = () => {
    const products = useProducts();
    return (
        <div>
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