import { Component } from "react";

class ClassCounter extends Component {
    state = {
        count: 0
    }

    addOneCounterHandler = () => {
        // Use callback function as setState's parameter -
        // Because new count depends on previous count.
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.addOneCounterHandler}>Add One</button>
            </div>
        )
    }
}

export default ClassCounter;