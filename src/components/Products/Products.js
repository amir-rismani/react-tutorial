import { Component, Fragment, useState } from "react";
import Product from "../Product/Product";
// Standard styling
// import "./Products.css"
// Modular styling
// import styles from "./Products.module.css"

// Function based component
// Version 16.8 >
// 2018 >
// Use lifecycle and state
// const Products = () => {
//     // useState return an array with 2 item => [data, updateDataFunction]
//     const [products, setProducts] = useState([
//         { id: 1, name: 'React', price: '100 $' },
//         { id: 2, name: 'Vue', price: '99 $' },
//         { id: 3, name: 'JavaScript', price: '90 $' }
//     ]);

//     const changePriceHandler = () => {
//         setProducts([
//             { id: 1, name: 'React', price: '150 $' },
//             { id: 2, name: 'Vue', price: '160 $' },
//             { id: 3, name: 'JavaScript', price: '120 $' }
//         ])
//     }

//     return (
//         <div className="products">
//             <h1>Products</h1>
//             {/* <div className="products__container"> */}
//             <div className={styles.container}>
//                 {products.map(product => <Product name={product.name} price={product.price} key={product.id} />)}
//             </div>
//             <button onClick={changePriceHandler}>Change price</button>
//         </div>
//     );
// }

// Class based component
class Products extends Component {
    state = {
        products: [
            { id: 1, name: 'React', price: '99 $', quantity: 12 },
            { id: 2, name: 'Vue', price: '99 $', quantity: 8 },
            { id: 3, name: 'JavaScript', price: '90 $', quantity: 4 }
        ]
    }

    constructor(props) {
        super(props)
        this.removeHandler = this.removeHandler.bind(this);
    }

    // Using arrow function
    // removeHandler = (id) => {
    //     this.setState({
    //         products: [
    //             { id: 1, name: 'React', price: '120 $' },
    //             { id: 2, name: 'Vue', price: '120 $' },
    //             { id: 3, name: 'JavaScript', price: '100 $' }
    //         ]
    //     })
    // }

    removeHandler(id) {
        // `this` keyword is undefined
        //  To solve this problem, we must bind `this` keyword in the constructor
        //  Or using arrow function instead.
        const filteredProducts = this.state.products.filter(product => product.id !== id);
        this.setState({
            products: filteredProducts
        })
    }

    decreamentHandler(id) {
        const products = this.state.products;
        const findedProduct = products.find(product => product.id === id);
        if (findedProduct.quantity === 1) {
            this.removeHandler(id);
            return
        }
        findedProduct.quantity--;
        this.setState({
            products
        })
    }

    increamentHandler(id) {
        const products = this.state.products;
        const findedProduct = products.find(product => product.id === id);
        findedProduct.quantity++;
        this.setState({
            products
        })
    }

    render() {
        return (
            // Use fragment instead container tag
            // Fragment not displaying as a tag
            <Fragment>
                {/* <div> */}
                <h1>Products</h1>
                {/* Raising Event: Pass a function into a component; and then, when the component handles an event, it simply calls the function handler*/}
                {/* Raising Event must be use where is states. */}
                {this.state.products.map(product => <Product product={product} key={product.id} onRemove={() => this.removeHandler(product.id)} onDecreament={() => this.decreamentHandler(product.id)} onIncreament={() => this.increamentHandler(product.id)} />)}
                {/* Pass argument to event */}
                {/* 1. Using bind method */}
                {/* 2. Using arrow function */}
                {/* <button onClick={this.changePriceHandler.bind(this, 72)}>Change price</button> */}
                {/* <Product name="Odoo framework" price="120" key="87451" removeHandler={() => this.removeHandler("87451")} >
                    <p>discount: 15%</p>
                </Product> */}
                {/* </div> */}
            </Fragment>
        );
    }
}

export default Products;