import React, { Component } from 'react';
class ClassTimer extends Component {
    state = { count: 0 } 
    componentDidMount() {
        this.counterInterval = setInterval(() => {
            this.setState({count: this.state.count+1});
            console.log('interval run!');
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.counterInterval)
    }
    render() { 
        return (
            <div>Class Timer</div>
        );
    }
}
 
export default ClassTimer;