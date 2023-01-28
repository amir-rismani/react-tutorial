import React, { Component } from 'react';

class RegularComponent extends Component {
    render() { 
        console.log('Regular Component');        
        return (
            <div>
                This is a Regular Component - Your name is: {this.props.name}
            </div>
        );
    }
}
 
export default RegularComponent;