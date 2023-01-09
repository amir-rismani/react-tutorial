import { Component } from "react";
import ClassCounter from "./components/Counter/ClassCounter";
import HookCounter from "./components/Counter/HookCounter";
// import Products from "./components/Products/Products";
// Class base component
class App extends Component {
    render() {
        return (
            <div>
                {/* <Products /> */}
                {/* <HookCounter /> */}
                <ClassCounter />
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