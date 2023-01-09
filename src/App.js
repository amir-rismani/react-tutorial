import { Component } from "react";
import Products from "./components/Products/Products";
// Class base component
class App extends Component {
    render() {
        return (
            <div>
                <Products />
            </div>
        );
    }
}

// Function base component
// const App = () => {
//     return (
//         <div>
//             <Products />
//         </div>
//     );
// }

export default App;