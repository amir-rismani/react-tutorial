import { Component } from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookObject from "./components/HookObject";
import Products from "./components/Products/Products";
// Class base component
class App extends Component {
    render() {
        return (
            <div>
                {/* <Products /> */}
                {/* <Hook Counter /> */}
                {/* <ClassCounter /> */}
                <HookObject />
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