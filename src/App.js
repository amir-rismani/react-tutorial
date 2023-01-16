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
        const products = [...this.state.products];
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

    increamentHandler = (id) => {
        const products = [...this.state.products];
        const findedProduct = products.find(product => product.id === id);
        findedProduct.quantity++;
        this.setState({
            products
        })
    }

    changeHandler = (event, id) => {
        const products = [...this.state.products];
        const findedProduct = products.find(product => product.id === id);
        findedProduct.name = event.target.value;
        this.setState({ products })
    }


    render() {
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