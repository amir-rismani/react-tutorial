import { Component } from "react";
import ClassCounter from "./components/ClassCounter";
import HookArray from "./components/HookArray";
import HookCounter from "./components/HookCounter";
import HookObject from "./components/HookObject";
import Products from "./components/Products/Products";
// import "./App.css"
import styles from "./App.module.css"
// Class base component
class App extends Component {
    render() {
        return (
            // <div className="container">
            <div className={styles.container}>
                <Products />
                {/* <Hook Counter /> */}
                {/* <ClassCounter /> */}
                {/* <HookObject /> */}
                {/* <HookArray /> */}
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