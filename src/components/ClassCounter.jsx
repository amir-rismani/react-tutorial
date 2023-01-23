import { Component } from "react";

class ClassCounter extends Component {
    state = {
        name: "",
        count: 0
    }

    componentDidMount() {
        document.title = `Click: ${this.state.count} times.`;
    }

    componentDidUpdate(prevProps, prevState) {
        // Based on count state chenges
        if (prevState.count !== this.state.count) {
            console.log("Document title updating...");
            document.title = `Click: ${this.state.count} times.`;
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount...");
    }

    render() {
        return (
            <div>
                <p>Name: <input onChange={(event) => this.setState({ name: event.target.value })} /></p>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add One</button>
            </div>
        )
    }
}

export default ClassCounter;