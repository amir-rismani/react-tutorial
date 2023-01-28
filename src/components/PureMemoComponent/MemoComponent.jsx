import React from 'react';

const MemoComponent = ({name}) => {
    console.log('Memo Component');
    return ( 
        <div>This is a Memo Component - Your name is: {name}</div>
    );
}
 
export default React.memo(MemoComponent);