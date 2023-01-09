const Product = (props) => {
    return (
        <div>
            <p>name: {props.name}</p>
            <p>price: {props.price}</p>
        </div>
    );
}

export default Product;