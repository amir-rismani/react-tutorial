import { Component } from "react";
import ClassCounter from "./components/ClassCounter";
import HookArray from "./components/HookArray";
import HookCounter from "./components/HookCounter";
import HookObject from "./components/HookObject";
import Products from "./components/Products/Products";
// import "./App.css"
import styles from "./App.module.css"
import NavBar from "./components/NavBar/NavBar";
// Class base component
class App extends Component {


    // React class component lifcycle
    // 1st method lifecycle - Mounting
    constructor(props) {
        super(props);
        console.log("App.js constractor.");
    }

    // 3th method lifecycle - Mounting
    componentDidMount() {
        console.log("App.js componentDidMount.");
        // Suitable for sending http requests
    }

    // Lifting State Up
    // Often, several components need to reflect the same changing data.
    // lifting the shared state up to their closest common ancestor.
    state = {
        products: [
            { id: 1, name: 'React', price: '99 $', quantity: 12 },
            { id: 2, name: 'Vue', price: '99 $', quantity: 8 },
            { id: 3, name: 'JavaScript', price: '90 $', quantity: 4 }
        ]
    }

    removeHandler = (id) => {
        // `this` keyword is undefined
        //  To solve this problem, we must bind `this` keyword in the constructor
        //  Or using arrow function instead.
        const filteredProducts = this.state.products.filter(product => product.id !== id);
        this.setState({
            products: filteredProducts
        })
    }

    decreamentHandler = (id) => {
        // This approach in false. because this mutating state.

        // const products = [...this.state.products];
        // const findedProduct = products.find(product => product.id === id);
        // if (findedProduct.quantity === 1) {
        //     this.removeHandler(id);
        //     return
        // }
        // findedProduct.quantity--;
        // this.setState({
        //     products
        // })

        const index = this.state.products.findIndex(product => product.id === id);
        const product = { ...this.state.products[index] };
        if (product.quantity === 1) {
            this.removeHandler(id);
            return
        }
        product.quantity--;
        const products = [...this.state.products];
        products[index] = product;
        this.setState({ products });
    }

    increamentHandler = (id) => {
        // This approach in false. because this mutating state.

        // const products = [...this.state.products];
        // const findedProduct = products.find(product => product.id === id);
        // findedProduct.quantity++;
        // this.setState({
        //     products
        // })

        // This approach is true.
        // 1. Find index item on state.
        const index = this.state.products.findIndex(product => product.id === id);

        // 2. Clone product item on state and increament quantity.
        const product = { ...this.state.products[index] };
        product.quantity++;

        // 3. Clone products on state and replace changed product.
        const products = [...this.state.products];
        products[index] = product;

        // 4. Update state.
        this.setState({ products });
    }

    changeHandler = (event, id) => {
        // This approach in false. because this mutating state.

        // const products = [...this.state.products];
        // const findedProduct = products.find(product => product.id === id);
        // findedProduct.name = event.target.value;
        const index = this.state.products.findIndex(product => product.id === id);
        const product = { ...this.state.products[index] };
        product.name = event.target.value;
        const products = [...this.state.products];
        products[index] = product;
        this.setState({ products });
    }


    // 2nd method lifecycle - Mounting && Updating
    render() {
        console.log('App.js render.')
        return (
            <div>
                <NavBar totalItems={this.state.products.length} />
                <div className={styles.container}>
                    <Products
                        products={this.state.products}
                        onRemove={this.removeHandler}
                        onDecreament={this.decreamentHandler}
                        onIncreament={this.increamentHandler}
                        onChange={this.changeHandler}
                    />
                    {/* <Hook Counter /> */}
                    {/* <ClassCounter /> */}
                    {/* <HookObject /> */}
                    {/* <HookArray /> */}
                </div>
            </div>
        );
    }

    // 1st method lifecycle - Updating
    shouldComponentUpdate(nextProps, nextState) {
        console.log('App.js shouldComponentUpdate.')
        return true
    }

    // 3th method lifecycle - Updating
    componentDidUpdate(prevProps, prevState) {
        console.log('App.js componentDidUpdate.')
        console.log('App.js', prevState)
    }

}

// Function base component
// const App = () => {
//     return (
//         <div>
//             <Products />
//             <HookCounter />
//             <ClassCounter />
//         </div>
//     );
// }

export default App;