import Product from "../Product/Product";

const Products = () => {
    const products = [
        { id: 1, name: 'React', price: '99 $' },
        { id: 2, name: 'Vue', price: '99 $' },
        { id: 3, name: 'JavaScript', price: '90 $' }
    ]
    return (
        <div>
            <h1>Products</h1>
            {products.map(product => <Product name={product.name} price={product.price} key={product.id} />)}
        </div>
    );
}

export default Products;