import React, { PureComponent } from 'react';
// PureComponent is similar to Component but it skips re-renders for same props and state
class InheritedPureComponent extends PureComponent {
    render() { 
        console.log('Pure Component');        
        return (
            <div>
                This is a Pure Component - Your name is: {this.props.name}
            </div>
        );
    }
}
 
export default InheritedPureComponent;