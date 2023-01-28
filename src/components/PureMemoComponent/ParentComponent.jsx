import React, { Component } from 'react';
import MemoComponent from './MemoComponent';
import InheritedPureComponent from './PureComponent';
import RegularComponent from './RegularComponent';
class ParentComponent extends Component {
    state = { 
        name: "Amir"
    } 
    componentDidMount() {
        setInterval(() => {
            this.setState({name:"Amir"})
        }, 1000);
    }
    render() { 
        console.log('Parent Component');
        return (
            <div>
                <RegularComponent name={this.state.name}/>
                {/* <InheritedPureComponent name={this.state.name}/> */}
                <MemoComponent name={this.state.name}/>
            </div>
        );
    }
}
 
export default ParentComponent;