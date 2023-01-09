import { Component } from "react";
import HookCounter from "./components/Counter/HookCounter";
// import Products from "./components/Products/Products";
// Class base component
class App extends Component {
    render() {
        return (
            <div>
                {/* <Products /> */}
                <HookCounter />
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
//         </div>
//     );
// }

export default App;