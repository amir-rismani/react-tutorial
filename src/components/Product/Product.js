import "./Product.css";

const Product = (props) => {
    return (
        <div className="product">
            <p className="product__name">name: {props.name}</p>
            <p className="product__price">price: {props.price}</p>
        </div>
    );
}

export default Product;