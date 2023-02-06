import { useProductActions, useProducts } from "../ProductsProvider";
import Product from "../../Product/Product";

const Products = () => {
    const products = useProducts();
    const { removeHandler, decreamentHandler, increamentHandler, changeHandler } = useProductActions();
    return (
        <div>
            <h2>Cart</h2>
            {
                products.length ?
                    products.map(product =>
                        <Product
                            product={product}
                            key={product.id}
                            onRemove={() => removeHandler(product.id)}
                            onDecreament={() => decreamentHandler(product.id)}
                            onIncreament={() => increamentHandler(product.id)}
                            onChange={(event) => changeHandler(event, product.id)}
                        />) :
                    <div>Product is not exist...</div>}
        </div >
    );
}

export default Products;